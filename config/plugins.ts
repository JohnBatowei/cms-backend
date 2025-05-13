export default () => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        default_transformations: [
          [{ fetch_format: 'auto', quality: 'auto' }],
        ],
      },
    },
  },
});
