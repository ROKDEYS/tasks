let create = document.getElementsByClassName('create')[0]
let input = document.getElementsByClassName('input')[0]
let tasks = document.getElementsByClassName('tasks')[0]
let select = document.getElementsByClassName('select')[0]
let notes = JSON.parse(localStorage.getItem('notes')) || []
let name = JSON.parse(localStorage.getItem('data')).name || ''
let miniShop = document.getElementsByClassName('minicircle-shop')[0]
let miniMoney = document.getElementsByClassName('minicircle-money')[0]
let miniCelebraite = document.getElementsByClassName('minicircle-celebraite')[0]
let logout = document.getElementsByClassName('logout')[0]
let profile = document.getElementsByClassName('profile') [0]
profile.textContent = name
let numbers = {
    shop: 0,
    money: 0,
    celebraite: 0
}




create.addEventListener('click', function () {
    if(input.value){
        let newTask = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.classList.add('category')
        h3.textContent = select.value 
        if(select.value == 'go to shop'){
            numbers.shop++
            miniShop.textContent = numbers.shop
        }
        else if(select.value == 'get cash'){
            numbers.money++
            miniMoney.textContent = numbers.money
        }
        else if(select.value == 'celebraite'){
            numbers.celebraite++
            miniCelebraite.textContent = numbers.celebraite
        }
        newTask.textContent = input.value
        newTask.classList.add('task')
        newTask.append(h3)
        tasks.append(newTask)
        input.value = ''
        //alert(input.value)
        let button = document.createElement('button')
        button.classList.add('button')
        newTask.append(button)
        button.textContent = '✓'
        button.addEventListener('click',
        function (){
            if( !button.classList.contains('active')) {

                if(h3.textContent == 'go to shop'){
                    numbers.shop--
                    miniShop.textContent = numbers.shop
                }
                else if(h3.textContent == 'get cash'){
                    numbers.money--
                    miniMoney.textContent = numbers.money
                }
                else if(h3.textContent == 'celebraite'){
                    numbers.celebraite--
                    miniCelebraite.textContent = numbers.celebraite
                }
                button.classList.add('active')
                newTask.style.background = 'rgba(255, 255, 255, 0.5)'
                newTask.style.textDecoration  = 'line-through'
            }

            else{

                if(h3.textContent == 'go to shop'){
                    numbers.shop++
                    miniShop.textContent = numbers.shop
                }
                else if(h3.textContent == 'get cash'){
                    numbers.money++
                    miniMoney.textContent = numbers.money
                }
                else if(h3.textContent == 'celebraite'){
                    numbers.celebraite++
                    miniCelebraite.textContent = numbers.celebraite
                }
                button.classList.remove('active')
                newTask.style.background = ''
                newTask.style.textDecoration  = ''

            }




        }
    )
    }
})

logout.addEventListener('click', 
function (){
    location.href = 'registration.html'
}
)

localStorage.setItem('notes', JSON.stringify([
    {
        title: 'buy coffee',
        category: 'go to shop'
    }
]))






