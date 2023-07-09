"use client";

import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent } from "react";

import { Avatar } from "@/domains/common/components/avatar";
import { positionsOption } from "@/domains/common/contstant";
import { getLabelFromOptions } from "@/domains/common/utils/getLabelFromOptions";
import CommentIcon from "@/public/Icons/comment.svg";
import EyeIcon from "@/public/Icons/eye.svg";

import { PostItem } from "../../types/home.types";
import Badge from "../badge";
import styles from "./style.module.css";

interface PostListProps {
  postList: PostItem[];
}

//TODO: Suspense, ErrorBoundary 적용
const PostList = ({ postList }: PostListProps) => {
  const handleAvatarClick = (e: SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("avatar clicked");
    // openUserModal();
  };

  const handleLike = () => {
    console.log("handleLike");
  };

  return (
    <ul className={styles.postList}>
      {postList.map(post => {
        const {
          _id,
          title,
          type,
          author,
          language,
          likes,
          isLiked,
          isClosed,
          views,
          positions,
          badge,
          totalComments,
        } = post;

        return (
          <Link
            href={`/${_id}`}
            key={_id}
            className={`${styles.studyItem} ${
              isClosed ? styles.closed : styles.open
            }`}
          >
            {/* //TODO: handler 정의 필요 */}
            <li onClick={() => alert("z")}>
              <div className={styles.badgeWrapper}>
                <Badge
                  badge={
                    type === 1
                      ? { type: "project", content: "프로젝트" }
                      : { type: "study", content: "스터디" }
                  }
                />
                {badge.map((badgeItem, idx) => (
                  <Badge badge={badgeItem} key={idx} />
                ))}
              </div>
              <div className={styles.schedule}>
                <p className={styles.scheduleTitle}>마감일 |</p>
                <p className={styles.scheduleInfo}>2023-06-11</p>
              </div>
              <h1 className={styles.title}>{title}</h1>
              <ul className={styles.positionList}>
                {positions.map((position, idx) => (
                  <li key={idx} className={styles.position}>
                    {getLabelFromOptions(positionsOption, position)}
                  </li>
                ))}
              </ul>
              <ul className={styles.content}>
                {/* //TODO: max 개수 정책 정하기 */}
                {language.map((lang, i) => (
                  <li key={i} className={styles.language}>
                    <Image
                      width={32}
                      height={32}
                      title={lang}
                      src={`/images/languages/${lang}.svg`}
                      alt="language"
                    />
                  </li>
                ))}
              </ul>
              <div className={styles.border} />
              <section className={styles.info}>
                <div className={styles.userInfo} onClick={handleAvatarClick}>
                  <Avatar
                    size="30px"
                    imgPath={author.image}
                    handleClick={handleAvatarClick}
                  />
                  <div className={styles.userName}>{author.nickName}</div>
                </div>
                <div className={styles.viewsAndComment}>
                  <div className={styles.infoItem}>
                    <EyeIcon />
                    <p className={styles.views}>{views}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <CommentIcon />
                    <p className={styles.comments}>{totalComments}</p>
                  </div>
                </div>
              </section>
              {isClosed && <div className={styles.closeNotice}>모집 마감</div>}
              <Image
                className={styles.bookmark}
                width={28}
                height={28}
                src={
                  isLiked
                    ? "/images/info/bookmark-filled.png"
                    : "/images/info/bookmark.png"
                }
                alt="bookmark"
                onClick={handleLike}
              />
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default PostList;
