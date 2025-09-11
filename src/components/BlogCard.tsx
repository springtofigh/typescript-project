import { FC } from "react";
import { PropsBlog } from "../types/blog.types";


const BlogCard : FC<PropsBlog> = ({blog}) => {
    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={blog.img} alt={blog.title} />
        </div>
        <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {blog.title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {blog.text} 
                </p>
        </div>
        <div className="p-6 pt-0 flex justify-between">
                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
                </button>
                <button data-ripple-light="true" className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase">
                {blog.author}
                </button>
        </div>
    </div>
    )
}

export default BlogCard