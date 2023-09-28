//if only want to work with a particular div
// document.querySelector("div")

//if work with window
window.addEventListener("mousemove", function(details){
// console.log(details);
// console.log(details.clientX);
var rect = this.document.querySelector("#rect");
var Xval = gsap.utils.mapRange(0, window.innerWidth, 100+rect.getBoundingClientRect().width/2, window.innerWidth-100, details.clientX)


gsap.to('#rect',{
left: Xval,
ease: Power3
}) 
});