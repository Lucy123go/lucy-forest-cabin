// 部落格分類篩選（沒有 JS 時，所有文章仍會顯示）
(function(){
  var chips=document.querySelectorAll('.chip');
  var posts=document.querySelectorAll('#post-list .post');
  var empty=document.getElementById('empty');
  function apply(cat){
    var shown=0;
    posts.forEach(function(p){
      var ok=cat==='all'||p.dataset.cat===cat;
      p.hidden=!ok; if(ok) shown++;
    });
    chips.forEach(function(c){c.setAttribute('aria-pressed',c.dataset.filter===cat?'true':'false');});
    if(empty) empty.hidden=shown>0;
    try{history.replaceState(null,'',cat==='all'?location.pathname:'#'+cat);}catch(e){}
  }
  chips.forEach(function(c){c.addEventListener('click',function(){apply(c.dataset.filter);});});
  var h=location.hash.slice(1);
  if(h&&document.querySelector('.chip[data-filter="'+h+'"]')) apply(h);
})();
