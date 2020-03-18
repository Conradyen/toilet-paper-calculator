import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>
        <p style={pStyle}>
          Data are calculated based on my personal experience result may vary.
        </p>
        <p style={pStyle}>&copy;Ming-Hsuan Yen, 2020</p>
      </footer>
    );
  }
}

const footerStyle = {
  marginTop: "20px",
  color: "#797777",
  backgroundColor: "#414141",
  textAlign: "center",
  width: "100%"
};

const pStyle = {
  marginBottom: "0px",
  padding: "5px"
};
