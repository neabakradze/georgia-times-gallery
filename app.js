var btn = document.querySelector(".switch-btn");
var switchgreen = document.querySelector(".switch");
var video = document.querySelector('.container');

btn.addEventListener("click", function () {

    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    }
    else {
        btn.classList.remove('slide');
        video.play();
    }

});




