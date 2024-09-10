"use client";
import { useState } from "react";

export default function Home() {
  const [level, setLevel] = useState(1);
  const [tags, setTags] = useState("");

  function getTags(tagsStr: string): string[] {
    return tagsStr.replaceAll(" ", "").split(",");
  }
  return (
    <div className="lg:max-w-3xl mx-auto h-40">
      <div className="hero bg-base-200 rounded-xl p-4 my-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Start Immersing</h1>
            <div className="my-4">
              <p className="py-6">Close your level</p>
              <input
                type="range"
                min={1}
                max={6}
                value={level}
                className="range"
                step={1}
                onChange={(e) => {
                  setLevel(+e.target.value);
                }}
              />
              <div className="flex w-full justify-between px-2 text-xs">
                <span>N5</span>
                <span>N4</span>
                <span>N3</span>
                <span>N2</span>
                <span>N1</span>
                <span>N1+</span>
              </div>
            </div>
            <div className="my-4">
              <p className="py-6">Choose your tags (seperate by ,)</p>
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
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
