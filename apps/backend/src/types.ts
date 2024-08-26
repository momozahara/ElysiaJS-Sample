import { Static, t } from "elysia";

export const NinjaTypeQuote = t.Object({
  quote: t.String(),
  author: t.String(),
  category: t.String(),
});

export type SaveData = {
  data: Static<typeof NinjaTypeQuote>[];
  createAt: Date;
};
