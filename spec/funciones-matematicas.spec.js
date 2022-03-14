import funcionesMat from '../basics/tarea-1/funciones-matematicas.js';

/**
 * Prubas de la funcion factorial
 */
describe('Prueba funcionesMat.factorial: ', () => {
	/**
	 * Factorial correcto
	 */
	it('la funcion factorial debe calcular el factorial del numero dado', () => {
		let result = funcionesMat.factorial(4);
		expect(result).toBe(10);
	});

	/**
	 * numero recibido
	 */
	it('el valor recibido debe ser entero, para otro tipo de valores debe retornar undefined', () => {
		let result = funcionesMat.factorial(4.5);
		expect(result).toBe(undefined);
	});

});

describe("Prueba funcionesMat.sumatoria ", () => {

	it('la funcion sumatoria debe calcular la sumatoria de una lista de numeros', () => {
		let result = funcionesMat.sumatoria([4, 5, 7, 4, 7, 9]);
		expect(result).toBe(36);
	});



})

