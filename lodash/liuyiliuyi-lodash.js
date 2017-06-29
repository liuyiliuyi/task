var liuyiliuyi = {};


// Array


liuyiliuyi.chunk = 

function chunk(array, size = 1) {
  var store_arr = [];
  var result = [];
  var length = Math.floor(array.length / size) * size
  for (var i = 0; i < length; i++) {
    store_arr[i % size] = array[i];
    if(store_arr.length == size) {
      result.push(store_arr);
      store_arr = [];
    }
    //if((i + 1) % 3 != 0)
  }
  for(var j = length; j < array.length; j++) {
    store_arr[j % size] = array[j];
  }
  if(store_arr.length != 0)
  result.push(store_arr);
  return result;
} 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.compact = 

function compact(arr){
  var input_arr = arr;
  var new_arr = [];
  for(var i = 0; i < input_arr.length; i++) {
    if(arr[i]) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.concat =

function concat(array,values) {
  var input_arr = array;
  var new_arr = [];
  for(var i = 0; i < arguments.length; i++){
    if(typeof(arguments[i]) == "object") {
      for(var j = 0; j < arguments[i].length; j++) {
        new_arr.push(arguments[i][j]);
      }
    } else {
      new_arr.push(arguments[i]);
    }
  }
  return new_arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.difference = 

function difference(arr, value){
  var input_arr = arr;
  var new_arr = [];
  for(var i = 0; i < input_arr.length; i++) {
    var count = 0;
    for(var j = 0; j < value.length; j++) {
      if(input_arr[i] != value[j]) {
        count++;
        //continue;
      }
    }
    if(count == value.length) {
      new_arr.push(input_arr[i])
    }
  }
  return new_arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.differenceBy =

function differenceBy(arr, value, iteratee) {
  
  var input_arr = arr;
  var new_arr = [];
  for(var i = 0; i < input_arr.length; i++) {
    var count = 0;
    for(var j = 0; j < value.length; j++) {
      if(typeof(iteratee) == "function" && iteratee(input_arr[i]) != iteratee(value[j])) {
        count++;
        //continue;
      }
      if(typeof(iteratee) != "function" && getObjectValue(input_arr[i], iteratee) !=  getObjectValue(value[j], iteratee))
        count++;
    }
    if(count == value.length) {
      new_arr.push(input_arr[i])
    }
  }
  return new_arr;

}


function getObjectValue(object, attr) {
  var input_object = object;
  return input_object[attr];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.differenceWith  =  

function dropRightWhile(objects, value, comparator) {
  var arr = [];
  var amount;
  for(var i = 0; i < objects.length; i++) {
    amount = 0;
    for(j = 0; j < value.length; j++) {
      if(!comparator(objects[i], value[j])) {
        amount++;
      }
    }
    if(amount == value.length) {
      arr.push(objects[i]);
    }
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.drop = 
 
function drop(arr, n = 1) {
  var new_arr = arr;
  for(var i = 0; i < n; i++) {
    new_arr.shift();
  }
  return new_arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.dropRight =

function dropRight(arr, n = 1) {
  var new_arr = arr;
  for(var i = 0; i < n; i++) {
    new_arr.pop();
  }
  return new_arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

liuyiliuyi.dropRightWhile = 

function dropRightWhile(array, predicate) {
  var a = liuyiliuyi.judge(predicate);
  for(var i = array.length - 1; i >= 0; i--) {
      if(a(array[i]) == false) {
        array.splice(i + 1);
        return array;
      }
  }
  return [];
}

liuyiliuyi.judge = 
function judge(arg) {
  var str = Object.prototype.toString.call(arg); 
  if(str == "[object Object]") {
    return _.matches(arg);
  } else if(str == "[object String]") {
    return _.property(arg);
  } else if(str == "[object Array]") {
    return _.matchesProperty(arg[0], arg[1]);
  } else if(str == "[object Function]") {
    return arg;
  } else if(str == "[object RegExp]") {
    return Boolean;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.dropWhile =

function dropWhile(array, predicate) {
  var a = liuyiliuyi.judge(predicate);
  for(i = 0; i < array.length; i++) {
    if(a(array[i]) == false) {
      array.splice(0, i);
      return array;
    }
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.fill = 

function fill(array, value, start = 0, end) {
  var new_arr = array;
  if(end === undefined) {
    end = array.length;
  }
  for(var i = start; i < end; i++) {
    new_arr[i] = value; 
  } 
  return new_arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.findIndex =

function findIndex(array, predivate, fromIndex = 0) {
  var a = liuyiliuyi.judge(predivate);
  for(i = fromIndex; i < array.length; i++) {
    if(a(array[i]) == true) {
      return i
    }
  }
  return -1;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.findLastIndex = 

function findIndex(array, predivate, fromIndex = array.length - 1) {
  var a = liuyiliuyi.judge(predivate);
  for(i = fromIndex; i >= 0; i--) {
    if(a(array[i]) == true) {
      return i;
    }
  }
  return -1;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.head = 

function head(array) {
  result = array[0];
  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flatten =

function flatten(array) {
  return array.concat().reduce((a, b) => a.concat(b), []);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flattenDeep = 

function flattenDeep(array) {
  return array.concat().reduce((a, b) => a.concat(Array.isArray(b) ? flattenDeep(b) : b), []);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flattenDepth = 

function flattenDepth(array, depth = 1) {
  return array.concat().reduce((a, b) => a.concat(Array.isArray(b) && depth > 1 ? flattenDepth(b, --depth) : b), []);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.fromPairs =

function fromPairs(pairs) {
  var obj = {};
  for(key in pairs) {
    obj[pairs[key][0]] = pairs[key][1]
  }
  return obj;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.head = 

function head(array) {
  return array[0];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.indexOf = 

function indexOf(array, value, fromIndex = 0) {
  if(fromIndex < 0) {
    return array.lastIndex(value, fromIndex + array.length)
  } else {
    return array.indexOf(value, fromIndex);
  }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.initial = 

function initial(array) {
  array.pop();
  return array;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.intersection =

function intersection(...ary) {
  var arr1 = ary[0];
  var new_arr = [];
  for(i = 0; i < arr1.length; i++) {
    amount = 0
    for(j = 0; j < ary.length; j++) {
      if(ary[j].indexOf(arr1[i]) == -1) {
        break;
      } else amount++;
    }
    if(amount == ary.length) {
      new_arr.push(arr1[i]);
    }
  }
  return new_arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.intersectionBy = 

function intersectionBy(...arg) {
  var iteratee = arg.pop(); 
  var a = liuyiliuyi.judge(iteratee);
  var new_arg = arg.map(x => x.map(b => a(b)));
  


  var arr1 = new_arg[0];
  var new_arr = [];
  for(i = 0; i < arr1.length; i++) {
    amount = 0;
    for(j = 0; j < arg.length; j++) {
      if(new_arg[j].indexOf(arr1[i]) == -1) {
        break;
      } else amount++;
    }
    if(amount == new_arg.length) {
      new_arr.push(arg[0][i]);
    }
  }
  return new_arr;

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.intersectionWith = 

function intersectionWith(...arg) {
  var comparator = arg.pop();
  return arg[0].filter(x => arg[1].some(comparator.bind(null,x)));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.join =

function join(array, separator) {
  return array.join(separator);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.last =

function last(array) {
  return array[array.length - 1];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.lastIndexOf =

function lastIdexOf(array, value, fromIndex = array.length -1) {
  for(i = fromIndex; i >= 0; i--) {
    if(array[i] == value) {
      return i;
    }
  }
  return -1;
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.nth =

function nth(array, n) {
  return n < 0 ? array[array.length + n] : array[n];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.pull =

function pull(array, ...value) {
  for(i = 0; i < value.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j] === value[i]) {
        array.splice(j,1);
        j--;
      }
    }
  }
  return array;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.pullAll = 

function pullAll(array, values) {
  return liuyiliuyi.pull.bind(null, array).apply(null,values);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.pullAllBy =

function pullAllBy(array, values, iteratee) {
  var a = liuyiliuyi.judge(iteratee);
  for(i = 0; i < values.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(a(array[j]) === a(values[i])) {
        array.splice(j,1);
        j--;
      }
    }
  }
  return array;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.pullAllWith = 

function pullAllWith(array, values, comparator) {
  for(i = 0; i < values.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(comparator(values[i], array[j])) {
        array.splice(j,1);
        j--;
      }
    }
  }
  return array;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.pullAt =

function pullAt(array, indexes) {
  var arr = indexes.sort((a, b) => a - b);
  var amount = 0;
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    result.push(...array.splice(arr[i] - amount, 1));
    amount++;
  }
  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.remove = 

function remove(array, predicate) {
  var arr = [];
  for(var i = 0; i < array.length; i++) {
    if(predicate(array[i]) == true) {
      arr.splice(arr.length, 0, array.splice(i, 1)[0]);
      i--;
    }
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.reverse =

function reverse(array) {
  return array.reverse();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.slice = 

function slice(array, start = 0, end = array.length) {
  return array.slice(start,end);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortedIndex =

function sortedIndex(array, value) {
  if(array.length == 1) {
    return 0;
  }
  for(i = 0; i < array.length; i++) {
    if(array[1] > array[0] && value <= array[0]) {
      return 0
    } 
    else if(array[1] > array[0] && value > array[array.length - 1]) {
      return array.length;
    }
    else if(array[1] > array[0] && array[i] < value && value <= array[i + 1]) {
      return i + 1;
    }
    else if(array[0] > array[1] && value >= array[0]) {
      return 0;
    } 
    else if(array[0] > array[1] && value < array[array.length - 1]) {
      return array.length;
    }
    else if(array[0] > array[1] && array[i] > value && value >= array[i + 1]) {
      return i + 1;
    }
  } 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortedIndexBy = 

function sortedIndexBy(array, value, iteratee) {
  var a = liuyiliuyi.judge(iteratee);
  if(array.length == 1) {
    return 0;
  }
  for(i = 0; i < array.length; i++) {
    if(a(array[1]) > a(array[0]) && a(value) <= a(array[0])) {
      return 0
    } 
    else if(a(array[1]) > a(array[0]) && a(value) > a(array[array.length - 1])) {
      return array.length;
    }
    else if(a(array[1]) > a(array[0]) && a(array[i]) < a(value) && a(value) <= a(array[i + 1])) {
      return i + 1;
    }
    else if(a(array[0]) > a(array[1]) && a(value) >= a(array[0])) {
      return 0;
    } 
    else if(a(array[0]) > a(array[1]) && a(value) < a(array[array.length - 1])) {
      return array.length;
    }
    else if(a(array[0]) > a(array[1]) && a(array[i]) > a(value) && a(value) >= a(array[i + 1])) {
      return i + 1;
    }
  } 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortedIndexOf = 

function sortedIndexOf(array, value) {
  return array.indexOf(value);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortedLastIndex =

function sortedLastIndex(array, value) {
  if(array.length == 1) {
    return 1;
  }
  for(i = 0; i < array.length; i++) {
    if(array[1] > array[0] && value < array[0]) {
      return 0
    } 
    else if(array[1] > array[0] && value >= array[array.length - 1]) {
      return array.length;
    }
    else if(array[1] > array[0] && array[i] <= value && value < array[i + 1]) {
      return i + 1;
    }
    else if(array[0] > array[1] && value > array[0]) {
      return 0;
    } 
    else if(array[0] > array[1] && value <= array[array.length - 1]) {
      return array.length;
    }
    else if(array[0] > array[1] && array[i] >= value && value > array[i + 1]) {
      return i + 1;
    }
  } 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortedLastIndexBy = 

function sortedLastIndexBy(array, value, iteratee) {
  var a = liuyiliuyi.judge(iteratee);
  if(array.length == 1) {
    return 1;
  }
  for(i = 0; i < array.length; i++) {
    if(a(array[1]) > a(array[0]) && a(value) < a(array[0])) {
      return 0
    } 
    else if(a(array[1]) > a(array[0]) && a(value) >= a(array[array.length - 1])) {
      return array.length;
    }
    else if(a(array[1]) > a(array[0]) && a(array[i]) <= a(value) && a(value) < a(array[i + 1])) {
      return i + 1;
    }
    else if(a(array[0]) > a(array[1]) && a(value) > a(array[0])) {
      return 0;
    } 
    else if(a(array[0]) > a(array[1]) && a(value) <= a(array[array.length - 1])) {
      return array.length;
    }
    else if(a(array[0]) > a(array[1]) && a(array[i]) >= a(value) && a(value) > a(array[i + 1])) {
      return i + 1;
    }
  } 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortedLastIndexOf =

function sortedLastIndexOf(array,value) {
  return array.lastIndexOf(value);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortedUniq = 

function sortedUniq(array) {
  return array.reduce((a, b) => a.indexOf(b) == -1 ? a.concat(b) : a, [])
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortedUniqBy =
 
  function sortedUniqBy(array, iteratee) {
    var new_arr = [];
    return array.filter(a => {
      if(new_arr.indexOf(iteratee(a)) == -1) {
        new_arr.push(iteratee(a));
        return true;
      } else {
        return false;
      }
    })
  }

// function sortedUniqBy(array, iteratee) {
//   var new_array.map(iteratee).reduce((a, b) => a.indexOf(b) == -1 ? a.concat(b) : a, [])
//   return array.reduce((a, b) => array.indexOf(iteratee(b)) == -1 ? a.concat(b) ; new_array : , [])
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.tail =

function tail(array) {
  return array.slice(1);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.take =

function take(array, n = 1) {
  return array.slice(0, n)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.takeRight =

function takeRight(array, n = 1) {
  return n == 0 ? [] : array.slice(-n);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.takeRightWhile =

function takeRightWhile(array, ...predicate) {
  var a = liuyiliuyi.judge.apply(null, predicate);
  for(var i = array.length - 1; i >= 0; i--) {
    if(a(array[i]) == false) {
      return array.splice(i + 1);
    }
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.takeWhile = 

function takeWhile(array, ...predicate) {
    var a = liuyiliuyi.judge.apply(null, predicate);
  for(var i = 0; i < array.length; i++) {
    if(a(array[i]) == false) {
      array.splice(i);
      return array;
    }
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.union = 

function union(...array) {
  return  [].concat(...array).reduce((a, b) => a.indexOf(b) == -1 ? a.concat(b) : a, []);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.unionBy =

function unionBy(...arg) {
  var array = Array.from(arg);
  var iteratee = array.pop();
  var a = liuyiliuyi.judge(iteratee);
  var arr = [].concat(...array);
  var new_arr = [];
  return arr.reduce((x, y) => {if(new_arr.indexOf(a(y)) == -1) {new_arr.push(a(y));return x.concat(y);} else return x}, []);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.unionWith = 

function unionWith(...arg) {
  var array = Array.from(arg);
  var comparator = array.pop();
  var arr = [].concat(...array);
  var result = [];
  arr.forEach(x => {
    for(var i = 0; i < result.length; i++) {
      if(comparator(result[i], x)) {
        return;
      }
    }
      result.push(x);
  })
  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.uniq =

function uniq(array) {
  return array.reduce((x, y) => x.indexOf(y) == -1 ? x.concat(y) : x, [])
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.uniqBy = 

function uniqBy(array, iteratee) {
  var a = liuyiliuyi.judge(iteratee);
  var arr = [];
  return array.reduce((x, y) => {if(arr.indexOf(a(y)) == -1) {arr.push(a(y)); return x.concat(y)} else return x}, []);
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.uniqWith = 

function uniqWith(array, comparator) {
  var result = [];
  array.forEach(x => {
    for(var i = 0; i < result.length; i++) {
      if(comparator(result[i], x)) {
        return;
      }
    }
      result.push(x);
  })
  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.unzip =

function unzip(array) {
  return array[0].map((x, i) => array.reduce((x, y) => x.concat(y[i]), []));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.unzipWith = 

function unzipWith(array, iteratee) {
  var arr = liuyiliuyi.unzip(array);
  return array[0].map((a, i) => arr[i].reduce(iteratee));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.without = 

function without(...arg) {
  var array = arg.shift()
  return array.reduce((x, y) => arg.indexOf(y) == -1 ? x.concat(y) : x, [])
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.xor = 

function xor(...arg) {
  var array = Array.from(arg);
  var arr = [].concat(...array.map((x) => Array.from(new Set(x))));
  var result = [];
  var map = new Map();
  for(let value of arr) {
    if(map.get(value) == undefined) {
      map.set(value, 1);
    } else {var val = map.get(value); map.set(value, ++val);} 
  }
  for(let value of arr) {
    if(map.get(value) == 1) {
      result.push(value);
    }
  }
  return result;
}
  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.xorBy =

function xorBy(...arg) {
  var array = Array.from(arg);
  var iteratee = array.pop();
  var f = liuyiliuyi.judge(iteratee);
  var arr = [].concat(...array.map((m) => {var a = []; return m.reduce((x, y) => {if(a.indexOf(f(y)) == -1) {a.push(f(y)); return x.concat(y);} else return x;}, [])}));
  var b = [];
  var ary = arr.map(x => f(x));
  return arr.reduce((x, y) => {if(ary.indexOf(f(y)) == ary.lastIndexOf(f(y))) {return x.concat(y)} else return x;}, []);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.xorWith =

function xorWith(...arg) {
  var array = Array.from(arg);
  var comparator = array.pop();
  var arr = [].concat(...(array.map(x => _.uniqWith(x, comparator))));
  var result = [];
  var new_arr = [];
  var amount = 0;
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(comparator(arr[i], arr[j])) {
        new_arr.push(i,j);
      }
    }
  }
  var arr2 = Array.from(new Set(new_arr)).sort();
  
  for(var i = 0; i < arr2.length; i++) {
    arr.splice(arr2[i] - amount, 1);
    amount++;
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.zip =

function zip(...arg) {
  //Array.from(arg)
  return arg[0].map((x, i) => arg.reduce((x, y) => x.concat(y[i]), []));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.zipObject =

function zipObject(props, values) {
  var obj = {}
  for(let i = 0; i < props.length; i++) {
    obj[props[i]] = values[i];
  }
  return obj;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.zipObjectDeep =

function zipObjectDeep(prop, values) {
  //把单路径转化为数组;
  path_arr = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".");
  //path_arr 为路径数组；
  var obj = {};
  path_arr.reduce((x, y) => {

  }, obj)

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.zipWith = 

function zipWith(...arg) {
  var array = Array.from(arg);
  var iteratee = array.pop();
  return array[0].map((x, i) => iteratee.apply(null, array.reduce((a, b) => a.concat(b[i]), [])));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////Collection//////////////////////////////////////////////


liuyiliuyi.countBy = 

function countBy(collection, something){
  var object = {};
  var accept;
  if(typeof something == "function") {

    for(keys in collection) {
      accept = something(collection[keys])
      if(accept in object) {
        object[accept]++;
      }
      else {
        object[accept] = 1;
      }
    }
  } else if(typeof something == "string") {
      for(keys in collection) {
        accept = collection[keys][something];
      if(accept in object) {
        object[accept]++;
      }
      else {
        object[accept] = 1;
      }
    }
  }
  return object;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.each = 

function each(collection, something){
  for(key in collection) {
    if(false === something(collection[key], key, collection)){
      break;
    }
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.eachRight =

function eachRight(collection, iteratee) {
  if(collection instanceof Array) {
    for(i = collection.length - 1; i >= 0; i--) {
      if(false === iteratee(collection[i], i, collection)) {
        break;
      }
    }
  } else {
    for(key in collection) {
      if(false === iteratee(collection[key], key, collection)) {
        break;
      }
    }
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.every =

function every(collection, iteratee) {
  var f = liuyiliuyi.judge(iteratee);
  for(key in collection) {
    if(f(collection[key], key, collection) === false) {
      return false;
    }
  }
  return true;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.filter =

function filter(collection, iteratee) {
  var f = liuyiliuyi.judge(iteratee);
  var arr = [];
  for(key in collection) {
    if(f(collection[key], key, collection) == true) {
      arr.push(collection[key]);
    }
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.find = 

function find(collection, iteratee, fromIndex = 0) {
  var f = liuyiliuyi.judge(iteratee);
  for(var i = fromIndex; i < collection.length; i++) {
    if(f(collection[i], i, collection) == true) {
      return collection[i];
    }
  }
  return undefined;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.findLast =

function findLast(collection, iteratee, fromIndex = collection.length - 1) {
  var f = liuyiliuyi.judge(iteratee);
  for(var i = fromIndex; i >= 0; i--) {
    if(f(collection[i], i, collection) == true) {
      return collection[i];
    }
  }
  return undefined;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flatMap =

function flatMap(collection, iteratee) {
  var f = liuyiliuyi.judge(iteratee);
  var result = [];
  for(i in collection) {
    result = result.concat(f(collection[i]));
  }
  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flatMapDeep =

function flatMapDeep(collection, iteratee) {
  return liuyiliuyi.flattenDeep(liuyiliuyi.flatMap(collection, iteratee));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flatMapDepth = 

function flatMapDepth(collection, iteratee) {
  return liuyiliuyi.flattenDepth(liuyiliuyi.flatMap(collection, iteratee))
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.forEach =

function forEach(collection, iteratee) {
  var f = liuyiliuyi.judge(iteratee);
  for(i in collection) {
    if(f(collection[i], i, collection) == false) break;
  }
  return collection;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.forEachRight =

function forEachRight(collection, iteratee) {
  var f = liuyiliuyi.judge(iteratee);
  if(Array.isArray(collection) === true) collection.reverse();
  for(i in collection) {
    if(f(collection[i], i, collection) == false) break;
  }
  return collection.reverse();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.groupBy =

function groupBy(collection, iteratee) {
  var obj = {};
  var f = liuyiliuyi.judge(iteratee);
  for(i in collection) {
    if(f(collection[i]) in obj) {
      obj[f(collection[i])].push(collection[i]);
    } else {
      obj[f(collection[i])] = [collection[i]];
    }
  }
  return obj;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.includes =

function includes(collection, value, fromIndex = 0) {
  if(Object.prototype.toString.call(collection) == "[object Object]") {
    for(key in collection) {
      if(collection[key] == value) {
        return true;
      }
    }
  } else {
    return collection.indexOf(value, fromIndex) == -1 ? false : true;
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.invokeMap =

function invokeMap(collection, path, args) {
//   var arr = [];
//   if(Object.prototype.toString.call(path) == "[object String]") {
//     for(key in collection) {

//     }
//   }

//   else{
//     for(key in collection) {
//       arr.push(path.call(collection[key]), args); 
//     }
//     return arr;
//   } 
// }
  if(typeof path == "string") return collection.map(x => x[path].call(x, args));
  else if(typeof path == "function") return collection.map(x => path.call(x, args));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.keyBy =

function keyBy(collection, iteratee) {
  var f = liuyiliuyi.judge(iteratee);
  var obj = {};
  collection.forEach(x => obj[f(x)] = x);
  return obj;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.map =

function map(collection, iteratee) {
  var arr = [];
  var f = liuyiliuyi.judge(iteratee);
  for(key in collection) {
    arr.push(f(collection[key], +key, collection))
  }
  return arr;
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.orderBy =

// function orderBy(collection, iteratee, orders) {
//   for(let i = iteratee.length - 1; i >= 0; i--){
//     if(order != undefined && orders[i] == "desc") {
//       collection.sort((a,b) => {if(typeof a[iteratee[i]] == "number") {return a[iteratee[i]] - b[iteratee[i]];} else {return undefined});
//       collection.reverse();
//     }
//     else collection.sort((a,b) => {if(typeof a[iteratee[i]] == "number") return a[iteratee[i]] - b[iteratee[i]] else return undefined});
//   }
// }


function orderBy(collection, iteratee, orders) {
  for(let i = iteratee.length - 1; i >= 0; i--){
      collection.sort((a,b) => {if(typeof a[iteratee[i]] == "number") {return a[iteratee[i]] - b[iteratee[i]]} else {if(a[iteratee[i]] < b[iteratee[i]]) {return -1} else if(a[iteratee[i]] > b[iteratee[i]]) {return 1} else {return 0}}});
    if(orders != undefined && orders[i] == "desc") {
      collection.reverse();
    }
  }
  return collection;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.partition = 

function partition(collection, predicate) {
  var truthy = [], falsey = [];
  var f = liuyiliuyi.judge(predicate);
  collection.forEach(x => {if(f(x) == true) truthy.push(x); else if(f(x) == false) falsey.push(x)});
  return [truthy, falsey];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.reduce =

function reduce(collection, iteratee, accmulator) {
  var f = liuyiliuyi.judge(iteratee);
  var flag = true;
  for(key in collection) {
    if(accmulator == undefined && flag == true) {
      accmulator = collection[key];
      flag = false;
    } else {
      accmulator = f(accmulator, collection[key], key, collection);
    }
  }
  return accmulator;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.reduceRight =

function reduceRight(collection, iteratee, accmulator) {
  var keys = Object.keys(collection);
  var i = keys.length - 1;
  var f = liuyiliuyi.judge(iteratee);
  if(accmulator == undefined) {
    accmulator = collection[keys[i]];
    i--;
  }
  for(; i >= 0; i--){
    accmulator = f(accmulator, collection[keys[i]], i, collection);
  }
  return accmulator;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.reject =

function reject(collection, predicate) {
  var f = liuyiliuyi.judge(predicate);
  return collection.reduce((x, y) => f(y) == true ? x : x.concat(y), [])
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sample = 

function sample(collection) {
  let arr = [];
  for(key in collection) {
    arr.push(collection[key]);
  }
  let length = arr.length;
  return arr[Math.random() * length | 0];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sampleSize = 

function sampleSize(collection, n = 1) {
  let arr = [];
  let result = [];
  for(let key in collection) {
    arr.push(collection[key]);
  }
  let length = n > arr.length ? arr.length : n
  for(let i = 0; i < length; i++) {
    Array.prototype.push.apply(result,arr.splice(Math.random() * arr.length | 0, 1))
  }
  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.shuffle =

function shuffle(collection) {
  return liuyiliuyi.sampleSize(collection, collection.length - 1)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.size = 

function size(collection) {
  return typeof collection == "object" ? Object.keys(collection).length: collection.length;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.some =

function some(collection, predicate) {
  var f = liuyiliuyi.judge(predicate);
  for(key in collection) {
    if(f(collection[key]) == true) return true;
  }
  return false;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sortBy =

function (collection, iteratee) {
  
}





// function sortBy(collection, iteratee, orders) {
//   if(arguments.length == 3) {iteratee = order}
//   for(let i = iteratee.length - 1; i >= 0; i--){
//       collection.sort((a,b) => {if(typeof a[iteratee[i]] == "number") {return a[iteratee[i]] - b[iteratee[i]]} else {if(a[iteratee[i]] < b[iteratee[i]]) {return -1} else if(a[iteratee[i]] > b[iteratee[i]]) {return 1} else {return 0}}});
//     if(orders != undefined && orders[i] == "desc") {
//       collection.reverse();
//     }
//   }
//   return collection;
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Date/////////////////////////////////////////////////////////////////////////////


liuyiliuyi.now = 

function() {
  var time = new Date();
  return time.getTime();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Function///////////////////////////////////////////////////////////////////


liuyiliuyi.after = 

function after(n, func) {
  if(typeof func != "function") throw new TypeError("Only allowed Function");
  return function() {
    if(--n < 1) {
      return func.apply(this, arguments);
    } 
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.ary = 

function ary(func, length) {
  return function(...arg) {
    arg.length = arg.length > length ? length : arg.length;
    return func.apply(this, arg);
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.before =

// function before(n, func) {
//   var last;
//   return function() {
//     if(n == 1) {
//       last = func.apply(this, arguments)
//     }
//     if(--n > 0) {
//       return func.apply(this, arguments)
//     } else {
//       return last;
//     }
//   }
// }


function before(n, func) {
  var last;
  return function() {
    if(n == 0) last = func.apply(this, arguments);
    if(--n > 0) {
      return func.apply(this, arguments)
    } else return last;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.bind =

function bind(func, thisArg, ...arg) {
  return function(...rest) {
    return func.call(thisArg, ...arg, ...rest);
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.bindKey =

function bindKey(object, key, ...arg) {
  return function(...rest) {
    return object[key].call(object, ...arg, ...rest);
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.curry =

function curry(func, arity = func.length) {
  var arr = [];
  return function a(...arg) {
    arr = arr.concat(arg.reduce((x, y) => y != "_" ? x.concat(y) : x), []);
    if(arr.length < arity) {
      return a;
    } else return func(...arr);
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.curryRight


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.debounce =

function debounce() {

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.defer = 

function defer(func, ...args) {
  return setTimeout(func.apply(null, args)) - 1;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.delay = 

function delay(func, wait, ...args) {
  return setTimeout(func.apply(null, args), wait) - 1;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flip =

function flip() {
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.memoize = 

function memoize(fn, resolver) {
  var a = function(...args) {
    var key = resolver ? resolver(...args) : args.join("-");
    if(key in a.cache) return a.cache[key];
    return a.cache[key] = fn.apply(this, args); 
  }
  a.cache = {};
  return a;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.negate


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.once


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.overArgs


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.partial


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.partialRight


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.rearg


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.rest


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.spread


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.throttle


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.unary


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.wrap


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////Lang/////////////////////////////////////////////////////


liuyiliuyi.castArray = 

function castArray(value) {
  if(arguments.length == 0) {
    return [];
  }
  return Array.isArray(value) ? value : [value]; 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.clone = 

function clone(value) {
  return value;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.cloneDeep =

function cloneDeep() {}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.cloneDeepWith =

function cloneDeepWith() {}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.cloneWith =

function cloneWith() {}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.conformsTo =

function conformsTo(object, source) {
  for(key in object) {
    if(source[key] && source[key](object[key]) == true) {
      return true;
    }
  }
  return false;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.eq =

function eq(value, other) {
  if(value != value && other != other) return true;
  return value === other;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.gt =

function gt(value, other) {
  return value > other;
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.gte = 

function gte(value, other) {
  return value >= other;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isArguments =

function isArguments(value) {
  return Object.prototype.toString.call(value) == "[object Arguments]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isArray =

function isArray(value) {
  return Object.prototype.toString.call(value) == "[object Array]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isArrayBuffer =

function isArrayBuffer(value) {
  return Object.prototype.toString.call(value) == "[object ArrayBuffer]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isArrayLike = 

function isArrayLike(value) {
  return value.length < Number.MAX_SAFE_INTEGER && value.length >= 0 && Object.prototype.toString.call(value) != "[object Function]"
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isArrayLikeObject =

function isArrayLikeObject(value) {
  return liuyiliuyi.isArrayLike(value) && typeof value == "object";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isBoolean =

function isBoolean(value) {
  return Object.prototype.toString.call(value) == "[object Boolean]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isBuffer =

function isBuffer(value) {
  return Object.prototype.toString.call(value) == "[object Buffer]";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isDate =

function isDate(value) {
  return Object.prototype.toString.call(value) == "[object Date]"
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isElement =

function isElement(value) {
  return Object.prototype.toString.call(value) == "[object HTMLBodyElement]"
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isEmpty =

function isEmpty(value) {
  switch(true) {
    case this.kindOf(value) == "[object Array]" && value.length != 0: return false;
    case this.kindOf(value) == "[object Map]" && value.size != 0: return false;
    case this.kindOf(value) == "[object Object]" && Object.keys(value).length != 0: return false;
    case this.kindOf(value) == "[object String]" && value.length != 0: return false;
    default: return true;
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isEqual =

function isEqual(value, other) {
  if(value === other) return true;
  if(({}).toString.call(value) != ({}).toString.call(other)) return false;
  if ((typeof value == "object" || typeof value == "array") && value != "null") {
    var keys = Object.keys(value);
    var length = keys.length;
    if(length != Object.keys(other).length) return false;
    while(length--) {
      if(!this.isEqual(value[keys[length]], other[keys[length]])) return false;
    }
  } else if (({}).toString.call(value) == "[object RegExp]") return value.toString() === other.toString();
  else {
    return value === other;
  }
  return true;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isEqualWith =

function isEqualWith(value, other, fn) {
  if(value === other) return true;
  if(({}).toString.call(value) != ({}).toString.call(other)) return false;
  if ((typeof value == "object" || typeof value == "array") && value != "null") {
    var keys = Object.keys(value);
    var length = keys.length;
    if(length != Object.keys(other).length) return false;
    while(length--) {
      if(!this.isEqualWith(fn(value[keys[length]]), fn(other[keys[length]]))) return false;
    }
  } else if (({}).toString.call(value) == "[object RegExp]") return value.toString() === other.toString();
  else {
    return fn(value,other) === fn(other,value);
  }
  return true;
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isError = 

function isError(value) {
  return Object.prototype.toString.call(value) == "[object Error]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isFinite = 

function isFinite(value) {
  return Math.abs(value) < Infinity && typeof value == "number";
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isFunction = 

function isFunction(value) {
  return Object.prototype.toString.call(value) == "[object Function]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isInteger =

function isInteger(value) {
  return typeof value == "number" && Math.floor(value) === value && isFinite(value);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isLength =

function isLength(value) {
  return this.isInteger(value) && value >= 0;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

liuyiliuyi.kindOf = function kindOf(value) {
  return Object.prototype.toString.call(value);
}


liuyiliuyi.isMap =

function isMap(value) {
  return this.kindOf(value) == "[object Map]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isMatch =

function isMatch(object, source) {
  return Object.keys(source).every(a => this.isEqual(object[a], source[a]));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isMatchWith =

function isMatchWith(object, source, fn) {
  return Object.keys(source).every(a => this.isEqualWith(object[a], source[a], fn));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isNaN =

function isNaN(value) {
  return typeof value === "number" || value instanceof Number && value.toString() === "NaN";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isNative = 

function isNative(value) {
  return value.toString().indexOf(" [native code] ") != -1;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isNil =

function isNil(value) {
  return value == undefined;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isNull =

function isNull(value) {
  return value === null;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isNumber =

function isNumber(value) {
  return this.kindOf(value) == "[object Number]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isObject =

function isObject(value) {
  return (typeof value == "object" || typeof value == "function") && value != null;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isObjectLike =

function isObjectLike(value) {
  return typeof value == "object" && value != null;
}
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isPlainObject = 

function isPlainObject(value) {
  return value.constructor == Object || value.__proto__ == null;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isRegExp =

function isRegExp(value) {
  return this.kindOf(value) == "[object RegExp]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isSafeInteger =

function isSafeInteger(value) {
  return liuyiliuyi.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isSet = 

function isSet(value) {
  return this.kindOf(value) == "[object Set]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isString =

function isString(value) {
  return this.kindOf(value) == "[object String]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isSymbol =

function isSymbol(value) {
  return this.kindOf(value) == "[object Symbol]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isTypedArray =

function isTypedArray(value) {
  return this.kindOf(value) === "[object Uint8Array]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isUndefined =

function isUndefined(value) {
  return value === undefined;
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isWeakMap =

function isWeakMap(value) {
  return this.kindOf(value) == "[object WeakMap]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.isWeakSet =

function isWeakSet(value) {
  return this.kindOf(value) == "[object WeakSet]";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.lt = 

function lt(value, other) {
  return value < other;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.lte =

function lte(value, other) {
  return value <= other;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toArray =

function toArray(value) {
  var arr = [];
  for(key in value) {
    arr.push(value[key])
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toFinite =

function toFinite(value) {
  if(value >= 1.7976931348623157e+308) {
    return 1.7976931348623157e+308;
  } else if(value <= -1.7976931348623157e+308) {
    return -1.7976931348623157e+308;
  } else if(0 < value && value < 5e-324) {
    return 5e-324;
  } else if(value < 0 && value > -5e-324) {
    return -5e-324;
  } else return parseFloat(value);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toInteger =

function toInteger(value) {
  return Math.floor(this.toFinite(value));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toLength =

function toLength(value) {
  return this.toInteger(value) > 4294967295 ? 4294967295 : this.toInteger(value);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toNumber =

function toNumber(value) {
  return Number(value);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toPlainObject =

function toPlainObject(value) {
  var obj = {};
  for(var key in value) {
    obj[key] = value[key];
  }
  return obj;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toSafeInteger =

function toSafeInteger(value) {
  if(value > 9007199254740991) return 9007199254740991;
  else if(value < -9007199254740991) return -9007199254740991;
  return this.toInteger(value);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toString =

function toString(value) {
  return value.toString();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Math//////////////////////////////////////////////////////////


liuyiliuyi.add = function add(x, y) {
  return x + y;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.ceil = function ceil(number, pos = 0) {
  return Math.ceil(number * Math.pow(10, pos)) / Math.pow(10,pos);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.divide = function divide(dividend, divisor) {
  return dividend / divisor;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.floor = function floor(number, pos = 0) {
  return Math.floor(number * Math.pow(10, pos)) / Math.pow(10,pos);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.max = function max(array) {
  return array.length == 0? undefined : Math.max.apply(null, array);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.maxBy = function maxBy(array, iteratee) {
  var max = array[0];
  if(typeof iteratee == "function"){
    for(var i = 0; i < array.length; i++) {
      if(iteratee(array[i]) > iteratee(max)) {
        max = array[i];
      }
    }
  }   else if(typeof iteratee == "string") {
    for(var i = 0; i < array.length; i++) {
      if(liuyiliuyi.property(iteratee)(array[i]) > liuyiliuyi.property(iteratee)(max)) {
        max = array[i];
      }
    }
  }
  return max;
}


//   else if(typeof iteratee == "string") {
//     for(i = 0; i < array.length; i++) {
//       if(array[i][iteratee] > max[iteratee]) {
//         max = array[i];
//       }
//     }
//   }
//   return max;
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.mean = function mean(array) {
  //array.reduce((a,b) => (a + b) / i * (i - 1))
  return array.reduce((a, b) => a + b) / array.length;
}


liuyiliuyi.matches = function matches(target) {
  return function(source) {

  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.meanBy = function meanBy(array, iteratee) {
  var sum = 0;
  if(typeof iteratee == "function") {
    for(i = 0; i < array.length; i++) {
      sum = sum + iteratee(array[i]);
    }
  }
  else if(typeof iteratee == "string") {
    for(var i = 0; i < array.length; i++) {
      sum = sum + liuyiliuyi.property(iteratee)(array[i]);
    }
  }
  return sum / array.length;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.min =

function min(array) {
  return array.length === 0 ? undefined : Math.min(...array);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.minBy =

function minBy(array, iteratee) {
  var min = array[0];
  if(typeof iteratee == "function") {
    for(i = 0; i < array.length; i++) {
      min = iteratee(array[i]) > iteratee(min) ? min : array[i]; 
    }
  } else if (typeof iteratee == "string") {
    for(i = 0; i < array.length; i++) {
      min = liuyiliuyi.property(iteratee)(array[i]) > liuyiliuyi.property(iteratee)(min) ? min : array[i];
    }
  }
  return min;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.multiply =

function multiply(x, y) {
  return x * y;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.round = 

function round(number, pos = 0) {
  return Math.round(number * 10 ** pos) / 10 ** pos;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.subtract =

function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sum = 

function sum(array) {
  return array.reduce((a, b) => a + b);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.sumBy =

function sumBy(array, iteratee) {
  var sum = 0;
  if(typeof iteratee == "function") {
    for(let i = 0; i < array.length; i++) {
      sum = sum + iteratee(array[i]);
    }
  } else if (typeof iteratee == "string") {
    for(let i = 0; i < array.length; i++) {
      sum = sum + liuyiliuyi.property(iteratee)(array[i]);
    }
  }
  return sum;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Number/////////////////////////////////////////////////


liuyiliuyi.clamp =

function clamp(number, lower, upper) {
  result_arr = Array.from(arguments).sort((a, b) => a - b) ;
  return result_arr[1];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.inRange =

function inRange(number, start, end){
  if(arguments.length == 2) {
    end = arguments[1] 
    start = 0;
  }

  if((number > start && number < end) || (number > end && number < start)){
    return true;
  }
  else{return false;}
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.random = 

function random(lower, upper, floating) {
    var rand = Math.random() 
    if(lower !== 0 && upper == undefined){ return rand * lower | 0}
    else if(lower !== 0 && typeof upper == "boolean") {
    return upper == true ?  rand * lower : rand * lower | 0; 
  } else if ((lower | 0) == lower && (upper | 0) == upper){
    return floating == true ?  lower + rand * (upper - lower) : (lower + rand * (upper - lower)) | 0;
  } else return lower + rand * (upper - lower);
}










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Object/////////////////////////////////////////////////


liuyiliuyi.assign = 

function assign(object, ...source){
  return source.reduce((a, b) => {
    for(key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
      return a  
  }, object)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.assignIn =

function assignIn(object, ...source){
  return source.reduce((a, b) => {
    for(key in b) {
      a[key] = b[key];
    }
    return a  
  }, object)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.assignInWith =

function assignInWith(object, source ) {}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.assignWith 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.at = 

function at(object, paths) {
  return paths.map(x => liuyiliuyi.get(object, x));
}
 
liuyiliuyi.at
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.create =

function create(prototype, properties) {
  //var obj = {}
  for(key in properties) {
    prototype[key] = properties[key];
  }
  
  function A() {};
  A.prototype = prototype;
  return new A();

  // obj.__proto__ = prototype;
  // return obj;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.defaults =

function defaults(object, ...source) {
  return source.reduce((a, b) => {
    for(key in b) {
      if(a[key] == undefined) {
        a[key] = b[key];
      }
    }
    return a;
  } ,object)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.defaultsDeep =

function defaultsDeep(object, ...source) {
  return source.reduce((a, b) => {
    for(var key in b) {
      if(typeof b[key] == "object") {
        defaultsDeep(a[key], b[key])
      }
      if(a[key] == undefined) {
        a[key] = b[key];
      }
    }
    return a;
  } ,object)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toPairs = 

function toPairs(object) {
  var arr = [];
  for(key in object) {
    if(object.hasOwnProperty(key)) {
      arr.push([key, object[key]]);
    }
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




liuyiliuyi.toPairsIn = 

function toPairsIn(object) {
  var arr = [];
  for(key in object) {
      arr.push([key, object[key]]);
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//liuyiliuyi.extend.assignIn


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.extendWith


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.findKey = 

function findKey(object, predicate) {
  var f = this.judge(predicate);
  for(key in object) {
    if(f(object[key]) == true) {
      return key;
    }
  }
  return undefined;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.findLastKey =

function findLastKey(object, predicate) {
  var f = this.judge(predicate);
  var arr = [];
  for(key in object) {
    arr.push(key);
  }
  for(i = arr.length - 1; i >= 0; i--) {
    if(f(object[arr[i]]) == true) {
      return arr[i];
    }
  }
  return undefined;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.forIn =

function forIn(object, iteratee) {
  var f = this.judge(iteratee);
  for(key in object) {
    if(f(object[key], key, object) == false){
      break;
    }
  }
  return object;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.forInRight =

function forInRight(object, iteratee) {
  var f = this.judge(iteratee);
  var arr = [];
  for(key in object) {
    arr.push(key);
  }
  for(var i = arr.length - 1; i >= 0; i--) {
    if(f(object[arr[i]], arr[i]) == false) {
    }
  }
  return object; 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.forOwn =

function forOwn(object, iteratee) {
  var f = this.judge(iteratee)
  for(key in object) {
    if(object.hasOwnProperty(key)) {
      if(f(object[key], key) == false) {
        break;
      }
    } 
  }
  return object;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.forOwnRight =

function forOwnRight(object, iteratee) {
  var f = this.judge(iteratee);
  var arr = [];
  for(key in object) {
    if(object.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  for(var i = arr.length - 1; i >= 0; i--) {
    if(f(object[arr[i]], arr[i]) == false) {
      break;
    } 
  }
  return object;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.functions =

function functions(object) {
  var arr = [];
  for(key in object) {
    if(object.hasOwnProperty(key) && typeof object[key] == "function")
    arr.push(key);
  }
  return arr;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.functionsIn =

function functionsIn(object) {
  var arr = [];
  for(key in object) {
    if(typeof object[key] == "function") {
      arr.push(key);
    }
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.get =

function get(object, path, value) {
  var path_arr = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".");
  return path_arr.reduce((a, b) => {
    if(a === undefined) {
      return undefined;
    }else{return a[b]}}, object) || value;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.has =

function has(object, path) {
  var path = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".");
  return path.reduce((x, y) => {
    return x === false ? false : x.hasOwnProperty(y) && x[y];
  }, object) === false ? false : true;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.hasIn =

function has(object, path) {
  var path = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".");
  return path.reduce((x, y) => {
    return x === false || x[y] === undefined ? false : x[y];
  }, object) === false ? false : true;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.invert =

function invert(object) {
  var arr = [];
  for(var key in object) {
    arr.push([object[key], key]);
  }
  return arr.reduce((a, b) => {
                                a[b[0]] = b[1];
                                return a;
                              } , {})
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.invertBy =

function invertBy(object, iteratee) {
  if(arguments.length == 1) {
    iteratee = a => a;
  }
  var f = liuyiliuyi.judge(iteratee);
  var arr = [];
  for(var key in object) {
    arr.push([f(object[key]), key]);
  }
  return arr.reduce((a, b) => {if(a[b[0]] == undefined) {
                                  a[b[0]] = [b[1]]; 
                                }
                                else{
                                  a[b[0]].push(b[1]);
                                }
                                return a;
                              } , {})
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.invoke = 

function invoke(object, path, ...args) {
  path = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".");
  if(this.hasIn(object, path) == false){return "Can't read this path."}
  return args.length == 0 ? path.reduce((x, y) => x[y], object) : path.reduce((x, y, i) => {
                                                                    if(i == path.length - 1) return x[y](...args);
                                                                    return x[y];
                                                                  }, object)
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.keys =

function keys(object) {
  var arr = [];
  for(key in object) {
    if(object.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.keysIn =

function keysIn(object) {
  var arr = [];
  for(key in object) {
      arr.push(key);
  }
  return arr;  
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.mapKeys =

function mapKeys(object, iteratee) {
  let f = liuyiliuyi.judge(iteratee);
  let obj = {};
  for(key in object) {
    if(object.hasOwnProperty(key)) {
      obj[f(object[key], key)] = object[key];
    }
  }
  return obj;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.mapValues =

function mapValues(object, iteratee) {
  var f = liuyiliuyi.judge(iteratee);
  return Object.keys(object).reduce((a, b) => {a[b] = f(object[b]); return a}, {});
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.merge =

function merge(object, ...source) {
  return source.reduce((a, b) => {
           return Object.keys(b).reduce((x, y) => {
             if(typeof b[y] !== "object") x[y] = b[y];
             merge(x[y], b[y]);
             return x;
          } 
           ,a)
         }, object)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.mergeWith =

function mergeWith(object, ...source) {
  return source.reduce((a, b) => {
           return Object.keys(b).reduce((x, y) => {
             if(typeof b[y] !== "object") x[y] = b[y];
             mergeWith(x[y], b[y]);
             return x;
          } 
           ,a)
         }, object)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.omit =  (object, arr) => Object.keys(object).reduce((a, b) => arr.indexOf(b) === -1 && (a[b] = object[b]) ? a : a , {});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.omitBy = (object, predicate) => Object.keys(object).reduce((a, b) => predicate(object[b], b) === false && (a[b] = object[b]) ? a : a , {});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.pick = (object, arr) => arr.reduce((a, b) => {a[b] = object[b]; return a}, {});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.pickBy =

function pickBy(object, predicate) {
  let f = liuyiliuyi.judge(predicate);
  return Object.keys(object).reduce((a, b) => {if(f(object[b], b) === true) {a[b] = object[b]} return a}, {})
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.result = 

function result(object, path, defaultvalue) {
  var value = this.get(object, path, defaultvalue);
  return this.isFunction(value) ? value.bind(this)() : value;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.set =

function set(object, path, value) {
  path = Array.isArray(path) ? path : path.split("]").join("").split("[").join(".").split(".");
  path.reduce((x, y) => {

  }, {})


}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.setWith


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.transform = 

function(object, iteratee, accumulator) {
  accumulator = accumulator || new ((Function("return " + this.kindOf(object).match(/\b\w+(?=])/)[0]))());
  for(key in object) {
    if(iteratee(accumulator, object[key], key, object) === false) {
      break;
    }
  }
  return accumulator;
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.unset =

function(object, path) {
  var path = Array.isArray(path) ? path: path.match(/\w+/g);
  var needle = object;
  for(var i = 0; i < path.length - 1; i++) {
    if((needle = needle[path[i]]) === undefined) return false; 
  }
  return delete needle[path[i]];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.update =

function(object, path, updater) {
  

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.updateWith =

function() {}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.values = 

function values(object) {
  var arr = [];
  for(key in object) {
    if(object.hasOwnProperty(key)) {
      arr.push(object[key]);
    }
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.valuesIn =

function keys(object) {
  var arr = [];
  for(key in object) {
      arr.push(object[key]);
  }
  return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Seq ///////////////////////////////////////////////////



liuyiliuyi.chain


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.tap


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.thru


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
liuyiliuyi.prototype[Symbol.iterator]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.at


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.chain


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.commit


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.next 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.plant 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.reverse 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.toJSON 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.value 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.prototype.valueOf 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



*/
///String///////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.camelCase =

function camelCase(str) {
  // var lower_str = str.toLowerCase();
  // var str2 = lower_str.replace(/[^a-z]+[a-z]/g, x => x.slice(-1).toUpperCase()).replace(/[^A-Za-z]*/g, "");
  // return str2.slice(0, 1).toLowerCase() + str2.slice(1); 
  return str.match(/[a-zA-Z0-9]+/g).reduce((a, b, i) => i == 0 ? a + b.toLowerCase() : a + b.slice(0, 1).toUpperCase() + b.slice(1).toLowerCase(), "")
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.capitalize =

  // var str_lower = str.toLowerCase() 
  // return str_lower[0].toUpperCase() + str_lower.slice(1);
function capitalize(str) {
  return str.replace(/^(\w)(.*)/g, (m, a, b) => a.toUpperCase() + b.toLowerCase())
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.deburr =


function deburr(str) {
var convert = {
            "c0": "A",
            "c1": "A",
            "c2": "A",
            "c3": "A",
            "c4": "A",
            "c5": "A",
            "e0": "a",
            "e1": "a",
            "e2": "a",
            "e3": "a",
            "e4": "a",
            "e5": "a",
            "c7": "C",
            "e7": "c",
            "d0": "D",
            "f0": "d",
            "c8": "E",
            "c9": "E",
            "ca": "E",
            "cb": "E",
            "e8": "e",
            "e9": "e",
            "ea": "e",
            "eb": "e",
            "cc": "I",
            "cd": "I",
            "ce": "I",
            "cf": "I",
            "ec": "i",
            "ed": "i",
            "ee": "i",
            "ef": "i",
            "d1": "N",
            "f1": "n",
            "d2": "O",
            "d3": "O",
            "d4": "O",
            "d5": "O",
            "d6": "O",
            "d8": "O",
            "f2": "o",
            "f3": "o",
            "f4": "o",
            "f5": "o",
            "f6": "o",
            "f8": "o",
            "d9": "U",
            "da": "U",
            "db": "U",
            "dc": "U",
            "f9": "u",
            "fa": "u",
            "fb": "u",
            "fc": "u",
            "dd": "Y",
            "fd": "y",
            "ff": "y",
            "c6": "Ae",
            "e6": "ae",
            "de": "Th",
            "fe": "th",
            "df": "ss"
          }
  var arr = str.split('');
  var result = arr.map(function(x) {
        if(convert[x.charCodeAt().toString(16)]) {
          return convert[x.charCodeAt().toString(16)];
        }
        else {
          return x;
        }
      })
  return result.join("");
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.endsWith = (str, char, position = str.length) => char.length < position && new RegExp("^" + '.'.repeat(position - char.length) + char).test(str);
// function endsWith(str, char, position) {
//   if (!position) {
//     position = str.length;
//   }
//   return str[position - 1] == char ? true : false;
// }





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

liuyiliuyi.escape =

function escape(str){
  var re = /[&<>"']/g;
  var symbol = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(re, function(x) {return symbol[x]});
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.escapeRegExp =

/*
"^": "//^",
"$": "//$",
".": "//.",
"*": "//*",
"+": "//+",
"?": "//?",
"(": "//(",
")": "//)",
"[": "//[",
"]": "//]",
"{": "//{",
"}": "//}",
"|": "//|",
*/

function escapeRegExp(str){
  var re = /[\^\$\.\*\+\?\(\)\[\]\{\}\|]/g;
  // var symbol = {
  //   "^": "\\^",
  //   "$": "\\$",
  //   ".": "\\.",
  //   "*": "\\*",
  //   "+": "\\+",
  //   "?": "\\?",
  //   "(": "\\(",
  //   ")": "\\)",
  //   "[": "\\[",
  //   "]": "\\]",
  //   "{": "\\{",
  //   "}": "\\}",
  //   "|": "\\|",
  // };
  return str.replace(re, function(x) {return "\\" + x});
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.kebabCase =

function kebabCase(str) {
  return lowerCase(str).replace(/ /g, "-")
}

function lowerCase(str) {
  var words_arr = getWords(str);
  words_str = words_arr.join(" ");
  re = /[a-z][A-Z]/g;
  return words_str.replace(re, m => (m.slice(0,1) + " " + m.slice(1))).toLowerCase();
  
} 

function getWords(str) {  //获得字符串的数组
  input_str = str;
  re = /[A-Za-z0-9]+/g;
  return words = input_str.match(re, input_str);
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.lowerCase = 
// function lowerCase(str) {
//   var words_arr = getWords(str);
//   re = /[A-Z]/g;
//   output = words_arr.join(" ").replace(re,m=> " " + m).replace(/  /g, " ").toLowerCase().trim();
//   return output;

// }
function lowerCase(str) {
  var words_arr = getWords(str);
  words_str = words_arr.join(" ");
  re = /[a-z][A-Z]/g;
  return words_str.replace(re, m => (m.slice(0,1) + " " + m.slice(1))).toLowerCase();
  
} 

function getWords(str) {  //获得字符串的数组
  input_str = str;
  re = /[A-Za-z0-9]+/g;
  return words = input_str.match(re, input_str);
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.lowerFirst =
function lowerFirst(str) {
  var str_upper = str;
  return str_upper[0].toLowerCase() + str_upper.slice(1);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.pad =

function pad(input_str, input_num, input_symbol) {
  //if(!input_symbol) {input_symbol = " ";}
  if(arguments[2] == undefined) {input_symbol = " ";}
  var symbol_length = input_num - input_str.length;
  var all_symbol = generatorSymbol(symbol_length, input_symbol);
  var symbol_left_length = Math.floor((input_num - input_str.length) / 2);
  //var symbol_right_length = Math.ceil((input_num - input_str.length) / 2); 
  var symbol_left = all_symbol.slice(0, symbol_left_length);
  var symbol_right = all_symbol.slice(symbol_left_length);
  return symbol_left + input_str + symbol_right;
}

function generatorSymbol(length, symbol) {
  var str = '';
  while(str.length < length) {
    str = symbol + str;
  }
  return str.slice(0, length)
}

//左边符号长度为 Math.floor((input_num - input_str.length) / 2)
//右边符号长度为 Math.ceil((input_num - input_str.length) / 2) 




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.padEnd =
//左边符号长度为 Math.floor((input_num - input_str.length) / 2)
//右边符号长度为 Math.ceil((input_num - input_str.length) / 2) 

function padEnd(input_str, input_num, input_symbol) {
  //if(!input_symbol) {input_symbol = " ";}
  if(arguments[2] == undefined) {input_symbol = " ";}
  var symbol_length = input_num - input_str.length;
  var all_symbol = generatorSymbol(symbol_length, input_symbol);
  return input_str + all_symbol;
}

function generatorSymbol(length, symbol) {
  var str = '';
  while(str.length < length) {
    str = symbol + str;
  }
  return str.slice(0, length)
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.padStart =

//左边符号长度为 Math.floor((input_num - input_str.length) / 2)
//右边符号长度为 Math.ceil((input_num - input_str.length) / 2) 

function padStart(input_str, input_num, input_symbol) {
  //if(!input_symbol) {input_symbol = " ";}
  if(arguments[2] == undefined) {input_symbol = " ";}
  var symbol_length = input_num - input_str.length;
  var all_symbol = generatorSymbol(symbol_length, input_symbol);
  return  all_symbol + input_str;
}

function generatorSymbol(length, symbol) {
  var str = '';
  while(str.length < length) {
    str = symbol + str;
  }
  return str.slice(0, length)
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.parseInt =

function parseInt(str) {
  return +(+str).toString();
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.repeat = (str, times) => Array(times).fill(0).reduce((x, y) => x + str, "")

// function repeat(str, times) {
//   var result = "";
//   var str2 = str;
//   for(i = 0; i < times; i++) {
//     result = result + str;
//   }
//   return result;
// }
// function repeat(str, times)  {
//   return Array(times).fill(0).reduce((x, y) => x + str, "")
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.replace =

function replace(str, pattern, replacement) {
  re = pattern;
  return str.replace(re, replacement);
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.snakeCase = 

function kebabCase(str) {
  return lowerCase(str).replace(/ /g, "_")
}

function lowerCase(str) {
  var words_arr = getWords(str);
  words_str = words_arr.join(" ");
  re = /[a-z][A-Z]/g;
  return words_str.replace(re, m => (m.slice(0,1) + " " + m.slice(1))).toLowerCase();
  
} 

function getWords(str) {  //获得字符串的数组
  input_str = str;
  re = /[A-Za-z0-9]+/g;
  return words = input_str.match(re, input_str);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.split =

function split(str, symbol, length) {
  return str.split(symbol).slice(0, length);
  
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.startCase =
function StartCase(str) {
  return str.replace(/([a-z])(?=[A-Z])/g, "$1 ").replace(/[_ -]+/g, " ").replace(/\b\w/g, a =>a.toUpperCase()).trim();
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.startsWith =

function startsWith(str, target, position) {
  return str.indexOf(target, position) == (position == undefined ? 0 : position) ? true: false;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.template 









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toLower =

function toLower(str){
  return str.toLowerCase();
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toUpper =

function toUpper(str){
  return str.toUpperCase();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.trim =

// function remove_left_right_symbol(str) {
//   return str.match(/([^0-9A-Za-z]*)([0-9A-Za-z].*[0-9A-Za-z])([^0-9A-Za-z]*)/); //返回[全部匹配, 捕获左边, 捕获中间，捕获右边,]
// }

// function remove_common_symbol(input_str, goal_symbol) {
//   for(i = 0; i < goal_symbol.length; i++) {
//     // while(input_str.indexOf(goal_symbol[i]) >= 0) {
//     //   //input_str = input_str.slice(0, input_str.indexOf(goal_symbol[i])) + input_str.slice(input_str.indexOf(goal_symbol[i]));
//     //   input.str.s
//     // }
//     if (input_str.indexOf(goal_symbol[i]) >= 0) {
//     var regexp = new RegExp(goal_symbol[i], "g");
//     input_str = input_str.replace(regexp, "");
//     }
//   }
//   return input_str;
// }



// function trim(str, char) {
  
// }

 /**
   * 去除字符串前后给定的符号
   * @str {字符串} {str} [输入的字符串]
   * @symbol {字符串} [symbol] [要删除的符号]
   * @return {[type]} [description]
   */
/*
function trim(str, symbol) {
  var input_symbol = symbol + symbol + symbol+ symbol;  
  var input_str_arr = str.split("");
  for(var i = 0; i < input_symbol.length; i++) {
    while(input_str_arr[0] == input_symbol[i]) {
      input_str_arr.shift();
    }
    while(input_str_arr[input_str_arr.length - 1] == input_symbol[i]) {
      input_str_arr.pop();
    }
  }
  console.log(input_str_arr)
}
*/

// function trim(str, symbol) {
//   symbol = symbol ? symbol : "  　";
//   var input_symbol = symbol;
//   var input_str_arr = str.split("");
//   while(input_symbol.indexOf(input_str_arr[0]) != -1){
//     input_str_arr.shift();
//   }
//   while(input_symbol.indexOf(input_str_arr[input_str_arr.length - 1]) != -1){
//     input_str_arr.pop();
//   }
//   return input_str_arr.join("");  
// }

function trim(str, symbol = /\s/) {
  return str.replace(new RegExp(`^[${symbol}]*|[${symbol}]*$`, "g"), "");
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.trimEnd =

// function trimEnd(str, symbol) {
//   symbol = symbol ? symbol : "  　";
//   var input_symbol = symbol;
//   var input_str_arr = str.split("");
  
//   while(input_symbol.indexOf(input_str_arr[input_str_arr.length - 1]) != -1){
//     input_str_arr.pop();
//   }
//   return input_str_arr.join("");  
// }

function trimEnd(str, symbol = /\s/) {
  return str.replace(new RegExp(`[${symbol}]*$`, "g"), "");
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.trimStart =

// function trimStart(str, symbol) {
//   symbol = symbol ? symbol : "  　";
//   var input_symbol = symbol;
//   var input_str_arr = str.split("");
//   while(input_symbol.indexOf(input_str_arr[0]) != -1){
//     input_str_arr.shift();
//   }
//   return input_str_arr.join("");  
// }

function trimStart(str, symbol = /\s/) {
  return str.replace(new RegExp(`^[${symbol}]*`, "g"), "");
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.truncate =

// funsction truncate(str, condition_object = {}) {
//   var [length, omission, separator] = [condition_object.length || 30, condition_object.omission || "...", condition_object.separator || /(?:)/];
//   var flage = false;
//   var separator_kuo = new RegExp("(" + new RegExp(separator).toString().slice(1, -1) + ")");
//   sep_str = str.split(separator_kuo).reduce((a, b, i) => {
//     if((a + b).length < length) {
//       return a + b;
//     } else {
//       return a;
//     }
//   },"");
//   return str.length > length ? sep_str.substr(0, length - omission.length) + omission : sep_str;   
// }



// function truncate(str, condition_object = {}) {
//   var [length, omission, separator] = [condition_object.length || 30, condition_object.omission || "...", condition_object.separator || /(?:)/];
//   if(str.length > length) {}
// }

function truncate(str, condition_object = {}) {
  var [length, omission] = [condition_object.length || 30, condition_object.omission || "..."];
  if(condition_object.separator == undefined  && str.length > length) {
    return str.substr(0, length - omission.length) +　omission;
  } else if(str.length > length) { // 截到length - condition.smission 的位置
    var new_str = str.substr(0, length - omission.length);
    return new_str.substr(0, new_str.lastIndexOf(...new_str.match(new RegExp(condition_object.separator, "g")).slice(-1))) + omission;
  }
  return str;
}
/////////////////////// 对的版
// function truncate(str, condition_object = {}) {
//   var [length, omission] = [condition_object.length || 30, condition_object.omission || "..."];
//   if(condition_object.separator == undefined  && str.length > length) {
//     return str.substr(0, length - omission.length) +　omission;
//   } else if(str.length > length) { // 截到length - condition.smission 的位置
//     var separator = new RegExp(condition_object.separator, "g"); // 
//     var new_str = str.substr(0, length - omission.length);
//     return new_str.substr(0, new_str.lastIndexOf(...new_str.match(separator).slice(-1))) + omission;
//   }
//   return str;
// }
/////////////////////// 对的版

// function truncate(str, condition_object = {length: 30, omission: "...", separator: /./}) {
//   var first_str = str.substr(0, length - condition_object.omission.length);
//   var re = new RegExp(condition_object.separator, "g");
//   var match_arr = first_str.match(re);
//   result = match_arr ? first_str.slice(0, first_str.lastIndexOf(match_arr[match_arr.length - 1]) + 1) : first_str;
//   return 
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.unescape =

function unescape(str) {
  var entities = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&apos;": "'",
  }
  var input_str = str;
  var re = /&amp;|&lt;|&gt;|&quot;|&apos;/g
  return input_str.replace(re, x => entities[x]);
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.upperCase =
function upperCase(str) {
  var words_arr = getWords(str);
  re = /[A-Z]/g;
  output = words_arr.join(" ").replace(re,m=> " " + m).toUpperCase();
  return output;
}

function getWords(str) {  //获得字符串的数组
  input_str = str;
  re = /[A-Za-z0-9]+/g;
  return words = input_str.match(re, input_str);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.upperFirst = str => str.replace(/^(\w)/, m => m.toUpperCase())

// function upperFirst(str) {   //把第一个字母大写
//   var input_str = str;
//   return input_str.slice(0, 1).toUpperCase() + input_str.slice(1);
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.words =

function words(str, pattern = /\w+/g) {
  return str.match(pattern);
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Util/////////////////////////////////////////////////


liuyiliuyi.attempt


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.bindAll


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.cond


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.conforms


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.constant = 

function constant(value) {
  return function() {
    return value;
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.defaultTo


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flow


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.flowRight


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.identity


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.iteratee


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.matches


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.matchesProperty


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.method


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.methodOf


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.mixin


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.noConflict


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.noop


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.nthArg


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.over


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.overEvery


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.overSome


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.property = 

function(path) {
  var arr = path.match(/[^.]+/g);
  return function(obj) {
    var result = obj;
    for(var i = 0; i < arr.length; i++) {
      result = result[arr[i]];
    }
    return result;
  }
}


///////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.propertyOf


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.range =

function range() {

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.rangeRight


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.runInContext


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.stubArray


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.stubFalse


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.stubObject


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.stubString


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.stubTrue


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.times


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.toPath


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.uniqueId

debugger;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*


liuyiliuyi.VERSION


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.templateSettings


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.templateSettings.escape


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.templateSettings.evaluate


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.templateSettings.imports


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.templateSettings.interpolate


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


liuyiliuyi.templateSettings.variable


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/