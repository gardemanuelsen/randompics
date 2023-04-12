import "./ImageResult.css";

function ImageResult({ image, clicked }) {
  return (
    <div className="image">
      {clicked ? (
        <img src={image} />
      ) : (
        <img src={image} style={{ display: "none" }} />
      )}
    </div>
  );
}

export default ImageResult;
