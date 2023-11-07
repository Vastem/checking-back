import test from 'node:test'
import assert from 'node:assert/strict'
import UserService from '../services/userService.js'
import { connect } from '../config/db.js'
import dotenv from "dotenv"
dotenv.config();


test('login service', async () => {
    await connect()
    const userService = new UserService()
    const user = await userService.login({ email: 'roberto@gmail.com', password: '1234' })
    assert.equal(user.email, "roberto@gmail.com")
    assert.equal(user.password, "1234")
})

test('login controller', async () => {
    const response = await fetch(`http://localhost:${process.env.PORT}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'roberto@gmail.com', password: '1234' })
    })

    const data = await response.json()

    assert.equal(response.status, 200)
    assert.equal(data.email, 'roberto@gmail.com')
    assert.equal(data.password, '1234')
})



