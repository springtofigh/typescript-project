import { useState, useEffect } from "react";
import BlogTables from "../components/BlogTables";
import { IBlog } from "../types/blog.types";
import { getBlogs as getFakeBlogs } from "./../functions/FakeDatas";
// import { useApiGet } from "../functions/FetchAPI";
import { useCookies } from "react-cookie";
import { COOKIES_NAME } from "../enums/public.enums";

function Dashboard() {
  // const { data, getAPIData, status } = useApiGet();
  const [cookies] = useCookies([COOKIES_NAME.ACCESS_TOKEN]);
  const token = cookies.accessToken;
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  // useEffect(() => {
  //   getAPIData("/blog", {
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  //   setBlogs(data?.data?.blogs || []);
  // }, [status]);

  // useEffect(() => {
  //   if (data?.data?.blogs?.length > 0) {
  //     setBlogs(data.data.blogs);
  //   } else {
  //     // fallback به داده‌های فیک
  //     setBlogs(getFakeBlogs());
  //   }
  // }, [data]);

  

  // دریافت داده‌های فیک فقط یک بار هنگام mount
  useEffect(() => {
    setBlogs(getFakeBlogs());
  }, []);

  // تابع حذف بلاگ که از BlogTables صدا زده میشه
  const handleDelete = (id: string) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
  };

  return (
    <>
      {token ? (
        <BlogTables blogs={blogs} onDelete={handleDelete} />
      ) : (
        <h1 className="text-center p-3">unAuthorization</h1>
      )}
    </>
  );
}

export default Dashboard;