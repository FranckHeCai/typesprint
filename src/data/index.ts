import type { Quote } from "../types";
import quotes from "./quotes.json"
const formatQuotes = (quotes: Quote[]) => {
  return quotes.map((data) => {
    const onlyText = data.quote.match(/\b[a-zA-Z]+\b/g) || [];
    return onlyText.map((word) => word.toLowerCase());
  })
}

export const animeQuotes = formatQuotes(quotes)