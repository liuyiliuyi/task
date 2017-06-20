t = {
  /**
   * 灏� array 鎷嗗垎鎴愬涓� size 闀垮害鐨勫潡鎶婅繖浜涘潡缁勬垚涓€涓柊鏁扮粍銆傚鏋� array 鏃犳硶琚垎鍓叉垚鍏ㄩ儴绛夐暱鐨勫潡锛岄偅涔堟渶鍚庡墿浣欑殑鍏冪礌灏嗙粍鎴愪竴涓潡銆�
   * 鍙傛暟
   * array (Array): 闇€瑕佽澶勭悊鐨勬暟缁勩€�
   * [size=1] (number): 姣忎釜鍧楃殑闀垮害銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖涓€涓寘鍚媶鍒嗗潡鏁扮粍鐨勬柊鏁扮粍锛堢浉褰撲簬涓€涓簩缁存暟缁勶級銆�
   * 渚嬪瓙
   * chunk(['a', 'b', 'c', 'd'], 2);
   * => [['a', 'b'], ['c', 'd']]
   * chunk(['a', 'b', 'c', 'd'], 3);
   * => [['a', 'b', 'c'], ['d']]
   **/
  chunk: function (arr, n) {
    var lenR = Math.ceil(arr.length / n)
    var lenA = arr.length
    var result = new Array(lenR)
    for (var i = 0; i < lenR; i++) {
      result[i] = []
    }
    for (var j = 0; j < lenA; j++) {
      result[parseInt(j / n)][j % n] = arr[j]
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓柊鏁扮粍骞跺寘鍚師鏁扮粍涓墍鏈夌殑闈炲亣鍊煎厓绱犮€備緥濡� false銆乶ull銆� 0銆�""銆乽ndefined 鍜� NaN 閮芥槸鈥滃亣鍊尖€濄€�
   * 鍙傛暟
   * array (Array): 鏁扮粍鍙傛暟銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖杩囨护鍋囧€煎悗鐨勬暟缁勩€�
   * 渚嬪瓙
   * compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   **/
  compact: function (arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        result.push(arr[i])
      }
    }
    return result
  },
  /**
   * Creates an array of unique array values not included in the other provided arrays using SameValueZero for equality comparisons.
   * 鍙傛暟
   * array (Array): 闇€瑕佽繃婊ょ殑鏁扮粍銆�
   * [values] (...Array): 鏁扮粍闇€瑕佹帓闄ゆ帀鐨勫€笺€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖杩囨护鍚庣殑鏁扮粍
   * 渚嬪瓙
   * difference([1, 2, 3], [4, 2]);
   * // => [1, 3]
   * difference([1, '2', 3], [4, 2]);
   * // => [1, "2", 3]
   **/
  difference: function (arr) {
    var tmp = []
    var len = arguments.length
    var result = []
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i])
    }
    for (var i = 1; i < len; i++) {
      tmp.push(arguments[i])
    }
    tmp = this.flattenDeep(tmp)
    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < tmp.length; j++) {
        if (result[i] === tmp[j]) {
          result.splice(i, 1)
          j = -1
        }
      }
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技_.difference 锛岄櫎浜嗗畠鎺ュ彈涓€涓� iteratee
   * @param  array (Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * @param  [values] (...Array): 鎺掗櫎鐨勫€笺€�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): iteratee 璋冪敤姣忎釜鍏冪礌銆�
   * @return (Array): 杩斿洖涓€涓繃婊ゅ€煎悗鐨勬柊鏁扮粍銆�
   */
  differenceBy: function (arr, value, iter) {
    var result = []
    var onOff
    if (typeof iter == 'function') {
      for (var i = 0; i < arr.length; i++) {
        onOff = true
        for (var j = 0; j < value.length; j++) {
          if (iter(value[j]) == iter(arr[i])) {
            onOff = false
          }
        }
        if (onOff) {
          result.push(arr[i])
        }
      }
    }
    if (typeof iter == 'string') {
      for (var i = 0; i < arr.length; i++) {
        onOff = true
        for (var j = 0; j < value.length; j++) {
          if (arr[i][iter] == value[j][iter]) {
            onOff = false
          }
        }
        if (onOff) {
          result.push(arr[i])
        }
      }
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技_.difference 锛岄櫎浜嗗畠鎺ュ彈涓€涓� comparator
   * @param  array (Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * @param  [values] (...Array): 鎺掗櫎鐨勫€笺€�
   * @param  [comparator] (Function): comparator 璋冪敤姣忎釜鍏冪礌銆�
   * @return (Array): 杩斿洖涓€涓繃婊ゅ€煎悗鐨勬柊鏁扮粍銆�
   */
  differenceWith: function (arr, value, compara) {
    var result = []
    var onOff
    for (var i = 0; i < arr.length; i++) {
      onOff = true
      for (var j = 0; j < value.length; j++) {
        if (compara(arr[i], value[j])) {
          onOff = false
        }
      }
      if (onOff) {
        result.push(arr[i])
      }
    }
    return result
  },
  /**
   * 灏� array 涓殑鍓� n 涓厓绱犲幓鎺夛紝鐒跺悗杩斿洖鍓╀綑鐨勯儴鍒嗐€�
   * 鍙傛暟
   * array (Array): 琚搷浣滅殑鏁扮粍銆�
   * [n=1] (number): 鍘绘帀鐨勫厓绱犱釜鏁般€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array 鐨勫墿浣欓儴鍒嗐€�
   * 渚嬪瓙
   * drop([1, 2, 3]);
   * // => [2, 3] 榛樿鏄�1寮€濮嬬殑
   * drop([1, 2, 3], 2);
   * // => [3]
   * drop([1, 2, 3], 5);
   * // => []
   * drop([1, 2, 3], 0);
   * // => [1, 2, 3]
   **/
  drop: function (arr, del) {
    var result = []
    if (del == undefined) {
      del = 1
    }
    for (var i = del; i < arr.length; i++) {
      result.push(arr[i])
    }
    return result
  },
  /**
   * 灏� array 灏鹃儴鐨� n 涓厓绱犲幓闄わ紝骞惰繑鍥炲墿浣欑殑閮ㄥ垎銆�
   * 鍙傛暟
   * array (Array): 闇€瑕佽澶勭悊鏁扮粍銆�
   * [n=1] (number): 鍘绘帀鐨勫厓绱犱釜鏁般€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array 鐨勫墿浣欓儴鍒嗐€�
   * 渚嬪瓙
   * dropRight([1, 2, 3]);
   * // => [1, 2]
   * dropRight([1, 2, 3], 2);
   * // => [1]
   * dropRight([1, 2, 3], 5);
   * // => []
   * dropRight([1, 2, 3], 0);
   * // => [1, 2, 3]
   **/
  dropRight: function (arr, del) {
    var result = []
    if (del == undefined) {
      del = 1
    }
    for (var i = 0; i < arr.length - del; i++) {
      result.push(arr[i])
    }
    return result
  },
  /**
   * 鑾峰彇鏁扮粍 array鐨勭涓€涓厓绱�
   * 鍙傛暟
   * array (Array): 闇€瑕佹煡璇㈢殑鏁扮粍
   * 杩斿洖鍊�
   * (*): 杩斿洖鏁扮粍鐨勭涓€涓厓绱�
   * 渚嬪瓙
   * first([1, 2, 3]);
   * // => 1
   * first([]);
   * // => undefined
   **/
  first: function (arr) {
    return arr[0]
  },
  /**
   * 鑾峰彇鏁扮粍 array鐨勭涓€涓厓绱�
   * 鍙傛暟
   * array (Array): 闇€瑕佹煡璇㈢殑鏁扮粍
   * 杩斿洖鍊�
   * (*): 杩斿洖鏁扮粍鐨勭涓€涓厓绱�
   * 渚嬪瓙
   * first([1, 2, 3]);
   * // => 1
   * first([]);
   * // => undefined
   **/
  head: function (arr) {
    return arr[0]
    // return true
  },
  /**
   * 鍘婚櫎鏁扮粍鏈€鍚庝竴涓厓绱燼rray.
   * 鍙傛暟
   * array (Array): 闇€瑕佹煡璇㈢殑鏁扮粍.
   * 杩斿洖鍊�
   * (Array): 杩斿洖鎴彇鐨勬暟缁刟rray.
   * 渚嬪瓙
   * initial([1, 2, 3]);
   * // => [1, 2]
   **/
  initial: function (arr) {
    var result = Array.prototype.slice.call(arr)
    result.splice(-1, 1)
    return result
  },
  /**
   * 鍙栧嚭鏁扮粍鐨勬渶鍚庝竴涓厓绱� array.
   * 鍙傛暟
   * array (Array): 鏌ヨ鐨勬暟缁�
   * 杩斿洖鍊�
   * (*): 杩斿洖 array鐨勬渶鍚庝竴涓厓绱�.
   * 渚嬪瓙
   * last([1, 2, 3]);
   * // => 3
   **/
  last: function (arr) {
    return arr[arr.length - 1]
    // return true
  },
  /**
   * 鑾峰彇鏁扮粍 array绗竴涓厓绱犻櫎澶栫殑鎵€鏈夊厓绱�.
   * 鍙傛暟
   * array (Array): 闇€瑕佹煡璇㈢殑鏁扮粍
   * 杩斿洖鍊�
   * (Array): 杩斿洖鎴彇鐨� array.
   * 渚嬪瓙
   * rest([1, 2, 3]);
   * // => [2, 3]
   **/
  /* lodash 鏈€鏂扮増鏈殑 rest 鍔熻兘涓嶄竴鏍�
   * rest: function(arr){
   *  var result = arr
   *  result.splice(0,1)
   *  return result
   * },
   **/
  /**
   * 鍙互鐞嗚В涓哄皢宓屽鏁扮粍鐨勭淮鏁板噺灏戯紝flattened锛堝钩鍧︼級. 濡傛灉 isDeep 鍊间负 true 鏃讹紝宓屽鏁扮粍灏嗛€掑綊涓轰竴缁存暟缁�, 鍚﹀垯鍙噺灏戝祵濂楁暟缁勪竴涓骇鍒殑缁存暟.
   * 鍙傛暟
   * array (Array): 闇€瑕乫lattened锛堝噺灏戠淮鏁帮級鐨勫祵濂楁暟缁�
   * [isDeep] (boolean): 鏄惁娣遍€掑綊
   * 杩斿洖鍊�
   * (Array): 杩斿洖澶勭悊鍚庣殑鏁扮粍
   * 渚嬪瓙
   * flatten([1, [2, 3, [4]]]);
   * // => [1, 2, 3, [4]]
   * // using `isDeep`
   * flatten([1, [2, 3, [4]]], true);
   * // => [1, 2, 3, 4]
   **/
  flatten: function (arr, isDeep) {
    if (!isDeep) {
      return flat(arr)
    } else {
      return flatDeep(arr)
    }

    function flatDeep(a) {
      var resultDeep = a
      var onOff = true
      for (var i = 0; i < resultDeep.length; i++) {
        if (Array.isArray(resultDeep[i])) {
          i = 0
          resultDeep = flat(resultDeep)
        }
      }
      return resultDeep
    }

    function flat(a) {
      var result = []
      var len = a.length
      for (var i = 0; i < len; i++) {
        if (!Array.isArray(a[i])) {
          result.push(a[i])
        } else {
          for (var j = 0; j < a[i].length; j++) {
            result.push(a[i][j])
          }
        }
      }
      return result
    }
  },
  /**
   * 閫掑綊鍦板钩鍧︿竴涓祵濂楃殑鏁扮粍.鐩稿綋浜巁.flatten(array, true)
   * 鍙傛暟
   * array (Array): 闇€瑕�
   * 杩斿洖鍊�
   * (Array): 杩斿洖澶勭悊鍚庣殑鏁扮粍.
   * 渚嬪瓙
   * flattenDeep([1, [2, 3, [4]]]);
   * // => [1, 2, 3, 4]
   **/
  flattenDeep: function (arr) {
    return flatDeep(arr)

    function flatDeep(a) {
      var resultDeep = a
      var onOff = true
      for (var i = 0; i < resultDeep.length; i++) {
        if (Array.isArray(resultDeep[i])) {
          i = 0
          resultDeep = flat(resultDeep)
        }
      }
      return resultDeep
    }

    function flat(a) {
      var result = []
      var len = a.length
      for (var i = 0; i < len; i++) {
        if (!Array.isArray(a[i])) {
          result.push(a[i])
        } else {
          for (var j = 0; j < a[i].length; j++) {
            result.push(a[i][j])
          }
        }
      }
      return result
    }
  },
  /**
   * 鍒涘缓涓€涓墧闄ゆ墍鏈夌粰瀹氬€肩殑鏂版暟缁勶紝鍓旈櫎鍊肩殑鏃跺€欙紝浣跨敤SameValueZero鍋氱浉绛夋瘮杈�.
   * 娉ㄦ剰: 涓嶅儚 _.pull, 杩欎釜鏂规硶浼氳繑鍥炰竴涓柊鏁扮粍銆�
   * 鍙傛暟
   * array (Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * [values] (...*): 瑕佸墧闄ょ殑鍊笺€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖杩囨护鍊煎悗鐨勬柊鏁扮粍銆�
   * 渚嬪瓙
   * without([2, 1, 2, 3], 1, 2);
   * // => [3]
   **/
  without: function (arr) {
    var result = arr
    var lenArg = arguments.length
    var lenArr = result.length
    for (var i = 1; i < lenArg; i++) {
      for (var j = 0; j < lenArr; j++) {
        if (arguments[i] === result[j]) {
          result.splice(j, 1)
          j = -1
        }
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓寜椤哄簭鎺掑垪鐨勫敮涓€鍊肩殑鏁扮粍銆傛墍鏈夌粰瀹氭暟缁勭殑鍏冪礌鍊间娇鐢⊿ameValueZero鍋氱瓑鍊兼瘮杈冦€傦紙鎰氫汉鐮佸ご娉細 arrays锛堟暟缁勶級鐨勫苟闆嗭紝鎸夐『搴忚繑鍥烇紝杩斿洖鏁扮粍鐨勫厓绱犳槸鍞竴鐨勶級
   * 鍙傛暟
   * [arrays] (...Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖涓€涓柊鐨勮仈鍚堟暟缁勩€�
   * 渚嬪瓙
   * union([2], [1, 2]);
   * // => [2, 1]
   **/
  union: function () {
    var tmp = []
    for (var i = 0; i < arguments.length; i++) {
      tmp.push(arguments[i])
    }
    var result = this.flattenDeep(tmp)
    var len = result.length
    for (var i = 0; i < len; i++) {
      for (var j = i + 1; j < len; j++) {
        if (result[i] === result[j]) {
          result.splice(j, 1)
        }
      }
    }
    return result
  },
  /**
   * 鍒涘缓鍞竴鍊肩殑鏁扮粍锛岃繖涓暟缁勫寘鍚墍鏈夌粰瀹氭暟缁勯兘鍖呭惈鐨勫厓绱狅紝浣跨敤 SameValueZero杩涜鐩哥瓑鎬ф瘮杈冦€傦紙鎰氫汉鐮佸ご娉細鍙互鐞嗚В涓虹粰瀹氭暟缁勭殑浜ら泦锛�
   * 鍙傛暟
   * [arrays] (...Array): 寰呮鏌ョ殑鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖涓€涓寘鍚墍鏈変紶鍏ユ暟缁勪氦闆嗗厓绱犵殑鏂版暟缁勩€�
   * 渚嬪瓙
   * intersection([2, 1], [4, 2], [1, 2]);
   * // => [2]
   **/
  intersection: function () {
    var result = []
    var len0 = arguments[0].length
    var len = arguments.length
    var count = 0
    for (var i = 0; i < len0; i++) {
      count = 0
      for (var j = 1; j < len; j++) {
        for (var k = 0; k < arguments[j].length; k++) {
          if (arguments[0][i] === arguments[j][k]) {
            count++
            break
          }
        }
      }
      if (count == len - 1) {
        result.push(arguments[0][i])
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓柊鏁扮粍锛屽皢array涓庝换浣曟暟缁� 鎴� 鍊艰繛鎺ュ湪涓€璧枫€�
   * 鍙傛暟
   * array (Array): 琚繛鎺ョ殑鏁扮粍銆�
   * [values] (...*): 杩炴帴鐨勫€笺€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖杩炴帴鍚庣殑鏂版暟缁勩€�
   * 渚嬪瓙
   * var array = [1];
   * var other = concat(array, 2, [3], [[4]]);
   * console.log(other);
   * // => [1, 2, 3, [4]]
   * console.log(array);
   * // => [1]
   **/
  concat: function (arr) {
    var result = []
    var tmp = []
    var len = arr.length
    var lenA = arguments.length
    for (var i = 0; i < len; i++) {
      result.push(arr[i])
    }
    for (var i = 1; i < lenA; i++) {
      tmp.push(arguments[i])
    }
    var lenTmp = tmp.length
    tmp = this.flatten(tmp)
    for (var i = 0; i < lenTmp; i++) {
      result.push(tmp[i])
    }
    return result
  },
  /**
   * 浣跨敤 value 鍊兼潵濉厖锛堟浛鎹級 array锛屼粠start浣嶇疆寮€濮�, 鍒癳nd浣嶇疆缁撴潫锛堜絾涓嶅寘鍚玡nd浣嶇疆锛夈€�
   * Note: 杩欎釜鏂规硶浼氭敼鍙� array
   * 鍙傛暟
   * array (Array): 瑕佸～鍏呮敼鍙樼殑鏁扮粍銆�
   * value (*): 濉厖缁� array 鐨勫€笺€�
   * [start=0] (number): 寮€濮嬩綅缃紙榛樿0锛夈€�
   * [end=array.length] (number):缁撴潫浣嶇疆锛堥粯璁rray.length锛夈€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array銆�
   * 渚嬪瓙
   * var array = [1, 2, 3];
   * fill(array, 'a');
   * console.log(array);
   * // => ['a', 'a', 'a']
   * fill(Array(3), 2);
   * // => [2, 2, 2]
   * fill([4, 6, 8, 10], '*', 1, 3);
   * // => [4, '*', '*', 10]
   **/
  fill: function (arr, n, start, end) {
    if (!start) {
      start = 0
    }
    if (!end && end !== 0) {
      end = arr.length
    }
    for (var i = start; i < end; i++) {
      arr.splice(i, 1, n)
    }
    return arr
  },
  /**
   * 杩欎釜鏂规硶杩斿洖涓€涓敱閿€煎pairs鏋勬垚鐨勫璞°€�
   * Note: 杩欎釜鏂规硶浼氭敼鍙� array
   * 鍙傛暟
   * pairs (Array): 閿€煎pairs銆�
   * 杩斿洖鍊�
   * (Object): 杩斿洖涓€涓柊瀵硅薄銆�
   * 渚嬪瓙
   * fromPairs([['fred', 30], ['barney', 40]]);
   * // => { 'fred': 30, 'barney': 40 }
   **/
  fromPairs: function (arr) {
    var result = {}
    var len = arr.length
    for (var i = 0; i < len; i++) {
      result[arr[i][0]] = arr[i][1]
    }
    return result
  },
  /**
   * 绉婚櫎鏁扮粍array涓墍鏈夊拰缁欏畾鍊肩浉绛夌殑鍏冪礌锛屼娇鐢� SameValueZero 杩涜鍏ㄧ瓑姣旇緝銆�
   * 娉ㄦ剰锛� 鍜� _.without 鏂规硶涓嶅悓锛岃繖涓柟娉曚細鏀瑰彉鏁扮粍銆備娇鐢� _.remove 浠庝竴涓暟缁勪腑绉婚櫎鍏冪礌銆�
   * 鍙傛暟
   * array (Array): 瑕佷慨鏀圭殑鏁扮粍銆�
   * [values] (...*): 瑕佸垹闄ょ殑鍊笺€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array.
   * 渚嬪瓙
   * var array = [1, 2, 3, 1, 2, 3];
   * pull(array, 2, 3);
   * console.log(array);
   * // => [1, 1]
   **/
  pull: function (arr) {
    var lenArg = arguments.length
    var lenArr = arr.length
    for (var i = 1; i < lenArg; i++) {
      for (var j = 0; j < lenArr; j++) {
        if (arguments[i] === arr[j]) {
          arr.splice(j, 1)
          j = -1
        }
      }
    }
    return arr
  },
  /**
   * 杩欎釜鏂规硶绫讳技_.pull锛屽尯鍒槸杩欎釜鏂规硶鎺ユ敹涓€涓绉婚櫎鍊肩殑鏁扮粍銆�
   * Note: 涓嶅悓浜� _.difference, 杩欎釜鏂规硶浼氭敼鍙樻暟缁� array銆�
   * 鍙傛暟
   * array (Array): 瑕佷慨鏀圭殑鏁扮粍銆�
   * values (Array): 瑕佺Щ闄ゅ€肩殑鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array銆�
   * 渚嬪瓙
   * var array = [1, 2, 3, 1, 2, 3];
   * pullAll(array, [2, 3]);
   * console.log(array);
   * // => [1, 1]
   **/
  pullAll: function (arr, del) {
    var lenDel = del.length
    var lenArr = arr.length
    for (var i = 0; i < lenDel; i++) {
      for (var j = 0; j < lenArr; j++) {
        if (del[i] === arr[j]) {
          arr.splice(j, 1)
        }
      }
    }
    return arr
  },
  /**
   * 鏍规嵁绱㈠紩 indexes锛岀Щ闄rray涓搴旂殑鍏冪礌锛屽苟杩斿洖琚Щ闄ゅ厓绱犵殑鏁扮粍銆�
   * Note: 鍜� _.at涓嶅悓, 杩欎釜鏂规硶浼氭敼鍙樻暟缁� array銆�
   * 鍙傛暟
   * array (Array): 瑕佷慨鏀圭殑鏁扮粍銆�
   * [indexes] (...(number|number[])): 瑕佺Щ闄ゅ厓绱犵殑绱㈠紩銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖绉婚櫎鍏冪礌缁勬垚鐨勬柊鏁扮粍銆�
   * 渚嬪瓙
   * var array = [5, 10, 15, 20];
   * var evens = _.pullAt(array, 1, 3);
   * console.log(array);
   * // => [5, 15]
   * console.log(evens);
   * // => [10, 20]
   **/
  pullAt: function (arr) {
    var result = []
    var lenArg = arguments.length
    for (var i = lenArg - 1; i >= 1; i--) {
      if (arguments[i] < arr.length) {
        result.push(arr[arguments[i]])
        arr.splice(arguments[i], 1)
      }
    }
    result = result.reverse()
    return result
  },
  /**
   * 鍙嶈浆array锛屼娇寰楃涓€涓厓绱犲彉涓烘渶鍚庝竴涓厓绱狅紝绗簩涓厓绱犲彉涓哄€掓暟绗簩涓厓绱狅紝渚濇绫绘帹銆�
   * Note: 杩欎釜鏂规硶浼氭敼鍙樺師鏁扮粍 array锛屽熀浜� Array#reverse.
   * 鍙傛暟
   * array (Array): 瑕佷慨鏀圭殑鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array.
   * 渚嬪瓙
   * var array = [1, 2, 3];
   * reverse(array);
   * // => [3, 2, 1]
   * console.log(array);
   * // => [3, 2, 1]
   **/
  reverse: function (arr) {
    var len = arr.length
    var result = []
    for (var i = 0; i < len; i++) {
      result.push(arr.pop())
    }
    for (var i = 0; i < len; i++) {
      arr.push(result[i])
    }
    return arr
  },
  /**
   * 鑾峰彇闄や簡array鏁扮粍绗竴涓厓绱犱互澶栫殑鍏ㄩ儴鍏冪礌銆�
   * 鍙傛暟
   * array (Array): 瑕佹绱㈢殑鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array 鏁扮粍鐨勫垏鐗囷紙闄や簡array鏁扮粍绗竴涓厓绱犱互澶栫殑鍏ㄩ儴鍏冪礌锛夈€�
   * 渚嬪瓙
   * tail([1, 2, 3]);
   * // => [2, 3]
   **/
  tail: function (arr) {
    var result = arr
    result.splice(0, 1)
    return result
  },
  /**
   * 鍒涘缓涓€涓暟缁勫垏鐗囷紝浠巃rray鏁扮粍鐨勮捣濮嬪厓绱犲紑濮嬫彁鍙杗涓厓绱犮€�
   * 鍙傛暟
   * array (Array): 瑕佹绱㈢殑鏁扮粍銆�
   * [n=1] (number): 瑕佹彁鍙栫殑鍏冪礌涓暟銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array 鏁扮粍鐨勫垏鐗囷紙浠庤捣濮嬪厓绱犲紑濮媙涓厓绱狅級銆�
   * 渚嬪瓙
   * take([1, 2, 3]);
   * // => [1]
   * take([1, 2, 3], 2);
   * // => [1, 2]
   * take([1, 2, 3], 5);
   * // => [1, 2, 3]
   * take([1, 2, 3], 0);
   * // => []
   **/
  take: function (arr, n) {
    if (!n && n !== 0) {
      n = 1
    }
    var result = []
    var len = arr.length
    n = n > len ? len : n
    for (var i = 0; i < n; i++) {
      result.push(arr[i])
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓暟缁勫垏鐗囷紝浠巃rray鏁扮粍鐨勬渶鍚庝竴涓厓绱犲紑濮嬫彁鍙杗涓厓绱犮€�
   * 鍙傛暟
   * array (Array): 瑕佹绱㈢殑鏁扮粍銆�
   * [n=1] (number): 瑕佹彁鍙栫殑鍏冪礌涓暟銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖 array 鏁扮粍鐨勫垏鐗囷紙浠庣粨灏惧厓绱犲紑濮媙涓厓绱狅級銆�
   * 渚嬪瓙
   * take([1, 2, 3]);
   * // => [3]
   * take([1, 2, 3], 2);
   * // => [2, 3]
   * take([1, 2, 3], 5);
   * // => [1, 2, 3]
   * take([1, 2, 3], 0);
   * // => []
   **/
  takeRight: function (arr, n) {
    if (!n && n !== 0) {
      n = 1
    }
    var result = []
    var len = arr.length
    n = n > len ? len : n
    var start = len - n
    for (var i = start; i < len; i++) {
      result.push(arr[i])
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓幓閲嶅悗鐨刟rray鏁扮粍鍓湰銆備娇鐢ㄤ簡 SameValueZero 鍋氱瓑鍊兼瘮杈冦€傚彧鏈夌涓€娆″嚭鐜扮殑鍏冪礌鎵嶄細琚繚鐣欍€�
   * 鍙傛暟
   * array (Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖鏂扮殑鍘婚噸鍚庣殑鏁扮粍銆�
   * 渚嬪瓙
   * uniq([2, 1, 2]);
   * // => [2, 1]
   **/
  uniq: function (arr) {
    var result = arr
    var len = arr.length
    for (var i = 0; i < len; i++) {
      for (var j = i + 1; j < len - i; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          j = i
        }
      }
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技浜巁.zip锛岄櫎浜嗗畠鎺ユ敹鍒嗙粍鍏冪礌鐨勬暟缁勶紝骞朵笖鍒涘缓涓€涓暟缁勶紝鍒嗙粍鍏冪礌鍒版墦鍖呭墠鐨勭粨鏋勩€�
   * 鍙傛暟
   * array (Array): 瑕佸鐞嗙殑鍒嗙粍鍏冪礌鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖閲嶇粍鍏冪礌鐨勬柊鏁扮粍銆�
   * 渚嬪瓙
   * var zipped = zip(['fred', 'barney'], [30, 40], [true, false]);
   * // => [['fred', 30, true], ['barney', 40, false]]
   * unzip(zipped);
   * // => [['fred', 'barney'], [30, 40], [true, false]]
   **/
  unzip: function (arr) {
    var result = []
    var len = arr.length
    var lenR = arr[0].length
    for (var i = 0; i < lenR; i++) {
      result[i] = []
    }
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        result[j][i] = arr[i][j]
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓粰瀹氭暟缁勫敮涓€鍊肩殑鏁扮粍锛屼娇鐢╯ymmetric difference鍋氱瓑鍊兼瘮杈冦€傝繑鍥炲€肩殑椤哄簭鍙栧喅浜庝粬浠暟缁勭殑鍑虹幇椤哄簭銆�
   * 鍙傛暟
   * [arrays] (...Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖杩囨护鍊煎悗鐨勬柊鏁扮粍銆�
   * 渚嬪瓙
   * xor([2, 1], [2, 3]);
   * // => [1, 3]
   **/
  xor: function () {

    var result = []
    var len = arguments.length
    for (var i = 0; i < len; i++) {
      result.push(arguments[i])
    }
    result = this.flatten(result)
    len = result.length
    for (var i = 0; i < len; i++) {
      for (var j = i + 1; j < len - i; j++) {
        if (result[i] === result[j]) {
          result.splice(i, 1)
          result.splice(j - 1, 1)
          i = -1
          break
        }
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓垎缁勫厓绱犵殑鏁扮粍锛屾暟缁勭殑绗竴涓厓绱犲寘鍚墍鏈夌粰瀹氭暟缁勭殑绗竴涓厓绱狅紝鏁扮粍鐨勭浜屼釜鍏冪礌鍖呭惈鎵€鏈夌粰瀹氭暟缁勭殑绗簩涓厓绱狅紝浠ユ绫绘帹銆�
   * 鍙傛暟
   * [arrays] (...Array): 瑕佸鐞嗙殑鏁扮粍銆�
   * 杩斿洖鍊�
   * (Array): 杩斿洖鍒嗙粍鍏冪礌鐨勬柊鏁扮粍銆�
   * 渚嬪瓙
   * zip(['fred', 'barney'], [30, 40], [true, false]);
   * /// => [['fred', 30, true], ['barney', 40, false]]
   **/
  zip: function () {
    var tmp = []
    var result = []
    var len = arguments.length
    for (var i = 0; i < len; i++) {
      tmp.push(arguments[i])
    }
    for (var i = 0; i < tmp[0].length; i++) {
      result[i] = []
    }
    len = tmp.length
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < tmp[i].length; j++) {
        result[j][i] = tmp[i][j]
      }
    }
    return result
  },
  /**
   * 浣跨敤 SameValueZero 绛夊€兼瘮杈冿紝杩斿洖棣栨 value 鍦ㄦ暟缁刟rray涓鎵惧埌鐨� 绱㈠紩鍊硷紝 濡傛灉 fromIndex 涓鸿礋鍊硷紝灏嗕粠鏁扮粍array灏剧绱㈠紩杩涜鍖归厤銆�
   * 鍙傛暟
   * array (Array): 闇€瑕佹煡鎵剧殑鏁扮粍銆�
   * value (*): 闇€瑕佹煡鎵剧殑鍊笺€�
   * [fromIndex=0] (number): 寮€濮嬫煡璇㈢殑浣嶇疆銆�
   * 杩斿洖鍊�
   * (number): 杩斿洖 鍊紇alue鍦ㄦ暟缁勪腑鐨勭储寮曚綅缃�, 娌℃湁鎵惧埌涓鸿繑鍥�-1銆�
   * 渚嬪瓙
   * indexOf([1, 2, 1, 2], 2);
   * // => 1
   * // Search from the `fromIndex`.
   * indexOf([1, 2, 1, 2], 2, 2);
   * // => 3
   **/
  indexOf: function (arr, n, start) {
    if (!start) {
      start = 0
    }
    var len = arr.length
    var onOff = false
    for (var i = start; i < len; i++) {
      if (arr[i] === n) {
        onOff = true
        break
      }
    }
    if (onOff) {
      return i
    } else {
      return -1
    }
  },
  /**
   * 灏� array 涓殑鎵€鏈夊厓绱犺浆鎹负鐢� separator 鍒嗛殧鐨勫瓧绗︿覆銆�
   * 鍙傛暟
   * array (Array): 瑕佽浆鎹㈢殑鏁扮粍銆�
   * [separator=','] (string): 鍒嗛殧鍏冪礌銆�
   * [fromIndex=0] (number): 寮€濮嬫煡璇㈢殑浣嶇疆銆�
   * 杩斿洖鍊�
   * (string): 杩斿洖杩炴帴瀛楃涓层€�
   * 渚嬪瓙
   * join(['a', 'b', 'c'], '~');
   * // => 'a~b~c'
   **/
  join: function (arr, n) {
    var result = arr
    result = result.join(n)
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.indexOf 锛屽尯鍒槸瀹冩槸浠庡彸鍒板乏閬嶅巻array鐨勫厓绱犮€�
   * 鍙傛暟
   * array (Array): 瑕佹悳绱㈢殑鏁扮粍銆�
   * value (*): 瑕佹悳绱㈢殑鍊笺€�
   * [fromIndex=array.length-1] (number): 寮€濮嬫悳绱㈢殑绱㈠紩鍊笺€�
   * 杩斿洖鍊�
   * (number): 杩斿洖鍖归厤鍊肩殑绱㈠紩鍊硷紝鍚﹀垯杩斿洖 -1銆�
   * 渚嬪瓙
   * lastIndexOf([1, 2, 1, 2], 2);
   * // => 3
   * // Search from the `fromIndex`.
   * lastIndexOf([1, 2, 1, 2], 2, 2);
   * // => 1
   **/
  lastIndexOf: function (arr, n, start) {
    //
    var len = arr.length
    if (!start) {
      start = 0
    }
    var onOff = false
    for (var i = len - start; i >= 0; i--) {
      if (arr[i] === n) {
        onOff = true
        break
      }
    }
    if (onOff) {
      return i
    } else {
      return -1
    }
  },
  /**
   * 鑾峰彇鏁扮粍鐨勭储寮昻澶勭殑鍏冪礌銆� 濡傛灉n涓鸿礋锛屽垯杩斿洖浠庢湯灏惧紑濮嬬殑绗琻涓厓绱犮€�
   * 鍙傛暟
   * array (Array): The array to query.
   * [n=0] (number): The index of the element to return.
   * 杩斿洖鍊�
   * (*): Returns the nth element of array.
   * 渚嬪瓙
   * var array = ['a', 'b', 'c', 'd'];
   * nth(array, 1);
   * // => 'b'
   * nth(array, -2);
   * // => 'c';
   **/
  nth: function (arr, index) {
    if (!index) {
      index = 0
    }
    index = parseInt(index)
    if (index >= 0) {
      return arr[index]
    } else {
      return arr[arr.length + index]
    }
  },
  /**
   * 浣跨敤浜屽垎妫€绱㈡潵鍐冲畾 value鍊� 搴旇鎻掑叆鍒版暟缁勪腑 灏藉彲鑳藉皬鐨勭储寮曚綅缃紝浠ヤ繚璇乤rray鐨勬帓搴忋€�
   * 鍙傛暟
   * array (Array): 瑕佹鏌ョ殑鎺掑簭鏁扮粍銆�
   * value (*): 瑕佽瘎浼扮殑鍊笺€�
   * 杩斿洖鍊�
   * (number): 杩斿洖 value鍊� 搴旇鍦ㄦ暟缁刟rray涓彃鍏ョ殑绱㈠紩浣嶇疆 index銆�
   * 渚嬪瓙
   * sortedIndex([30, 50], 40);
   * // => 1
   **/
  sortedIndex: function (arr, n) {

    var len = arr.length
    var result = []
    for (var i = 0; i < len; i++) {
      result.push(arr[i])
    }
    var index = parseInt(len / 2)
    for (; n > result[index] && n <= result[index + 1];) {
      if (n <= result[index]) {
        index = parseInt(index / 2)
      }
      if (n > result[index]) {
        index = parseInt((len + index) / 2)
      }
    }
    return index
  },
  /**
   * 杞崲瀛楃涓瞫tring涓� 椹煎嘲鍐欐硶銆�
   * 鍙傛暟
   * [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * 杩斿洖鍊�
   * (string): 杩斿洖椹煎嘲鍐欐硶鐨勫瓧绗︿覆銆�
   * 渚嬪瓙
   * camelCase('Foo Bar');
   * // => 'fooBar'
   * camelCase('--foo-bar--');
   * // => 'fooBar'
   * camelCase('__FOO_BAR__');
   * // => 'fooBar'
   **/
  camelCase: function (str) {
    var result = str
    var tmp = []
    result = result.toLowerCase()
    if (result.charCodeAt(0) >= 97 && result.charCodeAt(0) <= 122) {
      tmp.push(result.charAt(0))
    }
    for (var i = 1; i < result.length; i++) {
      if (result.charCodeAt(i) >= 97 && result.charCodeAt(i) <= 122) {
        if (result.charCodeAt(i - 1) < 97 || result.charCodeAt(i - 1) > 122) {
          tmp.push(result.charAt(i).toUpperCase())
          continue
        }
        tmp.push(result.charAt(i))
      }
    }
    tmp[0] = tmp[0].toLowerCase()
    result = tmp.join("")
    return result
  },
  /**
   * 杞崲瀛楃涓瞫tring棣栧瓧姣嶄负澶у啓锛屽墿涓嬩负灏忓啓銆�
   * 鍙傛暟
   * [string=''] (string): 瑕佸ぇ鍐欏紑澶寸殑瀛楃涓层€�
   * 杩斿洖鍊�
   * (string): 杩斿洖澶у啓寮€澶寸殑瀛楃涓层€�
   * 渚嬪瓙
   * capitalize('FRED');
   * // => 'Fred'
   **/
  capitalize: function (str) {
    tmp = []
    result = str.toLowerCase()
    tmp.push(result.charAt(0).toUpperCase())
    tmp.push(result.substring(1))
    result = tmp.join("")
    return result
  },
  /**
   * 杞崲瀛楃涓瞫tring涓媺涓佽-1琛ュ厖瀛楁瘝 鍜� 鎷変竵璇墿灞曞瓧姣�-A 涓哄熀鏈殑鎷変竵瀛楁瘝锛屽苟涓斿幓闄ょ粍鍚堝彉闊虫爣璁般€�
   * 鍙傛暟
   * [string=''] (string): 瑕佸鐞嗙殑瀛楃涓层€�
   * 杩斿洖鍊�
   * (string): 杩斿洖澶勭悊鍚庣殑瀛楃涓层€�
   * 渚嬪瓙
   * deburr('d茅j脿 vu');
   * // => 'deja vu'
   **/
  deburr: function (str) {

    var tmp = str.split("")
    for (var i = 0; i < tmp.length; i++) {
      if (192 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 221) {
        tmp[i] = deburrTrans(tmp[i]).toUpperCase()
      }
      if (224 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 255) {
        tmp[i] = deburrTrans(tmp[i])
      }
    }
    var result = tmp.join("")
    return result

    function deburrTrans(n) {
      var result = n.toLowerCase()
      var codeN = result.charCodeAt(0)
      if ((224 <= codeN && codeN <= 229)) {
        result = "a"
      }
      if ((232 <= codeN && codeN <= 235)) {
        result = "e"
      }
      if ((236 <= codeN && codeN <= 239)) {
        result = "i"
      }
      if ((242 <= codeN && codeN <= 245)) {
        result = "o"
      }
      if ((249 <= codeN && codeN <= 252)) {
        result = "u"
      }
      return result
    }
  },
  /**
   * 妫€鏌ュ瓧绗︿覆string鏄惁浠ョ粰瀹氱殑target瀛楃涓茬粨灏俱€�
   * 鍙傛暟
   * [string=''] (string): 瑕佹绱㈢殑瀛楃涓层€�
   * [target] (string): 瑕佹绱㈠瓧绗︺€�
   * [position=string.length] (number): 妫€绱㈢殑浣嶇疆銆�
   * 杩斿洖鍊�
   * (boolean): 濡傛灉瀛楃涓瞫tring浠arget瀛楃涓茬粨灏撅紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   * 渚嬪瓙
   * endsWith('abc', 'c');
   * // => true
   * endsWith('abc', 'b');
   * // => false
   * endsWith('abc', 'b', 2);
   * // => true
   **/
  endsWith: function (str, n, index) {
    if (!index && index !== 0) {
      index = 1
    }
    return n === str.charAt(str.length - index) ? true : false
  },
  /**
   * 杞崲瀛楃涓瞫tring涓� kebab case.
   * 鍙傛暟
   * [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * 杩斿洖鍊�
   * (string): 杩斿洖杞崲鍚庣殑瀛楃涓层€�
   * 渚嬪瓙
   * kebabCase('Foo Bar');
   * // => 'foo-bar'
   * kebabCase('fooBar');
   * // => 'foo-bar'
   * kebabCase('__FOO_BAR__');
   * // => 'foo-bar'
   **/
  kebabCase: function (str) {
    var result = str
    var tmp = result.split("")
    var reArr = []
    for (var i = 0; i < tmp.length - 1; i++) {
      if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
        tmp.splice(i, 1)
        i--
      }
    }
    for (var i = 0; i < tmp.length; i++) {
      if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
        tmp.splice(i, 1)
        i--
      } else {
        break
      }
    }
    for (var i = 1; i < tmp.length; i++) {
      if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
        tmp.splice(i, 0, "-")
        i++
      }
    }
    for (var i = 0; i < tmp.length; i++) {
      if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 45))) {
        tmp.splice(i, 1)
      }
    }
    result = tmp.join("").toLowerCase()
    return result
  },
  /**
   * 杞崲瀛楃涓瞫tring浠ョ┖鏍煎垎寮€鍗曡瘝锛屽苟杞崲涓哄皬鍐欍€�
   * 鍙傛暟
   * [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * 杩斿洖鍊�
   * (string): 杩斿洖杞崲鍚庣殑瀛楃涓层€�
   * 渚嬪瓙
   * lowerCase('--Foo-Bar--');
   * // => 'foo bar'
   * lowerCase('fooBar');
   * // => 'foo bar'
   * kebabCase('__FOO_BAR__');
   * // => 'foo bar'
   **/
  lowerCase: function (str) {
    var result = str
    var tmp = result.split("")
    var reArr = []
    for (var i = 0; i < tmp.length - 1; i++) {
      if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
        tmp.splice(i, 1)
        i--
      }
    }
    for (var i = 0; i < tmp.length; i++) {
      if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
        tmp.splice(i, 1)
        i--
      } else {
        break
      }
    }
    for (var i = 1; i < tmp.length; i++) {
      if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
        tmp.splice(i, 0, " ")
        i++
      }
    }
    for (var i = 0; i < tmp.length; i++) {
      if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 32))) {
        tmp.splice(i, 1)
      }
    }
    result = tmp.join("").toLowerCase()
    return result
  },
  /**
   * 杞崲瀛楃涓瞫tring鐨勯瀛楁瘝涓哄皬鍐欍€�
   * 鍙傛暟
   * [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * 杩斿洖鍊�
   * (string): 杩斿洖杞崲鍚庣殑瀛楃涓层€�
   * 渚嬪瓙
   * lowerFirst('Fred');
   * // => 'fred'
   * lowerFirst('FRED');
   * // => 'fRED'
   **/
  lowerFirst: function (str) {
    var tmp = str.split("")
    tmp.splice(0, 1, str.charAt(0).toLowerCase())
    var result = tmp.join("")
    return result
  },
  /**
   * 濡傛灉string瀛楃涓查暱搴﹀皬浜� length 鍒欎粠宸︿晶鍜屽彸渚у～鍏呭瓧绗︺€� 濡傛灉娌℃硶骞冲潎鍒嗛厤锛屽垯鎴柇瓒呭嚭鐨勯暱搴︺€�
   * 鍙傛暟
   * [string=''] (string): 瑕佸～鍏呯殑瀛楃涓层€�
   * [length=0] (number): 濉厖鐨勯暱搴︺€�
   * [chars=' '] (string): 濉厖瀛楃銆�
   * 杩斿洖鍊�
   * (string): 杩斿洖濉厖鍚庣殑瀛楃涓层€�
   * 渚嬪瓙
   * pad('abc', 8);
   * // => '  abc   '
   * pad('abc', 8, '_-');
   * // => '_-abc_-_'
   * pad('abc', 3);
   * // => 'abc'
   **/
  pad: function (str, len, sign) {
    var result = str
    if (!sign && sign !== 0) {
      sign = " "
    }
    var tmp = [result]
    if (result.length < len) {
      for (var i = 0, j = 0; i < len - result.length; i = i + sign.length, j++) {
        if (j % 2 !== 0) {
          tmp.unshift(sign)
        } else {
          tmp.push(sign)
        }
      }
      result = tmp.join("").substr(0, len)
      return result

    } else {
      return result
    }
  },
  /**
   * 濡傛灉string瀛楃涓查暱搴﹀皬浜� length 鍒欏湪鍙充晶濉厖瀛楃銆� 濡傛灉瓒呭嚭length闀垮害鍒欐埅鏂秴鍑虹殑閮ㄥ垎銆�
   * 鍙傛暟
   * [string=''] (string): 瑕佸～鍏呯殑瀛楃涓层€�
   * [length=0] (number): 濉厖鐨勯暱搴︺€�
   * [chars=' '] (string): 濉厖瀛楃銆�
   * 杩斿洖鍊�
   * (string): 杩斿洖濉厖鍚庣殑瀛楃涓层€�
   * 渚嬪瓙
   * padEnd('abc', 6);
   * // => 'abc   '
   * padEnd('abc', 6, '_-');
   * // => 'abc_-_'
   * padEnd('abc', 3);
   * // => 'abc'
   **/
  padEnd: function (str, len, sign) {
    var result = str
    if (!sign && sign !== 0) {
      sign = " "
    }
    var tmp = [result]
    if (result.length < len) {
      for (var i = 0; i < len - result.length; i = i + sign.length) {
        tmp.push(sign)
      }
      result = tmp.join("").substr(0, len)
      return result
    } else {
      return result
    }
  },
  /**
   * 濡傛灉string瀛楃涓查暱搴﹀皬浜� length 鍒欏湪宸︿晶濉厖瀛楃銆� 濡傛灉瓒呭嚭length闀垮害鍒欐埅鏂秴鍑虹殑閮ㄥ垎銆�
   * 鍙傛暟
   * [string=''] (string): 瑕佸～鍏呯殑瀛楃涓层€�
   * [length=0] (number): 濉厖鐨勯暱搴︺€�
   * [chars=' '] (string): 濉厖瀛楃銆�
   * 杩斿洖鍊�
   * (string): 杩斿洖濉厖鍚庣殑瀛楃涓层€�
   * 渚嬪瓙
   * padStart('abc', 6);
   * // => '   abc'
   * padStart('abc', 6, '_-');
   * // => '_-_abc'
   * padStart('abc', 3);
   * // => 'abc'
   **/
  padStart: function (str, len, sign) {
    var result = str
    if (!sign && sign !== 0) {
      sign = " "
    }
    var tmpS = sign.split("").reverse()
    sign = tmpS.join("")
    var tmp = [result]
    if (result.length < len) {
      for (var i = 0; i < len - result.length; i = i + sign.length) {
        tmp.unshift(sign)
      }
      result = tmp.join("")
      result = result.substring(result.length - len, result.length)
      return result
    } else {
      return result
    }
  },
  /**
   * 閲嶅 N 娆＄粰瀹氬瓧绗︿覆銆�
   * 鍙傛暟
   * [string=''] (string): 瑕侀噸澶嶇殑瀛楃涓层€�
   * [n=1] (number): 閲嶅鐨勬鏁般€�
   * 杩斿洖鍊�
   * (string): 杩斿洖閲嶅鐨勫瓧绗︿覆銆�
   * 渚嬪瓙
   * repeat('*', 3);
   * // => '***'
   * repeat('abc', 2);
   * // => 'abcabc'
   * repeat('abc', 0);
   * // => ''
   **/
  repeat: function (str, n) {
    var result = ''
    for (var i = 0; i < n; i++) {
      result = result + str
    }
    return result
  },
  /**
   * 杞崲瀛楃涓瞫tring涓� snake case..
   * 鍙傛暟
   * [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * 杩斿洖鍊�
   * (string): 杩斿洖杞崲鍚庣殑瀛楃涓层€�
   * 渚嬪瓙
   * snakeCase('Foo Bar');
   * // => 'foo_bar'
   * snakeCase('fooBar');
   * // => 'foo_bar'
   * snakeCase('--FOO-BAR--');
   * // => 'foo_bar'
   **/
  snakeCase: function (str) {
    var result = str
    var tmp = result.split("")
    var reArr = []
    for (var i = 0; i < tmp.length - 1; i++) {
      if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
        tmp.splice(i, 1)
        i--
      }
    }
    for (var i = 0; i < tmp.length; i++) {
      if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
        tmp.splice(i, 1)
        i--
      } else {
        break
      }
    }
    for (var i = 1; i < tmp.length; i++) {
      if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
        tmp.splice(i, 0, "_")
        i++
      }
    }
    for (var i = 0; i < tmp.length; i++) {
      if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 95))) {
        tmp.splice(i, 1)
      }
    }
    result = tmp.join("").toLowerCase()
    return result
  },
  /**
   * 鍒涘缓涓€涓暟缁勶紝 value锛堝€硷級 鏄� iteratee锛堣凯浠ｅ嚱鏁帮級閬嶅巻 collection锛堥泦鍚堬級涓殑姣忎釜鍏冪礌鍚庤繑鍥炵殑缁撴灉銆� iteratee锛堣凯浠ｅ嚱鏁帮級璋冪敤3涓弬鏁帮細(value, index|key, collection).
   * 鍙傛暟
   * collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * [iteratee=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖鏂扮殑鏄犲皠鍚庢暟缁勩€�
   * 渚嬪瓙
   **/
  map: function (colle, pred) {
    //debugger
    var result = []
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    for (var key in colle) {
      result.push(fn(colle[key], key, colle))
    }
    return result
  },
  /**
   * 閬嶅巻 collection锛堥泦鍚堬級鍏冪礌锛岃繑鍥� predicate锛堟柇瑷€鍑芥暟锛夎繑鍥炵湡鍊� 鐨勬墍鏈夊厓绱犵殑鏁扮粍銆� predicate锛堟柇瑷€鍑芥暟锛夎皟鐢ㄤ笁涓弬鏁帮細(value, index|key, collection)銆�
   * 鍙傛暟
   * collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖涓€涓柊鐨勮繃婊ゅ悗鐨勬暟缁勩€�
   * 渚嬪瓙
   **/
  filter: function (colle, pred) {
    //debugger
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    var result = []
    for (var i = 0; i < colle.length; i++) {
      if (fn(colle[i])) {
        result.push(colle[i])
      }
    }
    return result
  },
  /**
   * 閬嶅巻 collection锛堥泦鍚堬級鍏冪礌锛岃繑鍥� predicate锛堟柇瑷€鍑芥暟锛夎繑鍥炵湡鍊� 鐨勬墍鏈夊厓绱犵殑鏁扮粍銆� predicate锛堟柇瑷€鍑芥暟锛夎皟鐢ㄤ笁涓弬鏁帮細(value, index|key, collection)銆�
   * 鍙傛暟
   * collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * 杩斿洖鍊�
   * (Array): 杩斿洖涓€涓柊鐨勮繃婊ゅ悗鐨勬暟缁勩€�
   * 渚嬪瓙
   **/
  partition: function (arr, fn) {
    var result = [
      [],
      []
    ]
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        result[0].push(arr[i])
      } else {
        result[1].push(arr[i])
      }
    }
    return result
  },
  /**
   * 鍘嬬缉 collection锛堥泦鍚堬級涓轰竴涓€硷紝閫氳繃 iteratee锛堣凯浠ｅ嚱鏁帮級閬嶅巻 collection锛堥泦鍚堬級涓殑姣忎釜鍏冪礌锛屾瘡娆¤繑鍥炵殑鍊间細浣滀负涓嬩竴娆¤凯浠ｄ娇鐢�(鎰氫汉鐮佸ご娉細浣滀负iteratee锛堣凯浠ｅ嚱鏁帮級鐨勭涓€涓弬鏁颁娇鐢�)銆� 濡傛灉娌℃湁鎻愪緵 accumulator锛屽垯 collection锛堥泦鍚堬級涓殑绗竴涓厓绱犱綔涓哄垵濮嬪€笺€�(鎰氫汉鐮佸ご娉細accumulator鍙傛暟鍦ㄧ涓€娆¤凯浠ｇ殑鏃跺€欎綔涓篿teratee锛堣凯浠ｅ嚱鏁帮級绗竴涓弬鏁颁娇鐢ㄣ€�) iteratee 璋冪敤4涓弬鏁帮細(accumulator, value, index|key, collection).
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @param  [accumulator] (*): 鍒濆鍊笺€�
   * @return (*): 杩斿洖绱姞鍚庣殑鍊笺€�
   */
  reduce: function (colle, iter, acc) {
    var theKey = Object.keys(colle)
    var start = 1
    if (acc === undefined) {
      acc = colle[theKey[1]]
      start = 2
    }
    acc = iter(acc, colle[theKey[0]], theKey[0], colle)
    for (var i = start; i < theKey.length; i++) {
      acc = iter(acc, colle[theKey[i]], theKey[i], colle)
    }
    return acc
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.reduce 锛岄櫎浜嗗畠鏄粠鍙冲埌宸﹂亶鍘哻ollection锛堥泦鍚堬級涓殑鍏冪礌鐨勩€�
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @param  [accumulator] (*): 鍒濆鍊笺€�
   * @return (*): 杩斿洖绱姞鍚庣殑鍊笺€�
   */
  reduceRight: function (colle, iter, acc) {
    var theKey = Object.keys(colle)
    var start = theKey.length - 2
    if (acc === undefined) {
      acc = colle[theKey[theKey.length - 2]]
      start = theKey.length - 3
    }
    acc = iter(acc, colle[theKey[theKey.length - 1]], theKey[theKey.length - 1], colle)
    for (var i = start; i >= 0; i--) {
      acc = iter(acc, colle[theKey[i]], theKey[i], colle)
    }
    return acc
  },
  /**
   * 鍒涘缓涓€涓猳bject閿€煎€掔疆鍚庣殑瀵硅薄銆� 濡傛灉 object 鏈夐噸澶嶇殑鍊硷紝鍚庨潰鐨勫€间細瑕嗙洊鍓嶉潰鐨勫€笺€�
   * 鍙傛暟
   * object (Object): 瑕侀敭鍊煎€掔疆瀵硅薄銆�
   * 杩斿洖鍊�
   * (Object): 杩斿洖鏂扮殑閿€煎€掔疆鍚庣殑瀵硅薄銆�
   * 渚嬪瓙
   * var object = { 'a': 1, 'b': 2, 'c': 1 };
   * invert(object);
   * // => { '1': 'c', '2': 'b' }
   */
  invert: function (obj) {
    var result = {}
    for (keys in obj) {
      result[obj[keys]] = keys
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓猳bject閿€煎€掔疆鍚庣殑瀵硅薄銆� 濡傛灉 object 鏈夐噸澶嶇殑鍊硷紝鏀惧叆鏁扮粍銆�
   * 鍙傛暟
   * object (Object): 瑕侀敭鍊煎€掔疆瀵硅薄銆�
   * 杩斿洖鍊�
   * (Object): 杩斿洖鏂扮殑閿€煎€掔疆鍚庣殑瀵硅薄銆�
   * 渚嬪瓙
   * var object = { 'a': 1, 'b': 2, 'c': 1 };
   * invert(object);
   * // => { '1': 'c', '2': 'b' }
   */
  invert2: function (obj) {
    var result = {}
    for (keys in obj) {
      if (!result[obj[keys]]) {
        result[obj[keys]] = keys
      } else if (Array.isArray(result[obj[keys]])) {
        result[obj[keys]].push(keys)
      } else {
        result[obj[keys]] = [result[obj[keys]]]
        result[obj[keys]].push(keys)

      }

    }
    return result
  },
  /**
   * 鍒涘缓涓€涓� object 鐨勮嚜韬彲鏋氫妇灞炴€у悕涓烘暟缁勩€�
   * 鍙傛暟
   * object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * 杩斿洖
   * (Array): 杩斿洖鍖呭惈灞炴€у悕鐨勬暟缁勩€�
   * function Foo() {this.a = 1;this.b = 2;}
   * Foo.prototype.c = 3;
   * keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   * keys('hi');
   * // => ['0', '1']
   * activate-power-mode
   */
  keys: function (obj) {
    var result = []
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(key)
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓� object 鑷韩 鍜� 缁ф壙鐨勫彲鏋氫妇灞炴€у悕涓烘暟缁勩€�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @return (Array): 杩斿洖鍖呭惈灞炴€у悕鐨勬暟缁勩€�
   */
  keysIn: function (obj) {
    var result = []
    for (key in obj) {
      result.push(key)
    }
    return result
  },
  /**
   * 浣跨敤 iteratee 閬嶅巻瀵硅薄鐨勮嚜韬拰缁ф壙鐨勫彲鏋氫妇灞炴€с€� iteratee 浼氫紶鍏�3涓弬鏁帮細(value, key, object)銆� 濡傛灉杩斿洖 false锛宨teratee 浼氭彁鍓嶉€€鍑洪亶鍘嗐€�
   * 鍙傛暟
   * object (Object): 瑕侀亶鍘嗙殑瀵硅薄銆�
   * [iteratee=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * 杩斿洖
   * (Object): 杩斿洖 object銆�
   * function Foo() {this.a = 1;this.b = 2;}
   * Foo.prototype.c = 3;
   * forIn(new Foo, function(value, key) {console.log(key);});
   * // => Logs 'a', 'b', then 'c' (鏃犳硶淇濊瘉閬嶅巻鐨勯『搴�)銆�
   */
  forIn: function (obj, fn) {
    for (keys in obj) {
      if (obj[keys]) {
        fn(obj[keys], keys, obj)
      } else {
        break
      }
    }
    return obj
  },
  /**
   * 鍙嶅悜鐗� _.mapValues銆� 杩欎釜鏂规硶鍒涘缓涓€涓璞★紝瀵硅薄鐨勫€间笌object鐩稿悓锛屽苟涓� key 鏄€氳繃 iteratee 杩愯 object 涓瘡涓嚜韬彲鏋氫妇灞炴€у悕瀛楃涓� 浜х敓鐨勩€俰teratee璋冪敤涓変釜鍙傛暟锛� (value, key, object)銆�
   * @param  object (Object): 瑕侀亶鍘嗙殑瀵硅薄銆�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @return (Object): 杩斿洖鏄犲皠鍚庣殑鏂板璞°€�
   * example mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {return key + value;});
   * // => { 'a1': 1, 'b2': 2 }
   */
  mapKeys: function (obj, fn) {
    var result = {}
    for (keys in obj) {
      result[fn(obj[keys], keys, obj)] = obj[keys]
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓璞★紝杩欎釜瀵硅薄鐨刱ey涓巓bject瀵硅薄鐩稿悓锛屽€兼槸閫氳繃 iteratee 杩愯 object 涓瘡涓嚜韬彲鏋氫妇灞炴€у悕瀛楃涓蹭骇鐢熺殑銆� iteratee璋冪敤涓変釜鍙傛暟锛� (value, key, object)銆�
   * @param  object (Object): 瑕侀亶鍘嗙殑瀵硅薄銆�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @return (Object): 杩斿洖鏄犲皠鍚庣殑鏂板璞°€�
   * example var users = {'fred':{ 'user': 'fred',    'age': 40 },'pebbles': { 'user': 'pebbles', 'age': 1 }};
   * mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   * mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  mapValues: function (obj, fn) {
    var result = {}
    if (typeof fn == "string") {
      for (keys in obj) {
        result[keys] = obj[keys][fn]
      }
    } else {
      for (keys in obj) {
        result[keys] = fn(obj[keys], keys, obj)
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓粠 object 涓€変腑鐨勫睘鎬х殑瀵硅薄銆�
   * @param  object (Object): 鏉ユ簮瀵硅薄銆�
   * @param  [props] (...(string|string[])): 瑕佽蹇界暐鐨勫睘鎬с€�
   * @return (Object): 杩斿洖鏂板璞°€�
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   * pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  pick: function (obj, arr) {
    var result = {}
    for (var i = 0; i < arr.length; i++) {
      for (keys in obj) {
        if (arr[i] == keys) {
          result[keys] = obj[keys]
        }
      }
    }
    return result
  },
  /**
   * 鍒涘缓 object 鑷韩鍙灇涓惧睘鎬х殑鍊间负鏁扮粍銆�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @return (Array): 杩斿洖瀵硅薄灞炴€х殑鍊肩殑鏁扮粍銆�
   * example function Foo() {this.a = 1;this.b = 2;}
   * Foo.prototype.c = 3;
   * values(new Foo);
   * // => [1, 2]
   * values('hi');
   * // => ['h', 'i']
   */
  values: function (obj) {
    var result = []
    for (keys in obj) {
      if (obj.hasOwnProperty(keys)) {
        result.push(obj[keys])
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓暟缁勶紝鍊兼潵鑷� object 鐨刾aths璺緞鐩稿簲鐨勫€笺€�
   * @param  object (Object): 瑕佽凯浠ｇ殑瀵硅薄銆�
   * @param  [paths] (...(string|string[])): 瑕佽幏鍙栫殑瀵硅薄鐨勫厓绱犺矾寰勶紝鍗曠嫭鎸囧畾鎴栬€呮寚瀹氬湪鏁扮粍涓€�
   * @return (Array): 杩斿洖閫変腑鍊肩殑鏁扮粍銆�
   * example var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
   * at(object, ['a[0].b.c', 'a[1]']);
   * // => [3, 4]
   */
  at: function (obj, arr) {
    debugger
    var result = []
    for (var i = 0; i < arr.length; i++) {
      result.push(eval("obj." + arr[i]))
    }
    return result
  },
  /**
   * 鍒嗛厤鏉ユ簮瀵硅薄鐨勫彲鏋氫妇灞炴€у埌鐩爣瀵硅薄涓娿€� 鏉ユ簮瀵硅薄鐨勫簲鐢ㄨ鍒欐槸浠庡乏鍒板彸锛岄殢鍚庣殑涓嬩竴涓璞＄殑灞炴€т細瑕嗙洊涓婁竴涓璞＄殑灞炴€с€�
   * @param  object (Object): 鐩爣瀵硅薄銆�
   * (Object): 杩斿洖 object.
   * example
   * function Foo() {this.a = 1;}
   * function Bar() {this.c = 3;}
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   * assign({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'c': 3 }
   */
  assign: function (obj) {
    var result = {}
    for (var i = 0; i < arguments.length; i++) {
      for (keys in arguments[i]) {
        result[keys] = arguments[i][keys]
      }
    }
    return result
  },
  /**
   * 璇ユ柟娉曠被浼糭.assign锛� 闄や簡瀹冮€掑綊鍚堝苟 sources 鏉ユ簮瀵硅薄鑷韩鍜岀户鎵跨殑鍙灇涓惧睘鎬у埌 object 鐩爣瀵硅薄銆傚鏋滅洰鏍囧€煎瓨鍦紝琚В鏋愪负undefined鐨剆ources 鏉ユ簮瀵硅薄灞炴€у皢琚烦杩囥€傛暟缁勫拰鏅€氬璞′細閫掑綊鍚堝苟锛屽叾浠栧璞″拰鍊间細琚洿鎺ュ垎閰嶈鐩栥€傛簮瀵硅薄浠庝粠宸﹀埌鍙冲垎閰嶃€傚悗缁殑鏉ユ簮瀵硅薄灞炴€т細瑕嗙洊涔嬪墠鍒嗛厤鐨勫睘鎬с€�
   * @param  object (Object): 鐩爣瀵硅薄銆�
   * @param [sources] (...Object): 鏉ユ簮瀵硅薄銆�
   * @return (Object): 杩斿洖 object.
   * example var object = {'a': [{ 'b': 2 }, { 'd': 4 }]};
   * var other = {'a': [{ 'c': 3 }, { 'e': 5 }]};
   * merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  merge: function (obj) {
    for (var i = 1; i < arguments.length; i++) {
      for (keys in arguments[i]) { //arguments[1] == other
        if (!obj[keys]) { // obj[a]
          obj[keys] = arguments[i][keys]
        } else {
          for (var j = 0; j < arguments[i][keys].length; j++) {
            if (typeof arguments[i][keys][j] == "object" && arguments[i][keys][j] !== null) {
              for (key in arguments[i][keys][j]) {
                obj[keys][j][key] = arguments[i][keys][j][key]
              }
            } else {
              obj[keys][j] = arguments[i][keys][j]
            }
          }
        }
      }

    }
    return obj
  },
  /**
   * 璇ユ柟娉曠被浼糭.merge锛岄櫎浜嗗畠鎺ュ彈涓€涓� customizer锛岃皟鐢ㄤ互浜х敓鐩爣瀵硅薄鍜屾潵婧愬璞″睘鎬х殑鍚堝苟鍊�
   * @param  object (Object): 鐩爣瀵硅薄銆�
   * @param  [sources] (...Object): 鏉ユ簮瀵硅薄銆�
   * @param  customizer (Function): 杩欎釜鍑芥暟瀹氬埗鍚堝苟鍊笺€�
   * @return (Object): 杩斿洖 object銆�
   */
  mergeWith: function (obj) {
    if (arguments[arguments.length - 1] === undefined) {
      var fn = function (objV, objS) {
        obj[keys][j][key] = arguments[i][keys][j][key]
      }
    } else {
      var fn = arguments[arguments.length - 1]
    }
    for (var i = 1; i < arguments.length - 1; i++) {
      for (keys in arguments[i]) { //arguments[1] == other
        if (!obj[keys]) { // obj[a]
          obj[keys] = arguments[i][keys]
        } else {
          obj[keys] = fn(obj[keys], arguments[i][keys])
        }
      }

    }
    return obj
  },
  /**
   * 鍒涘缓涓€涓皟鐢╢unc鐨勫嚱鏁帮紝閫氳繃this缁戝畾鍜屽垱寤哄嚱鏁扮殑鍙傛暟璋冪敤func锛岃皟鐢ㄦ鏁颁笉瓒呰繃 n 娆°€� 涔嬪悗鍐嶈皟鐢ㄨ繖涓嚱鏁帮紝灏嗚繑鍥炰竴娆℃渶鍚庤皟鐢╢unc鐨勭粨鏋溿€�
   * @param  n (number): 瓒呰繃澶氬皯娆′笉鍐嶈皟鐢╢unc
   * @param  func (Function): 闄愬埗鎵ц鐨勫嚱鏁般€�
   * @return (Function): 杩斿洖鏂扮殑闄愬畾鍑芥暟銆�
   */
  before: function (n, fn) {
    var count
    var theLastResult
    return function (arg) {
      count++
      if (count < n) {
        theLastResult = fn(arg)
        return theLastResult
      } else {
        return theLastResult
      }
    }
  },
  /**
   * _.before鐨勫弽鍚戝嚱鏁�;姝ゆ柟娉曞垱寤轰竴涓嚱鏁帮紝褰撲粬琚皟鐢╪鎴栨洿澶氭涔嬪悗灏嗛┈涓婅Е鍙慺unc 銆�
   * @param  n (number): func 鏂规硶搴旇鍦ㄨ皟鐢ㄥ灏戞鍚庢墠鎵ц銆�
   * @param  func (Function): 鐢ㄦ潵闄愬畾鐨勫嚱鏁般€�
   * @return (Function): 杩斿洖鏂扮殑闄愬畾鍑芥暟銆�
   */
  after: function (n, fn) {
    var count = 0
    return function (arg) {
      count++
      if (count >= n) {
        return fn(arg)
      }
    }
  },
  /**
   * 鎵ц娣辨瘮杈冩潵纭畾涓よ€呯殑鍊兼槸鍚︾浉绛夈€�
   * @param  value (*): 鐢ㄦ潵姣旇緝鐨勫€笺€�
   * @param  other (*): 鍙︿竴涓敤鏉ユ瘮杈冪殑鍊笺€�
   * @return (boolean): 濡傛灉 涓や釜鍊煎畬鍏ㄧ浉鍚岋紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   * example
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   * isEqual(object, other);
   * // => true
   */
  isEqual: function (value1, value2) {
    //debugger
    if (value1 !== value1 && value2 !== value2) {
      return true
    }
    if (value1 === value2) {
      return true
    } else if (typeof value1 !== 'object' || typeof value2 !== 'object') {
      return false
    } else if (Array.isArray(value1) !== Array.isArray(value2)) {
      return false
    } else {
      var p
      for (p in value1) {
        if (typeof value1[p] !== 'undefined' && typeof value2[p] === 'undefined') {
          return false;
        }
        if (!TianXiaoBo.isEqual(value1[p], value2[p])) {
          return false;
        }

      }
      for (p in value2) {
        if (typeof value2[p] !== 'undefined' && typeof value1[p] === 'undefined') {
          return false;
        }
      }
      return true;

    }
  },
  /**
   * 鍒涘缓涓€涓繁姣旇緝鐨勬柟娉曟潵姣旇緝缁欏畾鐨勫璞″拰 source 瀵硅薄銆� 濡傛灉缁欏畾鐨勫璞℃嫢鏈夌浉鍚岀殑灞炴€у€艰繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   * @param  source (Object): 瑕佸尮閰嶅睘鎬у€肩殑婧愬璞°€�
   * @return (Function): 杩斿洖鏂扮殑鍑芥暟銆�
   */
  matches: function (source) {
    var self = this
    return function (obj) {
      for (key in source) {
        if (!self.isEqual(source[key], obj[key])) {
          return false
        }
      }
      return true
    }
  },
  /**
   * 鍒涘缓涓€涓繁姣旇緝鐨勬柟娉曟潵姣旇緝缁欏畾瀵硅薄鐨� path 鐨勫€兼槸鍚︽槸 srcValue 銆� 濡傛灉鏄繑鍥� true 锛屽惁鍒欒繑鍥� false 銆�
   * @param  path (Array|string): 缁欏畾瀵硅薄鐨勫睘鎬ц矾寰勫悕銆�
   * srcValue (*): 瑕佸尮閰嶇殑鍊笺€�
   * @return (Function): 杩斿洖鏂扮殑鍑芥暟銆�
   */
  matchesProperty: function (path, value) {
    return function (obj) {
      if (TianXiaoBo.isEqual(eval('obj.' + path), value)) {
        return true
      } else {
        return false
      }
    }
  },
  /**
   * 鍒涘缓涓€涓繑鍥炵粰瀹氬璞＄殑 path 鐨勫€肩殑鍑芥暟銆�
   * @param  path (Array|string): 瑕佸緱鍒板€肩殑灞炴€ц矾寰勩€�
   * @return path (Array|string): 瑕佸緱鍒板€肩殑灞炴€ц矾寰勩€�
   */
  property: function (path) {
    if (Array.isArray(path)) {
      path.join(".")
    }
    return function (obj) {
      return eval('obj.' + path)
    }
  },
  /**
   * 鍒涘缓涓€涓垏鐗囨暟缁勶紝鍘婚櫎array涓粠 predicate 杩斿洖鍋囧€煎紑濮嬪埌灏鹃儴鐨勯儴鍒�
   * @param  array (Array): 瑕佹煡璇㈢殑鏁扮粍銆�
   * @param  [predicate=_.identity] (Function): 杩欎釜鍑芥暟浼氬湪姣忎竴娆¤凯浠ｈ皟鐢ㄣ€�
   * @return (Array): 杩斿洖array鍓╀綑鍒囩墖銆�
   */
  dropRightWhile: function (arr, ident) {
    var newArray = Array.prototype.slice.call(arr)
    var self = this
    if (this.isObject(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj, ident)
      }
    }
    if (this.isArray(ident)) {

      var fn = function (obj) {
        return self.isEqual(obj[ident[0]], ident[1])
      }
    }
    if (this.isString(ident)) {
      var fn = function (obj) {
        return !(ident in obj)
      }
    }
    if (this.isFunction(ident)) {
      var fn = ident
    }
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        break
      }
    }
    newArray.length = i
    return newArray
  },
  /**
   * 鍒涘缓涓€涓垏鐗囨暟缁勶紝鍘婚櫎array涓粠璧风偣寮€濮嬪埌 predicate 杩斿洖鍋囧€肩粨鏉熼儴鍒嗐€�
   * @param  array (Array): 瑕佹煡璇㈢殑鏁扮粍銆�
   * @param  [predicate=_.identity] (Function): 杩欎釜鍑芥暟浼氬湪姣忎竴娆¤凯浠ｈ皟鐢ㄣ€�
   * @return (Array): 杩斿洖array鍓╀綑鍒囩墖銆�
   */
  dropWhile: function (arr, ident) {
    var newArray = Array.prototype.slice.call(arr)
    var self = this
    if (this.isObject(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj, ident)
      }
    }
    if (this.isArray(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj[ident[0]], ident[1])
      }
    }
    if (this.isString(ident)) {
      var fn = function (obj) {
        return !(ident in obj)
      }
    }
    if (this.isFunction(ident)) {
      var fn = ident
    }
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        newArray.shift()
      } else {
        return newArray
      }
    }
  },
  /**
   * 妫€鏌� value 鏄惁鏄竴涓被 arguments 瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉value鏄竴涓� arguments 瀵硅薄 杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isArguments: function (arg) {
    if (arg.callee) {
      return true
    } else {
      return false
    }
  },
  /**
   * 妫€鏌� value 鏄惁鏄� Array 绫诲璞°€�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉value鏄竴涓暟缁勮繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isArray: function (arr) {
    if (arr instanceof Array) {
      return true
    } else {
      return false
    }
  },
  /**
   * 妫€鏌� value 鏄惁鏄師濮� boolean 绫诲瀷鎴栬€呭璞°€�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓竷灏斿€硷紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isBoolean: function (value) {

    return typeof value === 'boolean'
  },
  /**
   * 妫€鏌� value 鏄惁鏄� Date 瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓棩鏈熷璞★紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isDate: function (value) {

    return value instanceof Date
  },
  /**
   * 妫€鏌� value 鏄惁鏄師濮嬫湁闄愭暟鍊笺€�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓湁闄愭暟鍊硷紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isFinite: function (value) {
    if (typeof value == 'number') {
      if (value === 0) {
        return true
      } else if (value + value == value) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  },
  /**
   * 妫€鏌� value 鏄惁鏄� Function 瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊�
   * @return (boolean): 濡傛灉 value 鏄竴涓嚱鏁帮紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isFunction: function (value) {

    return typeof value === 'function'
  },
  /**
   * 妫€鏌� value 鏄惁鏄� NaN銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓� NaN锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isNaN: function (value) {
    if (value !== value) {
      return true
    } else {
      if (typeof value == 'object') {
        if (value.valueOf() !== value.valueOf()) {
          return true
        }
      } else {
        return false
      }
    }
  },
  /**
   * 妫€鏌� valuealue 鏄惁鏄� null銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓簄ull锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isNull: function (value) {
    if (value == undefined && value !== undefined) {
      return true
    } else {
      return false
    }
  },
  /**
   * 妫€鏌� value 鏄惁鏄師濮婲umber鏁板€煎瀷 鎴栬€� 瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓璞★紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isNumber: function (value) {
    if (typeof value == 'number' || typeof value.valueOf() == 'number') {
      return true
    } else {
      return false
    }
  },
  /**
   * 妫€鏌� value 鏄惁涓� Object 鐨� language type
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓璞★紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isObject: function (value) {
    if (this.isNull(value)) {
      return false
    } else if (this.isFunction(value)) {
      return true
    } else if (typeof value == 'object') {
      return true
    } else {
      return false
    }
  },
  /**
   * 妫€鏌� value 鏄惁涓篟egExp瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓鍒欒〃杈惧紡锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isRegExp: function (value) {

    return value instanceof RegExp
  },
  /**
   * 妫€鏌� value 鏄惁鏄師濮嬪瓧绗︿覆String鎴栬€呭璞°€�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓瓧绗︿覆锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isString: function (value) {

    return typeof value == 'string'
  },
  /**
   * 妫€鏌� value 鏄惁鏄� undefined.
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄� undefined 锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isUndefined: function (value) {

    return typeof value == 'undefined'
  },
  /**
   * 鏄惁鏄被鏁扮粍瀵硅薄鎴栧瓧绗︿覆
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  iscollection: function (value) {

    return this.isObject(value) || this.isString(value)
  },
  /**
   * 杩斿洖collection锛堥泦鍚堬級鐨勯暱搴︼紝濡傛灉闆嗗悎鏄被鏁扮粍鎴栧瓧绗︿覆锛岃繑鍥炲叾 length 锛涘鏋滈泦鍚堟槸瀵硅薄锛岃繑鍥炲叾鍙灇涓惧睘鎬х殑涓暟銆�
   * @param  collection (Array|Object): 瑕佹鏌ョ殑闆嗗悎
   * @return (number): 杩斿洖闆嗗悎鐨勯暱搴︺€�
   */
  size: function (collection) {
    var count = 0
    if (this.iscollection(collection)) {
      for (key in collection) {
        count++
      }
    }
    return count
  },
  /**
   * 妫€鏌� value 鏄惁涓轰竴涓┖瀵硅薄锛岄泦鍚堬紝鏄犲皠鎴栬€卻et銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓虹┖锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isEmpty: function (value) {
    if (typeof value == 'object' || typeof value == 'string') {
      if (this.size(value)) {
        return false
      }
    }
    return true
  },
  /**
   * 杩欎釜鏂规硶杩斿洖棣栦釜鎻愪緵鐨勫弬鏁般€�
   * @param  value (*): 浠讳綍鍊笺€�
   * @return (*): 杩斿洖 value.
   */
  identity: function (value) {

    return value
  },
  /**
   * 璋冪敤 iteratee 閬嶅巻 collection(闆嗗悎) 涓殑姣忎釜鍏冪礌锛� iteratee 璋冪敤3涓弬鏁帮細 (value, index|key, collection)
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (*): 杩斿洖闆嗗悎 collection銆�
   */
  forEach: function (collection, iteratee) {
    if (iteratee == undefined) {
      this.identity(collection)
    }
    if (this.iscollection(collection)) {
      for (key in collection) {
        var tmp = iteratee(collection[key], key, collection)
        if (tmp === false) {
          break
        }
      }
    }
    return collection
  },
  /**
   * 鍒涘缓涓€涓皟鐢╢unc鐨勫嚱鏁帮紝閫氳繃this缁戝畾鍜屽垱寤哄嚱鏁扮殑鍙傛暟璋冪敤func锛岃皟鐢ㄦ鏁颁笉瓒呰繃 n 娆°€� 涔嬪悗鍐嶈皟鐢ㄨ繖涓嚱鏁帮紝灏嗚繑鍥炰竴娆℃渶鍚庤皟鐢╢unc鐨勭粨鏋溿€�
   * @param  n (number): 瓒呰繃澶氬皯娆′笉鍐嶈皟鐢╢unc锛堟剼浜虹爜澶存敞锛氶檺鍒惰皟鐢╢unc 鐨勬鏁帮級銆�
   * @param  func (Function): 闄愬埗鎵ц鐨勫嚱鏁般€�
   * @return (Function): 杩斿洖鏂扮殑闄愬畾鍑芥暟銆�
   */
  before: function (n, func) {
    var count
    var lastResult
    return function (arg) {
      count++
      if (count <= n) {
        lastResult = func(arg)
        return lastResult
      } else {
        return lastResult
      }
    }
  },
  /**
   * before鐨勫弽鍚戝嚱鏁�;姝ゆ柟娉曞垱寤轰竴涓嚱鏁帮紝褰撲粬琚皟鐢╪鎴栨洿澶氭涔嬪悗灏嗛┈涓婅Е鍙慺unc 銆�
   * @param  n (number): func 鏂规硶搴旇鍦ㄨ皟鐢ㄥ灏戞鍚庢墠鎵ц銆�
   * @param  func (Function): 鐢ㄦ潵闄愬畾鐨勫嚱鏁�
   * @return (Function): 杩斿洖鏂扮殑闄愬畾鍑芥暟銆�
   */
  after: function (n, func) {
    var co
    unt
    return function (arg) {
      count++
      if (count >= n) {
        return func(arg)
      }
    }
  },
  /**
   * 鍒涘缓涓€涓皟鐢╢unc鐨勫嚱鏁帮紝thisArg缁戝畾func鍑芥暟涓殑 this 锛屽苟涓攆unc鍑芥暟浼氭帴鏀秔artials闄勫姞鍙傛暟銆�
   * _.bind.placeholder鍊硷紝榛樿鏄互 _ 浣滀负闄勫姞閮ㄥ垎鍙傛暟鐨勫崰浣嶇銆�
   * @param  func (Function): 缁戝畾鐨勫嚱鏁般€�
   * @param  thisArg (*): func 缁戝畾鐨則his瀵硅薄銆�
   * @param  [partials] (...*): 闄勫姞鐨勯儴鍒嗗弬鏁般€�
   * @return (Function): 杩斿洖鏂扮殑缁戝畾鍑芥暟銆�
   */
  bind: function (func, thisArg) {
    var self = this
    var temp = Array.prototype.slice.call(arguments, 2)
    return function (...args) {
      for (var i = 0; i < temp.length; i++) {
        if (self.isEqual(temp[i], _)) {
          temp[i] = args.shift()
        }
      }
      return func.apply(thisArg, temp.concat(args))
    }
  },
  /**
   * 鍒嗛厤鏉ユ簮瀵硅薄鐨勫彲鏋氫妇灞炴€у埌鐩爣瀵硅薄涓娿€� 鏉ユ簮瀵硅薄鐨勫簲鐢ㄨ鍒欐槸浠庡乏鍒板彸锛岄殢鍚庣殑涓嬩竴涓璞＄殑灞炴€т細瑕嗙洊涓婁竴涓璞＄殑灞炴€с€�
   * @param  object (Object): 鐩爣瀵硅薄銆�
   * @param  [sources] (...Object): 鏉ユ簮瀵硅薄銆俔
   * @return (Object): 杩斿洖 object.
   */
  assign: function (object, source) {
    for (var i = 0; i < arguments.length; i++) {
      for (key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          object[key] = arguments[i][key]
        }
      }
    }
    return object
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.assign锛� 闄や簡瀹冧細閬嶅巻骞剁户鎵挎潵婧愬璞＄殑灞炴€с€�
   * @param  object (Object): 鐩爣瀵硅薄銆�
   * @param  [sources] (...Object): 鏉ユ簮瀵硅薄銆�
   * @return (Object): 杩斿洖 object銆俷]
   */
  assignIn: function (object, source) {
    for (var i = 0; i < arguments.length; i++) {
      for (key in arguments[i]) {
        object[key] = arguments[i][key]
      }
    }
    return object
  },
  /**
   * 璇ユ柟娉曠被浼糭.find锛屽尯鍒槸璇ユ柟娉曡繑鍥炵涓€涓€氳繃 predicate 鍒ゆ柇涓虹湡鍊肩殑鍏冪礌鐨勭储寮曞€硷紙index锛夛紝鑰屼笉鏄厓绱犳湰韬€�
   * @param  array (Array): 瑕佹悳绱㈢殑鏁扮粍銆�
   * @param  [fromIndex=0] (number): The index to search from.
   * @return (number): 杩斿洖鎵惧埌鍏冪礌鐨� 绱㈠紩鍊硷紙index锛夛紝鍚﹀垯杩斿洖 -1銆�
   */
  findIndex: function (arr, ident, index) {
    index = index || 0
    var self = this
    if (this.isObject(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj, ident)
      }
    }
    if (this.isArray(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj[ident[0]], ident[1])
      }
    }
    if (this.isString(ident)) {
      var fn = function (obj) {
        return obj[ident]
      }
    }
    if (this.isFunction(ident)) {
      var fn = ident
    }
    for (var i = index; i < arr.length; i++) {
      if (fn(arr[i])) {
        return i
      }
    }
    return -1
  },
  /**
   * 杩欎釜鏂瑰紡绫讳技 _.findIndex锛� 鍖哄埆鏄畠鏄粠鍙冲埌宸︾殑杩唬闆嗗悎array涓殑鍏冪礌銆�
   * @param  array (Array): 瑕佹悳绱㈢殑鏁扮粍銆�
   * @param  [predicate=_.identity] (Array|Function|Object|string): 杩欎釜鍑芥暟浼氬湪姣忎竴娆¤凯浠ｈ皟鐢ㄣ€�
   * @param  [fromIndex=array.length-1] (number): The index to search from.
   * @return (number): 杩斿洖鎵惧埌鍏冪礌鐨� 绱㈠紩鍊硷紙index锛夛紝鍚﹀垯杩斿洖 -1銆�
   */
  findLastIndex: function (arr, ident, index) {
    index = index || arr.length - 1
    var self = this
    if (this.isObject(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj, ident)
      }
    }
    if (this.isArray(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj[ident[0]], ident[1])
      }
    }
    if (this.isString(ident)) {
      var fn = function (obj) {
        return obj[ident]
      }
    }
    if (this.isFunction(ident)) {
      var fn = ident
    }
    for (var i = index; i >= 0; i--) {
      if (fn(arr[i])) {
        return i
      }
    }
    return -1
  },
  /**
   * 鏍规嵁 depth 閫掑綊鍑忓皯 array 鐨勫祵濂楀眰绾�
   * @param  array (Array): 闇€瑕佸噺灏戝祵濂楀眰绾х殑鏁扮粍銆�
   * @param  [depth=1] (number):鏈€澶氬噺灏戠殑宓屽灞傜骇鏁般€�
   * @return (Array): 杩斿洖鍑忓皯宓屽灞傜骇鍚庣殑鏂版暟缁勩€�
   */
  flattenDepth: function (arr, depth) {
    //debugger
    var result = arr
    for (var i = 0; i < depth; i++) {
      result = this.flatten(result)
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.intersection锛屽尯鍒槸瀹冩帴鍙椾竴涓� iteratee 璋冪敤姣忎竴涓猘rrays鐨勬瘡涓€间互浜х敓涓€涓€硷紝閫氳繃浜х敓鐨勫€艰繘琛屼簡姣旇緝銆傜粨鏋滃€兼槸浠庣涓€鏁扮粍涓€夋嫨銆�
   * @params [arrays] (...Array): 寰呮鏌ョ殑鏁扮粍銆�
   * @params [iteratee=_.identity] (Array|Function|Object|string): iteratee锛堣凯浠ｅ櫒锛夎皟鐢ㄦ瘡涓厓绱犮€�
   * @return (Array): 杩斿洖涓€涓寘鍚墍鏈変紶鍏ユ暟缁勪氦闆嗗厓绱犵殑鏂版暟缁勩€�
   */
  intersectionBy: function () {
    var ident = arguments[arguments.length - 1]
    var result = []
    var self = this
    if (this.isString(ident)) {
      var fn = function (obj) {
        return obj[ident]
      }
    }
    if (this.isFunction(ident)) {
      var fn = ident
    }
    //return this.intersection(arguments[0].map(fn), arguments[1].map(fn))
    for (var keys in arguments[0]) {
      for (var key in arguments[1]) {
        if (fn(arguments[0][keys]) === fn(arguments[1][key])) {
          result.push(arguments[0][keys])
        }
      }
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.intersection锛屽尯鍒槸瀹冩帴鍙椾竴涓� comparator 璋冪敤姣旇緝arrays涓殑鍏冪礌銆傜粨鏋滃€兼槸浠庣涓€鏁扮粍涓€夋嫨銆俢omparator 浼氫紶鍏ヤ袱涓弬鏁帮細(arrVal, othVal)銆�
   * @params [arrays] (...Array): 寰呮鏌ョ殑鏁扮粍銆�
   * @params [comparator] (Function): comparator锛堟瘮杈冨櫒锛夎皟鐢ㄦ瘡涓厓绱犮€�
   * @return (Array): 杩斿洖涓€涓寘鍚墍鏈変紶鍏ユ暟缁勪氦闆嗗厓绱犵殑鏂版暟缁勩€�
   */
  intersectionWith: function () {
    var ident = arguments[arguments.length - 1]
    var result = []
    for (var keys in arguments[0]) {
      for (var key in arguments[1]) {
        if (ident(arguments[0][keys], arguments[1][key])) {
          result.push(arguments[0][keys])
        }
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓皟鐢╢unc鐨勫嚱鏁般€傝皟鐢╢unc鏃舵渶澶氭帴鍙� n涓弬鏁帮紝蹇界暐澶氬嚭鐨勫弬鏁般€�
   * @param  func (Function): 闇€瑕佽闄愬埗鍙傛暟涓暟鐨勫嚱鏁般€�
   * @param  [n=func.length] (number): 闄愬埗鐨勫弬鏁版暟閲忋€�
   * @return (Function): 杩斿洖鏂扮殑瑕嗙洊鍑芥暟銆�
   */
  ary: function (func, n) {
    return function (args) {
      if (arguments.length > n) {
        arguments.length = n
      }
      return func(args)
    }
  },
  /**
   * 杩欎釜鏂规硶绫讳技浜巁.pullAll 锛屽尯鍒槸杩欎釜鏂规硶鎺ュ彈涓€涓� iteratee锛堣凯浠ｅ嚱鏁帮級 璋冪敤 array 鍜� values鐨勬瘡涓€间互浜х敓涓€涓€硷紝閫氳繃浜х敓鐨勫€艰繘琛屼簡姣旇緝銆�
   * @param  array (Array): 瑕佷慨鏀圭殑鏁扮粍銆�
   * @param  values (Array): 瑕佺Щ闄ゅ€肩殑鏁扮粍
   * @param  [iteratee=_.identity] (Array|Function|Object|string): iteratee锛堣凯浠ｅ櫒锛夎皟鐢ㄦ瘡涓厓绱犮€�
   * @return (Array): 杩斿洖 array.
   */
  pullAllBy: function (arr, value, iter) {
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    for (var i = 0; i < value.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (fn(value[i]) == fn(arr[j])) {
          arr.splice(j, 1)
          j--
        }
      }
    }
    return arr
  },
  /**
   * 杩欎釜鏂规硶绫讳技浜� _.pullAll锛屽尯鍒槸杩欎釜鏂规硶鎺ュ彈 comparator 璋冪敤array涓殑鍏冪礌鍜寁alues姣旇緝銆�
   * @param  array (Array): 瑕佷慨鏀圭殑鏁扮粍銆�
   * @param  values (Array): 瑕佺Щ闄ゅ€肩殑鏁扮粍銆�
   * @param  [comparator] (Function): comparator锛堟瘮杈冨櫒锛夎皟鐢ㄦ瘡涓厓绱犮€�
   * @return (Array): 杩斿洖 array銆�
   */
  pullAllWith: function (arr, oth, fn) {
    for (var i = 0; i < oth.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (fn(arr[j], oth[i])) {
          arr.splice(j, 1)
          j--
        }
      }
    }
    return arr
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.sortedIndex 锛岄櫎浜嗗畠鎺ュ彈涓€涓� iteratee 锛堣凯浠ｅ嚱鏁帮級锛岃皟鐢ㄦ瘡涓€涓暟缁勶紙array锛夊厓绱狅紝杩斿洖缁撴灉鍜寁alue 鍊兼瘮杈冩潵璁＄畻鎺掑簭銆�
   * @param  array (Array): 瑕佹鏌ョ殑鎺掑簭鏁扮粍銆�
   * @param  value (*): 瑕佽瘎浼扮殑鍊笺€�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 杩唬鍑芥暟锛岃皟鐢ㄦ瘡涓厓绱犮€�
   * @return (number): 杩斿洖 value鍊� 搴旇鍦ㄦ暟缁刟rray涓彃鍏ョ殑绱㈠紩浣嶇疆 index銆�
   */
  sortedIndexBy: function (arr, value, iter) {
    if (this.isFunction(iter)) {
      var fn = iter
    }
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (fn(value) <= fn(arr[i])) {
        break
      }
    }
    return i
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.indexOf锛岄櫎浜嗗畠鏄湪宸茬粡鎺掑簭鐨勬暟缁刟rray涓婃墽琛屼簩杩涘埗妫€绱€�
   * @param  array (Array): 瑕佹悳绱㈢殑鏁扮粍銆�
   * @param  value (*): 鎼滅储鐨勫€笺€�
   * @return (number): 杩斿洖鍖归厤鍊肩殑绱㈠紩浣嶇疆锛屽惁鍒欒繑鍥� -1銆�
   */
  sortedIndexOf: function (arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (value == arr[i]) {
        return i
      }
    }
    return -1
  },
  /**
   * 姝ゆ柟娉曠被浼间簬_.sortedIndex锛岄櫎浜� 瀹冭繑鍥� value鍊� 鍦� array 涓敖鍙兘澶х殑绱㈠紩浣嶇疆锛坕ndex锛夈€�
   * @param  array (Array): 瑕佹鏌ョ殑鎺掑簭鏁扮粍銆�
   * @param  value (*): 瑕佽瘎浼扮殑鍊笺€�
   * @return (number): 杩斿洖 value鍊� 搴旇鍦ㄦ暟缁刟rray涓彃鍏ョ殑绱㈠紩浣嶇疆 index銆�
   */
  sortedLastIndex: function (arr, value) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (value == arr[i]) {
        return i + 1
      }
    }
    return -1
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.sortedLastIndex 锛岄櫎浜嗗畠鎺ュ彈涓€涓� iteratee 锛堣凯浠ｅ嚱鏁帮級锛岃皟鐢ㄦ瘡涓€涓暟缁勶紙array锛夊厓绱狅紝杩斿洖缁撴灉鍜寁alue 鍊兼瘮杈冩潵璁＄畻鎺掑簭銆�
   * @param  array (Array): 瑕佹鏌ョ殑鎺掑簭鏁扮粍銆�
   * @param  value (*): 瑕佽瘎浼扮殑鍊笺€�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 杩唬鍑芥暟锛岃皟鐢ㄦ瘡涓厓绱犮€�
   * @return (number): 杩斿洖 value鍊� 搴旇鍦ㄦ暟缁刟rray涓彃鍏ョ殑绱㈠紩浣嶇疆 index銆�
   */
  sortedLastIndexBy: function (arr, value, iter) {
    if (this.isFunction(iter)) {
      var fn = iter
    }
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (fn(value) < fn(arr[i])) {
        break
      }
    }
    return i
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.lastIndexOf锛岄櫎浜嗗畠鏄湪宸茬粡鎺掑簭鐨勬暟缁刟rray涓婃墽琛屼簩杩涘埗妫€绱€�
   * @param  array (Array): 瑕佹悳绱㈢殑鏁扮粍銆�
   * @param  value (*): 鎼滅储鐨勫€笺€�
   * @return (number): 杩斿洖鍖归厤鍊肩殑绱㈠紩浣嶇疆锛屽惁鍒欒繑鍥� -1銆�
   */
  sortedLastIndexOf: function (arr, value) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (value == arr[i]) {
        return i
      }
    }
    return -1
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.uniq锛岄櫎浜嗗畠浼氫紭鍖栨帓搴忔暟缁勩€�
   * @param  array (Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * @return (Array): 杩斿洖涓€涓柊鐨勪笉閲嶅鐨勬暟缁勩€�
   */
  sortedUniq: function (arr) {
    arr.sort(function (a, b) {
      return a - b
    })
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1]) {
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.uniqBy锛岄櫎浜嗗畠浼氫紭鍖栨帓搴忔暟缁勩€�
   * @param  array (Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * @param  [iteratee] (Function): 杩唬鍑芥暟锛岃皟鐢ㄦ瘡涓厓绱犮€�
   * @return (Array): 杩斿洖涓€涓柊鐨勪笉閲嶅鐨勬暟缁勩€�
   */
  sortedUniqBy: function (arr, fn) {
    arr.sort(function (a, b) {
      return a - b
    })
    for (var i = 0; i < arr.length - 1; i++) {
      if (fn(arr[i]) == fn(arr[i + 1])) {
        arr.splice(i + 1, 1)
        i--
      }
    }
    return arr
  },
  /**
   * 浠巃rray鏁扮粍鐨勬渶鍚庝竴涓厓绱犲紑濮嬫彁鍙栧厓绱狅紝鐩村埌 predicate 杩斿洖鍋囧€笺€俻redicate 浼氫紶鍏ヤ笁涓弬鏁帮細 (value, index, array)銆�
   * @param  array (Array): 瑕佹绱㈢殑鏁扮粍銆�
   * @param  [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (Array): 杩斿洖 array 鏁扮粍鐨勫垏鐗囥€�
   */
  takeRightWhile: function (arr, ident) {
    var self = this
    if (this.isObject(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj, ident)
      }
    }
    if (this.isArray(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj[ident[0]], ident[1])
      }
    }
    if (this.isString(ident)) {
      var fn = function (obj) {
        return !(ident in obj)
      }
    }
    if (this.isFunction(ident)) {
      var fn = ident
    }
    var result = []
    for (var i = arr.length - 1; i >= 0; i--) {
      if (fn(arr[i])) {
        result.unshift(arr[i])
      } else {
        return result
      }
    }
  },
  /**
   * 浠巃rray鏁扮粍鐨勮捣濮嬪厓绱犲紑濮嬫彁鍙栧厓绱狅紝锛岀洿鍒� predicate 杩斿洖鍋囧€�
   * @param  array (Array): 闇€瑕佸鐞嗙殑鏁扮粍
   * @param  [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (Array): 杩斿洖 array 鏁扮粍鐨勫垏鐗囥€�
   */
  takeWhile: function (arr, ident) {
    var self = this
    if (this.isObject(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj, ident)
      }
    }
    if (this.isArray(ident)) {
      var fn = function (obj) {
        return self.isEqual(obj[ident[0]], ident[1])
      }
    }
    if (this.isString(ident)) {
      var fn = function (obj) {
        return !(ident in obj)
      }
    }
    if (this.isFunction(ident)) {
      var fn = ident
    }
    var result = []
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        result.push(arr[i])
      } else {
        return result
      }
    }
  },
  /**
   * 浣跨敤 iteratee 閬嶅巻鑷韩鐨勫彲鏋氫妇灞炴€с€� iteratee 浼氫紶鍏�3涓弬鏁帮細(value, key, object)銆� 濡傛灉杩斿洖 false锛宨teratee 浼氭彁鍓嶉€€鍑洪亶鍘嗐€�
   * @param  object (Object): 瑕侀亶鍘嗙殑瀵硅薄銆�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @return (Object): 杩斿洖 object銆�
   */
  forOwn: function (obj, iter) {
    for (keys in obj) {
      if (obj.hasOwnProperty(keys)) {
        if (iter(obj[keys], keys, obj) === false) {
          break
        }
      }
    }
    return obj
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.union 锛岄櫎浜嗗畠鎺ュ彈涓€涓� iteratee 锛堣凯浠ｅ嚱鏁帮級锛岃皟鐢ㄦ瘡涓€涓暟缁勶紙array锛夌殑姣忎釜鍏冪礌浠ヤ骇鐢熷敮涓€鎬ц绠楃殑鏍囧噯銆俰teratee 浼氫紶鍏ヤ竴涓弬鏁帮細(value)銆�
   * @param  [arrays] (...Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 杩唬鍑芥暟锛岃皟鐢ㄦ瘡涓厓绱犮€�
   * @return (Array): 杩斿洖涓€涓柊鐨勮仈鍚堟暟缁勩€�
   */
  unionBy: function (arr, value, iter) {
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    if (this.isFunction(iter)) {
      fn = iter
    }
    var result = Array.prototype.slice.call(arr)
    var onOff = true
    for (var i = 0; i < value.length; i++) {
      onOff = true
      for (var j = 0; j < arr.length; j++) {
        if (fn(value[i]) == fn(arr[j])) {
          onOff = false
        }
      }
      if (onOff) {
        result.push(value[i])
      }
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.union锛� 闄や簡瀹冩帴鍙椾竴涓� comparator 璋冪敤姣旇緝arrays鏁扮粍鐨勬瘡涓€涓厓绱�
   * @params [arrays] (...Array): 瑕佹鏌ョ殑鏁扮粍
   * @params [comparator] (Function): 姣旇緝鍑芥暟锛岃皟鐢ㄦ瘡涓厓绱犮€�
   * @return (Array): 杩斿洖涓€涓柊鐨勮仈鍚堟暟缁勩€�
   */
  unionWith: function () {
    var temp = Array.prototype.slice.call(arguments)
    var onOff
    for (var i = 1; i < temp.length - 1; i++) {
      for (var j = 0; j < temp[i].length; j++) {
        onOff = true
        for (var k = 0; k < temp[0].length; k++) {
          if (temp[temp.length - 1](temp[0][k], temp[i][j])) {
            onOff = false
            continue
          }
        }
        if (onOff) {
          temp[0].push(temp[i][j])
        }
      }
    }
    return temp[0]
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.uniq 锛岄櫎浜嗗畠鎺ュ彈涓€涓� iteratee 锛堣凯浠ｅ嚱鏁帮級锛岃皟鐢ㄦ瘡涓€涓暟缁勶紙array锛夌殑姣忎釜鍏冪礌浠ヤ骇鐢熷敮涓€鎬ц绠楃殑鏍囧噯銆�
   * @param  array (Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 杩唬鍑芥暟锛岃皟鐢ㄦ瘡涓厓绱犮€�
   * @return (Array): 杩斿洖鏂扮殑鍘婚噸鍚庣殑鏁扮粍銆�
   */
  uniqBy: function (arr, iter) {
    var result = Array.prototype.slice.call(arr)
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    for (var i = 0; i < result.length; i++) {
      for (var j = i + 1; j < result.length; j++) {
        if (fn(result[i]) == fn(result[j])) {
          result.splice(j, 1)
          j--
        }
      }
    }
    return result
  },
  uniqWith: function (arr, comp) {
    debugger
    var result = Array.prototype.slice.call(arr)
    for (var i = 0; i < result.length; i++) {
      for (var j = i + 1; j < result.length; j++) {
        if (comp(arr[i], arr[j])) {
          result.splice(j, 1)
          j--
        }
      }
    }
    return result
  },
  /**
   * 浼犲叆 JSON 瀛楃涓诧紝骞跺垵濮嬪寲鎸囬拡锛岃В鏋� JSON 瀵硅薄
   * @param  {[string]} jsonString [浼犲叆鐨� JSON 瀛楃涓瞉
   * @return {[object]}            [瑙ｆ瀽鍚庣殑 JOSN 瀵硅薄]
   */
  parseJson: function (jsonString) {
    var theJson = '',
      index = 0,
      onOff = false
    /**
     * 澶勭悊绌烘牸
     */
    for (var i = 0; i < jsonString.length; i++) {
      if (jsonString[i] == '"') {
        onOff = onOff ? false : true
      }
      if (!onOff && (jsonString[i] == ' ' || jsonString[i] == '\n' || jsonString[i] == '\r' || jsonString[i] == '\t')) {
        continue
      }
      theJson = theJson + jsonString[i]
    }
    return parse()

    /**
     * [鎸囬拡鎸囧悜鍚堥€傜殑浣嶇疆鏃惰繘琛岀殑瑙ｆ瀽鍑芥暟锛屾牴鎹瓧绗︿覆涓嶅悓鐨勮〃鐜拌繑鍥炰笉鍚岀殑鍊糫
     * @param  {[string]} jsonString [褰撳墠闇€瑕佽В鏋愮殑瀛楃涓诧紙鍙兘鏄€掑綊鍚庣殑鍊硷級]
     * @param  {[number]} index)     {                   var indexChar [鎸囬拡]
     * @return {[*]}            [瑙ｆ瀽鍚庣殑鍊糫
     */
    function parse() {
      var indexChar = theJson[index]
      if (indexChar == '{') {
        return parseObject()
      }

      if (indexChar == '[') {
        return parseArray()
      }

      if (indexChar == 't') {
        return parseTrue()
      }

      if (indexChar == 'f') {
        return parseFalse()
      }

      if (indexChar == 'n') {
        return parseNull()
      }

      if (indexChar == '"') {
        return parseString()
      }

      if (isDigit(indexChar)) {
        return parseNumber()
      }
    }
    /**
     * [parseNumber 瑙ｆ瀽鍊间负鏁板瓧鐨� value]
     * @return {[type]} [鏁板瓧]
     */
    function parseNumber() {
      for (var i = index + 1;; i++) {
        if (!isDigit(theJson[i])) {
          break
        }
      }
      var num = theJson.slice(index, i)
      index = i
      return parseInt(num)
    }
    /**
     * [鍒ゆ柇涓€涓瓧绗﹁兘鍚﹁浆鎹负鏁板瓧]
     * @param  {[string]}  char [浼犲叆鐨勫崟涓瓧绗
     * @return {Boolean}      [濡傛灉鑳借浆鎹负鏁板瓧锛岃繑鍥瀟rue]
     */
    function isDigit(char) {
      if (!char) {
        return false
      }
      var the0 = '0'.charCodeAt(0)
      var the9 = '9'.charCodeAt(0)
      var theChar = char.charCodeAt(0)
      if (the0 <= theChar && theChar <= the9) {
        return true
      } else {
        return false
      }
    }
    /**
     * [parseString 瑙ｆ瀽鍊间负瀛楃涓茬殑value鍊糫
     * @return {[string]} [杩斿洖浣滀负鍊肩殑瀛楃涓瞉
     */
    function parseString() {
      var theEnd = theJson.indexOf('"', index + 1)
      var theString = theJson.slice(index + 1, theEnd)
      index = theEnd + 1
      return theString
    }
    /**
     * [parseNull 瑙ｆ瀽 鍊间负null鐨剉alue鍊糫
     * @return {[type]} [杩斿洖null]
     */
    function parseNull() {
      index += 4
      return null
    }
    /**
     * [parseFalse 瑙ｆ瀽鍊间负 false 鐨� value 鍊糫
     * @return {[boolean]} [杩斿洖false]
     */
    function parseFalse() {
      index += 5
      return false
    }
    /**
     * * [parseFalse 瑙ｆ瀽鍊间负 true 鐨� value 鍊糫
     * @return {[boolean]} [杩斿洖true]
     */
    function parseTrue() {
      index += 4
      return true
    }
    /**
     * [parseArray 閫掑綊瑙ｆ瀽鏁扮粍]
     * @return {[array]} [杩斿洖涓€涓暟缁刔
     */
    function parseArray() {
      var result = [],
        product
      index++
      for (;;) {
        product = parse()
        result.push(product)
        if (theJson[index] === ',') {
          index++
          continue
        }
        if (theJson[index] === ']') {
          break
        }
      }
      index++
      return result
    }
    /**
     * [parseObject 閫掑綊瑙ｆ瀽瀵硅薄]
     * @return {[object]} [杩斿洖瀵硅薄]
     */
    function parseObject() {
      var result = {},
        key,
        value
      index++
      for (;;) {
        key = parseString()
        index++
        value = parse()
        result[key] = value
        if (theJson[index] === "}") {
          break
        }
        if (theJson[index] === ",") {
          index++
          continue
        }
      }
      index++
      return result
    }
  },
  /**
   * 涓や釜鏁扮浉鍔犮€�
   * @param augend (number): 鐩稿姞鐨勭涓€涓暟銆�
   * @param addend (number): 鐩稿姞鐨勭浜屼釜鏁般€�
   * @result (number): 杩斿洖鎬诲拰銆�
   */
  add: function (num1, num2) {

    return num1 + num2
  },
  /**
   * 姝ゆ柟娉曠被浼间簬_.unzip锛岄櫎浜嗗畠鎺ュ彈涓€涓猧teratee鎸囧畾閲嶇粍鍊煎簲璇ュ浣曡缁勫悎銆俰teratee 璋冪敤鏃朵細浼犲叆姣忎釜鍒嗙粍鐨勫€硷細 (...group)銆�
   * @param  array (Array): 瑕佸鐞嗙殑鍒嗙粍鍏冪礌鏁扮粍銆�
   * @param  [iteratee=_.identity] (Function): 杩欎釜鍑芥暟鐢ㄦ潵缁勫悎閲嶇粍鐨勫€笺€�
   * @return (Array): 杩斿洖閲嶇粍鍏冪礌鐨勬柊鏁扮粍銆�
   */
  unzipWith: function (arr, iter) {
    var result = []
    for (var j = 0; j < arr[0].length; j++) {
      for (var i = 0; i < arr.length - 1; i++) {
        result.push(iter(arr[i][j], arr[i + 1][j]))
      }
    }
    return result
  },
  arrayToLinkedList: function (array) {
    var result = {
      next: null
    }
    array.map(function (thevalue) {
      return {
        value: thevalue,
        next: null
      }
    }).reduce(function (list, curr) {
      list.next = curr
      return curr
    }, result)
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.xor 锛岄櫎浜嗗畠鎺ュ彈 iteratee锛堣凯浠ｅ櫒锛夛紝杩欎釜杩唬鍣� 璋冪敤姣忎竴涓� arrays锛堟暟缁勶級鐨勬瘡涓€涓€硷紝浠ョ敓鎴愭瘮杈冪殑鏂板€笺€俰teratee 璋冪敤涓€涓弬鏁帮細 (value).
   * @params [arrays] (...Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * @params [iteratee=_.identity] (Array|Function|Object|string): 璋冪敤姣忎竴涓厓绱犵殑杩唬鍑芥暟銆�
   * @return (Array): 杩斿洖杩囨护鍊煎悗鐨勬柊鏁扮粍銆�
   */
  xorBy: function () {
    var result = []
    var iter = arguments[arguments.length - 1]
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    var temp = Array.prototype.slice.call(arguments, 0, arguments.length - 1)
    var theComp = this.flattenDeep(temp)
    var count = 0
    for (var i = 0; i < theComp.length; i++) {
      count = 0
      for (var j = 0; j < theComp.length; j++) {
        if (this.isEqual(fn(theComp[i]), fn(theComp[j]))) {
          count++
        }
      }
      if (count == 1) {
        result.push(theComp[i])
      }
    }
    return result
  },
  /**
   * 璇ユ柟娉曟槸鍍� _.xor锛岄櫎浜嗗畠鎺ュ彈涓€涓� comparator 锛屼互璋冪敤姣旇緝鏁扮粍鐨勫厓绱犮€� comparator 璋冪敤2涓弬鏁帮細(arrVal, othVal).
   * @params [arrays] (...Array): 瑕佹鏌ョ殑鏁扮粍銆�
   * @params [comparator] (Function): 璋冪敤姣忎竴涓厓绱犵殑姣旇緝鍑芥暟銆�
   * @return (Array): 杩斿洖杩囨护鍊煎悗鐨勬柊鏁扮粍銆�
   */
  xorWith: function () {
    var result = []
    var iter = arguments[arguments.length - 1]
    var temp = Array.prototype.slice.call(arguments, 0, arguments.length - 1)
    var theComp = this.flattenDeep(temp)
    var count = 0
    for (var i = 0; i < theComp.length; i++) {
      count = 0
      for (var j = 0; j < theComp.length; j++) {
        if (iter(theComp[i], theComp[j])) {
          count++
        }
      }
      if (count == 1) {
        result.push(theComp[i])
      }
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.fromPairs锛岄櫎浜嗗畠鎺ュ彈2涓暟缁勶紝绗竴涓暟缁勪腑鐨勫€间綔涓哄睘鎬ф爣璇嗙锛堝睘鎬у悕锛夛紝绗簩涓暟缁勪腑鐨勫€间綔涓虹浉搴旂殑灞炴€у€笺€�
   * @param  [props=[]] (Array): The property identifiers.
   * @param  [values=[]] (Array): The property values.
   * @return (Object): Returns the new object.
   */
  zipObject: function (props, value) {
    var result = {}
    for (var i = 0; i < props.length; i++) {
      result[props[i]] = value[i]
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.zipObject锛岄櫎浜嗗畠鏀寔灞炴€ц矾寰勩€�
   * @param  [props=[]] (Array): 灞炴€ф爣璇嗙锛堝睘鎬у悕锛夈€�
   * @param  [values=[]] (Array): 灞炴€у€笺€�
   * @return (Object): 杩斿洖鏂板璞°€�
   */
  zipObjectDeep: function (props, value) {
    debugger
    var result = {}
    for (var i = 0; i < props.length; i++) {
      var thePath = '.' + props[i]
      parse(thePath, result, value[i], 0)
    }
    return result
    /**
     * 瑙ｆ瀽瀛楃涓诧紝灏嗗瓧绗︿覆璺緞娣诲姞鍒板璞′笂锛屽苟杩斿洖瀵硅薄
     * @param  {[string]} pathstr [璺緞瀛楃涓�,涓旇矾寰勬纭甝
     * @param  {[object]} obj     [琚坊鍔犵殑瀵硅薄]
     * @param  {[number/string/boolean..]} [闇€瑕佽祴缁欏彾瀛愮殑鍊糫
     * @return {[object]}         [杩斿洖瀵硅薄]
     */
    function parse(pathstr, obj, value, flag) {
      var start = flag + 1,
        end = start + 1,
        key
      while (true) {
        if (pathstr[end] === '.' || pathstr[end] === '[' || pathstr[end] === undefined || pathstr[end] === ']') {
          break
        }
        end++
      }
      key = pathstr.slice(start, end)
      if (pathstr[end] === ']') {
        end++
      }
      start = end
      if (key in obj) {
        parse(pathstr, obj[key], value, start)
      } else if (pathstr[end] === '.') {
        obj[key] = {}
        parse(pathstr, obj[key], value, start)
      } else if (pathstr[end] === '[') {
        obj[key] = []
        parse(pathstr, obj[key], value, start)
      } else if (pathstr[end] === undefined) {
        obj[key] = value
        return obj
      }
    }
  },
  /**
   * 杩欎釜鏂规硶绫讳技浜巁.zip锛屼笉鍚屼箣澶勫湪浜庡畠鎺ュ彈涓€涓� iteratee锛堣凯浠ｅ嚱鏁帮級锛屾潵 鎸囧畾鍒嗙粍鐨勫€煎簲璇ュ浣曡缁勫悎銆� 璇teratee璋冪敤姣忎釜缁勭殑鍏冪礌锛� (...group).
   * @param [arrays] (...Array): 瑕佸鐞嗙殑鏁扮粍銆�
   * @param [iteratee=_.identity] (Function): 鍑芥暟鐢ㄦ潵缁勫悎鍒嗙粍鐨勫€笺€�
   * @return (Array): 杩斿洖鍒嗙粍鍏冪礌鐨勬柊鏁扮粍銆�
   */
  zipWith: function () {
    var result = [],
      theArr = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
      theIter = arguments[arguments.length - 1],
      temp
    for (var j = 0; j < theArr[0].length; j++) {
      temp = []
      for (var i = 0; i < theArr.length; i++) {
        temp.push(theArr[i][j])
      }
      result.push(theIter(...temp))
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓粍鎴愬璞★紝key锛堥敭锛夋槸缁忚繃 iteratee锛堣凯浠ｅ嚱鏁帮級 鎵ц澶勭悊collection涓瘡涓厓绱犲悗杩斿洖鐨勭粨鏋滐紝姣忎釜key锛堥敭锛夊搴旂殑鍊兼槸 iteratee锛堣凯浠ｅ嚱鏁帮級杩斿洖璇ey锛堥敭锛夌殑娆℃暟锛堟剼浜虹爜澶存敞锛氳凯浠ｆ鏁帮級銆�
   * @param  {[type]} colle [description]
   * @param  {[type]} iter  [description]
   * @return {[type]}       [description]
   */
  countBy: function (colle, iter) {
    var count,
      result = {},
      keys
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    for (var key in colle) {
      keys = fn(colle[key])
      if (keys in result) {
        count++
      } else {
        count = 1
      }
      result[keys] = count
    }
    return result
  },
  /**
   * 閫氳繃 predicate锛堟柇瑷€鍑芥暟锛� 妫€鏌� collection锛堥泦鍚堬級涓殑 鎵€鏈� 鍏冪礌鏄惁閮借繑鍥炵湡鍊笺€�
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * @param  [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (boolean): 濡傛灉鎵€鏈夊厓绱犵粡 predicate锛堟柇瑷€鍑芥暟锛� 妫€鏌ュ悗閮介兘杩斿洖鐪熷€硷紝閭ｄ箞灏辫繑鍥瀟rue锛屽惁鍒欒繑鍥� false 銆�
   */
  every: function (colle, pred) {
    //debugger
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    for (var i = 0; i < colle.length; i++) {
      if (!fn(colle[i])) {
        return false
      }
    }
    return true
  },
  /**
   * 閬嶅巻 collection锛堥泦鍚堬級鍏冪礌锛岃繑鍥� predicate锛堟柇瑷€鍑芥暟锛夌涓€涓繑鍥炵湡鍊肩殑绗竴涓厓绱犮€俻redicate锛堟柇瑷€鍑芥暟锛夎皟鐢�3涓弬鏁帮細 (value, index|key, collection)銆�
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * @param  [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @param  [fromIndex=0] (number): 寮€濮嬫悳绱㈢殑绱㈠紩浣嶇疆銆�
   * @return (*): 杩斿洖鍖归厤鍏冪礌锛屽惁鍒欒繑鍥� undefined銆�
   */
  find: function (colle, pred, index) {
    if (index === undefined) {
      index = 0
    }
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    for (var i = index; i < colle.length; i++) {
      if (fn(colle[i])) {
        return colle[i]
      }
    }
  },
  /**
   * 杩欎釜鏂规硶绫讳技_.find 锛屼笉鍚屼箣澶勫湪浜庯紝_.findLast鏄粠鍙宠嚦宸﹂亶鍘哻ollection 锛堥泦鍚堬級鍏冪礌鐨勩€�
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * @param  [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @param  [fromIndex=collection.length-1] (number): 寮€濮嬫悳绱㈢殑绱㈠紩浣嶇疆銆�
   * @return (*): 杩斿洖鍖归厤鍏冪礌锛屽惁鍒欒繑鍥� undefined銆�
   */
  findLast: function (colle, pred, index) {
    if (index === undefined) {
      index = colle.length - 1
    }
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    for (var i = index; i >= 0; i--) {
      if (fn(colle[i])) {
        return colle[i]
      }
    }
  },
  /**
   * 鍒涘缓涓€涓墎骞冲寲锛堟剼浜虹爜澶存敞锛氬悓闃舵暟缁勶級鐨勬暟缁勶紝杩欎釜鏁扮粍鐨勫€兼潵鑷猚ollection锛堥泦鍚堬級涓殑姣忎竴涓€肩粡杩� iteratee锛堣凯浠ｅ嚱鏁帮級 澶勭悊鍚庤繑鍥炵殑缁撴灉锛屽苟涓旀墎骞冲寲鍚堝苟銆� iteratee 璋冪敤涓変釜鍙傛暟锛� (value, index|key, collection)銆�
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｉ亶鍘嗙殑闆嗗悎銆�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (Array): 杩斿洖鏂版墎骞冲寲鏁扮粍銆�
   */
  flatMap: function (colle, iter) {
    var result = []
    if (this.isFunction(iter)) {
      var fn = iter
    }
    for (var i = 0; i < colle.length; i++) {
      result.push(fn(colle[i]))
    }
    return this.flatten(result)
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.flatMap 涓嶅悓涔嬪鍦ㄤ簬锛宊.flatMapDeep 浼氱户缁墎骞冲寲閫掑綊鏄犲皠鐨勭粨鏋溿€�
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (Array): 杩斿洖鏂版墎骞冲寲鏁扮粍銆�
   */
  flatMapDeep: function (colle, iter) {
    var result = []
    if (this.isFunction(iter)) {
      var fn = iter
    }
    for (var i = 0; i < colle.length; i++) {
      result.push(fn(colle[i]))
    }
    return this.flattenDeep(result)
  },
  /**
   * 璇ユ柟娉曠被浼糭.flatMap锛屼笉鍚屼箣澶勫湪浜庯紝_.flatMapDepth 浼氭牴鎹寚瀹氱殑 depth锛堥€掑綊娣卞害锛夌户缁墎骞冲寲閫掑綊鏄犲皠缁撴灉銆�
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @param  [depth=1] (number): 鏈€澶ч€掑綊娣卞害銆�
   * @return (Array): 杩斿洖鏂版墎骞冲寲鏁扮粍銆�
   */
  flatMapDepth: function (colle, iter, depth) {
    if (depth === undefined) {
      depth = 1
    }
    var result = []
    if (this.isFunction(iter)) {
      var fn = iter
    }
    for (var i = 0; i < colle.length; i++) {
      result.push(fn(colle[i]))
    }
    return this.flattenDepth(result, depth)
  },
  /**
   * 璋冪敤 iteratee 閬嶅巻 collection(闆嗗悎) 涓殑姣忎釜鍏冪礌锛� iteratee 璋冪敤3涓弬鏁帮細 (value, index|key, collection)銆� 濡傛灉杩唬鍑芥暟锛坕teratee锛夋樉寮忕殑杩斿洖 false 锛岃凯浠ｄ細鎻愬墠閫€鍑恒€�
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (*): 杩斿洖闆嗗悎 collection銆�
   */
  forEachRight: function (collection, iteratee) {
    if (this.iscollection(collection)) {
      var theKey = []
      for (key in collection) {
        theKey.unshift(key)
      }
      for (var i = 0; i < theKey.length; i++) {
        if (!iteratee(collection[theKey[i]], theKey[i], collection) === false) {
          break
        }
      }
    }
    return collection
  },
  /**
   * 鍒涘缓涓€涓璞★紝key 鏄� iteratee 閬嶅巻 collection(闆嗗悎) 涓殑姣忎釜鍏冪礌杩斿洖鐨勭粨鏋溿€�
   * @param  collection (Array|Object): 涓€涓敤鏉ヨ凯浠ｇ殑闆嗗悎銆�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 杩欎釜杩唬鍑芥暟鐢ㄦ潵杞崲key銆�
   * @return (Object): 杩斿洖涓€涓粍鎴愯仛鍚堢殑瀵硅薄銆�
   */
  groupBy: function (colle, iter) {
    debugger
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    var result = {}
    var theKey
    for (var key in colle) {
      theKey = fn(colle[key])
      if (theKey in result) {
        result[theKey].push(colle[key])
      } else {
        result[theKey] = [colle[key]]
      }

    }
    return result
  },
  /**
   * 妫€鏌� value(鍊�) 鏄惁鍦� collection(闆嗗悎) 涓€傚鏋� collection(闆嗗悎)鏄竴涓瓧绗︿覆锛岄偅涔堟鏌� value锛堝€硷紝瀛愬瓧绗︿覆锛� 鏄惁鍦ㄥ瓧绗︿覆涓紝 鍚﹀垯浣跨敤 SameValueZero 鍋氱瓑鍊兼瘮杈冦€� 濡傛灉鎸囧畾 fromIndex 鏄礋鏁帮紝閭ｄ箞浠� collection(闆嗗悎) 鐨勭粨灏惧紑濮嬫绱€�
   * @param  collection (Array|Object|string): 瑕佹绱㈢殑闆嗗悎銆�
   * @param  value (*): 瑕佹绱㈢殑鍊笺€�
   * @param  [fromIndex=0] (number): 瑕佹绱㈢殑 绱㈠紩浣嶇疆銆�
   * @return (boolean): 濡傛灉鎵惧埌 value 杩斿洖 true锛� 鍚﹀垯杩斿洖 false銆�
   */
  includes: function (colle, value, index) {
    var temp = []
    if (index === undefined) {
      index = 0
    }
    for (var key in colle) {
      temp.push(colle[key])
    }
    if (this.isString(colle)) {
      var onOff
      for (var i = 0; i < colle.length; i++) {
        onOff = false
        if (value[0] === colle[i]) {
          onOff = true
          for (var j = 1; j < value.length; j++) {
            if (value[j] !== colle[i + j]) {
              onOff = false
            }
          }
        }
        if (onOff) {
          return true
        }
      }
    } else {
      if (index < 0) {
        index = temp.length + index
        for (var i = index; i >= 0; i--) {
          if (temp[i] === value) {
            return true
          }
        }
      } else {
        for (var i = index; i < temp.length; i++) {
          if (temp[i] === value) {
            return true
          }
        }
      }
    }
    return false
  },
  /**
   * 璋冪敤path锛堣矾寰勶級涓婄殑鏂规硶澶勭悊 collection(闆嗗悎)涓殑姣忎釜鍏冪礌锛岃繑鍥炰竴涓暟缁勶紝鍖呭惈姣忔璋冪敤鏂规硶寰楀埌鐨勭粨鏋溿€備换浣曢檮鍔犵殑鍙傛暟鎻愪緵缁欐瘡涓璋冪敤鐨勬柟娉曘€傚鏋渕ethodName锛堟柟娉曞悕锛夋槸涓€涓嚱鏁帮紝姣忔璋冪敤鍑芥暟鏃讹紝鍐呴儴鐨� this 鎸囧悜闆嗗悎涓殑姣忎釜鍏冪礌銆�
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param  path (Array|Function|string): 鐢ㄦ潵璋冪敤鏂规硶鐨勮矾寰� 鎴� 鑰呮瘡娆¤凯浠ｈ皟鐢ㄧ殑鍑芥暟銆�
   * @param  [args] (...*): 璋冪敤姣忎釜鏂规硶鐨勫弬鏁般€�
   * @return (Array): 杩斿洖鐨勭粨鏋滄暟缁勩€�
   */
  invokeMap: function (colle, path, ...args) {
    var result = []
    if (this.isString(path)) {
      for (var key in colle) {
        result.push(colle[key][path](...args))
      }
    }
    if (this.isFunction(path)) {
      for (var key in colle) {
        result.push(path.call(colle[key], ...args))
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓璞＄粍鎴愶紝 key锛堥敭锛� 鏄� collection锛堥泦鍚堬級涓殑姣忎釜鍏冪礌缁忚繃 iteratee锛堣凯浠ｅ嚱鏁帮級 澶勭悊鍚庤繑鍥炵殑缁撴灉銆� 姣忎釜 key锛堥敭锛夊搴旂殑鍊兼槸鐢熸垚key锛堥敭锛夌殑鏈€鍚庝竴涓厓绱犮€俰teratee锛堣凯浠ｅ嚱鏁帮級璋冪敤1涓弬鏁帮細(value)銆�
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param  [iteratee=_.identity] (Array|Function|Object|string): 杩欎釜杩唬鍑芥暟鐢ㄦ潵杞崲key銆�
   * @return (Object): 杩斿洖涓€涓粍鎴愯仛鍚堢殑瀵硅薄銆�
   */
  keyBy: function (colle, iter) {
    var result = {}
    if (this.isString(iter)) {
      var fn = function (obj) {
        return obj[iter]
      }
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    for (var key in colle) {
      result[fn(colle[key])] = colle[key]
    }
    return result
  },
  /**
   * 姝ゆ柟娉曠被浼间簬_.sortBy锛岄櫎浜嗗畠鍏佽鎸囧畾 iteratee锛堣凯浠ｅ嚱鏁帮級缁撴灉濡備綍鎺掑簭銆� 濡傛灉娌℃寚瀹� orders锛堟帓搴忥級锛屾墍鏈夊€间互鍗囧簭鎺掑簭銆� 鍚﹀垯锛屾寚瀹氫负"desc" 闄嶅簭锛屾垨鑰呮寚瀹氫负 "asc" 鍗囧簭锛屾帓搴忓搴斿€笺€�
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param  [iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): 鎺掑簭鐨勮凯浠ｅ嚱鏁般€�
   * @param  [orders] (string[]): iteratees杩唬鍑芥暟鐨勬帓搴忛『搴忋€�
   * @return (Array): 鎺掑簭鎺掑簭鍚庣殑鏂版暟缁勩€�
   */
  orderBy: function (colle, iter, order) {
    debugger
    for (var i = iter.length - 1; i >= 0; i--) {
      if (order[i] === 'desc') {
        colle.sort(function (a, b) {
          if (a[iter[i]] > b[iter[i]]) {
            return -1
          } else if (a[iter[i]] == b[iter[i]]) {
            return 0
          } else {
            return 1
          }
        })
      } else {
        colle.sort(function (a, b) {
          if (a[iter[i]] < b[iter[i]]) {
            return -1
          } else if (a[iter[i]] == b[iter[i]]) {
            return 0
          } else {
            return 1
          }
        })
      }
    }
    return colle
  },
  /**
   * 鍒涘缓涓€涓垎鎴愪袱缁勭殑鍏冪礌鏁扮粍锛岀涓€缁勫寘鍚玴redicate锛堟柇瑷€鍑芥暟锛夎繑鍥炰负 truthy锛堢湡鍊硷級鐨勫厓绱狅紝绗簩缁勫寘鍚玴redicate锛堟柇瑷€鍑芥暟锛夎繑鍥炰负 falsey锛堝亣鍊硷級鐨勫厓绱犮€俻redicate 璋冪敤1涓弬鏁帮細(value)銆�
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param  {[predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (Array): 杩斿洖鍏冪礌鍒嗙粍鍚庣殑鏁扮粍銆�
   */
  partition: function (colle, pred) {
    var result = [
      [],
      []
    ]
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    for (var i = 0; i < colle.length; i++) {
      if (fn(colle[i])) {
        result[0].push(colle[i])
      } else {
        result[1].push(colle[i])
      }
    }
    return result
  },
  /**
   * _.filter鐨勫弽鍚戞柟娉�;姝ゆ柟娉� 杩斿洖 predicate锛堟柇瑷€鍑芥暟锛� 涓� 杩斿洖 truthy锛堢湡鍊硷級鐨刢ollection锛堥泦鍚堬級鍏冪礌锛堟剼浜虹爜澶存敞閲婏細闈炵湡锛夈€�
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param  [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (Array): 杩斿洖杩囨护鍚庣殑鏂版暟缁�
   */
  reject: function (colle, pred) {
    var result = []
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    for (var i = 0; i < colle.length; i++) {
      if (!fn(colle[i])) {
        result.push(colle[i])
      }
    }
    return result
  },
  /**
   * 浠巆ollection锛堥泦鍚堬級涓幏寰椾竴涓殢鏈哄厓绱犮€�
   * @param  collection (Array|Object): 瑕佸彇鏍风殑闆嗗悎銆�
   * @return (*): 杩斿洖闅忔満鍏冪礌銆�
   */
  sample: function (colle) {
    var theKey = parseInt(Math.random() * colle.length)
    return colle[theKey]
  },
  /**
   * 浠巆ollection锛堥泦鍚堬級涓幏寰� n 涓殢鏈哄厓绱犮€�
   * @param  collection (Array|Object): 瑕佸彇鏍风殑闆嗗悎銆�
   * @param  [n=1] (number): 鍙栨牱鐨勫厓绱犱釜鏁般€�
   * @return (Array): 杩斿洖闅忔満鍏冪礌銆�
   */
  sampleSize: function (colle, n) {
    var result = [],
      theKey
    if (n === undefined) {
      n = 1
    }
    if (n > colle.length) {
      n = colle.length
    }
    for (var i = 0; i < n; i++) {
      theKey = parseInt(Math.random() * colle.length)
      result.push(colle[theKey])
    }
    return result
  },
  /**
   * 閫氳繃 predicate锛堟柇瑷€鍑芥暟锛� 妫€鏌ollection锛堥泦鍚堬級涓殑鍏冪礌鏄惁瀛樺湪 浠绘剰 truthy锛堢湡鍊硷級鐨勫厓绱狅紝涓€鏃� predicate锛堟柇瑷€鍑芥暟锛� 杩斿洖 truthy锛堢湡鍊硷級锛岄亶鍘嗗氨鍋滄銆� predicate 璋冪敤3涓弬鏁帮細(value, index|key, collection)銆�
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param  [predicate=_.identity] (Array|Function|Object|string): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return (boolean): 濡傛灉浠绘剰鍏冪礌缁� predicate 妫€鏌ラ兘涓� truthy锛堢湡鍊硷級锛岃繑鍥� true 锛屽惁鍒欒繑鍥� false 銆�
   */
  some: function (colle, pred) {
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    for (var i = 0; i < colle.length; i++) {
      if (fn(colle[i], i, colle)) {
        return true
      }
    }
    return false
  },
  /**
   * 鍒涘缓涓€涓厓绱犳暟缁勩€� 浠� iteratee 澶勭悊鐨勭粨鏋滃崌搴忔帓搴忋€� 杩欎釜鏂规硶鎵ц绋冲畾鎺掑簭锛屼篃灏辨槸璇寸浉鍚屽厓绱犱細淇濇寔鍘熷鎺掑簭銆� iteratees 璋冪敤1涓弬鏁帮細 (value)銆�
   * @param  collection (Array|Object): 鐢ㄦ潵杩唬鐨勯泦鍚堛€�
   * @param [iteratees=[_.identity]] (...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])): 杩欎釜鍑芥暟鍐冲畾鎺掑簭銆�
   * @return (Array): 杩斿洖鎺掑簭鍚庣殑鏁扮粍銆�
   */
  sortBy: function (colle) {
    debugger
    for (var i = 1; i < arguments.length; i++) {
      if (this.isFunction(arguments[i][0])) {
        var fn = arguments[i][0]
        colle.sort(function (a, b) {
          if (fn(a) < fn(b)) {
            return -1
          } else if (fn(a) === fn(b)) {
            return 0
          } else {
            return 1
          }
        })
      }
      if (this.isArray(arguments[i])) {
        for (var k = arguments[i].length - 1; k >= 0; k--) {
          var theValue = arguments[i]
          colle.sort(function (a, b) {
            if (a[theValue[k]] < b[theValue[k]]) {
              return -1
            } else if (a[theValue[k]] === b[theValue[k]]) {
              return 0
            } else {
              return 1
            }
          })
        }
      }
      if (this.isString(arguments[i])) {
        var theStr = arguments[i]
        colle.sort(function (a, b) {
          if (a[theStr] < b[theStr]) {
            return -1
          } else if (a[theStr] < b[theStr]) {
            return 0
          } else {
            return 1
          }
        })
      }
    }
    return colle
  },
  /**
   * 鎺ㄨ繜璋冪敤func锛岀洿鍒板綋鍓嶅爢鏍堟竻鐞嗗畬姣曘€� 璋冪敤鏃讹紝浠讳綍闄勫姞鐨勫弬鏁颁細浼犵粰func銆�
   * @param  func (Function): 瑕佸欢杩熺殑鍑芥暟銆�
   * @param  [args] (...*): 浼氬湪璋冪敤鏃朵紶缁� func 鐨勫弬鏁�
   * @return (number):杩斿洖璁℃椂鍣� id銆�
   */
  defer: function (func, ...args) {

    return setTimeout(func(...args), 0);
  },
  /**
   * 寤惰繜 wait 姣鍚庤皟鐢� func銆� 璋冪敤鏃讹紝浠讳綍闄勫姞鐨勫弬鏁颁細浼犵粰func銆�
   * @param  func (Function): 瑕佸欢杩熺殑鍑芥暟銆�
   * @param  wait (number): 瑕佸欢杩熺殑姣鏁般€�
   * @param  [args] (...*): 浼氬湪璋冪敤鏃朵紶鍏ュ埌 func 鐨勫弬鏁般€�
   * @return (number): 杩斿洖璁℃椂鍣� id
   */
  delay: function (func, wait, ...args) {

    return setTimeout(func(...args), wait);
  },
  /**
   * 濡傛灉 value 涓嶆槸鏁扮粍, 閭ｄ箞寮哄埗杞负鏁扮粍銆�
   * @param  value (*): 瑕佸鐞嗙殑鍊笺€�
   * @return (Array): 杩斿洖杞崲鍚庣殑鏁扮粍銆�
   */
  castArray: function (value) {
    var result = []
    if (arguments.length === 0) {
      return result
    }
    if (this.isArray(value)) {
      return value
    } else {
      result.push(value)
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓鎵撲贡鍊肩殑闆嗗悎銆� 浣跨敤 Fisher-Yates shuffle 鐗堟湰銆�
   * @param  collection (Array|Object): 瑕佹墦涔辩殑闆嗗悎銆�
   * @return (Array): 杩斿洖鎵撲贡鐨勬柊鏁扮粍銆�
   */
  shuffle: function (colle) {
    var result = colle.sort(function (a, b) {
      if (Math.random() > 0.5) {
        return 1
      } else {
        return -1
      }
    })
    return result
  },
  /**
   * 閫氳繃璋冪敤鏂█source鐨勫睘鎬т笌 object 鐨勭浉搴斿睘鎬у€硷紝妫€鏌� object鏄惁绗﹀悎 source銆傚綋source鍋忓簲鐢ㄦ椂锛岃繖绉嶆柟娉曞拰 _.conforms鍑芥暟鏄瓑浠风殑銆�
   * @param  object (Object): 瑕佹鏌ョ殑瀵硅薄銆�
   * @param  source (Object): 瑕佹柇瑷€灞炴€ф槸鍚︾鍚堢殑瀵硅薄銆�
   * @return (boolean): 濡傛灉 object 绗﹀悎锛岃繑鍥� true锛屽惁鍒� false銆�
   */
  conformsTo: function (obj, sour) {
    for (var key in obj) {
      if (key in sour) {
        if (sour[key](obj[key])) {
          return true
        }
      }
    }
    return false
  },
  /**
   * 鎵ц SameValueZero 姣旇緝涓よ€呯殑鍊硷紝鏉ョ‘瀹氬畠浠槸鍚︾浉绛夈€�
   * @param  value (*): 瑕佹瘮杈冪殑鍊笺€�
   * @param  other (*): 鍙︿竴涓姣旇緝鐨勫€笺€�
   * @return (boolean): 濡傛灉涓や釜鍊肩浉绛夎繑鍥� true 锛屽惁鍒欒繑鍥� false 銆�
   */
  eq: function (value1, value2) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
      if (value1.toString() === 'NaN' && value2.toString() === 'NaN') {
        return true
      }
    }
    if (value1 === value2) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value鏄惁澶т簬 other銆�
   * @param  value (*): 瑕佹瘮杈冪殑鍊笺€�
   * @param  other (*): 鍙︿竴涓姣旇緝鐨勫€笺€�
   * @return (boolean): 濡傛灉value 澶т簬 other 杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  gt: function (value, other) {
    if (value > other) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value鏄惁澶т簬鎴栬€呯瓑浜� other銆�
   * @param  value (*): 瑕佹瘮杈冪殑鍊笺€�
   * @param  other (*): 鍙︿竴涓姣旇緝鐨勫€笺€�
   * @return (boolean): 濡傛灉value 澶т簬鎴栬€呯瓑浜� other 杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  gte: function (value, other) {
    if (value >= other) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁鏄� ArrayBuffer 瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉value鏄竴涓暟缁� buffer 杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isArrayBuffer: function (value) {

    return value instanceof ArrayBuffer
  },
  /**
   * 妫€鏌� value 鏄惁鏄被鏁扮粍銆� 濡傛灉涓€涓€艰璁や负鏄被鏁扮粍锛岄偅涔堝畠涓嶆槸涓€涓嚱鏁帮紝骞朵笖value.length鏄釜鏁存暟锛屽ぇ浜庣瓑浜� 0锛屽皬浜庢垨绛変簬 Number.MAX_SAFE_INTEGER銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊�
   * @return (boolean): 濡傛灉value鏄竴涓被鏁扮粍锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isArrayLike: function (value) {
    if (this.isFunction(value)) {
      return false
    }
    if (typeof value === 'object' || typeof value === 'string') {
      if (Math.round(value.length) === value.length && 0 <= value.length && value.length <= Number.MAX_SAFE_INTEGER) {
        return true
      }
    }
    return false
  },
  /**
   * 杩欎釜鏂规硶绫讳技_.isArrayLike銆傞櫎浜嗗畠杩樻鏌alue鏄惁鏄釜瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓被鏁扮粍瀵硅薄锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isArrayLikeObject: function (value) {
    if (this.isFunction(value)) {
      return false
    }
    if (typeof value === 'object') {
      if (Math.round(value.length) === value.length && 0 <= value.length && value.length <= Number.MAX_SAFE_INTEGER) {
        return true
      }
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁鏄彲鑳芥槸 DOM 鍏冪礌銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓狣OM鍏冪礌锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isElement: function (value) {
    if (value instanceof HTMLElement) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁鏄� Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, 鎴栬€� URIError瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓敊璇紙Error锛夊璞★紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isError: function (value) {

    return value instanceof Error
  },
  isInteger: function (value) {
    return parseInt(value) === value
  },
  /**
   * 妫€鏌� value 鏄惁涓烘湁鏁堢殑绫绘暟缁勯暱搴︺€�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓湁鏁堥暱搴︼紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isLength: function (value) {
    if (parseInt(value) === value) {
      if (0 <= value && value <= Number.MAX_SAFE_INTEGER) {
        return true
      }
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁涓轰竴涓� Map 瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓� Map 瀵硅薄锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isMap: function (value) {

    return value instanceof Map
  },
  /**
   * 鎵ц涓€涓繁搴︽瘮杈冿紝鏉ョ‘瀹� object 鏄惁鍚湁鍜� source 瀹屽叏鐩哥瓑鐨勫睘鎬у€笺€�
   * @param  object (Object): 瑕佹鏌ョ殑瀵硅薄銆�
   * @param  source (Object): 灞炴€у€肩浉鍖归厤鐨勫璞°€�
   * @return (boolean): 濡傛灉object鍖归厤锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isMatch: function (obj, source) {
    if (source === undefined) {
      var self = this
      return function (obj) {
        for (key in obj) {
          if (!self.isEqual(obj[key], obj[key])) {
            return false
          }
        }
        return true
      }
    } else {
      for (var key in source) {
        if (this.isEqual(obj[key], source[key])) {
          return true
        }
      }
      return false
    }
  },
  /**
   * 妫€鏌� value 鏄惁鏄竴涓師鐢熷嚱鏁般€傛湭瀹炵幇
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 鏄竴涓� 鍘熺敓鍑芥暟锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isNative: function (value) {
    if (value === undefined) {
      return true
    }
    return value instanceof Function
  },
  /**
   * 妫€鏌� value 鏄惁鏄� null 鎴栬€� undefined銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓簄ull 鎴� undefined锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isNil: function (value) {
    if (value === undefined || value === null) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁鏄� 绫诲璞°€� 濡傛灉涓€涓€兼槸绫诲璞★紝閭ｄ箞瀹冧笉搴旇鏄� null锛岃€屼笖 typeof 鍚庣殑缁撴灉鏄� "object"銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return {Boolean}       [description]
   */
  isObjectLike: function (value) {
    if (typeof value === 'object' && value !== null) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁鏄櫘閫氬璞°€� 涔熷氨鏄璇ュ璞＄敱 Object 鏋勯€犲嚱鏁板垱寤猴紝鎴栬€� [[Prototype]] 涓� null 銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓櫘閫氬璞★紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isPlainObject: function (value) {
    if (Object.getPrototypeOf(value) === null || (value).constructor === Object) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁鏄竴涓畨鍏ㄦ暣鏁般€� 涓€涓畨鍏ㄦ暣鏁板簲璇ユ槸绗﹀悎 IEEE-754 鏍囧噯鐨勯潪鍙岀簿搴︽诞鐐规暟銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓畨鍏ㄦ暣鏁帮紝閭ｄ箞杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  isSafeInteger: function (value) {

    return value === parseInt(value)
  },
  /**
   * 妫€鏌� value 鏄惁鏄竴涓猄et瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓� set 瀵硅薄锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isSet: function (value) {

    return value instanceof Set
  },
  /**
   * 妫€鏌� value 鏄惁鏄師濮� Symbol 鎴栬€呭璞°€�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓猻ymbol锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isSymbol: function (value) {
    if (typeof value === 'symbol' || typeof value === 'object') {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁鏄疶ypedArray銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓猼yped array锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isTypedArray: function (value) {
    if (value.constructor === Int8Array) {
      return true
    }
    if (value.constructor === Uint8Array) {
      return true
    }
    if (value.constructor === Uint8ClampedArray) {
      return true
    }
    if (value.constructor === Int16Array) {
      return true
    }
    if (value.constructor === Uint16Array) {
      return true
    }
    if (value.constructor === Int32Array) {
      return true
    }
    if (value.constructor === Uint32Array) {
      return true
    }
    if (value.constructor === Float32Array) {
      return true
    }
    if (value.constructor === Float64Array) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁鏄� WeakMap 瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓� WeakMap 瀵硅薄 锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isWeakMap: function (value) {

    return value instanceof WeakMap
  },
  /**
   * 妫€鏌� value 鏄惁鏄� WeakSet 瀵硅薄銆�
   * @param  value (*): 瑕佹鏌ョ殑鍊笺€�
   * @return (boolean): 濡傛灉 value 涓轰竴涓� WeakSet 瀵硅薄 锛岄偅涔堣繑鍥� true锛屽惁鍒欒繑鍥� false銆�
   */
  isWeakSet: function (value) {

    return value instanceof WeakSet
  },
  /**
   * 妫€鏌� value 鏄惁灏忎簬 other銆�
   * @param  value (*): 鐢ㄦ潵姣旇緝鐨勫€笺€�
   * @param  other (*): 鍙︿竴涓敤鏉ユ瘮杈冪殑鍊笺€�
   * @return (boolean): 濡傛灉value 灏忎簬绛変簬 other 杩斿洖 true锛屽惁鍒欒繑鍥� false銆�
   */
  lt: function (value, other) {
    if (value < other) {
      return true
    }
    return false
  },
  /**
   * 妫€鏌� value 鏄惁灏忎簬绛変簬 other銆�
   * @param  value (*): 鐢ㄦ潵姣旇緝鐨勫€笺€�
   * @param  other (*): 鍙︿竴涓敤鏉ユ瘮杈冪殑鍊笺€�
   * @return {[type]}       [description]
   */
  lte: function (value, other) {
    if (value <= other) {
      return true
    }
    return false
  },
  /**
   * 杞崲 value 涓轰竴涓暟缁勩€�
   * @param  value (*): 瑕佽浆鎹㈢殑鍊笺€�
   * @return (Array): 杩斿洖杞崲鍚庣殑鏁扮粍銆�
   */
  toArray: function (value) {
    var result = []
    if (typeof value === 'object' && value !== null) {
      for (var key in value) {
        result.push(value[key])
      }
    }
    if (typeof value === 'string') {
      for (var i = 0; i < value.length; i++) {
        result.push(value[i])
      }
    }
    return result
  },
  /**
   * 杞崲 value 涓轰竴涓湁闄愭暟瀛椼€�
   * @param  value (*): 瑕佽浆鎹㈢殑鍊笺€�
   * @return (number): 杩斿洖杞崲鍚庣殑鏁板瓧銆�
   */
  toFinite: function (value) {
    if (isNaN(Number(value) === NaN)) {
      return "it's not a number"
    } else {
      if (Number.MIN_VALUE <= Number(value) && Number(value) <= Number.MAX_VALUE) {
        return Number(value)
      } else if (value < 0) {
        return Number.MIN_VALUE
      } else {
        return Number.MAX_VALUE
      }
    }
  },
  /**
   * 杞崲 value 涓轰竴涓暣鏁般€�
   * @param  value (*): 瑕佽浆鎹㈢殑鍊笺€�
   * @return (number): 杩斿洖杞崲鍚庣殑鏁存暟銆�
   */
  toInteger: function (value) {
    var num = Number(value)
    if (isNaN(num === NaN)) {
      return "it's not a number"
    } else {
      if (Number.MIN_VALUE <= num && num <= Number.MAX_VALUE) {
        if (num >= 0) {
          return Math.round(num)
        } else {
          return 0
        }
      } else if (value < 0) {
        return 0
      } else {
        return Number.MAX_VALUE
      }
    }
  },
  /**
   * 杞崲 value 涓虹敤浣滅被鏁扮粍瀵硅薄鐨勯暱搴︽暣鏁般€�
   * @param  value (*): 瑕佽浆鎹㈢殑鍊笺€�
   * @return (number): 杩斿洖杞崲鍚庣殑鏁存暟銆�
   */
  toLength: function (value) {
    var num = Number(value)
    if (isNaN(num === NaN)) {
      return "it's not a number"
    } else {
      if (0 <= num && num <= 4294967295) {
        return Math.round(num)
      } else if (value < 0) {
        return 0
      } else {
        return 4294967295
      }
    }
  },
  /**
   * 杞崲 value 涓轰竴涓暟瀛椼€�
   * @param  value (*): 瑕佸鐞嗙殑鍊笺€�
   * @return (number): 杩斿洖鏁板瓧銆�
   */
  toNumber: function (value) {
    if (isNaN(Number(value) === NaN)) {
      return "it's not a number"
    } else {
      return Number(value)
    }
  },
  /**
   * 杞崲 value 涓哄畨鍏ㄦ暣鏁般€� 瀹夊叏鏁存暟鍙互鐢ㄤ簬姣旇緝鍜屽噯纭殑琛ㄧず銆�
   * @param  value (*): 瑕佽浆鎹㈢殑鍊笺€�
   * @return (number): 杩斿洖杞崲鍚庣殑鏁存暟銆�
   */
  toSafeInteger: function (value) {
    var num = Number(value)
    if (isNaN(num === NaN)) {
      return "it's not a number"
    } else if (num < -9007199254740991) {
      return -9007199254740991
    } else if (num > 9007199254740991) {
      return 9007199254740991
    } else {
      return Math.round(num)
    }
  },
  /**
   * 鏍规嵁 precision锛堢簿搴︼級 鍚戜笂鑸嶅叆 number銆傦紙鎰氫汉鐮佸ご娉細 precision锛堢簿搴︼級鍙互鐞嗚В涓轰繚鐣欏嚑浣嶅皬鏁般€傦級
   * @param  number (number): 瑕佸悜涓婅垗鍏ョ殑鍊笺€�
   * @param  [precision=0] (number): 鍚戜笂鑸嶅叆鐨勭殑绮惧害銆�
   * @return (number): 杩斿洖鍚戜笂鑸嶅叆鐨勫€笺€�
   */
  ceil: function (number, prec) {
    if (prec === undefined) {
      prec = 0
    }
    var temp = number
    var count = 0
    while (parseInt(temp) !== temp) {
      temp *= 10
      count++
    }
    var d = Math.pow(10, count - prec)
    if (parseInt(temp / d) === temp / d) {
      return number
    } else {
      temp = parseInt(temp / d) + 1
      return temp / Math.pow(10, prec)
    }
  },
  /**
   * 涓や釜鏁扮浉闄ゃ€�
   * @param  dividend (number): 鐩搁櫎鐨勭涓€涓暟銆�
   * @param  divisor (number): 鐩搁櫎鐨勭浜屼釜鏁般€�
   * @return (number): 杩斿洖鍟嗘暟銆�
   */
  divide: function (dividend, divisor) {

    return dividend / divisor
  },
  /**
   * 鏍规嵁 precision锛堢簿搴︼級 鍚戜笅鑸嶅叆 number銆傦紙鎰氫汉鐮佸ご娉細 precision锛堢簿搴︼級鍙互鐞嗚В涓轰繚鐣欏嚑浣嶅皬鏁般€傦級
   * @param  number (number): 瑕佸悜涓嬭垗鍏ョ殑鍊笺€�
   * @param  [precision=0] (number): 鍚戜笅鑸嶅叆鐨勭簿搴︺€�
   * @return (number): 杩斿洖鍚戜笅鑸嶅叆鐨勫€笺€�
   */
  floor: function (number, prec) {
    if (prec === undefined) {
      prec = 0
    }
    var temp = number
    var count = 0
    while (parseInt(temp) !== temp) {
      temp *= 10
      count++
    }
    var d = Math.pow(10, count - prec)
    temp = parseInt(temp / d)
    return temp / Math.pow(10, prec)
  },
  /**
   * 璁＄畻 array 涓殑鏈€澶у€笺€� 濡傛灉 array 鏄� 绌虹殑鎴栬€呭亣鍊煎皢浼氳繑鍥� undefined銆�
   * @param  array (Array): 瑕佽凯浠ｇ殑鏁扮粍銆�
   * @return (*): 杩斿洖鏈€澶х殑鍊笺€�
   */
  max: function (arr) {
    if (arr.length === 0) {
      return undefined
    }
    if (arr.length === 1) {
      return arr[0]
    }
    return arr.reduce((a, b) => a > b ? a : b)
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.max 闄や簡瀹冩帴鍙� iteratee 鏉ヨ皟鐢� array涓殑姣忎竴涓厓绱狅紝鏉ョ敓鎴愬叾鍊兼帓搴忕殑鏍囧噯銆� iteratee 浼氳皟鐢�1涓弬鏁�: (value) 銆�
   * @param  array (Array): 瑕佽凯浠ｇ殑鏁扮粍銆�
   * @param  [iteratee=_.identity] (Function): 璋冪敤姣忎釜鍏冪礌鐨勮凯浠ｅ嚱鏁般€�
   * @return (*): 杩斿洖鏈€澶х殑鍊笺€�
   */
  maxBy: function (arr, iter) {
    if (this.isString(iter)) {
      var fn = this.property(iter)
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    return arr.reduce((a, b) => fn(a) > fn(b) ? a : b)
  },
  /**
   * 璁＄畻 array 鐨勫钩鍧囧€笺€�
   * @param  array (Array): 瑕佽凯浠ｇ殑鏁扮粍銆�
   * @return (number): 杩斿洖骞冲潎鍊笺€�
   */
  mean: function (arr) {
    if (arr.length === 0) {
      return undefined
    }
    if (arr.length === 1) {
      return arr[0]
    }
    return arr.reduce((a, b) => a + b) / arr.length
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.mean锛� 闄や簡瀹冩帴鍙� iteratee 鏉ヨ皟鐢� array涓殑姣忎竴涓厓绱狅紝鏉ョ敓鎴愬叾鍊兼帓搴忕殑鏍囧噯銆� iteratee 浼氳皟鐢�1涓弬鏁�: (value) 銆�
   * @param  array (Array): 瑕佽凯浠ｇ殑鏁扮粍銆�
   * @param  [iteratee=_.identity] (Function): 璋冪敤姣忎釜鍏冪礌鐨勮凯浠ｅ嚱鏁般€�
   * @return (number): 杩斿洖骞冲潎鍊笺€�
   */
  meanBy: function (arr, iter) {
    if (this.isString(iter)) {
      var fn = this.property(iter)
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    return arr.map(a => fn(a)).reduce((a, b) => a + b) / arr.length
  },
  /**
   * 璁＄畻 array 涓殑鏈€灏忓€笺€� 濡傛灉 array 鏄� 绌虹殑鎴栬€呭亣鍊煎皢浼氳繑鍥� undefined銆�
   * @param  array (Array): 瑕佽凯浠ｇ殑鏁扮粍銆�
   * @return (*): 杩斿洖鏈€灏忕殑鍊笺€�
   */
  min: function (arr) {
    if (arr.length === 0) {
      return undefined
    }
    if (arr.length === 1) {
      return arr[0]
    }
    return arr.reduce((a, b) => a < b ? a : b)
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.min 闄や簡瀹冩帴鍙� iteratee 鏉ヨ皟鐢� array涓殑姣忎竴涓厓绱狅紝鏉ョ敓鎴愬叾鍊兼帓搴忕殑鏍囧噯銆� iteratee 浼氳皟鐢�1涓弬鏁�: (value) 銆�
   * @param  array (Array): 瑕佽凯浠ｇ殑鏁扮粍銆�
   * @param  [iteratee=_.identity] (Function): 璋冪敤姣忎釜鍏冪礌鐨勮凯浠ｅ嚱鏁般€�
   * @return (*): 杩斿洖鏈€灏忕殑鍊笺€�
   */
  minBy: function (arr, iter) {
    if (this.isString(iter)) {
      var fn = this.property(iter)
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    return arr.reduce((a, b) => fn(a) < fn(b) ? a : b)
  },
  /**
   * 涓や釜鏁扮浉涔樸€�
   * @param  augend (number): 鐩镐箻鐨勭涓€涓暟銆�
   * @param  addend (number): 鐩镐箻鐨勭浜屼釜鏁般€�
   * @return (number): 杩斿洖涔樼Н銆�
   */
  multiply: function (multiplier, multiplicand) {

    return multiplier * multiplicand
  },
  /**
   * 鏍规嵁 precision锛堢簿搴︼級 鍥涜垗浜斿叆 number銆�
   * @param  number (number): 瑕佸洓鑸嶄簲鍏ョ殑鏁板瓧銆�
   * @param  [precision=0] (number): 鍥涜垗浜斿叆鐨勭簿搴︺€�
   * @return (number): 杩斿洖鍥涜垗浜斿叆鐨勬暟瀛椼€�
   */
  round: function (number, prec) {
    if (prec === undefined) {
      prec = 0
    }
    var temp = number
    var count = 0
    while (parseInt(temp) !== temp) {
      temp *= 10
      count++
    }
    var d = Math.pow(10, count - prec)
    if (temp / d - parseInt(temp / d) < 0.5) {
      return temp = parseInt(temp / d)
      // return temp / Math.pow(10, prec)
    } else {
      temp = parseInt(temp / d) + 1
      return temp / Math.pow(10, prec)
    }
  },
  /**
   * 涓ゆ暟鐩稿噺
   * @param  minuend (number): 鐩稿噺鐨勭涓€涓暟銆�
   * @param  subtrahend (number): 鐩稿噺鐨勭浜屼釜鏁般€�
   * @return (number): 杩斿洖宸€�
   */
  subtract: function (minuend, subtrahend) {

    return minuend - subtrahend
  },
  /**
   * 璁＄畻 array 涓€肩殑鎬诲拰
   * @param  array (Array): 瑕佽凯浠ｇ殑鏁扮粍銆�
   * @return (number): 杩斿洖鎬诲拰銆�
   */
  sum: function (array) {

    return array.reduce((a, b) => a + b)
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.summin 闄や簡瀹冩帴鍙� iteratee 鏉ヨ皟鐢� array涓殑姣忎竴涓厓绱狅紝鏉ョ敓鎴愬叾鍊兼帓搴忕殑鏍囧噯銆� iteratee 浼氳皟鐢�1涓弬鏁�: (value) 銆�
   * @param  array (Array): 瑕佽凯浠ｇ殑鏁扮粍銆�
   * @param  [iteratee=_.identity] (Function): 璋冪敤姣忎釜鍏冪礌鐨勮凯浠ｅ嚱鏁般€�
   * @return (number): 杩斿洖鎬诲拰銆�
   */
  sumBy: function (arr, iter) {
    if (this.isString(iter)) {
      var fn = this.property(iter)
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    return arr.map(a => fn(a)).reduce((a, b) => a + b)
  },
  /**
   * 杩斿洖闄愬埗鍦� lower 鍜� upper 涔嬮棿鐨勫€笺€�
   * @param  number (number): 琚檺鍒剁殑鍊笺€�
   * @param  [lower] (number): 涓嬮檺銆�
   * @param  upper (number): 涓婇檺
   * @return (number): 杩斿洖琚檺鍒剁殑鍊笺€�
   */
  clamp: function (num, low, upp) {

    return num > low ? (num > upp ? upp : num) : low
  },
  /**
   * 妫€鏌� n 鏄惁鍦� start 涓� end 涔嬮棿锛屼絾涓嶅寘鎷� end銆� 濡傛灉 end 娌℃湁鎸囧畾锛岄偅涔� start 璁剧疆涓�0銆� 濡傛灉 start 澶т簬 end锛岄偅涔堝弬鏁颁細浜ゆ崲浠ヤ究鏀寔璐熻寖鍥淬€�
   * @param  number (number): 瑕佹鏌ョ殑鍊笺€�
   * @param  [start=0] (number): 寮€濮嬭寖鍥淬€�
   * @param  end (number): 缁撴潫鑼冨洿銆�
   * @return (boolean): 濡傛灉number鍦ㄨ寖鍥村唴 锛岄偅涔堣繑鍥瀟rue锛屽惁鍒欒繑鍥� false銆�
   */
  inRange: function (number, start, end) {
    if (end === undefined) {
      end = start
      start = 0
    }
    number = Math.abs(number)
    start = Math.abs(start)
    end = Math.abs(end)
    return start <= number && number < end ? true : false
  },
  /**
   * 浜х敓涓€涓寘鎷� lower 涓� upper 涔嬮棿鐨勬暟銆� 濡傛灉鍙彁渚涗竴涓弬鏁拌繑鍥炰竴涓�0鍒版彁渚涙暟涔嬮棿鐨勬暟銆� 濡傛灉 floating 璁句负 true锛屾垨鑰� lower 鎴� upper 鏄诞鐐规暟锛岀粨鏋滆繑鍥炴诞鐐规暟銆�
   * @param  [lower=0] (number): 涓嬮檺銆�
   * @param  [upper=1] (number): 涓婇檺銆�
   * @param  [floating] (boolean): 鎸囧畾鏄惁杩斿洖娴偣鏁般€�
   * @return (number): 杩斿洖闅忔満鏁般€�
   */
  random: function (low, upp, float) {
    if (float === undefined) {
      if (upp === undefined) {
        upp = low
        low = 0
        float = false
      } else if (parseInt(upp) === upp) {
        float = false
      } else if (typeof upp !== 'number') {
        float = upp
        upp = low
        low = 0
      } else {
        float = true
      }
    }
    if (low === upp) {
      return low
    } else if (low > upp) {
      var temp = low
      low = upp
      upp = temp
    }
    var num
    var sym
    do {
      num = Math.random()
      sym = Math.random() > 0.5 ? 1 : -1
      if (low >= 0) {
        sym = 1
      }
      num = num * (Math.abs(low) > Math.abs(upp) ? Math.abs(low) : Math.abs(upp)) * sym
      num = float ? num : Math.round(num)
    } while (num < low || upp <= num)
    return num
  },
  /**
   * 鍒嗛厤鏉ユ簮瀵硅薄鐨勫彲鏋氫妇灞炴€у埌鐩爣瀵硅薄鎵€鏈夎В鏋愪负 undefined 鐨勫睘鎬т笂銆� 鏉ユ簮瀵硅薄浠庡乏鍒板彸搴旂敤銆� 涓€鏃﹁缃簡鐩稿悓灞炴€х殑鍊硷紝鍚庣画鐨勫皢琚拷鐣ユ帀銆�
   * @param  object (Object): 鐩爣瀵硅薄銆�
   * @param  [sources] (...Object): 鏉ユ簮瀵硅薄銆�
   * @return (Object): 杩斿洖 object銆�
   */
  defaults: function (obj) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (key in obj) {
          continue
        } else {
          obj[key] = arguments[i][key]
        }
      }
    }
    return obj
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.defaults锛岄櫎浜嗗畠浼氶€掑綊鍒嗛厤榛樿灞炴€с€�
   * @param  object (Object): 鐩爣瀵硅薄銆�
   * @param  [sources] (...Object): 鏉ユ簮瀵硅薄銆�
   * @return (Object): 杩斿洖 object銆�
   */
  defaultsDeep: function (obj) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (key in obj) {
          if (typeof obj[key] === 'object') {
            this.defaults(obj[key], arguments[i][key])
          } else {
            continue
          }
        } else {
          obj[key] = arguments[i][key]
        }
      }
    }
    return obj
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.find 銆� 闄や簡瀹冭繑鍥炴渶鍏堣 predicate 鍒ゆ柇涓虹湡鍊肩殑鍏冪礌 key锛岃€屼笉鏄厓绱犳湰韬€�
   * @param  object (Object): 闇€瑕佹绱㈢殑瀵硅薄銆�
   * @param  [predicate=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @return (*): 杩斿洖鍖归厤鐨� key锛屽惁鍒欒繑鍥� undefined銆�
   */
  findKey: function (colle, pred) {
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    for (var key in colle) {
      if (fn(colle[key])) {
        return key
      }
    }
  },
  /**
   * 杩欎釜鏂规硶绫讳技_.findKey銆� 涓嶈繃瀹冩槸鍙嶆柟鍚戝紑濮嬮亶鍘嗙殑銆�
   * @param  object (Object): 闇€瑕佹绱㈢殑瀵硅薄銆�
   * @param  [predicate=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @return (*): 杩斿洖鍖归厤鐨� key锛屽惁鍒欒繑鍥� undefined.
   */
  findLastKey: function (colle, pred) {
    if (this.isObject(pred)) {
      var fn = this.matches(pred)
    }
    if (this.isArray(pred)) {
      var fn = this.matchesProperty(...pred)
    }
    if (this.isString(pred)) {
      var fn = this.property(pred)
    }
    if (this.isFunction(pred)) {
      var fn = pred
    }
    var keys = Object.keys(colle)
    for (var i = keys.length - 1; i >= 0; i--) {
      if (fn(colle[keys[i]])) {
        return keys[i]
      }
    }
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.forIn銆� 闄や簡瀹冩槸鍙嶆柟鍚戝紑濮嬮亶鍘唎bject鐨勩€�
   * @param  object (Object): 瑕侀亶鍘嗙殑瀵硅薄銆�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @return (Object): 杩斿洖 object銆�
   */
  forInRight: function (obj, fn) {
    var keys = []
    for (var key in obj) {
      keys.push(key)
    }
    for (var i = keys.length - 1; i >= 0; i--) {
      if (obj[keys[i]]) {
        fn(obj[keys[i]], keys[i], obj)
      } else {
        break
      }
    }
    return obj
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.forOwn銆� 闄や簡瀹冩槸鍙嶆柟鍚戝紑濮嬮亶鍘唎bject鐨勩€�
   * @param  object (Object): 瑕侀亶鍘嗙殑瀵硅薄銆�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @return (Object): 杩斿洖 object銆�
   */
  forOwnRight: function (obj, iter) {
    var keys = Object.keys(obj)
    for (var i = keys.length - 1; i >= 0; i--) {
      if (iter(obj[keys[i]], keys[i], obj) === false) {
        break
      }
    }
    return obj
  },
  /**
   * 璋冪敤 iteratee n 娆★紝姣忔璋冪敤杩斿洖鐨勭粨鏋滃瓨鍏ュ埌鏁扮粍涓€� iteratee 璋冪敤鍏�1涓弬鏁帮細 (index)銆�
   * @param  n (number): 璋冪敤 iteratee 鐨勬鏁般€�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   * @return [iteratee=_.identity] (Function): 姣忔杩唬璋冪敤鐨勫嚱鏁般€�
   */
  times: function (n, iter) {
    var result = []
    for (var i = 0; i < n; i++) {
      result.push(iter(i))
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓繑鍥� value 鐨勫嚱鏁般€�
   * @param  value (*): 瑕佹柊鍑芥暟杩斿洖鐨勫€笺€�
   * @return (Function): 杩斿洖鏂扮殑甯搁噺鍑芥暟銆�
   */
  constant: function (value) {
    return function () {
      return value
    }
  },
  /**
   * 鍒涘缓涓€涓嚱鏁板睘鎬у悕绉扮殑鏁扮粍锛屽嚱鏁板睘鎬у悕绉版潵鑷猳bject瀵硅薄鑷韩鍙灇涓惧睘鎬с€�
   * @param  object (Object): 瑕佹鏌ョ殑瀵硅薄銆�
   * @return (Array): 杩斿洖鍑芥暟鍚嶃€�
   */
  functions: function (obj) {
    return Object.keys(obj)
  },
  functionsIn: function (obj) {
    var result = []
    for (var keys in obj) {
      result.push(keys)
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓嚱鏁板睘鎬у悕绉扮殑鏁扮粍锛屽嚱鏁板睘鎬у悕绉版潵鑷猳bject瀵硅薄鑷韩鍜岀户鎵跨殑鍙灇涓惧睘鎬с€�
   * @param  object (Object): 瑕佹鏌ョ殑瀵硅薄銆�
   * @return (Array): 杩斿洖鍑芥暟鍚嶃€�
   */
  functionsIn: function (obj) {
    var result = []
    for (var keys in obj) {
      result.push(keys)
    }
    return result
  },
  /**
   * 鏍规嵁 object瀵硅薄鐨刾ath璺緞鑾峰彇鍊笺€� 濡傛灉瑙ｆ瀽 value 鏄� undefined 浼氫互 defaultValue 鍙栦唬銆�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @param  path (Array|string): 瑕佽幏鍙栧睘鎬х殑璺緞銆�
   * @param  [defaultValue] (*): 濡傛灉瑙ｆ瀽鍊兼槸 undefined 锛岃繖鍊间細琚繑鍥炪€�
   * @return (*): 杩斿洖瑙ｆ瀽鐨勫€笺€�
   */
  get: function (obj, path, defaults) {
    var temp = [],
      start = 0,
      end = 1,
      result
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    if (obj.hasOwnProperty(temp[0])) {
      result = obj[temp[0]]
    }
    for (var i = 1; i < temp.length; i++) {
      if (temp[i] in result) {
        result = result[temp[i]]
      } else {
        return defaults
      }
    }
    if (result === undefined) {
      return defaults
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓户鎵� prototype 鐨勫璞°€� 濡傛灉鎻愪緵浜� prototype锛屽畠鐨勫彲鏋氫妇灞炴€т細琚垎閰嶅埌鍒涘缓鐨勫璞′笂銆�
   * @param  prototype (Object): 瑕佺户鎵跨殑瀵硅薄銆�
   * @param  [properties] (Object): 寰呭垎閰嶇殑灞炴€с€�
   * @return (Object): 杩斿洖鏂板璞°€�
   */
  create: function (proto, prop) {
    var result = {}
    Object.setPrototypeOf(result, proto)
    if (prop) {
      for (var key in prop) {
        result[key] = prop[key]
      }
    }
    return result
  },
  /**
   * 妫€鏌� path 鏄惁鏄痮bject瀵硅薄鐨勭洿鎺ュ睘鎬с€�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @param  path (Array|string): 瑕佹鏌ョ殑璺緞path銆�
   * @return (boolean): 濡傛灉path瀛樺湪锛岄偅涔堣繑鍥� true 锛屽惁鍒欒繑鍥� false銆�
   */
  has: function (obj, path) {
    if (this.get(obj, path, 'undefined') === 'undefined') {
      return false
    }
    return true
  },
  /**
   * 妫€鏌� path 鏄惁鏄痮bject瀵硅薄鐨勭洿鎺ユ垨缁ф壙灞炴€с€�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @param  path (Array|string): 瑕佹鏌ョ殑璺緞path銆�
   * @return (boolean): 濡傛灉path瀛樺湪锛岄偅涔堣繑鍥� true 锛屽惁鍒欒繑鍥� false銆�
   */
  hasIn: function (obj, path) {
    //debugger
    var temp = [],
      start = 0,
      end = 1
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    return theIn(obj, temp, 0)

    function theIn(obj, arr, index) {
      if (index >= arr.length) {
        return true
      }
      if (arr[index] in obj) {
        return theIn(obj[arr[index]], arr, index + 1)
      } else {
        return false
      }
    }
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.invert锛岄櫎浜嗗€掔疆瀵硅薄 鏄� collection锛堥泦鍚堬級涓殑姣忎釜鍏冪礌缁忚繃 iteratee锛堣凯浠ｅ嚱鏁帮級 澶勭悊鍚庤繑鍥炵殑缁撴灉銆傛瘡涓弽杞敭鐩稿簲鍙嶈浆鐨勫€兼槸涓€涓礋璐ｇ敓鎴愬弽杞€糼ey鐨勬暟缁勩€�
   * @param  object (Object): 瑕侀敭鍊煎€掔疆瀵硅薄銆�
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @return (Object): 杩斿洖鏂扮殑閿€煎€掔疆鍚庣殑瀵硅薄銆�
   */
  invertBy: function (obj, iter) {
    var result = {},
      theKey
    if (iter === undefined) {
      var fn = function (obj) {
        return obj
      }
    }
    if (this.isFunction(iter)) {
      var fn = iter
    }
    for (keys in obj) {
      theKey = fn(obj[keys])
      if (!(theKey in result)) {
        result[theKey] = []
      }
      result[theKey].push(keys)
    }
    return result
  },
  /**
   * 璋冪敤object瀵硅薄path涓婄殑鏂规硶銆�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @param  path (Array|string): 鐢ㄦ潵璋冪敤鐨勬柟娉曡矾寰勩€�
   * @param  [args] (...*): 璋冪敤鐨勬柟娉曠殑鍙傛暟銆�
   * @return (*): 杩斿洖璋冪敤鏂规硶鐨勭粨鏋溿€�
   */
  invoke: function (obj, path, ...args) {
    //debugger
    var temp = [],
      start = 0,
      end = 1
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    result = obj[temp[0]]
    for (var i = 1; i < temp.length - 1; i++) {
      result = result[temp[i]]
    }
    return result[temp[temp.length - 1]](...args)
  },
  /**
   * 鍙嶅悜鐗� _.pick; 杩欎釜鏂规硶涓€涓璞★紝杩欎釜瀵硅薄鐢卞拷鐣ュ睘鎬т箣澶栫殑object鑷韩鍜岀户鎵跨殑鍙灇涓惧睘鎬х粍鎴愩€�
   * @param  object (Object): 鏉ユ簮瀵硅薄銆�
   * @param  [props] (...(string|string[])): 瑕佽蹇界暐鐨勫睘鎬�
   * @return (Object): 杩斿洖鏂板璞°€�
   */
  omit: function (obj, prop) {
    var temp = [],
      start = 0,
      end = 1,
      result = {}
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = prop
    }
    for (var key in obj) {
      result[key] = obj[key]
    }
    for (var i = 0; i < temp.length; i++) {
      if ((temp[i] in obj) && (obj.hasOwnProperty(temp[i]))) {
        delete result[temp[i]]
      }
    }
    return result
  },
  /**
   * 鍙嶅悜鐗� _.pickBy锛涜繖涓柟娉曚竴涓璞★紝杩欎釜瀵硅薄蹇界暐 predicate锛堟柇瑷€鍑芥暟锛夊垽鏂笉鏄湡鍊肩殑灞炴€у悗锛宱bject鑷韩鍜岀户鎵跨殑鍙灇涓惧睘鎬х粍鎴愩€�
   * @param  object (Object): 鏉ユ簮瀵硅薄銆�
   * @param  [predicate=_.identity] (Function): 璋冪敤姣忎竴涓睘鎬х殑鍑芥暟銆�
   * @return (Object): 杩斿洖鏂板璞°€�
   */
  omitBy: function (obj, pred) {
    var result = {}
    for (var key in obj) {
      result[key] = obj[key]
    }
    for (var key in obj) {
      if (pred(obj[key])) {
        delete result[key]
      }
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.get锛� 闄や簡濡傛灉瑙ｆ瀽鍒扮殑鍊兼槸涓€涓嚱鏁扮殑璇濓紝灏辩粦瀹� this 鍒拌繖涓嚱鏁板苟杩斿洖鎵ц鍚庣殑缁撴灉銆�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @param  path (Array|string): 瑕佽В鏋愮殑灞炴€ц矾寰勩€�
   * @param  [defaultValue] (*): 濡傛灉鍊艰В鏋愪负 undefined锛岃繑鍥炶繖涓€笺€�
   * @return (*): 杩斿洖瑙ｆ瀽鍚庣殑鍊笺€�
   */
  result: function (obj, path, defaults) {
    var temp = [],
      start = 0,
      end = 1,
      result
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    if (obj.hasOwnProperty(temp[0])) {
      result = obj[temp[0]]
    }
    for (var i = 1; i < temp.length; i++) {
      if (temp[i] in result) {
        result = result[temp[i]]
      } else {
        if (typeof defaults === 'function') {
          return defaults()
        }
        return defaults
      }
    }
    if (result === undefined) {
      if (typeof defaults === 'function') {
        return defaults()
      }
      return defaults
    }
    if (typeof result === 'function') {
      var self = this
      return result.call(self)
    }
    return result
  },
  /**
   * 璁剧疆 object瀵硅薄涓搴� path 灞炴€ц矾寰勪笂鐨勫€硷紝濡傛灉path涓嶅瓨鍦紝鍒欏垱寤恒€� 缂哄皯鐨勭储寮曞睘鎬т細鍒涘缓涓烘暟缁勶紝鑰岀己灏戠殑灞炴€т細鍒涘缓涓哄璞°€� 浣跨敤 _.setWith 瀹氬埗path鍒涘缓銆�
   * @param object (Object): 瑕佷慨鏀圭殑瀵硅薄銆�
   * @param path (Array|string): 瑕佽缃殑瀵硅薄璺緞銆�
   * @param value (*): 瑕佽缃殑鍊笺€�
   * @return (Object): 杩斿洖 object銆�
   */
  set: function (obj, path, value) {
    debugger
    var temp = [],
      start = 0,
      end = 1
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    theIn(obj, temp, 0, value)
    return obj

    function theIn(obj, arr, index, value) {
      if (index >= arr.length - 1) {
        obj[arr[index]] = value
        return obj
      }
      if (arr[index] in obj) {
        return theIn(obj[arr[index]], arr, index + 1, value)
      } else if (arr[index + 1] === '0') {
        obj[arr[index]] = []
        return theIn(obj[arr[index]], arr, index + 1, value)
      } else {
        obj[arr[index]] = {}
        return theIn(obj[arr[index]], arr, index + 1, value)
      }
    }
  },
  /**
   * 杩欎釜鏂规硶绫讳技_.set锛岄櫎浜嗗畠鎺ュ彈涓€涓� customizer锛岃皟鐢ㄧ敓鎴愬璞＄殑 path銆� 濡傛灉 customizer 杩斿洖 undefined 灏嗕細鏈夊畠鐨勫鐞嗘柟娉曚唬鏇�
   * @param object (Object): 瑕佷慨鏀圭殑瀵硅薄
   * @param path (Array|string): 瑕佽缃殑瀵硅薄璺緞銆�
   * @param value (*): 瑕佽缃殑鍊笺€�
   * @return (Object): 杩斿洖 object銆�
   */
  setWith: function (obj, path, value, cust) {
    debugger
    var temp = [],
      start = 0,
      end = 1
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[start] === '[') {
          start++
          end++
        }
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    theIn(obj, temp, 0, value)
    return obj

    function theIn(obj, arr, index, value) {
      if (index >= arr.length - 1) {
        obj[arr[index]] = value
        return obj
      }
      if (arr[index] in obj) {
        return theIn(obj[arr[index]], arr, index + 1, value)
      } else {
        obj[arr[index]] = cust()
        return theIn(obj[arr[index]], arr, index + 1, value)
      }
    }
  },
  /**
   * 鍒涘缓涓€涓猳bject瀵硅薄鑷韩鍙灇涓惧睘鎬х殑閿€煎鏁扮粍銆傝繖涓暟缁勫彲浠ラ€氳繃_.fromPairs鎾ゅ洖銆傚鏋渙bject 鏄� map 鎴� set锛岃繑鍥炲叾鏉＄洰銆�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @return (Array): 杩斿洖閿€煎鐨勬暟缁勩€�
   */
  toPairs: function (obj) {
    if (this.isMap(obj) || this.isSet(obj)) {
      return obj
    }
    var result = [],
      temp = []
    for (var key in obj) {
      temp = []
      if (obj.hasOwnProperty(key)) {
        temp.push(key)
        temp.push(obj[key])
        result.push(temp)
      }
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓猳bject瀵硅薄鑷韩鍜岀户鎵跨殑鍙灇涓惧睘鎬х殑閿€煎鏁扮粍銆傝繖涓暟缁勫彲浠ラ€氳繃_.fromPairs鎾ゅ洖銆傚鏋渙bject 鏄� map 鎴� set锛岃繑鍥炲叾鏉＄洰銆�
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @return (Array): 杩斿洖閿€煎鐨勬暟缁勩€�
   */
  toPairsIn: function (obj) {
    if (this.isMap(obj) || this.isSet(obj)) {
      return obj
    }
    var result = [],
      temp = []
    for (var key in obj) {
      temp = []
      temp.push(key)
      temp.push(obj[key])
      result.push(temp)
    }
    return result
  },
  /**
   * 鍒涘缓涓€涓璞★紝杩欎釜瀵硅薄缁勬垚涓轰粠 object 涓粡 predicate 鍒ゆ柇涓虹湡鍊肩殑灞炴€с€�
   * @param  object (Object): 鏉ユ簮瀵硅薄銆�
   * @param  [predicate=_.identity] (Function): 璋冪敤姣忎竴涓睘鎬х殑鍑芥暟銆�
   * @return (Object): 杩斿洖鏂板璞°€�
   */
  pickBy: function (obj, iter) {
    var result = {}
    for (keys in obj) {
      if (iter(obj[keys])) {
        result[keys] = obj[keys]
      }
    }
    return result
  },
  /**
   * _.reduce鐨勬浛浠ｆ柟娉�;姝ゆ柟娉曞皢杞崲object瀵硅薄涓轰竴涓柊鐨刟ccumulator瀵硅薄锛岀粨鏋滄潵鑷猧teratee澶勭悊鑷韩鍙灇涓剧殑灞炴€с€�
   * @param  object (Object): 瑕侀亶鍘嗙殑瀵硅薄
   * @param  [iteratee=_.identity] (Function): 姣忔杩唬鏃惰皟鐢ㄧ殑鍑芥暟銆�
   * @param  [accumulator] (*): 瀹氬埗鍙犲姞鐨勫€笺€�
   * @return (*): 杩斿洖鍙犲姞鍚庣殑鍊笺€�
   */
  transform: function (colle, iter, acc) {
    var theKey = Object.keys(colle)
    var start = 0
    if (acc === undefined) {
      acc = colle[theKey[0]]
      start = 1
    }
    for (var i = start; i < theKey.length; i++) {
      if (iter(acc, colle[theKey[i]], theKey[i], colle) === false) {
        break
      }
    }
    return acc
  },
  /**
   * 绉婚櫎object瀵硅薄 path 璺緞涓婄殑灞炴€с€�
   * @param  object (Object): 瑕佷慨鏀圭殑瀵硅薄銆�
   * @param  path (Array|string): 瑕佺Щ闄ょ殑瀵硅薄璺緞銆�
   * @return (boolean): 濡傛灉绉婚櫎鎴愬姛锛岄偅涔堣繑鍥� true 锛屽惁鍒欒繑鍥� false銆�
   */
  unset: function (obj, path) {
    var temp = [],
      start = 0,
      end = 1
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    return theIn(obj, temp, 0)

    function theIn(obj, arr, index) {
      if (index >= arr.length - 1) {
        return delete obj[arr[index]]
      }
      if (arr[index] in obj) {
        return theIn(obj[arr[index]], arr, index + 1)
      } else if (arr[index + 1] === '0') {
        obj[arr[index]] = []
        return theIn(obj[arr[index]], arr, index + 1)
      } else {
        obj[arr[index]] = {}
        return theIn(obj[arr[index]], arr, index + 1)
      }
    }
  },
  /**
   * 璇ユ柟娉曠被浼糭.set锛岄櫎浜嗘帴鍙梪pdater浠ョ敓鎴愯璁剧疆鐨勫€笺€備娇鐢� _.updateWith鏉ヨ嚜瀹氫箟鐢熸垚鐨勬柊path銆倁pdater璋冪敤1涓弬鏁帮細(value)銆�
   * @param  object (Object): 瑕佷慨鏀圭殑瀵硅薄銆�
   * @param  path (Array|string): 瑕佽缃睘鎬х殑璺緞銆�
   * @param  updater (Function): 鐢ㄦ潵鐢熸垚璁剧疆鍊肩殑鍑芥暟銆�
   * @return (Object): 杩斿洖 object 銆�
   */
  update: function (obj, path, updater) {
    var temp = [],
      start = 0,
      end = 1
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    theIn(obj, temp, 0, updater)
    return obj

    function theIn(obj, arr, index, updater) {
      if (index >= arr.length - 1) {
        obj[arr[index]] = updater(obj[arr[index]])
        return obj
      }
      if (arr[index] in obj) {
        return theIn(obj[arr[index]], arr, index + 1, updater)
      } else if (arr[index + 1] === '0') {
        obj[arr[index]] = []
        return theIn(obj[arr[index]], arr, index + 1, updater)
      } else {
        obj[arr[index]] = {}
        return theIn(obj[arr[index]], arr, index + 1, updater)
      }
    }
  },
  /**
   * 璇ユ柟娉曠被浼糭.update锛屼笉鍚屼箣澶勫湪浜庡畠鎺ュ彈customizer锛岃皟鐢ㄦ潵鐢熸垚鏂扮殑瀵硅薄鐨刾ath銆�
   * @param  object (Object): 瑕佷慨鏀圭殑瀵硅薄銆�
   * @param  path (Array|string): 瑕佽缃睘鎬х殑璺緞銆�
   * @param  updater (Function): 鐢ㄦ潵鐢熸垚璁剧疆鍊肩殑鍑芥暟銆�
   * @param  [customizer] (Function): 鐢ㄦ潵鑷畾涔夊垎閰嶅€肩殑鍑芥暟銆�
   * @return (Object): 杩斿洖 object.
   */
  updateWith: function (obj, path, updater, cust) {
    var temp = [],
      start = 0,
      end = 1
    if (typeof path === 'string') {
      while (start < path.length) {
        if (path[start] === '[') {
          start++
          end++
        }
        if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
          temp.push(path.slice(start, end))
          end++
          start = end
        } else if (path[end] === ']') {
          temp.push(path.slice(start, end))
          end += 2
          start = end
        } else {
          end++
        }
      }
    } else {
      temp = path
    }
    theIn(obj, temp, 0, updater)
    return obj

    function theIn(obj, arr, index, updater) {
      if (index >= arr.length - 1) {
        obj[arr[index]] = updater(obj[arr[index]])
        return obj
      }
      if (arr[index] in obj) {
        return theIn(obj[arr[index]], arr, index + 1, updater)
      } else {
        obj[arr[index]] = cust()
        return theIn(obj[arr[index]], arr, index + 1, updater)
      }
    }
  },
  /**
   * 鍒涘缓 object 鑷韩鍜岀户鎵跨殑鍙灇涓惧睘鎬х殑鍊间负鏁扮粍
   * @param  object (Object): 瑕佹绱㈢殑瀵硅薄銆�
   * @return (Array): 杩斿洖瀵硅薄灞炴€х殑鍊肩殑鏁扮粍銆�
   */
  valuesIn: function (obj) {
    var result = []
    for (keys in obj) {
      result.push(obj[keys])
    }
    return result
  },
  /**
   * 杞箟string涓殑 "&", "<", ">", '"', "'", 鍜� "`" 瀛楃涓篐TML瀹炰綋瀛楃銆�
   * @param  [string=''] (string): 瑕佽浆涔夌殑瀛楃涓层€�
   * @return (string): 杩斿洖杞箟鍚庣殑瀛楃涓层€�
   */
  escape: function (str) {
    var result = str.split("").map(function (a) {
      switch (a) {
        case '&':
          return '&amp;'
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '"':
          return '&quot;'
        case "'":
          return '&apos'
        default:
          return a
      }
    }).
    reduce((a, b) => a.concat(b))
    return result
  },
  /**
   * 杞箟 RegExp 瀛楃涓蹭腑鐗规畩鐨勫瓧绗� "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 鍜� "|" 銆�
   * @param  [string=''] (string): 瑕佽浆涔夌殑瀛楃涓层€�
   * @return (string): 杩斿洖杞箟鍚庣殑瀛楃涓层€�
   */
  escapeRegExp: function (str) {
    return str.split("").map(function (a) {
      switch (a) {
        case '^':
          return '\\^'
        case '$':
          return '\\$'
        case '.':
          return '\\.'
        case '*':
          return '\\*'
        case '+':
          return '\\+'
        case '?':
          return '\\?'
        case '(':
          return '\\('
        case ')':
          return '\\)'
        case '[':
          return '\\['
        case ']':
          return '\\]'
        case '{':
          return '\\{'
        case '}':
          return '\\}'
        case '|':
          return '\\|'
        default:
          return a

      }
    }).
    reduce((a, b) => a.concat(b))
  },
  /**
   * 杞崲string瀛楃涓蹭负鎸囧畾鍩烘暟鐨勬暣鏁般€�
   * @param  string (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * @param  [radix=10] (number):杞崲鍩烘暟銆�
   * @return (number): 杩斿洖杞崲鍚庣殑鏁存暟銆�
   */
  parseInt: function (str, radix) {
    radix = radix ? radix : 10
    var temp = str.split("")
    var result = []
    if (temp[0] !== '-' && typeof (+temp[0]) !== 'number') {
      return NaN
    } else {
      result.push(temp[0])
    }
    for (var i = 1; i < temp.length; i++) {
      if (typeof (+temp[i]) === 'number') {
        result.push(temp[i])
      } else {
        break
      }
    }
    return +result.join("")
  },
  /**
   * 鏇挎崲string瀛楃涓蹭腑鍖归厤鐨刾attern涓虹粰瀹氱殑replacement 銆�
   * @param  [string=''] (string): 寰呮浛鎹㈢殑瀛楃涓层€�
   * @param  pattern (RegExp|string): 瑕佸尮閰嶇殑鍐呭銆�
   * @param  replacement (Function|string): 鏇挎崲鐨勫唴瀹广€�
   * @return (string): 杩斿洖鏇挎崲鍚庣殑瀛楃涓�
   */
  replace: function (str, pattern, replace) {
    var result = [],
      start = 0
    for (var i = 0; i < str.length; i++) {
      if (str[i] === pattern[0]) {
        if (str.slice(i, i + pattern.length) === pattern) {
          result.push(str.slice(start, i))
          result.push(replace)
          i = i + pattern.length - 1
          start = i + 1
        }
      }
    }
    result.push(str.slice(start, str.length))
    result = result.join("")
    return result
  },
  /**
   * 鏍规嵁separator 鎷嗗垎瀛楃涓瞫tring銆�
   * @param  [string=''] (string): 瑕佹媶鍒嗙殑瀛楃涓层€�
   * @param  separator (RegExp|string): 鎷嗗垎鐨勫垎闅旂銆�
   * @param  [limit] (number): 闄愬埗缁撴灉鐨勬暟閲忋€�
   * @return (Array): 杩斿洖鎷嗗垎閮ㄥ垎鐨勫瓧绗︿覆鐨勬暟缁勩€�
   */
  split: function (str, separ, limit) {
    var result = [],
      start = 0
    for (var i = 0; i < str.length; i++) {
      if (str[i] === separ[0]) {
        if (str.slice(i, i + separ.length) === separ) {
          result.push(str.slice(start, i))
          i = i + separ.length - 1
          start = i + 1
        }
      }
      if (result.length >= limit) {
        return result
      }
    }
    result.push(str.slice(start, str.length))
    return result
  },
  /**
   * 杞崲 string 瀛楃涓蹭负 start case.
   * @param  [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * @return (string): 杩斿洖杞崲鍚庣殑瀛楃涓层€�
   */
  startCase: function (str) {
    debugger
    var temp = str.split("")
    if (('A'.charCodeAt() <= temp[0].charCodeAt() && temp[0].charCodeAt() <= 'Z'.charCodeAt()) || ('a'.charCodeAt() <= temp[0].charCodeAt() && temp[0].charCodeAt() <= 'z'.charCodeAt())) {
      temp.splice(0, 1, temp[0].toUpperCase())
    }
    for (var i = 0; i < temp.length - 1; i++) {
      if (!(('A'.charCodeAt() <= temp[i].charCodeAt() && temp[i].charCodeAt() <= 'Z'.charCodeAt()) || ('a'.charCodeAt() <= temp[i].charCodeAt() && temp[i].charCodeAt() <= 'z'.charCodeAt())) && (('A'.charCodeAt() <= temp[i + 1].charCodeAt() && temp[i + 1].charCodeAt() <= 'Z'.charCodeAt()) || ('a'.charCodeAt() <= temp[i + 1].charCodeAt() && temp[i + 1].charCodeAt() <= 'z'.charCodeAt()))) {
        temp.splice(i + 1, 1, temp[i + 1].toUpperCase())
      }
      if (((temp[i].charCodeAt() < 'A'.charCodeAt() || 'Z'.charCodeAt() < temp[i].charCodeAt())) && (('A'.charCodeAt() <= temp[i + 1].charCodeAt() && temp[i + 1].charCodeAt() <= 'Z'.charCodeAt()))) {
        temp.splice(i + 1, 0, ' ')
        i++
      }
    }
    for (var i = temp.length - 1; i >= 0; i--) {
      if (!(('A'.charCodeAt() <= temp[i].charCodeAt() && temp[i].charCodeAt() <= 'Z'.charCodeAt()) || ('a'.charCodeAt() <= temp[i].charCodeAt() && temp[i].charCodeAt() <= 'z'.charCodeAt())) && temp[i] !== ' ') {
        temp.splice(i, 1)
      }
    }
    for (var i = 0; i < temp.length; i++) {
      if (temp[i] !== ' ') {
        break
      } else {
        temp.splice(i, 1)
        i--
      }
    }
    var result = temp.join("")
    return result
  },
  /**
   * 妫€鏌ュ瓧绗︿覆string鏄惁浠� target 寮€澶淬€�
   * @param  [string=''] (string): 瑕佹绱㈢殑瀛楃涓层€�
   * @param  [target] (string): 瑕佹鏌ョ殑瀛楃涓层€�
   * @param  [position=0] (number): 妫€绱㈢殑浣嶇疆銆�
   * @return (boolean): 濡傛灉string浠� target锛岄偅涔堣繑鍥瀟rue锛屽惁鍒欒繑鍥� false 銆�
   */
  startsWith: function (str, target, pos) {
    if (pos === undefined) {
      pos = 0
    }
    if (str.indexOf(target) === pos) {
      return true
    } else {
      return false
    }
  },
  /**
   * 杞崲鏁翠釜string瀛楃涓茬殑瀛楃涓哄皬鍐欙紝绫讳技 String#toLowerCase銆�
   * @param  [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * @return (string): 杩斿洖灏忓啓鐨勫瓧绗︿覆銆�
   */
  toLower: function (str) {

    return str.toLowerCase()
  },
  /**
   * 杞崲鏁翠釜string瀛楃涓茬殑瀛楃涓哄ぇ鍐欙紝绫讳技 String#toUpperCase.
   * @param  [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * @return (string): 杩斿洖澶у啓鐨勫瓧绗︿覆銆�
   */
  toUpper: function (str) {
    return str.toUpperCase()
  },
  /**
   * 浠巗tring瀛楃涓蹭腑绉婚櫎鍓嶉潰鍜屽悗闈㈢殑 绌烘牸 鎴� 鎸囧畾鐨勫瓧绗︺€�
   * @param  [string=''] (string): 瑕佸鐞嗙殑瀛楃涓层€�
   * @param  [chars=whitespace] (string): 瑕佺Щ闄ょ殑瀛楃銆�
   * @return (string): 杩斿洖澶勭悊鍚庣殑瀛楃涓层€�
   */
  trim: function (str, char) {
    if (char === undefined) {
      char = " "
    }
    var temp = str.split("")
    for (var i = 0; i < temp.length; i++) {
      if (char.indexOf(temp[i]) >= 0) {
        temp.splice(i, 1)
        i--
      } else {
        break
      }
    }
    for (var i = temp.length - 1; i >= 0; i--) {
      if (char.indexOf(temp[i]) >= 0) {
        temp.splice(i, 1)
      } else {
        break
      }
    }
    var result = temp.join("")
    return result
  },
  /**
   * 浠巗tring瀛楃涓蹭腑绉婚櫎鍚庨潰鐨� 绌烘牸 鎴� 鎸囧畾鐨勫瓧绗︺€�
   * @param  [string=''] (string): 瑕佸鐞嗙殑瀛楃涓层€�
   * @param  [chars=whitespace] (string): 瑕佺Щ闄ょ殑瀛楃銆�
   * @return (string): 杩斿洖澶勭悊鍚庣殑瀛楃涓层€�
   */
  trimEnd: function (str, char) {
    if (char === undefined) {
      char = " "
    }
    var temp = str.split("")
    for (var i = temp.length - 1; i >= 0; i--) {
      if (char.indexOf(temp[i]) >= 0) {
        temp.splice(i, 1)
      } else {
        break
      }
    }
    var result = temp.join("")
    return result
  },
  /**
   * 浠巗tring瀛楃涓蹭腑绉婚櫎鍓嶉潰鐨� 绌烘牸 鎴� 鎸囧畾鐨勫瓧绗︺€�
   * @param  [string=''] (string): 瑕佸鐞嗙殑瀛楃涓层€�
   * @param  [chars=whitespace] (string): 瑕佺Щ闄ょ殑瀛楃銆�
   * @return (string): 杩斿洖澶勭悊鍚庣殑瀛楃涓层€�
   */
  trimStart: function (str, char) {
    if (char === undefined) {
      char = " "
    }
    var temp = str.split("")
    for (var i = 0; i < temp.length; i++) {
      if (char.indexOf(temp[i]) >= 0) {
        temp.splice(i, 1)
        i--
      } else {
        break
      }
    }
    var result = temp.join("")
    return result
  },
  trimStart: function (str, char) {
    if (char === undefined) {
      char = ' '
    }
    var temp = str.split("")
    for (var i = 0; i < temp.length; i++) {
      if (char.indexOf(temp[i]) >= 0) {
        temp.splice(i, 1)
        i--
      } else {
        break
      }
    }
    var result = temp.join("")
    return result
  },
  /**
   * 鎴柇string瀛楃涓诧紝濡傛灉瀛楃涓茶秴鍑轰簡闄愬畾鐨勬渶澶у€笺€� 琚埅鏂殑瀛楃涓插悗闈細浠� omission 浠ｆ浛锛宱mission 榛樿鏄� "..."銆�
   * @param  [string=''] (string): 瑕佹埅鏂殑瀛楃涓层€�
   * @param  [options={}] (Object): 閫夐」瀵硅薄銆�
   * @param  [options.length=30] (number): 鍏佽鐨勬渶澶ч暱搴︺€�
   * @param  [options.omission='...'] (string): 瓒呭嚭鍚庣殑浠ｆ浛瀛楃銆�
   * @param  [options.separator] (RegExp|string): 鎴柇鐐广€�
   * @return (string): Returns the truncated string.
   */
  truncate: function (str, options) {
    if (options === undefined) {
      options = {}
      options.length = 30
      options.omission = '...'
    }
    if (!('length' in options)) {
      options.length = 30
    }
    if (!('omission' in options)) {
      options.omission = '...'
    }
    var temp = str.split("")
    if ('separator' in options) {
      if (this.isRegExp(options.separator)) {
        var theReg = new RegExp(options.separator, "g")
        var tmp = str.match(theReg)
        var theChar = tmp[tmp.length - 1]
      } else {
        var theChar = options.separator
      }
      for (var i = str.length - 1; i >= 0; i--) {
        if (theChar[0] === str[i] && theChar === str.slice(i, theChar.length + i)) {
          temp.length = i
          break
        }
      }
      temp.push(options.omission)

    }
    if (temp.length > options.length) {
      temp.length = options.length - 3
      temp.push(options.omission)

    }

    var result = temp.join("")
    return result
  },
  /**
   * _.escape鐨勫弽鍚戠増銆� 杩欎釜鏂规硶杞崲string瀛楃涓蹭腑鐨� HTML 瀹炰綋 &amp;, &lt;, &gt;, &quot;, &#39;, 鍜� &#96; 涓哄搴旂殑瀛楃銆�
   * @param  [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * @return (string): 杩斿洖杞崲鍚庣殑瀛楃涓层€�
   */
  unescape: function (str) {
    debugger
    var temp = str.split("")
    for (var i = 0, j = 0; i < str.length; i++, j++) {
      if (str[i] === '&') {
        do {
          j++
          if (str[j] === ';') {
            var theChar = str.slice(i, j + 1)
            temp.splice(i, j - i + 1, char(theChar))
            i = j
            break
          }
        } while (j < str.length)
      }
    }
    var result = temp.join("")
    return result

    function char(a) {
      switch (a) {
        case '&amp;':
          return '&'
        case '&lt;':
          return '<'
        case '&gt;':
          return '>'
        case '&quot;':
          return '"'
        case '&apos':
          return "'"
        default:
          return a
      }
    }
  },
  /**
   * 杞崲瀛楃涓瞫tring涓� 绌烘牸 鍒嗛殧鐨勫ぇ鍐欏崟璇嶃€�
   * @param  [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * @return (string): 杩斿洖澶у啓鍗曡瘝銆�
   */
  upperCase: function (str) {
    return this.startCase(str).toUpperCase()
  },
  /**
   * 杞崲瀛楃涓瞫tring鐨勯瀛楁瘝涓哄ぇ鍐欍€�
   * @param  [string=''] (string): 瑕佽浆鎹㈢殑瀛楃涓层€�
   * @return (string): 杩斿洖杞崲鍚庣殑瀛楃涓层€�
   */
  upperFirst: function (str) {
    var temp = str.split("")
    temp[0] = temp[0].toUpperCase()
    var result = temp.join("")
    return result
  },
  /**
   * 鎷嗗垎瀛楃涓瞫tring涓殑璇嶄负鏁扮粍 銆�
   * @param  [string=''] (string): 瑕佹媶鍒嗙殑瀛楃涓层€�
   * @param  [pattern] (RegExp|string): 鍖归厤妯″紡銆�
   * @return (Array): 杩斿洖鎷嗗垎string鍚庣殑鏁扮粍銆�
   */
  words: function (str, pattern) {
    if (pattern === undefined) {
      var flag = 0,
        result = []
      for (var i = 0; i < str.length; i++, flag++) {
        if (('A'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'Z'.charCodeAt()) || ('a'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'z'.charCodeAt())) {
          do {
            flag++
            if (flag === str.length || !(('A'.charCodeAt() <= str[flag].charCodeAt() && str[flag].charCodeAt() <= 'Z'.charCodeAt()) || ('a'.charCodeAt() <= str[flag].charCodeAt() && str[flag].charCodeAt() <= 'z'.charCodeAt()))) {
              var theChar = str.slice(i, flag)
              result.push(theChar)
              flag--
              i = flag
              break
            }
          } while (flag < str.length)
        }
      }
    } else {
      return str.match(pattern)
    }
    return result
  },
  /**
   * 缁戝畾涓€涓璞＄殑鏂规硶鍒板璞℃湰韬紝瑕嗙洊鐜版湁鐨勬柟娉曘€�
   * @param  object (Object): 鐢ㄦ潵缁戝畾鍜屽垎閰嶇粦瀹氭柟娉曠殑瀵硅薄銆�
   * @param  methodNames (...(string|string[])): 瀵硅薄缁戝畾鏂规硶鐨勫悕绉般€�
   * @return (Object): 杩斿洖 object.
   */
  bindAll: function (obj, method) {
    var temp = []
    if (typeof method === 'string') {
      temp.push(method)
    } else {
      temp = method
    }
    for (var i = 0; i < temp.length; i++) {
      obj[temp[i]].bind(obj)
    }
  },
  /**
   * 鍒涘缓涓€涓寘鍚粠 start 鍒� end锛屼絾涓嶅寘鍚� end 鏈韩鑼冨洿鏁板瓧鐨勬暟缁勩€� 濡傛灉 start 鏄礋鏁帮紝鑰� end 鎴� step 娌℃湁鎸囧畾锛岄偅涔� step 浠� -1 涓哄紑濮嬨€� 濡傛灉 end 娌℃湁鎸囧畾锛宻tart 璁剧疆涓� 0銆� 濡傛灉 end 灏忎簬 start 锛屼細鍒涘缓涓€涓┖鏁扮粍锛岄櫎闈炴寚瀹氫簡 step銆�
   * @param  [start=0] (number): 寮€濮嬬殑鑼冨洿銆�
   * @param  end (number): 缁撴潫鐨勮寖鍥淬€�
   * @param  [step=1] (number): 鑼冨洿鐨勫閲� 鎴栬€� 鍑忛噺銆�
   * @return (Array): 杩斿洖鑼冨洿鍐呮暟瀛楃粍鎴愮殑鏂版暟缁勩€�
   */
  range: function (start, end, step) {
    var result = []
    if (start < 0 && end === undefined) {
      step = -1
    }
    if (end === undefined) {
      end = start
      start = 0

    }
    if (end < start && step === undefined) {
      return []
    }
    if (step === undefined) {
      step = 1
    }
    var count = 0
    if (end >= start) {
      for (var i = start; i < end && count < end - start; i += step) {
        result.push(i)
        count++
      }
    } else {
      for (var i = start; i > end && count < start - end; i += step) {
        result.push(i)
        count++
      }
    }
    return result
  },
  /**
   * 杩欎釜鏂规硶绫讳技 _.range 锛� 闄や簡瀹冩槸闄嶅簭鐢熸垚鍊肩殑銆�
   * @param  [start=0] (number): 寮€濮嬬殑鑼冨洿銆�
   * @param  end (number): 缁撴潫鐨勮寖鍥淬€�
   * @param  [step=1] (number):鑼冨洿鐨勫閲� 鎴栬€� 鍑忛噺銆�
   * @return (Array): 杩斿洖鑼冨洿鍐呮暟瀛楃粍鎴愮殑鏂版暟缁勩€�
   */
  rangeRight: function (start, end, step) {
    var result = []
    if (start < 0 && end === undefined) {
      step = -1
    }
    if (end === undefined) {
      end = start
      start = 0

    }
    if (end < start && step === undefined) {
      return []
    }
    if (step === undefined) {
      step = 1
    }
    var count = 0
    if (end >= start) {
      for (var i = start; i < end && count < end - start; i += step) {
        result.unshift(i)
        count++
      }
    } else {
      for (var i = start; i > end && count < start - end; i += step) {
        result.unshift(i)
        count++
      }
    }
    return result
  },
  /**
   * 灏嗗瓧绗︿覆杞崲涓虹數璇濇嫧鍙风洏鏁板瓧
   * @param  {[string]} str [闇€瑕佽浆鎹㈢殑瀛楃涓瞉
   * @return {[string]}     [杞崲鍚庣殑鏁板瓧瀛楃涓瞉
   */
  dellTo3355: function (str) {
    return str.split("").map(charToDigit).join("")

    function charToDigit(char) {
      var lowerChar = char.toLowerCase()

      if (lowerChar <= 'c') {
        return 2
      }

      if (lowerChar <= 'f') {
        return 3
      }

      if (lowerChar <= 'i') {
        return 4
      }

      if (lowerChar <= 'l') {
        return 5
      }

      if (lowerChar <= 'o') {
        return 6
      }

      if (lowerChar <= 's') {
        return 7
      }

      if (lowerChar <= 'v') {
        return 8
      }

      if (lowerChar <= 'z') {
        return 9
      }
    }
  },
  /**
   * 鍒ゅ畾涓€涓暟鏄笉鏄礌鏁�
   * @param  {[number]}  num [琚垽瀹氭暟]
   * @return {Boolean}     [鐪熷亣]
   */
  isPrime: function (num) {
    var isIPrime
    if (num % 2 === 0) {
      return false
    }
    for (var i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  },
  /**
   * [鎻愬彇涓€瀹氳寖鍥村唴鐨勬墍鏈夌礌鏁癩
   * @param  {[n]} n [鑼冨洿涓嬮檺]
   * @param  {[m]} m [鑼冨洿涓婇檺]
   * @return {[array]}   [鎻愬彇鍑虹殑绱犳暟]
   */
  'n - m 涔嬮棿鐨勭礌鏁�': function (n, m) {

    return new Array(m - n + 1).fill(0).map(a => n++).filter(isPrime)
  }

}













  // core function ==========================

  /**
   * 分配一个或多个被分配对象可自身可枚举属性，到目标对象上，
   * 分配的属性会覆盖目标对象身上的同名属性
   * @param  {object} obj     目标属性
   * @param  {...object} args 被分配的对象
   * @return {object}         分配后的目标对象
   */
t.assign = function (obj, ...sources) {
    let that = this
    this.forEach(sources, function (a) {
      that.forOwn(a, function (element, key) {
        obj[key] = element
      })
    })
    return obj
  }

  /**
   * 分配一个或者多个被分配对象自身 或者 继承到的 可枚举属性，到目标对象上，
   * 分配的属性会覆盖目标身上的同名属性
   * @param  {object} obj      目标属性
   * @param  {...sources} args 被分配的对象
   * @return {object}          分配后的目标对象
   */
t.assignIn = function (obj, ...sources) {
    this.forEach(sources, function (a) {
      for (let key in a) {
        obj[key] = a[key]
      }
    })
    return obj
  }

  /**
   * 类似 assignIn 但接收一个 customizer
   * @param {object} object 目标对象
   * @param {...object} args 被分配的对象
   * @param {function} customizer 处理函数
   * @returns
   */
t.assignInWith = function (object, ...args) {
    let sources, customizer
    if (this.isFunction(args[args.length - 1])) {
      customizer = args.pop()
    } else {
      customizer = function (objValue, srcValue) {
        return srcValue
      }
    }
    this.forEach(args, function (it, i, array) {
      for (let key in it) {
        object[key] = customizer(object[key], it[key], key, object, array)
      }
    })
    return object
  }

  /**
   * 类似 assignIn 但接收一个 customizer
   * @param {object} object 目标对象
   * @param {...object} args 被分配的对象
   * @param {function} customizer 处理函数
   * @returns
   */
t.assignWith = function (object, ...args) {
    let sources, customizer
    if (this.isFunction(args[args.length - 1])) {
      customizer = args.pop()
    } else {
      customizer = function (objValue, srcValue) {
        return srcValue
      }
    }
    this.forEach(args, function (it, i, array) {
      for (let key in it) {
        if (it.hasOwnProperty(key)) {
          object[key] = customizer(object[key], it[key], key, object, array)
        }
      }
    })
    return object
  }

  /**
   * 限制函数的调用的函数，让函数只能被调用有限次数（n 次）
   * 当 限制次数为 0 时，被限制的函数不会被调用， 返回 undefined
   * @param  {number} n      指定被限制调用的次数
   * @param  {function} func 指定被限制调用的函数
   * @return {function}      新的被限制调用的函数
   */
t.before = function (n, func) {
    let count = 0
    let result
    return function (...arg) {
      count++
      if (count <= n) {
        result = func(...arg)
      }
      return result
    }
  }

  /**
   * 绑定 this 和部分参数给 被调用函数，
   * 使得 func 在 绑定的 this 的上下文环境被调用，并固定部分参数
   * @param  {function}  func     被绑定的函数
   * @param  {*} thisArg          被绑定函数执行的上下文
   * @param  {...*}  partials     被绑定的参数
   * @return {function}           绑定后的新函数
   */
t.bind = function (func, thisArg, ...partials) {
    let that = this
    return function (...args) {
      partials = that.map(partials, function (a) {
        if (a === _) {
          a = args.shift()
        }
        return a
      })
      return func.call(thisArg, ...partials, ...args)
    }
  }

  /**
   * 检查传入的值是不是一个 arguments 对象
   * @param  {*}  value      被检查的对象
   * @return {Boolean}       如果是 arguments 对象，返回 true
   */
t.isArguments = function (value) {
    return toString.call(value) === '[object Arguments]'
  }

  /**
   * 检查传入的值是不是一个 数组
   * @param  {*}  value      被检查的对象
   * @return {Boolean}       如果是 对象，返回 true
   */
t.isArray = function (value) {
    return toString.call(value) === '[object Array]'
  }

  /**
   * 检查一个值是不是 ArrayBuffer 对象
   * @param  {*}  value      需要检查的值
   * @return {Boolean}       如果是 ArrayBuffer 对象，返回 true
   */
t.isArrayBuffer = function (value) {
    return toString.call(value) === '[object ArrayBuffer]'
  }

  /**
   * 检查一个对象是否是类数组对象，包括 string ，（string 含有 length 属性，函数不是类数组对象）
   * @param  {*}  value      被检查的对象
   * @return {Boolean}       如果是 类数组对象，返回 true
   */
t.isArrayLike = function (value) {
    return !!((typeof value === 'object' || typeof value === 'string') &&
      isFinite(value.length) &&
      Number.isInteger(value.length) &&
      value.length >= 0 &&
      value.length <= Number.MAX_SAFE_INTEGER)
  }

  /**
   * 检查一个对象是否是类数组对象，不包括 string 和 function
   * @param  {*}  value      被检查的对象
   * @return {Boolean}       如果是 类数组对象，返回 true
   */
t.isArrayLikeObject = function (value) {
    return !!(typeof value === 'object' &&
      isFinite(value.length) &&
      Number.isInteger(value.length) &&
      value.length >= 0 &&
      value.length <= Number.MAX_SAFE_INTEGER)
  }

  /**
   * 检查 传入的值 是否是布尔值
   * @param  {*}  value      被检查的对象
   * @return {Boolean}       如果是布尔值。返回 true
   */
t.isBoolean = function (value) {
    return toString.call(value) === '[object Boolean]'
  }

  /**
   * 检查 传入的值是否是 buffer
   * @param  {*}  value      被检查的对象
   * @return {Boolean}       如果是 buffer 对象，返回 true
   */
t.isBuffer = function (value) {
    return toString.call(value) === '[object Uint8Array]'
  }

  /**
   * 检查一个对象是否是 日期对象
   * @param  {*}  value      被检查的对象
   * @return {Boolean}       如果是 Date 对象，返回 true
   */
t.isDate = function (value) {
    return toString.call(value) === '[object Date]'
  }

  /**
   * 检查一个值 是否是 DOM 元素
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果是 DOM 元素，返回 true
   */
t.isElement = function (value) {
    return /Element\]$/.test(toString.call(value))
  }

  /**
   * 检查一个值是不是 空对象
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果是空对象，返回 true
   */
t.isEmpty = function (value) {
    if (value === null) {
      return true
    }
    if (value.length && value.length === 0) {
      return true
    } else if (value.size && value.size === 0) {
      return true
    } else if (Object.keys(value) && Object.keys(value).length === 0) {
      return true
    }
    return false
  }

  /**
   * 检查值是否是有限数
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果是有限数，返回 true
   */
t.isFinite = function (value) {
    return Number.isFinite(value)
  }

  /**
   * 检查值是否是 函数对象
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果是函数对象，返回 true
   */
t.isFunction = function (value) {
    return toString.call(value) === '[object Function]'
  }

  /**
   * 判断一个值是不是 NaN，实例 NaN 对象也会正常判断，
   * 出数字外其他类型值判断返回 false
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果是 NaN 对象，返回 true
   */
t.isNaN = function (value) {
    if ((typeof value === 'number' || value instanceof Number) && +value !== +value) {
      return true
    }
    return false
  }

  /**
   * 检查一个值 是不是 null
   * @param  {*}  value      被检查的对象
   * @return {Boolean}       如果是 null，返回 true
   */
t.isNull = function (value) {
    return toString.call(value) === '[object Null]'
  }

  /**
   * 判断一个值是不是数字类型
   * @param  {*}  value      被检查的数
   * @return {Boolean}       如果是 数字，返回 true
   */
t.isNumber = function (value) {
    return toString.call(value) === '[object Number]'
  }

  /**
   * 检查一个值 是否是 对象，null 返回 false
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果该值继承自对象，返回 true
   */
t.isObject = function (value) {
    return value instanceof Object
  }

  /**
   * 这个方法返回 undefined
   * @return undefined
   */
t.noop = function () {
    return void 0
  }

  /**
   * 调用迭代器 n 次，并将调用的结果以数组的形式返回，
   * 迭代器只传一个参数：循环的指针数
   * @param  {number} n          需要调用的次数
   * @param  {function} iteratee 被调用的迭代器
   * @return {array}             迭代出的结果集
   */
t.times = function (n, iteratee = this.identity) {
    let result = []
    for (let i = 0; i < n; i++) {
      result.push(iteratee(i))
    }
    return result
  }

  /**
   * 返回接收到的第一个参数
   * @param  {*} value 任何值
   * @return {*}       返回值
   */
t.identity = function (value) {
    return value
  }

  /**
   * 创建一个返回值的函数
   * @param  {*} value      被新函数返回的值
   * @return {function}     新的函数
   */
t.constant = function (value) {
    return function () {
      return value
    }
  }

  /**
   * 检查一个值是否是正则表达式
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果是正则表达式，返回 true
   */
t.isRegExp = function (value) {
    return toString.call(value) === '[object RegExp]'
  }

  /**
   * 检查一个值是否是字符串
   * @param  {*}  value 被检查的值
   * @return {Boolean}       如果是字符串，返回 true
   */
t.isString = function (value) {
    return toString.call(value) === '[object String]'
  }

  /**
   * 判断一个值是不是 未定义的值
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果是 未定义 undefined ，返回 true
   */
t.isUndefined = function (value) {
    return toString.call(value) === '[object Undefined]'
  }

  /**
   * 将两个值进行深度比较，确定他们是否相等
   * This method supports comparing
   * arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays.
   * Object objects are compared by their own, not inherited, enumerable properties.
   * Functions and DOM nodes are compared by strict equality, i.e. ===.
   * @param  {*}  value      被检查的值
   * @param  {[type]}  other 去比较的值
   * @return {Boolean}       如果两个值深度相等，返回 true
   */
t.isEqual = function (value, other) {
    if (value === other) {
      return true
    }
    if (this.isRegExp(value) && this.isRegExp(other)) {
      return '' + value === '' + other
    }
    if (this.isNumber(value) && this.isNumber(other)) {
      return +value === +other
    }
    if (this.isString(value) && this.isString(other)) {
      return '' + value === '' + other
    }
    if (this.isBoolean(value) && this.isBoolean(other)) {
      return !!value === !!other
    }
    if (this.isError(value) && this.isError(other)) {
      return value.message === other.message
    }
    if (this.isDate(value) && this.isDate(other)) {
      return '' + value === '' + other
    }
    if (this.isSymbol(value) && this.isSymbol(other)) {
      return value.name === other.name
    }
    if (this.isFunction(value) && this.isFunction(other)) {
      return value === other
    }
    if (this.isElement(value) && this.isElement(other)) {
      return value === other
    }
    if ((this.isArray(value) && this.isArray(other)) ||
      (this.isArrayBuffer(value) && this.isArrayBuffer(other)) ||
      (this.isMap(value) && this.isMap(other)) ||
      (this.isPlainObject(value) && this.isPlainObject(other)) ||
      (this.isSet(value) && this.isSet(other)) ||
      (this.isArrayLike(value) && this.isArrayLike(other)) ||
      (this.isArrayLikeObject(value) && this.isArrayLikeObject(other)) ||
      (this.isBuffer(value) && this.isBuffer(other))
    ) {
      let size = Object.keys(value)
      if (size.length === 0 && Object.keys(other).length === 0) {
        return true
      }
      if (size.length === Object.keys(other).length) {
        let onOff = true
        for (let i = 0; i < size.length; i++) {
          if (!this.isEqual(value[size[i]], other[size[i]])) {
            onOff = false
            break
          }
        }
        return onOff
      }
    }
    return false
  }

  /**
   * 判断一个值是不是 error 对象
   * @param  {*}  value      被判断的值
   * @return {Boolean}       如果是 error 对象，返回 true
   */
t.isError = function (value) {
    return toString.call(value) === '[object Error]'
  }

  /**
   * 判断一个值是不是 Symbol 对象
   * @param  {*}  value      被判断的值
   * @return {Boolean}       如果是 Symbol 对象，返回 true
   */
t.isSymbol = function (value) {
    return toString.call(value) === '[object Symbol]'
  }

  /**
   * 判断一个值是不是 Map 对象
   * @param  {*}  value      被判断的值
   * @return {Boolean}       如果是 Map 对象，返回 true
   */
t.isMap = function (value) {
    return toString.call(value) === '[object Map]'
  }

  /**
   * 判断一个值是不是 WeakMap 对象
   * @param  {*}  value      被判断的值
   * @return {Boolean}       如果是 WeakMap 对象，返回 true
   */
t.isWeakMap = function (value) {
    return toString.call(value) === '[object WeakMap]'
  }

  /**
   * 根据参数重载，如果参数是属性名（字符串形式），返回 返回对应的属性值 的回调函数
   * 如果参数是数组（长度为 2 的一维 键值对），返回 返回布尔值 的回调函数
   * 如果参数是对象 ，返回布尔值
   * @param  {string | array | object} func 选择回调函数的参数
   * @return {function}                     返回该回调函数
   */
t.iteratee = function (func = this.identity) {
    //debugger
    if (this.isString(func)) {
      return this.property(func)
    }
    if (this.isArray(func)) {
      return this.matchesProperty(func[0], func[1])
    }
    if (this.isPlainObject(func)) {
      return this.matches(func)
    }
    if (this.isFunction(func)) {
      return func
    }
  }

  /**
   * 将第一个参数作为包装函数的第一个参数，将提供给新建函数的其他参数追加到函数里，
   * 并绑定 this 与包装器相同
   * @param  {*} value        被封装的值
   * @param  {[type]} wrapper 封装函数
   * @return {[type]}         被封装后的新函数
   */
t.wrap = function (value, wrapper = this.identity) {
    return this.bind(wrapper, this, value)
  }

  /**
   * 将字符串中的 '&' '<' '>' "'" '"' 转换成对应的 HTML 实体
   * @param  {string} string 待转换的字符串
   * @return {string}        转换后的字符串
   */
t.escape = function (string = '') {
    return string.replace(/[\&\<\>\'\"]/g, function (char) {
      switch (char) {
        case '&':
          return '&amp;'
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case "'":
          return '&acute;'
        case '"':
          return '&quot;'
        default:
          return ''
      }
    })
  }

  /**
   * 创建一个包含所给对象所有的可枚举自有属性的数组
   * @param  {object} object 被枚举的对象
   * @return {array}         包含所给对象的所有可枚举自有属性的数组
   */
t.keys = function (object) {
    let obj = Object(object)
    let result = []
    this.forOwn(object, function (value, key) {
      result.push(key)
    })
    return result
  }

  /**
   * 创建一个包含所给对象所有的可枚举属性的数组
   * @param  {object} object 被枚举的对象
   * @return {array}         包含所给对象的所有可枚举自有属性的数组
   */
t.keysIn = function (object) {
    let result = []
    for (let key in object) {
      result.push(key)
    }
    return result
  }

  /**
   * 返回数组的最后一项的值
   * @param  {array} array  被查询的数组
   * @return {*}            该数组最后一项的值
   */
t.last = function (array) {
    return array[array.length - 1]
  }

  /**
   * 返回一个函数，执行对象和给定参数的深度对比，
   * 如果对象具有等效的属性。返回 true
   * @param  {object} source 需要对比的参数
   * @return {function}      返回新的函数
   */
t.matches = function (source) {
    let that = this
    return function (it) {
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          if (!that.isEqual(source[key], it[key])) {
            return false
          }
        }
      }
      return true
    }
  }

  /**
   * 创建一个函数，根据指定的路径和值来判断对象，如果等值，则返回 true
   * @param  { array | string } path     用于比较的路径
   * @param  {*} srcValue                用于比较的值
   * @return {function}                  返回新的函数
   */
t.matchesProperty = function (path, srcValue) {
    let prop
    if (this.isString(path)) {
      prop = path.match(/\w+/g)
    }
    if (this.isArray(path)) {
      prop = path
    }
    let that = this
    return function (it) {
      return that.isEqual(that.reduce(prop, function (memo, curr) {
        return memo = memo[curr]
      }, it), srcValue)
    }
  }

  /**
   * 迭代集合元素，返回第一个 返回 true 的元素
   * @param  {array | object} collection                被迭代的集合
   * @param  {function} [predicate=this.identity]       判定条件
   * @param  {Number} [fromIndex=0]                     判定起始位置
   * @return {*}                                        第一个判定成功的元素
   */
t.find = function (collection, predicate = this.identity, fromIndex = 0) {
    for (let key in collection) {
      if (this.isArray(collection)) {
        if (key < fromIndex) {
          continue
        }
      }
      if (collection.hasOwnProperty(key)) {
        if (this.iteratee(predicate)(collection[key], key, collection)) {
          return collection[key]
        }
      }
    }
  }

  /**
   * 迭代集合元素，返回第一个 返回 true 的元素键名
   * @param  {array | object} collection                被迭代的集合
   * @param  {function} [predicate=this.identity]       判定条件
   * @param  {Number} [fromIndex=0]                     判定起始位置
   * @return {*}                                        第一个判定成功的元素的键名
   */
t.findKey = function (collection, predicate = this.identity) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (this.iteratee(predicate)(collection[key], key, collection)) {
          return key
        }
      }
    }
  }

  /**
   * 创建一个返回给定对象路径的值的函数
   * @param  {array | string} path 查找的路径
   * @return {function}       创建的新的函数
   */
t.property = function (path) {
    let prop
    if (this.isString(path)) {
      prop = path.match(/\w+/g)
    }
    if (this.isArray(path)) {
      prop = path
    }
    let that = this
    return function (it) {
      return that.reduce(prop, function (memo, curr) {
        return memo = memo[curr]
      }, it)
    }
  }

  /**
   * 返回一个以升序排序后的数组
   * @param  {array} collection                    被排序的对象
   * @param  {Array}  [iteratee=[ this.identity ]] 判断条件集合
   * @return {array}                               排序后的新数组
   */
t.sortBy = function (collection, iteratee = [this.identity]) {
    let that = this
    let result = []
    for (let i = 0; i < collection.length; i++) {
      result.push(this.assign({}, collection[i]))
    }
    if (this.isFunction(iteratee)) {
      result.sort(function (a, b) {
        return that.iteratee(iteratee)(a) > that.iteratee(iteratee)(b)
      })
    } else {
      for (let i = 0; i < iteratee.length; i++) {
        result.sort(function (a, b) {
          return that.iteratee(iteratee[i])(a) > that.iteratee(iteratee[i])(b)
        })
      }
    }
    return result
  }

  /**
   * 迭代集合的每一个元素，通过调用 iteratee 返回一个新的数组
   * @param  {array | object} collection    被迭代的集合
   * @param  {function | string} iteratee   用于迭代的函数
   * @return {array}                        返回一个新数组
   */
t.map = function (collection, iteratee) {
    let result = []
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (this.isString(iteratee)) {
          result.push(this.property(iteratee)(collection[key], key, collection))
        } else if (this.isFunction(iteratee)) {
          result.push(iteratee(collection[key], key, collection))
        }
      }
    }
    return result
  }

  /**
   * 迭代集合元素，返回成员调用断言函数后为 true 的数组
   * @param  {array | object} collection                     被迭代的对象
   * @param  {function | object | array | string} predicate  断言
   * @return {array}                                         筛选后的新数组
   */
t.filter = function (collection, predicate) {
    let result = []
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (this.iteratee(predicate)(collection[key], key, collection)) {
          result.push(collection[key])
        }
      }
    }
    return result
  }

  /**
   * 判断一个值是不是纯对象
   * 纯对象为 Object 构造函数构造出来的对象或 原型对象为 null 的对象
   * @param  {*}  value      被检查的值
   * @return {Boolean}       如果是纯对象，返回 true
   */
t.isPlainObject = function (value) {
    return value.constructor === Object || Object.getPrototypeOf(value) === null
  }

  /**
   * 计算数组的最大值，如果 array 为空或者 false，返回 undefined
   * @param  {array} array 需要判断的数组
   * @return {*}           最大值
   */
t.max = function (array) {
    if (this.isEmpty(array) || !array) {
      return void 0
    }
    return this.reduce(array, function (memo, curr) {
      return memo > curr ? memo : curr
    })
  }

  /**
   * 计算数组的最小值，如果 array 为空或者 false，返回 undefined
   * @param  {array} array 需要判断的数组
   * @return {*}           最小值
   */
t.min = function (array) {
    if (this.isEmpty(array) || !array) {
      return void 0
    }
    return this.reduce(array, function (memo, curr) {
      return memo < curr ? memo : curr
    })
  }

  /**
   * 创建一个否定 func 结果的函数，并绑定 this
   * @param  {function} predicate 被否定的函数
   * @return {function}           新建的函数
   */
t.negate = function (predicate) {
    return function (...arg) {
      return !predicate(...arg)
    }
  }

  /**
   * 创建一个限制多次调用 func 的函数，对于重复调用 func，只返回 第一次调用的值
   * @param  {function} func 被限制的函数
   * @return {function}      限制后的函数
   */
t.once = function (func) {
    return this.before(1, func.bind(this))
  }

  /**
   * 创建由选取的对象属性组成的对象
   * @param  {object} object         被选取的对象
   * @param  {string | array} paths  选取条件
   * @return {object}                新的对象
   */
t.pick = function (object, paths) {
    let arr
    if (this.isString(paths)) {
      arr = [paths]
    } else {
      arr = paths
    }
    let result = {}
    for (let i = 0; i < arr.length; i++) {
      result[arr[i]] = object[arr[i]]
    }
    return result
  }

  /**
   * 将集合由 iteratee 迭代成一个值
   * @param  {array | object} collection               被迭代的集合
   * @param  {function} [iteratee=this.identity]       迭代器
   * @param  {*} accumulator                           初始值
   * @return {*}                                       迭代出来的值
   */
t.reduce = function (collection, iteratee = this.identity, accumulator) {
    let keys = Object.keys(collection)
    let result = accumulator !== undefined ? accumulator : collection[keys[0]]
    for (let i = accumulator !== undefined ? 0 : 1; i < keys.length; i++) {
      result = iteratee(result, collection[keys[i]], keys[i], collection)
    }
    return result
  }

  /**
   * 通过给定路径返回给定对象的值，如果值是函数，返回调用的结果
   * 如果返回值是 undefined ，返回 defaultValue
   * @param  {object} object               被查找的对象
   * @param  {array | string} path         查找的路径
   * @param  {*} defaultValue              替代返回值是 undefined 的值
   * @return {*}                           得到的值
   */
t.result = function (object, path, defaultValue) {
    let result = this.property(path)(object)
    result = result === undefined ? defaultValue : result
    if (this.isFunction(result)) {
      return result.call(this)
    }
    return result
  }

  /**
   * 返回 集合的大小
   * @param  {array | string | object} collection 被统计的对象
   * @return {number}                             统计后的大小
   */
t.size = function (collection) {
    let count = 0
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        count++
      }
    }
    return count
  }

  /**
   * 提取数组片段
   * @param  {array} array               被提取的数组
   * @param  {Number} [start=0]          提取起始位置
   * @param  {number} [end=array.length] 提取结束位置（不包括）
   * @return {array}                     被提取的数组
   */
t.slice = function (array, start = 0, end = array.length) {
    let result = []
    for (let i = start; i < end; i++) {
      if (array[i] !== undefined) {
        result.push(array[i])
      }
    }
    return result
  }

  /**
   * 使用迭代器检查集合成员是否满足条件，一旦满足，返回 true
   * @param  {array | object} collection                被检查的对象
   * @param  {function} [predicate=this.identity]       迭代器
   * @return {boolean}                                  一旦满足，返回 true
   */
t.some = function (collection, predicate = this.identity) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (this.iteratee(predicate)(collection[key], key, collection)) {
          return true
        }
      }
    }
    return false
  }

  /**
   * 将值转换为数组
   * @param  {*} value      需要被转换的值
   * @return {array}        返回转换后的数组
   */
t.toArray = function (value) {
    let result = []
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        result.push(value[key])
      }
    }
    return result
  }

  /**
   * 生成唯一的 ID，如果有前缀，附上前缀
   * @param  {*} value      前缀
   * @return {array}        ID
   */
t.uniqueId = (function () {
    let uniqueIdCount = 0
    return function (prefix = '') {
      uniqueIdCount++
      return prefix + uniqueIdCount
    }
  })()

  /**
   * 浅复制两值，并返回
   * @param  {*} value 被复制的值
   * @return {*}       复制后的值
   */
t.clone = function (value) {
    let result
    if (this.isDate(value)) {
      return new Date(value.toString())
    } else if (this.isRegExp(value)) {
      return new RegExp(value)
    } else if (this.isSymbol(value) || this.isString(value) || this.isBoolean(value) || this.isNumber(value)) {
      return value
    } else if (this.isArray(value)) {
      result = new Array()
    } else if (this.isArrayBuffer(value)) {
      result = new ArrayBuffer()
    } else if (this.isMap(value)) {
      result = new Map()
    } else if (this.isPlainObject(value)) {
      result = new Object()
    } else if (this.isSet(value)) {
      result = new Set()
    } else {
      return {}
    }
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        result[key] = value[key]
      }
    }
    return result
  }

  /**
   * 深度复制
   * @param  {*} value  被复制的值
   * @return {*}        复制后的值
   */
t.cloneDeep = function (value) {
    let result
    if (this.isDate(value)) {
      return new Date(value.toString())
    } else if (this.isRegExp(value)) {
      return new RegExp(value)
    } else if (this.isSymbol(value) || this.isString(value) || this.isBoolean(value) || this.isNumber(value)) {
      return value
    } else if (this.isArray(value)) {
      result = new Array()
    } else if (this.isArrayBuffer(value)) {
      result = new ArrayBuffer()
    } else if (this.isMap(value)) {
      result = new Map()
    } else if (this.isPlainObject(value)) {
      result = new Object()
    } else if (this.isSet(value)) {
      result = new Set()
    } else {
      return {}
    }

    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        result[key] = this.cloneDeep(value[key])
      }
    }
    return result
  }

  /**
   * 判断一个值是不是 Set
   * @param  {*}  value 需要判断的值
   * @return {Boolean}  如果是 返回 true
   */
t.isSet = function (value) {
    return toString.call(value) === '[object Set]'
  }

  /**
   * 创建一个删除所有可隐式为 false 的元素的数组
   * @param  {array} array  被筛选的数组
   * @return {array}        新的数组
   */
t.compact = function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }

  /**
   * 连接值和数组
   * @param  {array} array   被连接的数组
   * @param  {...*} values   需要连接的数组
   * @return {array}         连接后的数组
   */
t.concat = function (array, ...values) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      result.push(array[i])
    }
    for (let i = 0; i < values.length; i++) {
      if (this.isArray(values[i])) {
        for (let j = 0; j < values[i].length; j++) {
          result.push(values[i][j])
        }
      } else {
        result.push(values[i])
      }
    }
    return result
  }

  /**
   * 创建一个从原型继承的对象，如果给出属性，
   * 该属性的可枚举自有属性会被分配给创建的对对象
   * @param  {object} prototype  继承的对象
   * @param  {object} properties 需要分配的属性
   * @return {object}            返回新的对象
   */
t.create = function (prototype, properties) {
    let obj = new Object()
    Object.setPrototypeOf(obj, prototype)
    if (properties) {
      for (let key in properties) {
        if (properties.hasOwnProperty(key)) {
          obj[key] = properties[key]
        }
      }
    }
    return obj
  }

  /**
   * 将源对象的可枚举自有属性分配到目标对象上，
   * 目标对象上已有的键值不能被覆盖
   * @param  {object} object     目标对象
   * @param  {...object} sources 源对象
   * @return {object}            修改后的目标对象
   */
t.defaults = function (object, ...sources) {
    sources.forEach(function (obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key) && !(key in object)) {
          object[key] = obj[key]
        }
      }
    })
    return object
  }


  /**
   * 递归分配属性
   * 目标对象上已有的键值不能被覆盖
   * @param  {object} object     目标对象
   * @param  {...object} sources 源对象
   * @return {object}            修改后的目标对象
   */
t.defaultsDeep = function (object, ...sources) {
    sources.forEach(function (obj) {
      for (let key in obj) {
        if (typeof object[key] === 'object' && typeof obj[key] === 'object') {
          defaultsDeep(object[key], obj[key])
        } else if (obj.hasOwnProperty(key) && !(key in object)) {
          object[key] = obj[key]
        }
      }
    })
    return object
  }

  /**
   * 等待当前调用栈清空后调用函数，并可以传给该函数参数
   * @param  {function} func 被调用函数
   * @param  {...*} args     传入的参数
   * @return {number}        id
   */
t.defer = function (func, ...args) {
    return setTimeout(func.bind(this, ...args, 0))
  }

  /**
   * 延时调用函数
   * @param  {function} func 延时调用函数
   * @param  {number} wait   延时时间
   * @param  {...*} args     传入函数的参数
   * @return {number}        id
   */
t.delay = function (func, wait, ...args) {
    return setTimeout(func.bind(this, ...args), wait)
  }

  /**
   * 使用迭代器迭代集合
   * @param  {array | object} collection          被迭代的集合
   * @param  {function} [iteratee=identity]        迭代器
   * @return {*}                                   返回值
   */
t.each = function (collection, iteratee = this.identity) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (iteratee(collection[key], key, collection) === false) {
          return collection
        }
      }
    }
    return collection
  }

  /**
   * 迭代器迭代集合，当所有迭代结果都为 true 时，返回 true
   * @param  {array | object} collection                被迭代的集合
   * @param  {function} [predicate=this.identity]       迭代器
   * @return {boolean}                                  如果所有成员迭代结果都为 true ，返回 true
   */
t.every = function (collection, predicate = this.identity) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (this.iteratee(predicate)(collection[key], key, collection) === false) {
          return false
        }
      }
    }
    return true
  }

  /**
   * 将数组降一维
   * @param  {array} array 待降维数组
   * @return {array}       降维后的数组
   */
t.flatten = function (array) {
    let result = []
    let that = this
    array.forEach(function (it) {
      if (that.isArray(it)) {
        it.forEach(function (a) {
          result.push(a)
        })
      } else {
        result.push(it)
      }
    })
    return result
  }

  /**
   * 将数组将为一维数组
   * @param  {array} array 待降维数组
   * @return {array}       降维后的一维数组
   */
t.flattenDeep = function (array) {
    let result = this.flatten(array)
    let onOff = true
    for (let i = 0; i < result.length; i++) {
      if (this.isArray(result[i])) {
        onOff = false
        break
      }
    }
    if (!onOff) {
      result = this.flattenDeep(result)
    }
    return result
  }

  /**
   * 判断给定路径是否在对象自身上存在，且可枚举
   * @param  {object}  object         被查找的对象
   * @param  {array | string}  path   给定的路径
   * @return {Boolean}                如果存在，返回 true
   */
t.has = function (object, path) {
    let prop
    if (this.isString(path)) {
      prop = path.match(/\w+/g)
    } else {
      prop = path
    }
    let temp = object
    for (let i = 0; i < prop.length; i++) {
      if (temp.hasOwnProperty(prop[i])) {
        temp = temp[prop[i]]
      } else {
        return false
      }
    }
    return true
  }

  /**
   * 返回数组的第一项
   * @param  {array} array 被查询的数组
   * @return {*}           数组中的第一个成员
   */
t.head = function (array) {
    return array[0]
  }

t.indexOf = function (array, value, fromIndex = 0) {
    let len = array.length
    if (fromIndex >= 0) {
      for (; fromIndex < len; fromIndex++) {
        if (this.isEqual(array[fromIndex], value)) {
          break
        }
      }
    } else {
      for (fromIndex = len + fromIndex; fromIndex >= 0; fromIndex--) {
        if (this.isEqual(array[fromIndex], value)) {
          break
        }
      }
    }
    return fromIndex < len ? fromIndex : -1
  }

  /**
   * 遍历对象的可枚举自有属性
   * @param  {object} object     被迭代的对象
   * @param  {function} iteratee 对对象每个成员进行调用的函数
   * @return {object}            返回一个对象
   */
t.forOwn = function (object, iteratee = this.identity) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        if (iteratee(object[key], key, object) === false) {
          break
        }
      }
    }
  }

  // base function ================================

  /**
   * 创建一个新数组，将原数组分组
   * @param  {array} array     原数组
   * @param  {Number} [size=1] 每组长度
   * @return {array}           新的数组
   */
t.chunk = function (array, size = 1) {
    //debugger
    return this.reduce(array, function (memo, curr, index) {
      if (index % size === 0) {
        memo.push([curr])
      } else {
        memo[memo.length - 1].push(curr)
      }
      return memo
    }, [])
  }

  /**
   * 创建一个新数组，其成员是被比较数组中的成员，且不在对比数组中的值
   * @param  {array} array     被比较数组
   * @param  {...array} values 比较数组
   * @return {array}           返回新的数组
   */
t.difference = function (array, ...values) {
    return this.differenceBy(array, ...values)
  }

  /**
   * 类似于 difference 为每个值调用 iteratee ，在进行比较
   * @param  {array} array                  被比较数组
   * @param  {...array} values              比较数组
   * @param  {function} iteratee=_.identity 调用的函数
   * @return {array}           返回新的数组
   */
t.differenceBy = function (array, ...others) {
    let iteratee
    let that = this
    if (!this.isArray(others[others.length - 1])) {
      iteratee = others.pop()
    } else {
      iteratee = this.identity
    }
    let flat = this.map(this.flatten(others), it => this.iteratee(iteratee)(it))
    return this.reduce(array, function (memo, curr) {
      if (!that.includes(flat, that.iteratee(iteratee)(curr))) {
        memo.push(curr)
      }
      return memo
    }, [])
  }

  /**
   * 类似于 difference 自定义比较方式在进行比较
   * @param  {array} array                    被比较数组
   * @param  {...array} values                比较数组
   * @param  {function} comparator            调用的函数
   * @return {array}                          返回新的数组
   */
t.differenceWith = function (array, ...others) {
    let that = this
    let comparator = others.pop()
    let flat = this.flatten(others)
    return this.reduce(array, function (memo, curr) {
      that.each(flat, function (a) {
        if (!comparator.call(that, a, curr)) {
          memo.push(curr)
        }
      })
      return memo
    }, [])
  }

  /**
   * 检查一个值事都在集合中
   * @param  {array | object | string} collection    被比较的集合
   * @param  {*} value                               检查的值
   * @param  {Number} [fromIndex=0]                  查找的索引
   * @return {booleam}                               如果存在，返回 true
   */
t.includes = function (collection, value, fromIndex = 0) {
    let count = 0
    for (let key in collection) {
      if (count < fromIndex) {
        count++
        continue
      }
      if (collection.hasOwnProperty(key)) {
        if (this.isEqual(collection[key], value)) {
          return true
        }
      }
    }
    if (this.isString(collection) && this.isString(value)) {
      let reg = new RegExp(value)
      return reg.test(collection)
    }
    return false
  }

  /**
   * 返回一个 从指定位置在原数组上切割 的新数组
   * @param  {array} array  被切割数组
   * @param  {Number} [n=1] 开始切割的位置
   * @return {array}        返回新数组
   */
t.drop = function (array, n = 1) {
    return array.reduce(function (memo, curr, index) {
      if (index >= n) {
        memo.push(curr)
      }
      return memo
    }, [])
  }

  /**
   * 返回一个 从指定位置反方向在原数组上切割 的新数组
   * @param  {array} array  被切割数组
   * @param  {Number} [n=1] 开始切割的位置
   * @return {array}        返回新数组
   */
t.dropRight = function (array, n = 1) {
    let index = array.length - n
    return array.reduce(function (memo, curr, i) {
      if (i < index) {
        memo.push(curr)
      }
      return memo
    }, [])
  }

  /**
   * 返回一个 切割数组，直道从右往左出现的第一个 false
   * @param  {array} array                        被切割数组
   * @param  {function} [predicate=this.identity] 断言函数
   * @return {array}                              返回新数组
   */
t.dropRightWhile = function (array, predicate = this.identity) {
    let result = [],
      i = array.length - 1
    for (; i >= 0; i--) {
      if (this.iteratee(predicate)(array[i]) === false) {
        break
      }
    }
    for (let j = 0; j <= i; j++) {
      result.push(array[j])
    }
    return result
  }

  /**
   * 返回一个 切割数组 从左往右出现的第一个 false 开始切割
   * @param  {array} array                        被切割数组
   * @param  {function} [predicate=this.identity] 断言函数
   * @return {array}                              返回新数组
   */
t.dropWhile = function (array, predicate = this.identity) {
    let result = [],
      i = 0
    for (; i < array.length; i++) {
      if (this.iteratee(predicate)(array[i]) === false) {
        break
      }
    }
    for (; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }

  /**
   * 给数组指定区段分配成员
   * @param  {array} array               被分配的数组
   * @param  {*} value                   分配给数组的值
   * @param  {Number} [start=0]          区段起始位置
   * @param  {number} [end=array.length] 区段结束为止（不包含）
   * @return {array}                     修改后的数组
   */
t.fill = function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  /**
   * 返回断言函数第一次返回 true 的元素的索引
   * @param  {array} array                        被查找的数组
   * @param  {function} [predicate=this.identity] 断言函数
   * @param  {Number} [fromIndex=0]               开始查找的位置
   * @return {number}                             索引
   */
t.findIndex = function (array, predicate = this.identity, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (this.iteratee(predicate)(array[i])) {
        return i
      }
    }
    return -1
  }

  /**
   * 从右往左返回断言函数第一次返回 true 的元素的索引
   * @param  {array} array                        被查找的数组
   * @param  {function} [predicate=this.identity] 断言函数
   * @param  {Number} [fromIndex=0]               开始查找的位置
   * @return {number}                             索引
   */
t.findLastIndex = function (array, predicate = this.identity, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (this.iteratee(predicate)(array[i])) {
        return i
      }
    }
    return -1
  }

  /**
   * 指定降维深度
   * @param  {array} array      降维数组
   * @param  {Number} [depth=1] 降维深度
   * @return {array}            降维后的数组
   */
t.flattenDepth = function (array, depth = 1) {
    let result = array
    for (let i = 0; i < depth; i++) {
      result = this.flatten(result)
    }
    return result
  }

  /**
   * 将二维数组转换为对象
   * @param  {array} pairs  键值对二维数组
   * @return {object}       转换后的对象
   */
t.fromPairs = function (pairs) {
    return pairs.reduce(function (memo, curr) {
      memo[curr[0]] = curr[1]
      return memo
    }, {})
  }

  /**
   * 返回一个除了原数组最后一个元素的数组
   * @param  {array} array 原数组
   * @return {array}       新数组
   */
t.initial = function (array) {
    return array.reduce(function (memo, curr, index) {
      if (index < array.length - 1) {
        memo.push(curr)
      }
      return memo
    }, [])
  }

  /**
   * 返回一个所有参数数组都拥有的值的集合
   * @param  {...array} array 被筛选数组群
   * @return {array}          筛选出来的数组
   */
t.intersection = function (...array) {
    return this.intersectionBy(...array)
  }

  /**
   * 和 intersection 类似，通过 迭代器筛选
   * @param  {...array} array 被筛选数组群
   * @return {array}          筛选出来的数组
   */
t.intersectionBy = function (...paras) {
    let iteratee
    if (!this.isArray(paras[paras.length - 1])) {
      iteratee = paras.pop()
    } else {
      iteratee = this.identity
    }
    let temp = this.drop(paras)
    let that = this
    return paras[0].reduce(function (memo, curr) {
      let onOff = that.reduce(temp, function (me, cu) {
        let tmp = that.map(cu, it => that.iteratee(iteratee)(it))
        if (!that.includes(tmp, that.iteratee(iteratee)(curr))) {
          me = false
        }
        return me
      }, true)
      if (onOff) {
        memo.push(curr)
      }
      return memo
    }, [])
  }

  /**
   * 和 intersection 类似，可自定义比较方式
   * @param  {...array} array 被筛选数组群
   * @return {array}          筛选出来的数组
   */
t.intersectionWith = function (...paras) {
    let comparator = paras.pop()
    let that = this
    let others = this.drop(paras)
    return paras[0].reduce(function (memo, curr) {
      let onOff = that.reduce(others, function (me, cu) {
        for (let i = 0; i < cu.length; i++) {
          if (comparator.call(that, curr, cu[i])) {
            me = true
          }
        }
        return me
      }, false)
      if (onOff) {
        memo.push(curr)
      }
      return memo
    }, [])
  }

  /**
   * 根据指定符号连接数组成员为字符串
   * @param  {array} array           被连接的数组
   * @param  {String} [separator=''] 连接符号
   * @return {string}                连接成功的字符串
   */
t.join = function (array, separator = ',') {
    return this.reduce(array, function (memo, curr, index, arr) {
      if (index == arr.length - 1) {
        memo += curr
      } else {
        memo += curr + separator
      }
      return memo
    }, '')
  }

  /**
   * 从走往左检索数组，返回第一个与给定值相等的索引
   * @param  {array} array                         被检索的数组
   * @param  {*} value                             给定判断的值
   * @param  {number} [fromIndex=array.length - 1] 判断的起始位置
   * @return {number}                              索引值
   */
t.lastIndexOf = function (array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (this.isEqual(array[i], value)) {
        return i
      }
    }
    return -1
  }

  /**
   * 返回数组中给定索引的值，给定索引为负数时，从后往前找
   * @param  {array} array  待查数组
   * @param  {Number} [n=0] 索引
   * @return {*}            找到的值
   */
t.nth = function (array, n = 0) {
    if (n >= 0) {
      return array[n]
    } else {
      return array[array.length + n]
    }
  }

  /**
   * 从给定数组中剔除所有指定的值
   * @param  {array} array   被操作的数组
   * @param  {*} values      指定的值
   * @return {array}         操作后的值
   */
t.pull = function (array, ...values) {
    return this.pullAllBy(array, values)
  }

  /**
   * 从给定数组中剔除指定数组中的所有值
   * @param  {array} array   被操作的数组
   * @param  {*} values      指定的值
   * @return {array}         操作后的值
   */
t.pullAll = function (array, values) {
    return this.pullAllBy(array, values)
  }

  /**
   * 通过迭代器从给定数组中剔除所有指定的值
   * @param  {array} array                       被操作的数组
   * @param  {*} values                          指定的值
   * @param  {function} [iteratee=this.identity] 迭代器
   * @return {array}                             操作后的值
   */
t.pullAllBy = function (array, values, iteratee = this.identity) {
    let that = this
    this.forEach(values, function (element) {
      for (let i = 0; i < array.length; i++) {
        if (that.isEqual(that.iteratee(iteratee)(element), that.iteratee(iteratee)(array[i]))) {
          array.splice(i, 1)
          i--
        }
      }
    })
    return array
  }

  /**
   * 和 pullAllBy 类似，自定义指定比较函数
   * @param  {array} array                       被操作的数组
   * @param  {*} values                          指定的值
   * @param  {function} [comparator]             自定义函数
   * @return {array}                             操作后的值
   */
t.pullAllWith = function (array, values, comparator) {
    let that = this
    this.forEach(values, function (element) {
      for (let i = 0; i < array.length; i++) {
        if (comparator.call(that, element, array[i])) {
          array.splice(i, 1)
          i--
        }
      }
    })
    return array
  }

  /**
   * 移除制定索引的元素
   * @param  {array} array   被操作的数组
   * @param  {number} indexs 索引集
   * @return {array}         操作后的数组
   */
t.pullAt = function (array, ...indexs) {
    let result = []
    let index = this.flatten(indexs)
    for (let i = 0; i < index.length; i++) {
      result.push(array[index[i]])
    }
    index = index.sort((a, b) => b - a)
    for (let i = 0; i < index.length; i++) {
      array.splice(index[i], 1)
    }
    return result
  }

  /**
   * 断言数组内所有的成员，删除返回 true 的成员并返回被删成员数组
   * @param  {array} array                      被判断的数组
   * @param  {function} predicate=this.identity 断言函数
   * @return {array}                            被删成员集合
   */
t.remove = function (array, predicate = this.identity) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        result.push(array[i])
        array.splice(i, 1)
        i--
      }
    }
    return result
  }

  /**
   * 反转数组
   * @param  {array} array 待反转的数组
   * @return {array}       反转后的数组
   */
t.reverse = function (array) {
    return array.reverse()
  }

  /**
   * 将给定的值插入到所给数组中，保持其顺序不变
   * @param  {array} array 被检索数组
   * @param  {*} value     给定的值
   * @return {unmber}      检索出的索引
   */
t.sortedIndex = function (array, value) {
    return this.sortedIndexBy(array, value)
  }

  /**
   * 类似 sortedIndex 调用迭代函数检索
   * @param  {array} array 被检索的数组
   * @param  {*} value     给定的值
   * @param  {function}    调用的迭代函数
   * @return {number}      索引值
   */
t.sortedIndexBy = function (array, value, iteratee = this.identity) {
    let i = 0;
    for (; i < array.length; i++) {
      if (this.iteratee(iteratee)(value) <= this.iteratee(iteratee)(array[i])) {
        break
      }
    }
    return i
  }

  /**
   * 第一个匹配到值的索引
   * @param  {array} array 被查找的数组
   * @param  {*} value     匹配的值
   * @return {number}      匹配到的索引
   */
t.sortedIndexOf = function (array, value) {
    let i = 0
    for (; i < array.length; i++) {
      if (this.isEqual(array[i], value)) {
        break
      }
    }
    return i === array.length ? -1 : i
  }

  /**
   * 从左往右将给定的值插入到所给数组中，保持其顺序不变
   * @param  {array} array 被检索数组
   * @param  {*} value     给定的值
   * @return {unmber}      检索出的索引
   */
t.sortedLastIndex = function (array, value) {
    return this.sortedLastIndexBy(array, value)
  }

  /**
   * 从左往右类似 sortedIndex 调用迭代函数检索
   * @param  {array} array 被检索的数组
   * @param  {*} value     给定的值
   * @param  {function}    调用的迭代函数
   * @return {number}      索引值
   */
t.sortedLastIndexBy = function (array, value, iteratee = this.identity) {
    let i = array.length - 1
    for (; i >= 0; i--) {
      if (this.iteratee(iteratee)(value) >= this.iteratee(iteratee)(array[i])) {
        break
      }
    }
    return i + 1
  }

  /**
   * 从左往右第一个匹配到值的索引
   * @param  {array} array 被查找的数组
   * @param  {*} value     匹配的值
   * @return {number}      匹配到的索引
   */
t.sortedLastIndexOf = function (array, value) {
    let i = array.length - 1
    for (; i >= 0; i--) {
      if (this.isEqual(array[i], value)) {
        return i
      }
    }
    return -1
  }

  /**
   * 类似 uniq 筛选的时候保持顺序
   * @param  {array} array 被筛选的数组
   * @return {array}       筛选后的数组
   */
t.sortedUniq = function (array) {
    return this.uniqBy(array)
  }

  /**
   * 类似 uniq 通过迭代器筛选 数组
   * @param  {array} array        被筛选的数组
   * @param  {function} iteratee  迭代器
   * @return {array}              筛选后的数组
   */
t.sortedUniqBy = function (array, iteratee) {
    return this.uniqBy(array, iteratee)
  }


  /**
   * 筛选数组，保持数组内不存在重复项
   * @param  {array} array 被筛选的数组
   * @return {array}       筛选后的数组
   */
t.uniq = function (array) {
    return this.uniqBy(array)
  }

  /**
   * 类似 uniq 通过迭代器筛选数组
   * @param  {array} array                      被筛选的数组
   * @param  {function} iteratee=this.identity  迭代器
   * @return {array}                            筛选后的数组
   */
t.uniqBy = function (array, iteratee = this.identity) {
    let that = this
    return this.reduce(array, function (memo, curr) {
      for (let i = 0; i < memo.length; i++) {
        if (that.isEqual(that.iteratee(iteratee)(curr), that.iteratee(iteratee)(memo[i]))) {
          return memo
        }
      }
      memo.push(curr)
      return memo
    }, [])
  }

  /**
   * 将数组第一项去除
   * @param  {array} array 被操作的数组
   * @return {array}       操作后的数组
   */
t.tail = function (array) {
    return this.reduce(array, function (memo, curr, i) {
      if (i == 0) {
        return memo
      }
      memo.push(curr)
      return memo
    }, [])
  }

  /**
   * 顺序提取给定数量的成员
   * @param  {array} array 被提取的数组
   * @param  {number} n=1  给定的数量
   * @return {array}       提取后的数组
   */
t.take = function (array, n = 1) {
    return this.reduce(array, function (memo, curr, i) {
      if (i >= n) {
        return memo
      }
      memo.push(curr)
      return memo
    }, [])
  }

  /**
   * 根据给定的数目，从右往左提取成员
   * @param  {array} array 被提取的数组
   * @param  {*} n=1       给定的数量
   * @return {array}       提取后的数组
   */
t.takeRight = function (array, n = 1) {
    let index = array.length - n
    return this.reduce(array, function (memo, curr, i) {
      if (i < index) {
        return memo
      }
      memo.push(curr)
      return memo
    }, [])
  }

  /**
   * 依据断言函数，从右向左提取数据
   * @param  {array} array                      被提取数组
   * @param  {function} predicate=this.identity 断言函数
   * @return {array}                            提取后的数组
   */
t.takeRightWhile = function (array, predicate = this.identity) {
    debugger
    let result = [],
      onOff = true
    for (let i = array.length - 1; i >= 0; i--) {
      if (this.iteratee(predicate)(array[i], i, array) === false) {
        onOff = false
      }
      if (onOff) {
        result.unshift(array[i])
      }
    }
    return result
  }

  /**
   * 依据断言函数，提取数据
   * @param  {array} array                      被提取数组
   * @param  {function} predicate=this.identity 断言函数
   * @return {array}                            提取后的数组
   */
t.takeWhile = function (array, predicate = this.identity) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (this.iteratee(predicate)(array[i], i, array) === false) {
        return result
      }
      result.push(array[i])
    }
    return result
  }

  /**
   * 将数组集提取出成员，且不重复提取
   * @param  {array} ...arrays  被提取的数组集
   * @return {array}            提取后的数组
   */
t.union = function (...arrays) {
    let that = this
    return Array.from(new Set(that.flatten(arrays)))
  }

  /**
   * 通过迭代函数将数组集提取出成员，且不重复提取
   * @param  {array} ...arrays   被提取的数组集
   * @param  {function}          迭代函数
   * @return {array}             提取后的数组
   */
t.unionBy = function (...others) {
    let iteratee
    if (!this.isArray(others[others.length - 1])) {
      iteratee = others.pop()
    } else {
      iteratee = this.identity
    }
    let that = this
    others = this.flatten(others)
    return others.map(it => this.iteratee(iteratee)(it)).reduce(function (memo, curr, i) {
      let onOff = memo.reduce(function (me, cu) {
        if (that.isEqual(that.iteratee(iteratee)(cu), curr)) {
          me = false
        }
        return me
      }, true)
      if (onOff) {
        memo.push(others[i])
      }
      return memo
    }, [])
  }

  /**
   * 自定义函数将数组集提取出成员，且不重复提取
   * @param  {array} ...arrays  被提取的数组集
   * @param  {function}         对比函数
   * @return {array}            提取后的数组
   */
t.unionWith = function (...others) {
    let comparator = others.pop()
    others = this.flatten(others)
    for (let i = 0; i < others.length; i++) {
      for (let j = i + 1; j < others.length; j++) {
        if (comparator.call(this, others[i], others[j])) {
          others.splice(j, 1)
        }
      }
    }
    return others
  }

  /**
   * 返回一个数组，将每个成员数组的相同项统筹
   * @param  {array} ...arrays 被压缩的数组
   * @return                   压缩后的数组
   */
t.zip = function (...arrays) {
    let result = []
    for (let i = 0; i < arrays[0].length; i++) {
      result.push([arrays[0][i]])
    }
    for (let i = 1; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        result[j].push(arrays[i][j])
      }
    }
    return result
  }

  /**
   * 解压数组
   * @param  {array} array 需要被解压的数组
   * @return {array}       解压后的数组
   */
t.unzip = function (array) {
    return this.zip(...array)
  }

  /**
   * 通过迭代器解压数组
   * @param  {array} array                    需要被解压的数组
   * @param  {array} iteratee=this.identity   迭代函数
   * @return                                  解压后的数组
   */
t.unzipWith = function (array, iteratee = this.identity) {
    let temp = this.zip(...array)
    return this.map(temp, (it) => this.iteratee(iteratee)(...it))
  }

  /**
   * 两数相加
   * @param  {number} augend 加数
   * @param  {number} addend 被加数
   * @return {number}        和
   */
t.add = function (augend, addend) {
    return augend + addend
  }
  /**
   * 将数组内所有给定值都去除
   * @param  {array} array 被操作的数组
   * @param  {*} ...values 需要在数组中去除的值
   * @return {array}       操作后的数组
   */
t.without = function (array, ...values) {
    let that = this
    let result = this.clone(array)
    return this.reduce(values, function (memo, curr) {
      for (let i = 0; i < memo.length; i++) {
        if (that.isEqual(memo[i], curr)) {
          memo.splice(i, 1)
          i--
        }
      }
      return memo
    }, result)
  }
  /**
   * 仅保留数组中出现一次的成员
   * @param  {array} ...arrays 被检查的数组
   * @return {array}           筛选出的数组
   */
t.xor = function (...arrays) {
    let that = this
    let result = this.flatten(arrays)
    return this.reduce(result, function (memo, curr, i, array) {
      if (that.lastIndexOf(array, curr) != i) {
        for (let i = 0; i < array.length; i++) {
          if (that.isEqual(curr, array[i])) {
            array.splice(i, 1)
          }
        }
      }
      return array
    })
  }

  /**
   * 通过迭代仅保留数组中出现一次的成员
   * @param  {array} ...arrays 被检查的数组
   * @return {array}           筛选出的数组
   */
t.xorBy = function (...others) {
    let iteratee
    if (!this.isArray(others[others.length - 1])) {
      iteratee = others.pop()
    } else {
      iteratee = this.identity
    }
    let result = this.flatten(others)
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        if (this.isEqual(this.iteratee(iteratee)(result[i]), this.iteratee(iteratee)(result[j]))) {
          result.splice(j, 1)
          result.splice(i, 1)
          i--
        }
      }
    }
    return result
  }

  /**
   * 通过自定义函数仅保留数组中出现一次的成员
   * @param  {array} ...arrays 被检查的数组
   * @return {array}           筛选出的数组
   */
t.xorWith = function (...others) {
    let comparator = others.pop()
    let result = this.flatten(others)
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        if (comparator.call(this, result[i], result[j])) {
          result.splice(j, 1)
          result.splice(i, 1)
          i--
        }
      }
    }
    return result
  }

  /**
   * 将参数压缩成对象
   * @param  {array} props=[]  键
   * @param  {array} values=[] 值
   * @return {object}          压缩后的对象
   */
t.zipObject = function (props = [], values = []) {
    return this.reduce(props, function (memo, curr, i) {
      memo[curr] = values[i]
      return memo
    }, {})
  }

  /**
   * 根据路径，将参数打包成对象
   * @param  {array} props=[] 路径
   * @param  {array} values=[] 值
   * @return {object}           打包后的对象
   */
t.zipObjectDeep = function (props = [], values = []) {
    let that = this
    debugger
    let prop = props.map(it => it.match(/\w+/g))
    let result = {}
    for (let i = 0; i < prop.length; i++) {
      parse(prop[i], result, values[i])
    }
    return result

    function parse(path, obj, value) {
      let key = path.shift()
      if (path.length === 0) {
        obj[key] = value
        return obj
      }
      if (obj[key]) {
        parse(path, obj[key], value)
      } else if (that.isNaN(+path[0])) {
        obj[key] = {}
        parse(path, obj[key], value)
      } else {
        obj[key] = []
        parse(path, obj[key], value)
      }
      return obj
    }
  }

  /**
   * 根据迭代器 打包数组
   * @param {array} ...array                    需要打包的数组
   * @param {function} iteratee = this.identity 迭代器
   * @return {array}                            打包后的数组
   */
t.zipWith = function (...others) {
    let iteratee
    if (!this.isArray(others[others.length - 1])) {
      iteratee = others.pop()
    } else {
      iteratee = this.identity
    }
    let result = this.zip(...others)
    return this.map(result, a => iteratee(...a))
  }

  /**
   * 创建一个对象，
   * 将每个元素的迭代结果作为该对象的键名，该结果出现的次数，作为该对象的键值
   * @param  {array | object} collection       被操作的集合
   * @param  {function} iteratee=this.identity 迭代器
   * @return {object}                           迭代出的结果
   */
t.countBy = function (collection, iteratee = this.identity) {
    let that = this
    return this.reduce(collection, function (memo, curr) {
      let key = that.iteratee(iteratee)(curr)
      if (key in memo) {
        memo[key]++
      } else {
        memo[key] = 1
      }
      return memo
    }, {})
  }

  /**
   * 反方向遍历数组
   * @param  {array | object} collection 被迭代的集合
   * @param  {function} iteratee=this.identity 迭代器
   * @return {*}                               返回集合
   */
t.eachRight = function (collection, iteratee = this.identity) {
    let keys = Object.keys(collection)
    for (let i = keys.length - 1; i >= 0; i--) {
      if (iteratee(collection[keys[i]], keys[i], collection) === false) {
        return collection
      }
    }
    return collection
  }

  /**
   * 从右往左迭代成员，返回第一个满足的成员
   * @param  {array | object} collection                     被迭代的集合
   * @param  {function} predicate=this.identity     迭代器
   * @param  {number} fromIndex=collection.length-1 索引起始位置
   * @return {*}                                    满足条件的第一个成员，未找到返回 undefined
   */
t.findLast = function (collection, predicate = this.identity, fromIndex = collection.length - 1) {
    let keys = Object.keys(collection)
    for (let i = fromIndex; i >= 0; i--) {
      if (this.iteratee(predicate)(collection[keys[i]])) {
        return collection[keys[i]]
      }
    }
  }

  /**
   * 从右往左迭代成员，返回第一个满足的成员的键名
   * @param  {array | object} collection            被迭代的集合
   * @param  {function} predicate=this.identity     迭代器
   * @param  {number} fromIndex=collection.length-1 索引起始位置
   * @return {*}                                    满足条件的第一个成员的键名，未找到返回 undefined
   */
t.findLastKey = function (collection, predicate = this.identity) {
    let keys = Object.keys(collection)
    for (let i = keys.length - 1; i >= 0; i--) {
      if (this.iteratee(predicate)(collection[keys[i]])) {
        return keys[i]
      }
    }
  }

  /**
   * 迭代集合成员，并将结果降一维
   * @param  {array | object} collection                 被迭代的集合
   * @param  {function} iteratee=this.identity 迭代器
   * @return {array}                           处理后的数组
   */
t.flatMap = function (collection, iteratee = this.identity) {
    return this.flatten(this.map(collection, (it, index, array) => iteratee(it, index, array)))
  }

  /**
   * 迭代集合成员，并将结果降成一维
   * @param  {array | object} collection                 被迭代的集合
   * @param  {function} iteratee=this.identity 迭代器
   * @return {array}                           处理后的数组
   */
t.flatMapDeep = function (collection, iteratee = this.identity) {
    return this.flattenDeep(this.map(collection, (it, index, array) => iteratee(it, index, array)))
  }

  /**
   * 迭代集合成员，并将结果降维，维度自定义
   * @param  {array | object} collection                 被迭代的集合
   * @param  {function} iteratee=this.identity 迭代器
   * @param  {number} depth = 1                维度
   * @return {array}                           处理后的数组
   */
t.flatMapDepth = function (collection, iteratee = this.identity, depth = 1) {
    return this.flattenDepth(this.map(collection, (it, index, array) => iteratee(it, index, array)), depth)
  }

  /**
   * 利用迭代期迭代集合，将迭代出来的结果作为键名，被迭代的成员作为键值
   * @param  {array | object} collection       被迭代的集合
   * @param  {function} iteratee=this.identity 迭代器
   * @return {object}                          新对象
   */
t.groupBy = function (collection, iteratee = this.identity) {
    let that = this
    return this.reduce(collection, function (memo, curr) {
      let tmp = that.iteratee(iteratee)(curr)
      if (tmp in memo) {
        memo[tmp].push(curr)
      } else {
        memo[tmp] = [curr]
      }
      return memo
    }, {})
  }

  /**
   * 对集合中每一个元素调用方法，返回结果数组
   * @param  {array | object} collection      被调用的集合
   * @param  {array | function | string} path 调用方法的路径
   * @param  {...*} ...args                   方法的参数
   * @return {array}                          结果集
   */
t.invokeMap = function (collection, path, ...args) {
    let that = this
    return this.map(collection, function (it) {
      if (that.isFunction(path)) {
        return path.apply(it, args)
      } else {
        return that.propertyOf(it)(path).call(it, ...args)
      }
    })
  }

  /**
   * 与 property 相反，通过对象返回一个函数，函数通过参数返回结果
   * @param  {object} object         查找的对象
   * @return {function}              返回的函数
   */
t.propertyOf = function (object) {
    let that = this
    return function (path) {
      let prop
      if (that.isString(path)) {
        prop = path.match(/\w+/g)
      }
      if (that.isArray(path)) {
        prop = path
      }
      return that.reduce(prop, function (memo, curr) {
        return memo = memo[curr]
      }, object)
    }
  }
  /**
   * 创建一个对象，键名是集合成员通过接待后的结果，键值是该成员
   * @param  {array | object} collection       被迭代的集合
   * @param  {function} iteratee=this.identity 迭代器
   * @return {object}                          生成的新对象
   */
t.keyBy = function (collection, iteratee = this.identity) {
    let that = this
    return this.reduce(collection, function (memo, curr) {
      memo[that.iteratee(iteratee)(curr)] = curr
      return memo
    }, {})
  }
  /**
   * 类似于 sortby 除了可以指定排序顺序
   * @param  {array | object} collection                                         被排序的集合
   * @param  {function[] | array[] | object[] | string[]} iteratee=this.identity 迭代器
   * @param  {string} orders='asc'                                               顺序指令
   * @return {array}                                                             排序后的数组
   */
t.orderBy = function (collection, iteratee = this.identity, orders = 'asc') {
    let that = this
    let result = this.clone(collection)
    for (let i = iteratee.length - 1; i >= 0; i--) {
      result.sort(function (a, b) {
        let order = that.iteratee(iteratee[i])(a) > that.iteratee(iteratee[i])(b)
        return orders[i] === 'asc' ? order : !order
      })
    }
    return result
  }

  /**
   * 断言集合中的元素，并进行分组
   * @param  {array | object} collection        被断言的集合
   * @param  {function} predicate=this.identity 断言函数
   * @return {array}                            分组后的数组
   */
t.partition = function (collection, predicate = this.identity) {
    let that = this
    let result = [
      [],
      []
    ]
    return this.reduce(collection, function (memo, curr) {
      that.iteratee(predicate)(curr) ? result[0].push(curr) : result[1].push(curr)
      return result
    }, result)
  }

  /**
   * 同 reduce 从右往左迭代
   * @param  {array | object} collection       别迭代的集合
   * @param  {function} iteratee=this.identity 迭代器
   * @param  {*} accumulator                   初始值
   * @return {*}                               迭代后的值
   */
t.reduceRight = function (collection, iteratee = this.identity, accumulator) {
    let keys = Object.keys(collection)
    let result = accumulator || collection[keys[0]]
    for (let i = accumulator ? keys.length - 1 : keys.length - 2; i >= 0; i--) {
      result = iteratee(result, collection[keys[i]], keys[i], collection)
    }
    return result
  }

  /**
   * 和 filter 相反，收集断言失败的函数
   * @param  {array | object} collection        被断言的集合
   * @param  {function} predicate=this.identity 断言函数
   * @return {array}                            收集的集合
   */
t.reject = function (collection, predicate = this.identity) {
    let result = []
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (!this.iteratee(predicate)(collection[key], key, collection)) {
          result.push(collection[key])
        }
      }
    }
    return result
  }

  /**
   * 随机选取一个成员
   * @param  {array | object} collection 待选集合
   * @return {array}                     选中成员数组
   */
t.sample = function (collection) {
    let keys = Object.keys(collection)
    let size = keys.length
    return collection[keys[~~(Math.random() * size)]]
  }

  /**
   * 随机选取一组成员
   * @param  {array | object} collection 待选集合
   * @param  {number}                    选取成员的个数
   * @return {array}                     选中成员数组
   */
t.sampleSize = function (collection, n = 1) {
    let result = []
    let keys = Object.keys(collection)
    let size = keys.length
    let index
    n = n >= size ? size : n
    while (n) {
      index = ~~(Math.random() * size)
      result.push(collection[keys.splice(index, 1)[0]])
      size--
      n--
    }
    return result
  }

  /**
   * 通过 Fisher - Yates 随机打乱数组
   * @param  {array | object} collection 待打乱集合
   * @return {array | object}            打乱后的数组
   */
t.shuffle = function (collection) {
    let result = Object.keys(collection)
    let size = result.length
    let index
    result.forEach(function (a, i, array) {
      index = ~~(Math.random() * (size - i - 1)) + i
      array.splice(i, 1, array[index])
      array.splice(index, 1, a)
    })
    return this.map(result, it => collection[it])
  }
  /**
   * 返回从 1970 1.1 00：00：00 UTC 至今的毫秒数
   */
t.now = function () {
    return Date.now()
  }

  /**
   * func 在第 n 次调用后才会执行
   * @param  {number} n      约定第几次开始执行函数 func
   * @param  {function} func 被约束的函数
   * @return {function}      新的函数
   */
t.after = function (n, func) {
    let count = 0
    return function (...args) {
      count++
      if (count >= n) {
        return func(...args)
      }
    }
  }

  /**
   * 返回一个新函数来限制调用函数的参数数量
   * @param  {function} func        被限制的函数
   * @param  {number} n=func.length 被限制参数的数量
   * @return {function}             返回新的函数
   */
t.ary = function (func, n = func.length) {
    return function (...args) {
      args.length = n
      return func(...args)
    }
  }

  /**
   * 返回一个函数，调用对象的方法
   * @param  {object} object         被调用方法所附的对象
   * @param  {string} key            方法名
   * @param  {partials} ...partials  绑定的参数
   * @return {function}              返回新的函数
   */
t.bindKey = function (object, key, ...partials) {
    return function (...args) {
      partials = partials.map(function (it) {
        if (it === _) {
          it = args.shift()
        }
        return it
      })
      return object[key](...partials, ...args)
    }
  }

  /**
   * 柯里化函数
   * @param  {function} func            需要柯里化的函数
   * @param  {number} arity=func.length 指定参数数量
   * @return {function}                 柯里化后的函数
   */
t.curry = function (func, arity = func.length) {
    let that = this
    let len
    return function fn(...args) {
      len = that.reduce(args, function (memo, curr) {
        if (curr === _) {
          return memo
        }
        return ++memo
      }, 0)
      if (len < arity) {
        return that.partial(fn, ...args)
      } else {
        return func(...args)
      }
    }
  }

  /**
   * 反向柯里化函数
   * @param  {function} func            需要柯里化的函数
   * @param  {number} arity=func.length 指定参数数量
   * @return {function}                 柯里化后的函数
   */
t.curryRight = function (func, arity = func.length) {
    let that = this
    let len
    return function fn(...args) {
      len = that.reduce(args, function (memo, curr) {
        if (curr === _) {
          return memo
        }
        return ++memo
      }, 0)
      if (len < arity) {
        return that.partialRight(fn, ...args)
      } else {
        return func(...args)
      }
    }
  }

  /**
   * 参数绑定
   * @param  {function} func      需要参数绑定的函数
   * @param  {...*} ...partials   被绑定的参数
   * @return {function}           绑定后的函数
   */
t.partial = function (func, ...partials) {
    let that = this
    return function (...args) {
      partials = that.map(partials, function (it) {
        if (it === _) {
          return args.shift()
        } else {
          return it
        }
      })
      return func(...partials, ...args)
    }
  }

  /**
   * 反向参数绑定
   * @param  {function} func      需要参数绑定的函数
   * @param  {...*} ...partials   被绑定的参数
   * @return {function}           绑定后的函数
   */
t.partialRight = function (func, ...partials) {
    let that = this
    return function (...args) {
      partials = that.map(partials, function (it) {
        if (it === _) {
          return args.shift()
        } else {
          return it
        }
      })
      return func.call(that, ...args, ...partials)
    }
  }
  /**
   * 返回一个函数，将传入的参数颠倒调用
   * @param  {function} func 被调用的函数
   * @return {function}      调整后的函数
   */
t.flip = function (func) {
    let that = this
    return function (...args) {
      return func(...that.reverse(args))
    }
  }
  /**
   * 缓存计算结果，二次调用时，直接返回缓存中的数据
   * @param  {function} func     被缓存的值的函数
   * @param  {function} resolver 缓存键名迭代方法
   * @return {function}
   */
t.memoize = function (func, resolver) {
    let cache = new Map()
    let that = this
    return function fn(...args) {
      fn.cache = cache
      let key = (resolver ? resolver.call(that, ...args) : args[0])
      if (cache.has(key)) {
        return cache.get(key)
      } else {
        cache.set(key, func.call(that, ...args))
        return cache.get(key)
      }
    }
  }


  /**
   * 将对象的值放入数组返回
   * @param  {object} object 被处理的数组
   * @return {array}         提取后的数组
   */
t.values = function (object) {
    let result = []
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        result.push(object[key])
      }
    }
    return result
  }

  /**
   * 返回一个新函数，将函数的所有参数依次调用 transform 函数，再传入函数执行
   * @param {function} func                    需要改变参数的函数
   * @param {function | function[]} transforms 被参数调用的函数
   * @returns {function}                       新的函数
   */
t.overArgs = function (func, ...transforms) {
    let that = this
    return function (...args) {
      transforms = that.flatten(transforms)
      transforms.length = args.length
      transforms.map(function (it) {
        return transforms || that.identity
      })
      return func(...args.map(function (it, i) {
        return transforms[i](it)
      }))
    }
  }

  /**
   * 返回一个新函数根据 给定 参数位置，重新对参数进行排序
   * @param {function} func        需要调整参数的函数
   * @param {...* | array} indexes 给定参数下标
   * @returns {function}           新的函数
   */
t.rearg = function (func, ...indexes) {
    indexes = this.flatten(indexes)
    let that = this
    return function (...args) {
      let arg = that.map(indexes, it => args[it])
      return func(...arg)
    }
  }

  /**
   * 创建一个新函数，收集原函数没有形参的实参
   * @param {function} func                   被收集参数的函数
   * @param {number} [start=func.length - 1]  起始收集位置
   * @returns {function}                      新的函数
   */
t.rest = function (func, start = func.length - 1) {
    return function (...args) {
      let restArg = args.splice(start, args.length - start)
      return func(...args, restArg)
    }
  }

  /**
   * 船价格一个新函数，是的原函数只接受一个参数，多余的参数忽略
   * @param {any} func 被消减参数的函数
   * @returns          新的函数
   */
t.unary = function (func) {
    return this.ary(func, 1)
  }


  /**
   * 将值强行转换为数组
   * @param {*} value  待转换的值
   * @returns {array}  转换后的数组
   */
t.castArray = function (value) {
    if (this.isArray(value)) {
      return value
    } else if (arguments.length === 0) {
      return []
    } else {
      return [value]
    }
  }

  /**
   * 通过 source 方法，检查 object 是否满足条件
   * @param {object} object 被判断的对象
   * @param {object} source 判断条件安
   * @returns {boolean}     满足，返回 true
   */
t.conformsTo = function (object, source) {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (!source[key](object[key])) {
          return false
        }
      }
    }
    return true
  }

  /**
   * 判断两个值是否浅相等
   * NaN 与 NaN 相等
   * @param {*} value 第一个值
   * @param {*} other 第二个值
   * @returns {bolean} 相等，返回 true
   */
t.eq = function (value, other) {
    if (this.isNaN(value) && this.isNaN(other)) {
      return true
    }
    return value === other
  }

  /**
   * 判断第一个值是否大于第二个值
   * @param {*} value 第一个值
   * @param {*} other 第二个值
   * @returns {boolean} 大于，返回 true
   */
t.gt = function (value, other) {
    return value > other
  }

  /**
   * 判断第一个值是否大于等于第二个值
   * @param {*} value 第一个值
   * @param {*} other 第二个值
   * @returns {boolean} 大于，返回 true
   */
t.gte = function (value, other) {
    return value >= other
  }

  /**
   * 判断值是不是整数
   * @param {*} value 被判断的值
   * @returns {boolean} 如果是，返回 true
   */
t.isInteger = function (value) {
    return Number.isInteger(value)
  }

  /**
   * 判断一个值是否复合 length 属性
   * @param {*} value   被判断的值
   * @returns {boolean} 可作为 length 属性，返回 true
   */
t.isLength = function (value) {
    return this.isInteger(value) && 0 <= value && value <= 4294967295
  }

  /**
   * 深度不交 object 与 source 是否后等值的属性
   * @param {object} object   被比较的对象
   * @param {object} source   匹配的对象
   * @returns {boolean}       匹配成功 返回 true
   */
t.isMatch = function (object, source) {
    return this.isMatchWith(object, source)
  }

  /**
   * 类似 isMatch 接收一个函数进行比较
   * @param {object} object      要检查的对象
   * @param {object} source      匹配的对象
   * @param {boolean} customizer 如果对象满足，返回 true
   * @returns
   */
t.isMatchWith = function (object, source, customizer) {
    customizer = customizer || this.isEqual
    let that = this
    let temp = Object.entries(source)
    return temp.every(function (it) {
      return customizer.call(that, object[it[0]], it[1], it[0], object, source)
    })
  }

  /**
   * 判断一个值是否是 null 或是 undefined
   * @param {*} value   被判断的值
   * @returns {boolean} 如果是，返回 true
   */
t.isNil = function (value) {
    return this.isNull(value) || this.isUndefined(value)
  }

  /**
   * 
   * 判断值是不是类对象
   * @param {*} value   要检查的值
   * @returns {boolean} 如果是，返回 true
   */
t.isObjectLike = function (value) {
    return typeof value === 'object' ? (!this.isNull(value)) ? true : false : false
  }


  /**
   * 判断这个数是不是安全整数
   * @param {*} value   被判断的数
   * @returns {boolean} 如果是，返回 true 
   */
t.isSafeInteger = function (value) {
    return Number.isSafeInteger(value)
  }

  /**
   * 判断一个值是不是类型数组
   * @param {*} value   被判断的值
   * @returns {boolean} 如果是，返回 true
   */
t.isTypedArray = function (value) {
    return toString.call(value) === '[object Uint8Array]'
  }

  /**
   * 检查值是hi否是弱类型集合
   * @param {*} value   被判断的值
   * @returns {boolean} 如果是，返回 true
   */
t.isWeakSet = function (value) {
    return toString.call(value) === '[object WeakSet]'
  }

  /**
   * 判断值是否小于第二个值
   * @param {*} value   需要判断的值
   * @param {*} other   对比的值
   * @returns {boolean} 如果满足，返回 true
   */
t.lt = function (value, other) {
    return value < other
  }

  /**
   * 判断值是否小于等于第二个值
   * @param {*} value   需要判断的值
   * @param {*} other   对比的值
   * @returns {boolean} 如果满足，返回 true
   */
t.lte = function (value, other) {
    return value <= other
  }

  /**
   * 将一个值转为有限数
   * @param {*} value   被转换的值
   * @returns {number}  转换后的值
   */
t.toFinite = function (value) {
    return value < -Number.MAX_VALUE ? -Number.MAX_VALUE : value > Number.MAX_VALUE ? Number.MAX_VALUE : isNaN(value) ? 0 : +value
  }

  /**
   * 将值转换为整数
   * @param {*} value   被转换的值
   * @returns {number}  转换后的值
   */
t.toInteger = function (value) {
    return Math.round(this.toFinite(value))
  }

  /**
   * 将值转换为 长度
   * @param {*} value    被转换的值
   * @returns {number}   转换后的值
   */
t.toLength = function (value) {
    let result = this.toInteger(value)
    return result > 4294967295 ? 4294967295 : result < 0 ? 0 : result
  }

  /**
   * 将值转换为数字
   * @param {*} value   被转换的值
   * @returns {number}  转换后的值
   */
t.toNumber = function (value) {
    return +value
  }

  /**
   * 将值转换为纯对象
   * @param {*} value    被转换的值
   * @returns {object}   转换后的值
   */
t.toPlainObject = function (value) {
    let result = {}
    for (let key in value) {
      result[key] = value[key]
    }
    return result
  }

  /**
   * 将值转换为安全整数
   * @param {*} value   需要转换的值
   * @returns {boolean} 转换后的值
   */
t.toSafeInteger = function (value) {
    let result = +value
    return isNaN(result) ? 0 : result > 9007199254740991 ? 9007199254740991 : result < -9007199254740991 ? -9007199254740991 : ~~result
  }

  /**
   * 求两个值的除数
   * @param {number} dividend 被除数
   * @param {number} divisor  除数
   * @returns {number}        商
   */
t.divide = function (dividend, divisor) {
    return dividend / divisor
  }

  /**
   * 通过迭代选择出数组内最大项
   * @param {array} array                       被选数组
   * @param {function} [iteratee=this.identity] 迭代函数
   * @returns {*}                               最大值
   */
t.maxBy = function (array, iteratee = this.identity) {
    let that = this
    return this.reduce(array, function (memo, curr) {
      return that.iteratee(iteratee)(memo) > that.iteratee(iteratee)(curr) ? memo : curr
    })
  }

  /**
   * 求平均数
   * @param {array} array  求数组的平均数
   * @returns {number}     得到的平均值
   */
t.mean = function (array) {
    return this.meanBy(array)
  }

  /**
   * 通过迭代求平均数
   * @param {array} array  求数组的平均数
   * @returns {number}     得到的平均值
   */
t.meanBy = function (array, iteratee = this.identity) {
    return this.sumBy(array, iteratee) / array.length
  }

  /**
   * 
   * 根据迭代求出最小值
   * @param {array} array                       被筛选数组
   * @param {function} [iteratee=this.identity] 迭代函数
   * @return {*}                                最小值
   */
t.minBy = function (array, iteratee = this.identity) {
    let that = this
    return this.reduce(array, function (memo, curr) {
      return that.iteratee(iteratee)(memo) < that.iteratee(iteratee)(curr) ? memo : curr
    })
  }

  /**
   * 
   * 两数相乘
   * @param {number} multiplier     乘数
   * @param {number} multiplicand   乘数
   * @returns {number}              乘积
   */
t.multiply = function (multiplier, multiplicand) {
    return multiplier * multiplicand
  }

  /**
   * 
   * 两数相减
   * @param {number} minuend     被减数
   * @param {number} subtrahend  减数
   * @returns {number}           被减数
   */
t.subtract = function (minuend, subtrahend) {
    return minuend - subtrahend
  }

  /**
   * 
   * 计算集合总和
   * @param {array} array  被叠加的集合
   * @returns {number}     总和
   */
t.sum = function (array) {
    return this.sumBy(array)
  }

  /**
   * 
   * 通过迭代计算集合总和
   * @param {array} array  被叠加的集合
   * @returns {number}     总和
   */
t.sumBy = function (array, iteratee = this.identity) {
    let that = this
    return this.reduce(array, function (memo, curr) {
      return memo + that.iteratee(iteratee)(curr)
    }, 0)
  }

  /**
   * 
   * 限制 number
   * @param {number} number    被限制的数
   * @param {number} lower     下限
   * @param {number} upper     上限
   * @returns {number}         返回被限制的值
   */
t.clamp = function (number, ...args) {
    if (args.length == 1) {
      return number > args[0] ? args[0] : number
    } else {
      return number > args[1] ? args[1] : number < args[0] ? args[0] : number
    }
  }

  /**
   * 
   * 检查 值 是否在区间内
   * @param {number} number  被检查值
   * @param {number} start   下限
   * @param {number} end     上限
   * @returns {number}       如果在，返回 true
   */
t.inRange = function (number, start, end) {
    if (end === undefined) {
      end = start
      start = 0
    }
    if (start > end) {
      let temp = start
      start = end
      end = temp
    }
    return number < start ? false : number >= end ? false : true
  }

  /**
   * 
   * 生成规定范围内的随机数
   * @param {number} lower 下限
   * @param {number} upper 上限
   * @param {boolean} floating 是否返回浮点数
   * @return {number}      随机数
   */
t.random = function (...args) {
    let lower, upper, floating
    if (args.length === 1) {
      lower = 0
      upper = args[0]
      floating = true
    } else if (args.length === 2) {
      if (this.isNumber(args[1])) {
        lower = args[0]
        upper = args[1]
        floating = true
      } else {
        lower = 0
        upper = args[0]
        floating = args[1]
      }
    } else {
      lower = args[0]
      upper = args[1]
      floating = args[2]
    }
    let result = Math.random() * (upper - lower) + lower
    return floating ? result : parseInt(result)
  }


  /**
   * 创建一个数组，成员是 path 的路径对应的值
   * @param {object} object          被迭代的对象
   * @param {string | string[]} path 路径
   * @returns {array}                值的数组
   */
t.at = function (object, ...path) {
    let p,
      that = this
    path = this.flatten(path)
    return this.reduce(path, function (memo, curr) {
      temp = object
      p = curr.split(/[\[\]\.]/).filter(it => it !== '')
      memo.push(that.reduce(p, function (memo, curr) {
        memo = memo[curr]
        return memo
      }, object))
      return memo
    }, [])
  }

  /**
   * 通過 iteratee 迭代对象的可枚举和不可枚举对象
   * @param {object} object                     被迭代的对象
   * @param {function} [iteratee=this.identity] 迭代器
   * @returns {object}                          返回原对象
   */
t.forIn = function (object, iteratee = this.identity) {
    for (let key in object) {
      iteratee(object[key], key, object)
    }
    return object
  }

  /**
   * 通過 iteratee 反向迭代对象的可枚举和不可枚举对象
   * @param {object} object                     被迭代的对象
   * @param {function} [iteratee=this.identity] 迭代器
   * @returns {object}                          返回原对象
   */
t.forInRight = function (object, iteratee = this.identity) {
    let keys = []
    for (let key in object) {
      keys.push(key)
    }
    for (let i = keys.length - 1; i >= 0; i--) {
      iteratee(object[keys[i]], keys[i], object)
    }
    return object
  }

  /**
   * 通過 iteratee 反向迭代对象的可枚举和不可枚举对象
   * @param {object} object                     被迭代的对象
   * @param {function} [iteratee=this.identity] 迭代器
   * @returns {object}                          返回原对象
   */
t.forOwnRight = function (object, iteratee = this.identity) {
    let keys = []
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    for (let i = keys.length - 1; i >= 0; i--) {
      iteratee(object[keys[i]], keys[i], object)
    }
    return object
  }

  /**
   * 列举对象中所有自有方法 
   * @param {object} object 被列举的对象
   * @returns {array}       返回函数名数组
   */
t.functions = function (object) {
    let result = []
    if (object === null) {
      return result
    } else {
      for (let key in object) {
        if (object.hasOwnProperty(key) && this.isFunction(object[key])) {
          result.push(key)
        }
      }
    }
    return result
  }

  /**
   * 列举对象中所有自有和继承方法 
   * @param {object} object 被列举的对象
   * @returns {array}       返回函数名数组
   */
t.functionsIn = function (object) {
    let result = []
    if (object === null) {
      return result
    } else {
      for (let key in object) {
        if (this.isFunction(object[key])) {
          result.push(key)
        }
      }
    }
    return result
  }

  /**
   * 根据路径获取值
   * 
   * @param {object} object       被检索的对象
   * @param {array | string} path 路径
   * @param {*} defaultValue      如果解析 undefined，返回该值
   * @returns {*}                 解析出来的值
   */
t.get = function (object, path, defaultValue) {
    if (this.isString(path)) {
      path = path.split(/[\[\]\.]/).filter(it => it !== '')
    }
    let result = path.reduce(function (memo, curr) {
      return memo === undefined ? memo : memo[curr]
    }, object)
    return result === undefined ? defaultValue : result
  }

  /**
   * 检查 path 是否是对象的继承和直接属性
   * @param {object} object       检索对象
   * @param {array | string} path 检查的路径
   * @returns {boolean}           存在，返回 true
   */
t.hasIn = function (object, path) {
    if (this.isString(path)) {
      path = path.split(/[\[\]\.]/).filter(it => it !== '')
    }
    let result = path.reduce(function (memo, curr) {
      return memo === undefined ? memo : memo[curr]
    }, object)
    return result === undefined ? false : true
  }

  /**
   * 创建一个 object 键值倒置后的对象
   * 
   * @param {object} object 被倒置的对象
   * @returns {object}      倒置后的对象
   */
t.invert = function (object) {
    let result = {}
    for (let key in object) {
      result[object[key]] = key
    }
    return result
  }

  /**
   * 进过迭代函数，返回键值倒置，值为数组的对象
   * 
   * @param {object} object                     被倒置的对象
   * @param {function} [iteratee=this.identity] 倒置后的对象
   * @returns
   */
t.invertBy = function (object, iteratee = this.identity) {
    let result = {},
      tempKey
    for (let key in object) {
      tempKey = iteratee(object[key], key, object)
      if (result[tempKey] === undefined) {
        result[tempKey] = [key]
      } else {
        result[tempKey].push(key)
      }
    }
    return result
  }









  // unfinish =======================

  // 未完全实现

t.debounce = function (func, wait = 0, options = {}) {
    let lastTimer = this.now()
    let that = this
    return function () {
      let currTimer = that.now()
      if (currTimer - lastTimer >= wait) {
        lastTimer = currTimer
        return func()
      } else {
        lastTimer = currTimer
      }
    }
  }

t.throttle = function (func, wait = 0, options = {}) {
    let lastTimer = this.now()
    let that = this
    return function () {
      let currTimer = that.now()
      if (currTimer - lastTimer >= wait) {
        lastTimer = currTimer
        return func()
      }
    }
  }


t.spread = function (func, start = 0) {
    let that = this
    return function (arg) {
      return func.call(that, ...arg)
    }
  }



//   // undo ====================

//   let mixin = function () {}
//   let noConflict = function () {}
//   let tap = function () {}
//   let thru = function () {}
//   let value = function () {}
//   let chain = function () {}
//   let cloneWith = function () {}
//   let cloneDeepWith = function () {}
//   let isEqualWith = function () {}
//   let isNative = function () {}
//   let ceil = function (number, precision = 0) {}
//   let floor = function (number, precision = 0) {}
//   let round = function (number, precision = 0) {}
//   let invoke = function (object, path, ...args) {}


//   // =========================

//   /*  let _ = function (value) {
//       this.wrapped = value
//     }*/

//   /*
//   function _(value) {
//     this.wrapped = value
//   }
//   _.a = function(){}
//   _.b = function(){}

//   for(m in _) {
//     _.prototype[m] = function(...args){
//       return this.wrapped = _[m](this.wrapped,...args)
//     }
//   }
//   */

//   windowGlobal._ = {
//     assign: assign,
//     assignIn: assignIn,
//     extend: assignIn,
//     before: before,
//     bind: bind,
//     isArguments: isArguments,
//     isArray: isArray,
//     isArrayBuffer: isArrayBuffer,
//     isArrayLike: isArrayLike,
//     isArrayLikeObject: isArrayLikeObject,
//     isBoolean: isBoolean,
//     isBuffer: isBuffer,
//     isDate: isDate,
//     isElement: isElement,
//     isEmpty: isEmpty,
//     isFinite: isFinite,
//     isFunction: isFunction,
//     isNaN: isNaN,
//     isNull: isNull,
//     isNumber: isNumber,
//     isObject: isObject,
//     isRegExp: isRegExp,
//     isString: isString,
//     isUndefined: isUndefined,
//     isEqual: isEqual,
//     iteratee: iteratee,
//     keys: keys,
//     last: last,
//     matches: matches,
//     matchesProperty: matchesProperty,
//     property: property,
//     forOwn: forOwn,
//     map: map,
//     filter: filter,
//     isPlainObject: isPlainObject,
//     times: times,
//     constant: constant,
//     noop: noop,
//     isError: isError,
//     isSymbol: isSymbol,
//     isMap: isMap,
//     isWeakMap: isWeakMap,
//     escape: escape,
//     wrap: wrap,
//     identity: identity,
//     find: find,
//     sortBy: sortBy,
//     max: max,
//     min: min,
//     negate: negate,
//     once: once,
//     pick: pick,
//     reduce: reduce,
//     result: result,
//     size: size,
//     slice: slice,
//     some: some,
//     toArray: toArray,
//     uniqueId: uniqueId,
//     isSet: isSet,
//     clone: clone,
//     compact: compact,
//     concat: concat,
//     create: create,
//     defaults: defaults,
//     defer: defer,
//     delay: delay,
//     forEach: each,
//     each: each,
//     every: every,
//     flatten: flatten,
//     flattenDeep: flattenDeep,
//     has: has,
//     head: head,
//     first: head,
//     indexOf: indexOf,
//     chunk: chunk,
//     includes: includes,
//     difference: difference,
//     differenceWith: differenceWith,
//     differenceBy: differenceBy,
//     drop: drop,
//     dropRight: dropRight,
//     dropRightWhile: dropRightWhile,
//     dropWhile: dropWhile,
//     fill: fill,
//     findIndex: findIndex,
//     findLastIndex: findLastIndex,
//     flattenDepth: flattenDepth,
//     fromPairs: fromPairs,
//     initial: initial,
//     intersection: intersection,
//     intersectionBy: intersectionBy,
//     intersectionWith: intersectionWith,
//     join: join,
//     lastIndexOf: lastIndexOf,
//     nth: nth,
//     pull: pull,
//     pullAll: pullAll,
//     pullAllBy: pullAllBy,
//     pullAllWith: pullAllWith,
//     pullAt: pullAt,
//     remove: remove,
//     reverse: reverse,
//     sortedIndex: sortedIndex,
//     sortedIndexBy: sortedIndexBy,
//     sortedIndexOf: sortedIndexOf,
//     sortedLastIndex: sortedLastIndex,
//     sortedLastIndexBy: sortedLastIndexBy,
//     sortedLastIndex: sortedLastIndex,
//     sortedLastIndexBy: sortedLastIndexBy,
//     sortedLastIndexOf: sortedLastIndexOf,
//     uniq: uniq,
//     sortedUniq: sortedUniq,
//     uniqBy: uniqBy,
//     sortedUniqBy: sortedUniqBy,
//     tail: tail,
//     take: take,
//     takeRight: takeRight,
//     takeRightWhile: takeRightWhile,
//     takeWhile: takeWhile,
//     union: union,
//     unionBy: unionBy,
//     unionWith: unionWith,
//     zip: zip,
//     unzip: unzip,
//     unzipWith: unzipWith,
//     add: add,
//     without: without,
//     xor: xor,
//     xorBy: xorBy,
//     xorWith: xorWith,
//     zipObject: zipObject,
//     zipObjectDeep: zipObjectDeep,
//     zipWith: zipWith,
//     countBy: countBy,
//     eachRight: eachRight,
//     forEachRight: eachRight,
//     findLast: findLast,
//     flatMap: flatMap,
//     flatMapDeep: flatMapDeep,
//     flatMapDepth: flatMapDepth,
//     groupBy: groupBy,
//     invokeMap: invokeMap,
//     propertyOf: propertyOf,
//     keyBy: keyBy,
//     orderBy: orderBy,
//     partition: partition,
//     reduceRight: reduceRight,
//     reject: reject,
//     sample: sample,
//     sampleSize: sampleSize,
//     shuffle: shuffle,
//     now: now,
//     after: after,
//     ary: ary,
//     bindKey: bindKey,
//     curry: curry,
//     partial: partial,
//     partialRight: partialRight,
//     curryRight: curryRight,
//     debounce: debounce,
//     flip: flip,
//     memoize: memoize,
//     values: values,
//     overArgs: overArgs,
//     rearg: rearg,
//     rest: rest,
//     spread: spread,
//     throttle: throttle,
//     unary: unary,
//     castArray: castArray,
//     cloneDeep: cloneDeep,
//     conformsTo: conformsTo,
//     eq: eq,
//     gt: gt,
//     gte: gte,
//     isInteger: isInteger,
//     isLength: isLength,
//     isMatchWith: isMatchWith,
//     isMatch: isMatch,
//     isNil: isNil,
//     isObjectLike: isObjectLike,
//     isSafeInteger: isSafeInteger,
//     isTypedArray: isTypedArray,
//     isWeakSet: isWeakSet,
//     lt: lt,
//     lte: lte,
//     toFinite: toFinite,
//     toInteger: toInteger,
//     toLength: toLength,
//     toPlainObject: toPlainObject,
//     toNumber: toNumber,
//     toSafeInteger: toSafeInteger,
//     ceil: ceil,
//     divide: divide,
//     maxBy: maxBy,
//     meanBy: meanBy,
//     mean: mean,
//     minBy: minBy,
//     multiply: multiply,
//     subtract: subtract,
//     sum: sum,
//     sumBy: sumBy,
//     clamp: clamp,
//     inRange: inRange,
//     random: random,
//     assignInWith: assignInWith,
//     assignWith: assignWith,
//     at: at,
//     defaultsDeep: defaultsDeep,
//     findKey: findKey,
//     findLastKey: findLastKey,
//     forIn: forIn,
//     forInRight: forInRight,
//     forOwnRight: forOwnRight,
//     functions: functions,
//     functionsIn: functionsIn,
//     get: get,
//     hasIn: hasIn,
//     invert: invert,
//     invertBy: invertBy,
//     invoke: invoke,
//     keysIn: keysIn,


//   }
// })(typeof global === 'undefined' ? window : global)
