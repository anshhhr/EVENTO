export default async function ProductDetails({
  params,
}: {
  params: promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Detail about the product {productId}</h1>;
}
