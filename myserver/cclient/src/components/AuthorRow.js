import { GET_AUTHORS } from '../queries/authorQueries';

export default function AuthorRow({ author }) {

    return (
        <>
            <tr>
                <td>{ author.name }</td>
                <td>{ author.email }</td>
            </tr>
        </>
    );
}
