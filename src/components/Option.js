import React from 'react';
import { connect } from 'react-redux';
import { setInitial } from '../actions';

class Option extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initial: ''
        }


        this.onChangeDiff = this.onChangeDiff.bind(this); 
    }
    
    render() {
        return (
            <div>
                <input type="text" value={ this.state.diff } onChange={this.onChangeDiff}></input>
            </div>
        );
    }

    onChangeDiff(e) {

        if(isNaN(e.target.value))
            return;

        this.setState({ diff: e.target.value });

        if(e.target.value=='') {
            this.setState({ diff: '0' });
        } 

        this.props.onUpdateDiff(parseInt(e.target.value));

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setInitial(value))
    };
}

Option = connect(undefined, mapDispatchToProps)(Option);

export default Option;
