// module.exports = {
//   devServer: {
//     proxy: {
//       "^/api": {
//         target: "http://localhost:8000",
//         changeOrigin: true,
//       },
//       "^/sanctum": {
//         target: "http://localhost:8000",
//         changeOrigin: true,
//       },
//       "^/login": {
//         target: "http://localhost:8000",
//         changeOrigin: true,
//       },
//       "^/logout": {
//         target: "http://localhost:8000",
//         changeOrigin: true,
//       },
//       "^/register": {
//         target: "http://localhost:8000",
//         changeOrigin: true,
//       },
//     },
//   },
// };

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8000",
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Overlook";
      return args;
    });
  }
};
