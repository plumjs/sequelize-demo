import express from 'express'

const app = express()
const router = express.Router()

router.get('/test', (req, res, next) => {
  const query = req.query
  res.json(req.query)
})
router.get('/getwxaccesstoken', (req, res, next) => {
  const { originalUrl, invitecode } = req.query
  const data = `default/wechatlogin/getwxaccesstoken?originalUrl=${originalUrl}&invitecode=${invitecode}`
  res.json(data)
})
app.use('/v1', router)

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
