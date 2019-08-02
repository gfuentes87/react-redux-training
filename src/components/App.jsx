import React, {Component} from 'react';
import List from './List';
import Form from "./Form";
import {connect} from 'react-redux';

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Articles</h1>
                    <List/>
                </div>
                <div>
                    <h1>Add new Article</h1>
                    <Form/>
                </div>
                {this.props.message ? <div>{this.props.message}</div> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
};

export default connect(mapStateToProps)(App);
