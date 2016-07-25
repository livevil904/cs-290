function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

Automobile.prototype.logMe = function(b){
	var log = this.year;
	log += " ";
	log += this.make;
	log += " ";
	log += this.model;
	if (b == true)
	{
		log += " ";
		log += this.type;
	}
	console.log(log);
}



var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];
//automobiles[1].logMe(1);
/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
	var sorted = [];
	var i = 0;
	//var j;
	var best;
	var arrayCopy = array.slice();

	
	while(arrayCopy.length > 0)
	{
		best = 0;
		for (i = 1; i < arrayCopy.length; i++)
		{
			//console.log("comparing " + arrayCopy[best].year + " and " + arrayCopy[i].year);
			if (comparator(arrayCopy[i],arrayCopy[best]) == true)
			{
				best = i;				
			}
		}
		sorted.push(arrayCopy[best]);
		arrayCopy.splice(best,1);
		/*for (j = 0; j < arrayCopy.length; j++)
			{ console.log(arrayCopy[j].year) }
		console.log();
		for (j = 0; j < sorted.length; j++)
			{ console.log(sorted[j].year) }
		console.log();*/
		
	}
	return sorted
}
// newar = sortArr(yearComparator, automobiles);
// console.log(newar[0].year);
// console.log(newar[1].year);
// console.log(newar[2].year);
// console.log(newar[3].year);
// console.log(newar[4].year);
// console.log(newar[5].year);

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    if (auto1.year > auto2.year){
        return true;
    } else {
        return false;
    }
}
//console.log(yearComparator(automobiles[1],automobiles[2]));

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    if (auto1.make < auto2.make) {
		return true;
	} else {
		return false;
	}
}
//console.log(makeComparator(automobiles[5],automobiles[2]));

function modelComparator( auto1, auto2){
    if (auto1.model < auto2.model) {
		return true;
	} else {
		return false;
	}
}
// console.log(modelComparator(automobiles[5],automobiles[0]));
// console.log(modelComparator(automobiles[5],automobiles[1]));
// console.log(modelComparator(automobiles[5],automobiles[2]));
// console.log(modelComparator(automobiles[5],automobiles[3]));
// console.log(modelComparator(automobiles[5],automobiles[4]));


/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
	var x, y;

	if (auto1.type.toLowerCase() == "roadster")
	{
		x = 1;
	}
	else if (auto1.type.toLowerCase() == "pickup")
	{
		x = 2;
	}
	else if (auto1.type.toLowerCase() == "suv")
	{
		x = 3;
	}	
	else if (auto1.type.toLowerCase() == "wagon")
	{
		x = 4;
	}
	else
	{
		x = 5;
	}
	
	if (auto2.type.toLowerCase() == "roadster")
	{
		y = 1;
	}
	else if (auto2.type.toLowerCase() == "pickup")
	{
		y = 2;
	}
	else if (auto2.type.toLowerCase() == "suv")
	{
		y = 3;
	}	
	else if (auto2.type.toLowerCase() == "wagon")
	{
		y = 4;
	}
	else
	{
		y = 5;
	}

	
	
	if (x < y)
	{
		return true;
	}
	else if (x == y)
	{
		if (auto1.year > auto2.year)
		{
			return true;
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

//console.log(typeComparator(automobiles[3],automobiles[1]));

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */

var sortedArray
console.log("*****");
console.log("The cars sorted by year are:");
sortedArray = sortArr(yearComparator, automobiles);
for (i = 0; i < sortedArray.length; i++)
{
	sortedArray[i].logMe(0);
}
console.log();
console.log("The cars sorted by make are:");
sortedArray = sortArr(makeComparator, automobiles);
for (i = 0; i < sortedArray.length; i++)
{
	sortedArray[i].logMe(0);
}
console.log();
console.log("The cars sorted by model are:");
sortedArray = sortArr(modelComparator, automobiles);
for (i = 0; i < sortedArray.length; i++)
{
	sortedArray[i].logMe(0);
}
console.log();
console.log("The cars sorted by type are:");
sortedArray = sortArr(typeComparator, automobiles);
for (i = 0; i < sortedArray.length; i++)
{
	sortedArray[i].logMe(1);
}
console.log("*****")


