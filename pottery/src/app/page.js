// import Image from "next/image";

export default function Home() {
  return (
    <main >
      <h1>home</h1>
      
    </main>
  );
}


// export const getStaticProps: GetStaticProps = async () => {
//     const feed = await prisma.post.findMany({
//       where: { published: true },
//       include: {
//         author: {
//           select: { name: true },
//         },
//       },
//     });
//     return {
//       props: { feed },
//       revalidate: 10,
//     };
//   };
// export async function getStaticProps() {
//     const feed = await prisma.pottery.findMany();
//     return {
//       props: { feed },
//       revalidate: 3,
//     };
//   }

