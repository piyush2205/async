let slideshowid=document.querySelector("#slideshow")
//

let slidediv=document.createElement("div")
slidediv.setAttribute("id","slide")
//
let button=document.createElement("button")
button.innerText="submit url"
button.addEventListener("click",function(){
    add_image()
})
button.setAttribute("id","slidebutton")
//
let slideinput=document.createElement("input")
slideinput.placeholder="Fill Image"

slideinput.setAttribute("id","slideinput")
//
let slideShowbutton=document.createElement("button")
slideShowbutton.innerText="Start Slide Show"
slideShowbutton.addEventListener("click",function(){
    slideshow()
})
slideShowbutton.setAttribute("id","slideShowbutton")
//
//
let pausebutton=document.createElement("button")
pausebutton.innerText="Pause"
pausebutton.addEventListener("click",function(){
    pause()
})
pausebutton.setAttribute("id","pausebutton")
//

slideshowid.append(slideinput,button,slidediv,slideShowbutton,pausebutton)
//


/////////////////////////////////////////////////////////////
//  function for adding img

function add_image(){
    let imgUrl=document.querySelector("#slideinput");

    let images=JSON.parse(localStorage.getItem("images"))||[]
        images.push(imgUrl.value);

    localStorage.setItem("images",JSON.stringify(images));

    imgUrl.value=null;
}
//
////////////////////////////////////////////
//for slide show
let id;
let i=0;
function slideshow(){
let images=JSON.parse(localStorage.getItem("images"))
let slide=document.getElementById("slide");

 clearInterval(id);
id= setInterval(function(){
    if(i===images.length){
        i=0;
    }

    let img=document.createElement("img");
    img.src=images[i];
    slide.innerHTML=null;
    slide.append(img);
    i++
},3);
}

function pause(){
    clearInterval(id);

}