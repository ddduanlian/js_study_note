# 排序算法

## 冒泡排序
双层循环，平均时间复杂度为O(n²)
```javascript
function bubbleSort(arr){
  var temp = 0
  for (var i = 0; i < arr.length-1; i++) {
    for (var j = 0; j < arr.length-1-i; j++) {
      if (arr[j]>arr[j+1]) {
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }      
    }    
  }
  return arr
}
```

##选择排序
平均时间复杂度为O(n²)
```javascript
function selectSort(arr){
  var temp
  for (var i = 0; i < arr.length; i++) {
    //初始化当前变量为最小的数
    var min = i
    
    //在剩下的数组中寻找比i小的数
    for (var j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[min]){
        min = j
      }      
    }

    //如果i不是最小的，就跟最小的数交换位置
    if(min !== i){
      temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}
```

##插入排序
是稳定排序，时间复杂度都是O(n²)
```javascript
function insertSort(arr){
  for (var i = 0; i < arr.length; i++) {

    //存储当前位置的value
    var value = arr[i]
    //在已排序的元素中，如果最后一位大于value，就将这个元素后移一位，在与value比较
    for (j = i-1; j > -1 && arr[j] > value; j--) {
      arr[j+1] = arr[j]       
    }
    //将value赋值
    arr[j+1] = value
  }
  return arr
}
```

##归并排序
第一种：自上而下的递归实现，调用mergeSort函数2n-1次，但会造成栈溢出的错误。平均时间复杂度为O(nlogn)，空间复杂度为O(n)
```javascript
function mergeSort(arr){
  if(arr.length === 1) return arr
  //拆分为两个子数组
  let middle = Math.floor(arr.length / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle)
  //子数组继续拆分，并不断合并
  return merge(mergeSort(left), mergeSort(right))
}

//合并两个子数组
function merge(left,right){
  let result = []
  while(left.length > 0 && right > 0){
    if(left[0] < right[0]){
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}
```