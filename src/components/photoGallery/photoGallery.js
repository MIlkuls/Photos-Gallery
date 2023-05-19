import React, { useState, useEffect } from "react";
import axios from "axios";
import "./photoGallery.css"

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos?client_id=qTymtJFhYFtDRMLs865yUq0FuTT41LZ3-LvgPJJNGMo'
        );
        setPhotos(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className=" d-flex justify-content-center align-items-center gap-5 flex-wrap">
      {photos.map((photo) => (
        <div key={photo.id} onClick={() => openModal(photo)}>
          <img src={photo.urls.regular} alt={photo.alt_description}/>
          <div className=" descr" >
            <h2>Author:{photo.id}</h2>
            <p>Name:{photo.alt_description}</p>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" >
            <img src={selectedPhoto.urls.regular} alt={selectedPhoto.alt_description}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;