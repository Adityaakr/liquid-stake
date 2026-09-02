const {Card,Badge,Stat,TokenBadge,TokenIcon,Meter}=window.TideDesignSystem_f6b246;
function Sec({id,eyebrow,title,sub,children,right}){
return <section id={id} style={{maxWidth:1160,margin:"0 auto",padding:"104px 32px 0"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:40}}>
<div>
{eyebrow&&<div style={{fontFamily:"var(--font-mono)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-caps)",textTransform:"uppercase",color:"var(--tide-400)",marginBottom:14}}>{eyebrow}</div>}
{title&&<h2 style={{fontSize:46,fontWeight:600,letterSpacing:"var(--ls-display)",lineHeight:1.16,maxWidth:"18ch"}}>{title}</h2>}
{sub&&<p style={{fontSize:16,color:"var(--text-2)",maxWidth:"60ch",marginTop:16,lineHeight:1.65}}>{sub}</p>}
</div>
{right}
</div>
{children}
</section>;}
function DotPatch({style}){return <div style={{width:300,height:130,backgroundImage:"var(--dot-grid)",backgroundSize:"14px 14px",maskImage:"radial-gradient(closest-side,#000 30%,transparent)",WebkitMaskImage:"radial-gradient(closest-side,#000 30%,transparent)",flexShrink:0,...style}}/>;}
function Bento({children,pad=0,style}){
return <div style={{position:"relative",borderRadius:28,border:"1px solid rgba(163,164,255,.16)",background:"linear-gradient(180deg,rgba(139,140,255,.10),rgba(28,23,41,.35) 60%,rgba(23,18,33,.15))",boxShadow:"inset 0 1px 0 rgba(255,255,255,.05), 0 30px 70px -30px rgba(0,0,0,.7)",overflow:"hidden",...style}}>
<div className="ld-stars"/>
<div style={{position:"relative",height:"100%",padding:pad,display:"flex",flexDirection:"column"}}>{children}</div>
</div>;}
function BentoText({title,children,style}){return <div style={{...style}}><h3 style={{fontSize:27,fontWeight:600,letterSpacing:"var(--ls-heading)"}}>{title}</h3><p style={{fontSize:15,color:"var(--text-2)",marginTop:10,lineHeight:1.7,maxWidth:"46ch"}}>{children}</p></div>;}
function StatsBand(){
return <div style={{maxWidth:1160,margin:"0 auto",padding:"0 32px"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:22}}>
{[["VARA staked","8.6M+","across a curated validator set"],["tideVARA holders","12.4K+","wallets, pools and vaults"],["Paid to stakers","940K","VARA, compounded era by era"]].map(([l,v,s])=><Bento key={l} pad={34} style={{textAlign:"center"}}><Stat label={l} value={v} sub={s} gradient size="lg" align="center"/></Bento>)}
</div></div>;}
function Cube({size=54,style}){
const F=(pts,bg)=><div style={{position:"absolute",inset:0,clipPath:"polygon("+pts+")",background:bg}}/>;
return <div style={{position:"absolute",width:size,height:size*1.16,filter:"drop-shadow(0 8px 16px rgba(139,140,255,.35))",...style}}>
{F("50% 0,100% 25%,50% 50%,0 25%","linear-gradient(135deg,#FFFFFF,#C6C7FF)")}
{F("100% 25%,100% 75%,50% 100%,50% 50%","linear-gradient(180deg,#A3A4FF,#7576D8)")}
{F("0 25%,50% 50%,50% 100%,0 75%","linear-gradient(180deg,#8B8CFF,#6062C0)")}
</div>;}
function Vault(){
return <div style={{position:"absolute",left:196,top:16,width:252,height:316,filter:"drop-shadow(0 34px 54px rgba(0,0,0,.55)) drop-shadow(0 0 40px rgba(139,140,255,.25))"}}>
<div style={{position:"absolute",inset:0,borderRadius:32,background:"linear-gradient(180deg,#8B8CFF,#5F60C8)",boxShadow:"inset 0 2px 0 rgba(255,255,255,.22)"}}/>
<div style={{position:"absolute",right:-7,top:62,width:13,height:36,borderRadius:7,background:"#3A3568"}}/>
<div style={{position:"absolute",right:-7,bottom:62,width:13,height:36,borderRadius:7,background:"#3A3568"}}/>
<div style={{position:"absolute",inset:13,borderRadius:25,background:"linear-gradient(160deg,#9EA0FF,#6E6FD8)",border:"1px solid rgba(255,255,255,.14)",boxShadow:"inset 0 -14px 30px rgba(20,12,70,.45)"}}/>
<div style={{position:"absolute",left:38,top:38,width:66,height:22,borderRadius:99,background:"rgba(40,28,110,.5)"}}/>
<div style={{position:"absolute",left:30,top:154,width:50,height:16,borderRadius:99,background:"#4A448C",boxShadow:"inset 0 2px 3px rgba(0,0,0,.4), 0 1px 0 rgba(255,255,255,.15)"}}/>
<div style={{position:"absolute",right:44,top:140,width:66,height:66,borderRadius:99,background:"linear-gradient(180deg,#C6C7FF,#7778E0)",border:"5px solid #4A448C",boxShadow:"0 0 0 3px rgba(255,255,255,.07), inset 0 2px 4px rgba(255,255,255,.3)"}}>
<div style={{position:"absolute",inset:13,clipPath:"polygon(50% 0,61% 39%,100% 50%,61% 61%,50% 100%,39% 61%,0 50%,39% 39%)",background:"#2A2440"}}/>
</div></div>;}
const WIRE="rgba(154,130,255,.35)";
function StakeIllo(){
return <div style={{position:"relative",height:360,margin:"26px 0 10px"}}>
{[26,148,270].map(y=><div key={y} style={{position:"absolute",left:36,top:y,width:56,borderTop:"1.5px solid transparent"}}/>)}
<div style={{position:"absolute",left:96,top:57,width:56,borderTop:"1.5px solid "+WIRE}}/>
<div style={{position:"absolute",left:96,top:179,width:56,borderTop:"1.5px solid "+WIRE}}/>
<div style={{position:"absolute",left:96,top:301,width:56,borderTop:"1.5px solid "+WIRE}}/>
<div style={{position:"absolute",left:152,top:57,width:1.5,height:244,background:WIRE,borderRadius:2}}/>
<div style={{position:"absolute",left:152,top:178,width:46,borderTop:"1.5px solid "+WIRE}}/>
<Cube style={{left:36,top:26}}/><Cube style={{left:36,top:148}}/><Cube style={{left:36,top:270}}/>
<Vault/>
</div>;}
function MiniTile({token,style}){
return <div style={{position:"absolute",width:98,height:98,borderRadius:24,background:"linear-gradient(180deg,#2A2160,#151038)",border:"1.5px solid rgba(163,164,255,.5)",boxShadow:"0 0 28px rgba(139,140,255,.3), inset 0 1px 0 rgba(255,255,255,.08)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,...style}}>
<TokenIcon token={token} size={54} style={{filter:"drop-shadow(0 0 14px rgba(139,140,255,.5))"}}/>
</div>;}
function SwapIllo(){
return <div style={{position:"relative",height:210,margin:"6px 0 2px"}}>
<div style={{position:"absolute",left:0,right:0,top:66,borderTop:"1px solid rgba(163,164,255,.14)"}}/>
<div style={{position:"absolute",left:0,right:0,top:144,borderTop:"1px solid rgba(163,164,255,.14)"}}/>
{[88,104,120].map((y,i)=><div key={y} style={{position:"absolute",left:"42%",top:y,width:"16%",borderTop:"2px dashed rgba(163,164,255,.45)"}}/>)}
<span className="bd-streak" style={{left:"40%",top:95,"--d":"140px",width:52,animationDelay:".4s"}}/>
<span className="bd-streak" style={{left:"42%",top:127,"--d":"120px",width:44,animationDelay:"1.8s"}}/>
<MiniTile token="tideVARA" style={{left:"14%",top:56}}/>
<MiniTile token="VARA" style={{right:"14%",top:56}}/>
</div>;}
function BorrowIllo(){
const dash={width:44,borderTop:"2px dashed rgba(163,164,255,.5)"};
return <div style={{position:"relative",height:230,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14}}>
<div style={{position:"relative",width:352,height:132,borderRadius:99,background:"linear-gradient(180deg,#443D6E,#2A2440)",border:"1.5px solid rgba(163,164,255,.45)",boxShadow:"0 0 54px rgba(139,140,255,.35), inset 0 2px 0 rgba(255,255,255,.14)",display:"flex",alignItems:"center",justifyContent:"center"}}>
<div style={{width:292,height:92,borderRadius:99,background:"#1C1729",border:"1px solid rgba(139,140,255,.35)",boxShadow:"inset 0 4px 16px rgba(0,0,0,.55)",display:"flex",alignItems:"center",justifyContent:"center",gap:12}}>
<TokenIcon token="wUSDT" size={30} style={{opacity:.75}}/>
<span style={dash}/>
<span style={{width:58,height:58,minWidth:58,borderRadius:99,background:"radial-gradient(circle at 32% 28%,#A3A4FF,#8B8CFF)",boxShadow:"0 0 30px rgba(163,164,255,.9), inset 0 2px 4px rgba(255,255,255,.35)",display:"inline-flex",alignItems:"center",justifyContent:"center"}}><TokenIcon token="tideVARA" size={44}/></span>
<span style={dash}/>
<TokenIcon token="wUSDC" size={30} style={{opacity:.75}}/>
</div></div>
<span style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".08em",color:"var(--text-3)",border:"1px solid var(--line-2)",borderRadius:99,padding:"5px 12px",background:"rgba(33,28,48,.7)"}}>collateral: tideVARA · max LTV <span style={{color:"var(--tide-300)"}}>50%</span></span>
</div>;}
function HowItWorks(){
return <Sec id="how" title={<>Everything you need to<br/>grow your assets</>} right={<DotPatch style={{marginTop:12}}/>}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"auto auto",gap:24,marginTop:52}}>
<Bento pad={30} style={{gridRow:"1 / span 2"}}>
<StakeIllo/>
<BentoText title="Stake" style={{marginTop:"auto",paddingTop:26}}>Stake VARA through Tide to obtain tideVARA — instant redemption in minutes, or a free native unbond in 7 days.</BentoText>
</Bento>
<Bento pad={30}>
<BentoText title="Swap">Seamless exits at the market rate — the liquidity buffer fills instantly, the DEX backstops it.</BentoText>
<SwapIllo/>
</Bento>
<Bento pad={30}>
<BorrowIllo/>
<BentoText title="Borrowing" style={{marginTop:"auto",paddingTop:22}}>Post tideVARA as the only collateral, borrow wUSDT or wUSDC, and loop your stake.</BentoText>
</Bento>
</div></Sec>;}
function Flywheel(){
const R=220;
const nodes=[["Stake VARA","VARA",{left:"50%",top:60}],["Mint tideVARA","tideVARA",{left:500,top:"50%"}],["Post tideVARA, borrow stables","wUSDT",{left:"50%",top:500}],["Buy VARA again","VARA",{left:60,top:"50%"}]];
return <Sec eyebrow="The flywheel" title="Every loop feeds the next.">
<div style={{display:"grid",gridTemplateColumns:"minmax(0,560px) 1fr",gap:48,alignItems:"center",marginTop:40}}>
<div style={{position:"relative",width:560,height:560,margin:"0 auto"}}>
<div style={{position:"absolute",inset:60,borderRadius:"50%",border:"1.5px solid rgba(163,164,255,.16)"}}/>
<div style={{position:"absolute",inset:60,borderRadius:"50%",background:"radial-gradient(closest-side,rgba(139,140,255,.12),rgba(139,140,255,.03) 65%,transparent)"}}/>
<div className="fw-arc" style={{position:"absolute",inset:60,borderRadius:"50%"}}/>
<div className="fw-arc" style={{position:"absolute",inset:60,borderRadius:"50%",animationDelay:"-4.5s"}}/>
{[[436,124,45],[436,436,135],[124,436,225],[124,124,315]].map(([x,y,a])=><span key={a} style={{position:"absolute",left:x,top:y,width:12,height:14,clipPath:"polygon(0 0,100% 50%,0 100%)",background:"#A3A4FF",filter:"drop-shadow(0 0 7px rgba(163,164,255,.9))",transform:"translate(-50%,-50%) rotate("+a+"deg)"}}/>)}
{nodes.map(([t,tok,p])=><div key={t} style={{position:"absolute",...p,transform:"translate(-50%,-50%)",display:"flex",alignItems:"center",gap:9,padding:"10px 16px 10px 11px",background:"rgba(33,28,48,.94)",border:"1px solid rgba(163,164,255,.35)",borderRadius:999,boxShadow:"0 0 24px rgba(139,140,255,.25), inset 0 1px 0 rgba(255,255,255,.07)",whiteSpace:"nowrap",zIndex:2,backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)"}}><TokenIcon token={tok} size={22}/><span style={{fontSize:13.5,fontWeight:500,color:"var(--text-1)"}}>{t}</span></div>)}
<div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",textAlign:"center",zIndex:1}}>
<div style={{fontFamily:"var(--font-mono)",fontSize:10.5,letterSpacing:"var(--ls-caps)",textTransform:"uppercase",color:"var(--text-3)"}}>each turn</div>
<div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:22,marginTop:6,lineHeight:1.3}}>more <span style={{background:"var(--grad-text)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>VARA</span> bonded</div>
</div></div>
<div style={{display:"flex",flexDirection:"column"}}>
{[["Network security rises","Every borrowed stable buys VARA that gets bonded back to validators."],["Stable yield rises","More loop demand means more borrow interest paid to tideUSDT and tideUSDC holders."],["The backstop deepens","Protocol fees fill the insurance fund before anyone pays the treasury."]].map(([t,d],i)=><div key={t} style={{display:"flex",gap:18,padding:"24px 0",borderTop:i?"1px solid var(--line-1)":"none",alignItems:"flex-start"}}>
<span style={{width:32,height:32,minWidth:32,borderRadius:9,border:"1px solid var(--accent-line)",background:"var(--accent-soft)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-mono)",fontSize:12,color:"var(--tide-300)"}}>0{i+1}</span>
<div><div style={{fontSize:18,fontWeight:600,fontFamily:"var(--font-display)",letterSpacing:"var(--ls-heading)"}}>{t}</div><p style={{fontSize:14,color:"var(--text-2)",marginTop:6,lineHeight:1.65,maxWidth:"50ch"}}>{d}</p></div>
</div>)}
</div></div></Sec>;}
function TokensTable(){
const rows=[["tideVARA","VARA","Era staking rewards, compounded","Value-accruing","accent"],["tideUSDT","wUSDT","Borrow interest from loopers","Vault share · 4626","info"],["tideUSDC","wUSDC","Borrow interest from loopers","Vault share · 4626","info"]];
return <Sec id="tokens" eyebrow="Token architecture" title="One prefix. Every receipt." sub="tideX truthfully means “Tide's yield-bearing receipt for X” — for every asset, forever. No stVARA semantics stretched over stables, no collisions with gVARA or wVARA.">
<Bento style={{marginTop:44}}>
<table style={{width:"100%",borderCollapse:"collapse"}}>
<thead><tr>{["Token","You deposit","You receive","Yield source","Type"].map(h=><th key={h} style={{textAlign:"left",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"var(--ls-caps)",textTransform:"uppercase",color:"var(--text-3)",fontWeight:500,padding:"16px 26px",borderBottom:"1px solid var(--line-2)"}}>{h}</th>)}</tr></thead>
<tbody>{rows.map(([tok,dep,src,type,tone])=><tr key={tok} className="ld-row">
<td style={{padding:"16px 26px"}}><TokenBadge token={tok} size={32}/></td>
<td style={{padding:"16px 26px"}}><TokenBadge token={dep} size={22} style={{opacity:.85}}/></td>
<td style={{padding:"16px 26px",fontFamily:"var(--font-mono)",fontSize:14,color:"var(--text-1)"}}>{tok}</td>
<td style={{padding:"16px 26px",fontSize:14,color:"var(--text-2)"}}>{src}</td>
<td style={{padding:"16px 26px"}}><Badge tone={tone} size="sm">{type}</Badge></td>
</tr>)}</tbody></table>
</Bento>
<p style={{fontSize:13,color:"var(--text-3)",marginTop:14}}>Non-rebasing by design — fixed balances compose with every DEX, bridge and lending market by default.</p>
</Sec>;}
function ExitPaths(){
return <Sec eyebrow="Exits" title="Two ways out. Always.">
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginTop:44}}>
{[["zap","Instant","Swap tideVARA for VARA from the liquidity buffer or DEX.",[["Speed","immediate"],["Cost","~0.3% + slippage"],["Via","buffer → DEX"]],"buffer target 5–10% of TVL"],
["hourglass","Native unbond","Burn tideVARA; the protocol unbonds from validators.",[["Speed","7 days"],["Cost","free"],["Rate","full exchange rate"]],"Vara unbonding period"]].map(([ic,t,d,rows,foot])=><Bento key={t} pad={30}>
<div style={{display:"flex",alignItems:"center",gap:14}}>
<span style={{width:44,height:44,borderRadius:13,background:"var(--accent-soft)",border:"1px solid var(--accent-line)",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"var(--tide-300)"}}><i data-lucide={ic} style={{width:19,height:19}}/></span>
<h3 style={{fontSize:25,fontWeight:600}}>{t}</h3></div>
<p style={{fontSize:14.5,color:"var(--text-2)",margin:"14px 0 16px",lineHeight:1.65}}>{d}</p>
<div style={{display:"flex",flexDirection:"column"}}>{rows.map(([k,v])=><div key={k} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderTop:"1px solid var(--line-1)",fontSize:13.5}}><span style={{color:"var(--text-3)"}}>{k}</span><span style={{fontFamily:"var(--font-mono)",color:"var(--text-1)"}}>{v}</span></div>)}</div>
<div style={{marginTop:16}}><Badge tone="neutral" size="sm">{foot}</Badge></div>
</Bento>)}
</div>
<p style={{fontSize:13,color:"var(--text-3)",marginTop:14}}>When the buffer drains, instant exits route to the DEX. Native unbond always works.</p>
</Sec>;}
Object.assign(window,{Sec,Bento,BentoText,DotPatch,StatsBand,HowItWorks,Flywheel,TokensTable,ExitPaths});
