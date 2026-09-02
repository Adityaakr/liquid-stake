const {Badge,Stat,Meter,Button,TokenBadge,TokenIcon,AmountField,Dialog}=window.TideDesignSystem_f6b246;
const {APP,fmt,Row,ABento,Eyebrow}=window;
function VaultCard({sym,apy,tvl,util,share,since,bal,setBal,notify,connected,onConnect}){
const[open,setOpen]=React.useState(false);const[amt,setAmt]=React.useState("");
const dep="w"+sym,rec="tide"+sym;const a=parseFloat(amt)||0;const can=a>0&&a<=bal[dep];
const doDep=()=>{if(!connected){onConnect();setOpen(false);return;}
setBal(b=>({...b,[dep]:b[dep]-a,[rec]:b[rec]+a/share}));notify({tone:"ok",title:"Deposited "+fmt(a)+" "+dep,detail:"You hold "+fmt(a/share)+" "+rec+" · interest accrues to share price."});setOpen(false);setAmt("");};
return <ABento pad={26}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<TokenBadge token={rec} size={38} sub={"deposit "+dep}/>
<Badge tone={util<80?"ok":"warn"} size="sm" dot>{util<80?"healthy":"near kink"}</Badge></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14,margin:"22px 0 16px"}}>
<Stat label="Deposit APY" value={apy+"%"} size="sm" gradient/>
<Stat label="Vault TVL" value={tvl} size="sm"/>
<Stat label="Share price" value={share.toFixed(4)} size="sm" mono/>
</div>
<Meter label="Utilization" value={util} marker={80} tone={util<80?"grad":"danger"}/>
<div style={{margin:"12px 0 20px"}}>
<Row k="Collateral accepted" v="tideVARA only"/>
</div>
<div style={{marginTop:"auto"}}><Button block size="lg" onClick={()=>setOpen(true)}>Deposit {dep}</Button></div>
<Dialog open={open} onClose={()=>setOpen(false)} title={"Deposit "+dep} footer={<><Button variant="ghost" onClick={()=>setOpen(false)}>Cancel</Button><Button disabled={connected&&!can} onClick={doDep}>{connected?"Confirm deposit":"Connect wallet"}</Button></>}>
<AmountField label="You deposit" token={dep} balance={fmt(bal[dep])} value={amt} onChange={setAmt} onMax={()=>setAmt(String(bal[dep]))} fiat={a?("→ "+fmt(a/share)+" "+rec):""} hint={"APY "+apy+"%"}/>
</Dialog>
</ABento>;}
function FlowChip({tok,label}){return <span style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(33,28,48,.9)",border:"1px solid rgba(163,164,255,.3)",borderRadius:99,padding:"8px 14px 8px 9px",whiteSpace:"nowrap"}}>{tok?<TokenIcon token={tok} size={20}/>:null}<span style={{fontSize:12.5,fontWeight:500,color:"var(--text-1)"}}>{label}</span></span>;}
function Arrow(){return <i data-lucide="chevron-right" style={{width:15,height:15,color:"var(--tide-400)",opacity:.85,flexShrink:0}}/>;}
function VaultsView(props){
return <div style={{display:"flex",flexDirection:"column",gap:20}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,alignItems:"stretch"}}>
<VaultCard sym="USDT" apy={APP.vaultApy.USDT} tvl="$4.2M" util={72} share={1.0261} since="2.61" {...props}/>
<VaultCard sym="USDC" apy={APP.vaultApy.USDC} tvl="$2.8M" util={64} share={1.0193} since="1.93" {...props}/>
</div>
<ABento pad={26}>
<div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:24,alignItems:"center"}}>
<div>
<div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:20}}>Where the yield comes from</div>
<div style={{display:"flex",alignItems:"center",gap:10,margin:"16px 0 14px",flexWrap:"wrap"}}>
<FlowChip tok="tideVARA" label="tideVARA collateral"/><Arrow/>
<FlowChip label="loopers borrow stables"/><Arrow/>
<FlowChip label="interest accrues"/><Arrow/>
<FlowChip tok="tideUSDT" label="share price rises"/>
</div>
<div style={{display:"flex",gap:8,marginTop:2,flexWrap:"wrap"}}>
{["max LTV 50%","liq. threshold 65%","penalty 8%","kink 80%"].map(t=><span key={t} style={{fontFamily:"var(--font-mono)",fontSize:10.5,letterSpacing:".05em",color:"var(--text-3)",border:"1px solid var(--line-1)",borderRadius:99,padding:"4px 10px"}}>{t}</span>)}
</div></div>
<Button variant="secondary" onClick={()=>props.notify({tone:"info",title:"Borrowing opens in v1.1",detail:"Loop tideVARA → stables → VARA from a single screen."})}>Borrow against tideVARA</Button>
</div></ABento>
</div>;}
Object.assign(window,{VaultsView});
