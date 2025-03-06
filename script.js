// 如果 CSS 方案不起作用，JavaScript 也可以用来切换图像和文字
document.addEventListener("DOMContentLoaded", function () {
    const toggleImages = document.querySelectorAll(".toggle-image");
    const toggleTexts = document.querySelectorAll(".toggle-text");

    toggleImages.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.querySelector(".image").style.display = "none";
            this.querySelector(".text").style.display = "block";
        });
        link.addEventListener("mouseleave", function () {
            this.querySelector(".image").style.display = "block";
            this.querySelector(".text").style.display = "none";
        });
    });

    toggleTexts.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.querySelector(".text").style.display = "none";
            this.querySelector(".image").style.display = "block";
        });
        link.addEventListener("mouseleave", function () {
            this.querySelector(".text").style.display = "block";
            this.querySelector(".image").style.display = "none";
        });
    });
});