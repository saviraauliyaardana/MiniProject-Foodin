import { gql } from "nuxt-graphql-request";

export const query = gql`
  {
    recipes {
      id
      name
      ket
      foto
      cook
      prep
    }
  }
`;

export const Spesifikquery = gql`
  {
    recipes {
      id
      name
      koki
      ket
      foto
      linkvid
      prep
      cook
      rat
      gizi {
        kalor
        fat
        protein
        karbo
        koles
      }
      step {
        ingridient
        step
      }
    }
  }
`;

export const Review = gql`
  {
    review {
      comment
      rat
      recipe {
        name
        foto
      }
    }
  }
`;
