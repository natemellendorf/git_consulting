import React from "react";
import useFetch from "react-fetch-hook";
import logo from './logo.svg';
import ReactMarkdown from "react-markdown";


const PanelTitle = (props) => {
    const { isLoading, data, error } = useFetch(props.download_url, {
        formatter: (response) => response.text()
    }
    );
    if (isLoading) return (
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
    if (error) return (
        <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">ERROR!</span>
        </div>
    )

    var match = data.match(/Title:(.*)/)[1]

    return (
        <h5>{match}</h5>
    )
}

const PanelContent = (props) => {
    const { isLoading, data, error } = useFetch(props.download_url, {
        formatter: (response) => response.text()
    }
    );
    if (isLoading) return (
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
    if (error) return (
        <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">ERROR!</span>
        </div>
    )

    const regex = /#[A-Za-z]+/g;
    const found = data.match(regex);

    return (
        <p>
            <pre>{found}</pre>
        </p>
    )
}

const Panels = (props) => {
    var md = [];
    props.payload.map((file, index) => {
        if (file.type === 'file' && file.name.includes(".md")) {
            md.push(file)
        };
    });
    const files = md.map((file, index) => {
            var img = "posts/" + file.name.replace('.md', '.jpg');
            var act = "carousel-item";
            if (index === 0) { var act = "carousel-item active" };
            return (

                <div class={act}>
                    <img src={img} class="d-block w-100 h-100"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <PanelTitle download_url={'/posts/' + file.name} />
                        <PanelContent download_url={'/posts/' + file.name} />
                    </div>
                </div>

            )
        }
    )
    return files
}

export default function Banner() {
    const { isLoading, error, data } = useFetch("https://api.github.com/repos/natemellendorf/git_consulting/contents/public/posts?ref=feature/development");
    if (isLoading) return (
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
    if (error) return (
        <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    )

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
