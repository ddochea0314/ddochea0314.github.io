import type { Post } from '$lib';
import type { PageLoad } from './$types';

export const load = (async () => {
    const posts = await getPosts();
    return {
        posts
    };
}) satisfies PageLoad;

/**
 * 모든 블로그 포스트 메타데이터를 포함하는 객체 배열을 반환합니다.
 * @param {function} [predicate] 포스트 조건에 대한 필터 배열함수입니다. 생략하면 모든 요소가 포함됩니다.
 * @param {object} [thisArg] 콜백 함수를 실행할 때 this로 사용할 객체입니다.
 * @returns {Promise<Post[]>} 모든 블로그 포스트의 메타데이터를 포함하는 객체 배열입니다.
 */
async function getPosts(
    predicate?: (value: Post, index: number, array: Post[]) => unknown,
    thisArg?: any
): Promise<Post[]> {
    const allPostFiles = import.meta.glob<Post>('/src/routes/series/hello-dotnet/docs/*.md'); // vite 지원기능
    const iterables = Object.entries(allPostFiles);

    return Promise.all<Post>(
        iterables.map(async ([path, resolver]: any) => {
            const { metadata } = await resolver();
            const postPath = path.replace('/src/routes/series/hello-dotnet/docs/', 'hello-dotnet/').replace('.md', '');
            return {
                ...metadata,
                path: postPath
            };
        })
    ).then((posts) => (predicate ? posts.filter(predicate, thisArg) : posts))
    .then((posts) => posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
}