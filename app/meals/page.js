import Link from 'next/link';

export default function MealsPage() {
  return (
    <>
      <h1>Meals Page</h1>
      <h1>
        <Link href="/meals/share">Goto Share Page</Link>
      </h1>
    </>
  );
}
