function enrollUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('response').innerText = `Thank you, ${name}, for enrolling with BrightLearn!`;
    return false;
}