import { connect } from 'react-redux';
import { action } from '_store';
import api from '_api';
const { getList } = api.home;
import { Button, Input } from 'antd';
import { action as actions } from '../../store';
console.log("actions", actions)
const { home: action_home } = action;

class Home extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     ...props.data
  //   }
  // }
  state = {
    ln: ''
  }
  render() {
    console.log('props', this.props)
    const { ln } = this.state;
    // const { list } = this.state;
    // console.log("TCL: Home -> render -> list", list)
    return (
      <>
        <h1>Home {this.props.name} </h1>
        <Button onClick={this.getList}>get list</Button>
        <ul>
          {
            this.props.list.map(item => {
              return (<li key={item.id}>{item.title}</li>)
            })
          }
        </ul>
        {/* <ul>
          {
            list.map(item => {
              return (<li key={item.id}>{item.title}</li>)
            })
          }
        </ul> */}
        <Input type="text" value={ln} onChange={this.handleInput} />
        <Button onClick={this.setLanguage}>set language</Button>
        <Button onClick={this.setName}>set name</Button>
      </>
    )
  }
  static async getInitialProps({ reduxStore }) {// redux 获取数据 经过props 传入
    await reduxStore.dispatch(action_home.getList())
    return { name: 'lili' }
  }
  // static async getInitialProps() {// page 获取数据 经过props 传入
  //   let list = await getList().then(res => res).catch(() => [])
  //   return { data: { list } }
  // }
  getList = () => {
    this.props.getList()
  }
  handleInput = (ev) => {
    const ln = ev.target.value;
    this.setState({ ln })
  }
  setLanguage = () => {
    const { ln } = this.state;
    ln && this.props.setLn(ln)
  }
  setName = () => {
    const { ln: name } = this.state;
    name && this.props.setName(name)
  }
}



export default connect(state => state.home, { ...actions.home, ...action.user })(Home);