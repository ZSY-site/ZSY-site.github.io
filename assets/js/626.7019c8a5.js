(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{2371:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("jdk"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jenkins 官网"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"安装-jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-jdk"}},[s._v("#")]),s._v(" 安装 JDK")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase10-4425482.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("jdk"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://img.zhufengpeixun.cn/jdk1.8.0_211.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" jdk1.8.0_211.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" /usr/local/src/jdk1.8.0_211 /usr/java\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /usr/bin/java　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("　"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/java/jdk1.8.0_211/bin/java /usr/bin/java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),t("p",[s._v("vi /etc/profile")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/java/jdk1.8.0_211\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/jre/lib/rt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/lib/tools.jar\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/bin\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"生效配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生效配置"}},[s._v("#")]),s._v(" 生效配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"安装-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-jenkins"}},[s._v("#")]),s._v(" 安装 jenkins")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--import")]),s._v(" https://pkg.jenkins.io/redhat-stable/jenkins.io.key\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" jenkins\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"关闭防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙"}},[s._v("#")]),s._v(" 关闭防火墙")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl stop firewalld.service\nsystemctl disable firewalld.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("javap "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" JNLPMain.class\nJ2SE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v("\nJ2SE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v("\nJ2SE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\nJ2SE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),s._v("\nJDK "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v("\nJDK "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v("\nJDK "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\nJDK "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"启动-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-jenkins"}},[s._v("#")]),s._v(" 启动 jenkins")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start jenkins\nsystemctl daemon-reload\nsystemctl status jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"选择-java-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择-java-版本"}},[s._v("#")]),s._v(" 选择 java 版本")]),s._v(" "),t("p",[s._v("vi /etc/init.d/jenkins")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("candidates")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n#/etc/alternatives/java\n#/usr/lib/jvm/java-1.8.0/bin/java\n#/usr/lib/jvm/jre-1.8.0/bin/java\n#/usr/lib/jvm/java-1.7.0/bin/java\n#/usr/lib/jvm/jre-1.7.0/bin/java\n/usr/bin/java\n"')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"运行用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行用户"}},[s._v("#")]),s._v(" 运行用户")]),s._v(" "),t("p",[s._v("一定要改一下 root 用户，不然流水线 SCM 拉不到脚本 vi /etc/sysconfig/jenkins")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"访问-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问-jenkins"}},[s._v("#")]),s._v(" 访问 jenkins")]),s._v(" "),t("p",[s._v("http://192.168.20.133:8080")]),s._v(" "),t("h2",{attrs:{id:"安装-maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-maven"}},[s._v("#")]),s._v(" 安装 maven")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" maven "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -ql maven")]),s._v("\n\n/etc/m2.conf\n/etc/maven\n/etc/maven/settings.xml\n/usr/bin/mvn\n/usr/share/maven/conf/settings.xml\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"使用-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-jenkins"}},[s._v("#")]),s._v(" 使用 jenkins")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://plugins.jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jenkins"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("OWASP(Open Web Application Security Project),开放式 Web 应用程序安全项目,它识别项目依赖关系，并检查是否存在任何已知的和公开的漏洞.")]),s._v(" "),t("li",[s._v("PAM（Pluggable Authentication Modules ）是由 Sun 提出的一种认证机制。它通过提供一些动态链接库和一套统一的 API，将系统提供的服务和该服务的认证方式分开，使得系统管理员可以灵活地根据需要给不同的服务配置不同的认证方式而无需更改服务程序，同时也便于向系统中添加新的认证手段。 PAM 模块是一种嵌入式模块，修改后即时生效。")]),s._v(" "),t("li",[s._v("LDAP（Light Directory Access Portocol）,它是基于 X.500 标准的轻量级目录访问协议")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("插件名称")]),s._v(" "),t("th",[s._v("插件作用")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Folders")]),s._v(" "),t("td",[t("a",{attrs:{href:"https://plugins.jenkins.io/cloudbees-folder",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个插件支持用户使用目录管理项目，目录支持嵌套，并且支持目录中创建视图"),t("OutboundLink")],1)])]),s._v(" "),t("tr",[t("td",[s._v("OWASP Markup Formatter")]),s._v(" "),t("td",[s._v("OWASP 标记格式化程序插件,使用 OWASP Java HTML Sanitizer ，可以在项目描述等中输入安全的 HTML 标记")])]),s._v(" "),t("tr",[t("td",[s._v("Build Timeout")]),s._v(" "),t("td",[s._v("构建超时,此插件允许构建在指定的时间过后自动终止")])]),s._v(" "),t("tr",[t("td",[s._v("Credentials Binding")]),s._v(" "),t("td",[s._v("证书绑定")])]),s._v(" "),t("tr",[t("td",[s._v("Timestamper")]),s._v(" "),t("td",[s._v("将时间戳添加到控制台输出")])]),s._v(" "),t("tr",[t("td",[s._v("Workspace Cleanup")]),s._v(" "),t("td",[t("a",{attrs:{href:"https://plugins.jenkins.io/ws-cleanup",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个插件支持在构建前后 删除或者部分删除 workspace"),t("OutboundLink")],1)])]),s._v(" "),t("tr",[t("td",[s._v("Ant")]),s._v(" "),t("td",[s._v("向 Jenkins 添加 Apache Ant 支持")])]),s._v(" "),t("tr",[t("td",[s._v("Gradle")]),s._v(" "),t("td",[s._v("这个插件允许 Jenkins 直接调用 Gradle 构建脚本")])]),s._v(" "),t("tr",[t("td",[s._v("Pipeline")]),s._v(" "),t("td",[s._v("管道,一套插件可让您协调自动化")])]),s._v(" "),t("tr",[t("td",[s._v("Pipeline: GitHub Groovy Libraries")]),s._v(" "),t("td",[s._v("允许从 GitHub 动态加载 Pipeline Groovy 库")])]),s._v(" "),t("tr",[t("td",[s._v("Pipeline: Stage View")]),s._v(" "),t("td",[s._v("查看每一步的执行结果")])]),s._v(" "),t("tr",[t("td",[s._v("GitHub Branch Source")]),s._v(" "),t("td",[s._v("GitHub 组织文件夹插件")])]),s._v(" "),t("tr",[t("td",[s._v("Git")]),s._v(" "),t("td",[t("a",{attrs:{href:"https://plugins.jenkins.io/git",target:"_blank",rel:"noopener noreferrer"}},[s._v("支持使用 Github、GitLab、Gerrit 等系统管理代码仓库"),t("OutboundLink")],1)])]),s._v(" "),t("tr",[t("td",[s._v("Subversion")]),s._v(" "),t("td",[t("a",{attrs:{href:"https://plugins.jenkins.io/subversion",target:"_blank",rel:"noopener noreferrer"}},[s._v("支持 Subversion 系统管理源代码"),t("OutboundLink")],1)])]),s._v(" "),t("tr",[t("td",[s._v("SSH Slaves")]),s._v(" "),t("td",[s._v("SSH 登录到一个远程服务器以执行必要的脚本")])]),s._v(" "),t("tr",[t("td",[s._v("Matrix Authorization Strategy")]),s._v(" "),t("td",[s._v("矩阵授权策略插件,提供基于矩阵的安全授权策略（全局和每个项目）")])]),s._v(" "),t("tr",[t("td",[s._v("PAM Authentication")]),s._v(" "),t("td",[s._v("为 Jenkins 添加 Unix 可插入身份验证模块（PAM）支持")])]),s._v(" "),t("tr",[t("td",[s._v("LDAP")]),s._v(" "),t("td",[t("a",{attrs:{href:"https://plugins.jenkins.io/ldap",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个插件允许使用 LDAP 对用户进行认证，LDAP 服务器可以为 Active Directory 或者 OpenLDAP"),t("OutboundLink")],1)])]),s._v(" "),t("tr",[t("td",[s._v("Email Extension")]),s._v(" "),t("td",[s._v("这个插件是 Jenkins 的电子邮件发布者的替代品。它允许配置电子邮件通知的各个方面：发送电子邮件时，应该收到谁以及电子邮件说明的内容")])]),s._v(" "),t("tr",[t("td",[s._v("Mailer")]),s._v(" "),t("td",[s._v("发邮件服务")])]),s._v(" "),t("tr",[t("td",[s._v("Localization: Chinese (Simplified)")]),s._v(" "),t("td",[s._v("本地化构建")])])])]),s._v(" "),t("h2",{attrs:{id:"下载插件加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载插件加速"}},[s._v("#")]),s._v(" 下载插件加速")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://mirrors.jenkins-ci.org/status.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mirrors"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("update-center"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"创建管理员用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建管理员用户"}},[s._v("#")]),s._v(" 创建管理员用户")]),s._v(" "),t("h2",{attrs:{id:"主要功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要功能"}},[s._v("#")]),s._v(" 主要功能")]),s._v(" "),t("ul",[t("li",[s._v("新建任务")]),s._v(" "),t("li",[s._v("用户")]),s._v(" "),t("li",[s._v("构建历史")]),s._v(" "),t("li",[s._v("系统管理")]),s._v(" "),t("li",[s._v("我的视图")]),s._v(" "),t("li",[s._v("Credentials")]),s._v(" "),t("li",[s._v("新建视图")])])])}),[],!1,null,null,null);a.default=n.exports}}]);