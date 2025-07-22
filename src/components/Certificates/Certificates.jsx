import React, { useState, useEffect } from "react";
import ScrollReveal from '../../utils/ScrollReveal';

const certificates = [
  {
    title: "TCS iON Career Edge",
    image: "certificate4.jpg",
    link: "https://drive.google.com/file/d/17mOaHDz069t3JTUAo5kZZL3wCi6Ndv_M/view?usp=sharing",
    description:
      "Completed a 15-day program focused on career readiness and essential soft skills.",
  },
  {
    title: "NPTEL Operating System",
    image: "certificate3.jpg",
    link: "https://drive.google.com/file/d/1q-Rdr2svXUBVLyAfrGXQ1ZoKy121AzCz/view?usp=drivesdka",
    description:
      "Studied core OS concepts including process scheduling, memory management, and file systems.",
  },
  {
    title: "C Programming",
    image: "certificate1.jpg",
    link: "https://drive.google.com/file/d/1J7LVd6w3b3_UTzWjtWP86g0Z4nFPZU5V/view?usp=drivesdk",
    description:
      "Mastered fundamentals of C language including loops, pointers, and memory operations.",
  },
  {
    title: "Aptitude Training",
    image: "certificate2.jpg",
    link: "https://drive.google.com/file/d/1J6eBrwBzwHovV51zihqZYDJqeTCr4yqO/view?usp=drivesdk",
    description:
      "Completed training on logical reasoning, quantitative aptitude, and verbal ability.",
  },
  {
    title: "All India NCAT 2025",
    image: "certificate5.jpeg",
    link: "https://drive.google.com/file/d/1Ymb6CZzQ5REoFgfLkEPDVR-9kQsdPTTK/view?usp=sharing",
    description:
      "Gained deep insights into corporate hiring processes, especially the structure of aptitude tests.",
  },
];

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isSmall;
}

const Certificates = () => {
  const isSmallScreen = useIsSmallScreen();
  const [showAll, setShowAll] = useState(false);
  const [modal, setModal] = useState(null); // {image, title, description, link}
  const visibleCertificates = isSmallScreen && !showAll ? certificates.slice(0, 2) : certificates;

  // Close modal on Escape key
  useEffect(() => {
    if (!modal) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modal]);

  return (
    <section className="min-h-screen bg-graph px-6 pt-32 pb-6 grid grid-cols-1 place-items-center border-blue-600/40" id="certificates">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500">MY CERTIFICATES</h2>
          <p className="italic text-gray-400 mt-2">
            "Credentials that validate my knowledge and skills"
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-blue-500/10 border border-blue-400 rounded-xl p-3 shadow-lg max-w-xs mx-auto flex flex-col items-center hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <button
                className="w-full focus:outline-none"
                onClick={() => setModal(cert)}
                aria-label={`View ${cert.title} larger`}
                style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-36 object-contain rounded-lg mb-4 mx-auto"
                  loading="lazy"
                />
              </button>
              <h3 className="text-lg font-semibold text-center text-blue-200 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-300 text-center mb-2">
                {cert.description}
              </p>
              <div className="flex justify-center mt-1">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline text-xs hover:text-blue-200"
                >
                  View/Download Original
                </a>
              </div>
            </div>
          ))}
        </div>
        {isSmallScreen && certificates.length > 2 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </ScrollReveal>
      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setModal(null)}
        >
          <div
            className="relative bg-blue-900 rounded-xl p-4 max-w-2xl w-full mx-4 flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-blue-400 focus:outline-none"
              onClick={() => setModal(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modal.image}
              alt={modal.title}
              className="w-full max-h-[70vh] object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-200 mb-2 text-center">{modal.title}</h3>
            <p className="text-gray-300 text-center mb-2">{modal.description}</p>
            <a
              href={modal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline text-sm hover:text-blue-200"
            >
              View/Download Original
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
