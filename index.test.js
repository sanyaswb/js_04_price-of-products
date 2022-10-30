const priceOfProducts = require('./index');

test('Функция должна вернуть число', () => {
	const type = typeof priceOfProducts(180, 1, 1);

	expect(type).toBe('number');
});

test('Тест. saltBeefPrice: 180, saltBeefRequest: 1, riceRequest: 1', () => {
	const res = priceOfProducts(180, 1, 1);

	expect(res).toBe(240);
});

test('Тест. saltBeefPrice: 280, saltBeefRequest: 6, riceRequest: 7', () => {
	const res = priceOfProducts(280, 6, 7);

	expect(res).toBe(2333.31);
});

test('Тест. saltBeefPrice: 71, saltBeefRequest: 4, riceRequest: 8', () => {
	const res = priceOfProducts(71, 4, 8);

	expect(res).toBe(473.36);
});

test('Тест. saltBeefPrice: 180, saltBeefRequest: 1, riceRequest: 1', () => {
	const res = priceOfProducts(60, 3, 2);

	expect(res).toBe(220);
});