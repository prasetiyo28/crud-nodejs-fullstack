//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
 
//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});

// set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public sebagai static folder untuk static file
app.use('/assets',express.static(__dirname + '/public'));
 
//route untuk homepage
app.get('/',(req, res) => {
  let sql = "SELECT * FROM produk";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('lihat_produk',{
      results: results
    });
  });
});
 
app.post('/simpan',(req, res) => {
  let data = req.body;
  console.log("data",data);
  let sql = "INSERT INTO produk SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

app.get('/delete/:id',(req, res) => {
  let idProduk = req.params.id;
  let sql = "DELETE FROM produk WHERE id="+idProduk+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});
 
//route for homepage
app.get('/edit/:id',(req, res) => {
  let idProduk = req.params.id;
  let sql = "SELECT * FROM produk WHERE id="+idProduk+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('edit',{
      results: results[0]
    });
  });
});

app.post('/update',(req, res) => {
  let data = req.body;
  let sql = "UPDATE produk SET nama_produk = '"+ data.nama_produk +"',jumlah = "+ data.jumlah +",harga = "+ data.harga +",keterangan ='"+ data.keterangan +"' WHERE id="+data.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//connect ke database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//server listening
app.listen(8000, () => {
    console.log('Server is running at port 8000');
  });
