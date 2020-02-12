/**
 * 数组去重  
 * @param {array} arr  
 */
export const uniqueArr = arr => Array.from(new Set(arr));

/**
 * 
 * @param {array / string} initialClass 
 * @param {array / string} className 
 */
export const retClassName = (initialClass = [], className = []) => {
  if (typeof initialClass === 'string') initialClass = initialClass.split(' ');
  if (typeof className === 'string') className = className.split(' ');
  className = [...initialClass, ...className];
  className = className.length > 0 ? uniqueArr(className).join(' ') : undefined;
  return className;
}

/**
 * 使用场景 容器组件 cloneElement 下 获取 返回的参数
 * @param {object} el.props    组件props属性 
 * @param {children} children          子节点     
 * @param {array / string} initialStyle  默认样式  
 * @param {array / string} initialClass  默认calss  
 */
export const retCloneElementParams = ({ style, className = [] }, children, initialStyle = {}, initialClass = []) => {
  // if (typeof initialClass === 'string') initialClass = initialClass.split(' ');
  // if (typeof className === 'string') className = className.split(' ');
  // className = [...initialClass, ...className];
  // className = className.length > 0 ? uniqueArr(className).join(' ') : undefined;
  className = retClassName(initialClass, className)
  return { style: { ...initialStyle, ...style }, className, children };
}

export const retCount = count => {
  if (count === undefined) return 0
  count += '';
  if (count.length < 4) return count;
  return `${Math.floor(Math.abs(count / 100)) / 10}k`
}


/**
 * 
 * @param {props} props 当前组件的props 来源 redux user and language 下数据
 * @param {module} module language中哪个模块的i18n 
 */
export const retLn = (props) => {//2019-11-19 后端返回字段 大小写 不确定 统一处理一下。。
  const { _user = {} } = props;//
  return _user.settingData ? _user.settingData.languageName.toLowerCase() : 'en'
}

export const outputI18n = (props, module) => {
  const { language } = props;//
  const ln = retLn(props);
  return module ? language[module][ln] : language;
}


// const { setting } = language;
// const ln = _user.settingData ? _user.settingData.languageName : 'en';
// const i18n = setting[ln];