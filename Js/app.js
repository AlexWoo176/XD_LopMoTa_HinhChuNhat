let Rectangle = function (width, height) {
    this.height = height;
    this.width = width;

    this.getHeight = function () {
        return height;
    }
    this.getWidth = function () {
        return width;
    }
    this.getArea = function () {
        return height * width;
    }
    this.getPerimeter = function () {
        return 2 * (height + width);
    }
}

let height = Math.floor(Math.random() * 300);
let width = Math.floor(Math.random() * 200);
let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
ctx.fillStyle = "#FF0000"
ctx.fillRect(0, 0, height, width);
let rectangle = new Rectangle(height, width);
let area = rectangle.getArea();
let per = rectangle.getPerimeter();
document.write('The width is : '+height + '<br>');
document.write('The height is : ' +width + '<br>');
document.write('The perimeter is :'+per + '<br>');
document.write('The area is : '+area + '<br>');
