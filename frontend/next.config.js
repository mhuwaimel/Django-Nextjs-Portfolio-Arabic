/** @type {import('next').NextConfig} */



module.exports = {
  images:{
    domains: ['localhost:8000'],
  },
    async rewrites() {
        return [
          {
            source: '/about',
            destination: `${process.env.BACKEND_URL}/about/`,
          },
          {
            source: '/projects',
            destination: `${process.env.BACKEND_URL}/projects/`,
          },
          {
            source: '/technologies',
            destination: `${process.env.BACKEND_URL}/technologies/`,
          },
          {
            source: '/contact',
            destination: `${process.env.BACKEND_URL}/contact/`,
          },
        ];
      },
  
}