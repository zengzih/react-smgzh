import React, { Component } from 'react';

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAllWidth: ''
    }
  }
  componentDidMount() {
    setTimeout(()=> {
      let swipewList = this.refs.swipeList;
      let aList = swipewList.querySelectorAll('li');
      let allWidth = 0;
      aList.forEach(elt=> {
        allWidth += elt.offsetWidth;
      });
      this.setState({
        listAllWidth: allWidth
      });
    });
  }
  render() {
    let { listAllWidth } = this.state;
    let { imgList } = this.props;
    return (
      <div className='swipe_wrapper'>
        <ul className='swipe_list' ref='swipeList' style={{'width':  listAllWidth + 'px' }}>
          {
            imgList.map((elt, index)=> (
              <li className='list-box' key={index}>
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
