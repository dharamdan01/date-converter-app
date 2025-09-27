let form = document.querySelector('form');
let input = document.querySelector('input');
let localZone = document.querySelector('.local-zone span');
let utcZone = document.querySelector('.utc-zone span');
let isoZone = document.querySelector('.iso-zone span');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let timeStamp = Number(input.value);
    const date = new Date(timeStamp);
    localZone.innerText = date.toLocaleString('en-GB', {
        dateStyle:'full',
        timeStyle: 'full',
    })
    utcZone.innerText = date.toUTCString();
    isoZone.innerText = date.toISOString();

})

// let user1DOB = new Date('2024-04-07');
// let user2DOB = new Date('2014-04-03');

// let user1 = Date.parse(user1DOB);
// let user2 = Date.parse(user2DOB);
// if(user1 < user2)
// {
//     console.log('user1 is greater');
// }
// else console.log('user2 is greater');
