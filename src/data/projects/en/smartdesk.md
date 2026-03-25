---
title: SmartDesk
description: A hardware device with website to track how much time someone spends at their desk.

links: [{url: "https://github.com/howest-mct/2024-2025-projectone-mct-MaartenSchaep-MCT", label: "View source code", isPrimary: true}, {url: "https://www.instructables.com/SmartDesk-Transform-Your-Desk-to-Transform-Your-He/", label: "View instructables"}]
tags: ["FastAPI", "MySQL", "Figma", "Raspberry Pi", "Electronics"]
image: "../../../assets/images/SmartDesk.png"
---
This was a project for my first year MCT where we had to make a hardware device that gathers and stores data that is viewable on a website.

The backend is made in FastAPI (Python) that is connected to a MySQL database. The frontend is made in Vanilla JS. De site is hosted on a Raspberry Pi (Apache for frontend and Uvicorn for backend). I have also used a variety of different sensors like a Time of Flight, Ultrasonic Sensor and an RFID sensor.
