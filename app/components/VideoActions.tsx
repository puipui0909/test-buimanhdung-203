"use client";

import { Heart, MessageCircle, Share2 } from "lucide-react";

interface VideoActionsProps {
  liked: boolean;
  likes: number;
  onLike: () => void;
}

function formatLikes(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }

  return value.toString();
}

export default function VideoActions({
  liked,
  likes,
  onLike,
}: VideoActionsProps) {
  return (
    <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-5 text-white">
      <button
        type="button"
        onClick={onLike}
        aria-label="Like video"
        className="flex flex-col items-center gap-1"
      >
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/20 backdrop-blur-md transition ${
            liked
              ? "bg-red-500 text-white"
              : "bg-black/35 text-white hover:bg-white/15"
          }`}
        >
          <Heart
            size={26}
            strokeWidth={2.4}
            fill={liked ? "currentColor" : "none"}
          />
        </span>
        <span className="text-xs font-semibold">{formatLikes(likes)}</span>
      </button>

      <button
        type="button"
        aria-label="Comment"
        className="flex flex-col items-center gap-1"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/35 backdrop-blur-md transition hover:bg-white/15">
          <MessageCircle size={26} strokeWidth={2.4} />
        </span>
        <span className="text-xs font-semibold">Bình luận</span>
      </button>

      <button
        type="button"
        aria-label="Share"
        className="flex flex-col items-center gap-1"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/35 backdrop-blur-md transition hover:bg-white/15">
          <Share2 size={25} strokeWidth={2.4} />
        </span>
        <span className="text-xs font-semibold">Chia sẻ</span>
      </button>
    </div>
  );
}