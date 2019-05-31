import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
      <div className={style.menu}>
        <button className={style.menuButton} onClick={this.showMenu}>
          <img
            src="./assets/hamburger.png"
            className={style.menuIcon}
            alt="Drop down menu"
          />
        </button>
        <div className={style.menuContents(this.state.showMenu)}>
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
