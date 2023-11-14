function cutAndReverse(str){

    let half = str.length / 2;
    let leftHalf = str.slice(0, half);
    let rightHalf = str.slice(half);
    console.log(leftHalf.split('').reverse().join(''));
    console.log(rightHalf.split('').reverse().join(''));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
//cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');