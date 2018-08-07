/* 
Стрелочные функции
{
	const orig = function() {
		return 100;
	};

	console.log(orig())

	const arrow = (num) => {
		return 150 + num;
	}
	console.log(arrow(50))

	const arrow2 = (num) => 150 + num;
	const arrow3 = num => 150 + num;

	старый способо:
	const obj = {
		name: 'WFM',
		logName: function() {
			var that = this
			setTimeout(function() {
				console.log('name: ' + that.name)
			}, 1000)
		}
	}
	obj.logName()

	через стрелки

	const obj = {
		name: 'WFM',
		logName: function() {
			setTimeout(() => {
				console.log('name: ' + this.name)
			}, 1000)
		}
	}
	obj.logName() 
}
Параметры по умолчанию
{
	const c = 90;

	const c2 = () => 200;

	const func = (a = 20, b = a + c2()) => {

		return a + b;
	}

	console.log(func(30))
}

*/