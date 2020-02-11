// function Login() {
//   return <h1>hello world</h1>
// }
// Login.getInitialProps = async function (ctx) {
//   console.log("TCL: Login.getInitialProps ctx", ctx)
//   return {}
// }

class Login extends React.Component {
  render() {
    return (
      <h1>hello world</h1>
    );
  }
  static async getInitialProps(ctx) {
    console.log("TCL: Login.getInitialProps ctx", ctx)
    return {} 
  }
}


export default Login;