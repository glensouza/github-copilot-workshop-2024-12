# Common Scenarios Where GitHub Copilot Shines

Up to this point, we've used GitHub Copilot to perform a number of actions. We've asked it questions specific to our code base to help with adding new features to our snake game and rock, paper, and scissors games. We've also used GitHub Copilot to provide suggestions from comments and help with boilerplate code for common tasks when working in popular languages like C# and JavaScript.

A common question I hear when talking about GitHub Copilot is what are the most common scenarios or workloads that GitHub Copilot excels at? We've done a lot of these within this workshop already. But to summarize, here are the top things that GitHub Copilot shines at today.

* **Boilerplate code** and generating expressions or things that are relatively routine or repeatable. Some common examples of this are building a new website. GitHub Copilot is really good at creating the scaffolding for the site and linking any connections to a database if you have one or using APIs. All of these things are relatively boilerplate and repetitive in a lot of ways. These things don't change much, and GitHub Copilot is really good at identifying patterns. This allows a developer to get started on a new website with Copilot helping create the code for all of the scaffolding even when working with new technologies or new frameworks because they all sort of follow a similar pattern, which is something that generative AI is really good at understanding.
* **Computer‑readable** but not necessarily human‑readable. These are things like cron jobs and regex expressions. So if you're like me, whenever you're working with one of these, I have a tab open to understand how to convert what I want to the correct syntax. This is something that GitHub Copilot does really well. I can use natural language to tell GitHub Copilot what to do, and it will convert it to the correct syntax for me. This is also really great when working with things like CSS, and we did several examples of this during the course. When we created our snake game, we wanted to add a border around the game, and then we wanted to center it on the page. When using GitHub Copilot, all I had to do was tell it that I wanted a border, and Copilot added CSS styles to the canvas element for the game. And to center it, I didn't need to remember exactly how to do that because Copilot would let me know I needed to set the display of the body to flex, justify content to center, and align the items to center.
* Helping you **write code that you may not necessarily love to write**, things like creating unit tests or other tedious tasks. With unit tests, Copilot looks at the functions that you've written and can help you create unit tests to test out the code. Since these unit tests tend to follow a very similar format, Copilot is great at taking your file contents into context and helping you create unit tests, especially if you have the first one or two unit tests already created.