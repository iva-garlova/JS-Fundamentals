function towns(arr){
    for(let el of arr){
        let [townName, latitude, longitude] = el.split(' | ');
            latitude = Number(latitude).toFixed(2);
            longitude = Number(longitude).toFixed(2);

        let townObj = {town: townName, latitude: latitude, longitude: longitude};

        console.log(townObj);
    }
}
