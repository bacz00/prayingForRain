async function fetchAndRenderMarkdown(filePath) {
    try {
    function initElement(elementName = 'div', elementClass, elementId, elementInnerText) {
        const newElement = document.createElement(elementName);
        if (typeof(elementClass) !== 'undefined') {
        newElement.className = elementClass;
        }
        if (typeof(elementId) !== 'undefined') {
        newElement.id = elementId;
        }
        if (typeof(elementInnerText) !== 'undefined') {
        newElement.innerText = elementInnerText;
        }
        return newElement;
    }
    
    const main = initElement('div', 'main', 'main');
    document.body.appendChild(main);

    const topBar = initElement('div', 'top-bar');
    main.appendChild(topBar);
    const expandButton = initElement('button', 'expand-button fas fa-list');
    topBar.appendChild(expandButton);
    const title = initElement('div', 'title', undefined, 'prayingForRain | 祈雨');
    topBar.appendChild(title);
    const githubLink = initElement('a', 'github-link');
    githubLink.href = 'https://github.com/bacz00/prayingForRain';
    githubLink.target = '_blank';
    githubLink.innerHTML = '<i class="fab fa-github"></i>&nbsp;在Github查看本项目';
    topBar.appendChild(githubLink);

    const overlay = initElement('div', 'overlay');
    main.appendChild(overlay);

    const container = initElement('div', 'container');
    main.appendChild(container);

    const sidebarContainer = initElement('div', 'sidebar-container');
    container.appendChild(sidebarContainer);

    const sidebar = initElement('div', 'sidebar');
    sidebarContainer.appendChild(sidebar);

    const markdownContainer = initElement('div', 'markdown-body content');
    container.appendChild(markdownContainer);


    const response = await fetch(filePath);
    const markdownText = await response.text();
    const renderedHTML = marked.marked(markdownText);
    markdownContainer.innerHTML = renderedHTML;

    const headings = Array.from(markdownContainer.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        const indent = (level - 1) * 15; // 计算缩进
        const listItem = document.createElement('div');
        listItem.style.marginLeft = `${indent}px`;
        listItem.innerText = heading.innerText;
        listItem.className = 'sidebar-heading';
        listItem.dataset.headingId = `title-${index + 1}`;
        listItem.addEventListener('click', () => {
        heading.scrollIntoView({behavior: 'smooth'});
        toggleSidebar(true);
        });
        sidebar.appendChild(listItem);
    });

    // 高亮当前标题
    markdownContainer.addEventListener('scroll', () => {
        const mdTop = markdownContainer.getBoundingClientRect().top;
        if (headings.length !== 0) {
            let titleId;
            headings.forEach((heading, index) => {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= mdTop + 20) {
                titleId = `title-${index + 1}`;
                }
            });
            sidebar.querySelectorAll('.sidebar-heading').forEach(item => {
                item.style.color = '';
            });
            if (typeof(titleId) !== 'undefined') {
                sidebar.querySelector(`.sidebar-heading[data-heading-id="${titleId}"]`).style.color = 'white';
            }
        }
    });
    markdownContainer.dispatchEvent(new Event('scroll'));
    function toggleSidebar(closeOnly = false) {
        if (closeOnly) {
        sidebarContainer.classList.remove('active');
        overlay.classList.remove('active');
        } else {
        sidebarContainer.classList.toggle('active');
        overlay.classList.toggle('active');
        }
    }
    expandButton.addEventListener('click', () => {toggleSidebar();});
    overlay.addEventListener('click', () => {toggleSidebar(true);});
    } catch (error) {
    console.error('Error fetching or rendering Markdown:', error);
    }
}