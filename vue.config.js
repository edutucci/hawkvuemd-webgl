module.exports = {
  chainWebpack: (config) => {
    //   // GraphQL Loader
    config.module
      // .rule('glsl-shader-loader')
      // .test(/\.(frag|vert|glsl)$/)
      // .use('glsl-shader-loader')
      // .loader('glsl-shader-loader')
      // .end();
      .rule('shader-loader')
      .test(/\.(frag|vert|glsl)$/)
      .use('shader-loader')
      .loader('shader-loader')
      .end();
  },
};
