function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  let choice = getCookie("username")
  const russian = document.querySelector('.ru')
  const georgian = document.querySelector('.ge')
  const english = document.querySelector('.en')
  russian.addEventListener('click', () => {
      choice = "ru"
      setCookie('username',choice, 30)
      location.reload();
  })
  georgian.addEventListener('click', () => {
      choice = 'ge'
      setCookie('username',choice, 30)
      location.reload();
  })
  english.addEventListener('click', () => {
      choice = "en"
      setCookie('username',choice, 30)
      location.reload();
  })
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        user = choice
    } else {
       user = choice;
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }



