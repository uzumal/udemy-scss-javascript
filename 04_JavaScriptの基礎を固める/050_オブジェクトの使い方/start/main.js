const person = {
    name: ['Code', 'Mafia'],
    age: 32,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'piano'
    },
    getFullName: function(){
        console.log(this.name[0] + this.name[1])
    }
};

person.age = 12;
const ageKey = 'age';
person[ageKey] = 13;
console.log(person.age);
person.getFullName();
