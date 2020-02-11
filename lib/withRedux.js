import React from 'react';
import createSore from '../store';
import { get_use_info } from '../store/user/type';
const isServer = typeof window === 'undefined';

export default MyApp => {
  function WithReduxApp({ Component, pageProps, initialReduxState }) {
    console.log("TCL: WithReduxApp -> initialReduxState", initialReduxState)
    const reduxStore = getOrCreateStore(initialReduxState);
    
    return (
      <MyApp
        Component={Component}
        pageProps={pageProps}
        reduxStore={reduxStore}
      />
    )
  }

  WithReduxApp.getInitialProps = async appContext => {
    const reduxStore = getOrCreateStore();
    appContext.ctx.reduxStore = reduxStore;//ctx中挂在 store 供 各个page component  使用 dispatch

    const appProps = await MyApp.getInitialProps(appContext); // { pageProps: {pages component.getInitialProps 返回的 值 } }
    
    // isServer && reduxStore.dispatch({type: get_use_info, payload: appContext.ctx.req.session })// 登录 信息 同步到redux中
    
    return {
      ...appProps,
      initialReduxState: reduxStore.getState()
    }
  }

  return WithReduxApp;
}



function getOrCreateStore(initialState) {
  const isServer = typeof window === 'undefined';
  const _store_ = '_store_';
  if (isServer) {
    return createSore(initialState);
  }
  if (!window[_store_]) {
    window[_store_] = createSore(initialState);
  }
  return window[_store_];
}