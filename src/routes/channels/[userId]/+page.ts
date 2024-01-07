import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load: PageLoad = ({params}) => {
    redirect(302, `/channels/${params.userId}/all`);
};