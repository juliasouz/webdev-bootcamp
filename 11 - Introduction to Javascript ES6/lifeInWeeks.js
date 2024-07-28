function lifeInWeeks(age){
    const yearsRemaining = 90 - age;
    const days = yearsRemaining * 365;
    const weeks = yearsRemaining * 52;
    const months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(26);