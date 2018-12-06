# vue-cli-plugin-clair

Clair-Design plugin for `@vue/cli` 3.0.

##  Usage

1. follow installation guide by [vue-cli offical site](https://cli.vuejs.org/guide/installation.html).

2. create your own project:

```
vue create YOUR_PROJECT_NAME
```

Note that **dedicated config files** are preferred and recommended.

3. change your working directory to the project, with the command `cd YOUR_PROJECT_NAME`.

4. install and invoke this plugin (vue-cli-plugin-clair):

```
vue add clair
```

The result would be something like: 

![](https://ws2.sinaimg.cn/large/006tNbRwly1fxx5a31d7bj31840is75p.jpg)

5. let's explain some of these files that changed:

|           file              |      explanation    |
|-----------------------------|---------------------|
| src/plugins/clair-design.js |  This is where we import clair library  |
| src/styles/clair-design.css |  This is where we import clair stylesheet source code  |
| src/styles/clair-theme.css  |  This is where overwrite CSS variables of clair  |
| vue.config.js               |  'clair' is added to the [`transpileDependencies`](https://cli.vuejs.org/zh/config/#transpiledependencies) option: [reason](https://clair.75team.com/component/install/#guan-yu-polyfill-jian-tan-zai-vue-cli-3-xiang-mu-zhong-de-shi-yong)  |
| postcss.config.js           |  [related](https://clair.75team.com/component/theme)  |
| src/App.vue                 |  changed the initial App.vue file |
| src/main.js                 |  import our styles and plugins  |


## Acknowledgement

This project is inspired by the following projects ——

- https://github.com/iview/vue-cli-plugin-iview
- https://github.com/ElementUI/vue-cli-plugin-element

And also thanks to the [vue-cli](https://cli.vuejs.org/) project and its contributors.
