const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())


const db = mysql.createConnection({
  host: 'fixfis.dev',
  user: 'u20_95Rk4e6xgI',
  password: 'VGIuA^^LzP@ygQaMpEFhkz4!',
  database: 's20_mascotas'
})

//DB es Mysql2
db.connect((err) => {
  if (err) throw err;
  console.log("Conectando a la BD...")
})
//App es express
// req, cliente-server || res, server-cliente
app.get('/mascotas', (req, res) => {
  const sql = "Select * from mascotas limit 10"
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send({ msg: 'Error acceso a datos' })
    res.json(result)
  })
})
app.post('/mascotas', (req, res) => {
  const { tipo, nombre, color, peso } = req.body

  const sql = "Insert into mascotas (tipo,nombre,color,peso) values (?,?,?,?)"
  db.query(sql, [tipo, nombre, color, peso], (err, result) => {
    if (err) return res.status(500).send({ msg: 'Error acceso a datos' })
    res.send({
      succes: true,
      msg: 'Nueva mascota',
      id: result.insertId
    })
  })
})

app.delete('/mascotas/:id', (req, res) => {
  const sql = "delete from mascotas where id = ?"
  const { id } = req.params
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send({ msg: 'Error acceso a datos' })
    if (result.affectedRows == 0) {
      return res.status(404).send({
        succes: true,
        msg: 'Mascota eliminada'
      })
    }

    return res.send({
      succes: true,
      msg: 'Mascota actualizada'
    })
  })
})

app.put('/mascotas/:id', (req, res) => {
  const sql = "Update mascotas set tipo =?, nombre=?,color=?,peso=? where id =?"
  const { id } = req.params
  const { tipo, nombre, color, peso } = req.body
  db.query(sql, [tipo,nombre,color,peso,id], (err, result) => {
    if (err) return res.status(500).send({ msg: 'Error acceso a datos' })
    return res.send({
      succes: true,
      msg: 'Resgistro actualizado'
    })
  })
})

const PORT = 21501
app.listen(PORT, () => {
  console.log("Servidor inicializado con el puerto 22000")
})

console.log("MAS NA MI BROEEEEEEEEEEER")
console.log("node is live")
