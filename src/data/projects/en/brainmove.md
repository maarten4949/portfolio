---
title: Brainmove
description: A team project to test and improve people's reaction speeds
links: [{url: "https://github.com/Teamproject-BrainMoveG2/brainmoveg2", label: "View Source Code", isPrimary: true},{url: "https://github.com/Crazy-Spy/EcoFoodCalc", label: "View source code"}]
tags: ["Open Source", "Team project", "FastAPI", "MySQL", "Electronics", "Figma"]
image: "../../../assets/images/teamproject_home_screen_wide.png"
---
In my second year of MCT, we had an internal client for who we needed to make a project in group, our project was a game that helped people of all ages and physical ability to test and improve their reaction speed.

We made a website that was hosted locally on a Raspberry Pi that is connected to 4 cones of different colors, each cone has an ESP32, battery, TOF sensor (to detect whether someone has tapped the cone), buzzer (to make sounds) and rgb light (to display the battery status).

We made the following gamemodes:
- **Speed Reflex**: a color appears on the website and the player needs to tap the correct cone
- **Memory Game**: a series of colors appears on the website and the player needs to tap the cones in the same order
- **Calm Colors**: the same as Speed Reflex but without a time limit
- **Merge Colors**: a color appears on screen and the player needs to tap the 2 colors that when mixed with each other (like with paint) form the color on the screen
![Screenshot of the website with an overview of the gamemodes](./teamproject_home_screen.png)

I made most of the FastAPI backend and also helped a lot with the wireframes and design in Figma.
