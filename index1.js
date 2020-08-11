const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(3000, () => {
    console.log("Server run on port 3000");
})

//endpoint satu
app.post("/kubus", (req,res) => {
    
    let rusuk = Number(req.body.rusuk) 

    let volume = rusuk * rusuk * rusuk
    let luasPermukaan = 6 * (rusuk * rusuk)

    let response = {
        nama: "kubus",
        volume: volume,
        luasPermukaan: luasPermukaan,
    }

    res.json(response)
})

//endpoint dua
app.post("/balok", (req,res) => {
    
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar) 
    let tinggi = Number(req.body.tinggi) 

    let volume = panjang * lebar * tinggi
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    let response = {
        nama: "balok",
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    res.json(response)
})

//endpoint tiga
app.post("/tabung", (req,res) => {

    let jarijari =  Number(req.body.jarijari)
    let tinggi = Number(req.body.tinggi)

    let volume = 3.14 * (jarijari * jarijari) * tinggi
    let luasPermukaan = 2 * 3.14 * jarijari * (tinggi + jarijari)

    let response = {
        nama: "tabung",
        volume: volume,
        luasPermukaan: luasPermukaan,
    }

    res.json(response)
})

//endpoint empat
app.post("/kerucut", (req,res) => {
  
    let jarijari =  Number(req.body.jarijari)
    let tinggi = Number(req.body.tinggi)
    let sisiMiring = Number(req.body.sisiMiring)

    let volume = 1/3 * 22/7 * (jarijari * jarijari) * tinggi
    let luasPermukaan = 22/7 * jarijari * (jarijari + sisiMiring)

    let response = {
        nama: "kerucut",
        volume: volume,
        luasPermukaan: luasPermukaan,
    }

    res.json(response)
})


//endpoint kelima
app.post("/bola", (req,res) => {
    
    let jarijari =  Number(req.body.jarijari)

    let volume = 4/3 * 3.14 * jarijari * jarijari * jarijari
    let luasPermukaan = 4 * 3.14 * jarijari * jarijari

    let response = {
        nama: "bola",
        volume: volume,
        luasPermukaan: luasPermukaan,
    }

    res.json(response)
})

