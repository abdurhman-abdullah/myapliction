
    const oracledb = require ('oracledb');
    const dbconfig = require ('./dbconfig')
    function Connect (callback) {

        oracledb.getConnection(
            {

            user : dbconfig.user ,
            password : dbconfig.password

            } ,
        (err , connection)=>{
            if(err){
                console.log("err in connection" + err.message);
            }
           return callback(connection);
        }
        )
    }
    function Execute (string , binding , callback){

        Connect(connection => {
            connection.execute(string , binding  , (err , result) => {
                if(err){
                    console.log("err in execute" + err.message);
                }
               return callback(result.rows , result.outBinds , result.rowsAffected)
            })
        })
    }

    function Commit (result , callback) {
        let responce ;
        Connect (connection => {
        connection.commit(err =>{
            if(err){
                console.log("err in commit" + err)
            }
            else {
                 responce = result.outBinds 
                for(let key in result.outBinds){
                    responce[key] = result.outBinds[key][0]
                    console.log(key)
                }
                return callback (responce)
            }
        })
        
    })
        
    }

    module.exports = 
    {
        Connect : Connect ,
        Execute : Execute ,
        Commit : Commit
    };