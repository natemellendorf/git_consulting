import React from "react";
import useFetch from "react-fetch-hook";
import logo from './logo.svg';
import ReactMarkdown from "react-markdown";


const PanelContent = (props) => {
    const { isLoading, data, error } = useFetch(props.download_url,{
        formatter: (response) => response.text()}
        );
    if (isLoading) return "Loading...";
    if (error) return "Error!";

    return (
        <ReactMarkdown children={data} />
    )
}

const Panels = (props) => {
    const files = props.payload.map((file, index) => {
        if (file.type === 'file' && file.name.includes(".md")) {
            var img = "posts/" + file.name.replace('.md', '.jpg');
            return (

                <div class="carousel-item active">
                    <img src={img} class="d-block w-100"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{file.name.replace('.md', '')}</h5>
                        <p><PanelContent download_url={'/posts/' + file.name} /></p>
                    </div>
                </div>

            )
        }
    })
    return files
}

export default function Banner() {
    const { isLoading, error, data } = useFetch("https://api.github.com/repos/natemellendorf/git_consulting/contents/public/posts");
    if (isLoading) return "Loading...";
    if (error) return "Error!";

    return (
        <div id="carouselExampleCaptions" class="carousel slide mb-3" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <Panels payload={data} />
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div >
    );
}
