import React from "react";
import {useNavigate, Link} from 'react-router-dom';

const BookEdit = (props) => {
    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        authorId: 0,
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
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== "" ? formData.category : props.book.category;
        const authorId = formData.authorId !== 0 ? formData.authorId : props.book.author.id;
        const availableCopies = formData.availableCopies!== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, authorId, availableCopies);
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
                           placeholder={props.book.name}
                           onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label">Category</label>
                    <select name="category" className="form-select" onChange={handleChange}>
                        {props.categories.map((category, index) => {
                                if (props.book.category !== undefined &&
                                    props.book.category === category)
                                    return <option key={index} selected={props.book.category}
                                                   value={category}>{category}</option>
                                else return <option key={index}
                                                    value={category}>{category}</option>
                            }
                        )}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="form-label">Author</label>
                    <select name="authorId" className="form-select" onChange={handleChange}>
                        {props.authors.map((author) => {
                                if (props.book.author !== undefined &&
                                    props.book.author.id === author.id)
                                    return <option key={author.id} selected={props.book.author.id}
                                                   value={author.id}>{author.name} {author.surname}</option>
                                else return <option key={author.id}
                                                    value={author.id}>{author.name} {author.surname}</option>
                            }
                        )}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="availableCopies">Available copies</label>
                    <input type="text"
                           className="form-control"
                           id="availableCopies"
                           name="availableCopies"
                           placeholder={props.book.availableCopies}
                           onChange={handleChange}
                    />
                </div>
                <button id="submit" type="submit" className="btn btn-secondary">Submit</button>
                <Link className={"btn btn-link"} to={"/books"}>Back</Link>
            </form>
        </div>
    );
}

export default BookEdit;