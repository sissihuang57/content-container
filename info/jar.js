document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");

    // 初始静音，确保能自动播放
    video.muted = true;
    video.play().catch(error => {
        console.log("Autoplay was prevented. Waiting for user interaction.");
    });

    // 用户交互后解除静音并播放
    document.addEventListener("click", function () {
        video.muted = false; // 解除静音
        if (video.paused) {
            video.play();
        }
    });

    // 鼠标进入视频范围时播放（确保不会重复调用）
    video.addEventListener("mouseenter", function () {
        if (video.paused) {
            video.play();
        }
    });

    // 鼠标移出视频范围时暂停（确保不会重复调用）
    video.addEventListener("mouseleave", function () {
        if (!video.paused) {
            video.pause();
        }
    });
});