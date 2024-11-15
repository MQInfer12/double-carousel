import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MAW from "./assets/maw.mp4";

const items = [
  { id: 0, backgroundColor: "rgba(253, 230, 138, 0.4)" },
  { id: 1, backgroundColor: "rgba(186, 230, 253, 0.4)" },
  { id: 2, backgroundColor: "rgba(167, 243, 208, 0.4)" },
  { id: 3, backgroundColor: "rgba(245, 208, 254, 0.4)" },
];

function App() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const item1 = items[carouselIndex];
  const item2 = items[(carouselIndex + 1) % items.length];

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevious = () => {
    setCarouselIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#121212] h-screen w-screen flex flex-col gap-8 items-center justify-center">
      <div className="relative h-[520px] w-80">
        <AnimatePresence>
          {/* Primer elemento (sale hacia la izquierda) */}
          <motion.div
            key={item1.id}
            layoutId={`item-${item1.id}`}
            exit={{
              x: "-100%",
              opacity: 0,
            }}
            style={{ backgroundColor: item1.backgroundColor }}
            className="absolute top-0 left-0 h-60 w-full rounded-xl flex items-center justify-center text-5xl overflow-hidden border-4 border-white"
          >
            <div className="w-full h-full relative">
              <video src={MAW} autoPlay muted />
              <p
                style={{
                  backgroundColor: item1.backgroundColor,
                }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                {item1.id}
              </p>
            </div>
          </motion.div>

          <motion.div
            key={item2.id}
            layoutId={`item-${item2.id}`}
            style={{ backgroundColor: item2.backgroundColor }}
            initial={{
              x: "100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="absolute bottom-0 left-0 h-60 w-full rounded-xl flex items-center justify-center text-5xl overflow-hidden border-4 border-white"
          >
            <div className="w-full h-full relative">
              <video src={MAW} autoPlay muted />
              <p
                style={{
                  backgroundColor: item2.backgroundColor,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {item2.id}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-4">
        <button className="bg-white p-2 rounded-md" onClick={handlePrevious}>
          Atrás
        </button>
        {carouselIndex}
        <button className="bg-white p-2 rounded-md" onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </section>
  );
}

export default App;
