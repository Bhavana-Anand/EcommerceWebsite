function mouseOver(obj) {
    obj.style.borderColor="black";
    obj.style.color="black";
    obj.style.backgroundColor="transparent";
}

function mouseOut(obj) {
    
    obj.style.borderColor="#555";
    obj.style.color="white";
    obj.style.backgroundColor="#555";
 }
 function mouseOver1(obj) {
    obj.style.borderColor="#A9A9A9";
    obj.style.color="white";
    obj.style.backgroundColor="#A9A9A9";
}

function mouseOut1(obj) {
    
    obj.style.borderColor="black";
    obj.style.color="black";
    obj.style.backgroundColor="transparent";
 }



let scrollContainer=document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

nextBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft+=1500;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft-=1500;
});







 


