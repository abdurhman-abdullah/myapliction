
    const oracledb = require ('oracledb') ;
    const dbconfing = require ('./dbconfig')
        oracledb.createPool({
            user : dbconfing.user ,
            password : dbconfing.password , 
            poolMax : 10 ,
            poolMin : 1 ,
            poolIncrement : 1 
        } , (err , pool)=>{
            if(err){
                console.log("err in createPool")
            }
           require('./connections')(pool)
        })