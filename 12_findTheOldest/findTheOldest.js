const findTheOldest = function(people) {
    for (let i = 0; i < people.length; i++) {
        if (!people[i].yearOfDeath) {
            people[i].yearOfDeath = (new Date()).getFullYear();
        }
    } // put passing year to now 

    people = people.sort((a, b) => {
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge > bAge ? -1 : 1;
    });
    console.log(people);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
