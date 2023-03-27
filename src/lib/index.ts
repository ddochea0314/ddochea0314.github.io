interface Post {
	title: string;
	date: string;
	description: string;
	tags: Array<string>;
	path: string;
}

enum NavbarType {
	Home = 'Home',
	Post = 'Post'
}

export type { Post };
export { NavbarType };
