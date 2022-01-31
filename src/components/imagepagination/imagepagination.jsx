import React from "react";
import "./imagepagination.css";

const Imagepagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          {pageNumbers.map((number) => (
            <div>
              <button className="paginbutton flex justify-center" onClick={() => paginate(number)}>
                {number}
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Imagepagination;
