// 等待整个HTML文档加载完成后再执行脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取 iframe 元素和所有导航按钮（只获取一次，提高性能）
    const contentIframe = document.getElementById('content');
    const navButtons = document.querySelectorAll('#bottom-nav button');

    // 定义 showPage 函数
    window.showPage = function(pageName) { // 挂载到 window 上，确保全局可访问
        // 1. 修复路径：从 index.html 出发，正确指向 src/pages/ 下的文件
        // 原路径 ../pages/ 是错误的，因为 script.js 在 src/assets/js/ 目录下，
        // 而 index.html 在项目根目录，所以应该直接从根目录写路径
        const targetUrl = `src/pages/${pageName}.html`;
        
        // 2. 更新 iframe 的 src 属性，加载目标页面
        contentIframe.src = targetUrl;

        // 3. 更新导航按钮的激活状态（优化后更简洁可靠）
        navButtons.forEach(button => {
            // 移除所有按钮的 active 类
            button.classList.remove('active');
        });

        // 更简单的方式：直接通过 onclick 事件中的参数匹配当前按钮
        // 或者通过按钮的文本/ID匹配，这里沿用你的思路但优化了选择器
        const activeButton = document.querySelector(
            `#bottom-nav button[onclick="showPage('${pageName}')"]`
        );
        
        // 确保找到按钮后再添加 active 类（避免报错）
        if (activeButton) {
            activeButton.classList.add('active');
        }
    };
});
