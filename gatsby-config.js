module.exports = {
  siteMetadata: {
    title: `Demo`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "starwars__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://https://swapi.dev/api`,

        method: "get",

        headers: {
          "Content-Type": "application/json",
        },

        // Request body
        data: {},

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `post`,

        // Nested level of entities in response object, example: `data.posts`
        // entityLevel: `data.posts`,

        // Define schemaType to normalize blank values
        // example:
        // const postType = {
        //   id: 1,
        //   name: 'String',
        //   published: true,
        //   object: {a: 1, b: '2', c: false},
        //   array: [{a: 1, b: '2', c: false}]
        // }
        // schemaType: '',

        // Request parameters
        // Only available from version 2.1.0
        params: {
          per_page: 100,
        },

        // enable disk caching
        allowCache: false,
        // if allowCache is true, then the cache will be purged after the
        // specified amount of time
        maxCacheDurationSeconds: 60 * 60 * 24,

        // Optional payload key name if your api returns your payload in a different key
        // Default will use the full response from the http request of the url
        // payloadKey: `body`,

        // Optionally save the JSON data to a file locally
        // Default is false
        localSave: false,

        //  Required folder path where the data should be saved if using localSave option
        //  This folder must already exist
        path: `${__dirname}/src/data/auth/`,

        // Optionally include some output when building
        // Default is false
        verboseOutput: true, // For debugging purposes

        // Optionally skip creating nodes in graphQL.  Use this if you only want
        // The data to be saved locally
        // Default is false
        skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want

        // Optionally re-source data when it changes and
        // `gatsby develop` is running.
        // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
        // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
        // Default is false
        enableDevRefresh: false,

        // Optionally override key used to re-source data
        // when `gatsby develop` is running.
        // Requires `enableDevRefresh: true`.
        // See setting directly above this one.
        // See also https://github.com/gatsbyjs/gatsby/issues/14653
        // Default is `id`
        refreshId: `id`,

        // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
        // any not specified are defaulted to the general properties that are specified
        // Only available from version 2.1.0
        entitiesArray: [
          {
            url: `https://swapi.dev/api/people/`,
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
            name: `people`,
          },
          {
            url: `https://swapi.dev/api/planets/`,
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
            name: `planets`,
          },
          {
            url: `https://swapi.dev/api/vehicles/`,
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
            name: `vehicles`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
