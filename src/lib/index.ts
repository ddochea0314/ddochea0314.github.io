interface Post {
	title: string;
	date: string;
	discription: string;
	tag: Array<string>;
	path: string;
}

enum NavbarType {
	Home = 'Home',
	Post = 'Post'
}

export type { Post };
export { NavbarType };
