// 导航菜单控制
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-nav-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-menu .nav-link');
    const body = document.body;

    // 切换菜单状态
    function toggleMenu(e) {
        e.stopPropagation(); // 阻止事件冒泡
        const isOpen = nav.classList.toggle('menu-open');
        body.classList.toggle('menu-open', isOpen);
    }

    // 点击汉堡菜单按钮
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // 点击移动端导航链接时关闭菜单
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('menu-open');
            body.classList.remove('menu-open');
        });
    });

    // 点击页面其他区域时关闭菜单
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('menu-open') &&
            !e.target.closest('.mobile-nav')) {
            nav.classList.remove('menu-open');
            body.classList.remove('menu-open');
        }
    });
}); 