import Link from "next/link"

export default function Produto({ params: { id } }) {
  return (
    <div>
      <h1>Produto</h1>
      <h2>{id}</h2>
      <Link href="/">Home</Link>
    </div>
  )
}
