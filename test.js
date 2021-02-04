const fs = require('fs')

// 1. 读数据库
const usersString = fs.readFileSync('./db/users.json').toString()
//JSON字符串转对应数据，这里是数组
const usersArray = JSON.parse(usersString)
console.log(usersArray)
// console.log(usersArray instanceof Array) //true
// console.log(typeof usersString) //string

// 2. 写数据库
const user3 = { id: 3, name: 'jerry', password: 'ccc' }
usersArray.push(user3)
// 数组转JSON字符串
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)
