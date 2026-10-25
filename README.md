# 朱洋意 · 个人作品集

> 🌐 线上地址：https://wenhulaojiu.github.io/portfolio/
> 📦 仓库：https://github.com/wenhulaojiu/portfolio
> 技术栈：零依赖、零构建，纯 HTML / CSS / JS 手写，编辑风格设计

## 以后怎么改（重要！换电脑 / 换 AI 对话框都看这里）

**所有内容（技能/项目/联系方式/AI 问答库）都在 `js/data.js` 一个文件里**，个别文案在 `index.html`。

### 方式一：自己动手改
```bash
git clone https://github.com/wenhulaojiu/portfolio.git
# 改 js/data.js → 保存
cd portfolio
git add . && git commit -m "更新内容" && git push
# 等约 1 分钟，线上自动生效
```

### 方式二：让 AI（ZCode / Claude / Cursor 等）帮你改
新开一个对话，把仓库克隆下来（或直接打开本文件夹），然后把下面这段话发给 AI：

```
这是我的个人作品集网站仓库（纯 HTML/CSS/JS，零依赖）。
- 所有内容数据都在 js/data.js，改它就行
- 配色在 css/style.css 顶部的 :root 变量
- 改完后帮我 git commit + push 到 GitHub，线上是 GitHub Pages 自动部署的
我要改的内容是：______（这里写你想改什么）
```

### 本机的本地副本
`C:\Users\Lenovo\.zcode\workspace\` 下的会话文件夹里有一份（含 .git），
但**长期以 GitHub 仓库为准**——换新会话时直接重新 clone 最干净。

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

- 开场名字动画 → Hero 星座连线背景（鼠标靠近：节点放大、连线跟随、轻推开星群）
- **交互增强层**：自定义光标（琥珀点+跟随环）、磁吸按钮、名字逐字入场、
  等宽标签悬停解码特效、Hero 滚动视差、全站胶片噪点、失焦标题彩蛋
  （触屏设备与「减少动画」偏好下自动关闭）
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
