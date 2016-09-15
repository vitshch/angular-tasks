interface Figure {
	perimeter(): number;
	square(): number;
}

class Circle implements Figure {
	private radius: number = 0;

	constructor(r: number) {
		this.radius = r;
	}

	perimeter(): number {
		return 2 * Math.PI * this.radius;
	}

	square(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
}

class Triangle implements Figure {
	private a: number;
	private b: number;
	private c: number;

	constructor(a: number, b: number, c: number) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	perimeter():number {
		return this.a + this.b + this.c;
	}

	square(): number {
		var pp = (this.a + this.b + this.c) / 2;
		return Math.sqrt(pp*(pp-this.a)*(pp - this.b) * (pp - this.c));
	}
}

class Square implements Figure {
	private a: number;

	constructor(a: number) {
		this.a = a;
	}

	perimeter() :number {
		return 4 * this.a;
	}

	square(): number {
		return Math.pow(this.a, 2);
	}
}

var c = new Circle(11);
console.log("Circle perimeter: " + c.perimeter());
console.log("Circle square: " + c.square());

var t = new Triangle(2, 4, 3);
console.log("Triangle perimeter: " + t.perimeter());
console.log("Triangle square: " + t.square());

var figures: Figure[];
figures.push(new Circle(10));
figures.push(new Circle(14));
figures.push(new Circle(23));
figures.push(new Triangle(4,3,4));
figures.push(new Triangle(3,3,3));
figures.push(new Triangle(5,6,7));
figures.push(new Square(33));
figures.push(new Square(142));
figures.push(new Square(18));

for (var i in figures) {
	figures[i].perimeter();
	figures[i].square();
}