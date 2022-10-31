function priceOfProducts(saltBeefPrice, saltBeefRequest, riceRequest) {
	const ricePrice = Math.round(saltBeefPrice / 3 * 100) / 100 * riceRequest;
	const totalSaltBeefPrice = saltBeefPrice * saltBeefRequest;
	const totalProductsPrice = ricePrice + totalSaltBeefPrice;
	return totalProductsPrice;
}

module.exports = priceOfProducts;