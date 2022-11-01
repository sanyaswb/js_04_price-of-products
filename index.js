function priceOfProducts(saltBeefPrice, saltBeefRequest, riceRequest) {
	return ((Math.round(saltBeefPrice / 3 * 100) / 100) * riceRequest) + (saltBeefPrice * saltBeefRequest);
}

module.exports = priceOfProducts;