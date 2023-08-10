const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = null;

    for (let i = 0; i < people.length; i++) { // loop through people
        let person = people[i]; 
        personProperties = Object.keys(person);

        if(personProperties.length < 3) { // person is alive
            // set death date to NOW
            let now = new Date()
            let yearNow = now.getFullYear()
            person["yearOfDeath"] = yearNow;
        }
            
        let personAge = person["yearOfDeath"] - person["yearOfBirth"];
        
        // check if this person is older
        if (personAge > oldestAge) {
            oldestAge = personAge;
            oldestPerson = person;
        }
    }
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
