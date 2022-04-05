import React, {Component} from "react";
import Book from "../BookTerm/Book";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);
        return (
            <div className={"container mt-4"}>
                <table className={"table table-striped"}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Category</th>
                        <th scope={"col"}>Author</th>
                        <th scope={"col"}>Available Copies</th>
                        <th scope={"col"}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books}
                    </tbody>
                </table>
                <ReactPaginate previousLabel={<span>&laquo;</span>}
                               nextLabel={<span>&raquo;</span>}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"page-item"}
                               breakLinkClassName={"page-link"}
                               containerClassName={"pagination justify-content-center"}
                               pageClassName={"page-item"}
                               pageLinkClassName={"page-link"}
                               previousClassName={"page-item"}
                               previousLinkClassName={"page-link"}
                               nextClassName={"page-item"}
                               nextLinkClassName={"page-link"}
                               activeClassName={"active bg-secondary"}
                               pageCount={pageCount}
                               marginPagesDisplayed={1}
                               pageRangeDisplayed={2}
                               onPageChange={this.handlePageClick}/>
                <div className={"d-grid gap-2"}>
                    <Link className={"btn btn-dark"} to={"/books/add"}>Add new book</Link>
                </div>
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        });
    }

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((book) => {
            return (
                <React.Fragment key={book.id}>
                    <Book book={book}
                          onEdit={this.props.onEdit}
                          onDelete={this.props.onDelete}
                          onTake={this.props.onTake}/>
                </React.Fragment>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        });
    }
}

export default Books;