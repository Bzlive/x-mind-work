
const csv = require('csvtojson')
const fs = require('fs')
const fileFilePath = './src/assets/file/bill.csv'
const categoriesFilePath = './src/assets/file/categories.csv'

const build = () => {
  const files = [
    {
      name: 'bill',
      src: fileFilePath
    },
    {
      name: 'categories',
      src: categoriesFilePath
    }
  ]

  files.map((item) => {
    csv().fromFile(item.src).then((jsonObj)=>{
      jsonObj = JSON.stringify(jsonObj)
      fs.writeFile(`./src/assets/json/${item.name}.json`, jsonObj, 'utf-8', function(err) {
        if(err) {
          return console.log(err)
        }
      })
    }).catch(err => {
      console.log(err)
    })
  })
}

build()