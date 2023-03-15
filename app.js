console.log("online");

let tArr = document.getElementsByClassName("body_gallery-item-shown");
let [...slideArr] = tArr;
let index = 0;

let tick = 0;

for (let i = 1; i < slideArr.length; i++) {
    slideArr[i].className = "body_gallery-item-hidden";
}

function plusSlides(n) {
    slideArr[index].className = "body_gallery-item-hidden";

    index += n;
    if (index > slideArr.length - 1) {
        index = 0;
    }
    else if (index < 0) {
        index = slideArr.length - 1;
    }

    slideArr[index].className = "body_gallery-item-shown";
    if (n > 0) {
        document.getElementsByClassName("body_gallery-next")[0].className = "body_gallery-next-clicked";
        setTimeout(() => { document.getElementsByClassName("body_gallery-next-clicked")[0].className = "body_gallery-next"; }, 100);
    }
    else {
        document.getElementsByClassName("body_gallery-prev")[0].className = "body_gallery-prev-clicked";
        setTimeout(() => { document.getElementsByClassName("body_gallery-prev-clicked")[0].className = "body_gallery-prev"; }, 100);
    }

    tick = 0;
}

let imgArr = document.getElementsByClassName("body_gallery-item-img");
let hovering = false;

for(let i = 0; i < imgArr.length; i++)
{
    imgArr[i].addEventListener("mouseover", () => { hoverOver(true)});
    imgArr[i].addEventListener("mouseout", () => {hoverOver(false)});
}

function hoverOver(val)
{
    hovering=val;
}

function timerReset() {
    tick = 0;
}

function timer() {

    tick += .5;

    if (tick > 3) {
        tick = 0;
        plusSlides(1);
    }

    if(hovering)
    {
        tick = 0;
    }

    setTimeout(() => { timer(); }, 500);
}

timer();