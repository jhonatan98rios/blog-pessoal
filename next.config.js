module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/all',
        destination: '/posts',
        permanent: true,
      },
    ]
  },
  compress: true,
}