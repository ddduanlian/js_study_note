//1.双重循环
function unique(arr){
  var res = []
  for (var i = 0, arrLen = arr.length; i < arrLen; i++){
    for (var j = 0, resLen = res.length; j< resLen; j++){
      if(arr[i] === res[j]){
        break
      }
    }
    if (j === resLen) {
      res.push(arr[i])
    }
  }
  return res
}

//2.indexOf
function unique2(arr){
  var newArr = []
  arr.forEach(item => {
    if(newArr.indexOf(item) === -1){
      newArr.push(item)
    }
  })
  return newArr
}

//3.先对原数组进行排序，再进行比较(但是会改变数组元素的位置,区分不出数字和字符串数字)
function unique3(arr){
  var newArr = []
  arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== newArr[newArr.length-1]){
      newArr.push(arr[i])
    }
  }
  return newArr
}

//4.includes()
function unique4(arr){
  var newArr = []
  arr.forEach(item => {
    if(!newArr.includes(item)){
      newArr.push(item)
    }
  })
  return newArr
}

//5.Set
function unique5(arr){
  return [...new Set(arr)]
}

//6.Map
function unique6(arr){
  var mapArr = new Map()
  return arr.filter(item => {
    return !mapArr.has(item) && mapArr.set(item, 1)
  })
}
