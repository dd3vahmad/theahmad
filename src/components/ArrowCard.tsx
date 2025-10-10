import { formatDate } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">;
  pill?: boolean;
};

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a
      href={`/${entry.collection}/${entry.slug}`}
      class="group p-4 gap-3 flex flex-col border border-big/20 hover:border-big"
    >
      <div class="gap-3 flex items-center">
        <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
          <div class="text-sm uppercase">{formatDate(entry.data.date)}</div>
          <div class="font-semibold mt-3 text-big">
            {entry.data.title}
          </div>

          <div class="text-sm line-clamp-2">{entry.data.summary}</div>
          <ul class="flex flex-wrap mt-2 gap-1">
            {entry.data.tags.map((tag: string) => (
              <li class="text-xs uppercase py-0.5 px-1 rounded bg-big/10 text-tiny/50">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}
