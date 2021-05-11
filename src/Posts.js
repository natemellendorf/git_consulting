import React from "react";
import useFetch from "react-fetch-hook";
import ReactMarkdown from "react-markdown";

const Content = (props) => {
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

    return (
        <ReactMarkdown children={data} />
    )
}

const GetImage = (props) =>{
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
    const regex = /Banner:([A-Za-z0-9_-]+[.jpg]+)/;
    const img = data.match(regex)
    // console.log(img[1])
    return (
        <img src={'/posts/' + img[1]} class="card-img-top"></img>
    )
}

const Loop = (props) => {
    const files = props.payload.map((file, index) => {    

        return (
            <div class="card mb-3 card-border bg-dark">
                <GetImage download_url={file.default} />
                <div class="card-body bg-dark text-white">
                    <p class="card-text">
                        <Content download_url={file.default} />
                    </p>
                    <p class="card-text"><small class="text-muted">Commit: ##</small></p>
                </div>
            </div>

        )
    })
    return <p>{files}</p>
}

export default function Posts() {
    function importAll(r) {
        return r.keys().map(r);
    }

    const posts = importAll(require.context('../public/posts/', false, /\.(md)$/))

    return (
        <Loop payload={posts} />
    );
}
