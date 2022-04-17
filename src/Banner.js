import React from "react";
import { bounce, zoomInDown, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    },
    zoomInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
    },
    fadeIn: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

export default function Banner() {
    return (
        <StyleRoot>
        <div>
            <div style={{ position: "relative" }}>
                <img src="/posts/banner2.jpg" class="banner"></img>
            </div>
            <div>
                <img src="/logo/white-with-color.svg" class="logoOverlap" style={styles.fadeIn}></img>
            </div>
        </div>
        </StyleRoot>
    );
}
