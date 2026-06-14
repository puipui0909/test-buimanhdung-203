import { Video } from "../types/video";

export const videos: Video[] = [
  {
    id: 1,
    videoUrl:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    authorName: "Dung",
    description: "Big Buck Bunny",
    likesCount: 120
  },
  {
    id: 2,
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    authorName: "React",
    description: "Friday",
    likesCount: 300
  },
  {
    id: 3,
    videoUrl:
      "/videos/trailer.mp4",
    authorName: "NextJS",
    description: "Sintel Trailer",
    likesCount: 500
  }
];