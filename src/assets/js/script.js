function showPage(pageName) {
    const contentIframe = document.getElementById('content');
    contentIframe.src = `../pages/${pageName}.html`;

    // 更新导航按钮状态
    const navButtons = document.querySelectorAll('#bottom-nav button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`#bottom-nav button[onclick="showPage('${pageName}')"]`);
    activeButton.classList.add('active');
}