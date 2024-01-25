export interface BlogEntry extends SaveBlogEntry {
  id: string;
}

export interface SaveBlogEntry {
  author: string;
  title: string;
  createdAt: string;
  content: string;
}
