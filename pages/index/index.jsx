import { connect } from 'react-redux';
import action from './store/action';
import api from '_api';
const { getList } = api.home;

class Home extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     ...props.data
  //   }
  // }
  render() {
    // const { list } = this.state;
    // console.log("TCL: Home -> render -> list", list)
    return (
      <>
        <h1>Home {this.props.name} </h1>
        <button onClick={this.getList}>get list</button>
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
      </>
    )
  }
  static async getInitialProps({ reduxStore }) {// redux 获取数据 经过props 传入
    await reduxStore.dispatch(action.getList())
    return { name: 'lili' }
  }
  // static async getInitialProps() {// page 获取数据 经过props 传入
  //   let list = await getList().then(res => res).catch(() => [])
  //   return { data: { list } }
  // }
  getList = () => {
    this.props.getList()
  }
}



export default connect(state => state.home, action)(Home);