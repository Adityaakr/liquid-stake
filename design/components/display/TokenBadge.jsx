import React from "react";
const M={VARA:["V","--tok-vara","vara"],tideVARA:["V","--tok-vara","tide-vara"],wUSDT:["T","--tok-usdt","usdt"],USDT:["T","--tok-usdt","usdt"],tideUSDT:["T","--tok-usdt","tide-usdt"],wUSDC:["C","--tok-usdc","usdc"],USDC:["C","--tok-usdc","usdc"],tideUSDC:["C","--tok-usdc","tide-usdc"]};
let ROOT=null;
function root(){if(ROOT===null){const s=typeof document!=="undefined"&&document.querySelector('script[src*="_ds_bundle"]');ROOT=s?s.src.split("_ds_bundle")[0]:"";}return ROOT;}
export function TokenIcon({token="VARA",size=28,style}){
const e=M[token]||["?","--text-3",null];const[err,setErr]=React.useState(false);const c="var("+e[1]+")";
if(e[2]&&!err)return <img src={root()+"assets/tokens/"+e[2]+".png"} alt={token} onError={()=>setErr(true)} style={{width:size,height:size,minWidth:size,borderRadius:"50%",display:"inline-block",verticalAlign:"middle",...style}}/>;
return <span style={{width:size,height:size,minWidth:size,borderRadius:99,display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:600,fontSize:size*.44,color:c,background:"color-mix(in srgb,"+c+" 16%,transparent)",border:"1px solid color-mix(in srgb,"+c+" 45%,transparent)",...style}}>{e[0]}</span>;}
export function TokenBadge({token="VARA",size=28,showName=true,sub,style,...rest}){
return <span style={{display:"inline-flex",alignItems:"center",gap:9,...style}} {...rest}><TokenIcon token={token} size={size}/>{showName?<span style={{display:"inline-flex",flexDirection:"column",lineHeight:1.25}}><span style={{fontFamily:"var(--font-mono)",fontWeight:500,fontSize:Math.max(12,size*.5)}}>{token}</span>{sub?<span style={{fontSize:11.5,color:"var(--text-3)"}}>{sub}</span>:null}</span>:null}</span>;}
