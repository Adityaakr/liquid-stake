import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { StoreProvider } from '@/chain/store';
import { MockAdapter } from '@/chain/mockAdapter';
import { LandingPage } from '@/landing/LandingPage';
import { AppLayout } from '@/app/AppLayout';
import { StakePage } from '@/app/StakePage';
import { PortfolioPage } from '@/app/PortfolioPage';
import { VaultsPage } from '@/app/VaultsPage';
import { Outlet } from 'react-router';

function mount(path: string, adapter = new MockAdapter('testnet', { latencyMs: 0, storage: false })) {
  const router = createMemoryRouter(
    [
      {
        element: <StoreProvider adapter={adapter}><Outlet /></StoreProvider>,
        children: [
          { path: '/', element: <LandingPage /> },
          { path: '/app', element: <AppLayout />, children: [{ index: true, element: <StakePage /> }, { path: 'vaults', element: <VaultsPage /> }, { path: 'portfolio', element: <PortfolioPage /> }] },
        ],
      },
    ],
    { initialEntries: [path] },
  );
  return render(<RouterProvider router={router} />);
}

beforeEach(() => { localStorage.clear(); });

async function connectDemo(user: ReturnType<typeof userEvent.setup>) {
  await user.click((await screen.findAllByRole('button', { name: 'Connect wallet' }))[0]);
  await user.click(screen.getByRole('button', { name: 'Use a demo account' }));
}

describe('landing', () => {
  it('renders every section of the kit', () => {
    mount('/');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/One stake, endless/);
    for (const h of ['Everything you need to', 'Every loop feeds the next.', 'One prefix. Every receipt.', 'Two ways out. Always.', 'Conservative by design.', 'Fair questions.', 'Put your VARA to work.']) {
      expect(screen.getByRole('heading', { level: 2, name: new RegExp(h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) })).toBeInTheDocument();
    }
    expect(screen.getAllByRole('link', { name: /Go to stake/ })[0]).toHaveAttribute('href', '/app');
    expect(screen.getAllByText(/kVARA/).length).toBeGreaterThan(3);
  });
});

describe('app', () => {
  it('stake flow: connect demo, enter amount, stake, see position', async () => {
    const user = userEvent.setup();
    mount('/app');
    await waitFor(() => expect(screen.getByText(/1 kVARA =/)).toHaveTextContent(/1\.0482/));
    await connectDemo(user);
    await waitFor(() => expect(screen.getByText(/Wallet balance/).parentElement).toHaveTextContent('1,240.52 VARA'));
    const input = screen.getByRole('textbox', { name: 'You stake' });
    await user.type(input, '100');
    expect(screen.getByText(/You receive/).parentElement).toHaveTextContent('95.40 kVARA');
    await user.click(screen.getByRole('button', { name: 'Stake' }));
    await waitFor(() => expect(screen.getByText(/Staked 100.00 VARA/)).toBeInTheDocument());
    expect(screen.getByText('Position').parentElement).toHaveTextContent('95.40 kVARA');
    expect(screen.getByText(/Wallet balance/).parentElement).toHaveTextContent('1,140.52 VARA');
  });

  it('rejects an amount above balance and shows the reason', async () => {
    const user = userEvent.setup();
    mount('/app');
    await connectDemo(user);
    await screen.findByText('1,240.52 VARA', { exact: false });
    await user.type(screen.getByRole('textbox', { name: 'You stake' }), '5000');
    expect(screen.getByText('Not enough balance')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Stake' })).toBeDisabled();
  });

  it('unstake instant shows the fee and native shows 7 day copy', async () => {
    const user = userEvent.setup();
    const adapter = new MockAdapter('testnet', { latencyMs: 0, storage: false });
    mount('/app', adapter);
    await connectDemo(user);
    await screen.findByText('1,240.52 VARA', { exact: false });
    await user.type(screen.getByRole('textbox', { name: 'You stake' }), '100');
    await user.click(screen.getByRole('button', { name: 'Stake' }));
    await screen.findByText(/Staked 100.00 VARA/);
    await user.click(screen.getByRole('tab', { name: 'Unstake' }));
    await user.type(screen.getByRole('textbox', { name: 'You unstake' }), '10');
    expect(screen.getByText(/fee 0\.0314 VARA/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Native unbond/ }));
    await user.click(screen.getByRole('button', { name: 'Start unbond' }));
    await screen.findByText(/Unbond started/);
  });

  it('portfolio empty state and vaults render', async () => {
    mount('/app/portfolio');
    expect(await screen.findByText(/Connect a wallet to see your positions/)).toBeInTheDocument();
    mount('/app/vaults');
    expect((await screen.findAllByText(/Deposit APY/)).length).toBe(2);
  });
});
