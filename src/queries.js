// Graphql-tag is the way that we can write graphQL on the frontend
import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit:50, rating:7) {
      id
      title
      genres
      rating
    }
  }
`