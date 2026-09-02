const {Badge,Stat,TokenBadge,Button}=window.TideDesignSystem_f6b246;
const {APP,fmt,usd,ABento,Eyebrow}=window;
function PortfolioView({bal,setView}){
const stakedV=bal.tideVARA*APP.rate;
const stableV=(bal.tideUSDT*1.0261+bal.tideUSDC*1.0193);
const totalUsd=stakedV*APP.price+stableV+(bal.unbonding||0)*APP.price;
const rows=[
{tok:"tideVARA",amt:bal.tideVARA,rate:APP.rate,val:usd(stakedV),apy:APP.stakeApy+"%",status:["accent","earning"]},
{tok:"tideUSDT",amt:bal.tideUSDT,rate:1.0261,val:"$"+fmt(bal.tideUSDT*1.0261),apy:APP.vaultApy.USDT+"%",status:["ok","accruing"]},
{tok:"tideUSDC",amt:bal.tideUSDC,rate:1.0193,val:"$"+fmt(bal.tideUSDC*1.0193),apy:APP.vaultApy.USDC+"%",status:["ok","accruing"]},
].filter(r=>r.amt>0);
return <div style={{display:"flex",flexDirection:"column",gap:20}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
<ABento pad={20}><Stat label="Total value" value={"$"+fmt(totalUsd)} size="sm" gradient/></ABento>
<ABento pad={20}><Stat label="Staked" value={fmt(bal.tideVARA)+" tideVARA"} size="sm" mono sub={"≈ "+fmt(stakedV)+" VARA"}/></ABento>
<ABento pad={20}><Stat label="In vaults" value={"$"+fmt(stableV)} size="sm" mono/></ABento>
<ABento pad={20}><Stat label="Unbonding" value={fmt(bal.unbonding||0)+" VARA"} size="sm" mono sub={bal.unbonding?"claimable in 6d 23h":"—"}/></ABento>
</div>
<ABento pad={0}>
<div style={{padding:"20px 26px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:18}}>Positions</span>
<Badge size="sm" mono>{rows.length} active</Badge></div>
{rows.length===0?<div style={{padding:"40px 24px 48px",textAlign:"center"}}>
<p style={{color:"var(--text-3)",fontSize:14}}>No positions yet — the rate can't rise for a balance of zero.</p>
<div style={{display:"flex",gap:10,justifyContent:"center",marginTop:18}}>
<Button size="md" onClick={()=>setView("stake")}>Stake VARA</Button>
<Button size="md" variant="secondary" onClick={()=>setView("vaults")}>Explore vaults</Button></div></div>
:<table style={{width:"100%",borderCollapse:"collapse"}}>
<thead><tr>{["Asset","Balance","Rate / share","Value","APY","Status"].map(h=><th key={h} style={{textAlign:"left",fontFamily:"var(--font-mono)",fontSize:10.5,letterSpacing:"var(--ls-caps)",textTransform:"uppercase",color:"var(--text-3)",fontWeight:500,padding:"10px 26px",borderBottom:"1px solid var(--line-2)"}}>{h}</th>)}</tr></thead>
<tbody>{rows.map(r=><tr key={r.tok} className="ap-row">
<td style={{padding:"14px 26px"}}><TokenBadge token={r.tok} size={30}/></td>
<td style={{padding:"14px 26px",fontFamily:"var(--font-mono)",fontSize:13.5}}>{fmt(r.amt)}</td>
<td style={{padding:"14px 26px",fontFamily:"var(--font-mono)",fontSize:13.5,color:"var(--text-2)"}}>{r.rate}</td>
<td style={{padding:"14px 26px",fontFamily:"var(--font-mono)",fontSize:13.5}}>{r.val}</td>
<td style={{padding:"14px 26px",fontFamily:"var(--font-mono)",fontSize:13.5,color:"var(--tide-300)"}}>{r.apy}</td>
<td style={{padding:"14px 26px"}}><Badge tone={r.status[0]} size="sm" dot>{r.status[1]}</Badge></td>
</tr>)}</tbody></table>}
{bal.unbonding>0&&<div style={{padding:"14px 26px",borderTop:"1px solid var(--line-1)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:10}}><Badge tone="info" dot size="sm">Unbonding</Badge><span style={{fontSize:13,color:"var(--text-2)"}}>{fmt(bal.unbonding)} VARA at full rate</span></div>
<span style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-3)"}}>claim in 6d 23h</span></div>}
</ABento>
<p style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-3)"}}>Balances are illustrative. Yield is embedded in rates — no claiming, ever.</p>
</div>;}
Object.assign(window,{PortfolioView});
