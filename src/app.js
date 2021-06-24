import './style.css'
import {createModal, isValid} from "./utils";
import {Question} from "./question";
import {getModal} from "./form";
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
    createModal('авторизация','<h1>Test</h1>')
}