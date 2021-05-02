import React from "react";

export default function Offcanvas() {

    return (
        <div class="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sharing is Caring!</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="mb-3">
                    We write our stories in the hope that others may find them helpful. One great way you can help us, is to share our site with your friends and peers!
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-outline-info" type="button">LinkedIn</button>
                    <button class="btn btn-outline-info" type="button">Reddit</button>
                    <button class="btn btn-outline-info" type="button">Discord</button>
                </div>

            </div>
        </div>
    );
}
