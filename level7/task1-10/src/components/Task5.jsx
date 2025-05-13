import React from "react";
import useFetch from "../hooks/useFetch";

const FetchComponent = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>: {post.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchComponent;
