function priceOfProducts(saltBeefPrice, saltBeefRequest, riceRequest) {
	return Math.round((((Math.round(saltBeefPrice / 3 * 100) / 100) * riceRequest) + (saltBeefPrice * saltBeefRequest)) * 100) / 100;
}

module.exports = priceOfProducts;