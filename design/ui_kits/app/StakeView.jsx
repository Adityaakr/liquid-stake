const {Badge,Tabs,AmountField,Button,TokenBadge}=window.TideDesignSystem_f6b246;
const {APP,fmt,usd,ABento,Eyebrow}=window;
function Row({k,v,accent,tip}){return <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",fontSize:13.5,borderTop:"1px solid var(--line-1)"}}><span style={{color:"var(--text-3)"}}>{k}</span><span style={{fontFamily:"var(--font-mono)",color:accent?"var(--tide-300)":"var(--text-1)"}}>{v}</span></div>;}
function IRow({icon,k,v,accent}){
return <div style={{display:"flex",alignItems:"center",gap:12,padding:"11px 0"}}>
<span style={{width:32,height:32,minWidth:32,borderRadius:99,background:"var(--surface-raised)",border:"1px solid var(--line-1)",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"var(--text-2)"}}><i data-lucide={icon} style={{width:14,height:14}}/></span>
<span style={{fontSize:14,color:"var(--text-2)"}}>{k}</span>
<span style={{marginLeft:"auto",fontFamily:"var(--font-mono)",fontSize:15,color:accent?"var(--tide-300)":"var(--text-1)"}}>{v}</span></div>;}
function ExitOption({title,sub,active,onClick}){
return <button onClick={onClick} style={{flex:1,textAlign:"left",cursor:"pointer",background:active?"var(--accent-soft)":"var(--surface-input)",border:"1px solid "+(active?"var(--accent-line)":"var(--line-2)"),borderRadius:12,padding:"11px 14px",transition:"all var(--dur-1) var(--ease-out)"}}>
<div style={{fontSize:13.5,fontWeight:600,color:active?"var(--tide-300)":"var(--text-1)",fontFamily:"var(--font-body)"}}>{title}</div>
<div style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-3)",marginTop:3}}>{sub}</div></button>;}
function StakeView({bal,setBal,notify,connected,onConnect}){
const[tab,setTab]=React.useState("Stake");
const[amt,setAmt]=React.useState("");
const[path,setPath]=React.useState("instant");
React.useEffect(()=>{if(window.lucide)lucide.createIcons();},[tab,path]);
const a=parseFloat(amt)||0;
const out=tab==="Stake"?a/APP.rate:(path==="instant"?a*APP.rate*0.997:a*APP.rate);
const can=a>0&&a<=(tab==="Stake"?bal.VARA:bal.tideVARA);
const act=()=>{if(!connected){onConnect();return;}
if(tab==="Stake"){setBal(b=>({...b,VARA:b.VARA-a,tideVARA:b.tideVARA+out}));notify({tone:"ok",title:"Staked "+fmt(a)+" VARA",detail:"You received "+fmt(out)+" tideVARA at rate "+APP.rate+"."});}
else if(path==="instant"){setBal(b=>({...b,tideVARA:b.tideVARA-a,VARA:b.VARA+out}));notify({tone:"ok",title:"Unstaked instantly",detail:fmt(out)+" VARA received · 0.3% fee applied."});}
else{setBal(b=>({...b,tideVARA:b.tideVARA-a,unbonding:(b.unbonding||0)+out}));notify({tone:"info",title:"Unbond started",detail:fmt(out)+" VARA claimable in 7 days at full rate."});}
setAmt("");};
return <div style={{display:"grid",gridTemplateColumns:"1fr 344px",gap:20,alignItems:"start"}}>
<div style={{display:"flex",flexDirection:"column",gap:14}}>
<div style={{display:"flex",alignItems:"center",gap:12,background:"var(--surface-card)",border:"1px solid var(--line-1)",borderRadius:16,padding:"12px 18px"}}>
<span style={{width:30,height:30,borderRadius:99,background:"var(--surface-raised)",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"var(--text-2)"}}><i data-lucide="wallet" style={{width:14,height:14}}/></span>
<span style={{fontSize:13.5,color:"var(--text-2)"}}>Wallet balance</span>
<span style={{marginLeft:"auto",fontFamily:"var(--font-mono)",fontSize:14}}>{fmt(bal.VARA)} VARA <span style={{color:"var(--text-3)"}}>( {usd(bal.VARA)} )</span></span>
</div>
<ABento pad={24}>
<Tabs items={["Stake","Unstake"]} active={tab} onChange={t=>{setTab(t);setAmt("");}}/>
<div style={{marginTop:16}}>
<AmountField label={tab==="Stake"?"You stake":"You unstake"} token={tab==="Stake"?"VARA":"tideVARA"} balance={fmt(tab==="Stake"?bal.VARA:bal.tideVARA)} value={amt} onChange={setAmt} onMax={()=>setAmt(String(tab==="Stake"?bal.VARA:bal.tideVARA))} fiat={a?("≈ "+usd(tab==="Stake"?a:a*APP.rate)):""}/>
</div>
{tab==="Unstake"&&<div style={{display:"flex",gap:10,marginTop:12}}>
<ExitOption title="Instant" sub="~0.3% fee · now" active={path==="instant"} onClick={()=>setPath("instant")}/>
<ExitOption title="Native unbond" sub="free · 7 days" active={path==="native"} onClick={()=>setPath("native")}/>
</div>}
<div style={{margin:"10px 0 14px"}}>
<IRow icon="pie-chart" k="Position" v={fmt(bal.tideVARA)+" tideVARA"}/>
<IRow icon="star" k="APY" v={APP.stakeApy+"%"} accent/>
<IRow icon="coins" k="You receive" v={fmt(out)+(tab==="Stake"?" tideVARA":" VARA")}/>
</div>
<Button size="xl" block disabled={connected&&!can} onClick={act}>{!connected?"Connect wallet":tab==="Stake"?"Stake":path==="instant"?"Unstake instantly":"Start unbond"}</Button>
</ABento>
</div>
<div style={{display:"flex",flexDirection:"column",gap:14}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
<div style={{borderRadius:20,background:"var(--tide-400)",padding:"18px 18px 20px",boxShadow:"0 18px 44px -18px rgba(163,164,255,.45)"}}>
<div style={{fontFamily:"var(--font-mono)",fontSize:10.5,letterSpacing:"var(--ls-caps)",textTransform:"uppercase",color:"rgba(27,23,38,.65)"}}>TVL</div>
<div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:27,color:"#1B1726",marginTop:6}}>{APP.tvl}</div>
</div>
<ABento pad={18}>
<Eyebrow>APY</Eyebrow>
<div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:27,marginTop:6,background:"var(--grad-text)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>{APP.stakeApy}%</div>
</ABento>
</div>
<ABento pad={20}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span style={{fontSize:15,fontWeight:600,fontFamily:"var(--font-display)"}}>Next compound</span>
<Badge size="sm" tone="info">era {APP.era}</Badge></div>
<div style={{display:"flex",alignItems:"baseline",gap:8,marginTop:10}}>
<span style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:25}}>{APP.eraEnds}</span>
<span style={{fontFamily:"var(--font-mono)",fontSize:11.5,color:"var(--text-3)"}}>rate {APP.rate}</span></div>
<div style={{position:"relative",margin:"26px 4px 6px"}}>
<div style={{position:"absolute",left:0,right:0,top:5,height:2,background:"var(--ink-700)",borderRadius:2}}/>
<div style={{display:"flex",justifyContent:"space-between",position:"relative"}}>
{[["4,179","1.0471",0],["4,180","1.0476",0],["4,181","1.0482",1]].map(([e,r,hot])=><div key={e} style={{textAlign:"center",position:"relative"}}>
{hot?<span style={{position:"absolute",left:"50%",transform:"translateX(-50%)",top:-26,fontFamily:"var(--font-mono)",fontSize:10.5,background:"var(--surface-raised)",border:"1px solid var(--accent-line)",borderRadius:7,padding:"2px 7px",color:"var(--tide-300)",whiteSpace:"nowrap"}}>{r}</span>:null}
<div style={{width:12,height:12,borderRadius:99,margin:"0 auto",background:hot?"var(--tide-400)":"var(--ink-600)",boxShadow:hot?"0 0 12px rgba(163,164,255,.9)":"none",border:"2px solid var(--ink-800)"}}/>
<div style={{fontFamily:"var(--font-mono)",fontSize:10,color:"var(--text-3)",marginTop:7}}>era {e}</div>
</div>)}
</div></div>
</ABento>
</div></div>;}
Object.assign(window,{StakeView,Row});
