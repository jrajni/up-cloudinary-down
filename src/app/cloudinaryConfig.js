import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dhwyngp5r",
  api_key: "257136258442975",
  api_secret: "ZFoVZUmxTFZ03Seer7jWEDlTsq4",
});

export default cloudinary;
// const nextConfig = {
//   reactStrictMode: false,
//   env: {
//     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dhwyngp5r",
//     NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "mnawqxbq",
//   },
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };

// module.exports = nextConfig;
