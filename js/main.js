let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    let panels = document.getElementsByClassName("panel");
    for (let j = 0; j < panels.length; j++) {
        if (i === j) continue;
        panels[j].style.maxHeight = null;
    }
  });
}
