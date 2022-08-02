import "../styles/register.css"

export default function Register () {
    return (
        <div class="register">
            <form class="registerForm">
                <span class="registerTitle">Register</span>
                <label class="registerLabel">Name</label>
                <input class="registerInput" type="text" placeholder="Name"/>
                <label class="registerLabel">Username</label>
                <input class="registerInput" type="text" placeholder="Username"/>
                <label class="registerLabel">Password</label>
                <input class="registerInput" type="password" placeholder="Password"/>
                <label class="registerLabel">Confirm Password</label>
                <input class="registerInput" type="password" placeholder="Re-enter Password"/>
                <button class="registerButton">Register</button>
            </form>
            <button class="registerLoginButton">Login</button>
        </div>
    )
}