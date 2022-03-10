import React from 'react';
import { graphql, PageProps } from 'gatsby';
import BookroomTemplate from '../components/templates/BookroomTemplate';

interface DataProps {
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
}

function bookroom({ data }: PageProps<DataProps>) {
  const bookroomList = data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter);

  return <BookroomTemplate bookroomList={bookroomList} />;
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
