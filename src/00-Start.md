这篇是介绍如何配置 Atom、Nuclide、flow

1. 安装 Atom
2. 再 Atom 的 Preferences 中选择 install，搜索 Nuclide，然后安装
3. 按照flow，可以运行如下命令：
  ```
    brew install flow
  ``
  这里安装 flow 主要是由于 Nuclide 能够在后台运行 flow，实时（其实是文件保存时候）的使用 flow 检查。
  当然同样可以使用 flow-bin 这个可以自己去搜
4. 创建一个目录，使用 npm init 创建一个工程。
5. 安装 babel-cli、babel-preset-flow
  ```
    yarn add --dev babel-cli babel-preset-flow
  ```
  由于 flow 在原生的 js 上面添加了一些类型信息，这些类型信息需要在执行之前去掉，否则无法执行。babel-preset-flow 主要是用于去掉这些信息的。所以也就说明，使用了 flow 之后，我们的 js 必须babel 转换后才能执行。
6. 添加 babel 编译配置文件。创建 .babelrc， 内容如下：
  ```
    {
      "presets": ["flow"]
    }
  ```
7. 启用 flow 检查。
  在 js 文件的开始添加如下注释，就能够启用 flow 检查。
  ```
    // @flow
  ```
8. 编译
  在 package.js 中添加如下内容：
  ```
    "scripts": {
      "build": "babel src/ -d lib/",
      "prepublish": "yarn run build"
    },
  ```
  然后运行 yarn run build， 就能够在 lib 文件夹中看到编译后的js了。

剩下的东西就看对应的js文件，一般都有注释。
