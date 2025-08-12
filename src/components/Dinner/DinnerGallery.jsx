import React, { useState } from 'react';

const images = import.meta.glob('/src/assets/Dinner/*.{png,jpg,jpeg,svg}', {
  eager: true,
});

export default function DinnerGallery() {
  const imageList = Object.values(images);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className="grid w-full px-2 pb-[200px] lg:px-[100px] pt-[100px] lg:pb-[200px] grid-cols-2 lg:grid-cols-4 gap-4">
        {imageList.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden md:h-[349px] rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={img.default}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {/* Preview Modal */}
      {currentIndex !== null && (
        <div
          onClick={closeModal}
          className="fixed inset-0 backdrop-blur-lg bg-black/50 flex items-center justify-center z-50 p-4"
        >
          {/* Prev Button */}
          <button
            onClick={showPrev}
            className="absolute left-5 bg-white/80 text-black px-4 py-2 rounded-full hover:bg-white"
          >
            ◀
          </button>

          {/* Larger Image */}
          <img
            src={imageList[currentIndex].default}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] w-auto h-auto rounded-lg shadow-lg"
          />

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-5 bg-white/80 text-black px-4 py-2 rounded-full hover:bg-white"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}
