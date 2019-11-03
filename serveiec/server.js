
    const oracledb = require ('../connection/connections');
    let responce ;
    function server (req , res , string , binding , requirecommit)
    {
        oracledb.Execute(string , binding , (resultraws , resultoutBinds , resultrawaffected) => {
            try { 
                if(requirecommit){
                oracledb.Commit(resultoutBinds , (sum) =>{
                })
            }
                let result = resultraws || resultoutBinds || resultrawaffected
                   let myresult = 
                   {
                       status : 200 ,
                       Rows : result , 
                       message : 'seccessed'
                   } 
                 res.status(200).json(myresult);
                }
                catch(error){
                    let err = {
                        status : 400 ,
                        message : "this error"
                    }
                    res.status(400).json(err);
                }
        })
    }
    module.exports = server ;