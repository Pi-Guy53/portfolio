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

function timerReset() {
    tick = -8;
}

function timer() {

    tick += .5;

    if (tick > 8) {
        tick = 0;
        plusSlides(1);
    }

    setTimeout(() => { timer(); }, 500);
}

timer();