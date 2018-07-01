import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import Toolbar from '../Toolbar';
import Sidebar from '../Sidebar';

class Layout extends Component {
  state = {
    showSidebar: false,
  };

  closeHandler = () => {
    this.setState({ showSidebar: false });
  };

  toggleHandler = () => {
    this.setState(prevState => ({ showSidebar: !prevState.showSidebar }));
  };

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Toolbar toggleClicked={this.toggleHandler} />
        <Sidebar open={this.state.showSidebar} closed={this.closeHandler} />
        <main className="content">
          {children}
        </main>
      </Wrapper>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
export default Layout;
