import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  process.env.GRAPHCMS_URL
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};
