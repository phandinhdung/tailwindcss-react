import ProductItem from "@components/ProductItem/ProductItem"

function PopularProduct() {
  return (
    <div className="mt-3 grid grid-cols-4 items-center gap-7">
        <ProductItem  firstImage='./src/assets/images/mug1.jpg' secondImage='./src/assets/images/mug2.jpg' />
        <ProductItem  firstImage='./src/assets/images/man1.jpeg' secondImage='./src/assets/images/mug4.jpg' />
        <ProductItem  firstImage='./src/assets/images/mug5.jpg' secondImage='./src/assets/images/story3.jpg' />
        <ProductItem  firstImage='./src/assets/images/mug1.jpg' secondImage='./src/assets/images/mug2.jpg' />
        <ProductItem  firstImage='./src/assets/images/man1.jpeg' secondImage='./src/assets/images/mug4.jpg' />
        <ProductItem  firstImage='./src/assets/images/mug5.jpg' secondImage='./src/assets/images/story3.jpg' />

    </div>
  )
}

export default PopularProduct