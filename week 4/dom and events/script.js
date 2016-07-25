var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var rowIndex = 1;
var colIndex = 1;
var row, cell, i, j



for (i = 0; i < 5; i++) 
{
	row = document.createElement("tr");
 
    for (j = 1; j < 5; j++) 
	{
		if (i==0)
		{
			cell = document.createElement("th");
			cell.textContent = "Header " + j;
		}
		else
		{
			cell = document.createElement("td");
			cell.textContent = i + ", " + j;
		}
		cell.id = i + ", " + j;
		cell.style.border = "thin solid black";
		row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    table.appendChild(row);
}
body.appendChild(table);

var leftButton, rightButton, upButton, downButton, markButton;
leftButton = document.createElement("button");
rightButton = document.createElement("button");
upButton = document.createElement("button");
downButton = document.createElement("button");
markButton = document.createElement("button");
leftButton.textContent = "left";
rightButton.textContent = "right";
upButton.textContent = "up";
downButton.textContent = "down";
markButton.textContent = "Mark Cell";

leftButton.id = "leftButton";
rightButton.id = "rightButton";
upButton.id = "upButton";
downButton.id = "downButton";
markButton.id = "markButton";

body.appendChild(leftButton);
body.appendChild(rightButton);
body.appendChild(upButton);
body.appendChild(downButton);
body.appendChild(markButton);


var currentCell = document.getElementById("1, 1");
currentCell.style.border = "medium solid black";

function left()
{
	if (colIndex == 1)
	{
		return;
	}
	else
	{
		currentCell.style.border = "thin solid black";
		colIndex--;
		currentCell = document.getElementById(rowIndex + ", " + colIndex);
		currentCell.style.border = "medium solid black";
	}
}
function right()
{
	if (colIndex == 4)
	{
		return;
	}
	else
	{
		currentCell.style.border = "thin solid black";
		colIndex++;
		currentCell = document.getElementById(rowIndex + ", " + colIndex);
		currentCell.style.border = "medium solid black";
	}
}
function up()
{
	if (rowIndex == 1)
	{
		return;
	}
	else
	{
		currentCell.style.border = "thin solid black";
		rowIndex--;
		currentCell = document.getElementById(rowIndex + ", " + colIndex);
		currentCell.style.border = "medium solid black";
	}
}
function down()
{
	if (rowIndex == 4)
	{
		return;
	}
	else
	{
		currentCell.style.border = "thin solid black";
		rowIndex++;
		currentCell = document.getElementById(rowIndex + ", " + colIndex);
		currentCell.style.border = "medium solid black";
	}
}
function mark()
{
	currentCell.style.background = "yellow";
}
	

document.getElementById("leftButton").addEventListener("click", left);
document.getElementById("rightButton").addEventListener("click", right);
document.getElementById("upButton").addEventListener("click", up);
document.getElementById("downButton").addEventListener("click", down);
document.getElementById("markButton").addEventListener("click", mark);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
