import { IBlog } from "../types/blog.types";

export function getBlogs() {
    const blogsData : IBlog[] = [
        {
            _id:"1dst547uyjhfndf",
            title: "This is a Title 1",
            img: "https://tailwindcss.com/_next/static/media/responsive-2.8cfea49d.png",
            author: "spring",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            _id:"23245yutyukmh",
            title: "This is a Title 2",
            img: "https://tailwindcss.com/_next/static/media/responsive-1.fd2e9248.png",
            author: "spring",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            _id:"343terfgfdht43",
            title: "This is a Title 3",
            img: "https://tailwindcss.com/_next/static/media/css-grid-2.d645692f.png",
            author: "spring",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            _id:"42456468iokfg",
            title: "This is a Title 4",
            img: "https://tailwindcss.com/_next/static/media/css-grid-4.308d73d9.png",
            author: "spring",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        }
    ]
          return blogsData;
}