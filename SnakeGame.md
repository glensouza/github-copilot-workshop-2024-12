# Snake Game

One of the best ways to learn something is to see it in action. So with using GitHub Copilot Chat, let's build a classic snake game completely from scratch. It was a classic game that originated in the 1970s and then gained popularity in the late 1900s and early 2000s when it was preinstalled on Nokia mobile phones. The snake grows longer as it consumed pixels resembling food. We will place obstacles that you had to avoid. So let's try to create this snake game all with using GitHub Copilot.

1. Navigating to my IDE, I'll be using VS Code.
1. Open the Copilot Chat window by either navigating to the bottom icon, or the chat icon will be located in your activity bar. GitHub Copilot Chat will then open up and you'll be greeted with a message and prompt bar where you can then interact with it.
1. Create a folder where we will place the files for our snake game. I'll call this folder SnakeGame.
1. Let's ask Copilot if it knows what the classic Snake game is. So let's type `What is the classic Snake game?` And after a few seconds, Copilot responds with a response
1. We will ask it to help us create a simple version of the Snake game with JavaScript.
1. After a few seconds, Copilot responds with a simple implementation of the Snake game using JavaScript and HTML5 Canvas.
1. Looking through the code as it is being returned, we have our HTML file with the body and the canvas tag. We have the script that looks to have all of the JavaScript for the game. I see the defined variables for the box and snake, looks like the starting direction, and here's the food code. We also get the draw function and our navigation with arrow keys. It looks like we have basic navigation. Looks like we have a collision detected, a directionUpdate function, and a collision function.
1. We can then insert the code into new files and run it. We have the option to insert this code into a new file. So let's do that. We can then save this file as `snake.js`, and we have our starting JavaScript code and `index.html` for the HTML file.

It's a good starting point, but won't be quite what I was looking for. I've done this demonstration before and each time I get different responses and different code returned back. So it's always an adventure. It has a lot to do with how I craft my prompts, we will get to prompt engineering later in the workshop. But we're also working with an AI tool that is context‑dependent and trained on billions of lines of code through its training models. We'll also dive into this data flow later on as well, and you'll get a better understanding on what's happening under the hood when you interact with GitHub Copilot.

Now let's ask Copilot to add comments to this code to make it easier to read. And after a couple of seconds, Copilot responds back with added comments to the same JavaScript code. This makes the code a lot easier to understand for both myself and anyone else who may be looking at this code. This is awesome because Copilot is context‑aware. So it remembers my previous prompts and will respond with that context in mind.

We can use GitHub Copilot to add more features and alter the code.

## Use GitHub Copilot to Improve the Game

With our current game, it's actually hard to tell where the walls of our game are, so let's add a border around the game. Navigating back to our editor, let's ask Copilot to add a border around the game.

Now notice that since I have my index.html file opened, Copilot is using that file for context reference before it provides a response. Copilot returns with the information that we can add a border around the game by applying its CSS styles to the canvas element within our HTML file. And then it also provides the exact code that we can use.

Let's center the game canvas to the middle of the page by asking Copilot to center the game on the page for us instead of it being on the top left of the page. Copilot tells us that we can center the page by using CSS. It will tell us exactly how to do that while including the exact code we need custom to our index.html file.

Let's now make some feature changes to our game. There should be obstacles that you need to avoid while trying to eat the food. In our snake.js file, let's add the code to create random obstacles that appear when you start the game. So, let's use Copilot to do this for us, and we can ask it something like `how can I add obstacles to the game?` Notice now that Copilot is using my open snake.js file for reference as it provides a response. We also need a way to detect a collision, and Copilot has given me all of these code blocks to make this happen. Now if I play the game and run into an obstacle, the game stops and it's game over.

Let's make the functionality change so that the snake can go through the wall. So, returning back to our editor, let's ask Copilot, how can I make the snake go through the wall? And after a couple of seconds, Copilot returns back that we can make the snake go through the wall and appear on the opposite side by modifying the code that updates the snake's position. So instead of ending the game when the snake hits the wall, we can wrap the snake's position to the opposite side of the canvas.

One key thing that we're missing is the functionality to see our score within the game. So, let's try to add that now. Back in our text editor, let's navigate to our index.html file and see where we need to add a new HTML element to display the score. Similar to our body and game elements, I'm thinking we'll need to add a score element as well. We'll also need to add the code in our snake.js file to actually keep the score. But let's also ask Copilot while our HTML file is opened to see if we can also get content for our JavaScript file. So, let's ask Copilot `how can I display the score of the game?`.

## Add Final Touches to the Game

I like that we have a score being displayed on our Snake game, but I don't like its position so let's change it. Back in our editor, let's switch to our index.html file since this is where we'll need to make the code change. So let's ask GitHub Copilot, `how can I move the score to the top of the page?`

The game still looks a little bland. I think we can do a little work to make it a little bit better. So let's return back to our text editor to see what Copilot can do for us. What's really nice when working with AI tools like ChatGPT and GitHub Copilot is that you can use natural language to ask for what you want. You don't always have to be super specific in the terminology you use. But sure, the more specific you are, the better chances you have at getting your desired results the first time. Start by asking what you want in common terms and then see where that takes you. So since I basically want this to look better or prettier, instead of asking specific CSS questions, let's just ask GitHub Copilot, `how can I make my game look prettier?` And let's see what we get.

## Conclusion

Believe it or not, we just created a game from scratch in a few minutes using GitHub Copilot. And the crazy part is that I'm not even close to a JavaScript expert. And if I tried this on my own, my Google search requests and help from online forums would result in something that wouldn't even come close to this if I even got something to work.

The power of GitHub Copilot is just that. It's a copilot that still needs me to be in control. But I have a custom AI copilot that can mentor me along the way and answer questions specific to my code base. Now I still needed to be familiar with what is going on and how things are working, but I can use GitHub Copilot to guide me along the way and answer questions in natural language. This was just an example of the power of GitHub Copilot.
