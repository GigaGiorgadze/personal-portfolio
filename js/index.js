let lang = getCookie("username");
const logo = document.querySelector('#logo')
const home = document.querySelector('#home')
const work = document.querySelector('#work')
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const hi = document.querySelector('#hi')
const name = document.querySelector('#name')
const tip = document.querySelector('#tip')
const see = document.querySelectorAll('#see')
const rock = document.querySelector('#rock')
const social = document.querySelector('#social')
const sunny = document.querySelector('#sunnyside')
const tic = document.querySelector('#tic')
const weather = document.querySelector('#weather')
const sketch = document.querySelector('#sketch')
const more = document.querySelector('#more')
const lets = document.querySelector('#lets')
const talk = document.querySelector('#talk')
if(lang == 'ge'){
    logo.innerText = 'გიგა გიორგაძე'
    home.innerText = 'მთავარი'
    work.innerText = 'პროექტები'
    about.innerText = 'ჩემ შესახებ'
    contact.innerText = 'დამიკავშირდით'
    hi.innerText = 'გამარჯობათ'
    name.innerHTML = 'მე ვარ გიგა გიორგაძე ჯუნიორ ვებ დეველოპერი'
    tip.innerText ='ჩაის კალკულატორი'
    see.forEach(se => se.innerText = "+ გადადით გვერდზე")
    rock.innerText = 'ქვა ქაღალდი მაკრატელი'
    social.innerText = 'მომხმარებლების შეფასება'
    sunny.innerText = 'sunnySide'
    tic.innerText = 'იქსი და ნული'
    weather.innerText = 'ამინდის პროგნოზი'
    travelo.innerText = 'travelo'
    sketch.innerText = 'დახატეთ ესკიზი'
    more.innerText = 'მეტი პროქტები'
    lets.innerText = 'ერთად ვიმუშაოთ'
    talk.innerText = 'დამიკავშირდით'
}else if(lang == 'ru'){
    logo.innerText = 'Гига Гиоргадзе'
    home.innerText = 'главная'
    work.innerText = 'проекты'
    about.innerText = 'обо мне'
    contact.innerText = 'контакты'
    hi.innerText = 'здравствуйте'
    name.innerHTML = 'я Гига Гиоргадзе я джуниор веб-разработчик'
    tip.innerText ='калькулятор чаевых'
    see.forEach(se => se.innerText = "+ посетить страницу")
    rock.innerText = 'камень ножницы Бумага'
    social.innerText = 'Отзывы Пользователей'
    sunny.innerText = 'sunnySide'
    tic.innerText = 'крестики-нолики'
    weather.innerText = 'прогноз погоды'
    travelo.innerText = 'travelo'
    sketch.innerText = 'нарисовать эскиз'
    more.innerText = 'больше проектов'
    lets.innerText = 'Давайте работать вместе'
    talk.innerText = 'свяжитесь со мной'
}