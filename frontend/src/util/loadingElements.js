import _ from 'lodash';

export default function loadingElements () {
  const elements = require.context('../main/element', true, /.ui\.index\.jsx?$/);
  const configs = require.context('../main/element', true, /.ui\.index\.json?$/);

  const ret = elements.keys().map(id => {
    const element = elements(id);
    const components = assignComponents(element);

    return {
      name: id,
      components,
    };
  });

  configs.keys().forEach(id => {
    const config = configs(id);
    ret.forEach(item => {
      if (
        loadingElements.getName(item.name) === loadingElements.getName(id)
      ) {
        item.config = config;
      }
    });
  });

  return ret;
}

loadingElements.getName = function (name) {
  return name.replace(/(\.ui\.index\.((jsx?)|(json))$)|(\.\/)/g, '');
}

function assignComponents (mod) {
  const main = mod.default || {};
  const components = [];

  Object.keys(mod).forEach(pushComponent.bind(null, mod));
  Object.keys(main).forEach(pushComponent.bind(null, main));

  function pushComponent (obj, key) {
    let e = obj[key];

    if (_.isFunction(e)) {
      components.push({
        name: key,
        component: obj[key]
      });
    }
  }

  return components;
}