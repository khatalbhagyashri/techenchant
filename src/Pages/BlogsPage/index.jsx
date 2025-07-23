import React, { useState } from "react";
import { blogPosts } from "../../constant";
import { TbExternalLink } from "react-icons/tb";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function BlogsPage() {
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3);
  return (
    <>
    <Header />
    <section
      id="blogs"
      className=" w-full flex bg-gray-00 flex-col items-center md:px-28 px-6 py-20 gap-10"
    >
      <div className="w-full flex flex-col items-center  bg-red-00">
        <h1 className="border inline-block border-black rounded-md text-sm px-2 py-1 md:text-base md:px-2 md:py-1">
          Blogs
        </h1>
        <p className="mt-3 font-normal text-textColor text-base">
          Stay updated with expert tips and trends in digital marketing and web
          strategies.
        </p>
      </div>

      <div className="w-full grid bg-red-00 grid-cols-1 md:grid-cols-3 gap-5">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white rounded-lg group overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[360px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 p-4 transform translate-y-full group-hover:translate-y-0 
               transition-transform duration-500 ease-in-out flex flex-col justify-center items-center cursor-pointer">
              <h2 className="text-lg font-bold text-white">{post.title}</h2>
              <p className="text-sm text-gray-300 mt-1">
                {post.date} | {post.author}
              </p>
              <button className="text-white border rounded-full p-3 mt-2 ">
                <TbExternalLink size={30} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-textColor text-white rounded-full hover:bg-blue-700 transition"
        >
          {showAll ? "Show Less" : "Read More"}
        </button>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default BlogsPage;
