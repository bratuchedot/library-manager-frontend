import React from "react";
import {Link} from "react-router-dom";

const Book = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.book.name}</td>
            <td scope={"col"}>{props.book.category}</td>
            <td scope={"col"}>{props.book.author.name} {props.book.author.surname}</td>
            <td scope={"col"}>{props.book.availableCopies}</td>
            <td scope={"col"}>
                <Link className={"btn btn-info text-white mx-2"}
                      onClick={() => props.onEdit(props.book.id)}
                      to={`/books/edit/${props.book.id}`}>
                    Edit
                </Link>
                <button title={"Delete"}
                        className={"btn btn-danger mx-2"}
                        onClick={() => props.onDelete(props.book.id)}>
                    Delete
                </button>
                <button disabled={props.book.availableCopies === 0} title={"Take"}
                        className={"btn btn-warning mx-2"}
                        onClick={() => props.onTake(props.book.id)}>
                    Mark As Taken
                </button>
            </td>
        </tr>
    );
}

export default Book;