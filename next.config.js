require("dotenv").config();

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    API_URL: process.env.API_URL,
    LAMBDA_URL: process.env.LAMBDA_URL
  }
}
