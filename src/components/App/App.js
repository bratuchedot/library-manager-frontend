import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Books from "../Books/BookList/Books";
import BookAdd from "../Books/BookAdd/BookAdd";
import Categories from "../Categories/Categories";
import Authors from "../Authors/Authors";
import Countries from "../Countries/Countries";
import NavBar from "../NavBar/NavBar";
import LibraryService from "../../services/LibraryService";
import BookEdit from "../Books/BookEdit/BookEdit";
import Footer from "../Footer/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: [],
            countries: [],
            selectedBook: {},
        }
    }

    render() {
        return (
            <Router>
                <NavBar/>
                <Routes>
                    <Route path={"/books"}
                           element={<Books books={this.state.books}
                                           onEdit={this.getBookById}
                                           onDelete={this.handleDeleteBook}
                                           onTake={this.handleMarkAsTaken}/>}/>
                    <Route path={"/books/add"} element={<BookAdd categories={this.state.categories}
                                                                 authors={this.state.authors}
                                                                 onAddBook={this.handleAddBook}/>}/>
                    <Route path={"/books/edit/:id"} element={<BookEdit categories={this.state.categories}
                                                                       authors={this.state.authors}
                                                                       onEditBook={this.handleEditBook}
                                                                       book={this.state.selectedBook}/>}/>
                    <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
                    <Route path={"/authors"} element={<Authors authors={this.state.authors}/>}/>
                    <Route path={"/countries"} element={<Countries countries={this.state.countries}/>}/>
                    <Route path="*" element={<Navigate to="/books"/>}/>
                </Routes>
                <Footer/>
            </Router>
        )
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
        this.loadCountries();
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                });
            });
    }

    loadCategories = () => {
        LibraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                });
            });
    }

    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                });
            });
    }

    loadCountries = () => {
        LibraryService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                });
            });
    }

    handleAddBook = (name, category, authorId, availableCopies) => {
        LibraryService.addBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    handleEditBook = (id, name, category, authorId, availableCopies) => {
        LibraryService.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    handleDeleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    handleMarkAsTaken = (id) => {
        LibraryService.takeBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    getBookById = (id) => {
        LibraryService.getBookById(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                });
            });
    }
}

export default App;
