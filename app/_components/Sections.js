import Hero from '@/app/_components/sections/Hero';
import CompanyInfo from '@/app/_components/sections/CompanyInfo';
import TestimonialShowcase from '@/app/_components/sections/TestimonialShowcase';

export default function Sections({sections}) {
  return sections.map((section) => {
    switch (section.internal.contentType) {
      case 'section_hero':
        return <Hero {...section} key={section.id} />
      case 'section_company_info':
        return <CompanyInfo {...section} key={section.id} />
      case 'section_testimonials':
        return <TestimonialShowcase {...section} key={section.id} />
    }
  })
}
