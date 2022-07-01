const express = require("express");
const CryptoJS = require("crypto-js");
const cors     = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());

app.post('/decrypt',(req,res,next)=>{

    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(req.body.pass, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    console.log(req.body.pass, originalText);
    res.json({data:originalText});
});

app.listen(3000,()=>console.log('server run at port 3000'));