import "../styles/sidebar.css"

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarimg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
                <p className="sidebarDesc">Hello There!! fsfovks fksjgskv dfksovjsv vfjsvns sdfkjviofs vsjfosjvnsjkr vsiroisvnoirv sgiosvnvd!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instgram-square"></i>
                </div>
            </div>
        </div>
    )
}