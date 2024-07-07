// contentfulClient.ts
import { createClient } from 'contentful';

const client = createClient({
  space: '67boj09wr2b7',
  environment: 'master',
  accessToken: '8hbyXoEwPf7sNmYfn_ngE4xCdiK3XzC3Z4kunolNLSg'
});

export default client;
