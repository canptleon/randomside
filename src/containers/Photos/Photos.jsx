import React, { useEffect, useState } from "react";
import { Photo, Imagepagination } from '../../components'
import axios from "axios";


const Photos = ({SetPickedPhoto}) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
      setPhotos(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

   const indexOfLastPhoto = currentPage * photosPerPage;
   const indexOfFirstPost = indexOfLastPhoto - photosPerPage;
   const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPhoto);
 
   const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-6 pt-12">
            <Photo photo={currentPhotos} loading={loading} SetPickedPhoto={SetPickedPhoto}/>
        </div>
        <div className="py-3">
            <Imagepagination
              postsPerPage={photosPerPage}
              totalPosts={photos.length}
              paginate={paginate}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Photos;
