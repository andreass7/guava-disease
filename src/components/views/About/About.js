import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="bg-white py-8 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-700">Tentang Aplikasi</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Aplikasi ini menggunakan model Machine Learning yang dilatih khusus
          untuk mengklasifikasikan penyakit pada daun jambu biji. Dengan
          teknologi ini, diharapkan petani dapat mengidentifikasi penyakit lebih
          cepat dan akurat, sehingga produktivitas tetap terjaga.
        </p>
      </div>
      <Card isBlurred className="w-full mx-auto mt-8 py-2 px-8">
        <CardBody>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 items-center">
            <p>Teknologi yang digunakan :</p>
            <div className="flex items-center gap-4 ms-2">
              <div>
                <Image
                  src="/next.webp"
                  width={50}
                  height={50}
                  alt="Next.js Logo"
                  className="hover:rotate-12 transition-all"
                />
              </div>
              <div className="bg-gray-300 p-1 rounded-xl">
                <Image
                  src="/3.png"
                  width={45}
                  height={45}
                  alt="Next.js Logo"
                  className="hover:rotate-12 transition-all"
                />
              </div>
              <div className="bg-orange-100 p-1 rounded-xl">
                <Image
                  src="/2.png"
                  width={45}
                  height={45}
                  alt="Next.js Logo"
                  className="hover:rotate-12 transition-all"
                />
              </div>
              <div className="bg-emerald-300 p-1 rounded-xl">
                <Image
                  src="/icon-white.svg"
                  width={45}
                  height={45}
                  alt="Next.js Logo"
                  className="hover:rotate-12 transition-all"
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};
export default AboutPage;
