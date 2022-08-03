import { gql } from '@apollo/client';

const GET_POSTS = gql`
    query getPosts {
        posts {
            id
            title
            publishedDate
            description
        }
    }
`;

export { GET_POSTS };