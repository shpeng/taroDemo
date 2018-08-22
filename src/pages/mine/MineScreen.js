/*
 * Copyright (C) 2018 The Jindouyun Project
 * Created by beck
 * Chasing Inc.
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import './MineScreen.css'

// import utils from '../../util/utils'

// import loginDialog from '../Component/Login'

export default class MineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //user: utils.getUserInfo()
    }
  }
  config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  login() {
    // if (utils.getToken()) {
    //   return;
    // } else {
    //   loginDialog({
    //     onDismiss: ()=> {
    //       console.log('Login dialog dismiss now ');
    //       this.setState({
    //         user: global.user
    //       })
    //     }
    //   });
    // }
  }

  logout() {
    alert('logout')
    // utils.logout();
    // this.setState({
    //   user: null
    // })
  }

  render () {
    let { user } = this.state
    return (
      <View className='container'>
        <View className='header' onClick={this.login}>
          <Image className="avatar" src={user && user.Icon ? user.Icon : encodeURI("https://s4s-imges.oss-cn-hangzhou.aliyuncs.com/img/def.png")} style={{width:60, height:60}} />
          <View style="display:flex; flex-direction: column; flex:1; margin-left: 20px;">
            <Text className='text_large'>{ user && user.Name ? user.Name : "请登录"}</Text>
            <Text className='text_medium'>{ user && user.ShopUser && user.ShopUser.Shop && user.ShopUser.Shop.Name ? user.ShopUser.Shop.Name : "点击登录"}</Text>
          </View>
          {/* <Image className="arrow_right" src="https://s4s-app.oss-cn-hangzhou.aliyuncs.com/jdy/apph5/static/arrow_right@3x.png" /> */}
        </View>

        {
            user && <View className='weui-btn-area'><Button className="weui-btn weui-btn_primary" onClick={this.logout} >退出登录</Button></View>
        }
      </View>
    )
  }
}