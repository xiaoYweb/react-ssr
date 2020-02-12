import App from 'next/app';
import { Provider } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import Router from 'next/router';
import withRedux from '../../lib/withRedux';
import Header from '../../components/header';
import 'antd/dist/antd.css';
// import '../../public/less/init.less';
import '_p/less/init.less';

function MyApp({ Component, pageProps, reduxStore }) {
  console.log("TCL: MyApp -> pageProps", pageProps)// 没有找到页面 pageProps.statusCode === 404
  const [loading, updateLoading] = useState(false);
  const startLoading = useCallback(() => {
    updateLoading(true)
  })
  const stopLoading = useCallback(() => {
    updateLoading(false)
  })
  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    Router.events.on('routeChangeError', stopLoading)
    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
      Router.events.off('routeChangeError', stopLoading)
    }
  }, [])
  return (
    <Provider store={reduxStore}>
      {pageProps.statusCode === 404 ? null : <Header />}
      {loading ? 1 : 0}
      <Component {...pageProps} />
    </Provider>
  )
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

