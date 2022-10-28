module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested-ancestors'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' &&
      require('cssnano')({
        preset: 'default',
      }),
  ],
}
