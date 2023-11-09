function minorTask(arr){
    let listOfResourses = {};

    for(let i = 0; i < arr.length; i += 2){
        let resourse = arr[i];
        let qnty = Number(arr[i + 1]);

        if(resourse in listOfResourses){
            listOfResourses[resourse] += qnty;
        } else {
            listOfResourses[resourse] = qnty
        }
    }
    let entries = Object.entries(listOfResourses);
    for(let [resourse, qnty] of entries){
        console.log(`${resourse} -> ${qnty}`);
    }

}