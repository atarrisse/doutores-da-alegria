import React, { useContext, useEffect, useMemo, useState } from "react";
import ReactLoading from "react-loading";
import YouTube from "react-youtube";

import { Context } from "@/utils/context";
import useWindowDimensions from "@/utils/useWindowDimension";

import * as styles from "./styles.module.scss";

type TPlayer = React.HTMLAttributes<HTMLDivElement>;

type Props = {
  className?: string;
}

const Player: React.FC<Props & TPlayer> = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const [isInit, setIsInit] = useState<boolean | null>();
  const { isPlayerOpen, videoId, setVideoId } = useContext(Context);
  const win = useWindowDimensions();
  const videoDimension = useMemo(() => {
    if (!win) return;

    const { isMobile, width } = win;
    const aspectRatio = 36 / 64;
    const w = isMobile ? width : Math.round(0.6 * width);
    const h = aspectRatio * w;

    return {
      height: h.toString(),
      width: w.toString(),
    };
  }, [win]);

  const opts = {
    ...videoDimension
  };

  const youtubeListener = (e) => {
    e.preventDefault();
    const link = e.target.closest("a") || e.target;
    setVideoId(link.href.split("v=")[1].split("&")[0]);
  };

  const handleReady = () => {
    setIsLoading(false);
  };

  const handleClose = () => {
    setVideoId(null);
  };

  useEffect(() => {
    setIsLoading(true);
    setIsInit(true);
  }, []);

  useEffect(() => {
    document
      .querySelectorAll("a")
      .forEach(link => {
        if (link.href.includes("youtube")) {
          link.addEventListener("click", youtubeListener);
        }
      });
  }, [isInit]);

  useEffect(() => {
    if (videoId === null) setIsLoading(true);
  }, [videoId]);

  return (
    <div
      aria-live="assertive"
      className={styles.player}
      data-open={isPlayerOpen}
      data-ready={!isLoading}
      onClick={handleClose}
    >
      <div
        className={styles.content}
        style={{ ...videoDimension }}
      >
        {isLoading &&
          <ReactLoading
            className={styles.loading}
            type="spinningBubbles"
            color="#fff"
            height={100}
            width={100}
          />}
        {videoId &&
          <YouTube
            className={styles.youtube}
            videoId={videoId}
            opts={opts}
            onReady={handleReady}
          />}
        <button
          aria-label="Close video player"
          className={styles.button}
          onClick={handleClose}
        ></button>

      </div>
    </div>
  );
};

export default Player;