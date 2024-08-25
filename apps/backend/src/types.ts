import { t } from "elysia";

// API Ninja Types

export const NinjaResponseTypeQuote = t.Object({
  quote: t.String(),
  author: t.String(),
  category: t.String(),
});

// My Types

export const ResponseTypeQuote = t.Object({
  quote: t.String(),
  author: t.String(),
  category: t.String(),
});
