import { connect } from 'react-redux';
import action from './store/action';

class Home extends React.Component {
  render() {
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
      </>
    )
  }
  static async getInitialProps({ reduxStore }) {
    await reduxStore.dispatch(action.getList())
    return { name: 'lili' }
  }
  getList = () => {
    this.props.getList()
  }
}



export default connect(state => state.home, action)(Home);