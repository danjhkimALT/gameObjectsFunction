/// Base class for all objects in the game
class GameObject {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	/// Check whether this [[GameObject]] overlaps with another [[GameObject]]
	/// Returns true if the objects collide, or false if not
	collides = object2 => {};

	/// Compares each [[GameObject]] in the list to all of the other [[GameObjects]] in the list
	/// Returns a List of [[GameObject]] pairs that overlap
	collisions = objectList => {
		let collisionArray = [];
		for (let i = 0; i < objectList.length; i++) {
			for (let k = i + 1; k < objectList.length; k++) {
				if (objectList[i].collides(objectList[k])) {
					collisionArray.push([objectList[i], objectList[k]]);
				}
			}
		}
		return collisionArray;
	};
}

// Example of how this would be used:
//   const allObjects = [ A, B, C, D, E ];

//   const collidingObjects = collisions(allObjects); // => [ [ A, B ], [ A, E ], [ C, D ] ]

//   collidingObjects.forEach(([first, second]) => /* do something with this colliding pair */);

const elf1 = new GameObject(1, 1, 50, 50);
const elf2 = new GameObject(1, 2, 40, 40);
const elf3 = new GameObject(3, 3, 30, 40); //duplicate
const elf4 = new GameObject(1, 6, 23, 10);
const elf5 = new GameObject(3, 3, 23, 20); //duplicate
const elf6 = new GameObject(3, 3, 10, 20); //duplicate
const elf7 = new GameObject(7, 7, 50, 43);
const elf8 = new GameObject(7, 8, 30, 50);

const allObjects = [elf1, elf2, elf3, elf4, elf5, elf6, elf7, elf8];

let collidingObjects = elf6.collisions(allObjects);

console.log(collidingObjects);
