# prayingForRain
用于应对军训的祈雨方法

## 项目地址
- 项目主页：[https://prayingForRain.bacz.top/](https://prayingForRain.bacz.top/)
  > 托管于Cloudflare Pages（原始URL：[https://prayingforrain.pages.dev/](https://prayingforrain.pages.dev/)，若`bacz.top`域名过期可尝试访问该URL)
- Github: [https://github.com/bacz00/prayingForRain](https://github.com/bacz00/prayingForRain)

## 项目结构
```sh
/plans/ #可在此编写完整的计划
/index.html #项目主页，包含所有零碎的内容
/index.md #在这里编辑项目主页的内容
/README.html #自述文件页面（本页面）
/README.md #在这里修改自述文件
/LICENSE #开源许可证
```

## <a id="tutorial"></a>教程|如何编辑此项目
以下为基础操作，如果你会使用Git工具，可按自己习惯的方法操作。但是，我们仍建议你阅读下方的**修改已有文件**与**新增文件**，以了解你需要编辑哪些文件。
### 最简单但低效的方法
注册Github账号后点击`Issues`-`New issue`[（或打开此链接）](https://github.com/bacz00/prayingForRain/issues/new)，直接写下你的想法，或者通过其他任意途径告诉我你的想法。
### Github基础操作
本项目源代码托管在Github，以下是一些基础操作
1. 注册或登录
2. <a id="tutorial-fork"></a>Fork项目
    - 打开[项目的Github地址](https://github.com/bacz00/prayingForRain)
    - 点击位于页面上方的Fork按钮[（或打开此链接）](https://github.com/bacz00/prayingForRain/fork)
    - 点击`Create fork`按钮
3. 在你自己的项目中进行修改（方法见下文）
4. <a id="tutorial-pr"></a>提交Pull request
    - 在你自己的项目中，打开Pull requests页面（URL应为`https://github.com/你的Github用户名/prayingForRain/pulls`）
    - 点击`New pull request`按钮
    - 点击`Create pull request`按钮
    - 在`Leave a comment`输入框处输入一些文字以简述更改的内容或留言（亦可直接留空），然后点击`Create pull request`按钮
### 修改已有文件
1. 在[Fork项目](#tutorial-fork)之后在你自己的项目中打开你要修改的`.md`文件（`.html`文件与`.md`文件是一一对应的，修改`.md`文件即可）
2. 点击编辑按钮（铅笔图标）
3. 编辑完成后点击`Commit changes...`按钮，在弹出的窗口中点击`Commit changes`按钮
4. 在完成所有编辑后，[提交Pull request](#tutorial-pr)
### 新增文件
首先，你需要知道，每一个`.md`文件和`.html`文件都是一一对应的，`.md`文件用于编写文章的内容，`.html`文件仅用于指定页面标题与对应的`.md`文件的文件名。  
plans目录下的每一个目录中都必须有`index.md`与`index.html`，这是你的方案的主页。如果你需要，你还可以创建其他页面。
1. 创建`.md`文件  
    - 打开[plans目录](https://github.com/bacz00/prayingForRain/tree/main/plans)，点击`Add file`-`Create new file`[（或打开此链接）](https://github.com/bacz00/prayingForRain/new/main/plans)
    - <a id="tutorial-create-plan-dir"></a>在上方的`Name your file...`输入框中输入一个自定义的目录名称（不能与[plans目录](https://github.com/bacz00/prayingForRain/tree/main/plans)中的其他目录重名）
    - 然后输入一个半角斜杠`/`
    - 再输入`index.md`（如果你要创建其他页面，请将`index`替换为其他内容）
    - 你可以在下面的输入框中随意输入内容（如果你会使用markdown，你可以在这里使用markdown样式）（换行需要在前一行末尾加两个空格，分段需要按两次回车）
    - 你可以随时点击`Preview`进行预览，点击`Edit`继续编辑
    - 编辑完成后点击`Commit changes...`按钮，在弹出的窗口中点击`Commit changes`按钮
2. 创建`.html`文件
    - 打开[示例html文档](https://github.com/bacz00/prayingForRain/blob/main/plans/example/index.html)，复制所有内容
    - 进入[plans目录](https://github.com/bacz00/prayingForRain/tree/main/plans)，然后打开[你在第1步中创建的目录](#tutorial-create-plan-dir)
    - 点击`Add file`-`Create new file`
    - 在上方的`Name your file...`输入框中输入`index.html`（如果你要创建其他页面，请将`index`替换为其他内容）
    - 在下方粘贴
    - 将第6行`<title>Example Page | 祈雨</title>`中的`Example Page`换为你想设置的页面标题
    - 如果你要创建主页（index）以外的其他页面，你需要将第15行的`fetchAndRenderMarkdown('./index.md');`中的`index`换为其他文件名
3. 在完成所有编辑后，[提交Pull request](#tutorial-pr)

## 贡献者
我们向每一位对此项目做出贡献的成员表示衷心的感谢。我们希望您在做出贡献时，能在此处留下您的名字。  
您可以直接在本文件中添加您的名字并提交Pull request（推荐的格式：`- **姓名或其他名称** [@github-id](https://github.com/github-id) email@example.com`，您也可以以`[展示的文本](实际链接)`的格式添加其他链接），或在您的Pull request中留言，写下您想展示的信息。（当然，您也可以出于隐私保护等原因不提供您的信息）
### 贡献者列表
- **Bacz** [@bacz00](https://github.com/bacz00)
