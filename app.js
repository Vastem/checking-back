import express from "express"
import userRouter from "./routes/userRoutes.js"
import courseRouter from "./routes/courseRoutes.js"
import unitRouter from "./routes/unitRoutes.js"
import attendanceRouter from "./routes/attendanceRoutes.js"

import { connectDatabase } from "./middlewares/connectDatabase.js"


const app = express()
app.use(express.json())

app.use("/", connectDatabase)

app.use("/user", userRouter)
app.use("/attendance", attendanceRouter)
app.use("/course", courseRouter)
app.use("/unit", unitRouter)

app.use((req, res) => {
    res.status(404).send({ message: "NOT FOUND" })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor express escuchando en el puerto " + PORT)
})