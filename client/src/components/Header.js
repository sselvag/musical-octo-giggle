import "../styles/header.css"

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Journals of the</span>
                <span className="headerTitleLg">Wanderlust</span>
            </div>
            <img className="headerImage" src="https://wallpaperaccess.com/full/2577607.jpg" alt="Hero Image"/>
        </div>
    )
}