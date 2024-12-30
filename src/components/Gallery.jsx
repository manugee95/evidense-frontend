import { useState } from "react";

const images = [
  "/IMG_2077.jpg",
  "/IMG_2086.jpg",
  "/IMG_2100.jpg",
  "/IMG_2101.jpg",
  "/IMG_2102.jpg",
  "/IMG_2106.jpg",
  "/IMG_2107.jpg",
  "/IMG_20088.jpeg",
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full Size"
            className="max-w-full max-h-full"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              transform: `translate(${index % 2 === 0 ? "-" : ""}${
                index * 10
              }px, ${index * 30}px) rotate(${index % 2 === 0 ? "-5" : "5"}deg)`,
            }}
            className="relative"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
