const {Button}=window.TideDesignSystem_f6b246;
function Wordmark({size=24,color="var(--text-1)",href="#top"}){return <a href={href} style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:size,letterSpacing:"-0.02em",color,textDecoration:"none",lineHeight:1}}>tide</a>;}
function LandingNav(){
return <div style={{position:"sticky",top:16,zIndex:60,padding:"0 36px"}}>
<div style={{maxWidth:1368,margin:"0 auto",height:74,display:"flex",alignItems:"center",gap:12,padding:"0 14px 0 26px",background:"rgba(33,28,48,.8)",backdropFilter:"blur(18px)",WebkitBackdropFilter:"blur(18px)",border:"1px solid rgba(255,255,255,.06)",borderRadius:14,boxShadow:"var(--shadow-card)"}}>
<Wordmark/>
<nav style={{display:"flex",gap:34,margin:"0 auto"}}>
<a className="ld-link" href="#how">Features</a>
<a className="ld-link" href="#tokens">Tokens</a>
<a className="ld-link" href="#security">Security</a>
<a className="ld-link" href="#faq">FAQ</a>
</nav>
<Button size="lg" variant="secondary" href="../app/index.html" style={{borderRadius:10,background:"#2A2440"}}>Log in</Button>
<Button size="lg" href="../app/index.html" style={{borderRadius:10}}>Sign Up</Button>
</div></div>;}
Object.assign(window,{Wordmark,LandingNav});
