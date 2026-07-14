---
title: "DIY OpenPuck: Enthusiast Reverse-Engineers Steam Controller 2 Tech for Ultimate PC Gaming Freedom (2025)"
titleUk: "DIY OpenPuck: Enthusiast Reverse-Engineers Steam Controller 2 Tech for Ultimate PC Gaming Freedom (2025)"
excerpt: "A brilliant hardware hacker has reverse-engineered the Steam Controller 2's trackpad 'puck' to create OpenPuck, a DIY controller that bypasses Steam Input."
excerptUk: "A brilliant hardware hacker has reverse-engineered the Steam Controller 2's trackpad 'puck' to create OpenPuck, a DIY controller that bypasses Steam Input."
category: pc-hardware
date: 2026-07-14
image: "https://images.unsplash.com/photo-1657911940653-a1240f4ebf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTQxNzV8MHwxfHNlYXJjaHwxfHxESVklMjBPcGVuUHVjayUzQSUyMEVudGh1c2lhc3QlMjBSZXZlcnNlLUVuZ2luZWVycyUyMFN0ZWFtJTIwQ29udHJvbGxlciUyMDIlMjBUZWNoJTIwZm9yJTIwVWx0aW1hdGUlMjBQQyUyMEdhbWluZyUyMEZyZWVkb20lMjAlMjgyMDI1JTI5JTIwcGMtaGFyZHdhcmV8ZW58MHwwfHx8MTc4NDAyNTk3OHww&ixlib=rb-4.1.0&q=80&w=1080&w=1200&q=80"
tags: ["pc-hardware", "Steam Controller", "DIY Gaming", "OpenPuck", "Retro Gaming"]
readTime: 5
isNew: true
amazonTag: "techautogame-20"
---

## The Return of the Trackpad: How OpenPuck Changes the Game

For years, PC gaming hardware enthusiasts have mourned the loss of the original Steam Controller. Released by Valve in 2015 and discontinued in 2019, its dual-trackpad design offered unparalleled precision for strategy games, shooters, and desktop navigation from the comfort of a couch. While rumors of a 'Steam Controller 2' (codenamed 'Ibex') have circulated throughout the hardware community, Valve has yet to make an official announcement.

Enter the maker community. In a stunning display of hardware reverse-engineering, an independent developer known online as 'ArtisanalBytes' has successfully cloned and improved upon the rumored trackpad 'puck' module of Valve\'s next-generation controller designs. The project, appropriately named **OpenPuck**, is a fully open-source, DIY-friendly input device that does something Valve\'s original hardware never could: it runs completely independent of the Steam Input software layer.

By leveraging custom firmware, the OpenPuck can natively emulate Nintendo, PlayStation, and Xbox controllers right out of the box, making it one of the most versatile pieces of PC gaming hardware to emerge in 2025.

## Under the Hood: How the OpenPuck Bypasses Steam Input

The biggest criticism of the original Steam Controller was its heavy reliance on the Steam client. Without Steam Input running in the background, the controller defaulted to a basic keyboard-and-mouse emulation mode that was virtually useless for non-Steam games or emulation. 

OpenPuck solves this bottleneck at the hardware level. The device utilizes a high-frequency capacitive touch sensor mounted on a custom printed circuit board (PCB), driven by a low-cost, high-performance microcontroller. Instead of sending raw touch coordinates to a PC client daemon to translate, the OpenPuck handles all the translation on-board.

Using custom-written C++ firmware, the OpenPuck converts thumb gestures, swipes, and edge-scrolls directly into standard USB HID (Human Interface Device) signals. To your operating system, the OpenPuck doesn\'t look like a weird experimental trackpad; it looks like a standard, system-level controller.

## Multi-Console Emulation: Xbox, PlayStation, and Nintendo Support

What makes the OpenPuck a true game-changer for emulator enthusiasts and multi-platform gamers is its dynamic profile switching. Through a web-based configuration tool, users can flash different firmware modes onto the device\'s microcontroller. 

*   **XInput Mode:** Emulates a standard Xbox Series X/S controller, ensuring 100% compatibility with modern Windows games, Xbox Game Pass for PC, and modern PC titles.
*   **DirectInput / DualShock Mode:** Emulates a PlayStation 4 or PlayStation 5 controller. This mode even supports mapping the trackpad to the PS4/PS5 controller\'s touchpad, making it incredibly useful for PlayStation-to-PC ports.
*   **Nintendo Switch Mode:** Emulates a Nintendo Switch Pro Controller, complete with gyro-aiming support if you pair the OpenPuck with a cheap IMU (Inertial Measurement Unit) sensor.

This means you can play classic Nintendo titles on your PC emulator, jump over to a PlayStation exclusive on Steam, and then launch a game on GOG or Epic Games Store without ever having to configure third-party mapping software.

## What You Need to Build Your Own OpenPuck (And Great Alternatives)

Because OpenPuck is open-source, you can build one yourself using off-the-shelf components. If you\'re looking to dive into this project, or if you prefer to buy a ready-made controller with high-end customization, here are the hardware recommendations you should consider:

### 1. Raspberry Pi Pico H (~$7.00)
The brain of the OpenPuck is the RP2040 chip. The **Raspberry Pi Pico H** is the perfect microcontroller for this project. It features pre-soldered headers, making it incredibly easy to connect to your DIY trackpad assembly without requiring advanced micro-soldering skills. Its high clock speed ensures near-zero input latency.

### 2. Cirque TM040040 GlidePoint Trackpad (~$22.00)
This is the exact circular capacitive trackpad module that forms the physical interface of the OpenPuck. The **Cirque TM040040** offers high-resolution tracking and supports SPI and I2C communication protocols, which are natively supported by the OpenPuck firmware. It mimics the tactile feel of the classic Steam Controller pad perfectly.

### 3. 8BitDo Ultimate Bluetooth Controller (~$59.99)
If you aren\'t ready to break out the soldering iron but want a high-quality controller that natively supports multiple platforms, the **8BitDo Ultimate** is our top recommendation. It features Hall Effect sensing joysticks (which prevent stick drift), a dedicated 2.4GHz receiver, and seamless switching between Nintendo Switch and PC (XInput) modes.

### 4. GuliKit KK3 Max Controller (~$79.99)
For gamers who want premium build quality and PlayStation/Xbox layout versatility, the **GuliKit KK3 Max** is an incredible alternative. It features patented Maglev motors for haptic feedback, mechanical tactile buttons, and can emulate Xbox, Switch, and PlayStation controllers with a physical toggle switch on the back.

## The DIY Build Process and Community Impact

Building an OpenPuck is surprisingly accessible. The project\'s GitHub repository provides full Gerber files for ordering the custom PCB from cheap fabrication houses, along with 3D-printable housing files. Once assembled, you simply plug the device into your PC via USB-C, hold down a bootloader button, and drag-and-drop the pre-compiled firmware file.

What this project proves is that the PC gaming community doesn\'t need to wait for major corporations to deliver the niche hardware they want. The OpenPuck project has already inspired other modders to design custom 3D-printed controller shells that combine the OpenPuck trackpad with mechanical keyboard switches for the ultimate hybrid controller.

## Bottom Line / Our Verdict

The **OpenPuck** is a masterpiece of open-source engineering. By liberating the concept of the Steam Controller\'s trackpad from the confines of Steam Input, it has created a highly customizable, platform-agnostic tool that serves retro gamers, emulation fans, and accessibility-focused players alike. 

If you have even a passing interest in DIY electronics, spending ~$30 on a Raspberry Pi Pico H and a Cirque GlidePoint trackpad to build your own OpenPuck is one of the most rewarding weekend projects you can undertake in 2025. For everyone else, premium multi-system controllers like the **8BitDo Ultimate** and **GuliKit KK3 Max** remain excellent, hassle-free alternatives for cross-platform play.

---UK---

## The Return of the Trackpad: How OpenPuck Changes the Game

For years, PC gaming hardware enthusiasts have mourned the loss of the original Steam Controller. Released by Valve in 2015 and discontinued in 2019, its dual-trackpad design offered unparalleled precision for strategy games, shooters, and desktop navigation from the comfort of a couch. While rumors of a 'Steam Controller 2' (codenamed 'Ibex') have circulated throughout the hardware community, Valve has yet to make an official announcement.

Enter the maker community. In a stunning display of hardware reverse-engineering, an independent developer known online as 'ArtisanalBytes' has successfully cloned and improved upon the rumored trackpad 'puck' module of Valve\'s next-generation controller designs. The project, appropriately named **OpenPuck**, is a fully open-source, DIY-friendly input device that does something Valve\'s original hardware never could: it runs completely independent of the Steam Input software layer.

By leveraging custom firmware, the OpenPuck can natively emulate Nintendo, PlayStation, and Xbox controllers right out of the box, making it one of the most versatile pieces of PC gaming hardware to emerge in 2025.

## Under the Hood: How the OpenPuck Bypasses Steam Input

The biggest criticism of the original Steam Controller was its heavy reliance on the Steam client. Without Steam Input running in the background, the controller defaulted to a basic keyboard-and-mouse emulation mode that was virtually useless for non-Steam games or emulation. 

OpenPuck solves this bottleneck at the hardware level. The device utilizes a high-frequency capacitive touch sensor mounted on a custom printed circuit board (PCB), driven by a low-cost, high-performance microcontroller. Instead of sending raw touch coordinates to a PC client daemon to translate, the OpenPuck handles all the translation on-board.

Using custom-written C++ firmware, the OpenPuck converts thumb gestures, swipes, and edge-scrolls directly into standard USB HID (Human Interface Device) signals. To your operating system, the OpenPuck doesn\'t look like a weird experimental trackpad; it looks like a standard, system-level controller.

## Multi-Console Emulation: Xbox, PlayStation, and Nintendo Support

What makes the OpenPuck a true game-changer for emulator enthusiasts and multi-platform gamers is its dynamic profile switching. Through a web-based configuration tool, users can flash different firmware modes onto the device\'s microcontroller. 

*   **XInput Mode:** Emulates a standard Xbox Series X/S controller, ensuring 100% compatibility with modern Windows games, Xbox Game Pass for PC, and modern PC titles.
*   **DirectInput / DualShock Mode:** Emulates a PlayStation 4 or PlayStation 5 controller. This mode even supports mapping the trackpad to the PS4/PS5 controller\'s touchpad, making it incredibly useful for PlayStation-to-PC ports.
*   **Nintendo Switch Mode:** Emulates a Nintendo Switch Pro Controller, complete with gyro-aiming support if you pair the OpenPuck with a cheap IMU (Inertial Measurement Unit) sensor.

This means you can play classic Nintendo titles on your PC emulator, jump over to a PlayStation exclusive on Steam, and then launch a game on GOG or Epic Games Store without ever having to configure third-party mapping software.

## What You Need to Build Your Own OpenPuck (And Great Alternatives)

Because OpenPuck is open-source, you can build one yourself using off-the-shelf components. If you\'re looking to dive into this project, or if you prefer to buy a ready-made controller with high-end customization, here are the hardware recommendations you should consider:

### 1. Raspberry Pi Pico H (~$7.00)
The brain of the OpenPuck is the RP2040 chip. The **Raspberry Pi Pico H** is the perfect microcontroller for this project. It features pre-soldered headers, making it incredibly easy to connect to your DIY trackpad assembly without requiring advanced micro-soldering skills. Its high clock speed ensures near-zero input latency.

### 2. Cirque TM040040 GlidePoint Trackpad (~$22.00)
This is the exact circular capacitive trackpad module that forms the physical interface of the OpenPuck. The **Cirque TM040040** offers high-resolution tracking and supports SPI and I2C communication protocols, which are natively supported by the OpenPuck firmware. It mimics the tactile feel of the classic Steam Controller pad perfectly.

### 3. 8BitDo Ultimate Bluetooth Controller (~$59.99)
If you aren\'t ready to break out the soldering iron but want a high-quality controller that natively supports multiple platforms, the **8BitDo Ultimate** is our top recommendation. It features Hall Effect sensing joysticks (which prevent stick drift), a dedicated 2.4GHz receiver, and seamless switching between Nintendo Switch and PC (XInput) modes.

### 4. GuliKit KK3 Max Controller (~$79.99)
For gamers who want premium build quality and PlayStation/Xbox layout versatility, the **GuliKit KK3 Max** is an incredible alternative. It features patented Maglev motors for haptic feedback, mechanical tactile buttons, and can emulate Xbox, Switch, and PlayStation controllers with a physical toggle switch on the back.

## The DIY Build Process and Community Impact

Building an OpenPuck is surprisingly accessible. The project\'s GitHub repository provides full Gerber files for ordering the custom PCB from cheap fabrication houses, along with 3D-printable housing files. Once assembled, you simply plug the device into your PC via USB-C, hold down a bootloader button, and drag-and-drop the pre-compiled firmware file.

What this project proves is that the PC gaming community doesn\'t need to wait for major corporations to deliver the niche hardware they want. The OpenPuck project has already inspired other modders to design custom 3D-printed controller shells that combine the OpenPuck trackpad with mechanical keyboard switches for the ultimate hybrid controller.

## Bottom Line / Our Verdict

The **OpenPuck** is a masterpiece of open-source engineering. By liberating the concept of the Steam Controller\'s trackpad from the confines of Steam Input, it has created a highly customizable, platform-agnostic tool that serves retro gamers, emulation fans, and accessibility-focused players alike. 

If you have even a passing interest in DIY electronics, spending ~$30 on a Raspberry Pi Pico H and a Cirque GlidePoint trackpad to build your own OpenPuck is one of the most rewarding weekend projects you can undertake in 2025. For everyone else, premium multi-system controllers like the **8BitDo Ultimate** and **GuliKit KK3 Max** remain excellent, hassle-free alternatives for cross-platform play.
