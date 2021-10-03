let lang = getCookie("username");
const logo = document.querySelector('#logo')
const home = document.querySelector('#home')
const work = document.querySelector('#work')
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutMe = document.querySelector('#aboutMe')
const me = document.querySelector('#me')
const info = document.querySelector('#info')
const lets = document.querySelector('#lets')
const talk = document.querySelector('#talk')
if(lang == 'ge'){
    logo.innerText = 'გიგა გიორგაძე'
    home.innerText = 'მთავარი'
    work.innerText = 'პროექტები'
    about.innerText = 'ჩემ შესახებ'
    contact.innerText = 'დამიკავშირდით'
    aboutMe.innerText = "ჩემ შესახებ"
    me.innerText = 'მე ვარ გიგა გიორგაძე ჯუნიორ ვებ დეველოპერი'
    info.innerHTML = 'მე ვარ 17 წლის ჯუნიორ ვებ დეველოპერი საქართველოდან, მე მვუშაობ კომპანია რედბერიში ინტერნის პოზიციაზე,ამჯერად მე ვცდილობ რომ ყოველდღე რაიმე საიტი ავაწყო და "გითჰაბზე" გამოვაქვეყნო, ჩემი ყველა გაკეთებული საიტი/პროექტი შეგიძლიათ ნახოთ  <a href="https://github.com/GigaGiorgadze">GitHub</a>-ზე, მე შემძლია მუშაობა დისტანციურად და პირადად, მე ვიცი ქართული რუსული და ინგლისური, და შემძლია სამივე ენაზე თავისუფლად მეტყველბა, კოდირების ენები რომლების ვიცი ქვემოთ არის ჩამოთვლილი'
    lets.innerText = 'ერთად ვიმუშაოთ'
    talk.innerText = 'დამიკავშირდით'
    
}else if(lang == 'ru'){
    logo.innerText = 'Гига Гиоргадзе'
    home.innerText = 'главная'
    work.innerText = 'проекты'
    about.innerText = 'обо мне'
    contact.innerText = 'контакты'
    aboutMe.innerText = 'обо мне'
    me.innerText = 'Я Гига Гиоргадзе джуниор веб-разработчик'
    info.innerHTML = `Я Гига Гиоргадзе джуниор веб-разработчик мне 17 лет я младший веб-разработчик из Грузия, в настоящее время я работаю в компании Redberry,  сейчас я пытаюсь создать веб-сайт или какую-то веб-игру каждый день, пока что у меня все хорошо, вы можете проверить мою страницу <a href="https://github.com/GigaGiorgadze">GitHub</a> и проверить все мои проекты подробно описаны там, я магу работать онлайн или лично, я могу свободно говорить на русском, английском и грузинском языках, языки на которых я могу кодировать, перечислены ниже`
    lets.innerText = 'Давайте работать вместе'
    talk.innerText = 'свяжитесь со мной'
}