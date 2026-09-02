const {Button,TokenIcon}=window.TideDesignSystem_f6b246;
const TRACE="rgba(163,164,255,.4)";
function Tile({token,title,style}){
return <div title={title} style={{position:"absolute",width:92,height:92,borderRadius:22,background:"linear-gradient(180deg,#2A2440,#1B1626)",border:"1.5px solid rgba(163,164,255,.5)",boxShadow:"0 0 26px rgba(139,140,255,.28), inset 0 1px 0 rgba(255,255,255,.06)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:3,...style}}>
<TokenIcon token={token} size={52} style={{filter:"drop-shadow(0 0 14px rgba(139,140,255,.55))"}}/>
</div>;}
function Traces(){
const L=(s)=><div style={{position:"absolute",...s}}/>;
return <>
{L({left:132,top:66,width:332,height:86,borderTop:"1.5px solid "+TRACE,borderRight:"1.5px solid "+TRACE,borderTopRightRadius:40})}
{L({left:464,top:151,width:68,borderTop:"1.5px solid "+TRACE})}
{L({left:112,top:178,width:368,height:101,borderBottom:"1.5px solid "+TRACE,borderRight:"1.5px solid "+TRACE,borderBottomRightRadius:40})}
{L({left:480,top:177,width:52,borderTop:"1.5px solid "+TRACE})}
{L({left:152,top:208,width:304,height:259,borderBottom:"1.5px solid "+TRACE,borderRight:"1.5px solid "+TRACE,borderBottomRightRadius:44})}
{L({left:456,top:207,width:76,borderTop:"1.5px solid "+TRACE})}
<span className="bd-streak" style={{left:140,top:64,"--d":"280px",animationDelay:".2s"}}/>
<span className="bd-streak" style={{left:120,top:276,"--d":"300px",animationDelay:"1.6s"}}/>
<span className="bd-streak" style={{left:160,top:464,"--d":"250px",animationDelay:"2.7s"}}/>
</>;}
function Chip(){
const pads=[.14,.3,.18,.42,.22,.34,.16,.26,.4,.2,.24,.38,.15,.3,.44,.18,.36,.22,.28,.16,.4,.2,.32,.14,.26];
return <div style={{position:"absolute",left:524,top:90,width:192,height:192,borderRadius:30,background:"linear-gradient(180deg,#9FA0F2,#6E6EE6)",padding:9,boxShadow:"0 0 70px rgba(139,140,255,.55), 0 0 0 1.5px rgba(163,164,255,.6), inset 0 1px 0 rgba(255,255,255,.25)",zIndex:4}}>
{[40,93,146].map(y=><span key={"l"+y} style={{position:"absolute",left:-15,top:y,width:15,height:5,borderRadius:3,background:"#5D5794"}}/>)}
{[40,93,146].map(y=><span key={"r"+y} style={{position:"absolute",right:-15,top:y,width:15,height:5,borderRadius:3,background:"#5D5794"}}/>)}
{[38,72,106,140,174].map(x=><span key={"b"+x} style={{position:"absolute",bottom:-15,left:x,width:5,height:15,borderRadius:3,background:"#5D5794"}}/>)}
<div style={{position:"relative",width:"100%",height:"100%",borderRadius:22,background:"#211C30",boxShadow:"inset 0 2px 10px rgba(0,0,0,.6)",overflow:"hidden"}}>
<div style={{position:"absolute",inset:10,display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6}}>
{pads.map((o,i)=><span key={i} style={{borderRadius:4,background:"rgba(163,164,255,"+o+")"}}/>)}
</div>
<div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:82,height:82,borderRadius:16,background:"#171221",border:"1px solid rgba(163,164,255,.4)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 22px rgba(139,140,255,.45)"}}>
<span style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:26,letterSpacing:"-0.02em",background:"var(--grad-text)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>tide</span>
</div></div></div>;}
function CircuitBoard(){
return <div style={{position:"relative",width:1240,height:566,margin:"64px auto 0"}}>
<div style={{position:"absolute",left:"50%",top:120,transform:"translateX(-50%)",width:760,height:420,background:"radial-gradient(closest-side,rgba(139,140,255,.2),transparent)",filter:"blur(18px)"}}/>
<Traces/>
<div style={{position:"absolute",inset:0,transform:"scaleX(-1)"}}><Traces/></div>
<Chip/>
{[[560,26],[588,26],[616,26],[644,26],[672,26]].map(([x],i)=><div key={i} style={{position:"absolute",left:560+i*28,top:284,width:1.5,height:236,background:"linear-gradient(180deg,rgba(163,164,255,.45),transparent)"}}/>)}
<span className="bd-fall" style={{left:615,top:300,animationDelay:".8s"}}/>
<Tile token="VARA" title="VARA — you deposit" style={{left:40,top:20}}/>
<Tile token="wUSDT" title="wUSDT — you deposit" style={{left:20,top:232}}/>
<Tile token="wUSDC" title="wUSDC — you deposit" style={{left:60,top:420}}/>
<Tile token="tideVARA" title="tideVARA — you receive" style={{right:40,top:20}}/>
<Tile token="tideUSDT" title="tideUSDT — you receive" style={{right:20,top:232}}/>
<Tile token="tideUSDC" title="tideUSDC — you receive" style={{right:60,top:420}}/>
</div>;}
function Hero(){
return <header style={{position:"relative",overflow:"hidden",paddingBottom:72}}>
<div style={{position:"absolute",inset:0,backgroundImage:"var(--dot-grid)",backgroundSize:"var(--dot-grid-size)",maskImage:"radial-gradient(1000px 520px at 50% 6%,#000 25%,transparent)",WebkitMaskImage:"radial-gradient(1000px 520px at 50% 6%,#000 25%,transparent)",opacity:.65}}/>
<div style={{position:"absolute",left:"50%",top:-280,transform:"translateX(-50%)",width:1200,height:640,background:"radial-gradient(closest-side,rgba(139,140,255,.28),transparent)",filter:"blur(28px)"}}/>
<div style={{position:"absolute",left:"58%",top:-60,width:420,height:300,background:"radial-gradient(closest-side,rgba(225,225,255,.1),transparent)",filter:"blur(24px)"}}/>
<div style={{position:"relative",maxWidth:1240,margin:"0 auto",padding:"92px 32px 0",textAlign:"center"}}>
<div style={{display:"inline-flex",alignItems:"center",gap:12,height:46,padding:"6px 20px 6px 7px",borderRadius:999,background:"rgba(33,28,48,.75)",border:"1px solid rgba(163,164,255,.2)",marginBottom:30}}>
<span style={{width:32,height:32,borderRadius:999,background:"#332C4E",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"#C6C7FF"}}><i data-lucide="trending-up" style={{width:15,height:15}}/></span>
<span style={{fontSize:15,color:"#CBC7DD"}}>Stake to earn and grow</span>
</div>
<h1 style={{fontSize:"var(--fs-hero)",fontWeight:600,lineHeight:"var(--lh-display)",letterSpacing:"var(--ls-display)"}}>One Stake, Endless<br/><span style={{background:"var(--grad-text)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>Opportunities</span></h1>
<p style={{fontSize:17.5,color:"#9B95B5",margin:"20px auto 0",letterSpacing:".01em"}}>The liquid staking standard on Vara.</p>
<div style={{display:"flex",gap:14,justifyContent:"center",marginTop:32}}>
<Button size="lg" href="../app/index.html" style={{borderRadius:12,minWidth:150}}>Go to stake</Button>
<Button size="lg" variant="secondary" href="#how" style={{borderRadius:12,minWidth:150,background:"rgba(33,28,48,.7)"}}>Learn More</Button>
</div>
<CircuitBoard/>
</div></header>;}
Object.assign(window,{Hero});
