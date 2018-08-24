# Taro demo for 支持支付宝小程序

## 涉及改动 taro 框架的新增

* [tarojs-aliapp-s4s](https://github.com/shpeng/taro/tree/master/packages/taro-aliapp) [tarojs-transformer-ali-s4s](https://github.com/shpeng/taro/tree/master/packages/taro-transformer-ali)
* [tarojs-cli-s4s](https://github.com/shpeng/taro/tree/master/packages/taro-cli)

## 支付宝小程序编译
```
$ npm run build:aliapp
```

## 支付宝小程序预览
```
$ npm run build:aliapp -- --watch
```

## bugs
<font color=#DC143C>TypeError: _index2.default.initPxTransform is not a function</font>
taro-weapp/dist/index 编译不完整，没有打包 initPxTransform
可以尝试重新打包：
```
$ ./node_modules/.bin/rollup -c packages/taro-weapp/rollup.config.js
```