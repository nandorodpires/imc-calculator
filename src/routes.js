const express = require('express')
const router = express.Router()

const imcService = require('./services/ImcService')

router.get('/imc', (req, res) => {
    const { imc } = req.body

    if (!imc) {
        return res.status(400).json({
            success: false,
            error: 'IMC value is required'
        })
    }

    const situation = imcService.getSituation(imc)

    return res.json({
        success: true,
        response: situation 
    })
})

router.post('/imc', (req, res) => {

    const { weight, height, situation } = req.body
    let status = null

    if (!weight || !height) {
        return res.status(400).json({
            success: false,
            error: 'Weight or height is required'
        })
    }

    const imc = imcService.getImc(weight, height)

    if (situation) {
        status = imcService.getSituation(imc)
    }
        
    res.json({
        success: true,
        response: {
            imc,
            status
        }
    })

})

module.exports = router