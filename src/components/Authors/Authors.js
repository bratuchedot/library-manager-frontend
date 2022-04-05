import React from "react";

const Authors = (props) => {
    return (
        <div className={"container mt-4"}>
                <table className={"table table-striped"}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Surname</th>
                        <th scope={"col"}>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.authors.map((author) => {
                        return (
                            <tr key={author.id}>
                                <td>{author.name}</td>
                                <td>{author.surname}</td>
                                <td>{author.country.name}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
        </div>
    );
}

export default Authors;