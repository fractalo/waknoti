import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';


export const GET = (async({ request, platform }) => {
    if (!platform) {
        error(500);
    }

    const cacheUrl = new URL(request.url);
    const cacheKey = new Request(cacheUrl.toString(), request);
    const cache = platform.caches.default;

    let response = await cache.match(cacheKey);

    if (response) {
        return response;
    }

    const profileImageUrls = await platform.env.TWITCH.get('profileImageUrls');

    response = new Response(profileImageUrls, {
        headers: {
            'cache-control': "public, max-age=3600, s-maxage=3600"
        }
    });

    profileImageUrls && platform.context.waitUntil(cache.put(cacheKey, response.clone()));

    return response;
}) satisfies RequestHandler;