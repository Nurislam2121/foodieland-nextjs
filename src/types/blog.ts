export interface BlogAuthor {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content?: string;
  image: string;
  author: BlogAuthor;
  date: string;
  category?: string;
}