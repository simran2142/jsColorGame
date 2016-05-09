(function() {
    //alert('Connected');

    var _qAll = function _qAll(x) {
        return document.querySelectorAll(x);
    };
    var _q = function _q(x) {
        return document.querySelector(x);
    };

    var colors = [
        'rgb(255, 0, 0)',
        'rgb(255, 0, 255)',
        'rgb(0, 255, 255)',
        'rgb(0, 0, 255)',
        'rgb(0, 255, 0)',
        'rgb(255, 255, 0)'
    ];

    var squares = _qAll('.square'),
        pickedColor = colors[3],
        //console.log(pickedColor);
        colorDisplay = _q('#colorDisplay');

    colorDisplay.textContent = pickedColor;

    //console.log(squares);

    for (var i = 0; i < squares.length; i++) {

        // assigning colors to every squares
        squares[i].style.background = colors[i];
        // attach click events to every squares
        squares[i].addEventListener('click', function() {
            console.log(this);
            var clickedColor = this.style.background;
            //console.log(clickedColor);	

            // compare the color
            //(clickedColor === pickedColor) ? console.log('Correct Guess') : console.log('Wrong Guess');
            if (clickedColor === pickedColor) {
                console.log('Correct Guess');
            } else {
                console.log('Wrong Guess');
            }
        });
    }

})();




















/*(function() {

	var randomColor = function randomColor() {
        // pick a "red" from 0 - 255
        var r = Math.floor(Math.random() * 256);
        // pick a "green" from 0 - 255
        var g = Math.floor(Math.random() * 256);
        // pick a "blue" from 0- 255
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    };

    var changeColors = function changeColors(color) {
        for (var i = 0; i < colors.length; i++) {
            squares[i].style.background = color;
        }
    };

    var pickColor = function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    };

    var generateRandomColors = function generateRandomColors(num) {
        // make an array
        var arr = []
            // repeat num times
        for (var i = 0; i < num; i++) {
            arr.push(randomColor());
            // get random color and push into array

        }
        // return that array
        return arr;
    };
    // this function will return the id selector
    var _id = function _id(id) {
    	return document.querySelector(id);
    };

    var numSquares = 6,
        colors = generateRandomColors(numSquares),
        squares = document.querySelectorAll(".square"),
        pickedColor = pickColor(),
        colorDisplay = _id("#colordisplay"),
        messageDisplay = _id("#message"),
        h1 = _id("h1"),
        resetButton = _id("#reset"),
        easyBtn = _id("#easyBtn"),
        hardBtn = _id("#hardBtn");

    easyBtn.onclick = function onclick() {
        var numSquares = 3;

        hardBtn.classList.remove("selected");
        easyBtn.classList.add("selected");
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
    };

    hardBtn.onclick = function onclick() {
        var numSquares = 6;

        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";

        }
    };

    resetButton.onclick = function onclick() {
        // generate all new color
        var numSquares = 6;

        colors = generateRandomColors(numSquares);
        // pick a new random color from arry
        pickedColor = pickColor();
        // change olordisplay to match picked color
        colorDisplay.textContent = pickedColor;
        // change colors of squares
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            h1.style.background = "steelblue";
        }
        messageDisplay.textContent = "";
        this.textContent = "New Colors";

    };

    colordisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = colors[i];
        squares[i].onclick = function() {
            // grab color of clicked square
            var clickedColor = this.style.background;
            // compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.background = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        };

    }



    

})();
*/
