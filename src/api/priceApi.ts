import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../utils/url";

interface ResponseData {
  id: string;
  current_price: number;
}

export const priceApi = createApi({
  reducerPath: "priceApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getPriceInfo: builder.query<ResponseData[], string>({
      query: () => ({ url: '' }),
    }),
  }),
});

export const { useLazyGetPriceInfoQuery } = priceApi;
