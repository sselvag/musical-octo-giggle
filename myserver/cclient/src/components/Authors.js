// import "../styles/authors.css"
// import Author from "./Author"
import AuthorRow from "./AuthorRow";
import { GET_AUTHORS } from "../queries/authorQueries";
import { gql, useQuery } from '@apollo/client';



export default function Authors() {
    const { loading, error, data } = useQuery(GET_AUTHORS)
    
    if (error) return <p>Something went wrong</p>

    return <>{!loading && !error && (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                    {/* <th>About Me</th> */}
                </tr>
            </thead>
            <tbody>
                {data.authors.map(author => (
                    <AuthorRow key={author.id} author={author} />
                ))}
            </tbody>
        </table>
    // <div class="authors">
    //     <img class="authorsImg" src="https://www.cityworks.com/wp-content/uploads/2022/05/placeholder.png" alt="Placeholder Image"></img>
    //     <div class="authorsInfo">
    //         <span class="authorsName">Name: </span>
    //         <hr/>
    //         <span class="authorsEmail">Email</span>
    //         <p class="authorsDesc">About Me</p>
    //     </div>
    // </div>
    )}</>;
}