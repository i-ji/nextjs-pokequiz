/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/question/easy",
        destination: "/question/:q?difficulty=151",
      },
      {
        source: "/question/nomal",
        destination: "/question/:q?difficulty=251",
      },
      {
        source: "/question/hard",
        destination: "/question/:q?difficulty=386",
      },
      {
        source: "/question/veryHard",
        destination: "/question/:q?difficulty=493",
      },
    ];
  },
};

export default nextConfig;
