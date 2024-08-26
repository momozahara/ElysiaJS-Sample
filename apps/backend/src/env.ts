import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

const envSchema = Type.Object({
  NODE_ENV: Type.Union(
    [Type.Literal("development"), Type.Literal("production")],
    {
      default: "development",
    },
  ),
  NINJAS_API_KEY: Type.String(),
  PORT: Type.Number({
    default: 8888,
  }),
  CACHE_TTL: Type.Number({
    default: 1,
  }),
});

const env = Value.Parse(envSchema, process.env);

export default env;
