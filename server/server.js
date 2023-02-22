const PORT = process.env.PORT ?? 8000
const express = require ('express')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())
/*
app.get('/', (req,res) => {
    res.send('HARİTA HACETTEPE')
})
*/
app.get('/beytepenodesrev5', async(req,res) => {
    try {
        const roads = await pool.query('SELECT * FROM beytepenodesrev5')
        res.json(roads.rows)
    } catch(err) {
        console.error(error)
    }
})

app.get('/beytepe_roads_rev2', async(req,res) => {
    try {
        const roads2 = await pool.query('SELECT * FROM beytepe_roads_rev2')
        res.json(roads2.rows) 
    } catch(err) {
        console.error(error)
    }
})

app.get('/otopark', async(req,res) => {
    try {
        const otopark = await pool.query('SELECT * FROM otopark')
        res.json(otopark.rows)
    } catch(err) {
        console.error(error)
    }
})

app.listen(PORT,() => {
    console.log(`Server running on PORT: ${PORT}`);
});



