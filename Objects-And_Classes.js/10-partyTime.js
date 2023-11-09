function partyTime(arr) {
    let partyIndex = arr.indexOf('PARTY');
    let vip = [];
    let regular = [];

    let guestInList = arr.slice(0, partyIndex);
    let arrivingGuest = arr.slice(partyIndex);

    for (let guest of guestInList) {
        if (isNaN(guest[0])) {
            regular.push(guest);
        } else {
            vip.push(guest);
        }
    }

    let allGuests = vip.concat(regular)

    for (let guest of arrivingGuest) {
        if (allGuests.includes(guest)) {
            let idxToRemove = allGuests.indexOf(guest)
            allGuests.splice(idxToRemove, 1);
        }
    }

    console.log(allGuests.length);

    for (let person of allGuests) {
        console.log(person)
    }


}