const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User= require('../models/User')

// Register
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({ username, email, password: hashedPassword })
        res.status(201).json({ message: 'succes' })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: 'erreur lors du signup' })
    }
})

// Login
router.post('signin', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email }})
        if (!user) {
            console.log(error)
            res.status(404).json({ message: 'Usr not found' })
        }
        const isFound = await bcrypt.compare(password, user.password)
        if (!isFound) {
            console.log(error)
            res.status(401).json({ message: 'Pwd wrong' })
        }
    } catch ( err ) {
        console.log(err)
        res.status(500).json({ message: 'Erreur lors de la connexion'})
    }
})