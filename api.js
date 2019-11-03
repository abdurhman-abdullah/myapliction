
    const express = require ('express')

    const app = express();

    const employees = require ('./routes/emloyeesapi');
    const departments = require ('./routes/departmentsApi');


    app.use(employees) ;
    app.use(departments) ;


    app.listen(5000 , () => console.log("server is starting...."));