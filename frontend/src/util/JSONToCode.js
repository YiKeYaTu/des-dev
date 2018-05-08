import _ from 'lodash';
import loadingElements from './loadingElements';

export default function JSONToCode(VJSON) {
  let code = '';
  let components = {};

  code = _JSONToCode(VJSON, 6);
  code = '    <div id="app">\n' + code.join('') + '    </div>';
  code = addReactClass(code);
  code = addDeps(code, components);

  return code;

  function _JSONToCode(VJSON, deep = 0) {
    if (_.isArray(VJSON)) {
      return VJSON.map(item => {
        return _JSONToCode(item, deep);
      });
    } else if (_.isObject(VJSON)) {
      if (!components[VJSON.name.path]) {
        components[VJSON.name.path] = {};
      }
        
      components[VJSON.name.path][VJSON.name.componentName] = VJSON;

      const name = VJSON.name.componentName === 'default' ? loadingElements.getName(VJSON.name.path) : VJSON.name.componentName;
      const space = new Array(deep + 1).join(' ');

      return `${space}<${name} ${spreadProps(VJSON.props)}>\n${_JSONToCode(VJSON.children, deep + 2)}\n${space}</${name}>\n`;
    } else {  
      return new Array(deep).join(' ') + (VJSON || '');
    }
  }
}

function spreadProps(props = {}) {
  return Object.keys(props || {})
    .map(key => {
      return `${key}="${props[key]}"`;
    })
    .join(' ');
}

function addReactClass(code) {
  return (
    'export class App extends React.Component {\n' + 
    '  render() {\n' + 
         code + 
    '\n  }' +
    '\n}'
  );
}

function addDeps(code, components) {
  let deps = ''

  deps += `import React from 'react'\n`;
  deps += `import ReactDOM from 'react-dom'\n\n`;
  deps += `import 'antd/dist/antd.css';\n`;
  Object.keys(components)
    .forEach(key => {
      let arr = [];

      deps += `import `;

      Object.keys(components[key])
        .forEach(item => {
          if (item === 'default') {
            deps += loadingElements.getName(key);
          } else {
            arr.push(item);
          }
        });

      if (arr.length > 0) {
        if (components[key]['default']) {
          deps += ', ';
        }
        deps += `{ ${arr.join(', ')} }`;
      }
      deps += ` from '${key}';\n`;
    });

  code = deps + '\n' + code;

  return code;
}
