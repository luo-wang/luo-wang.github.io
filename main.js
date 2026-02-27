
function toggleBib(id){
  const el = document.getElementById(id);
  el.style.display = el.style.display==="block"?"none":"block";
}

const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>{
  document.body.style.background =
    document.body.style.background==="white"?"black":"white";
};

const langToggle=document.getElementById("langToggle");
langToggle.onclick=()=>{
  document.querySelectorAll("[data-en]").forEach(el=>{
    const current=el.innerText;
    el.innerText=current===el.dataset.en?el.dataset.cn:el.dataset.en;
  });
};

let count=localStorage.getItem("visitCount")||0;
count++;
localStorage.setItem("visitCount",count);
document.getElementById("counter").innerText="Visits (local): "+count;
