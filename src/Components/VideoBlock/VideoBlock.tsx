import React from "react";
import { getYoutubeFrameLink } from "../../utils/utils";
import classes from "./VideoBlock.module.css";

const VideoBlock = () => {
  return (
    <div className={classes.VideoBlock}>
      <p>Интернет магазин строительных материалов "Стройдвор"</p>

      <div className={classes.Video}>
        <iframe
          src={
            getYoutubeFrameLink(
              "https://www.youtube.com/watch?v=pc2oVwbDdm0"
            ) as string
          }
          frameBorder={0}
          title='AD'
        ></iframe>
      </div>

      <div className={classes.Description}>
        <p>Купить стройматериалы в интернет-магазине</p>

        <span>
          На нашем сайте можно купить стройматериалы с доставкой в Видном и по
          всему Ленинскому району, а также в Бутово, Домодедово, Развилке,
          Горках, Раменском, Подольске. Предоставляется возможность самовывоза
          из оптового склада в Молоково.
        </span>
      </div>
    </div>
  );
};

export default VideoBlock;
