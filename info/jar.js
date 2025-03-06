document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");

    // 鼠标进入视频范围时播放
    video.addEventListener("mouseenter", function () {
        video.play();
    });

    // 鼠标移出视频范围时暂停
    video.addEventListener("mouseleave", function () {
        video.pause();
    });
});