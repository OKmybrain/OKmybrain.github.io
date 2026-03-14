// 平滑滚动到锚点（苹果官网风格交互）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 点餐按钮点击反馈
document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('已加入购物车！');
    });
});

// 可选：添加导航栏滚动变色效果（增强苹果风格）
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// 广告轮播增强逻辑（可选）
document.addEventListener('DOMContentLoaded', function() {
    // 左侧广告
    const leftSlider = document.getElementById('leftAdSlider');
    // 右侧广告
    const rightSlider = document.getElementById('rightAdSlider');

    // 复制广告图片，实现无缝循环（解决滚动断层）
    function cloneAdImages(slider) {
        const imgs = slider.querySelectorAll('.ad-img');
        imgs.forEach(img => {
            const clone = img.cloneNode(true);
            slider.appendChild(clone);
        });
    }

    // 执行克隆
    if (leftSlider) cloneAdImages(leftSlider);
    if (rightSlider) cloneAdImages(rightSlider);

    // 可选：手动控制轮播速度
    const adSliders = document.querySelectorAll('.ad-slider');
    adSliders.forEach(slider => {
        slider.style.animationDuration = '20s'; // 可自定义轮播速度
    });
});