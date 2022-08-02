import {FaTrash} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_AUTHOR } from '../mutations/authorMutations';

export default function AuthorRow({ author }) {
    const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
        variables: { id: author.id },
    });

    return (
        <tr>
            <td>{ author.name }</td>
            <td>{ author.email }</td>
            <td>
                <button onClick={deleteAuthor}>
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
