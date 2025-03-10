import BlogTables from "./components/BlogTables"
import Navbar from "./components/Navbar"
import { useState } from "react"
import { IBlog } from "./types/blog.types";
import BlogList from "./components/BlogList";

function App() {
  const blogsData : IBlog[] = [
    {
        title: "This is a Title 1",
        img: "https://tailwindcss.com/_next/static/media/responsive-2.8cfea49d.png",
        author: "spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        title: "This is a Title 2",
        img: "https://tailwindcss.com/_next/static/media/responsive-1.fd2e9248.png",
        author: "spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        title: "This is a Title 3",
        img: "https://tailwindcss.com/_next/static/media/css-grid-2.d645692f.png",
        author: "spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        title: "This is a Title 4",
        img: "https://tailwindcss.com/_next/static/media/css-grid-4.308d73d9.png",
        author: "spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
]
      const [blogs] = useState<IBlog[]>(blogsData);
  return (
    <div>
      <Navbar/>
      <BlogTables blogs={blogs}/>
      <BlogList blogs={blogs} />
    </div>
  )
}

export default App
