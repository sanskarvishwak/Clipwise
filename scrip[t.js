
function showSidebar(){

     const sidebar= document.querySelector('.sidebar')
     sidebar.style.display='flex'
}

function hideSidebar(){

    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display='none'
}
function previmg(){

    const img= document.querySelector('#myImage')
    img.src='image2.jpg'
    img.style.height='400px'
      img.style.width='400px'

}
function forwardimg(){

    const img= document.querySelector('#myImage')
    img.src='image1.jpg'
    img.style.height='400px'
      img.style.width='400px'

}
var tl=gsap.timeline();
/*tl.to("#btn .s",{
    x:200,
    duration:3,
    delay:1,
    
   
    scale:0.8,
    backgroundColor:"white"


})*/
tl.from("#content",{
    x:10,
    duration:1.5,
    delay:0.5,
    opacity:0,
   
    scale:0.5,
    backgroundColor:"transparent"


})

