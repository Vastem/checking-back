import test from 'node:test'
import assert from 'node:assert/strict'
import UserService from '../services/userService.js'
import { connect } from '../config/db.js'
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT ?? 3000

console.log(process.env.PORT)

test('registro service', async () => {
    await connect()
    const userService = new UserService()
    const user = await userService.createUser({ username:"erick", email: 'erick@gmail.com', password: '12345' })
    assert.equal(user.username, 'erick')
    assert.equal(user.email, "erick@gmail.com")
    assert.equal(user.password, "12345")
})

test('registro controller', async () => {
    const response = await fetch(`http://localhost:${PORT}/user/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: "marco4",email: 'marco@gmail.com', password: '1234' })
    })

    const data = await response.json()

    assert.equal(response.status, 200)
    assert.equal(data.username, 'marco4')
    assert.equal(data.email, 'marco@gmail.com')
    assert.equal(data.password, '1234')
})

test('login service', async () => {
    await connect()
    const userService = new UserService()
    const user = await userService.login({ email: 'roberto@gmail.com', password: '1234' })
    assert.equal(user.email, "roberto@gmail.com")
    assert.equal(user.password, "1234")
})

test('login controller', async () => {
    const response = await fetch(`http://localhost:${PORT}/user/login`, {
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

