import "../styles/write.css" 

export default function Write(){
    return (
        <div className="write">
            <img className="writeImg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput"></input>
                    <input className="writeInput" type="text" placeholder="Title" autoFocus={true}></input>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" placeholder="Share your journey..." type="text" ></textarea>
                </div>
                <button className="writeButton">Publish</button>
            </form>
        </div>
    )
}