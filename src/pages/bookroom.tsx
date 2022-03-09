import React from 'react';
import { graphql, PageProps } from 'gatsby';
import BookroomTemplate from '../components/templates/BookroomTemplate';

type DataProps = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          date: string;
          img: string;
        };
      };
    }[];
  };
};

function bookroom({ data }: PageProps<DataProps>) {
  console.log(data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter));
  return <BookroomTemplate />;
}

export const query = graphql`
  query BookroomQuery {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date
            img
          }
        }
      }
    }
  }
`;

export default bookroom;
