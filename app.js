searchForUser()

async function searchForUser() {

    let response = await fetch('https://reqres.in/api/users?page=1');
    let user = await response.json();



    const ul = document.getElementById("userList");

    user.data.forEach(user => {
        const li = document.createElement("li");
        li.innerText = user.first_name;
        ul.appendChild(li);
    });
}
