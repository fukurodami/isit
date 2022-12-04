function auth() {
    let login = document.querySelector('#login').value
    let pass = document.querySelector('#pass').value
    if (login == "admin" & pass == "admin123") {
        location.href = 'main_page.html'
    }
    else {
        document.querySelector('#status').textContent = 'Incorrect login or password'
    }
}