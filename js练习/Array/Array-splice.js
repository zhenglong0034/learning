var arr = ['fdf', 'sdff', 23232, 666, 'ggh']

// var sp = arr.splice(2) // 未定义 其它位数，则移除start 后面所有， 输出 [ 'fdf', 'sdff' ]

// arr.splice(6) // start 大于最大长度时，不移除 [ 'fdf', 'sdff', 23232, 666, 'ggh' ]

// arr.splice(2, 2) // 从位置2开始，移除2个，输出：[ 'fdf', 'sdff', 'ggh' ]

// arr.splice('dfe') // 将 'dfe' 转为 0 ？ 全部移除了，输出 []

//arr.splice(1, '3')  // 将 '3' 转为 3，输出 [ 'fdf', 'ggh' ]

// arr.splice(1, '3fff') // '3fff'转为 0 ？ 输出 [ 'fdf', 'sdff', 23232, 666, 'ggh' ]

// arr.splice('3', 2) // '3' 转为 3 ，移除两位， 输出 [ 'fdf', 'sdff', 23232 ]


// arr.splice(2, 6) // 第二位大于 数组长度时，从start位置开始全部移除，输出 [ 'fdf', 'sdff' ]

// arr.splice(2, -2) // 第二位小于等于0 时不移除 ['fdf', 'sdff', 23232, 666, 'ggh']

// arr.splice(-1)  // start小于0时，从末位开始算起，最后一位为 -1， 倒数第二位为 -2 ，后面的全部移除

// arr.splice(-4, -2) //位数小于 等于0时不移除 [ 'fdf', 'sdff', 23232, 666, 'ggh' ]

// arr.splice(-4, 2) // 从倒数第四位开始 移除 两位 [ 'fdf', 666, 'ggh' ]

console.log(arr)
