/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/question/easy",
        destination: "/question/?difficulty=151&q=1",
      },
      {
        source: "/question/nomal",
        destination: "/question/?difficulty=251",
      },
      {
        source: "/question/hard",
        destination: "/question/?difficulty=386",
      },
      {
        source: "/question/veryHard",
        destination: "/question/?difficulty=493",
      },
    ];
  },
};

export default nextConfig;
