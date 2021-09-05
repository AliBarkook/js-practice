searchForUser()

async function searchForUser() {
    // console.log(e);
    // fetch('https://reqres.in/api/users?page=1')
    // .then(function (response) {
    //     console.log(response);
    // });

    let response = await fetch('https://reqres.in/api/users?page=1');
    let user = await response.json();


    console.log(user.data);

    const ul = document.getElementById("userList");
    user.data.forEach(user => {
        const li = document.createElement("li");
        li.innerText = user.first_name;
        ul.appendChild(li);
    });
}

