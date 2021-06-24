export class Question {
    static loadOnServer(data) {
        return fetch('https://jsnativeminin-default-rtdb.europe-west1.firebasedatabase.app/questions.json', {
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
            .then(() => {
                addToLocalStorage(data)
            }).then(Question.renderList)
    }

    static renderList() {
        const quesions = getQuestionsFromLocalStorege()
        const html = quesions?.length
            ? quesions.map(toCard).join('')
            : '<div class="mui--text-headline">Вопросов пока нет </div>'
        const list = document.getElementById('list')
        list.innerHTML = html
    }
}

function addToLocalStorage(question) {
    if (getQuestionsFromLocalStorege() === null) {
        localStorage.setItem('questions', JSON.stringify([question]))
    } else {
        updateLocalStorage(question)
    }
}

function updateLocalStorage(question) {
    const allquestions = getQuestionsFromLocalStorege()
    allquestions.push(question);
    localStorage.setItem('questions', JSON.stringify(allquestions))
}

function getQuestionsFromLocalStorege() {
    return JSON.parse(localStorage.getItem('questions'))
}

function toCard(questionShou) {
    return `<div class="mui--text-black-54">${new Date(questionShou.data).toLocaleDateString()} ${new Date(questionShou.data).toLocaleTimeString()}</div>
            <div>${questionShou.text}</div>
            <br>`
}
