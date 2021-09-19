import React, { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "@/utils/context";
import * as styles from "./styles.module.scss";
import YouTube from "react-youtube";
import useWindowDimensions from "@/utils/useWindowDimension";

type TPlayer = React.HTMLAttributes<HTMLDivElement>;

type Props = {
  className?: string;
}

const Player: React.FC<Props & TPlayer> = () => {
  const [isInit, setIsInit] = useState<boolean | null>();
  const { isPlayerOpen, videoId, setVideoId } = useContext(Context);
  const { width } = useWindowDimensions();
  const videoDimension = useMemo(() => {
    const aspectRatio = 36 / 64;
    const w = Math.round(0.8 * width);
    const h = aspectRatio * w;
    console.log(w, h);

    return {
      height: h.toString(),
      width: w.toString(),
    }
  }, [width]);
  const opts = {
    ...videoDimension
  };

  const youtubeListener = (e) => {
    e.preventDefault();
    const link = e.target.closest("a");
    setVideoId(link.href.split("v=")[1].split("&")[0])
  }

  useEffect(() => {
    setIsInit(true);
  }, [])

  useEffect(() => {
    document
      .querySelectorAll("a")
      .forEach(link => {
        if (link.href.includes("youtube")) {
          link.addEventListener("click", youtubeListener);
        }
      })
  }, [isInit])

  const handleClose = () => {
    setVideoId(null);
  }

  return (
    <div
      aria-live="assertive"
      className={styles.player}
      data-open={isPlayerOpen}
      onClick={handleClose}
    >
      <div className={styles.content}>
        {
          videoId &&
          <YouTube
            videoId={videoId}
            opts={opts}
          />
        }
        <button
          aria-label="Close video player"
          className={styles.button}
          onClick={handleClose}
        ></button>

      </div>
    </div>
  )
}

export default Player