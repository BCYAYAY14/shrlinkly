const express = require('express')
const path = require('path')

const router = express.Router()


const Url = require('../schemas/urlSchema')



router.get('/:id', async (req, res) => {

  if (req.params.id == "register") {
 return   res.sendFile(path.join(__dirname, '../html/register.html'))
  }

  
 const urlFound =  await Url.findOne({
    urlCode: req.params.id
  })

  if (!urlFound) {
    return res.status(404).send(`No data found for id ${req.params.id}`)
  }

  res.redirect(urlFound.url)
 
})

router.get('/', async (req, res) => {
res.send('Please enter the url id :)')
 
})

module.exports = router