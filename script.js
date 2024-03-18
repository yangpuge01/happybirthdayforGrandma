document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.image-slider');
    let isPaused = false; // 控制滚动暂停的标志

    // 暂停滚动函数
    function pauseScroll() {
        isPaused = true;
        slider.style.animationPlayState = 'paused';
    }

    // 播放滚动函数
    function playScroll() {
        isPaused = false;
        slider.style.animationPlayState = 'running';
    }

    // 绑定按钮事件
    document.getElementById('pause').addEventListener('click', pauseScroll);
    document.getElementById('play').addEventListener('click', playScroll);

    // 动态调整滚动速度，可通过修改 duration 来实现
    function setScrollSpeed(duration) {
        slider.style.animationDuration = duration;
    }

    // 示例：设置滚动速度为30秒完成一次循环
    setScrollSpeed('30s');
});
