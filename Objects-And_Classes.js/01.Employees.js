function employees(arr){
    let employeesList = {};
    
    for(let name of arr){
        let employeeName = name;
        let number = name.length;
    
        employeesList.name = employeeName;
        employeesList.number = number;
    
        console.log(`Name: ${employeesList.name} -- Personal Number: ${employeesList.number}`);
    }
    }