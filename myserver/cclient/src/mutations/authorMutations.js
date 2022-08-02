import {gql} from '@apollo/client';

const DELETE_AUTHOR = gql`
    mutation deleteAuthor($id: ID!) {
        deleteAuthor(id: $id) {
            id
            name
            email
        }
    }
`;

export { DELETE_AUTHOR };