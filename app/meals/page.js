import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Meals Page</h1>
      <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Link href="/meals/share">Goto Share Page</Link>
      </h1>
    </>
  );
}
