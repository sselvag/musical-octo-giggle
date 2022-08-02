import "../styles/navbar.css"

export default function NavBar() {
    return (
        <div class="top">
            <div class="topLeft">
            <i class="topIcon fab fa-facebook-square"></i>
            <i class="topIcon fab fa-twitter-square"></i>
            <i class="topIcon fab fa-pinterest-square"></i>
            <i class="topIcon fab fa-instgram-square"></i>
            </div>
            <div classe="topCentre">
                <ul class="topList">
                    <li class="topListItem">HOME</li>
                    <li class="topListItem">ABOUT</li>
                    <li class="topListItem">CONTACT</li>
                    <li class="topListItem">WRITE</li>
                    <li class="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div class="topRight">
                <img class="topImage" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="Profile Picture" />
                <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}