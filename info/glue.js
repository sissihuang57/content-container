document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    const numImages = 10;
    let selectedImage = null; // 当前选中的图片
    let isDragging = false;
    let offsetX, offsetY;

    // 随机生成图片
    for (let i = 0; i < numImages; i++) {
        const img = document.createElement("img");
        img.src = `images/image${i + 1}.jpg`; // 确保文件名匹配
        img.classList.add("image");

        // 随机初始位置
        img.style.left = `${Math.random() * 70 + 10}vw`;
        img.style.top = `${Math.random() * 70 + 10}vh`;

        // 监听鼠标点击选中
        img.addEventListener("mousedown", function (event) {
            if (selectedImage !== this) {
                if (selectedImage) {
                    selectedImage.classList.remove("selected");
                }
                selectedImage = this;
                selectedImage.classList.add("selected");
            }

            // 记录鼠标相对图片的偏移量
            isDragging = true;
            offsetX = event.clientX - selectedImage.offsetLeft;
            offsetY = event.clientY - selectedImage.offsetTop;
        });

        imageContainer.appendChild(img);
    }

    // 鼠标移动时，拖拽选中的图片
    document.addEventListener("mousemove", function (event) {
        if (isDragging && selectedImage) {
            selectedImage.style.left = `${event.clientX - offsetX}px`;
            selectedImage.style.top = `${event.clientY - offsetY}px`;
        }
    });

    // 鼠标释放，停止拖拽
    document.addEventListener("mouseup", function () {
        isDragging = false;
    });

    // 监听鼠标滚轮，缩放图片
    document.addEventListener("wheel", function (event) {
        if (selectedImage) {
            event.preventDefault();
            let currentWidth = selectedImage.offsetWidth;
            let newWidth = currentWidth + (event.deltaY > 0 ? -10 : 10);
            newWidth = Math.max(50, Math.min(newWidth, 500)); // 限制缩放范围
            selectedImage.style.width = `${newWidth}px`;
        }
    });
});