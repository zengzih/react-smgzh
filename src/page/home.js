import React, { Component } from 'react';
import Swipe from '../components/swiper'
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        {src: 'http://120.25.127.162:8081/taro-web/upload/O20161130072228852QCk1VHKE/ad/20170324103008485aaJq.jpg'},
        {src: 'http://120.25.127.162:8081/taro-web/upload/O20161130072228852QCk1VHKE/ad/20170324103016736KdOe.jpg'}
      ],
      menuList: [
        {label: '我的订单', src: '', type: 'order'},
        {label: '产品中心', src: '', type: 'productInfo'},
        {label: '净值查询', src: '', type: 'netWorth'},
        {label: '报告查询', src: '', type: 'report'}
      ],
      userInfo: {}
    }
    
  }
  handleMenuNav(elt) {
    let { userInfo } = this.state;
    if (!userInfo.id) {
      this.props.history.push('/login');
    }
    switch (elt.type) {
      case 'order':
        this.props.history.push('/appointmanage');
        break;
      
    }
  }
  render() {
    let { imgList, menuList } = this.state;
    return (
      <div>
        <Swipe imgList={imgList}></Swipe>
        <div className="menu_list">
          {
            menuList.map(elt=> (
              <div onClick={this.handleMenuNav.bind(this, elt)} key={elt.type}>
                <img src="" alt=""/>
                <div>{ elt.label }</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default withRouter(Home);
