import Image from 'next/image';

export default function Testimonial({testimonial, avatar}) {
  const hasVariant = avatar[0].variants?.find((variant) => variant.name === 'Square');
  return (
    <div className="flex justify-center items-center text-center flex-col px-32">
      <div dangerouslySetInnerHTML={{ __html: testimonial }} />
      <Image
        alt={avatar[0].alt || ""}
        src={hasVariant ? `https://api.flotiq.com${avatar[0].url}/variant/Square` : `https://api.flotiq.com${avatar[0].url}`}
        className="rounded-full"
        width={100}
        height={100}
      />
    </div>
  )
}
