/// Base class for all objects in the game
class GameObject {
    constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.id = id;
	}
    
    /// Check whether this [[GameObject]] overlaps with another [[GameObject]]
    /// Returns true if the objects collide, or false if not
    collides = (other) => {
      /* assume this is implemented */
    }
  }
  
  /// Compares each [[GameObject]] in the list to all of the other [[GameObjects]] in the list
  /// Returns a List of [[GameObject]] pairs that overlap
  collisions = (objectList) => {
    	let collisionArray = [];
		for (let i = 0; i < objectList.length; i++) {
			for (let k = i + 1; k < objectList.length; k++) {
				if (objectList[i].collides(objectList[k])) {
					newArray.push([objectList[i], objectList[k]]);
				}
			}
		}
		return collisionArray;
  }
  
  // Example of how this would be used:
  const allObjects = [ A, B, C, D, E ];
  
  const collidingObjects = collisions(allObjects); // => [ [ A, B ], [ A, E ], [ C, D ] ]
  
  collidingObjects.forEach(([first, second]) => /* do something with this colliding pair */);