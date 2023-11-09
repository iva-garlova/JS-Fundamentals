function companyUsers(arr){
    let list = {};
    
    for(let command of arr){
        let [company, user] = command.split(' -> ');
        
        if(company in list){
            if(!list[company].includes(user)){
                list[company].push(user)
            }
       } else {
        list[company] = [user];
       }
    }
       let entries = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    
       for(let [company, id] of entries){
        console.log(company);
        id.forEach(id => console.log(`-- ${id}`));
       }
    }