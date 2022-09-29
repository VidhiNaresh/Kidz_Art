canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.width = innerWidth - 300;
canvas.height = 510;
canvas_color = "white";

color = "black";
width_of_line = 4;
var last_position_of_x, last_position_of_y;
var mouseEvent = "empty";

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome to Kidz Artist "+user_name+"!";

function change_color(element) {
    color = element.style.background;
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {

    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {

    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.lineCap = "round"

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function logout(){
    localStorage.removeItem("user_name");
    window.location = "index.html";
}