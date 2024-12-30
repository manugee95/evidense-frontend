import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [showVerse, setShowVerse] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const verseTimer = setTimeout(() => setShowVerse(true), 10000);
    const buttonTimer = setTimeout(() => setShowButton(true), 15000);
    return () => {
      clearTimeout(verseTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      {!showVerse ? (
        <div className="animate-spin text-center">
          <img src="newEV2.png" alt="Logo" className="w-22 md:w-50 h-15 md:h-32" />
        </div>
      ) : (
        <div className="text-center">
          <h1
            className={`text-3xl font-bold transition-opacity duration-1000 ${
              showVerse ? "opacity-100" : "opacity-0"
            }`}
          >
            James 1:17
          </h1>
          <p
            className={`mt-4 text-lg transition-opacity duration-1000 ${
              showVerse ? "opacity-100" : "opacity-0"
            }`}
          >
            Every good and perfect gift is from above, coming down from the
            Father of the heavenly lights, who does not change like shifting
            shadows.
          </p>
          {showButton && (
            <Link to="/gallery">
              <button className="mt-6 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transform transition-transform duration-500 translate-y-4">
                Go to Gallery
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
