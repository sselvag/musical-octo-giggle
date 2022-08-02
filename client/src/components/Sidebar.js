import "../styles/sidebar.css"

export default function Sidebar(){
    return (
        <div class="sidebar">
            <div class="sidebarItem">
                <span class="sidebarTitle">About Me</span>
                <img class="sidebarimg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
                <p class="sidebarDesc">Hello There!! fsfovks fksjgskv dfksovjsv vfjsvns sdfkjviofs vsjfosjvnsjkr vsiroisvnoirv sgiosvnvd!</p>
            </div>
            <div class="sidebarItem">
                <span class="sidebarTitle">Follow Me</span>
                <div class="sidebarSocial">
                    <i class="sidebarIcon fab fa-facebook-square"></i>
                    <i class="sidebarIcon fab fa-twitter-square"></i>
                    <i class="sidebarIcon fab fa-pinterest-square"></i>
                    <i class="sidebarIcon fab fa-instgram-square"></i>
                </div>
            </div>
        </div>
    )
}