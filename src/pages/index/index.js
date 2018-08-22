/*
 * Copyright (C) 2018 The Jindouyun Project
 * Created by beck
 * Chasing Inc.
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

const icons = [
  {
    title: '审批',
    icon: 'https://s4s-app.oss-cn-hangzhou.aliyuncs.com/jdy/@2xGroup 15.png',
    path: '/pages/Coupon/ApprovalPane',
  },
  {
    title: '活动签到',
    icon: 'https://s4s-app.oss-cn-hangzhou.aliyuncs.com/jdy/@2xGroup 14.png',
    path: '/pages/Activity/ActivityList',
  },
  {
    title: '商品核销',
    icon: 'https://s4s-imges.oss-cn-hangzhou.aliyuncs.com/300/180809164527999.png',
  },
  {
    title: '发放出门单',
    icon: 'https://s4s-app.oss-cn-hangzhou.aliyuncs.com/jdy/apph5/static/module_levelsheet.png',
    path: '/pages/VehicleEntrance/LevelSheet',
  },
  {
    title: '开门',
    icon: 'https://s4s-app.oss-cn-hangzhou.aliyuncs.com/jdy/apph5/static/module_opendoor.png',
    path: '/pages/VehicleEntrance/opendoor',
  },
];

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    };
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goMine() {}

  render () {
    let user = this.state.user;
    return (
      <View className='container' style="background-color:#fff;">
        <View style="display:flex; align-items: center; padding: 10px 16px;" onClick={this.goMine.bind(this)}>
          <Image className="avatar" src={user && user.Icon ? user.Icon : encodeURI("https://s4s-imges.oss-cn-hangzhou.aliyuncs.com/img/def.png")} style={{width:36, height:36}}/>
          <View style="display:flex; flex-direction: column; flex:1; margin-left: 16px;">
            <Text className='text_medium'>{ user && user.Name ? user.Name : "请登录"}</Text>
          </View>
          <Image className="arrow_right" src="https://s4s-app.oss-cn-hangzhou.aliyuncs.com/jdy/apph5/static/arrow_right@3x.png" style={{width: 7.5,height: 10}}/>
        </View>
        <View style="border:1px solid #F5F5F5;"/>
        <View style="background-color: #fff;">
          {
            icons.map(icon => (
              <View style="display:inline-block;width:33%;">
                <View className='module_wrap' onClick={this.iconClick.bind(this)}>
                  <Image className='module_icon' src={encodeURI(icon.icon)} style={{width:"80px", height: "80px"}} mode='aspectFit' />
                  <Text>{icon.title}</Text>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

