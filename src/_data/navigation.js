module.exports = function() {
    // 基础导航项
    const baseItems = [
        { text: "Home", url: "/" },
        { text: "Blog", url: "/blog" },
        { text: "Projects", url: "/projects" }
    ];

    // 根据环境添加额外项
    if (process.env.ELEVENTY_ENV === 'development') {
        baseItems.push({ 
            text: "Debug", 
            url: "/debug",
            dev: true
        });
    }

    return {
        items: baseItems,
        // 计算属性
        get mainItems() {
            return this.items.filter(item => !item.dev);
        },
        get devItems() {
            return this.items.filter(item => item.dev);
        }
    };
}; 