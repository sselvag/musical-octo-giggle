import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instgram-square"></i>
            </div>
            <div className="topCentre">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img className="topImage" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="Profile Picture" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}