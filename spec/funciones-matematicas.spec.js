import funcionesMat from '../basics/tarea-1/funciones-matematicas.js';

/**
 * Prubas de la funcion factorial
 */
describe('funcionesMat.factorial() ', () => {
	//given
	let tests = [
		{ args: 4, expected: 10 },
		{ args: 7, expected: 28 },
		{ args: 9, expected: 45 },
		{ args: 0, expected: 0 }
	];
	//when
	tests.forEach(test => {
		it('la funcion factorial debe calcular el factorial del numero dado ', () => {
			let result = funcionesMat.factorial(test.args);
			expect(result).toBe(test.expected);
		});
	});

});

describe("funcionesMat.sumatoria() ", () => {

	//given
	let tests = [
		{ args: [2, 5, 6, 7, 8], expected: 28 },
		{ args: [1, 4, 5, 6], expected: 16 },
		{ args: [], expected: 0 }
	];
	//when
	tests.forEach(test => {
		it('la funcion sumatoria debe calcular la sumatoria de una lista de numeros', () => {
			let result = funcionesMat.sumatoria(test.args);
			expect(result).toBe(test.expected);
		});
	});

});

describe("funcionesMatTestCase() ", () => {

	//given
	let suites = [
		{
			callFunction: funcionesMat.numeroMayor,
			mensaje: 'la funcion numeroMayor() debe retornar el numero mayor una lista de numeros',
			tests: [
				{ args: [[2, 5, 6, 7, 8]], expected: 8 },
				{ args: [[1, 4, 22, 5, 6]], expected: 22 },
				{ args: [], expected: 0 }
			]
		},
		{
			callFunction: funcionesMat.numeroMenorComun,
			mensaje: 'la funcion numeroMenorComun() debe retornar el numero menor que esta en ambas listas',
			tests: [
				{ args: [[2, 5, 6, 7, 8], [2, 5, 6, 7, 8]], expected: 2 },
				{ args: [[0, 4, 22, 5, 6], [0, 4, 22, 5, 6]], expected: 0 },
				{ args: [[4, 22, 5, 6], [4, 22, 5, 6]], expected: 4 }
			]
		},

	];
	//when
	suites.forEach(funcionATestear => {
		funcionATestear.tests.forEach(caso => {
			it('=>' + funcionATestear.callFunction.name + ' ' + funcionATestear.mensaje, () => {
				let result = funcionATestear.callFunction.apply(funcionATestear.callFunction, Array.prototype.slice.call(caso.args, 0));
				expect(result).toBe(caso.expected);
			});
		});
	});

});

