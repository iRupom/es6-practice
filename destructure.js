const person = {
    name: 'Rakib Talukder Rupom',
    age: 20,
    job: 'Youtubing',
    friendName: 'Mahbub Mithu',
    address: 'Sirajganj',
    phoneNo: '012999',
    seniors: ['mahbub', 'nipa', 'nabil']
};

const complexObject = {
    area: 'Sirajganj',
    info: {
        name: 'kala Mastan',
        Position: 'Gang leader'
    }
};

const { Position: pos } = complexObject.info;
console.log(pos);
// console.log(Position);

const { phoneNo: phone, friendName, seniors: borovai } = person;

const friends = ['salman khan', 'aamir khan', 'shahrukh khan', 'sakib khan'];
const [ff, ss,...restfriends] = friends;

// console.log(ff);
// console.log(ss);
// console.log(restfriends);
// const friend = person.friendName;

// console.log(friendName,phoneNo);
// console.log(friendName,phoneNo);
// console.log(phone);
// console.log(friendName);
// console.log(borovai);