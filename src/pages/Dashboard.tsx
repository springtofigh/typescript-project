import React from 'react';
import BlogTables from "../components/BlogTables";
import { useState } from "react";
import { IBlog } from '../types/blog.types';
import { getBlogs } from './../functions/FakeDatas';

function Dashboard() {
    const [blogs, setBlogs] = useState<IBlog[]>(getBlogs());
  return (
    <div>
        <BlogTables blogs={blogs}/>
    </div>
  )
}

export default Dashboard;