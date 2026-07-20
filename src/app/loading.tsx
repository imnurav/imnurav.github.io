export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-600 to-neutral-600 flex items-center justify-center shadow-2xl shadow-zinc-500/30">
          <span className="text-white font-black text-xl">V</span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-600 to-neutral-600 animate-ping opacity-30" />
        </div>

        {/* Loading bar */}
        <div className="w-32 h-0.5 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-zinc-600 to-neutral-600 rounded-full animate-shimmer" />
        </div>

        <p className="text-xs text-muted-foreground animate-pulse">
          Loading portfolio...
        </p>
      </div>
    </div>
  );
}
