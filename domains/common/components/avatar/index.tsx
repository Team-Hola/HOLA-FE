import { memo } from "react";

import styles from "./style.module.css";

interface AvatarProps {
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  imgPath: string;
  size: string;
}

export const Avatar = memo(({ handleClick, imgPath, size }: AvatarProps) => {
  const basePath = "https://hola-post-image.s3.ap-northeast-2.amazonaws.com";

  return (
    <div className={styles.user} onClick={handleClick}>
      <img
        className={styles.userImg}
        width={size}
        height={size}
        src={`${basePath}/${imgPath}`}
        alt="avatar"
      />
    </div>
  );
});
