import React, { Component } from 'react';
import Wrapper from '../hoc/Wrapper';
import Toolbar from './Toolbar';
import Sidebar from './SideBar';

class Layout extends Component {
    state = {
        showSidebar: false
    }
    closeHandler = () => {
        this.setState({ showSidebar: false })
    }
    toggleHandler = () => {
        this.setState((prevState) => {
            return { showSidebar: !prevState.showSidebar }
        })
    }
    render() {
        return (
            <Wrapper>
                <div>
                    <Toolbar toggleClicked={this.toggleHandler}/>
                    <Sidebar
                        open={this.state.showSidebar}
                        closed={this.closeHandler} />
                </div>
                <main className='content'>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
}

export default Layout;