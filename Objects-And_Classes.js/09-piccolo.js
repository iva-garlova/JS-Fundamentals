function picolo(arr) {
    let parking = {};

    for (let el of arr) {
        let tokens = el.split(', ');
        let command = tokens.shift();
        let number = tokens.shift();

        if (command == 'IN') {
            let status = 'parked';
            parking[number] = status;
        } else if (parking.hasOwnProperty(number)) {
            let status = 'not parked';
            parking[number] = status;
        }
    }
    let entries = Object.entries(parking).sort((a, b) => a[0].localeCompare(b[0]))
    let str = [];

    for (let [number, status] of entries) {

        if (status == 'parked') {
            str.push(number)
        }

    }
    for (let num of str) {
        console.log(num);
    }
}