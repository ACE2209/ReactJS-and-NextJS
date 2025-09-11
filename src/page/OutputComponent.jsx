import MainContent from "../components/MainContent.jsx";
import Header from "../components/Header/Header.jsx";
import { myData } from "../../data.js";

import TabButton from "../components/TabButton.jsx";

function Output() {
  
  let tabContent = "Nội dung được hiển thị";

  // function handleSelect() {
  //   alert("Nút bấm được click");
  // }

  // thêm selectedButton để dùng arrow function
  // function handleSelect(selectedButton) {
  //   alert(`${selectedButton} được chọn`);
  // }

  function handleSelect(selectedButton) {
    alert(`${selectedButton} được chọn`);
    tabContent = selectedButton;
  }

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
          {/* thêm dòng này để ko xuống dòng <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
 code này */}
          {/* prettier-ignore */}
          <menu>
            {/* Dùng props.children để hiển thị nội dung mà bạn đặt giữ cặp thẻ TabButton khi sử dụng component này */}
            {/* <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton> */}

            {/* <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton> */}

            <TabButton onSelect={()=>{handleSelect('components')}}>Components</TabButton>
            <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect('state')}}>State</TabButton>

            {/* <TabButton>Button1</TabButton> */}
            {/* <TabButton random="Components"></TabButton> */}
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default Output;
