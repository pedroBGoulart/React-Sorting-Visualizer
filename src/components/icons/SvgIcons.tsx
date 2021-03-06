import { ReactElement, ReactSVG, ReactSVGElement } from "react";

type Icon = () => ReactElement 


export const ArrowDropDown:Icon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="18px"
        height="18px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

export const PlayArrow:Icon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="var(--primary-color)"
        width="18px"
        height="18px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8 5v14l11-7z" />
    </svg>
);

export const ShuffleIcon:Icon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
    </svg>
);
