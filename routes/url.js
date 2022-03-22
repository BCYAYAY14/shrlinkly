const express = require('express')


const router = express.Router()


const Url = require('../schemas/urlSchema')



router.post('/create', async (req, res) => {

  if (!req.body.id) {
    return res.status(400).json('Missing id')
  } 

  if (!req.body.url) {
    return res.status(400).json('Missing url')
  } 
    const existAlready = await Url.findOne({
      urlCode: req.body.id
    })

  if (existAlready) {

  return res.status(409).json('The requested id is already taken')
}

  const created = new Url({
    url: req.body.url,
    urlCode: req.body.id
  })

  try {
    await created.save()
    res.status(201).json(created)
  } catch (error) {
    res.status(500).json(error)
  }

  
})


module.exports = router