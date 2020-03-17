import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>
        <p style={pStyle}>
          Data are calculate on my personal experience result may varies.
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
  textAlign: "center"
};

const pStyle = {
  marginBottom: "0px",
  padding: "5px"
};
