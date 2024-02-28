import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default function Page() {
  async function handleAddBook(formData) {
    "use server";

    const title = formData.get("title");
    const author = formData.get("author");
    const description = formData.get("description");

    await sql`INSERT INTO books (title, author, description)
    VALUES (${title}, ${author}, ${description})`;

    revalidatePath("/books");
    redirect("/books");
  }
  return (
    <div>
      <form>
        <label>Name</label>
        <input name="title" placeholder="Name" />
        <input name="author" placeholder="Authot" />
        <input name="description" placeholder="Description" />
      </form>
    </div>
  );
}
