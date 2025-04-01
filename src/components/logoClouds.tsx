import Image from "next/image";

const logos = [
  "/images/CS-logo.png",
  "/images/EMBS-logo.png",
  "/images/IAS-logo.png",
  "/images/MTTS-logo.png",
  "/images/WIE-logo.png",
];

export default function LogoCloud() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-sky-800 mb-6">
          Chapters and Affinity Groups
        </h2>
        <div className="grid grid-cols-1 gap-8 items-center justify-around">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {logos.slice(0, logos.length - 1).map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
            {logos.length > 0 && (
              <div className="col-span-2 md:col-span-2 lg:col-span-1  flex justify-center mt-8">
                <Image
                  src={logos[logos.length - 1]}
                  alt={`Logo ${logos.length}`}
                  width={120}
                  height={60}
                  className="object-contain "
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
