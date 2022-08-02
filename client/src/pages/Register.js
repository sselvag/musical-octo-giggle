import "../styles/register.css"

export default function Register () {
    return (
        <div class="register">
            <form class="registerForm">
                <span class="registerTitle">Register</span>
                <label class="registerLabel">Email</label>
                <input class="registerInput" type="text" placeholder="Email"/>
                <label class="registerLabel">Password</label>
                <input class="registerInput" type="password" placeholder="Password"/>
                <button class="registerButton">Register</button>
            </form>
            <button class="registerLoginButton">Login</button>
        </div>
    )
}