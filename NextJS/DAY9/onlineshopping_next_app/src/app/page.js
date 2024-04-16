import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "./auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main>
      <h2>Protected Resource !</h2>
    </main>
  );
}
