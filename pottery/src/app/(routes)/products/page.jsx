import NavBar from "../../components/navbar/page"
import ProductCard from "../../components/Products"
import { getProducts } from "../../api/prodcuts/page"

export default async function CoffeeBeansPage() {
  const products = await getProducts()

  return (
    <div className="productsPage">
        <div className="products">
          {products.map((product) => {
            return (
              <ProductCard
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