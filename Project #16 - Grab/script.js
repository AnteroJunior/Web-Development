const form = document.querySelector('#form');
const email = document.querySelector('#userEmail');
const div = document.getElementById('div-email');
const i = document.getElementById('at');
const p = document.getElementById('error');

form.addEventListener('submit', e => {

    e.preventDefault();

    if(!testRegex(email.value)){

        div.classList.add('wrong');
        i.classList.add('wrongi');
        p.classList.add('d-block');

        setTimeout(() => {
            p.classList.remove('d-block');
        }, 3000);
    } else {
        location.href = 'index.html';
    }
    
});

function testRegex(email){

    const email_Regex_Test = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    return email_Regex_Test.test(email);

}