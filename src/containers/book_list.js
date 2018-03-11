import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {

    renderBookList(){
        return this.props.books.map(book => {
            return (
                <li 
                onClick={()=> this.props.selectBook(book)}
                key={book.title} 
                className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderBookList()}
            </ul>
        );        
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };    
}

//anything returned from this function will end as props
// on the BookList
function mapDispatchToProps(dispatch){
    return bindActionCreators(
        //whenever select book is called the result should be passed to
        //all reduxers
        {selectBook: selectBook}, dispatch
    );
}

//promote Booklist from component to container it needs to know
//about this dispatch method, selectBook. Make it available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
