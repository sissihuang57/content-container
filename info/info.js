document.addEventListener("DOMContentLoaded", function () {
    // 创建自定义鼠标元素
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    // 让鼠标图片跟随指针移动
    document.addEventListener("mousemove", function (e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});