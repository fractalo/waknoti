import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load: PageLoad = ({params}) => {
    throw redirect(302, `/channels/${params.userId}/all`);
};