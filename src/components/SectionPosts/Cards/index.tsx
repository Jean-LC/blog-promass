import { useState } from "react";
import "./cards.css";
import { BlogEntry } from "../../../../interface";

interface Props {
  entry: BlogEntry;
}

export default function CardsTemplate({ entry }: Props) {
  const [showmore, setShowmore] = useState(false);

  return (
    <div className="cardContainer">
      <p className="title">{entry.title}</p>
      <p className="subtitle">{entry.createdAt + " " + entry.author}</p>
      <p className="content">
        {showmore ? entry.content : entry.content.substring(0, 69)}
        {entry.content.length > 70 && !showmore && "..."}
      </p>
      {entry.content.length > 70 && (
        <button className="showButton" onClick={() => setShowmore(!showmore)}>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: showmore ? "rotate(180deg)" : "rotate(0)",
              width: "2rem",
              margin: 0,
            }}
          >
            <path
              fill="#414928"
              d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
