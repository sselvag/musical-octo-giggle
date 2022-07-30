import Sidebar from "../components/Sidebar"
import SinglePost from "../components/SinglePost"
import "../styles/single.css" 

export default function Single(){
    return (
        <div className="single">
            {/* post */}
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}