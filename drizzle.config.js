/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:Kj1DJ0LkZOeE@ep-wild-mud-a54bwsjy.us-east-2.aws.neon.tech/Car-MarketPlace?sslmode=require',
    }
  };