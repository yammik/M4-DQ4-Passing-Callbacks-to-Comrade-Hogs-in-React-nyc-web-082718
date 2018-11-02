import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
    }, false)
  }

  throwAFit = () => {
    if (!this.state.panicked) {
      this.setState({
        panicked: true,
      })
    }
    return this
  }

  relax = () => {
    if (this.state.panicked) {
      this.setState({
        panicked: false,
      })
    }
  }

  exclaim = () => {
    this.exclaimAudio.play()
    this.squeelAudio.play()
    this.throwAFit()
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={() => this.props.alterEnvironment('inhospitable')}>
        {this.props.environment === "inhospitable" ? this.exclaim() : this.relax()}
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
