// 导航菜单控制
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-nav-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-menu .nav-link');
    const body = document.body;

    console.log('导航元素:', {
        nav: nav,
        hamburger: hamburger,
        mobileMenu: mobileMenu,
        mobileLinks: mobileLinks
    });

    // 切换菜单状态
    function toggleMenu(e) {
        e.stopPropagation(); // 阻止事件冒泡
        const isOpen = nav.classList.toggle('menu-open');
        body.classList.toggle('menu-open', isOpen);
        
        // 检查菜单元素的样式
        if (mobileMenu) {
            const styles = window.getComputedStyle(mobileMenu);
            console.log('菜单样式:', {
                display: styles.display,
                opacity: styles.opacity,
                visibility: styles.visibility,
                transform: styles.transform
            });
        }
    }

    // 点击汉堡菜单按钮
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
        console.log('已绑定汉堡菜单点击事件');
    }

    // 点击移动端导航链接时关闭菜单
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('menu-open');
            body.classList.remove('menu-open');
            console.log('点击链接，关闭菜单');
        });
    });

    // 点击页面其他区域时关闭菜单
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('menu-open') &&
            !e.target.closest('.mobile-nav')) {
            nav.classList.remove('menu-open');
            body.classList.remove('menu-open');
            console.log('点击外部区域，关闭菜单');
        }
    });
}); 