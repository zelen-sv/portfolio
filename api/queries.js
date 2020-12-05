import { gql } from 'graphql-request'

export const siteData = gql`
  {
    skills (orderBy: order_ASC) {
      id
      icon {
        url
      }
      title
      description
    }
    projects (orderBy: order_ASC) {
      id
      title
      description
      url
      order
      image {
        url
      }
      tags {
        title
      }
    }
    articles (orderBy: order_ASC) {
      id
      title
      slug
      seoDesc
      order
      previewDesc
      createdAt
      updatedAt
      tags {
        title
      }
    }
  }
`;

export const getArticle = gql`
  query GetArticle($slug: String) {
    article(where: { slug: $slug }) {
      title
      seoDesc
      content
      order
      slug
      id
      createdAt
      updatedAt
      tags {
        title
      }
    }
  }
`;
