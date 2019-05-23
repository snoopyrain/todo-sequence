const express = require('express')  //載入express
const app = express()  //啟用express

//設定第一個首頁路由
app.get('/', (req, res)=>{
  res.send('hello world')
})


//設定express port 3000
app.listen(3000, ()=>{
  console.log('App is running')
})