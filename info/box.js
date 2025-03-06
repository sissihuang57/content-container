document.addEventListener("DOMContentLoaded", function () {
    // 图片列表
    const cursorImages = [
        "cursor1.jpg",
        "cursor2.jpg",
        "cursor3.jpg",
        "cursor4.jpg",
        "cursor5.jpg",
        "cursor6.jpg"
    ];

    let currentIndex = 0;

    // 创建自定义鼠标元素
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.style.backgroundImage = `url(${cursorImages[currentIndex]})`;
    document.body.appendChild(cursor);

    // 让鼠标图片跟随指针移动
    document.addEventListener("mousemove", function (e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // 点击时更换鼠标图片
    document.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % cursorImages.length;
        cursor.style.backgroundImage = `url(${cursorImages[currentIndex]})`;
    });

    // 当鼠标移动到左右链接时，恢复默认鼠标
    const links = document.querySelectorAll(".image-link, .image-link2,.text-link");
    links.forEach(link => {
        link.addEventListener("mouseenter", function () {
            cursor.style.display = "none"; // 隐藏自定义鼠标
            document.body.style.cursor = "auto"; // 恢复默认鼠标
        });

        link.addEventListener("mouseleave", function () {
            cursor.style.display = "block"; // 重新显示自定义鼠标
            document.body.style.cursor = "none"; // 隐藏默认鼠标
        });
    });
});