import React from "react";

import { Badge } from "../../types/home.types";
import styles from "./style.module.css";

interface BadgeProps {
  badge: Badge;
}

const Badge = ({ badge }: BadgeProps) => {
  const { type } = badge;

  const text = {
    new: "🍞 따끈따끈 새 글",
    deadline: "🔥 마감코앞",
    hot: "💙 인기",
    study: "✏️ 스터디",
    project: "🗂 프로젝트",
  };

  return (
    <div className={`${styles.badge}`}>
      <div className={styles[type]}>{text[type]}</div>
    </div>
  );
};

export default Badge;
