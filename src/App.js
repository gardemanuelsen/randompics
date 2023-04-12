import "./App.css";
import genrateRandomImage from "./api";
import ImageResult from "./ImageResult";
import { useState } from "react";

function App() {
  const [image, setImage] = useState([]);
  const [clicked, setClicked] = useState(false);
  const handleClick = async () => {
    const result = await genrateRandomImage();
    setImage(result);
    setClicked(true);
  };
  return (
    <div className="heading">
      <h1>The Frame</h1>
      <p>Generate a random picture in the frame by pressing the button</p>
      <button onClick={handleClick}>Press here</button>

      <div className="frame">
        <ImageResult image={image} clicked={clicked} />
      </div>
    </div>
  );
}

export default App;
