import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME ?? "marina_muse";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }
  return new MongoClient(uri).connect();
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

export async function pingDatabase(): Promise<{ ok: boolean; message: string }> {
  if (!uri) {
    return { ok: false, message: "MONGODB_URI is not configured" };
  }
  try {
    const db = await getDb();
    await db.command({ ping: 1 });
    return { ok: true, message: `Connected to ${dbName}` };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Connection failed";
    return { ok: false, message };
  }
}
