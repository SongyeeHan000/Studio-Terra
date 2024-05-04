
export default function SingleProduct ({params}) {
  
    return (
        <div>
            <h1>Single Post</h1>
            <p>{params.productId}</p>
        </div>
    )
}