"use client";
import { useState } from "react";
import VideoPlayer from "./components/videoPlayer";

export default function Watch() {
  const [tags, setTags] = useState("");

  function getTags(tagsStr: string): string[] {
    return tagsStr.replaceAll(" ", "").split(",");
  }
  function getVideoId(url: string): string {
    const videoId = url.split("=")[1];
    return videoId;
  }
  return (
    <div className="mx-auto lg:max-w-7xl flex flex-col items-center space-y-2">
      <VideoPlayer
        videoId={getVideoId("https://www.youtube.com/watch?v=8kR-XmpGYg4")}
      />
      <div className="space-x-2">
        <button className="btn btn-error">Too Difficult</button>
        <button className="btn btn-warning">Next</button>
        <button className="btn btn-success">Too Easy</button>
      </div>
      <div className="pt-10">
        <p>Add Tags</p>
        <input
          type="text"
          placeholder="Tag1, Tag2..."
          className="input input-bordered w-full max-w-xs"
          value={tags}
          onChange={(e) => {
            setTags(e.target.value);
          }}
        />
        <div className="py-2">
          {tags.length > 0 &&
            getTags(tags).map((tag) => {
              if (tag === "") {
                return;
              }
              return <div className="badge badge-outline mx-1">{tag}</div>;
            })}
        </div>
      </div>
    </div>
  );
}
