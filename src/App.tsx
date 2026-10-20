import { List } from "./virtual-scroll-list/list";
import "./styles.css";
import { VirtualListScroll } from "./virtual-scroll-list/virtual-scroll-list";

const list: List[] = Array.from({ length: 1000 }, (_, i) => ({
  name: `This is list item number ${i + 1}`,
}));

export default function App() {
  return (
    <div className="App">
      <VirtualListScroll title="My virtual scroll" listData={list} />
    </div>
  );
}