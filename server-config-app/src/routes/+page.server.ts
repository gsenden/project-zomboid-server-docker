import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        currentPath: process.cwd()
    };
};