var images = ["./imgs/img1.png","./imgs/img2.png","./imgs/img3.png"];

window.consolePower =   "off";
window.currentImage =   0;

document.getElementById("on").addEventListener('click',function(){
    if (window.consolePower === "on"){
        switchOff();
    } else {
        switchOn();
    }
})

document.getElementById("select-button").addEventListener('click',function(){
    if(window.consolePower === "on"){
       restartConsole();
    }
})

document.getElementById("b-a").addEventListener('click',function(){
        imagePlus();
})

document.getElementById("b-b").addEventListener('click',function(){
        imageMinus();
})

function restartConsole(){
    var firstImage = images[0];
    document.getElementById("screen").src = firstImage;
}

function imagePlus(){
    if(window.currentImage <= 2 && window.consolePower === "on"){
        window.currentImage++
        document.getElementById("screen").src = images[window.currentImage]
    }
}

function imageMinus(){
    if(window.currentImage >= 0 && window.consolePower === "on"){
        window.currentImage --
        document.getElementById("screen").src = images[window.currentImage]
    }
}

function switchOn(){
    document.getElementById("screen").src = "./imgs/img1.png";
    window.consolePower="on";
}
function switchOff(){
    document.getElementById("screen").src = "./imgs/img0.png";
    window.consolePower="off";
}

