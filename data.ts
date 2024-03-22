import { atom } from "recoil"

export const sidebar_data = ["Discussion Forum","Market Stories","Sentiment","Market","Sector","Watchlist","Events","News/Interview"]

export interface centerprops{
    name: string,
    content: string
}
export const center_data:centerprops[] = [{
    name: "Abishek Newar",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates consequatur facilis iste distinctio quae aut atque."
},{
    name: "Kumkum tamang",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates consequatur facilis iste distinctio quae aut atque."
},{
    name: "Ajay Prasad",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates consequatur facilis iste distinctio quae aut atque."
},{
    name: "Nilesh Dewangan",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates consequatur facilis iste distinctio quae aut atque."
}
]


export interface rightprops{
    title: string,
    content: string,
    link: string
}
export const Right_Data:rightprops[] = [{
    title: "Desert",
    content: "A desert is a large, extremely dry area of land with sparse vegetation. It is one of Earth’s major types of ecosystems.",
    link: "https://docs.google.com/thumbnail?id=1C4DjbtMKTVJB8IIx5zckRUs4po5Yo5Gm"
},{
    title: "Forest",
    content: "A desert is a large, extremely dry area of land with sparse vegetation. It is one of Earth’s major types of ecosystems.",
    link: "https://docs.google.com/thumbnail?id=1C4DjbtMKTVJB8IIx5zckRUs4po5Yo5Gm"
},{
    title: "Hill Station",
    content: "A desert is a large, extremely dry area of land with sparse vegetation. It is one of Earth’s major types of ecosystems.",
    link: "https://docs.google.com/thumbnail?id=1C4DjbtMKTVJB8IIx5zckRUs4po5Yo5Gm"
}]

export const showState = atom({
    key: "showState",
    default: false
})

export const pageState = atom({
    key: "pageState",
    default: "discussion"
})