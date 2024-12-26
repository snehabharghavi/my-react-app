

var m = {
  color: "pink",
  backgroundColor: "blueviolet"
};

var h = {
  color: "white",
  backgroundColor: "purple"
};

var y = {
  color: "red",
  backgroundColor: "cyan"
};

var q = {
  color: "red",
  backgroundColor: "pink",


};

function Style() {
  return (
    <div>
      <h1 style={m}>Emdded CSS</h1>
      <h2 style={h}>Styles are applied to a specific component or document only.</h2>
      <p style={y}>CSS styles are defined with an HTML or JavaScript file.</p>
      <p style={q}>Small, component-specific styles and Isolated styling</p>
    </div>
  );
}

export default Style;
