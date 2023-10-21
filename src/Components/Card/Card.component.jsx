import React, { useRef } from "react";
import "./Card.styles.scss";
export const Card = ({
  imgUrl = "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  clickHandler,
}) => {
  const ref = useRef();

  const handleClick = (e) => {
    e.currentTarget.classList.add("show");
    setTimeout(() => {
      clickHandler({ ref: ref, imgUrl });
    }, 500);
  };
  return (
    <div className="card" onClick={handleClick} ref={ref}>
      <div className="img-side">
        <img src={imgUrl} />
      </div>
      <div className="question-side"> ?</div>
    </div>
  );
};
