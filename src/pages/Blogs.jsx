import React from 'react';
import BlogList from "./components/BlogList";
import { useState } from "react";
import { IBlog } from '../types/blog.types';
import { getBlogs } from './../functions/FakeDatas';

function Blogs() {
  const [blogs, setBlogs] = useState<IBlog[]>(getBlogs());
  return (
    <BlogList blogs={blogs} />
  )
}

export default Blogs;