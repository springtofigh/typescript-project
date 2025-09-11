import { useEffect, useState} from 'react';
import BlogList from "../components/BlogList";
import { IBlog } from '../types/blog.types';
import { useApiGet } from '../functions/FetchAPI';
import { useCookies } from 'react-cookie';
import { COOKIES_NAME } from "../enums/public.enums";
import { getBlogs as getFakeBlogs } from './../functions/FakeDatas';

function Blogs() {
  const {data, getAPIData, status} = useApiGet();
  const [cookies] = useCookies([COOKIES_NAME.ACCESS_TOKEN])
  const token = cookies.accessToken
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
  if (data) {
    console.log("API DATA:", data);  // Is there any data?
    setBlogs(data?.data?.blogs || []);
  }
}, [data]);


  // useEffect(() => {
  //     getAPIData("/blog", {
  //         headers: {
  //           //میشه حتی یک enum برای bearer داشا
  //             authorization: `Bearer ${token}`
  //         }
  //     })
  //     setBlogs(data?.data?.blogs || [])
  // }, [status])

      useEffect(() => {
        if (token) {
        getAPIData("/blog", {
            headers: {      
            authorization: `Bearer ${token}`
            }
        });
        }
    }, [token]);

    useEffect(() => {
        if (status as any === "success" && data?.data?.blogs) {
        setBlogs(data.data.blogs);
        }
    }, [status, data]);

      useEffect(() => {
    if (data?.data?.blogs?.length > 0) {
      setBlogs(data.data.blogs)
    } else {
      setBlogs(getFakeBlogs())
    }
  }, [data])
  
  return (
      <>
          {token? <BlogList blogs={blogs}/>: <h1 className="text-center p-3">unAuthorization</h1>}
      </>
  )
}

export default Blogs;