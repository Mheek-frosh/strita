"use client";

import Image from "next/image";
import img6 from "@/assets/6.png";
import img7 from "@/assets/7.png";
import img8 from "@/assets/8.png";

export default function GallerySection() {
  const images = [img6, img7, img8];

  return (
    <section className="py-12 md:py-20 bg-cream dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-navy dark:text-cream">Church Gallery</h3>
          <p className="text-sm text-navy text-opacity-70 dark:text-cream max-w-2xl mx-auto">Moments from our parish life and church grounds.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="w-full h-56 md:h-64 overflow-hidden rounded-lg">
              <Image src={src} alt={`Gallery ${i + 1}`} className="object-cover object-center w-full h-full" priority />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
