import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        '   中国证监会2014年8月21日发布的《私募投资基金监督管理暂行办法》（中国证监会令第105号）规定“私募基金管理人、私募基金销售机构不得向合格投资者之外的单位和个人募集资金，不得通过报刊、电台、电视、互联网等公众传播媒体或者讲座、报告会、分析会和布告、传单、手机短信、微信、博客和电子邮件等方式，向不特定对象宣传推介。”',
        '   因此深圳市鑫泉资本管理有限公司微信公众号只向特定的合格投资者开放，请您确认您或您所代表的机构是一名“合格投资者”。依据《私募投资基金监督管理暂行办法》相关规定，符合下列条件的投资主体为合格投资者：',
        '一、具备相应风险识别能力和风险承担能力，投资于单只私募基金的金额不低于100万元且符合下列相关标准的单位和个人： \n' +
        '  1、净资产不低于1000万元的单位； \n' +
        '  2、个人金融资产(包括银行存款、股票、债券、基金份额、资产管理计划、银行理财产品、信托计划、保险产品、期货权益等)不低于300万元或者最近三年个人年均收入不低于50万元。\n' +
        '\n' +
        '  二、其他符合中国证监会规定的合格投资者。'
      ],
      isCheck: false
    }
  }
  handleSubmit() {
    let { isCheck } = this.state;
    if (isCheck) {
      this.props.history.push('/home');
    }
  }
  handleCancel() {
    
  }
  handleChange(e) {
    this.setState({
      isCheck: e.target.checked
    });
  }
  componentDidMount() {
    document.body.addEventListener('touchmove', (ev)=> {
      ev.preventDefault();
    });
  }
  render() {
    let {content} = this.state
    return (
      <div className="start_wrapper">
        <header>合格投资者确认</header>
        <div className="content">
          {
            content.map((elt, index) => {
              return (
                <p key={index}>{elt}</p>
              )
            })
          }
        </div>
        <div className="footer">
          <label htmlFor="read">
            <input type="checkbox" id='read' onChange={event => this.handleChange(event)}/>
            <span className='inner'></span>
            已同意并阅读 <a href="#">《网络服务协议》</a>
          </label>
          <button className='submitButton' onClick={this.handleSubmit.bind(this)}>我是合格投资者，继续浏览</button>
          <button className='sliverButton' onClick={this.handleCancel.bind(this)}>我不是合格投资者，离开</button>
        </div>
      </div>
    )
  }
}
export default withRouter(Start)
