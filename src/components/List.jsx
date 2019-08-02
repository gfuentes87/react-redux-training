import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData} from "../redux/actions/actions";

class List extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <ul>
                {this.props.articles.map(article => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {articles: state.articles};
};

export default connect(mapStateToProps, {getData})(List);
