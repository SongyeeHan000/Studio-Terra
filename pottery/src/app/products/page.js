import prisma from "../../../lib/prisma"
// import NavBar from "../navbar/page"

export default async function AllPotteries() {
  const feed = await prisma.pottery.findMany({})


  return (
    <div>
      {/* <NavBar/> */}
        <h1>Pottery page</h1>
        <>
          {feed.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
            </div>
          ))}
        </>
    </div>
  )
}
