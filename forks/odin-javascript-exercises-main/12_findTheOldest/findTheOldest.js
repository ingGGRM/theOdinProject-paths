const findTheOldest = function(people) {
    for(let i = 0; i < people.length; i++) {
        if(typeof people[i].yearOfDeath  === 'undefined') {
            people[i].lived = (new Date()).getFullYear() - people[i].yearOfBirth;
        } else {
            people[i].lived = people[i].yearOfDeath - people[i].yearOfBirth;
        }
    }
    const livedSorted = people.sort((a,b) => a.lived > b.lived ? -1 : 1);
    return livedSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
