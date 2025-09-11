import MainContent from "../components/MainContent.jsx";
import Header from "../components/Header/Header.jsx";
import {myData} from "../../data.js";

import TabButton from "../components/TabButton.jsx";

function Output() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Dùng props.children để hiển thị nội dung mà bạn đặt giữ cặp thẻ TabButton khi sử dụng component này */}
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
            
            {/* <TabButton>Button1</TabButton> */}
            {/* <TabButton batky="Components"></TabButton> */}
          </menu>
        </section>
      </main>
    </>
  );
}

export default Output;