// 导航菜单控制
class MobileNav {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.hamburger = document.querySelector('.hamburger-menu');
        this.mobileLinks = document.querySelectorAll('.mobile-nav-menu .nav-link');
        this.body = document.body;

        this.init();
    }

    init() {
        // 点击汉堡菜单按钮
        if (this.hamburger) {
            this.hamburger.addEventListener('click', this.toggleMenu.bind(this));
        }

        // 点击移动端导航链接时关闭菜单
        this.mobileLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // 点击页面其他区域时关闭菜单
        document.addEventListener('click', (e) => {
            if (this.nav.classList.contains('menu-open') &&
                !e.target.closest('.mobile-nav')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu(e) {
        e.stopPropagation(); // 阻止事件冒泡
        const isOpen = this.nav.classList.toggle('menu-open');
        this.body.classList.toggle('menu-open', isOpen);
    }

    closeMenu() {
        this.nav.classList.remove('menu-open');
        this.body.classList.remove('menu-open');
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new MobileNav();
}); 