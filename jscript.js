const imageArray = ["001.jpg", '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg'];
var i = 0;


window.addEventListener('DOMContentLoaded', (event) => {
    var el = document.getElementById("imgcontent")

    el.src = "asset\\" + imageArray[0];
});


function changeImageNext() {
    i++;
    if (i > imageArray.length - 1) {
        i = 0;
    }
    imgcontent.src = "asset\\" + imageArray[i];
}

function changeImagePrevious() {
    i--;
    if (i < 0) {
        i = imageArray.length - 1;
    }
    imgcontent.src = "asset\\" + imageArray[i];
    p1.innerHTML = `${imageArray[i]}`;
}