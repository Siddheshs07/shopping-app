import { MongoClient } from "mongodb";

export async function connectDataBase() {
  const URL =
    "mongodb+srv://siddeshsalimath3 :3MgPb0J1gvkXXt7C@cluster0.e1zs6p4.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(URL);
  return client;
}
