"use strict"

// eve.holt@reqres.in


let token = localStorage.getItem("token")

if (token) {
    location.replace("index.html")
}

$('.form').addEventListener('submit', async function (e) {
    
    e.preventDefault();

    let tokenData = {}
    await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: $('.name').value,
            email: $('.email').value,
            password: $('.password').value
        })
    }).then(res => res.json().then(data => tokenData = data))

    if (tokenData.token) {
        localStorage.setItem("token", JSON.stringify(tokenData.token))
        location.replace("index.html")
        console.log(token);
    } else {
        alert("Email yoki parol xato")
    }
})




$$('.input').forEach((el) => {
    el.addEventListener('blur', (event) => {
        if (event.target.value.trim().length == 0) {
            event.target.style.border = "3px solid red";
            event.target.setAttribute('placeholder', 'Pleace fill input . . .')
        } else {
            event.target.style.border = "3px solid green";
        }
    })
});

$('.password').addEventListener('keyup', (event) => {
    if (event.target.value.trim().length > 0) {
        $('.show').setAttribute('class', 'show bi bi-eye d-block')
    } else {
        $('.show').setAttribute('class', 'eye bi bi-eye-slash d-none')
    }
})

$('.bi-eye').addEventListener('click', () => {
    if ($('.password').getAttribute('type') === 'password') {
        $('.password').setAttribute('type', 'text');
        $('.bi-eye').setAttribute('class', 'show bi bi-eye d-none')
        $('.bi-eye-slash').setAttribute('class', 'eye bi bi-eye-slash d-block')
    }
})

$('.bi-eye-slash').addEventListener('click', () => {
    if ($('.password').getAttribute('type') === 'text') {
        $('.password').setAttribute('type', 'password');
        $('.bi-eye-slash').setAttribute('class', 'eye bi bi-eye-slash d-none')
        $('.bi-eye').setAttribute('class', 'show bi bi-eye d-block')
    }
})


