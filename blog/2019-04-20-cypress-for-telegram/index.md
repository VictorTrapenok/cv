---
slug: Testing-for-Telegram-Bots
title: Integration Testing for Telegram Bots
authors: [viktor]
tags: [Integration-Testing, E2E, Telegram, Testing]
---

This is the text of my speech at the [FAR EAST Devops DAYS conference](https://www.youtube.com/watch?v=QO2FQZCoggA&t=105s)
about my experience with **integration testing for Telegram bots**. Specifically, I’ll discuss the challenges and solutions I encountered when testing a Telegram bot that I inherited as part of a project.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QO2FQZCoggA?si=6DjHPXJct4Yttc6c&amp;start=73" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## The Project Context

The bot was originally written in PHP using the **MadelineProto** library. For those unfamiliar with this library, it's quite versatile. It not only allows you to create traditional Telegram bots, but it also supports automating actions on behalf of user accounts, which opens up possibilities that regular bots don't offer, such as making audio calls.

When I joined the project, the bot already had a significant amount of code. However, **there were no tests** whatsoever. As you can imagine, this was a major productivity bottleneck since I had to manually test the bot’s functionality at the end of each workday. Writing tests became my priority to speed up development.

## The Challenge of Finding Existing Libraries

My initial approach was to search for existing libraries that could facilitate the testing process. However, after some research, I found that most of the libraries available were written in **Node.js**, which wasn't ideal for my PHP-based bot. Integrating them would have taken considerable time and effort, and they wouldn’t have allowed me to test the bot directly through Telegram’s API.

## My Solution: Testing via Telegram Web

Given the limitations, I decided on a simpler approach: **testing the bot through Telegram Web**. By interacting with the bot via the web interface, I could simulate user actions like sending messages and clicking buttons. To achieve this, I wrote a small set of functions/scripts that automated these actions, which I’ll share with you later in this post.

This approach was quite effective. The script would send messages to the bot, click buttons, and perform other necessary tasks, saving me hours of manual testing.

## How It Works

Here’s a brief overview of how the testing script operates:

1. **Open Telegram Web**.
2. **Inject the testing script** into the browser’s developer console.
3. The script then automates interactions with the bot, simulating a real user.

You can run the test, and while it’s running, you can relax with a cup of tea or work on something else. Once the test is completed, you get the results — whether the bot passed or if there were any issues.

## Limitations

The main drawback of this approach is that it **doesn’t provide a full testing cycle**. Ideally, I would integrate this with **Selenium** to run tests automatically from a console or CI/CD pipeline, but so far, I’ve encountered issues with authenticating in Telegram via Selenium.

Another limitation is that Telegram has multiple platforms (iOS, Android, web), and they don’t always behave the same way. For example, the layout of messages may differ across platforms, which makes it hard to test the user experience consistently.

## Key Benefits

Despite its limitations, this was the **quickest and easiest** way to introduce some form of test automation into the project, which initially had none. It significantly improved our development speed and confidence in the bot’s functionality.

Here’s a simple example of how you can test a scenario using the script:

1. **Send a message** to the bot.
2. **Check the bot’s response** for expected text.
3. **Click a button** in the bot’s response.
4. **Wait for the next message** and verify it.

## Future Plans

One of my future goals is to integrate **Selenium** more effectively for even better automation. However, for now, this solution works, and it’s saving a lot of manual effort.

## Conclusion

To summarize, if you’re working on a Telegram bot and need a quick way to set up integration tests, testing through **Telegram Web** is a simple and effective solution. Although it doesn’t offer full coverage and automation, it’s a great starting point when no tests are in place.

---

Feel free to ask any questions in the comments or reach out to me directly. Thank you for reading!
