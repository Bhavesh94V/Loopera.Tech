/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ⬅️ yeh line add karo

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // static export ke liye zaroori hai
  },
}

export default nextConfig
