import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MongoClient } from "mongodb";

export default component$(() => {

  async function main() {
    const uri = `mongodb+srv://stanlee77:${process.env.DB_PASSWORD}@cluster0.badzthl.mongodb.net/`;
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const database = client.db('test');
      console.log('database', database)
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }

  main().catch(console.error);
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Worklogs assistant",
  meta: [
    {
      name: "description",
      content: "todo",
    },
  ],
};
