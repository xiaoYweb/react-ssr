import App from 'next/app';
import { Provider } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import Router from 'next/router';
import withRedux from '../../lib/withRedux';
import Header from '../../components/header';
import PageLoading from './loading';
import 'antd/dist/antd.css';
import '../../public/less/common.less';
import '_p/less/init.less';



class MyApp extends React.Component {
  state = {
    loading: false
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        {pageProps.statusCode === 404 ? null : <Header />}
        { this.state.loading ? <PageLoading /> : null }
        <Component {...pageProps} />
      </Provider>
    )
  }
  startLoading = () => {
    this.setState({loading: true})
  }
  stopLoading = () => {
    sleep().then(() => {
      this.setState({loading: false})
    })
  }
  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading)
    Router.events.on('routeChangeComplete', this.stopLoading)
    Router.events.on('routeChangeError', this.stopLoading)
  }
  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading)
    Router.events.off('routeChangeComplete', this.stopLoading)
    Router.events.off('routeChangeError', this.stopLoading)
  }
}

/**
 * appContext: {
 *  ctx: {req, res, err: undefined, }, 
 *  Component, 
 *  router: { serverRouter: {route: '', pathname: '', query: {}, asPath: ''}} }
 *  pathname: '',
 *  query: {},
 *  asPath: '',
 *  AppTree: funciton
 */

MyApp.getInitialProps = async (appContext) => {// 
  const appProps = await App.getInitialProps(appContext);//{ pageProps: {pages component.getInitialProps 返回的 值 } }
  console.log("TCL: MyApp.getInitialProps -> appProps", appProps)
  return { ...appProps }//next 传入 app组件中 props.appProps
}

export default withRedux(MyApp);

function sleep(delay=200) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, delay)
  })
}

// function MyApp({ Component, pageProps, reduxStore }) {
//   console.log("TCL: MyApp -> pageProps", pageProps)// 没有找到页面 pageProps.statusCode === 404
//   const [loading, updateLoading] = useState(false);
//   const startLoading = useCallback(() => {
//     updateLoading(true)
//   })
//   const stopLoading = useCallback(() => {
//     sleep().then(() => updateLoading(false))
//   })
//   useEffect(() => {
//     Router.events.on('routeChangeStart', startLoading)
//     Router.events.on('routeChangeComplete', stopLoading)
//     Router.events.on('routeChangeError', stopLoading)
//     return () => {
//       Router.events.off('routeChangeStart', startLoading)
//       Router.events.off('routeChangeComplete', stopLoading)
//       Router.events.off('routeChangeError', stopLoading)
//     }
//   }, [])
//   return (
//     <Provider store={reduxStore}>
//       {pageProps.statusCode === 404 ? null : <Header />}
//       { loading ? <PageLoading /> : null }
//       <Component {...pageProps} />
//     </Provider>
//   )
// }