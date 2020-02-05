import React from 'react';
import createSore from '../store';

export default MyApp => {
  class WithReduxApp extends React.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      const { Component, pageProps } = this.props;
      return (
        <MyApp
          Component={Component}
          pageProps={pageProps}
          reduxStore={this.reduxStore}
        />
      )
    }
  }

  WithReduxApp.getInitialProps = async context => {
    let reduxStore = {};

    if (isServer) {
      const { req } = context.ctx;
      const session = req.session;

      if (session && session.userInfo) {//redis数据为空 请求 未携带token 后台返回duiycode  session中的数据随之清空
        console.log('redux userinfo init')
        const user = { ...session.userInfo, cookieId: '' }//清除token
        reduxStore = getOrCreateStore({ user })
      } else {
        reduxStore = getOrCreateStore({ user: {} })//session===null  同时  清空 redux
      }
    } else {
      reduxStore = getOrCreateStore()
    }

    context.reduxStore = reduxStore;

    let appProps = {};
    if (typeof MyApp.getInitialProps === 'function') {
      appProps = await MyApp.getInitialProps(context);
    }

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