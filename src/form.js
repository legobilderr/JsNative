export function getFormAuth() {
  return (
    `<form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
                <input type="email" id="email-input" required minlength="10" maxlength="256">
                <label for="email-input">Ваш емэйл</label>
                <input type="password" id="password-input" required minlength="10" maxlength="256">
                <label for="password-input">Ваш пароль</label>
            </div>
            <button  type="submit" class="mui-btn mui-btn--raised mui-btn--primary" >войти</button>
        </form>`
  )
}

export function authWithEmailAndPassword(email, password){
  const apiKey =process.env.API_SIGN_IN
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,{
    method:'POST',
    body:JSON.stringify({
      email, password, returnSecureToken:true
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json() )
    .then(data=>data.idToken)
}

export function registerEmailAndPassword(email, password){
  const apiKeySignUp =process.env.API_SIGN_UP
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKeySignUp}`,{
    method:'POST',
    body:JSON.stringify({
      email, password, returnSecureToken:true
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json() )
    .then(data=>console.log(data))

}