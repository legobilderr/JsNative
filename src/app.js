import './style.css'
import {createModal, isValid} from "./utils";
import {Question} from "./question";
import {authWithEmailAndPassword, getFormAuth} from "./form";
const form = document.getElementById('form');
const button = form.querySelector('#submitButton')
const input = form.querySelector('#question-input')
const buttonModal = document.getElementById('buttonModal')

window.addEventListener('load',Question.renderList)

form.addEventListener('submit',submitForm);
input.addEventListener('input',()=>{
    button.disabled=!isValid(input.value)
})
buttonModal.addEventListener('click',openModal )

function submitForm(event){
    event.preventDefault();
    if (isValid(input.value)){
        const question = {
            text: input.value.trim(),
            data: new Date().toJSON()
        }
        button.disabled= true
        //Asunc reequest
        Question.loadOnServer(question).then(()=>{
            input.value=''
            input.className = ''
        })


    };
}

function openModal(){
    createModal('авторизация',getFormAuth())
    document.getElementById('auth-form').addEventListener('submit',authFormHendler)
}

function authFormHendler(event){
    event.preventDefault()
    const authButton = event.target.querySelector('button')
    const email = event.target.querySelector('#email-input').value
    const password = event.target.querySelector('#password-input').value

    authButton.disabled = true

    authWithEmailAndPassword(email, password)
      .then(Question.fetch)
      .then(renderModalAfterAuth)
      .then(()=>authButton.disabled = false)
}
function renderModalAfterAuth(content){
    if (typeof content==='string'){
        createModal('ошибка',content)
    }else{
        createModal('список вопросов',Question.listToHTML(content))
    }
}