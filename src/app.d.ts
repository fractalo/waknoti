import { KVNamespace } from '@cloudflare/workers-types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env: {
				TWITCH: KVNamespace;
			}
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache }
		}
	}
}

export {};
