// 无法使用 node 运行， node 需要7.6以上才能直接支持 async await 使用浏览器 运行即可
function sleep (timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(0)
      resolve()
    }, timeout)
  })
}

let  wake = async function() {
  try {
    await sleep(1000)
    console.log(1)
  } catch (err) {
    console.log(err)
  }
}
 wake()
