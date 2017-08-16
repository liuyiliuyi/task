var myLibray;
window.myLibray = myLibray;
window.$ === undefined && (window.$ = myLibray);





class myLibray {
  constructor() {

  }
  contain() {

  }
  each(collection, fn) {
    if(_.isArrayLike(collection)){
      for(var i = 0; i < collection.length; i++) {
        if(fn.call(collection[i], i, collection[i]) === false) {
          return collection;
        }
      }
    } else {
      for(var key in collection) {
        if(fn.call(collection[key], key, collection[key]) === false) {
          return collection;
        }
      }
      // Object.keys(collection).some((x, i) => fn(i, collection[x]) === false)
    }
    return collection;
  }

  map(elements, callback) {
    var value, values = [], i, key;
    if(likeArray(elements)) {
      for(var i = 0; i < elements.length; i++) {
        value = callback(elements[i], i);
        if(value != null) values.push(value);
      }
    } else {
        for(key in elements) {
          value = callback(elements[key], key);
          if(value != null) value.push(value);
        }
      }
      return flatten(values)
    }
    
  contain = document.documentElement.contains ? 
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } : function(parent, node) {
      while(node && (node = node.parentNode)) {
        if(node === parent) return true;
      }
      return false;
    }

  concat() {
    
  }
}

var $ = function query(selector, context) {
  if(!(this instanceof query)) {
    return new query(selector, context)
  }
  context = context || document;
  var dom = context.querySelectorAll(selector);
  var len = dom ? dom.length : 0;
  for(var i = 0; i < len; i++) {
    this[i] = dom[i];
  }
  this.length = len;
  this.selector = selector;
}


function extend(target, source, deep) {
  for(key in source) {
    if(deep && (isPlainObject(source[key]) || isArray(source[key]))) {
      if(isPlainObject(source[key]) && !isPlainObject(target[key])) {
        target[key] = {};
      }
      if(isArray(source[key]) && !isArray(target[key])) {
        target[key] = [];
      }
      entend(target[key], source[key], deep);
    } else if (source[key] !== undefined) {
        target[key] = source[key];     
    }
  }
}







