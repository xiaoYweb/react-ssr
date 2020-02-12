import { cloneElement } from 'react';
import { retCloneElementParams } from '_lib/utils';

const initialClass = ['pfix', 'flex', 'fxc', 'fyc'];
const initialStyle = { 
  left: 0, 
  right: 0, 
  top: 0, 
  bottom: 0, 
  background: 'rgba(26,26,26,0.65)',
  zIndex: 20
};

export default ({ children, el = <div /> }) => cloneElement(el, retCloneElementParams(el.props, children, initialStyle, initialClass));