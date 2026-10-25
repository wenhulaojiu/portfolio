# 朱洋意 · 个人作品集

编辑部 / 研究报告风格的个人作品集：米白纸感与深炭黑分节交替、衬线大标题、等宽小标签、琥珀橙点缀、星座连线 Canvas、滚动进度条、AI 助手。零依赖、零构建，纯 HTML / CSS / JS 手写。

## 本地预览

直接双击 `index.html`，或：

```bash
python -m http.server 8080   # 访问 http://localhost:8080
```

## 改内容只动一个文件

**90% 的修改都在 `js/data.js`**（技能、项目、统计、联系方式、AI 问答库）。
个别文字（自我介绍段落、页面标题）在 `index.html` 里直接搜索替换。

配色在 `css/style.css` 顶部的 `:root` 变量里（`--amber` 换主题色最明显）。

## 已内置

- 开场名字动画 → Hero 星座连线背景（鼠标靠近节点会变大）
- 深色/浅色主题切换（默认米白纸感，记忆偏好）
- 技术栈跑马灯、打字机、数字滚动、滚动进度条、分区导航高亮
- 联系卡片一键复制（剪贴板 + Toast 提示）
- AI 助手：离线关键词版（无需 API Key），`js/main.js` 文末有接真·大模型的示例代码

## 部署

### GitHub Pages
```bash
git init && git add . && git commit -m "feat: portfolio v2"
git branch -M main
git remote add origin https://github.com/wenhulaojiu/portfolio.git
git push -u origin main
# 仓库 Settings → Pages → Branch: main → Save
```

### Vercel
```bash
npm i -g vercel && vercel
```

上线后：把链接填进 `js/data.js` 第一个项目的 `links`，简历、GitHub 主页也都放上这个链接。

## 注意

- 页面上公开了电话 / 微信 / QQ——如果担心骚扰，删掉 `data.js` 里 `contacts` 中对应条目即可（建议至少保留邮箱和 GitHub）。
- `webhulaojiu@gmail.com` 请自行确认拼写（GitHub 用户名是 wenhulaojiu，少一个 n 的是邮箱是你本意吗？）。
