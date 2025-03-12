import React, { useEffect, useState} from 'react';
import BlogList from "../components/BlogList";
import { IBlog } from '../types/blog.types';
// import { getBlogs } from './../functions/FakeDatas';
import { useApiGet } from '../functions/FetchAPI';
import { useCookies } from 'react-cookie';
import { COOKIE_NAMES } from "../enums/public.enums";

function Blogs() {
  const {data, getAPIData, status} = useApiGet();
  const [cookies] = useCookies([COOKIE_NAMES.ACCESS_TOKEN])
  const token = cookies.accessToken
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  useEffect(() => {
      getAPIData("/blog", {
          headers: {
            //میشه حتی یک enum برای bearer داشا
              authorization: `Bearer ${token}`
          }
      })
      setBlogs(data?.data?.blogs || [])
  }, [status])
  
  return (
      <>
          {token? <BlogList blogs={blogs}/>: <h1 className="text-center p-3">unAuthorization</h1>}
      </>
  )
}

export default Blogs;