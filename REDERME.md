未实现功能：

- 选中一个或多个块元素时，菜单位置未处于元素下方
- 翻译功能未完全实现

问题：

- button-->svg-->path 标签，绑定事件到 button 上，但点击 button 会定位到 svg 或者 path 上，无法将两者触发 button 事件
- 第一次翻译可以翻译出来，第二次会刷新页面清空翻译，以此类推，无法解决

翻译插件：https://gitee.com/mail_osc/translate
