import React from "react";
import useFetch from "react-fetch-hook";

const PanelTitle = (props) => {
    const { isLoading, data, error } = useFetch(props.download_url, {
        formatter: (response) => response.text()
    }
    );
    if (isLoading) return (
        <div class="text-center">
            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
            </div>
        </div>
    );
    if (error) return (
        <div class="text-center">
            <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">ERROR!</span>
            </div>
        </div>
    )

    var match = data.match(/Title:(.*)/)[1]

    return (
        <h1 class="display-1">{match}</h1>
    )
}

const PanelContent = (props) => {
    const { isLoading, data, error } = useFetch(props.download_url, {
        formatter: (response) => response.text()
    }
    );
    if (isLoading) return (
        <div class="text-center">
            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
            </div>
        </div>
    );
    if (error) return (
        <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">ERROR!</span>
        </div>
    )

    const regex = /#[A-Za-z]+/g;
    const found = data.match(regex);
    const newstring = found.toString().replaceAll(',', '  ')

    return (
        <span class="badge rounded-pill bg-light text-dark">{newstring}</span>
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
        var act = "carousel-item h-100";
        if (index === 0) { var act = "carousel-item h-100 active" };
        return (

            <div class={act}>
                <img src={img} class="w-100 fit_img"></img>
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
    // const { isLoading, error, data } = useFetch("https://api.github.com/repos/natemellendorf/git_consulting/contents/public/posts?ref=feature/development");
    // if (isLoading) return (
    //     <div class="spinner-border text-info" role="status">
    //         <span class="visually-hidden">Loading...</span>
    //     </div>
    // );
    // if (error) return (
    //     <div class="spinner-grow text-danger" role="status">
    //         <span class="visually-hidden">ERROR!</span>
    //     </div>
    // )

    return (
        <img src="/posts/banner.jpg" class="img-fluid"></img>
        // <div id="carouselExampleCaptions" class="carousel slide h-100" data-bs-ride="carousel">
        //     <div class="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div class="carousel-inner h-100">
        //         <Panels payload={data} />
        //     </div>
        //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Previous</span>
        //     </button>
        //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Next</span>
        //     </button>
        // </div >
    );
}
