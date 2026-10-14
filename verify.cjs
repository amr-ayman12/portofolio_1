const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('index.html','utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const path=match[1];if(!/^(https?:|mailto:|tel:)/.test(path))assert(fs.existsSync(path),'Missing '+path);}
for(let id=1;id<=6;id++){
const elements=new Map();const el=s=>{if(!elements.has(s))elements.set(s,{innerHTML:'',textContent:'',value:s==='#period'?'week':s==='#city'?'Cairo':'',querySelectorAll:()=>[],setAttribute(){},classList:{toggle(){}},setCustomValidity(){},reportValidity(){}});return elements.get(s);};
const storage=new Map();const ctx={document:{querySelector:el,title:''},location:{search:'?project='+id},URLSearchParams,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},console,FormData:class{constructor(form){this.form=form;}get(k){return this.form[k];}}};vm.createContext(ctx);vm.runInContext(fs.readFileSync('demo.js','utf8'),ctx);
assert(el('#title').textContent.length>0);
if(id===1){el('#app').onclick({target:{dataset:{filter:'Web'}}});assert(el('#works').innerHTML.includes('Commerce / Nord'));assert(!el('#works').innerHTML.includes('Focus / Daily'));}
if(id===2){el('#app').onclick({target:{dataset:{add:'0'}}});assert(el('#cart').innerHTML.includes('$48'));el('#app').onclick({target:{dataset:{},id:'checkout'}});assert(el('#status').textContent.includes('No payment'));el('#app').onclick({target:{dataset:{remove:'0'}}});assert(el('#cart').innerHTML.includes('empty'));}
if(id===3){el('#period').value='year';el('#period').onchange();assert(el('#metrics').innerHTML.includes('112,000'));}
if(id===4){el('#task').value='Test <task>';el('#task-form').onsubmit({preventDefault(){}});assert(el('#tasks').innerHTML.includes('Test &lt;task&gt;'));el('#app').onchange({target:{dataset:{toggle:'2'},checked:true}});assert(JSON.parse(storage.get('amr-demo-tasks'))[2].done);el('#app').onclick({target:{dataset:{delete:'2'}}});assert(!el('#tasks').innerHTML.includes('Test &lt;task&gt;'));}
if(id===5){el('#booking').onsubmit({preventDefault(){},target:{name:'Amr',email:'test@example.com',date:'2026-11-01',time:'19:00',guests:'2'}});assert(el('#status').textContent.includes('No real booking'));}
if(id===6){el('#city').value='London';el('#city').onchange();assert(el('#weather').innerHTML.includes('14°C'));}
console.log('PASS demo '+id);
}
const source=fs.readFileSync('script.js','utf8'),arrays=source.slice(0,source.indexOf('/* =====================================================\n   RENDERING'));
const ctx={};vm.createContext(ctx);vm.runInContext(arrays+';this.projects=PROJECTS;',ctx);for(const p of ctx.projects){assert(fs.existsSync(p.image));assert(fs.existsSync(p.url.split('?')[0]));}console.log('PASS local links and all project assets');
