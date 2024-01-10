function solve(input){
    let record = {};
    let peopleCount = 0;

    let command = input.shift();
    while(command != "Results"){
        let token = command.split(':');
        let action = token.shift();
        let [name, health, energy] = token;
        
        if(action == "Add"){
            if(name in record){
                record[name].health += Number(health);

            } else {
                peopleCount++
                record[name] ={
                    health:Number(health),
                    energy:Number(energy)
                 }
            }
        } else if (action == "Attack"){
            let name1 = token[0];
            let name2 = token[1];
            let damage = Number(token[2]);
            if(name1 in record && name2 in record){
                record[name1].energy -= 1;
                record[name2].health -= damage;
                if(record[name2].health <= 0){
                    console.log(`${name2} was disqualified!`);
                    delete record[name2];
                    peopleCount--
                }
                if(record[name1].energy <= 0){
                    console.log(`${name1} was disqualified!`);
                    delete record[name1];
                    peopleCount--
                }
            }
        } else if (action == "Delete"){
            let name = token[0];
            if(name == "All"){
                for (let key in record) {
                    if (record.hasOwnProperty(key)) {
                      delete record[key];
                    }
                  }
                peopleCount = 0;
            } else {
                delete record[name];
                peopleCount--
            }
        }

        command = input.shift()
    }
    console.log(`People count: ${peopleCount}`);
   for(let names in record){
    console.log(`${names} - ${record[names].health} - ${record[names].energy} `);
   }


}
// solve((["Add:Mark:1000:5", 

// "Add:Clark:1000:2", 

// "Attack:Clark:Mark:500", 

// "Attack:Clark:Mark:800", 

// "Add:Charlie:4000:10", 

// "Results"]) );
// solve((["Add:Bonnie:3000:5", 

// "Add:Kent:10000:10", 

// "Add:Johny:4000:10", 

// "Attack:Johny:Bonnie:400", 

// "Add:Johny:3000:5", 

// "Add:Peter:7000:1", 

// "Delete:Kent", 

// "Results"]))
solve((["Add:Bonnie:3000:5", 
"Add:Johny:4000:10", 
"Delete:All", 

"Add:Bonnie:3333:3", 

"Add:Aleks:1000:70", 

"Add:Tom:4000:1", 
"Results"]) )