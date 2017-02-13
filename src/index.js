import {getUsers} from './api/userApi';
// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0,0.00');

// //adding comment to test appveyor
// console.log(`I wish I had ${courseValue} rinao`);

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user =>{
        usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.fName}</td>
        <td>${user.lName}</td>
        <td>${user.email}</td>
        <tr>`
    });

    global.document.getElementById('users').innerHTML = usersBody;
});
