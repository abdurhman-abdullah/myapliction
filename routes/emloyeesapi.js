
    const express = require ('express')

    const router = express.Router();

    const server = require ('../serveiec/server');

    const sql = require ('../routes/employees/employeessql');

    router.use(express.json());

    router.get('/employees' , (req , res) =>{
        server(req , res , sql.statments.select , sql.statments.bindings , sql.statments.requireCommit);
    })
   
    module.exports = router ;