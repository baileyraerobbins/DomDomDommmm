document.addEventListener("DOMContentLoaded", button);
function button() {

    //Add button labeled "Add Square" 
    let addSquareBtn = document.createElement("button");
    let btnText = document.createTextNode("Add Square");

    //Attach text to button
    addSquareBtn.appendChild(btnText);

    //Attach button to body
    document.body.appendChild(addSquareBtn);

    //Add container to enable flexbox styling, attach to body, give class name "container"
    let container = document.createElement("div");
    document.body.appendChild(container);
    container.className = "container";

    //Add id counter
    let id = 0

    //Add squares (divs) with button click
    addSquareBtn.addEventListener("click", btnClick);
    function btnClick() {

        //Add square div, attach to body, give class name "square"
        let div = document.createElement("div");
        document.body.appendChild(div);
        container.appendChild(div);
        div.className = "square";

        //Add square text based on id
        let p = document.createElement("p");
        let squareText = document.createTextNode(id);

        //Attach text to div
        div.appendChild(p);
        p.appendChild(squareText);

        //Have text appear on hover
        div.addEventListener("mouseenter", hover);
        function hover() {
            p.style.opacity = "1";
        }

        //Have text disappear after house leaves
        div.addEventListener("mouseleave", noHover);
        function noHover() {
            p.style.opacity = "0";
        }

        //Attach id to div, increment by 1
        div.id = id;
        id++;

        //Change color on square click
        div.addEventListener("click", squareClick);
        function squareClick() {

            let colors = [
                "darkslateblue",
                "aquamarine",
                "mediumvioletred",
                "palevioletred",
                "mediumslateblue",
                "palegreen",
                "darkmagenta"
            ];

            let random = Math.floor(Math.random() * colors.length);
            return div.style.backgroundColor = colors[random];
        }

        //Remove squares with double click based on whether the id is EVEN or ODD
        div.addEventListener("dblclick", squareDblClick);
        //Check if it's even or odd
        function squareDblClick() {
            if (div.id % 2 === 0) {
                //Add square id + 1 to remove number AFTER
                let squareNum = parseInt(div.id) + 1;
                let square = document.getElementById(squareNum)
                if (square == null) {
                    //If there is no square after even square, display an alert
                    alert("Sorry, the sequential ODD number that follows this EVEN number, no longer exists. Therefore, it cannot be removed.");
                } else {
                    //When EVEN square is double clicked, the square AFTER should be removed
                    square.parentNode.removeChild(square);
                }
                //If odd, the square BEFORE the clicked square should be removed
            } else {
                 //Add square id - 1 to remove number BEFORE
                let squareNum = parseInt(div.id) - 1;
                let square = document.getElementById(squareNum)
                if (square == null) {
                    //If no square, display before the clicked square alert
                    alert("Sorry, the sequential EVEN number that comes before this ODD number, no longer exists. Therefore, it cannot be removed.");
                } else {
                    //When ODD square is double clicked, the square BEFORE should be removed
                    square.parentNode.removeChild(square);
                }
            }
        }
    }
}


