// Generated by ts-to-zod
import { z } from 'zod';

export const crawlResponseSchema = z.object({
  success: z.boolean().optional(),
  id: z.string().optional(),
  url: z.string().optional(),
});

export const crawlStatusResponseObjSchema = z.object({
  markdown: z.string().optional().nullable(),
  html: z.string().optional().nullable(),
  rawHtml: z.string().optional().nullable(),
  links: z.array(z.string()).optional().nullable(),
  screenshot: z.string().optional().nullable(),
  metadata: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      language: z.string().optional().nullable(),
      sourceURL: z.string().optional(),
      '<any other metadata> ': z.string().optional(),
      statusCode: z.number().optional(),
      error: z.string().optional().nullable(),
    })
    .optional(),
});

export const scrapeResponseSchema = z.object({
  success: z.boolean().optional(),
  warning: z.string().optional().nullable(),
  data: z
    .object({
      markdown: z.string().optional().nullable(),
      html: z.string().optional().nullable(),
      rawHtml: z.string().optional().nullable(),
      links: z.array(z.string()).optional().nullable(),
      screenshot: z.string().optional().nullable(),
      metadata: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          language: z.string().optional().nullable(),
          sourceURL: z.string().optional(),
          '<any other metadata> ': z.string().optional(),
          statusCode: z.number().optional(),
          error: z.string().optional().nullable(),
        })
        .optional(),
    })
    .optional(),
});

export const searchResponseSchema = z.object({
  success: z.boolean().optional(),
  data: z.array(z.unknown()).optional(),
});

export const scrapeDataSchema = z.object({
  body: z.object({
    url: z.string(),
    formats: z
      .array(
        z.union([
          z.literal('markdown'),
          z.literal('html'),
          z.literal('rawHtml'),
          z.literal('links'),
          z.literal('screenshot'),
          z.literal('screenshot@fullPage'),
        ]),
      )
      .optional(),
    headers: z.record(z.unknown()).optional(),
    includeTags: z.array(z.string()).optional(),
    excludeTags: z.array(z.string()).optional(),
    onlyMainContent: z.boolean().optional(),
    timeout: z.number().optional(),
    waitFor: z.number().optional(),
  }),
});

export const scrapeResponse2Schema = scrapeResponseSchema;

export const scrapeErrorSchema = z.object({
  error: z.string().optional(),
});

export const crawlUrlsDataSchema = z.object({
  body: z.object({
    url: z.string(),
    crawlerOptions: z
      .object({
        includes: z.array(z.string()).optional(),
        excludes: z.array(z.string()).optional(),
        generateImgAltText: z.boolean().optional(),
        returnOnlyUrls: z.boolean().optional(),
        maxDepth: z.number().optional(),
        mode: z.union([z.literal('default'), z.literal('fast')]).optional(),
        ignoreSitemap: z.boolean().optional(),
        limit: z.number().optional(),
        allowBackwardCrawling: z.boolean().optional(),
        allowExternalContentLinks: z.boolean().optional(),
      })
      .optional(),
    pageOptions: z
      .object({
        headers: z.record(z.unknown()).optional(),
        includeHtml: z.boolean().optional(),
        includeRawHtml: z.boolean().optional(),
        onlyIncludeTags: z.array(z.string()).optional(),
        onlyMainContent: z.boolean().optional(),
        removeTags: z.array(z.string()).optional(),
        replaceAllPathsWithAbsolutePaths: z.boolean().optional(),
        screenshot: z.boolean().optional(),
        fullPageScreenshot: z.boolean().optional(),
        waitFor: z.number().optional(),
      })
      .optional(),
  }),
});

export const crawlUrlsResponseSchema = crawlResponseSchema;

export const crawlUrlsErrorSchema = z.object({
  error: z.string().optional(),
});

export const searchGoogleDataSchema = z.object({
  body: z.object({
    query: z.string(),
    pageOptions: z
      .object({
        onlyMainContent: z.boolean().optional(),
        fetchPageContent: z.boolean().optional(),
        includeHtml: z.boolean().optional(),
        includeRawHtml: z.boolean().optional(),
      })
      .optional(),
    searchOptions: z
      .object({
        limit: z.number().optional(),
      })
      .optional(),
  }),
});

export const searchGoogleResponseSchema = searchResponseSchema;

export const searchGoogleErrorSchema = z.object({
  error: z.string().optional(),
});

export const getCrawlStatusDataSchema = z.object({
  path: z.object({
    jobId: z.string(),
  }),
});

export const getCrawlStatusResponseSchema = z.object({
  status: z.string().optional(),
  current: z.number().optional(),
  total: z.number().optional(),
  data: z.array(crawlStatusResponseObjSchema).optional(),
  partial_data: z.array(crawlStatusResponseObjSchema).optional(),
});

export const getCrawlStatusErrorSchema = z.object({
  error: z.string().optional(),
});

export const cancelCrawlJobDataSchema = z.object({
  path: z.object({
    jobId: z.string(),
  }),
});

export const cancelCrawlJobResponseSchema = z.object({
  status: z.string().optional(),
});

export const cancelCrawlJobErrorSchema = z.object({
  error: z.string().optional(),
});