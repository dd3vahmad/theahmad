import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { BLOG } from "@consts"

type Context = {
  site: string
}

export async function GET(context: Context) {
  const posts = await getCollection("blog")
  const projects = await getCollection("projects")

  const items = [...posts, ...projects]

  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  return rss({
    title: BLOG.TITLE,
    description: BLOG.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.slug.startsWith("blog")
        ? `/blog/${item.slug}/`
        : `/projects/${item.slug}/`,
    })),
  })
}
