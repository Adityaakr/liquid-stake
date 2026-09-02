const {Button,Badge}=window.TideDesignSystem_f6b246;
const APP={rate:1.0482,stakeApy:14.2,vaultApy:{USDT:8.4,USDC:7.9},tvl:"$12.4M",buffer:7.2,eraEnds:"6h 32m",era:"4,182",
wallet:"vara1qxt…8k2e",balances:{VARA:1240.52,tideVARA:0,wUSDT:500,wUSDC:0,tideUSDT:0,tideUSDC:0},price:0.052};
const fmt=(n,d=2)=>Number(n).toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d});
const usd=n=>"$"+fmt(n*APP.price);
function ABento({children,pad=22,style,...rest}){
return <div style={{position:"relative",borderRadius:24,border:"1px solid rgba(163,164,255,.16)",background:"linear-gradient(180deg,rgba(139,140,255,.09),rgba(28,23,41,.4) 60%,rgba(23,18,33,.2))",boxShadow:"inset 0 1px 0 rgba(255,255,255,.05), 0 26px 60px -28px rgba(0,0,0,.7)",overflow:"hidden",...style}} {...rest}>
<div className="ap-stars"/><div style={{position:"relative",padding:pad,height:"100%",display:"flex",flexDirection:"column"}}>{children}</div></div>;}
function Eyebrow({children,style}){return <div style={{fontFamily:"var(--font-mono)",fontSize:10.5,letterSpacing:"var(--ls-caps)",textTransform:"uppercase",color:"var(--text-3)",...style}}>{children}</div>;}
function GlowBar({pct,height=6}){return <div style={{position:"relative",height,background:"var(--ink-700)",borderRadius:99,overflow:"hidden"}}><div style={{width:pct+"%",height:"100%",borderRadius:99,background:"var(--grad-tide)",boxShadow:"0 0 12px rgba(163,164,255,.7)"}}/></div>;}
function NavItem({icon,label,active,onClick}){
return <button onClick={onClick} className={active?undefined:"ap-nav"} style={{display:"flex",alignItems:"center",gap:11,width:"100%",height:42,padding:"0 13px",border:"1px solid "+(active?"rgba(163,164,255,.45)":"transparent"),borderRadius:12,cursor:"pointer",textAlign:"left",fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,transition:"all var(--dur-1) var(--ease-out)",background:active?"linear-gradient(90deg,rgba(139,140,255,.28),rgba(139,140,255,.08))":"transparent",color:active?"var(--text-1)":"var(--text-2)",boxShadow:active?"0 0 22px rgba(139,140,255,.25), inset 0 1px 0 rgba(255,255,255,.08)":"none"}}>
<i data-lucide={icon} style={{width:17,height:17,color:active?"var(--tide-300)":"currentColor"}}/>{label}</button>;}
function Sidebar({view,setView}){
return <aside style={{width:236,minWidth:236,borderRight:"1px solid var(--line-1)",background:"linear-gradient(180deg,rgba(33,28,48,.6),var(--bg-deep) 30%)",display:"flex",flexDirection:"column",padding:"22px 14px"}}>
<div style={{display:"flex",alignItems:"center",gap:10,padding:"0 12px",marginBottom:28}}>
<a href="../landing/index.html" style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:24,letterSpacing:"-0.02em",color:"var(--text-1)",textDecoration:"none"}}>tide</a>
<Badge size="sm" mono>app</Badge></div>
<div style={{display:"flex",flexDirection:"column",gap:4}}>
<NavItem icon="droplets" label="Stake" active={view==="stake"} onClick={()=>setView("stake")}/>
<NavItem icon="vault" label="Vaults" active={view==="vaults"} onClick={()=>setView("vaults")}/>
<NavItem icon="wallet" label="Portfolio" active={view==="portfolio"} onClick={()=>setView("portfolio")}/>
</div>
<Eyebrow style={{margin:"24px 13px 8px"}}>Resources</Eyebrow>
<div style={{display:"flex",flexDirection:"column",gap:4}}>
<NavItem icon="book-open" label="Docs"/>
<NavItem icon="shield-check" label="Audits"/>
<NavItem icon="arrow-left" label="Back to site" onClick={()=>{window.location.href="../landing/index.html";}}/>
</div>
<div style={{marginTop:"auto"}}><ABento pad={14}>
<div style={{display:"flex",alignItems:"center",gap:8,fontSize:12.5,color:"var(--text-1)",fontWeight:500}}><span style={{width:7,height:7,borderRadius:99,background:"var(--ok)",boxShadow:"0 0 10px var(--ok)"}}/>Vara · mainnet</div>
<div style={{margin:"10px 0 6px"}}><GlowBar pct={46} height={5}/></div>
<div style={{display:"flex",justifyContent:"space-between",fontFamily:"var(--font-mono)",fontSize:10.5,color:"var(--text-3)"}}><span>era {APP.era}</span><span>ends {APP.eraEnds}</span></div>
</ABento></div></aside>;}
function TopBar({title,sub,connected,onConnect}){
return <div style={{height:70,borderBottom:"1px solid var(--line-1)",display:"flex",alignItems:"center",gap:14,padding:"0 30px",position:"sticky",top:0,zIndex:40,background:"rgba(23,18,33,.72)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"}}>
<div><div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:19,letterSpacing:"var(--ls-heading)",lineHeight:1.2}}>{title}</div>{sub&&<div style={{fontSize:11.5,color:"var(--text-3)"}}>{sub}</div>}</div>
<span style={{marginLeft:"auto",fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-3)",border:"1px solid var(--line-2)",borderRadius:99,padding:"7px 13px",background:"rgba(33,28,48,.6)"}}>1 tideVARA = <span style={{color:"var(--tide-300)"}}>{APP.rate}</span> VARA</span>
{connected?<Badge tone="accent" mono dot>{APP.wallet}</Badge>:<Button size="md" onClick={onConnect}>Connect wallet</Button>}
</div>;}
Object.assign(window,{APP,fmt,usd,ABento,Eyebrow,GlowBar,Sidebar,TopBar});
