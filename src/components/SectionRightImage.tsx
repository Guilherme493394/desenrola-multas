interface SectionRightImageProps {
  title: string;
  description: string;
  image_src: string | undefined;
  image_alt: string;
}
function SectionRightImage({
  title,
  description,
  image_src,
  image_alt,
}: SectionRightImageProps) {
  return (
    <section className="self-center  items-center justify-center md:flex md:flex-row-reverse min-h-[90vh] w-full">
      <img src={image_src} alt={image_alt}className="md:w-2/5"/>
      <div className="md:w-1/2">
      <h2 className="text-green-500 font-sans m-10 text-6xl font-bold mb-2">{title}</h2>
      <p className="m-10 list-none list-inside text-pretty text-xl font-semibold md:w-full">
        {description}
      </p>
      </div>
    </section>
  );
}

export default SectionRightImage;
