const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// import { icons } from "./icons.js";

const content = document.querySelector('.content');
const menu = document.querySelector('.menu');
const buttons = menu.querySelectorAll(".btn");
const box = document.querySelector('.translate');
const attributes = ['copy', 'affix', 'search', 'translate'];

buttons.forEach((button, index) => {
  button.innerHTML = icons[index].icon;
  button.setAttribute('data-index', attributes[index]);
  button.querySelector('svg').setAttribute('data-index', attributes[index]);
});

let copyContent = "";

content.addEventListener("mouseup", function (e) {
  const selection = window.getSelection().toString();
  if (selection) {
    copyContent = window.getSelection().toString();
    localStorage.setItem('content', copyContent);
    showMenu(e.pageX, e.pageY);
  }
});

// 设置菜单位置
function showMenu(x, y) {
  menu.style.display = "block";
  const width = menu.offsetWidth;
  menu.style.left = x - width / 2 + "px";
  menu.style.top = y - 55 + "px";
}

// 菜单事件
menu.addEventListener('click', function (e) {
  menu.style.display = "none";
  const target = e.target;
  const isButton = target.tagName.toLowerCase() === 'button';
  const isSvg = target.tagName.toLowerCase() === 'svg';
  if (isButton || isSvg) {
    switch (target.getAttribute('data-index')) {
      case icons[0].name:
        handleCopy();
        break;
      case icons[1].name:
        console.log('粘贴');
        break;
      case icons[2].name:
        console.log('搜索');
        break;
      case icons[3].name:
        handleTranslate();
        break;
    }
  }
})

// 复制功能
function handleCopy() {
  navigator.clipboard.writeText(copyContent);
}

// 翻译功能
function handleTranslate() {
  box.textContent = localStorage.getItem('content');
  translate.setDocuments(box);
  translate.selectLanguageTag.show = false;
  translate.changeLanguage('english');
  translate.execute();
}
