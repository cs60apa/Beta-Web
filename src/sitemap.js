const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({
  hostname: 'https://devcircleafrica.com', 
});

sitemap.write({ url: '/' });
sitemap.write({ url: '/developers' });
sitemap.write({ url: '/products' });
sitemap.write({ url: '/resources' });
sitemap.write({ url: '/solutions' });

sitemap.end();

streamToPromise(sitemap).then((xml) => {
  const writeStream = createWriteStream('./public/sitemap.xml');
  writeStream.write(xml);
  writeStream.end();
});