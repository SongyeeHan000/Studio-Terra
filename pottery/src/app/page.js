import prisma from "../../lib/prisma"

export default async function Home() {
  const feed = await prisma.pottery.findMany({})

  return (
    <>
      {feed.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </>
  )
}
