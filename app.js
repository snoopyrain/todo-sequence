const express = require('express')  //載入express
const app = express()  //啟用express

// 引用 express-handlebars
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const port = 3000

//告訴express 使用 handlebars 當作template engine並預設layout 是main

app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({extend: true}))
app.use(methodOverride('_method'))

//設定第一個首頁路由
app.get('/', (req, res)=>{
  return res.render('index')
})


//設定express port 3000
app.listen(port, ()=>{
  console.log('App is running')
})