import React, { useState, useEffect } from 'react';
import BlogTables from "../components/BlogTables";
import { IBlog } from '../types/blog.types';
// import { getBlogs } from './../functions/FakeDatas';
import { useApiGet } from '../functions/FetchAPI';
import { useCookies } from 'react-cookie';
import { COOKIES_NAME } from "../enums/public.enums";

function Dashboard() {
  const {data, getAPIData, status} = useApiGet();
  const [cookies] = useCookies([COOKIES_NAME.ACCESS_TOKEN])
  const token = cookies.accessToken
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    getAPIData("/blog", {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    setBlogs(data?.data?.blogs || [])
}, [status])

  return (
    <>
        {token? <BlogTables blogs={blogs}/>: <h1 className="text-center p-3">unAuthorization</h1>}
    </>
  )
}

export default Dashboard;