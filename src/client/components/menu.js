import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as style from '../styles/menu';

class Menu extends Component {
  state = {
    showMenu: false,
  }
  
  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div css={style.menu}>
        <button css={style.menuButton} onClick={this.showMenu}>
          <img
            src="./assets/hamburger.png"
            css={style.menuIcon}
            alt="Drop down menu"
          />
        </button>
        <div css={style.menuContents(this.state.showMenu)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  children: PropTypes.array,
};

Menu.defaultProps = {
  children: null,
}

export default Menu;
