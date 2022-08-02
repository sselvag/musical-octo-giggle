import {FaTrash} from 'react-icons/fa';

export default function AuthorRow({ author }) {
    return (
        <tr>
            <td>{ author.name }</td>
            <td>{ author.email }</td>
            <td>
                <button>
                    <FaTrash/>
                </button>
            </td>
        </tr>

            // <div class="authors">
    //     <img class="authorsImg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
    //     <div class="authorsInfo">
    //         <span class="authorsName">Name: </span>
    //         <hr/>
    //         <span class="authorsEmail">Email</span>
    //         <p class="authorsDesc">About Me</p>
    //     </div>
    // </div>
        
    )
}
