# Common Issues 

## 现有项目在执行 `vue add clair` 时报错

在现有项目中加入 vue-cli-plugin-clair 插件时，可能会类似下面的报错信息 ——

![](https://ws2.sinaimg.cn/large/006tNbRwly1fxx7q0ydxoj31gy0c8jsp.jpg)

解决方案：先执行 `npm uninstall clair` 或者直接删掉 package.json 里面的 clair 依赖，然后再运行 `vue add clair`。

原因：因为你此前已经安装过 clair，而 vue-cli-plugin-clair 里面指定的是 `clair: "*"`，在某些情况下可能造成上图中的报错。
