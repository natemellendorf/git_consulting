import React from "react";
import useFetch from "react-fetch-hook";
import logo from './logo.svg';
import ReactMarkdown from "react-markdown";

const Content = (props) => {
    const { isLoading, data, error } = useFetch(props.download_url,{
        formatter: (response) => response.text()}
        );
    if (isLoading) return "Loading...";
    if (error) return "Error!";

    return (
        <ReactMarkdown children={data} />
    )
}

const Loop = (props) => {
    const files = props.payload.map((file, index) => {
        if (file.type === 'file' && file.name.includes(".md")){
            var img = "posts/" + file.name.replace('.md','.jpg');
        return (

            <div class="card mb-3 border-info bg-dark">
                <img src={img} class="card-img-top"></img>
                <div class="card-body bg-dark text-white">
                    <h5 class="card-title">{file.name.replace('.md', '')}</h5>
                    <p class="card-text">
                        <Content download_url={'/posts/' + file.name} />
                    </p>
                    <p class="card-text"><small class="text-muted">Commit: {file.sha}</small></p>
                </div>
            </div>
        
        )}
    })
    return <p>{files}</p>
}

export default function Hooks() {
    const { isLoading, error, data } = useFetch("https://api.github.com/repos/natemellendorf/git_consulting/contents/public/posts?ref=feature/development");
    if (isLoading) return "Loading...";
    if (error) return "Error!";

    return (
        <Loop payload={data} />
    );
}