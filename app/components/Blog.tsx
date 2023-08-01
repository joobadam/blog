import Link from "next/link";
import { Post } from "../lib/interface";
import {client} from '../lib/sanity'



async function getData() {
    const query = `*[_type == "post"]`;
  
    const data = await client.fetch(query);
  
    return data;
  }

  

const  Blog = async () => {



    const data = (await getData()) as Post[];
  return (
    <div className="h-fit py-10 mb-10 px-5 bg-red-600 flex justify-center items-center flex-col text-white blog">
        <div className="my-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          <h2>
            My Blog
          </h2>
        </div>

        <ul className="w-2/3">
        {data.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <p className="text-base font-medium leading-6 ">
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    {post.title}
                  </h3>
                </div>

                <p className="prose max-w-none text-white line-clamp-2">
                  {post.overview}
                </p>
              </Link>
  
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog