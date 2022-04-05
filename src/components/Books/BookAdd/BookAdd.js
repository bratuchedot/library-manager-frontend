import React from "react";
import {useNavigate, Link} from 'react-router-dom';

const BookAdd = (props) => {
    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "NOVEL",
        authorId: 1,
        availableCopies: 0
    });

    const handleChange = (event) => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value.trim()
        });
    }

    const onAddBook = (event) => {
        event.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const authorId = formData.authorId;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, category, authorId, availableCopies);
        history("/books");
    }

    return (
        <div className="container mt-4">
            <form onSubmit={onAddBook}>
                <div className="mb-4">
                    <label className="form-label" htmlFor="name">Book name</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           name="name"
                           required
                           placeholder="Enter the name of the book"
                           onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label">Category</label>
                    <select name="category" className="form-select" onChange={handleChange}>
                        {props.categories.map((category, index) =>
                            <option key={index} value={category}>{category}</option>
                        )}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="form-label">Author</label>
                    <select name="authorId" className="form-select" onChange={handleChange}>
                        {props.authors.map((author) =>
                            <option key={author.id} value={author.id}>{author.name} {author.surname}</option>
                        )}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="availableCopies">Available copies</label>
                    <input type="text"
                           className="form-control"
                           id="availableCopies"
                           name="availableCopies"
                           placeholder="Enter the number of available copies"
                           required
                           onChange={handleChange}
                    />
                </div>
                <button id="submit" type="submit" className="btn btn-secondary">Submit</button>
                <Link className={"btn btn-link"} to={"/books"}>Back</Link>
            </form>
        </div>
    );
}

export default BookAdd;