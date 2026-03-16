import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface PostFrontmatter {
  title: string;
  titleUk?: string;
  excerpt: string;
  excerptUk?: string;
  category: 'tech' | 'auto' | 'gaming' | 'auto-safety' | 'auto-news' | 'pc-hardware' | 'gaming-news' | 'ai' | 'memes';
  date: string;
  image?: string;
  tags?: string[];
  readTime?: number;
  isNew?: boolean;
  isHot?: boolean;
  locale?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): Post[] {
  ensurePostsDirectory();
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.(md|mdx)$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      content,
      ...(data as PostFrontmatter),
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  ensurePostsDirectory();
  const extensions = ['.md', '.mdx'];
  for (const ext of extensions) {
    const fullPath = path.join(postsDirectory, `${slug}${ext}`);
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return { slug, content, ...(data as PostFrontmatter) };
    }
  }
  return null;
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(p => p.category === category);
}

export function getLatestPosts(limit = 6): Post[] {
  return getAllPosts().slice(0, limit);
}
