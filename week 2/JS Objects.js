function deepCompare(x, y) {
	if (typeof(x) != "object" && typeof(y) != "object")
	{
		return x==y;
	}	
	else
	{	
		var i = 0;
		var j = 0;
		for (p in x) 
		{
			i++;
			if (typeof(x[p]) == "object" && x[p] != null) 
			{
				if (typeof(y[p]) == "object" && y[p] != null) 
				{
					if (deepCompare(x[p], y[p]) == true)
					{
						continue;
					}
					else
					{
						return false;
					}
				}
				else 
				{
					return false;
				}
			}
			else 
			{
				if (typeof(y[p]) == "object" && y[p] != null)
				{
					return false;
				}
				if (x[p] == y[p])
				{
					continue;
				}
				else
				{
					return false;
				}
			}
		}
		for (p in y)
		{
			j++;
		}
		if (i==j)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

var obj1 = { prop1: "blah", prop2: 3 }
var obj2 = { prop1: "blah", prop2: 3 }
var obj3 = { prop1: "blah", prop2: 3, prop3: 4 }
var obj4 = { prop1: "blah", prop2: 5, prop3: 4 }
var obj5 = { prop1: "blah2", prop2: obj1 }
var obj6 = { prop1: "blah2", prop2: obj2 }
var obj7 = { prop1: "blah2", prop2: obj3 }


console.log(deepCompare(1,2)); 			//false
console.log(deepCompare(obj1,obj2)); 	//true
console.log(deepCompare(obj1,obj3));	//false
console.log(deepCompare(obj3,obj4));	//false
console.log(deepCompare(obj3,obj2));	//false
console.log(deepCompare(obj5,obj6));	//true
console.log(deepCompare(obj7,obj6));	//false




