import Image from 'next/image';

export default function CompanyInfo({header, about_us, logo}) {
  return (
    <div className="flex gap-4 m-4">
      <div><Image
        alt={logo[0].alt || ""}
        src={`https://api.flotiq.com${logo[0].url}`}
        width={400}
        height={400}
      /></div>
      <div>
        <h3 className="text-3xl">{header}</h3>
        <div dangerouslySetInnerHTML={{__html: about_us}} className="text-gray-600"/>
      </div>

    </div>
  )
}
