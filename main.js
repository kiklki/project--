function submiter(el){
    let user = el.username.value;
    let pass = el.password.value;
    let fail = "";
    if (user.length < 5){
        alert("Логин должен состоять минимум из 5 символов!")
        return false;
    } else if (pass.length < 7){
        alert("Пароль должен состоять минимум из 7 символов!")
        return false;
    } else if (user.split("#").length > 1 || pass.split("#").length > 1){
        alert("Введены недопустимые символы!");
        return false;
    } else {
        window.location = 'news.html'
        return false;

    }
    
}