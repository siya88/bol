
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

var canvas = new fabric.Canvas('myCanvas');
ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;

function load_img({ fabric. Image.FromURL("golf-h1.png", function(Img)
 {
	hole_obj = Img; hole_obj.scaleToWidth(50); hole_obj.scaleToHeight(50); hole_obj.set({
	top: hole_y,
	left:hole_x }); 
	canvas.add(hole_obj);
	}); new_image();
	new_image()
	fabric. Image.FromURL("ball.png", function(Img) { ball_obj = Img; ball_obj.scaleToWidth(50); ball_obj.scaleToHeight(50); ball_obj.set({ top: bally, left:ball_x
	});
	canvas.add(ball_obj);
	});

	if((ball_x==hole_x)&&(ball_y==hole y)) {
		canvas .remove(ball_obj);
		document.getElementById( "hd3").innerHTML="You have Hit the Goall : document.getElementById("my Canvas").style.bordercolor="red";
		
		function down()
		if(bally <=450)
		bally - ball y + block_image_height; console.log("block image height = " + block_image_height); console.log("When Down arrow key is pressed, X = " + ball_x + canvas.remove(ball_obj); new_image();
		, Y = "+ball_y);