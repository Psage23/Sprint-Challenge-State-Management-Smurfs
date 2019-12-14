import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSmurf, addSmurf} from '../actions';
import AddSmurf from './AddSmurf';

class Smurfies extends Component {
    componentDidMount() {
        this.props.fetchSmurf()
    }
    render() {
        return (
            <div className="container">
                <div className="title">
                    <h1>Start Your Own Smurf Family</h1>
                </div>
                <AddSmurf addSmurf={this.props.addSmurf} error={this.props.error}/>
                <div className="character-list">
                    {this.props.smurfs.map(character => {
                        return (
                            <div id={character.id} className="character">
                                <h1>Name: {character.name}</h1>
                                <h2>Age: {character.age}</h2>
                                <h3>Height: {character.height} </h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };
};


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps,{ fetchSmurf, addSmurf })(Smurfies);
