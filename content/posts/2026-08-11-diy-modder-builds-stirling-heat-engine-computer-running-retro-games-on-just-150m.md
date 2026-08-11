---
title: "DIY Modder Builds Stirling Heat Engine Computer Running Retro Games on Just 150mW (2025)"
titleUk: "DIY-моддер створив комп'ютер на тепловому двигуні Стірлінга, який запускає ретро-ігри лише на 150 мВт (2025)"
excerpt: "A brilliant DIY modder has created a Stirling heat engine computing device that powers an 80 MHz chip to play Tetris, Snake, and Pong on 150 milliwatts."
excerptUk: "Геніальний DIY-моддер створив ПК на двигуні Стірлінга, що живить чип 80 МГц для гри в Тетріс, Змійку та Понґ лише на 150 міліватах."
category: pc-hardware
date: 2026-08-11
image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&q=80"
tags: ["DIY Hardware", "Stirling Engine", "Retro Gaming", "Low Power Computing", "PC Hardware"]
readTime: 4
isNew: true
amazonTag: "techautogame-20"
---

## Introduction: The Marvel of Thermo-Mechanical Computing

In an era where modern gaming rigs consume upwards of 800 to 1,000 watts of electricity just to rasterize photo-realistic shadows, the hardware modding community continues to push the boundaries of extreme efficiency. Enter one of the most astonishing custom hardware projects of 2025: a DIY enthusiast has successfully engineered a 'heat engine computing device' driven by a miniature Stirling engine.

Operating on a minuscule power budget of just 150 milliwatts (0.15W), this thermodynamic computer clocks its processor at 80 MHz—plenty of horsepower to natively execute retro computing classics like Tetris, Snake, and Pong. By converting raw heat directly into mechanical motion and subsequently electricity, this project bridges 19th-century mechanical engineering with modern embedded computing.

## How It Works: Translating Heat into Hertz

At the core of this build lies a custom micro-Stirling engine. For those unfamiliar, a Stirling engine operates by cyclic compression and expansion of air or another gas at different temperatures, converting thermal energy directly into mechanical work. In this setup, heat supplied by a small alcohol burner or thermal waste pad expands gas inside a cylinder, driving a tiny piston.

That mechanical motion spins a high-efficiency micro-dynamo generator, producing clean DC power. The energy is captured and smoothed out using an ultra-low-power power management IC (PMIC) coupled with a bank of supercapacitors. Once voltage stabilizes at roughly 3.3V, it feeds an ultra-efficient 32-bit microcontroller running at 80 MHz.

What makes this build incredible isn't just that it runs, but that it operates reliably on a mere 150mW. To put that in perspective, a standard USB port delivers up to 2.5W to 15W, while an idle flagship CPU draws anywhere from 10W to 30W. This heat engine rig operates on less than 1% of the energy consumed by an idle modern desktop PC.

## Gaming on Ambient Thermal Energy: Tetris, Snake, and Pong

The software layer was meticulously optimized to run within strict thermal and electrical constraints. The maker loaded a lightweight bare-metal C codebase directly onto the microcontroller, bypassing heavy operating systems like Linux.

The display consists of a tiny 0.96-inch monochrome OLED screen, which draws under 15 milliwatts of power. Input is handled by low-friction micro-switches mapped directly to hardware interrupts to keep CPU wake cycles as brief as possible.

- **Tetris**: Runs at a smooth 60 FPS, with full collision detection and score tracking.
- **Snake**: Utilizes hardware timers to control game speed, consuming under 120mW during active rendering.
- **Pong**: Features a simple AI opponent, proving that algorithmic logic and graphics rendering can coexist seamlessly under extreme power constraints.

While you won't be running Cyberpunk 2077 on a alcohol-lamp-powered rig anytime soon, seeing actual video games powered entirely by physical thermodynamics is nothing short of magical.

## Why Ultra-Low-Power Efficiency Matters in 2025

Projects like this might seem like fun novelties, but they address critical concepts in the modern tech ecosystem. As energy efficiency becomes a top priority for off-grid IoT sensors, wearable medical devices, and space exploration, learning to harness ambient heat for computation is vital.

Waste heat harvesting (thermoelectric and thermo-mechanical conversion) could eventually allow future PC components to recycle their own thermal exhaust into usable energy, lowering overall system draw and thermals.

## Gear for Your Own Ultra-Low Power & DIY Modding Projects

If this mind-bending build inspires you to dive into low-power computing, microcontrollers, or thermodynamic experiments, here are the best components available in 2025 to kickstart your journey:

1. **Raspberry Pi Pico 2** (~$5.00)
   Powered by the new RP2350 dual-core ARM/RISC-V chip, the Pico 2 offers incredible power control. It can run custom C applications at up to 150 MHz while drawing minimal milliwatts, making it ideal for solar, battery, or alternative energy projects.

2. **Sunnytech Low Temperature Stirling Engine Motor** (~$39.99)
   A fantastic entry point for understanding thermodynamic energy. This model can run off a warm cup of coffee or hot water, making it a great base unit for small energy-harvesting experiments.

3. **Seeed Studio XIAO ESP32C3** (~$4.99)
   Featuring a RISC-V core and integrated Wi-Fi/Bluetooth, this ultra-tiny board boasts deep sleep modes down to microamps, making it perfect for hyper-efficient mini-computers and smart sensors.

4. **Noctua NF-A4x10 5V PWM Fan** (~$14.95)
   When building ultra-compact micro-rigs, efficient air displacement is key. This 40mm fan operates silently on 5V power while drawing less than 0.25W, ideal for tiny custom enclosures.

## Bottom Line / Our Verdict

The Stirling engine computing device is a masterclass in custom engineering and retro-computing ingenuity. By pairing 19th-century mechanical physics with modern low-power silicon, its creator has delivered a fascinating proof of concept that proves gaming doesn't always demand massive electricity. It's a inspiring reminder of how creative tech enthusiasts can make complex computing work on a literal whisper of energy.

---UK---

## Вступ: Диво термомеханічних обчислень

В епоху, коли сучасні ігрові ПК споживають від 800 до 1000 Вт електроенергії лише для растеризації фотореалістичних тіней, спільнота апаратних моддерів продовжує розсувати межі екстремальної енергоефективності. Зустрічайте один із найдивовижніших кастомних апаратних проєктів 2025 року: DIY-ентузіаст успішно розробив «обчислювальний пристрій на тепловому двигуні», який працює від мініатюрного двигуна Стірлінга.

Працюючи з мізерним бюджетом потужності лише в 150 міліватів (0,15 Вт), цей термодинамічний комп'ютер має тактову частоту процесора 80 МГц — цього цілком достатньо для нативного запуску класики ретро-ігор, такої як Тетріс, Змійка та Понґ. Перетворюючи тепло безпосередньо в механічний рух, а потім в електроенергію, цей проєкт поєднує механічну інженерію XIX століття із сучасними вбудованими обчислювальними системами.

## Як це працює: Перетворення тепла на герци

В основі цієї збірки лежить кастомний мікродвигун Стірлінга. Для тих, хто не знайомий з принципом його роботи: двигун Стірлінга працює шляхом циклічного стиснення та розширення повітря або іншого газу за різних температур, перетворюючи теплову енергію безпосередньо на механічну роботу. У цій системі тепло, що постачається від невеликого спиртового пальника або теплової накладки, розширює газ усередині циліндра, приводячи в рух крихітний поршень.

Цей механічний рух обертає високоефективний мікродинамо-генератор, виробляючи чистий постійний струм. Енергія накопичується та згладжується за допомогою наднизькоспоживчої інтегральної схеми управління живленням (PMIC) у поєднанні з блоком суперконденсаторів. Як тільки напруга стабілізується приблизно ��а рівні 3,3 В, вона живить надефективний 32-бітний мікроконтролер, що працює на частоті 80 МГц.

Неймовірним у цій збірці є не лише те, що вона працює, а й те, що вона стабільно функціонує лише на 150 мВт. Для порівняння: стандартний USB-порт видає від 2,5 до 15 Вт, тоді як флагманський процесор у режимі простою споживає від 10 до 30 Вт. Ця система на тепловому двигуні споживає менше 1% енергії, необхідної сучасному настільному ПК у режимі простою.

## Геймінг на навколишній тепловій енергії: Тетріс, Змійка та Понґ

Програмний рівень був ретельно оптимізований для роботи в умовах суворих теплових та електричних обмежень. Розробник завантажив легкий C-код безпосередньо на мікроконтролер (bare-metal), оминаючи важкі операційні системи на кшталт Linux.

Дисплей є крихітним 0,96-дюймовим монохромним OLED-екраном, який споживає менше 15 міліватів енергії. Введення здійснюється за допомогою мікроперемикачів із низьким тертям, прив'язаних безпосередньо до апаратних переривань, щоб цикли пробудження процесора були якомога коротшими.

- **Tetris**: Працює з плавними 60 FPS, має повноцінне виявлення зіткнень та підрахунок очок.
- **Snake**: Використовує апаратні таймери для контролю швидкості гри, споживаючи менше 120 мВт під час активного рендерингу.
- **Pong**: Оснащений простим штучним інтелектом суперника, доводячи, що алгоритмічна логіка та рендеринг графіки можуть безпроблемно співіснувати в умовах екстремальних обмежень живлення.

Хоча ви найближчим часом і не зможете запустити Cyberpunk 2077 на ПК з приводом від спиртівки, бачити справжні відеоігри, які повністю працюють завдяки фізичній термодинаміці, — це справді щось магічне.

## Чому наднизьке енергоспоживання важливе у 2025 році

Подібні проєкти можуть здаватися кумедними цікавинками, але вони торкаються критично важливих концепцій у сучасній технологічній екосистемі. Оскільки енергоефективність стає головним пріоритетом для автономних датчиків IoT, медичних пристроїв, що носяться, та освоєння космосу, вміння використовувати навколишнє тепло для обчислень має життєво важливе значення.

Утилізація залишкового тепла (термоелектричне та термомеханічне перетворення) зрештою може дозволити майбутнім ПК-компонентам переробляти власне теплове виділення на корисну енергію, знижуючи загальне споживан��я та температуру системи.

## Обладнання для власних проєктів із наднизьким енергоспоживанням та DIY-моддингу

Якщо ця вражаюча збірка надихає вас зануритися в обчислення з низьким енергоспоживанням, мікроконтролери або термодинамічні експерименти, ось найкращі компоненти, доступні у 2025 році, для початку вашої подорожі:

1. **Raspberry Pi Pico 2** (~$5.00)
   Працюючи на новому двоядерному чипі ARM/RISC-V RP2350, Pico 2 пропонує неймовірний контроль живлення. Він може запускати кастомні C-додатки на частоті до 150 МГц, споживаючи мінімальні мілівати, що робить його ідеальним для проєктів із сонячною, акумуляторною або альтернативною енергією.

2. **Низькотемпературний двигун Стірлінга Sunnytech** (~$39.99)
   Чудова відправна точка для розуміння термодинамічної енергії. Ця модель може працювати від теплої чашки кави або гарячої води, що робить її чудовою базою для невеликих експериментів із збору енергії.

3. **Seeed Studio XIAO ESP32C3** (~$4.99)
   Завдяки ядру RISC-V та вбудованим Wi-Fi/Bluetooth, ця надмала плата володіє режимами глибокого сну зі споживанням до мікроампер, що робить її ідеальною для гіперефективних міні-комп'ютерів та розумних датчиків.

4. **Вентилятор Noctua NF-A4x10 5V PWM** (~$14.95)
   При створенні ультракомпактних мікросистем ключове значення має ефективний рух повітря. Цей 40-мм вентилятор працює безшумно від напруги 5 В, споживаючи менше 0,25 Вт, що ідеально підходить для крихітних кастомних корпусів.

## Підсумок / Наш вердикт

Обчислювальний пристрій на двигуні Стірлінга — це майстер-клас із кастомної інженерії та винахідливості в галузі ретро-обчислень. Поєднавши механічну фізику XIX століття із сучасним енергоефективним кремнієм, його творець представив захоплюючий доказ концепції, який доводить, що геймінг не завжди вимагає колосальної кількості електроенергії. Це натхненне нагадування про те, як креативні ентузіасти можуть змусити складні обчислення працювати буквально від шепоту енергії.
