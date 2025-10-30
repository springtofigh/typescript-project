import { FC, JSX } from "react";
import { PropsBlogs } from "../types/blog.types";
import BlogCard from "./BlogCard";

const BlogList : FC<PropsBlogs> = ({blogs}) => {

    const Cards : JSX.Element[] = blogs.map((blog, key) => (
        <BlogCard blog={blog} key={key} />
    ))

    return (
        <div className="grid gap-2 mt-6 lg:grid-cols-4 p-5 justify-items-center">
            {Cards}
        </div>
    )
}

export default BlogList;