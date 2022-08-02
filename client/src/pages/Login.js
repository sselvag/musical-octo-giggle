import "../styles/login.css"

export default function Login () {
    return (
        <div class="login">
            <form class="loginForm">
                <span class="loginTitle">Login</span>
                <label class="loginLabel">Username</label>
                <input class="loginInput" type="text" placeholder="Username"/>
                <label class="loginLabel">Password</label>
                <input class="loginInput" type="password" placeholder="Password"/>
                <button class="loginButton">Login</button>
            </form>
            <button class="loginRegisterButton">Register</button>
        </div>
    )
}