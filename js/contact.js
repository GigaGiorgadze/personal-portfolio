let lang = getCookie("username");
const logo = document.querySelector('#logo')
const home = document.querySelector('#home')
const work = document.querySelector('#work')
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const me = document.querySelector('#me')
if(lang == 'ge'){
    logo.innerText = 'გიგა გიორგაძე'
    home.innerText = 'მთავარი'
    work.innerText = 'პროექტები'
    about.innerText = 'ჩემ შესახებ'
    contact.innerText = 'დამიკავშირდით'
    me.innerText = 'საკონტაქტო ინფორმაცია'
}else if(lang == 'en'){
    console.log('HELLLOOO MATE')
}else{
    logo.innerText = 'Гига Гиоргадзе'
    home.innerText = 'главная'
    work.innerText = 'проекты'
    about.innerText = 'обо мне'
    contact.innerText = 'контакты'
    me.innerText = 'Контактная информация'
}