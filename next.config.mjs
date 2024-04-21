/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abhijitawsbucket.s3.us-east-1.amazonaws.com',
        port: '',
        // path: '/next-s3-uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'abhijitawsbucket.s3.amazonaws.com',
        port: '',
        // path: '/next-s3-uploads/**',
      },
    ],
  },
};

export default nextConfig;

// https://abhijitawsbucket.s3.us-east-1.amazonaws.com/next-s3-uploads/761da9ce-5f03-47f4-b315-01e38bbd0272/Screenshot-(2).png

// https://abhijitawsbucket.s3.amazonaws.com/next-s3-uploads/340816a8-a75e-4707-94f2-cbc04b42c9da/Screenshot-2024-04-01-202814.png?AWSAccessKeyId=AKIAUHFQNM3QP7GXNMWM&Expires=1713690645&Signature=UFuSKDqa99Z8zuXsDgYRUnlhS4I%3D
