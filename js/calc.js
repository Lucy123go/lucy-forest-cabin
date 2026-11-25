// 費用試算器
(function(){
  var $=function(id){return document.getElementById(id)};
  if(!$("calc")) return;
  var plan=19000, fmt=function(n){return "NT$ "+n.toLocaleString("en-US")};
  function calc(){
    var sub=+$("sub").value, mon=+$("mon").value, pay=Math.max(plan-sub,0);
    $("subOut").textContent=sub.toLocaleString("en-US");
    $("monOut").textContent=mon+" 個月";
    $("rMonth").textContent=fmt(pay);
    $("rTotal").textContent=fmt(pay*mon);
    $("rSaved").textContent=fmt(Math.min(sub,plan)*mon);
    $("barFull").style.width="100%"; $("barFullT").textContent=fmt(plan);
    $("barPay").style.width=(pay/plan*100)+"%"; $("barPayT").textContent=fmt(pay);
  }
  document.querySelectorAll("#calc .seg button").forEach(function(b){
    b.addEventListener("click",function(){
      document.querySelectorAll("#calc .seg button").forEach(function(x){x.classList.remove("on");x.setAttribute("aria-checked","false")});
      b.classList.add("on"); b.setAttribute("aria-checked","true"); plan=+b.dataset.plan; calc();
    });
  });
  $("sub").addEventListener("input",calc); $("mon").addEventListener("input",calc);
  calc();
})();
