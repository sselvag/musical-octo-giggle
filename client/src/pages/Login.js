import "../styles/login.css"

export default function Login () {
    return (
        <div class="login">
            <span class="loginTitle">Login</span>
            <form class="loginForm">
                <label class="loginLabel">Email</label>
                <imput class="loginInput" type="text" placeholder="Email"/>
                <label class="loginLabel">Password</label>
                <input class="loginInput" type="password" placeholder="Password"/>
                <button class="loginButton">Login</button>
            </form>
            <button class="signUpButton">Sign Up</button>
        </div>
    )
}