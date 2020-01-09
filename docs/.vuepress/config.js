module.exports = {
  title: "Payment Support - Shoppre Pay",
  description: "This is a Zeit Now 2.0 example",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Courier Payments Support", link: "/courier-support/" },
      { text: "Parcel Payments Support", link: "/parcel-support" }
    ]
  },
  dest: "public",
    plugins: [
      'social-share',
    {
      'sitemap': {
        hostname: 'https://support.shopprepay.in'
      },
    }
  ],
};
