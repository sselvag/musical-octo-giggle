import SinglePost from "../components/SinglePost"
import "../styles/single.css" 

export default function Single(){
    return (
        <>
            <div class="single">
                {/* post */}
                <SinglePost/>
            </div>
        </>
    )
}