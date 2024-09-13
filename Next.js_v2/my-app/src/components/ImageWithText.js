// components/ImageWithText.js

function ImageWithText({ imageUrl, text }) {
  return (
    <div>
      <img
        src={imageUrl}
        alt={text}
        style={{ width: "100px", height: "100px" }}
      />
      <p>{text}</p>
    </div>
  );
}
export default ImageWithText;
