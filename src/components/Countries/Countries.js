import React from "react";

const Countries = (props) => {
    return (
        <div className={"container mt-4"}>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th scope={"col"}>Name</th>
                    <th scope={"col"}>Continent</th>
                </tr>
                </thead>
                <tbody>
                {props.countries.map((country) => {
                    return (
                        <tr key={country.id}>
                            <td>{country.name}</td>
                            <td>{country.continent}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Countries;