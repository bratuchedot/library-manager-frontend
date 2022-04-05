import React from "react";

const Categories = (props) => {
    return (
        <div className={"container mt-4"}>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th scope={"col"}>Categories</th>
                </tr>
                </thead>
                <tbody>
                {props.categories.map((category, index) => {
                    return (
                        <tr key={index}>
                            <td>{category}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Categories;