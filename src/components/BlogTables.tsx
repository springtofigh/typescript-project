import { FC, useEffect, useState } from "react";
// import { IPropsBlogs } from "../types/blog.types";
// import { useApiDelete } from "../functions/FetchAPI";
// import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { COOKIES_NAME } from "../enums/public.enums";
import { IBlog } from "../types/blog.types";

interface PropsBlogs {
  blogs: IBlog[];
  onDelete: (id: string) => void;
}

// type PropsBlogs = Omit<IPropsBlogs, "blog" | "key">;

const BlogTableComponents: FC<PropsBlogs> = ({ blogs, onDelete }) => {
  // const [getAPIDelete] = useApiDelete();
  // const navigate = useNavigate();
  const [cookies] = useCookies([COOKIES_NAME.ACCESS_TOKEN]);
  const token = cookies.accessToken;

  const [blogList, setBlogList] = useState<IBlog[]>(blogs);

  useEffect(() => {
    setBlogList(blogs);
  }, [blogs]);
  const deleteHandler = (id: string) => {
    console.log("Deleting:", id);
    console.log(
      "Current blogs:",
      blogList.map((b) => b._id)
    );
    if (window.confirm("Are you sure you want to delete this blog?")) {
      onDelete(id);
    }
  };

  if (blogs.length === 0) {
    return (
      <p className="text-center p-5 text-gray-500">There is No blog here!</p>
    );
  }

  //   const deleteHandler = (id: string) => {
  //     getAPIDelete(`/blog/delete/${id}`, {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //     navigate("/");
  //   };

  return (
    <div className="flex flex-col mt-5 p-5">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    BlogTitle
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    BlogAuthor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Text
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {blog._id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {blog.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {blog.author}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      {blog.text}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-red-500 hover:text-red-700"
                        href="#"
                        onClick={() => deleteHandler(blog._id)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTableComponents;