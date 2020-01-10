const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.status(200).send("BaseURL for all the GET routes");
})

module.exports = router