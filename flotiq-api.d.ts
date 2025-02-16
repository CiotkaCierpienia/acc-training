/**
 * This file was generated by flotiq-api-typegen command
 * Generated at: 2025-02-12T10:29:15.410Z
 */

import {
  DataLink,
  ApiRequest,
  BaseObject,
  SearchParams,
  HydratedSearchResponse,
  InternalMedia,
  InternalMediaHydrated,
  InternalMediaHydratedTwice,
  InternalTag,
  InternalTagHydrated,
  InternalTagHydratedTwice,
} from "@flotiq/flotiq-api-sdk";

type StringWithAutocomplete<T> = T | (string & Record<never, never>);

declare module "@flotiq/flotiq-api-sdk" {
  export type AnySpaceCTD =
    | InternalMedia
    | InternalTag
    | Author
    | Blogpost
    | Menu
    | Page
    | SectionCompanyInfo
    | SectionHero
    | SectionTestimonials
    | Testimonial;

  export type AnySpaceCTDHydrated =
    | InternalMediaHydrated
    | InternalTagHydrated
    | AuthorHydrated
    | BlogpostHydrated
    | MenuHydrated
    | PageHydrated
    | SectionCompanyInfoHydrated
    | SectionHeroHydrated
    | SectionTestimonialsHydrated
    | TestimonialHydrated;

  export type AnySpaceCTDHydratedTwice =
    | InternalMediaHydratedTwice
    | InternalTagHydratedTwice
    | AuthorHydratedTwice
    | BlogpostHydratedTwice
    | MenuHydratedTwice
    | PageHydratedTwice
    | SectionCompanyInfoHydratedTwice
    | SectionHeroHydratedTwice
    | SectionTestimonialsHydratedTwice
    | TestimonialHydratedTwice;

  // #region author

  export interface AuthorBase extends BaseObject<"author"> {
    name: string;
    avatar?:
      | Array<DataLink>
      | Array<InternalMedia>
      | Array<InternalMediaHydrated>
      | Array<InternalMediaHydratedTwice>;
    bio?: string;
  }

  export interface Author extends AuthorBase {
    avatar?: Array<DataLink>;
  }

  export interface AuthorHydrated extends AuthorBase {
    avatar?: Array<InternalMedia>;
  }

  export interface AuthorHydratedTwice extends AuthorBase {
    avatar?: Array<InternalMediaHydrated>;
  }

  export namespace Author {
    export type FilterableFields = StringWithAutocomplete<
      "name" | "avatar" | "avatar[*].type" | "avatar[*].dataUrl" | "bio"
    >;
  }

  // #endregion

  // #region blogpost

  export interface BlogpostBase extends BaseObject<"blogpost"> {
    title: string;

    /**
     * Slug can only have alphanumerical characters, - and _
     */
    slug: string;
    author?:
      | Array<DataLink>
      | Array<Author>
      | Array<AuthorHydrated>
      | Array<AuthorHydratedTwice>;
    excerpt: string;
    content: any;
    headerImage?:
      | Array<DataLink>
      | Array<InternalMedia>
      | Array<InternalMediaHydrated>
      | Array<InternalMediaHydratedTwice>;
    tags?: Array<"Tech" | "AI" | "Lorem" | "Ipsum">;
    __translations?: Array<Blogpost._translationsBase>;
  }

  export interface Blogpost extends BlogpostBase {
    author?: Array<DataLink>;
    headerImage?: Array<DataLink>;
    __translations?: Array<Blogpost._translations>;
  }

  export interface BlogpostHydrated extends BlogpostBase {
    author?: Array<Author>;
    headerImage?: Array<InternalMedia>;
    __translations?: Array<Blogpost._translationsHydrated>;
  }

  export interface BlogpostHydratedTwice extends BlogpostBase {
    author?: Array<AuthorHydrated>;
    headerImage?: Array<InternalMediaHydrated>;
    __translations?: Array<Blogpost._translationsHydratedTwice>;
  }

  export namespace Blogpost {
    export type FilterableFields = StringWithAutocomplete<
      | "title"
      | "slug"
      | "author"
      | "author[*].type"
      | "author[*].dataUrl"
      | "excerpt"
      | "content"
      | "headerImage"
      | "headerImage[*].type"
      | "headerImage[*].dataUrl"
      | "tags"
      | "__translations"
      | "__translations[*].title"
      | "__translations[*].slug"
      | "__translations[*].author"
      | "__translations[*].author[*].type"
      | "__translations[*].author[*].dataUrl"
      | "__translations[*].excerpt"
      | "__translations[*].content"
      | "__translations[*].headerImage"
      | "__translations[*].headerImage[*].type"
      | "__translations[*].headerImage[*].dataUrl"
      | "__translations[*].tags"
      | "__translations[*].__language"
    >;

    // #region Blogpost.__translations

    export interface _translationsBase {
      title: string;

      /**
       * Slug can only have alphanumerical characters, - and _
       */
      slug: string;
      author?:
        | Array<DataLink>
        | Array<Author>
        | Array<AuthorHydrated>
        | Array<AuthorHydratedTwice>;
      excerpt: string;
      content: any;
      headerImage?:
        | Array<DataLink>
        | Array<InternalMedia>
        | Array<InternalMediaHydrated>
        | Array<InternalMediaHydratedTwice>;
      tags?: Array<"Tech" | "AI" | "Lorem" | "Ipsum">;
      __language: string;
    }

    export interface _translations extends _translationsBase {
      author?: Array<DataLink>;
      headerImage?: Array<DataLink>;
    }

    export interface _translationsHydrated extends _translationsBase {
      author?: Array<Author>;
      headerImage?: Array<InternalMedia>;
    }

    export interface _translationsHydratedTwice extends _translationsBase {
      author?: Array<AuthorHydrated>;
      headerImage?: Array<InternalMediaHydrated>;
    }

    export namespace _translations {
      export type FilterableFields = StringWithAutocomplete<
        | "title"
        | "slug"
        | "author"
        | "author[*].type"
        | "author[*].dataUrl"
        | "excerpt"
        | "content"
        | "headerImage"
        | "headerImage[*].type"
        | "headerImage[*].dataUrl"
        | "tags"
        | "__language"
      >;
    }

    // #endregion
  }

  // #endregion

  // #region menu

  export interface MenuBase extends BaseObject<"menu"> {
    menu?: Array<Menu.MenuBase>;
    __translations?: Array<Menu._translationsBase>;
  }

  export interface Menu extends MenuBase {
    menu?: Array<Menu.Menu>;
    __translations?: Array<Menu._translations>;
  }

  export interface MenuHydrated extends MenuBase {
    menu?: Array<Menu.MenuHydrated>;
    __translations?: Array<Menu._translationsHydrated>;
  }

  export interface MenuHydratedTwice extends MenuBase {
    menu?: Array<Menu.MenuHydratedTwice>;
    __translations?: Array<Menu._translationsHydratedTwice>;
  }

  export namespace Menu {
    export type FilterableFields = StringWithAutocomplete<
      | "menu"
      | "__translations"
      | "menu[*].link_name"
      | "menu[*].link"
      | "menu[*].page"
      | "menu[*].page[*].type"
      | "menu[*].page[*].dataUrl"
      | "menu[*].target"
      | "__translations[*].menu"
      | "__translations[*].__language"
      | "__translations[*].menu[*].link_name"
      | "__translations[*].menu[*].link"
      | "__translations[*].menu[*].page"
      | "__translations[*].menu[*].page[*].type"
      | "__translations[*].menu[*].page[*].dataUrl"
      | "__translations[*].menu[*].target"
    >;

    // #region Menu.menu

    export interface MenuBase {
      link_name?: string;
      link?: string;
      page?:
        | Array<DataLink>
        | Array<Page>
        | Array<PageHydrated>
        | Array<PageHydratedTwice>;
      target?: "" | "_blank";
    }

    export interface Menu extends MenuBase {
      page?: Array<DataLink>;
    }

    export interface MenuHydrated extends MenuBase {
      page?: Array<Page>;
    }

    export interface MenuHydratedTwice extends MenuBase {
      page?: Array<PageHydrated>;
    }

    export namespace Menu {
      export type FilterableFields = StringWithAutocomplete<
        | "link_name"
        | "link"
        | "page"
        | "page[*].type"
        | "page[*].dataUrl"
        | "target"
      >;
    }

    // #endregion

    // #region Menu.__translations

    export interface _translationsBase {
      menu?: Array<_translations.MenuBase>;
      __language: string;
    }

    export interface _translations extends _translationsBase {
      menu?: Array<_translations.Menu>;
    }

    export interface _translationsHydrated extends _translationsBase {
      menu?: Array<_translations.MenuHydrated>;
    }

    export interface _translationsHydratedTwice extends _translationsBase {
      menu?: Array<_translations.MenuHydratedTwice>;
    }

    export namespace _translations {
      export type FilterableFields = StringWithAutocomplete<
        | "menu"
        | "__language"
        | "menu[*].link_name"
        | "menu[*].link"
        | "menu[*].page"
        | "menu[*].page[*].type"
        | "menu[*].page[*].dataUrl"
        | "menu[*].target"
      >;

      // #region Menu.__translations.menu

      export interface MenuBase {
        link_name?: string;
        link?: string;
        page?:
          | Array<DataLink>
          | Array<Page>
          | Array<PageHydrated>
          | Array<PageHydratedTwice>;
        target?: "" | "_blank";
      }

      export interface Menu extends MenuBase {
        page?: Array<DataLink>;
      }

      export interface MenuHydrated extends MenuBase {
        page?: Array<Page>;
      }

      export interface MenuHydratedTwice extends MenuBase {
        page?: Array<PageHydrated>;
      }

      export namespace Menu {
        export type FilterableFields = StringWithAutocomplete<
          | "link_name"
          | "link"
          | "page"
          | "page[*].type"
          | "page[*].dataUrl"
          | "target"
        >;
      }

      // #endregion
    }

    // #endregion
  }

  // #endregion

  // #region page

  export interface PageBase extends BaseObject<"page"> {
    title: string;
    slug: string;
    sections?:
      | Array<DataLink>
      | Array<AnySpaceCTD>
      | Array<AnySpaceCTDHydrated>
      | Array<AnySpaceCTDHydratedTwice>;
    __translations?: Array<Page._translationsBase>;
  }

  export interface Page extends PageBase {
    sections?: Array<DataLink>;
    __translations?: Array<Page._translations>;
  }

  export interface PageHydrated extends PageBase {
    sections?: Array<AnySpaceCTD>;
    __translations?: Array<Page._translationsHydrated>;
  }

  export interface PageHydratedTwice extends PageBase {
    sections?: Array<AnySpaceCTDHydrated>;
    __translations?: Array<Page._translationsHydratedTwice>;
  }

  export namespace Page {
    export type FilterableFields = StringWithAutocomplete<
      | "title"
      | "slug"
      | "sections"
      | "sections[*].type"
      | "sections[*].dataUrl"
      | "__translations"
      | "__translations[*].title"
      | "__translations[*].slug"
      | "__translations[*].sections"
      | "__translations[*].sections[*].type"
      | "__translations[*].sections[*].dataUrl"
      | "__translations[*].__language"
    >;

    // #region Page.__translations

    export interface _translationsBase {
      title: string;
      slug: string;
      sections?:
        | Array<DataLink>
        | Array<AnySpaceCTD>
        | Array<AnySpaceCTDHydrated>
        | Array<AnySpaceCTDHydratedTwice>;
      __language: string;
    }

    export interface _translations extends _translationsBase {
      sections?: Array<DataLink>;
    }

    export interface _translationsHydrated extends _translationsBase {
      sections?: Array<AnySpaceCTD>;
    }

    export interface _translationsHydratedTwice extends _translationsBase {
      sections?: Array<AnySpaceCTDHydrated>;
    }

    export namespace _translations {
      export type FilterableFields = StringWithAutocomplete<
        | "title"
        | "slug"
        | "sections"
        | "sections[*].type"
        | "sections[*].dataUrl"
        | "__language"
      >;
    }

    // #endregion
  }

  // #endregion

  // #region section_company_info

  export interface SectionCompanyInfoBase
    extends BaseObject<"section_company_info"> {
    header: string;
    about_us?: string;
    logo?:
      | Array<DataLink>
      | Array<InternalMedia>
      | Array<InternalMediaHydrated>
      | Array<InternalMediaHydratedTwice>;
    __translations?: Array<SectionCompanyInfo._translationsBase>;
  }

  export interface SectionCompanyInfo extends SectionCompanyInfoBase {
    logo?: Array<DataLink>;
    __translations?: Array<SectionCompanyInfo._translations>;
  }

  export interface SectionCompanyInfoHydrated extends SectionCompanyInfoBase {
    logo?: Array<InternalMedia>;
    __translations?: Array<SectionCompanyInfo._translationsHydrated>;
  }

  export interface SectionCompanyInfoHydratedTwice
    extends SectionCompanyInfoBase {
    logo?: Array<InternalMediaHydrated>;
    __translations?: Array<SectionCompanyInfo._translationsHydratedTwice>;
  }

  export namespace SectionCompanyInfo {
    export type FilterableFields = StringWithAutocomplete<
      | "header"
      | "about_us"
      | "logo"
      | "logo[*].type"
      | "logo[*].dataUrl"
      | "__translations"
      | "__translations[*].header"
      | "__translations[*].about_us"
      | "__translations[*].logo"
      | "__translations[*].logo[*].type"
      | "__translations[*].logo[*].dataUrl"
      | "__translations[*].__language"
    >;

    // #region SectionCompanyInfo.__translations

    export interface _translationsBase {
      header: string;
      about_us?: string;
      logo?:
        | Array<DataLink>
        | Array<InternalMedia>
        | Array<InternalMediaHydrated>
        | Array<InternalMediaHydratedTwice>;
      __language: string;
    }

    export interface _translations extends _translationsBase {
      logo?: Array<DataLink>;
    }

    export interface _translationsHydrated extends _translationsBase {
      logo?: Array<InternalMedia>;
    }

    export interface _translationsHydratedTwice extends _translationsBase {
      logo?: Array<InternalMediaHydrated>;
    }

    export namespace _translations {
      export type FilterableFields = StringWithAutocomplete<
        | "header"
        | "about_us"
        | "logo"
        | "logo[*].type"
        | "logo[*].dataUrl"
        | "__language"
      >;
    }

    // #endregion
  }

  // #endregion

  // #region section_hero

  export interface SectionHeroBase extends BaseObject<"section_hero"> {
    header: string;
    subheader?: string;
    image?:
      | Array<DataLink>
      | Array<InternalMedia>
      | Array<InternalMediaHydrated>
      | Array<InternalMediaHydratedTwice>;
    __translations?: Array<SectionHero._translationsBase>;
  }

  export interface SectionHero extends SectionHeroBase {
    image?: Array<DataLink>;
    __translations?: Array<SectionHero._translations>;
  }

  export interface SectionHeroHydrated extends SectionHeroBase {
    image?: Array<InternalMedia>;
    __translations?: Array<SectionHero._translationsHydrated>;
  }

  export interface SectionHeroHydratedTwice extends SectionHeroBase {
    image?: Array<InternalMediaHydrated>;
    __translations?: Array<SectionHero._translationsHydratedTwice>;
  }

  export namespace SectionHero {
    export type FilterableFields = StringWithAutocomplete<
      | "header"
      | "subheader"
      | "image"
      | "image[*].type"
      | "image[*].dataUrl"
      | "__translations"
      | "__translations[*].header"
      | "__translations[*].subheader"
      | "__translations[*].image"
      | "__translations[*].image[*].type"
      | "__translations[*].image[*].dataUrl"
      | "__translations[*].__language"
    >;

    // #region SectionHero.__translations

    export interface _translationsBase {
      header: string;
      subheader?: string;
      image?:
        | Array<DataLink>
        | Array<InternalMedia>
        | Array<InternalMediaHydrated>
        | Array<InternalMediaHydratedTwice>;
      __language: string;
    }

    export interface _translations extends _translationsBase {
      image?: Array<DataLink>;
    }

    export interface _translationsHydrated extends _translationsBase {
      image?: Array<InternalMedia>;
    }

    export interface _translationsHydratedTwice extends _translationsBase {
      image?: Array<InternalMediaHydrated>;
    }

    export namespace _translations {
      export type FilterableFields = StringWithAutocomplete<
        | "header"
        | "subheader"
        | "image"
        | "image[*].type"
        | "image[*].dataUrl"
        | "__language"
      >;
    }

    // #endregion
  }

  // #endregion

  // #region section_testimonials

  export interface SectionTestimonialsBase
    extends BaseObject<"section_testimonials"> {
    header: string;
    testimonials?:
      | Array<DataLink>
      | Array<AnySpaceCTD>
      | Array<AnySpaceCTDHydrated>
      | Array<AnySpaceCTDHydratedTwice>;
    __translations?: Array<SectionTestimonials._translationsBase>;
  }

  export interface SectionTestimonials extends SectionTestimonialsBase {
    testimonials?: Array<DataLink>;
    __translations?: Array<SectionTestimonials._translations>;
  }

  export interface SectionTestimonialsHydrated extends SectionTestimonialsBase {
    testimonials?: Array<AnySpaceCTD>;
    __translations?: Array<SectionTestimonials._translationsHydrated>;
  }

  export interface SectionTestimonialsHydratedTwice
    extends SectionTestimonialsBase {
    testimonials?: Array<AnySpaceCTDHydrated>;
    __translations?: Array<SectionTestimonials._translationsHydratedTwice>;
  }

  export namespace SectionTestimonials {
    export type FilterableFields = StringWithAutocomplete<
      | "header"
      | "testimonials"
      | "testimonials[*].type"
      | "testimonials[*].dataUrl"
      | "__translations"
      | "__translations[*].header"
      | "__translations[*].testimonials"
      | "__translations[*].testimonials[*].type"
      | "__translations[*].testimonials[*].dataUrl"
      | "__translations[*].__language"
    >;

    // #region SectionTestimonials.__translations

    export interface _translationsBase {
      header: string;
      testimonials?:
        | Array<DataLink>
        | Array<AnySpaceCTD>
        | Array<AnySpaceCTDHydrated>
        | Array<AnySpaceCTDHydratedTwice>;
      __language: string;
    }

    export interface _translations extends _translationsBase {
      testimonials?: Array<DataLink>;
    }

    export interface _translationsHydrated extends _translationsBase {
      testimonials?: Array<AnySpaceCTD>;
    }

    export interface _translationsHydratedTwice extends _translationsBase {
      testimonials?: Array<AnySpaceCTDHydrated>;
    }

    export namespace _translations {
      export type FilterableFields = StringWithAutocomplete<
        | "header"
        | "testimonials"
        | "testimonials[*].type"
        | "testimonials[*].dataUrl"
        | "__language"
      >;
    }

    // #endregion
  }

  // #endregion

  // #region testimonial

  export interface TestimonialBase extends BaseObject<"testimonial"> {
    testimonial: string;
    person: string;
    company?: string;
    position?: string;
    avatar?:
      | Array<DataLink>
      | Array<InternalMedia>
      | Array<InternalMediaHydrated>
      | Array<InternalMediaHydratedTwice>;
    __translations?: Array<Testimonial._translationsBase>;
  }

  export interface Testimonial extends TestimonialBase {
    avatar?: Array<DataLink>;
    __translations?: Array<Testimonial._translations>;
  }

  export interface TestimonialHydrated extends TestimonialBase {
    avatar?: Array<InternalMedia>;
    __translations?: Array<Testimonial._translationsHydrated>;
  }

  export interface TestimonialHydratedTwice extends TestimonialBase {
    avatar?: Array<InternalMediaHydrated>;
    __translations?: Array<Testimonial._translationsHydratedTwice>;
  }

  export namespace Testimonial {
    export type FilterableFields = StringWithAutocomplete<
      | "testimonial"
      | "person"
      | "company"
      | "position"
      | "avatar"
      | "avatar[*].type"
      | "avatar[*].dataUrl"
      | "__translations"
      | "__translations[*].testimonial"
      | "__translations[*].person"
      | "__translations[*].company"
      | "__translations[*].position"
      | "__translations[*].avatar"
      | "__translations[*].avatar[*].type"
      | "__translations[*].avatar[*].dataUrl"
      | "__translations[*].__language"
    >;

    // #region Testimonial.__translations

    export interface _translationsBase {
      testimonial: string;
      person: string;
      company?: string;
      position?: string;
      avatar?:
        | Array<DataLink>
        | Array<InternalMedia>
        | Array<InternalMediaHydrated>
        | Array<InternalMediaHydratedTwice>;
      __language: string;
    }

    export interface _translations extends _translationsBase {
      avatar?: Array<DataLink>;
    }

    export interface _translationsHydrated extends _translationsBase {
      avatar?: Array<InternalMedia>;
    }

    export interface _translationsHydratedTwice extends _translationsBase {
      avatar?: Array<InternalMediaHydrated>;
    }

    export namespace _translations {
      export type FilterableFields = StringWithAutocomplete<
        | "testimonial"
        | "person"
        | "company"
        | "position"
        | "avatar"
        | "avatar[*].type"
        | "avatar[*].dataUrl"
        | "__language"
      >;
    }

    // #endregion
  }

  // #endregion

  export interface FlotiqObjectAPI {
    _media: ApiRequest<
      InternalMedia,
      InternalMediaHydrated,
      InternalMediaHydratedTwice,
      InternalMedia.FilterableFields
    >;

    _tag: ApiRequest<
      InternalTag,
      InternalTagHydrated,
      InternalTagHydratedTwice,
      InternalTag.FilterableFields
    >;

    author: ApiRequest<
      Author,
      AuthorHydrated,
      AuthorHydratedTwice,
      Author.FilterableFields
    >;

    blogpost: ApiRequest<
      Blogpost,
      BlogpostHydrated,
      BlogpostHydratedTwice,
      Blogpost.FilterableFields
    >;

    menu: ApiRequest<
      Menu,
      MenuHydrated,
      MenuHydratedTwice,
      Menu.FilterableFields
    >;

    page: ApiRequest<
      Page,
      PageHydrated,
      PageHydratedTwice,
      Page.FilterableFields
    >;

    section_company_info: ApiRequest<
      SectionCompanyInfo,
      SectionCompanyInfoHydrated,
      SectionCompanyInfoHydratedTwice,
      SectionCompanyInfo.FilterableFields
    >;

    section_hero: ApiRequest<
      SectionHero,
      SectionHeroHydrated,
      SectionHeroHydratedTwice,
      SectionHero.FilterableFields
    >;

    section_testimonials: ApiRequest<
      SectionTestimonials,
      SectionTestimonialsHydrated,
      SectionTestimonialsHydratedTwice,
      SectionTestimonials.FilterableFields
    >;

    testimonial: ApiRequest<
      Testimonial,
      TestimonialHydrated,
      TestimonialHydratedTwice,
      Testimonial.FilterableFields
    >;
  }

  export interface FlotiqSearchAPI {
    query<P extends SearchParams>(
      params?: P,
    ): Promise<
      HydratedSearchResponse<
        P,
        AnySpaceCTD,
        AnySpaceCTDHydrated,
        AnySpaceCTDHydratedTwice
      >
    >;
  }
}
