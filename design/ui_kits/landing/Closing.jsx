const {Card,Badge,Button,Stat}=window.TideDesignSystem_f6b246;
const {Sec,Wordmark,Bento}=window;
function Parameters(){
const tiles=[["Max LTV","50%","borrow against tideVARA"],["Liq. threshold","65%","price band before seizure"],["Liq. penalty","8%","bounty + insurance fund"],["Utilization kink","80%","rate curve turns steep"],["Buffer target","5–10%","of staked TVL, instant exits"],["Reward fee","10%","of era rewards"]];
return <Sec id="security" eyebrow="Risk, stated plainly" title="Conservative by design." sub="VARA is a young, low-liquidity asset. Parameters start tight — you can loosen later; you can't un-lose bad debt.">
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18,marginTop:44}}>
{tiles.map(([k,v,s])=><Bento key={k} pad={22}><div style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"var(--ls-caps)",textTransform:"uppercase",color:"var(--text-3)"}}>{k}</div><div style={{fontFamily:"var(--font-mono)",fontWeight:500,fontSize:28,margin:"7px 0 3px",color:"var(--tide-300)"}}>{v}</div><div style={{fontSize:12.5,color:"var(--text-3)"}}>{s}</div></Bento>)}
</div>
<Bento pad={30} style={{marginTop:18}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:28}}>
{[["Insurance first","10–15% of borrow interest fills the insurance fund before the treasury sees a token. It backstops slashes and bad debt."],["Slash defer: 7 days","Vara defers slashes for a week — a governance window for the fund to react before anything applies."],["Curated validators","Nominations spread across a screened set — commission, uptime, slash history. Never nominate blind."]].map(([t,d])=><div key={t}><div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:17}}>{t}</div><p style={{fontSize:13.5,color:"var(--text-2)",marginTop:7,lineHeight:1.6}}>{d}</p></div>)}
</div></Bento></Sec>;}
function FAQ(){
const qs=[["Why tideVARA and not stVARA?","Nobody “stakes” USDT — st would be a lie on the stable side. One brand prefix truthfully means “Tide's yield-bearing receipt” for every asset, and every token in every wallet is an ad for the protocol. gVARA and wVARA are already taken on Vara anyway."],
["Where does the stable yield actually come from?","Borrow interest. Each vault lends into an isolated market where tideVARA is the only collateral. Borrowers are leverage stakers amplifying staking yield — they pay the interest your share price accrues."],
["What happens if VARA's price drops fast?","Positions crossing the 65% liquidation threshold are repaid by liquidators who seize tideVARA at an 8% discount. Bad debt occurs only if price gaps through the band faster than bots act — which is why LTV starts at a conservative 50%."],
["Why doesn't my balance go up?","tideVARA is non-rebasing: your balance is fixed and the redemption rate rises instead. Rebasing tokens break DEX pools, bridges and lending markets; a rising rate composes with everything."],
["I hold less than 50 VARA. Can I stake?","Yes — 50 VARA is Vara's minimum nomination, so the protocol pools below-minimum deposits and nominates them together. That's the point."]];
return <Sec id="faq" eyebrow="FAQ" title="Fair questions.">
<div style={{maxWidth:760,marginTop:28}}>
{qs.map(([q,a])=><details className="ld-faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}
</div></Sec>;}
function CTABand(){
return <div style={{maxWidth:1160,margin:"96px auto 0",padding:"0 32px"}}>
<Bento style={{textAlign:"center"}}>
<div style={{position:"absolute",inset:0,backgroundImage:"var(--dot-grid)",backgroundSize:"var(--dot-grid-size)",maskImage:"radial-gradient(560px 260px at 50% 110%,#000,transparent)",WebkitMaskImage:"radial-gradient(560px 260px at 50% 110%,#000,transparent)"}}/>
<div style={{position:"absolute",left:"50%",bottom:-160,transform:"translateX(-50%)",width:700,height:340,background:"radial-gradient(closest-side,rgba(139,140,255,.24),transparent)",filter:"blur(14px)"}}/>
<div style={{position:"relative",padding:"76px 32px 80px"}}>
<h2 style={{fontSize:"var(--fs-h2)",fontWeight:600,letterSpacing:"var(--ls-display)"}}>Put your VARA to work.</h2>
<p style={{fontSize:16,color:"var(--text-2)",margin:"14px auto 0",maxWidth:"52ch",lineHeight:1.65}}>Stake in one transaction. Exit instantly or unbond natively. The rate does the rest.</p>
<div style={{display:"flex",gap:12,justifyContent:"center",marginTop:30}}>
<Button size="xl" href="../app/index.html">Launch app</Button>
<Button size="xl" variant="ghost">Read the docs</Button>
</div></div></Bento></div>;}
function Footer(){
const col=(t,ls)=><div key={t}><div style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"var(--ls-caps)",textTransform:"uppercase",color:"var(--text-3)",marginBottom:14}}>{t}</div><div style={{display:"flex",flexDirection:"column",gap:10}}>{ls.map(l=><a key={l} className="ld-link" href="#top" style={{fontSize:13.5}}>{l}</a>)}</div></div>;
return <footer style={{marginTop:96,background:"var(--bg-deep)",borderTop:"1px solid var(--line-1)"}}>
<div style={{maxWidth:1160,margin:"0 auto",padding:"56px 32px 36px"}}>
<div style={{display:"grid",gridTemplateColumns:"1.6fr 1fr 1fr 1fr",gap:32}}>
<div><Wordmark size={26}/><p style={{fontSize:13.5,color:"var(--text-3)",marginTop:12,maxWidth:"34ch",lineHeight:1.6}}>Liquid staking and stable yield on Vara Network. Two sides, one engine.</p></div>
{col("Protocol",["Stake","Vaults","Analytics","Insurance fund"])}
{col("Resources",["Docs","Audits","GitHub","Brand"])}
{col("Community",["X","Discord","Telegram","Governance"])}
</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:44,paddingTop:20,borderTop:"1px solid var(--line-1)",fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-3)",flexWrap:"wrap",gap:10}}>
<span>tideVARA · vara1qxt…8k2e</span>
<span>Figures shown are illustrative. Staking involves slashing and liquidation risk.</span>
<span>© 2026 Tide Labs · Built on Vara</span>
</div></div></footer>;}
Object.assign(window,{Parameters,FAQ,CTABand,Footer});
