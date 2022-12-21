/// Base class for all objects in the game
class GameObject {
	constructor(x, y, w, h, id) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.id = id;
	}

	/// Check whether this [[GameObject]] overlaps with another [[GameObject]]
	/// Returns true if the objects collide, or false if not
	collides = object2 => {
		if (this.x === object2.x && this.y === object2.y) {
			return true;
		} else {
			return false;
		}
	};

	/// Compares each [[GameObject]] in the list to all of the other [[GameObjects]] in the list
	/// Returns a List of [[GameObject]] pairs that overlap
	collisions = objectList => {
		// let newArray = [];
		// for (let i = 0; i < objectList.length; i++) {
		// 	for (let k = i + 1; k < objectList.length; k++) {
		// 		if (objectList[i].collides(objectList[k])) {
		// 			newArray.push([objectList[i], objectList[k]]);
		// 		}
		// 	}
		// }
		// return newArray;
		let newArray = [];
		let toMap = {};

		for (let i = 0; i < objectList.length; i++) {
			if (!toMap[objectList[i].id]) {
				toMap[objectList[i].id] = objectList[i];
			}
		}

		for (let i = 0; i < objectList.length; i++) {
			if (objectList[i].collides(toMap[objectList[i].id])) {
				newArray.push([toMap[objectList[i].id], objectList[i]]);
			}
		}

		console.log(newArray);
	};
}

// Example of how this would be used:
//   const allObjects = [ A, B, C, D, E ];

const elf1 = new GameObject(1, 1, 50, 50, 1);
const elf2 = new GameObject(1, 2, 40, 40, 2);
const elf3 = new GameObject(3, 3, 30, 40, 3);
const elf4 = new GameObject(1, 6, 23, 10, 4);
const elf5 = new GameObject(3, 3, 23, 20, 5);
const elf6 = new GameObject(3, 3, 10, 20, 6);
const elf7 = new GameObject(7, 7, 50, 43, 7);
const elf8 = new GameObject(7, 8, 30, 50, 8);
const allObjects = [elf1, elf2, elf3, elf4, elf5, elf6, elf7, elf8];

let collidingObjects = elf6.collisions(allObjects);
// test.collisions(); // => [ [ A, B ], [ A, E ], [ C, D ] ]

console.log(collidingObjects);

// collidingObjects.forEach(([first, second]) => {
// console.log([first, second]);
// });
