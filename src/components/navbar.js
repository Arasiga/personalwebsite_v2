import React, { Component } from "react";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import Apps from '@material-ui/icons/Apps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-scroll";

const MENU_OPTIONS = [
  "about",
  "skills",
  "projects",
  "contact"
]

class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      background: false,
      anchorEl: null
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

  toggleMenu = e => {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {
      toggleMenu,
      handleClose,
      state: { background, anchorEl }
    } = this;

    const openMenu = Boolean(anchorEl);

    return (
      <div className={ background ? "navbar-background navbar" : "navbar"}>
        <NameContainer>
          Arasiga
        </NameContainer>
        <NavContainer>
          <IconButton
            aria-label="More"
            aria-owns={openMenu ? 'nav-menu' : undefined}
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            <Apps style={{ color: "white" }} />
          </IconButton>
          <Menu
            id="nav-menu"
            anchorEl={anchorEl}
            open={ openMenu }
            onClose={handleClose}
          >
            {
              MENU_OPTIONS.map(option => (
                <MenuItem key={option}>
                  <Link
                    to={option}
                    smooth={true}
                    duration={1000}
                    onClick={handleClose}
                  >
                    {option}
                  </Link>
                </MenuItem>
              ))  
            }
          </Menu>
        </NavContainer>
      </div>
    );
  }
}

const NameContainer = styled.div`
  margin-right: auto;
  padding-left: 25px;
  font-size: 2em;
  color: white;
`;

const NavContainer = styled.div`
  float: right;
  padding-right: 25px;
`;

export default Navbar;