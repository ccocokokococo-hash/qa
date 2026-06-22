
const $=id=>document.getElementById(id);
let current=null,selected=null;
function shuffle(a){return [...a].sort(()=>Math.random()-0.5)}
function newTerm(){
  current=shuffle(DB.terms)[0];selected=null;
  $("termWord").textContent=current.term;
  $("termMeaning").textContent=current.meaning;
  $("termResult").textContent="";
  $("termOptions").innerHTML="";
  shuffle([current.term,...current.wrong]).forEach(x=>{
    const b=document.createElement("button");b.className="answer";b.textContent=x;
    b.onclick=()=>{document.querySelectorAll(".answer").forEach(e=>e.classList.remove("selected"));b.classList.add("selected");selected=x};
    $("termOptions").appendChild(b);
  });
}
function check(){
  if(!selected){alert("Нұсқа таңдаңыз");return}
  $("termResult").innerHTML=selected===current.term?`<span class="ok">✅ Дұрыс.</span> <b>${current.term}</b> — ${current.meaning}`:`<span class="bad">❌ Қате.</span> Дұрыс нұсқа: <b>${current.term}</b>. Мағынасы: ${current.meaning}`;
}
$("newTerm").onclick=newTerm;$("termSubmit").onclick=check;newTerm();
