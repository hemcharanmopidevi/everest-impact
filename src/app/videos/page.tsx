import { youtubeVideos } from "@/data/site";

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold">YouTube Playlist</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Free concept videos and marathon sessions.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {youtubeVideos.map((video) => (
          <a
            key={video.id}
            href={video.href}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
          >
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-red-500/20 to-primary/10 text-4xl text-red-500">
              ▶
            </div>
            <p className="p-3 text-sm font-medium">{video.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
