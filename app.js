const users = [
	{
    id: 1,
    first_name: 'Mark',
    last_name: 'Otto',
    handle: '@mdo',
  },
  {
    id: 2,
    first_name: 'Jacob',
    last_name: 'Thornton',
    handle: '@fat',
  },
  {
    id: 3,
    first_name: 'Larry',
    last_name: 'the Bird',
    handle: '@twitter',
  },
]

console.log('duzina liste', users.length);

const usersList = document.getElementById('usersList');

//for (let i = 0; i < usersList.length; i++) {
// some code
//}

let usersHtml = '';

function renderUsersTable() {
  usersHtml = ''

	for (let user of users) {
    usersHtml +=  `<tr>
      <td>${user.id}</td>
      <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${user.handle}</td>
      <td><button class="bi bi-trash-fill" value="delete" onclick="deleteUser()" ></button></td>
    </tr>`

    // console.log(usersHtml);
  }
  
  usersList.innerHTML = usersHtml;
};


renderUsersTable();

// Add new user to the table
// Get value from input java script
// Call a function on a button click
// Rerender users table

// ADD USERS

function addNewUser() {

  const name = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const handler = document.getElementById('handler').value;

  const data = {
    id: users[users.length - 1].id + 1,
    first_name: name,
    last_name: lastName,
    handle: handler
  }

  users.push(data);
  renderUsersTable();

};

// Increse ID for each new user ++
// Clear form after submit

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('#first-name, #last-name, #handler');

  inputs.forEach(input => {
  input.value = '';
  });
});


//  DELETE USERS

function deleteUser() {
  const name = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const handler = document.getElementById('handler').value;

  const data = {
    id: users[users.length - 1].id + 1,
    first_name: name,
    last_name: lastName,
    handle: handler
  }

  users.pop(data);
  renderUsersTable();
};