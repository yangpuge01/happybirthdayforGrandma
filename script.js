document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.image-slider');
    let isPaused = false; // ���ƹ�����ͣ�ı�־

    // ��ͣ��������
    function pauseScroll() {
        isPaused = true;
        slider.style.animationPlayState = 'paused';
    }

    // ���Ź�������
    function playScroll() {
        isPaused = false;
        slider.style.animationPlayState = 'running';
    }

    // �󶨰�ť�¼�
    document.getElementById('pause').addEventListener('click', pauseScroll);
    document.getElementById('play').addEventListener('click', playScroll);

    // ��̬���������ٶȣ���ͨ���޸� duration ��ʵ��
    function setScrollSpeed(duration) {
        slider.style.animationDuration = duration;
    }

    // ʾ�������ù����ٶ�Ϊ30�����һ��ѭ��
    setScrollSpeed('30s');
});