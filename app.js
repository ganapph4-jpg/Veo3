async function gen(){
const p=document.getElementById('prompt').value.trim();
if(!p){alert('Enter a prompt');return;}
status.textContent='Generating...';
out.innerHTML='';
try{
const v=await puter.ai.txt2vid(p,{model:model.value});
v.controls=true;v.autoplay=true;
out.appendChild(v);
status.textContent='Done';
}catch(e){status.textContent='Error: '+e.message;}
}