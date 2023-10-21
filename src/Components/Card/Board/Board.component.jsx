import React, { useEffect, useState } from "react";
import { Card } from "../Card.component";
import "./Board.styles.scss";
const imgs = [
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=1025&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559214369-a6b1d7919865?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560809451-9e77c2e8214a?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1631019553258-043d88ef767b?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=1012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&q=80&w=1006&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583316368898-c7b369c31cd0?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Board = () => {
  const imgsNummber = 8;

  const [cellsImgs, setCellsImgs] = useState([]);
  const [unlockedImgs, setUnlockedImgs] = useState([]);

  const [currentRefAndImg, setCurrentRefAndImg] = useState({
    ref: null,
    imgUrl: null,
  });

  const handleClick = ({ ref, imgUrl }) => {
    if (currentRefAndImg.ref == null && currentRefAndImg.imgUrl == null) {
      return setCurrentRefAndImg({ ref, imgUrl });
    }
    if (imgUrl == currentRefAndImg.imgUrl) {
      ref.current.classList.add("unlocked");
      currentRefAndImg.ref.current.classList.add("unlocked");

      setCurrentRefAndImg({ ref: null, imgUrl: null });
      setUnlockedImgs((v) => [...v, imgUrl]);
    } else {
      currentRefAndImg.ref.current.classList.remove("show");
      ref.current.classList.remove("show");
      
      setCurrentRefAndImg({ ref: null, imgUrl: null });
    }
  };

  useEffect(() => {
    const myArray = [];
    const arrayCopy = [...imgs];
    for (let i = 0; i < imgsNummber; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);

      myArray.push(arrayCopy[randomIndex]);
      myArray.push(arrayCopy[randomIndex]);
      arrayCopy.splice(randomIndex, 1);
    }

    setCellsImgs([...shuffle(myArray)]);
  }, []);
  return (
    <div>
      <h2>{unlockedImgs.length}</h2>
      <div
        className="gallery-wrapper"
        style={{ "--rows-number": imgsNummber / 2 }}
      >
        {cellsImgs.map((img, index) => (
          <Card imgUrl={img} key={img + index} clickHandler={handleClick} />
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
