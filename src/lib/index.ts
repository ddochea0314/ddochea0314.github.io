interface Post {
	/**
	 * 포스트 제목입니다.
	 */
	title: string;
	/**
	 * 포스트 작성일입니다.
	 * ISO 8601 형식을 사용합니다.
	 */
	date: string;
	/**
	 * 포스트 업데이트 일시입니다.
	 * ISO 8601 형식을 사용합니다.
	 */
	updated: string | null;
	/**
	 * 포스트 요약 내용입니다.
	 */
	description: string;
	/**
	 * 포스트 태그 배열입니다.
	 */
	tags: Array<string>;
	/**
	 * 포스트 URL 경로입니다.
	 */
	path: string;
}

export type SeriesPost = {
    title: string;
    date: string;
    tags: string[];
    content: any;
    path?: string;
    prev: {
        link: string;
        title: string;
    };
    next: {
        link: string;
        title: string;
    };

}


// enum NavbarType {
// 	/**
// 	 * 홈 링크를 나타냅니다.
// 	 */
// 	Home = 'Home',
// 	/**
// 	 * 포스트 링크를 나타냅니다.
// 	 */
// 	Post = 'Post'
// }

/**
 * 모든 블로그 포스트 메타데이터를 포함하는 객체 배열을 반환합니다.
 * @param {function} [filter] 포스트 조건에 대한 필터 배열함수입니다. 생략하면 모든 요소가 포함됩니다.
 * @param {object} [thisArg] 콜백 함수를 실행할 때 this로 사용할 객체입니다.
 * @returns {Promise<Post[]>} 모든 블로그 포스트의 메타데이터를 포함하는 객체 배열입니다.
 */
async function getPosts(
	filter?: (value: Post, index: number, array: Post[]) => unknown,
	thisArg?: any
): Promise<Post[]> {
	const allPostFiles = import.meta.glob<Post>('/src/routes/posts/docs/*.md'); // vite 지원기능
	const iterables = Object.entries(allPostFiles);

	return Promise.all<Post>(
		iterables.map(async ([path, resolver]: any) => {
			const { metadata } = await resolver();
			const postPath = path.replace('/src/routes/posts/docs/', 'posts/').replace('.md', '');
			return {
				...metadata,
				path: postPath
			};
		})
	)
		.then((posts) => (filter ? posts.filter(filter, thisArg) : posts))
		.then((posts) => posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export type { Post };
export {
	// NavbarType,
	getPosts
};
