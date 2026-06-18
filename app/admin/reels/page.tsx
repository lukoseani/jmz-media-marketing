"use client"

import { upload } from "@vercel/blob/client"
import { useCallback, useEffect, useRef, useState } from "react"
import { Upload, Trash2, Loader2, CheckCircle2 } from "lucide-react"

type Reel = { url: string; pathname: string; size: number; uploadedAt: string }

export default function ReelManagerPage() {
  const [reels, setReels] = useState<Reel[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/reels/list")
      const data = await res.json()
      setReels(data.reels ?? [])
    } catch {
      setError("Could not load reels.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    setError(null)
    setStatus(null)
    setUploading(true)

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setStatus(`Uploading ${file.name} (${i + 1}/${files.length})...`)
        setProgress(0)
        await upload(`reels/${file.name}`, file, {
          access: "public",
          handleUploadUrl: "/api/reels/upload",
          onUploadProgress: ({ percentage }) => setProgress(Math.round(percentage)),
        })
      }
      setStatus("Upload complete.")
      if (inputRef.current) inputRef.current.value = ""
      await refresh()
    } catch (err) {
      setError((err as Error).message || "Upload failed.")
    } finally {
      setUploading(false)
      setProgress(0)
    }
  }

  async function handleDelete(url: string) {
    setError(null)
    try {
      await fetch("/api/reels/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      await refresh()
    } catch {
      setError("Delete failed.")
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-3xl font-bold tracking-tight">Reel Manager</h1>
      <p className="mt-2 text-muted-foreground leading-relaxed">
        Upload your social media reels here. Large files upload directly to storage from your browser, so the
        70MB videos are no problem. Uploaded reels appear automatically in the Reels section of the site.
      </p>

      <div className="mt-8 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
        <input
          ref={inputRef}
          type="file"
          accept="video/mp4,video/quicktime,video/webm"
          multiple
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {uploading ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />}
          {uploading ? "Uploading..." : "Select reel videos"}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">MP4, MOV or WebM. You can select multiple at once.</p>

        {uploading && (
          <div className="mx-auto mt-5 max-w-sm">
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{status}</p>
          </div>
        )}
      </div>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
      {status && !uploading && (
        <p className="mt-4 flex items-center gap-2 text-sm text-primary">
          <CheckCircle2 className="size-4" /> {status}
        </p>
      )}

      <div className="mt-10">
        <h2 className="font-heading text-lg font-semibold">Uploaded reels ({reels.length})</h2>
        {loading ? (
          <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
        ) : reels.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">No reels uploaded yet.</p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {reels.map((reel) => (
              <li key={reel.url} className="overflow-hidden rounded-xl border border-border bg-card">
                <video src={reel.url} controls muted playsInline className="aspect-[9/16] w-full object-cover" />
                <div className="flex items-center justify-between gap-2 px-3 py-2">
                  <span className="truncate text-xs text-muted-foreground">
                    {reel.pathname.replace("reels/", "")}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDelete(reel.url)}
                    aria-label="Delete reel"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
