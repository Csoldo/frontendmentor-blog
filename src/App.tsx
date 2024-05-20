import "./App.css";
import { avatar, im } from "./assets/images";

function App() {
  return (
    <>
      <div className="main-container">
        <img src={im} alt="illustration" className="main-image" />
        <div className="main-text">
          <p className="custom-textbox">Learning</p>
          <p className="custom-text">Published 21 Dec 2023</p>
          <p className="custom-text2">HTML && CSS foundations</p>
          <p className="custom-text3">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <div className="main-bottom-image">
          <img src={avatar} alt="avatar" className="avatar" />
          <a className="custom-text4">Greg Hooper</a>
        </div>
      </div>
    </>
  );
}

export default App;
