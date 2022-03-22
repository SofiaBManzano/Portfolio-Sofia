import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/arcoiris.json";
class ControlledLottie extends Component {
  state = { isStopped: false, isPaused: false };

  render() {
    const buttonStyle = {
      display: "inline-block",
      margin: "10px auto",
      marginRight: "10px",
      border: "none",
      color: "white",
      backgroundColor: "#f43",
      borderRadius: "2px",
      fontSize: "15px",
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="controlled">
        <h1>Controlled Lottie</h1>
        <p>Ocupamos estados para manipular la animación</p>
        <Lottie
          options={defaultOptions}
          height={400}
          width={1000}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          Stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false, isPaused: false })}
        >
          Play
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          Pause
        </button>
      </div>
    );
  }
}

export default ControlledLottie;
