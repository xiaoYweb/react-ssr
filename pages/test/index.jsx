import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from '../../store/user/action';
import { message } from 'antd';
/**
 * 测试 session 中的内容 与 对应 浏览器 访问 一一对应
 */
class Test extends Component {
  state = {
    ln: ''
  }
  render() {
    const { ln } = this.state;
    console.log("TCL: Test -> render -> this", this.props)
    return (
      <div>
        <input type="text" value={ln} onChange={this.handleInput} style={{border: '1px solid #333'}} />
        <button onClick={this.handleSubmit} className="cp">confirm</button>
        <div>{this.props.ln}</div>
      </div>
    );
  }
  handleInput = (ev) => {
    const ln = ev.target.value;
    this.setState({ln})
  }
  handleSubmit = () => {
    const { ln } = this.state;
    const { setLn } = this.props;
    if (!ln) return message.warning('ln 为 空')
    
    setLn(ln).then(() => {
      console.log('setLn success')
    }).catch(() => {console.log('setLn failed')} )
  }
}

export default connect(state => state.user, action)(Test);