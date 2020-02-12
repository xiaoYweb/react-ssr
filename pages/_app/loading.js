import { Spin, Icon } from 'antd';
import Shade from '_c/layout/shade';
const initialStyle = { fontSize: 30 };
const inititialTip = 'loading...';

// export default class spin extends React.Component {
//   render() {
//     let { style = {}, tip = inititialTip } = this.props;
//     const antIcon = <Icon type="loading" style={{ ...initialStyle, ...style }} spin  />
//     return (
//       <Shade el={<div style={{background: 'rgba(0,0,0,0.1)'}}/>}>
//         <Spin indicator={antIcon} tip={tip}/>
//       </Shade>
//     )
//   }
// }

export default ({style = {}, tip = inititialTip}) => {
  const antIcon = <Icon type="loading" style={{ ...initialStyle, ...style }} spin />;
  return (
    <Shade el={<div style={{background: 'rgba(0,0,0,0.1)'}}/>}>
      <Spin indicator={antIcon} tip={tip}/>
    </Shade>
  )
}