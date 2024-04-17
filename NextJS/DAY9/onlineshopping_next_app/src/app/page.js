import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import Link from "next/link";
export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main>
      <h2>Protected Resource !</h2>

      {/* {session.user.email ? <h5>Email : {session.user.email}</h5> : null} */}
    </main>
  );
}
