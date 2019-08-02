import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addArticle} from "../redux/actions/actions";
import uuidv1 from 'uuid';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };

        // binding functions
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title:''});
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        const {title} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Formulario</h2>
                <div>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addArticle: article => dispatch(addArticle(article))
  }
};
// export default Form;
export default connect(null, mapDispatchToProps)(Form);
