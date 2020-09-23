module.exports = {
  siteMetadata: {
    title: "Musikkapelle Markelsheim",
    author: "dreitagebart",
    description: "Offizielle Seite der Musikkapelle Markelsheim",
    siteUrl: "http://www.musikkapelle-markelsheim.de",
    social: {
      twitter: "dreitagebart",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //       {
    //         resolve: "gatsby-remark-responsive-iframe",
    //         options: {
    //           wrapperStyle: "margin-bottom: 1.0725rem",
    //         },
    //       },
    //       "gatsby-remark-prismjs",
    //       "gatsby-remark-copy-linked-files",
    //       "gatsby-remark-smartypants",
    //     ],
    //   },
    // },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //trackingId: 'ADD YOUR TRACKING ID HERE',
      },
    },
    // "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Blog",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    // {
    //   resolve: "gatsby-plugin-typography",
    //   options: {
    //     pathToConfigModule: "src/utils/typography",
    //   },
    // },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjswpexample.wordpress.com' or 'www.example-site.com'
         */

        baseUrl: "www.musikkapelle-markelsheim.de/blog",
        // The protocol. This can be http or https.
        protocol: "http",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com
        useACF: true,
        verboseOutput: true,
        // includedRoutes: [
        //   '/*/*/posts',
        //   '/*/*/pages',
        //   '/*/*/media',
        //   '/*/*/menus',
        //   '/*/*/events',
        //   '/*/*/news',
        // ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
}
