import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Time to get started!</h1>

      <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Link href="/meals">Goto Meals Page</Link>
      </h1>

      <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Link href="/community">Goto Community Page</Link>
      </h1>
    </main>
  );
}
