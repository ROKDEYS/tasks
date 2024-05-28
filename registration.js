let name = document.getElementsByClassName('name')[0]
let email = document.getElementsByClassName('email')[0]
let password = document.getElementsByClassName('password')[0]
let register = document.getElementsByClassName('register')[0]


register.addEventListener('click', function (){
    // alert(name.value)
    if (name.value == '' || email.value == '' || password.value == ''){
        alert('no content')
        return;
    }
    let data = {
        name: name.value ,
        email: email.value ,
        password: password.value

    }

    localStorage.setItem('data', JSON.stringify(data))
    location.href = '/'
}
)


