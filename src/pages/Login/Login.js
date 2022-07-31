import './Login.css'

// const id = document.getElementById('id')
// const password = document.getElementById('password')
// const loginButton = document.getElementById('loginButton')
// const error = document.getElementById('error')
// // loginButton.disabled=true;

// id.addEventListener('keyup', () => buttonActive())
// password.addEventListener('keyup', () => buttonActive())
// loginButton.addEventListener('click', () => validation())

// function buttonActive(){
//     if(id.value.length>0 && password.value.length>0){
//         loginButton.disabled=false;
//         loginButton.style.backgroundColor = '#0095F6';
//         loginButton.classList.add('loginButtonHover')
//     } else{
//         loginButton.disabled=true;
//         loginButton.style.backgroundColor = '#C4E1FB';
//         loginButton.classList.remove('loginButtonHover')
//     }
// }

// function validation(){
//     if (id.value.includes('@') && password.value.length>4){
//         // location.href='./main.html';
//         return true;
//     } else {
//         error.innerText='사용자 정보를 확인하고 다시 입력해주세요.';
//     }
// }


function Login() {
    return (
            <div className="loginContainer">
                <h1 className="loginTitle">
                    westagram
                </h1>
                <div className="loginBox">
                    <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" id="id" />
                    <input type="password" placeholder="비밀번호" id="password" />
                </div>
                <button id="loginButton">
                            로그인
                </button>
                <div id="error">
                </div>
                <a href="" className="question">비밀번호를 잊으셨나요?</a>
            </div>
    );
}

export default Login;