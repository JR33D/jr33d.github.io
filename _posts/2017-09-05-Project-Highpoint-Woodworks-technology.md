---
layout:            post
title:             "Project: Highpoint Woodworks Technology"
menutitle:         "Highpoint Woodworks - Technology"
date:              2017-09-05 02:00:00 -0400
tags:              projects Highpoint Woodworks technology blog angular
category:          Projects
author:            jreed
draft:             false
redirect_from:     "/project-highpoint-woodworks-technology/"
language:          EN
---
# Project: Highpoint Woodworks Part Two - Technology
As we <a href="/blog/projects/Project-Highpoint-Woodworks-mockups">covered previously</a> a family member reached out to me about creating a website for their business. We talked about the requirements and the mockups built from those requirements. This time around we are exploring what the technology stack for the project will be.

## Technology
The project and requirements do not offer anything about the technologies to be used. They do not have an existing site or IT person to manage the site. This leaves the options open to what seems like the best tool for the job and what might be a good learning opportunity. While this site is mainly a "Web 1.0" style site, just providing a static format seems to undermine what the client might need in the future. We want to lay the ground work for something that we or someone else can improve and expand on in the future.

As we mentioned before static content would be able to complete this project, but that does not seem fair to the client knowing what the current landscape of technology looks like and what most users have come to expect when exploring the web. That mentioned, I've looked at two popular JavaScript frameworks that I am sure you heard of before [React](https://facebook.github.io/react/) & [Angular](https://angular.io/), I also looked at a node.js framework called [KeystoneJs](http://keystonejs.com/).

## React
In my review of React, I can see it as being beneficial for heavy client side features that depend more on layout, and style without much interaction. I have not worked with React in a setting outside of research and setting up the tutorial. This project could work out great in react as most of the content is single state just push to the page, the backend doesn't include any more then read services. I have a different project idea, that we will talk about in the near future, that I believe will better showcase some of the features of React.

## Angular
In my day job as a Software Engineer, I use AngularJs often. All of our custom apps are built with it with a few changes here and there to allow for updates to Angular when the time is right. Meaning that we write it in typescript, along with some modifications to how controllers and modules are structured to transition easier. With all of my previous experience and some tools already put together for faster project setup I feel that using Angular is the better choice at this time.

### Angular VS AngularJS
While it is not exactly clear the difference between these two names, as they refer to the same framework at different times in its life. Angular refers to the version of the framework written in TypeScript completely, major versions are often seen as 2 or 4. AngularJs refers to the version of the project written in JavaScript completely, major versions of this are often under the 1. AngularJs 1.5+ can be written in TypeScript and shimmed to allow for Angular and AngularJs components to work side by side for teh same application.

## Keystone.js
Keystone.js is a CMS based framework that uses express, MongoDB, and Node. It would allow for the client to maintain their own site content with a special admin section that users can setup and provide credentials for as part of the deploy process. I did start to go down this road and did a bit of development, it may be from inexperience of working with MongoDB but I found the underlying framework config to Mongo class/table creation very tedious and time consuming. Out of the six hours or so I spent working with the framework and bending to to my will, I did not get much farther then defining the models partially, and trying to define new routing and pages to match the projects needs.

## Project
As I mentioned I have decided to use Angular for the client side of the project. I have not fully settled on if a data store is going to be required or if I will use angular-in-memory-web-api package until backend services can be defined better with more business logic. I believe the client would like to transition into a e-commerce site in the future, but might continue to run those process through a third party like Etsy. Also as mentioned I have a tool in place to quickly [setup Angular projects](https://github.com/JR33D/angular-starter), really it is just a folder structure and `package.json`.

Using the [angular-starter](https://github.com/JR33D/angular-starter) repository I added components and routing for each of the various pages of the site. Our overall project structure looks something like this so far.

![]({{ "/media/HighpointWoodworks/ProjectStructureOne.png#left" | absolute_url }})
![]({{ "/media/HighpointWoodworks/ProjectStructureTwo.png#right" | absolute_url }})

As for what the application looks like at this moment of in progress, a color palette is still being worked out, but we are considering earthly tones, green, brown, and blue. We have the header and footer in place as fixed height items, along with the content of the header there but not styled into place. The center content changes based on our route, currently we are in the /home route which displays the title "Home".

![]({{ "/media/HighpointWoodworks/InProgressDevOne.png" | absolute_url }})

With the holiday weekend just passing I did not get a chance to spend as much time progress this project as I would have liked. Check back next time which should include a general progress update, along with a better stabilized idea of color palette and general page structure for each area.