import type { RequestHandler } from '@sveltejs/kit';
import { getPosts } from '$lib';

// adapter-static build 오류 발생하여 추가
export const prerender = true;

export const GET: RequestHandler = async ({ setHeaders }) => {
	setHeaders({
		'Content-Type': 'application/xml',
		'Cache-Control': 'max-age=0, s-max-age=3600'
	});

	const website = 'https://ddochea0314.github.io';

	const posts = await getPosts();
	const tags = posts
		.map((p) => p.tags)
		.flat()
		.filter((v, i, a) => a.indexOf(v) === i);

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
    >
      <url>
        <loc>${website}</loc>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${website}/ads.txt</loc>
        <priority>0.8</priority>
      </url>
      ${posts
				.map(
					(post) => `<url>
            <loc>${website}/${post.path}</loc>
            <lastmod
              >${
								post.updated
									? new Date(post.updated).toISOString()
									: new Date(post.date).toISOString()
							}</lastmod
            >
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
          </url>`
				)
				.join('')}
    ${/*tags
			.map(
				(tag) => `<url>
                <loc>${website}/tags/${tag}</loc>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
            </url>`
			)
      .join('')*/ ''}
    </urlset>`;
	return new Response(xml);
};
