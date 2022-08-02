import { gql, useQuery } from '@apollo/client'

const GET_AUTHORS = gql`
    query getAuthors {
        authors {
            id
            name
            email
        }
    }
`

export default function Authors() {
    const { loading, error, data } = useQuery(GET_AUTHORS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong</p>

    return <>{!loading && !error && <h1>Authors</h1>}</>;
}