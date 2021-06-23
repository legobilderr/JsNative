export class Question {
    static loadOnServer(data) {
        return fetch('https://jsnativeminin-default-rtdb.europe-west1.firebasedatabase.app/questions.json',  {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {

                data.id = response.name

                return data
            })
            .then(()=>{
                addToLocalStorage(data)
            })
    }
}

function addToLocalStorage(question) {

    if (localStorage.getItem('questions') === null) {
        localStorage.setItem('questions', JSON.stringify(question))
    } else {
        const questions = localStorage.getItem('questions')

    }
}