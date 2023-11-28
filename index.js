var text=document.querySelector("input[name=name]");
text.addEventListener("change", handler);
function handler(e){
    var found=e.target.value;
    console.log(found);
}