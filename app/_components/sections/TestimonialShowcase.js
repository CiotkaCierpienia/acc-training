import TestimonialCarousel from '@/app/_components/TestimonialCarousel';
import { flotiqApiClient } from '@/flotiq-api-client';

export default async function TestimonialShowcase({ header, testimonials }) {
  const ids = testimonials.map(testimonial => testimonial.id);

  const testimonialsHydratedData = (await flotiqApiClient.TestimonialAPI.list({
    ids
  })).data;
  const testimonialsHydrated = testimonialsHydratedData.reduce(
    (acc, current) => {
        acc[current.id] = current;
        return acc;
      },
    {}
  );

  return (
    <div className="m-4">
      <h3 className="text-3xl py-4 text-center">{header}</h3>
      <TestimonialCarousel testimonials={ids.map((id) => testimonialsHydrated[id])} />
    </div>
  )
}
