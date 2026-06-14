"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Video } from "../types/video";
import VideoActions from "./VideoActions";

interface VideoCardProps {
  video: Video;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VideoCard({
  video,
  isMuted,
  setIsMuted,
}: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlayPause = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(video.likesCount);
    const handleLike = () => {
    if (liked) {
        setLikes((prev) => prev - 1);
    } else {
        setLikes((prev) => prev + 1);
    }

    setLiked(!liked);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const observer =
            new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                video.play();
                } else {
                video.pause();
                }
            },
            {
                threshold: 0.7,
            }
            );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

  return (
    <div
        className="
        relative
        h-screen
        snap-start
        flex
        justify-center
        items-center
        bg-black
        "
    >
        <button
        type="button"
        aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
        onClick={() => setIsMuted((prev) => !prev)}
        className="
          absolute
          top-6
          right-6
          z-20
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/35
          text-white
          backdrop-blur-md
          transition
          hover:bg-white/15
        "
      >
        {isMuted ? (
          <VolumeX size={24} strokeWidth={2.4} />
        ) : (
          <Volume2 size={24} strokeWidth={2.4} />
        )}
      </button>
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="
            h-[90vh]
            w-auto
            max-w-[420px]
            rounded-lg
            object-contain
        "
        muted={isMuted}
        loop
        playsInline
        onClick={togglePlayPause}
        />
      <div
        className="
            absolute
            bottom-24
            md:bottom-8
            left-6
            text-white
        "
      >
        <h3 className="font-bold text-lg">
            @{video.authorName}
        </h3>

        <p>{video.description}</p>
        </div>
        <VideoActions
        liked={liked}
        likes={likes}
        onLike={handleLike}
        />
    </div>
  );
}