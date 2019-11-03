
    const express = require ('express')

    const router = express.Router();

    const server = require ('../serveiec/server');

    const sql = require ('../routes/departments/departmentsSql');

    const bodyconverset = require('../body/body');

    router.use(express.json());

    router.post('/departments' , (req , res) =>{
        bodyconverset(req.body , sql.statments.return).then(result =>{
        server(req , res , sql.statments.insert , result , sql.statments.requireCommit);
    })
})
   
    module.exports = router ;