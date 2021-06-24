export function getModal() {
  return (
    `<form class="mui-form" id="form">
            <div class="mui-textfield mui-textfield--float-label">
                <input type="email" id="email-input" required minlength="10" maxlength="256">
                <label for="email-input">Ваш эмэйл</label>
                <input type="password" id="password-input" required minlength="10" maxlength="256">
                <label for="password-input">Ваш пароль</label>
            </div>
            <button id="submitButton" type="submit" class="mui-btn mui-btn--raised mui-btn--primary" disabled>спросить</button>
        </form>`
  )
}