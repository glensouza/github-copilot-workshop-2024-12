# What not to do in Copilot to use it optimally

## Don't let it fly the plane

* It's meant to be an assistant, not a replacement for you (the real pilot)
* Don't ask it to write an enterprise-grade application for you and assume success
* It does not produce optimal secure code
* Letting it write code without your review may hinder productivity, you're still responsible for all the code that Copilot generates

## Don't misuse Copilot tools

* You can eat spaghetti with a spoon, but it's not the best tool for the job
* When prompting Copilot, you want to use it efficiently
  * Here in this example is a typical misuse of Copilot
    ![dont use comment](docs/dont1.jpg)
    We're tempted to write a comment to prompt it
  * To get suggestions from Copilot, I could use "Ghost Text" to get suggestions for the next line of code just by hitting "Enter" key
  * If you know specifically what I want to add next, you should use "inline chat"
    ![inline chat](docs/dont2.jpg)
  * Alternatively, you can use the chat window
    ![chat side panel](docs/dont3.jpg)
    ![chat open](docs/dont4.jpg)
    but this is more conversational, perhaps more appropriate for longer prompts like this
    ![chat prompt](docs/dont5.jpg)

## Don't recreate existing prompts

* You can highlight code and ask copilot to fix the issue
  ![fix issue](docs/dont6.jpg)
* Instead use the quicker "Slash Command" to get suggestions for the highlighted code
  ![slash command](docs/dont7.jpg)
* Keep in mind you have even more options from the chat panel
  ![chat panel](docs/dont8.jpg)

## Don't forget about context

Context is everything and the clearer the context, the more relevant the suggestions from Copilot

* When having conversation with Copilot Chat Panel, and the suggestions you're getting are off track, you can go back and delete the previous messages to provide more context
  ![delete message](docs/dont9.jpg)
* Always have the part of the code you're asking about *highlighted* so Copilot can provide more relevant suggestions
* Use the "@workspace" command to provide context for the entire file
  ![workspace](docs/dont10.jpg)
* To add files as context so Copilot can take that into account, open the relevant files in the editor
* using the up arrow will allow you to scroll through previous prompts you've written
  ![up arrow](docs/dont11.jpg)

[![Copilot Best Practices (What Not To Do)](https://img.youtube.com/vi/2q0BoioYSxQ/0.jpg)](hhttps://www.youtube.com/watch?v=2q0BoioYSxQ)
