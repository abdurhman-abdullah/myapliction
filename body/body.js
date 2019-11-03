const oracledb = require ('oracledb') ;

function post (body , parameter){

    return new Promise ((resolve , reject) => {

        try{
        for (let key in parameter){

            body[parameter[key]] = {type : oracledb.STRING , dir : oracledb.BIND_OUT}

        }

        resolve(body);
    }


        catch(error){
            reject(error.message);
        }
    })

}

module.exports = post ;