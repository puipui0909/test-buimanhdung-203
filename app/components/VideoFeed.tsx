"use client" ;
import { useState } from "react";
import { videos } from "../data/videos";
import VideoCard from "./VideoCard";

export default function VideoFeed() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div
      className="
        h-screen
        overflow-y-scroll
        snap-y
        snap-mandatory
        md:ml-56
      "
    >
      {
        videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
          />
        ))
      }
    </div>
  );
}