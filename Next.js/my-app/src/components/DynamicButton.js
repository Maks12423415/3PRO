"use client";

function DynamicButton({ label, onClick }) {
  return <button onClick={onClick}> {label} </button>;
}
export default DynamicButton;
