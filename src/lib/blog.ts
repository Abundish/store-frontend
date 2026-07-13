import "server-only"

import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export type BlogPostFrontmatter = {
  title: string
  slug: string
  excerpt: string
  date: string
  updatedDate: string
  author: string
  heroImage: string
  heroImageAlt: string
  tags: string[]
  metaTitle: string
  metaDescription: string
}

export type BlogPost = BlogPostFrontmatter & {
  content: string
  readTimeMinutes: number
}

function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function parsePostFile(filename: string): BlogPost {
  const filePath = path.join(BLOG_DIR, filename)
  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)

  const slug =
    (data.slug as string) || filename.replace(/\.mdx?$/, "")

  return {
    title: data.title as string,
    slug,
    excerpt: data.excerpt as string,
    date: data.date as string,
    updatedDate: (data.updatedDate as string) || (data.date as string),
    author: data.author as string,
    heroImage: data.heroImage as string,
    heroImageAlt: data.heroImageAlt as string,
    tags: (data.tags as string[]) ?? [],
    metaTitle: data.metaTitle as string,
    metaDescription: data.metaDescription as string,
    content,
    readTimeMinutes: estimateReadTime(content),
  }
}

function getMdxFilenames(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
}

export function getAllPosts(): BlogPost[] {
  return getMdxFilenames()
    .map(parsePostFile)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filename = getMdxFilenames().find((file) => {
    const post = parsePostFile(file)
    return post.slug === slug
  })

  if (!filename) {
    return null
  }

  return parsePostFile(filename)
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug)
}
