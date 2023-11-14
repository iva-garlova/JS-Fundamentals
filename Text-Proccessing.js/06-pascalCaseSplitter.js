function pascalSpliter(str){
    
    console.log(str.split(/(?=[A-Z])/).join(", "))


}
pascalSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalSpliter('HoldTheDoor');
pascalSpliter('ThisIsSoAnnoyingToDo');