import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {

    render(){
        if(!this.props.book){
            return <div></div>
        }
        return (
            <div>
                <h3>{this.props.book.title}</h3>
                <div> Pages: {this.props.book.pages} </div>
                <div> Author: {this.props.book.author} </div>
            </div>
            
        );
    }


}

function mapStateToProps(state) {
    return {

        book: state.selectedBook

    };
}

export default connect(mapStateToProps)(BookDetail);