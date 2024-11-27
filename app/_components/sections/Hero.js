import Image from 'next/image';

export default function Hero({header, subheader, image}) {
  return (
    <div className="flex gap-4 m-4">
      <div>
        <Image
          alt={image[0].alt || ""}
          src={`https://api.flotiq.com${image[0].url}`}
          width={400}
          height={400}
        />
      </div>
      <div>
        <h3 className="text-3xl font-bold">{header}</h3>
        <h4 className="text-2xl">{subheader}</h4>
      </div>

    </div>
  )
}
