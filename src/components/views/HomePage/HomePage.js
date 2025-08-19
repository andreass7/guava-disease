import { Button } from "@heroui/react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto lg:px-6  py-10 gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-600">
            Guava <span className="italic text-gray-800">Disease</span>{" "}
            <span className="text-danger">Predictor</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Sistem cerdas untuk mendeteksi penyakit pada jambu biji (guava).
            Bantu petani menjaga hasil panen lebih sehat dengan analisis
            berbasis AI.
          </p>
          <Button
            color="danger"
            className="mt-6 text-white rounded-xl shadow-xl"
            size="lg"
          >
            Coba Sekarang
          </Button>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/guava.png"
            alt="Guava Disease"
            width={300}
            height={300}
            className="hover:scale-105 transition-all"
          />
        </div>
      </section>
    </div>
  );
};
export default HomePage;
