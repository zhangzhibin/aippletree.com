module.exports = async function() {
    // 这里可以是异步操作，比如：
    // - 读取环境变量
    // - 获取构建时间
    // - 读取外部 API
    
    return {
        buildTime: new Date().toISOString(),
        environment: process.env.ELEVENTY_ENV || 'development',
        version: process.env.npm_package_version || '1.0.0'
    };
}; 