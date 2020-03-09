import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
class Header extends React.Component {
  render() {
    console.log('Header props -->> ', this.props)
    const { name, ln } = this.props;
    return (
      <div>
        <h3>{name} -- {ln}</h3>
        <Link href="/"><a>home</a></Link>
        <Link href="/login"><a>login</a></Link>
        <Link href="/test"><a>test</a></Link>
        <Link href="/demo"><a>demo</a></Link>
      </div>
    )
  }
}

export default connect(state => state.user, null)(Header);
