import { useState } from "react";
import { List } from "./list";
import "./virtual-scroll-list.css";

export function VirtualListScroll({
  title = "List",
  listData = [],
}: {
  title: string;
  listData: List[];
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeight = 40;
  const containerHeight = 400;
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const buffer = 3;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
  const endIndex = Math.min(
    listData.length,
    Math.floor(scrollTop / itemHeight) + visibleCount + buffer
  );
  const topSpacerHeight = startIndex * itemHeight;
  const bottomSpacerHeight = (listData.length - endIndex) * itemHeight;

  return (
    <>
      <p>{title}</p>
      <div
        className="container"
        onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
      >
        <div style={{ height: topSpacerHeight }} />
        {listData.slice(startIndex, endIndex).map((list, index) => (
          <div
            className="list-item"
            key={`${startIndex + index}-${list.name}`}
          >
            <p>{list.name}</p>
          </div>
        ))}
        <div style={{ height: bottomSpacerHeight }} />
      </div>
      <p>Scroll Position : {scrollTop}</p>
      <p>Start Index : {startIndex}</p>
      <p>End Index : {endIndex}</p>
    </>
  );
}