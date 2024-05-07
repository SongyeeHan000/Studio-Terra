import prisma from "../../../lib/prisma"
import NavBar from "../components/navbar/page"
import Product from "../components/Products"

async function getProducts() {
  try {
    const products = await prisma.pottery.findMany({})
    return products
  } catch (e) {
    console.log("Cannot retrieve all products from Prisma.", e)
  }

}
export default async function AllPotteries() {
  const products = await getProducts()

  return (
    <div className="productsPage">
      <NavBar/>
        <h1>Pottery page</h1>
        <p>All handmade just for you</p>
        <div className="products">
          {products.map((product) => {
            return (
              <Product 
                key={product.id}
                product={product}
              />
            )
          })}
        </div>
    </div>
  )
}

// import prisma from '../../../lib/prisma';

// export const generateStaticParams = async () => {
//   const products = await prisma.pottery.findMany({});
//   // console.log('testing here', products)
//   return {
//     'test': 3,
//     props: {
//       'inner': 3,
//       products
//     },
//     // revalidate: 10,
//   };


// };

// export default async function AllPotteries() {
//   const products = await generateStaticParams()
//   console.log('console.logging', products)

//   return (
//     <div className="productsPage">
//       {/* <NavBar/> */}
//       <h1>Pottery page</h1>
//       <p>All handmade just for you</p>
//       {/* <div className="products">
//           {products.map((product) => {
//             return (
//               <Product 
//                 key={product.id}
//                 product={product}
//               />
//             )
//           })}
//         </div> */}
//     </div>
//   )
// }