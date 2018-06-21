import React, { Component } from 'react';

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
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {this.state.showMenu ?
          (
            <div className="menu">
              {this.props.children}
            </div>
          ):
          (
            null
          )
        }
      </div>
    );
  }
}

export default Menu;
