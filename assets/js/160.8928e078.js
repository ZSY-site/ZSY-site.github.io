(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{2269:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"linux-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用命令"}},[s._v("#")]),s._v(" Linux 常用命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建文件夹, 其名称为 demo")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" demo\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建hello.txt文件（Visual editor）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" hello.txt \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 i 进入编辑模式")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ESC + ：+ wq 保存并退出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ESC + ：+ q! 不保存并退出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd demo 进入 demo 目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd ..  返回上一级目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls  列出当前文件夹中所有文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd  显示当前目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat hello.txt 显示文件内容")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清屏")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h2",{attrs:{id:"设置用户签名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置用户签名"}},[s._v("#")]),s._v(" 设置用户签名")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 git 安装完成后是需要设置用户签名的，否则后续提交代码是会报错的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面填写的用户名和邮箱都是虚拟的，git不会进行验证")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name ZSY（用户名）\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email ZSY@qq.com（邮箱）\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上面设置的用户签名会保存到该目录: C:\\Users\\a1371\\.gitconfig 文件！")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("说明：\n"),n("ul",[n("li",[s._v("签名的作用是区分不同操作者身份。用户的签名信息在每一个版本的提交信息中能够看到，以此确认本次提交是谁做的。Git 首次安装必须设置一下用户签名，否则无法提交代码。")]),s._v(" "),n("li",[s._v("注意：这里设置用户签名和将来登录 GitHub（或其他代码托管中心）的账号没有任何关系。")])])])]),s._v(" "),n("h2",{attrs:{id:"初始化本地库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化本地库"}},[s._v("#")]),s._v(" 初始化本地库")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行下面命令，会生成 .git 文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个文件夹是 Git 来跟踪管理版本库的，不要去修改和删除这个文件里的内容。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也通过如下的命令来展示所有的文件（包括隐藏文件）")]),s._v("\nll "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"查看本地库状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看本地库状态"}},[s._v("#")]),s._v(" 查看本地库状态")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("红色")]),s._v("表示在工作区。")]),s._v(" "),n("li",[n("code",[s._v("绿色")]),s._v("表示在暂存区。")]),s._v(" "),n("li",[n("code",[s._v("没有任何显示")]),s._v("代表所有文件位于版本区。")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是首次查看本地库状态，则可能输出如下的内容：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# On branch master  // 表示在 master 分支，在我们安装git的时候，可以选择默认初始化就是 master 分支!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# No commits yet    // 表示代码尚未提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# nothing to commit (create/copy files and use "git add" to track)  // 表示没有代码需要提交')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增文件, 并写入内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 没有 hello.txt 文件的话，会直接新增文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" hello.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 i，进入插入模式，输入内容，随后按下 Esc 键，把光标停留在某一行，按下 yy，则会把当前行复制，再按下 p，则会进行粘贴。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按下 Esc, 输入 :wq 表示保存并退出")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地库状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会看到显示为红色，表示存在于工作区，git 还没有追踪该文件")]),s._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备注：git 和 linux 的命令是通用的")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"添加暂存区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加暂存区"}},[s._v("#")]),s._v(" 添加暂存区")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" hello.txt（文件名）\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可能会出现警告：warning: LF will be replaced by CRLF in xxxx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原因： linux 和 window 的换行符不一致导致的。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决方式：执行命令 git config --global core.autocrlf false")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地库状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会发现显示为绿色，则表示 git 已经追踪到该文件了，此时文件存在于暂存区，暂存区的文件是可以被删掉的")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除暂存区的文件 hello.txt")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cached")]),s._v(" hello.txt（文件名）\n\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会发现 hello.txt 又变为红色的，所有又只是存在于工作区")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：当我们将文件提交到暂存区的时候，是不会形成历史版本的，因此我们下面需要将其提交到本地库")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"提交本地库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交本地库"}},[s._v("#")]),s._v(" 提交本地库")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将暂存区的文件提交到本地库，形成自己的历史版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("（版本信息） hello.txt（文件名）\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随后，你可能会看到类似这样的 【56089fb】 7位，这个其实就是版本号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果只输入 git commit 会出问题，这时需要 ESC + ：+ q! 退出就好")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"查看历史版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看历史版本"}},[s._v("#")]),s._v(" 查看历史版本")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你可能会看到类似如下的输出：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备注：56089fb 是版本号，是完整的版本号的前7位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 56089fb (HEAD -> master) HEAD@{0}: commit (initial): first commit")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本详细信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你可能会看到类似如下的输出：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备注：56089fb9f30fc5f7492650a6e93fcce4cdb6ccc8是完整的版本号，同时你还会看到【用户签名】，提交时间等")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit 56089fb9f30fc5f7492650a6e93fcce4cdb6ccc8 (HEAD -> master)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: zsy <a13715099660@163.com>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Date:   Tue May 23 19:55:20 2023 +0800")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   first commit")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("注意：\n"),n("ul",[n("li",[s._v("在 git 中，是以行为单位的，如果你只是修改了某一行，则 git 会把当前行删除，然后再新增")]),s._v(" "),n("li",[s._v("因此会显示新增一行，删除一行")])])])]),s._v(" "),n("h2",{attrs:{id:"版本穿梭"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本穿梭"}},[s._v("#")]),s._v(" 版本穿梭")]),s._v(" "),n("ul",[n("li",[s._v("通过上面的学习，我们知道每一次执行 git commit 都会产生一个版本号，如果哪天觉得最新的版本的代码写的不好，想回到之前的版本，就可以利用版本穿梭")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随后把想要回到的版本的那个版本的版本号复制下来")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 穿越到指定版本代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" d9ba60c（版本号）\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次查看版本信息，你可能会看到如下的输出：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备注：第一行是操作日志，并且你会发现指针也发现了偏移")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# d9ba60c (HEAD -> master) HEAD@{0}: reset: moving to d9ba60c")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# d9ba60c (HEAD -> master) HEAD@{1}: commit: second commit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 56089fb HEAD@{2}: commit (initial): first commit")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看文件内容, 观察当前是在哪个版本的代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" hello.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 版本回退，回退到上一次的提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" HEAD^ \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("ul",[n("li",[s._v("补充：\n"),n("ul",[n("li",[n("ol",[n("li",[s._v("查看当前所在的分支：找到 【项目文件夹\\ .git\\HEAD 文件】，保存的是当前所在的分支")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[s._v("查看当前所在的版本：找到【项目文件夹\\ .git\\refs\\heads\\master】, 保存的是 master 分支的所在的版本号")])])])])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 待实现")]),s._v("\ngit reset "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" 用版本库中的文件去替换暂存区的全部文件。\ngit checkout "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt  用暂存区指定文件去替换工作区的指定文件（危险）\ngit checkout "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt 用版本库中的文件替换暂存区和工作区的文件（危险）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"版本穿梭的底层原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本穿梭的底层原理"}},[s._v("#")]),s._v(" 版本穿梭的底层原理")]),s._v(" "),n("ul",[n("li",[n("ol",[n("li",[s._v("Git 切换版本，底层其实是移动的 HEAD 指针。一开始 head 指向 master 分支，而 master 分支指向的是 first 版本")])]),s._v(" "),n("ul",[n("li",[n("img",{attrs:{src:a(675),alt:""}})])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[s._v("后来新增了 second 版本，那么就会把 master 指针指向 second 版本，而 head 是不会移动的！")])]),s._v(" "),n("ul",[n("li",[n("img",{attrs:{src:a(676),alt:""}})])])])]),s._v(" "),n("h2",{attrs:{id:"删除文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[s._v("#")]),s._v(" 删除文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除hello.txt文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" hello.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除demo文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" demo\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:a(677),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"差异对比-了解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#差异对比-了解"}},[s._v("#")]),s._v(" 差异对比(了解)")]),s._v(" "),n("ul",[n("li",[s._v("git diff : 比较暂存区与工作区")]),s._v(" "),n("li",[s._v("git diff --cached : 比较版本区与暂存区")]),s._v(" "),n("li",[s._v("git diff master : 比较版本区与工作区")])])])}),[],!1,null,null,null);t.default=e.exports},675:function(s,t){s.exports="data:image/png;base64,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"},676:function(s,t,a){s.exports=a.p+"assets/img/39.9b74e098.png"},677:function(s,t,a){s.exports=a.p+"assets/img/40.7c8e321f.png"}}]);