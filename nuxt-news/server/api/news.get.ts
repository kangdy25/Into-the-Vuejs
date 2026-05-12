import { FetchError } from "ofetch";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);

  const NEWS_API_KEY = config.NEWS_API_KEY;
  const NEWS_API_URL = config.NEWS_API_URL;

  try {
    const data = await $fetch(NEWS_API_URL, {
      params: {
        q: query.q || "korea",
        from: "2026-05-05",
        sortBy: "popularity",
        apiKey: NEWS_API_KEY,
      },
    });
    return data;
  } catch (error: unknown) {
    const fetchError = error as FetchError;
    console.error("News API Error:", fetchError.response?._data);

    throw createError({
      statusCode: fetchError.response?.status || 500,
      statusMessage:
        fetchError.response?._data?.message ||
        "Failed to fetch news from provider",
    });
  }
});
