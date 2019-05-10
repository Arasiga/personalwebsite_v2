import React, { Component } from "react";
import styled from "styled-components";

class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      background: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ background: true });
    } else {
      this.setState({ background: false });
    }
  }

  render() {

    console.log(this.state.background);

    const { background } = this.state;

    return (
      <div className={ background ? "navbar-background" : "navbar"}>

      </div>
    );
  }
}

// const Navbar = () => {
  
  // console.log(window);



  // window.addEventListener("scroll", () => { 
  //   if (window.scrollY > 500) {
  //     return <Container/>
  //   }
  //   else {
  //     return <div> header </div>
  //   }
  // },false);

//   console.log(window.scrollY);

//   return (
//     <Container>

//     </Container>
//   );
// }

const Container = styled.div`
  position: fixed;
  height: 8vh;
  width: 100%;
  background: white;
  z-index: 10;
`;

export default Navbar;