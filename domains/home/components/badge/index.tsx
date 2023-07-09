import React from "react";

import { Badge } from "../../types/home.types";
import styles from "./style.module.css";

const getClass = type => {
  if (type === "new") return styles.new;
  else if (type === "deadline") return styles.deadline;
  //else if (type === "project" || state === "study") return styles.study;
  return styles.hot;
};

interface BadgeProps {
  badge: Badge;
}

const Badge = ({ badge }: BadgeProps) => {
  const { type, content } = badge;

  const studyState = {
    new: "🍞 따끈따끈 새 글",
    deadline: "🔥 마감코앞",
    hot: "💙 인기",
    study: "✏️ 스터디",
    project: "🗂 프로젝트",
  };

  return (
    <div className={`${styles.badge}`}>
      <div className={getClass(type)}>{studyState[type]}</div>
    </div>
  );
};

export default Badge;
