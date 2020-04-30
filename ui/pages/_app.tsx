import React from 'react';
import App from 'next/app';
import LayoutComponent from '../components/layout/layout.component';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    );
  }
}

export default MyApp;
