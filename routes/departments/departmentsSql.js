
let departments = {

    statments : {
        insert : `insert into DEPARTMENTS (DEPARTMENT_ID , DEPARTMENT_NAME)
        values (:DEPARTMENT_ID , :DEPARTMENT_NAME)
        return 
        DEPARTMENT_ID , 
        DEPARTMENT_NAME
        into 
        :R_DEPARTMENT_ID , 
        :R_DEPARTMENT_NAME`,
        return : ['R_DEPARTMENT_ID' , 'R_DEPARTMENT_NAME']
         , bindings : [] 
         , requireCommit : true 
    }
}

module.exports = departments ;