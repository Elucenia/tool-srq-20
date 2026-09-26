/* tool-srq-20 · ELUCENIA · https://github.com/Elucenia/tool-srq-20
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"srq-20","title":"SRQ-20 (Self-Reporting Questionnaire)","fields":[["q1","Nos últimos 30 dias…<br>1. Você tem dores de cabeça frequentes?","chk",{"pts":1}],["q2","2. Tem falta de apetite?","chk",{"pts":1}],["q3","3. Dorme mal?","chk",{"pts":1}],["q4","4. Assusta-se com facilidade?","chk",{"pts":1}],["q5","5. Tem tremores nas mãos?","chk",{"pts":1}],["q6","6. Sente-se nervoso(a), tenso(a) ou preocupado(a)?","chk",{"pts":1}],["q7","7. Tem má digestão?","chk",{"pts":1}],["q8","8. Tem dificuldades de pensar com clareza?","chk",{"pts":1}],["q9","9. Tem se sentido triste ultimamente?","chk",{"pts":1}],["q10","10. Tem chorado mais do que de costume?","chk",{"pts":1}],["q11","11. Encontra dificuldades para realizar com satisfação suas atividades diárias?","chk",{"pts":1}],["q12","12. Tem dificuldades para tomar decisões?","chk",{"pts":1}],["q13","13. Tem dificuldades no serviço (seu trabalho é penoso, lhe causa sofrimento)?","chk",{"pts":1}],["q14","14. É incapaz de desempenhar um papel útil em sua vida?","chk",{"pts":1}],["q15","15. Tem perdido o interesse pelas coisas?","chk",{"pts":1}],["q16","16. Você se sente uma pessoa inútil, sem préstimo?","chk",{"pts":1}],["q17","17. Tem tido ideia de acabar com a vida?","chk",{"pts":1}],["q18","18. Sente-se cansado(a) o tempo todo?","chk",{"pts":1}],["q19","19. Tem sensações desagradáveis no estômago?","chk",{"pts":1}],["q20","20. Você se cansa com facilidade?","chk",{"pts":1}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(e){'use strict';
var o=e.h.yes;
var a="Pensamentos de morte ou de se ferir: pergunte diretamente sobre ideação, plano e meios, e não deixe a pessoa sozinha se o risco for iminente. Apoio emocional 24 h e gratuito: <strong>CVV 188</strong> (ou cvv.org.br). Risco imediato: SAMU 192 ou pronto-socorro.";
e.def("srq-20",function(e){for(var i=0,r=1;r<=20;r++)o(e["q"+r])&&i++;var t=o(e.q17),n=i>=8,s=n?"Rastreamento positivo: suspeita de transtorno mental comum":"Rastreamento negativo";return t&&(s+=". Ideia de acabar com a vida: avaliar risco de suicídio agora"),{main:[String(i),"de 20"],label:"SRQ-20",level:t?"high":n?"mid":"low",verdict:s,note:t?a:"Instrumento de rastreamento: não faz diagnóstico nem indica qual transtorno. Casos positivos pedem avaliação clínica.",raw:{score:i,item17:t?1:0}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
