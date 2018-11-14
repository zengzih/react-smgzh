import React, { Component } from 'react';

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAllWidth: '',
      swipeWidth: '',
      translateX: '',
      swipeContent: '',
      swipeList: '',
      timer: null
    }
  }
  componentDidMount() {
    setTimeout(()=> {
      let {swipeContent, swipeWrapper} = this.refs;
      let { imgList } = this.props;
      let { timer } = this.state;
      let swipeList = swipeContent.querySelectorAll('li');
      let swipeWidth = swipeWrapper.offsetWidth;
      let allWidth = swipeWidth * imgList.length;
      timer = setInterval(this.swipeSlider.bind(this), 2000);
      this.setState({
        listAllWidth: allWidth,
        swipeWidth,
        swipeContent,
        swipeList,
      });
    });
  }
  swipeSlider() {
    let num = 0;
    let max = this.props.imgList.length;
    let { swipeWidth, swipeContent, swipeList, timer } = this.state;
    if (num == max - 1) {
      num = 0;
      swipeList[0].style.position = 'relative';
      swipeList[0].style.left = swipeWidth * swipeList.length + 'px';
    } else {
      num++;
    }
    this.startMove(swipeContent, { 'left': -swipeWidth * num }, ()=> {
      console.log('call', num)
      // clearInterval(timer);
      timer = setInterval(this.swipeSlider.bind(this), 2000);
      this.setState({timer});
    });
  }
  startMove(el, json, callback) {
    el.timer && clearInterval(el.timer);
    el.timer = setInterval(() => {
      this.doMove(el, json, callback)
    }, 30);
  }
  doMove(el, json, callback) {
    var iCur = 0;
    var attr = null;
    var bStop = true;
    for(attr in json){
      if(attr=='opacity'){
        iCur = parseInt(100*parseFloat(this.getStyle(el,attr)));
      }
      else{
        iCur = parseInt(this.getStyle(el,attr));
      }
      var iSpeed = (json[attr] - iCur)/8;
      iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      if(json[attr]!=iCur){
        bStop = false;
      }
      if(attr == 'opacity'){
        el.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
        el.style.opacity = (iCur + iSpeed) / 100;
      }
      else{
        el.style[attr] = iCur + iSpeed + 'px';
      }
    }
    if(bStop){
      clearInterval(el.timer);
      el.timer = null;
      if(callback){
        callback();
      }
    }
  }
  getStyle(el, attr) {
    return el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el, false)[attr];
  }

  render() {
    let { listAllWidth, swipeWidth } = this.state;
    let { imgList } = this.props;
    return (
      <div className='swipe_wrapper' ref="swipeWrapper">
        <ul className='swipe_list' ref='swipeContent' style={{'width':  listAllWidth + 'px'}}>
          {
            imgList.map((elt, index)=> (
              <li className='list-box' key={index} style={{ 'width': swipeWidth + 'px' }}>
                <img src={ elt.src } alt=""/>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default Swiper;
