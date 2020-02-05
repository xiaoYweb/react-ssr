import Link from 'next/link';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link href="/"><a>home</a></Link>
        <Link href="/login"><a>login</a></Link>
        <Link href="/test"><a>test</a></Link>
        <Link href="/demo"><a>demo</a></Link>
      </div>
    )
  }
}

export default Header;
