import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/mine/MineScreen',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
        backgroundColor: '#fff',
        selectedColor: '#F0954E',
        list: [
          {
            pagePath: 'pages/index/index',
            text: '首页',
            iconPath: 'assets/tabBar_icon_home_normal@2x.png',
            selectedIconPath: 'assets/tabBar_icon_home_selected@2x.png'
          },
          {
            pagePath: 'pages/mine/MineScreen',
            text: '我的',
            iconPath: 'assets/tabBar_icon_mine_normal@2x.png',
            selectedIconPath: 'assets/tabBar_icon_mine_selected@2x.png'
          },
          // {
          //   pagePath: 'pages/message/MessageScreen',
          //   text: '消息',
          //   iconPath: './Asset/tabBar_icon_message_normal@2x.png',
          //   selectedIconPath: './Asset/tabBar_icon_message_selected@2x.png'
          // },

        ]
      }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
