window.addEventListener("keydown",function(e){if([32,37,38,39,40].indexOf(e.keyCode)>-1){e.preventDefault();}},false);runOnStartup(async runtime=>{runtime.addEventListener("beforeprojectstart",()=>OnBeforeProjectStart(runtime));});async function OnBeforeProjectStart(runtime)
{runtime.addEventListener("tick",()=>Tick(runtime));}
function Tick(runtime)
{}