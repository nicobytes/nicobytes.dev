import { DotCMSGraphQLParams } from '@dotcms/types';

export const blogQuery = `
  search(query: "+contenttype:Blog +live:true", limit: 3) {
    title
    identifier
  }
`;

export const fragmentNav = `
fragment NavProps on DotNavigation {
    code
    folder
    hash
    host
    href
    languageId
    order
    target
    title
    type
}
`;

export const logoImageQuery = `
FileAssetCollection(query: "+title:logo.png") {
  fileAsset {
    versionPath
  }
}
`;

export const BASE_EXTRA_QUERIES: DotCMSGraphQLParams = {
  content: {
    //logoImage: logoImageQuery,
    blogs: blogQuery,
  },
  //fragments: [fragmentNav],
};
