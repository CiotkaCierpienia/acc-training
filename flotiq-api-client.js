import { FlotiqApi } from "./flotiqApi";

export const flotiqApiClient = new FlotiqApi(process.env.FLOTIQ_API_KEY, {
  middleware: [
    {
      pre: async (requestContext) => {

        const injectedTags = ["flotiq-content"];

        const ctdMatch = requestContext.url.match(
          new RegExp("api/v1/content/(?<ctdName>[^/?]*)")
        );
        if (ctdMatch?.groups?.ctdName) {
          injectedTags.push(`flotiq-content-${ctdMatch.groups.ctdName}`);
        }

        requestContext.init.next = {
          ...requestContext.init.next,
          tags: [...injectedTags, ...(requestContext.init.next?.tags || [])],
          /**
           * Revalidate time in seconds = days * 24 hours * 60 minutes * 60 seconds.
           * Default server-side cache time for all flotiq requests
           */
          revalidate: 1 * 24 * 60 * 60,
        };

        if (process.env.NODE_ENV === "development") {
          requestContext.init.cache = "no-store";
          requestContext.init.next.revalidate = 0;
        }

        return requestContext;
      },
    },
  ],
});
