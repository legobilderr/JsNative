import './style.css'
import {isValid} from "./utils";
import {Question} from "./question";
const form = document.getElementById('form');
const button = form.querySelector('#submitButton')
const input = form.querySelector('#question-input')

form.addEventListener('submit',submitForm);
input.addEventListener('input',()=>{
    button.disabled=!isValid(input.value)
})

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