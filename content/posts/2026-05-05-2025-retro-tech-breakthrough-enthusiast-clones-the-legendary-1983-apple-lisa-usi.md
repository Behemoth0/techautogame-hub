---
title: "2025 Retro-Tech Breakthrough: Enthusiast Clones the Legendary 1983 Apple Lisa Using Modern FPGA Hardware"
titleUk: "Прорив у ретро-технологіях 2025 року: ентузіаст клонував легендарний Apple Lisa 1983 року за допомогою сучасного обладнання FPGA"
excerpt: "Witness the rebirth of computing history as a dedicated developer recreates the Apple Lisa's complex hardware on a modern FPGA board with cycle-accurate precision."
excerptUk: "Подивіться на відродження історії обчислювальної техніки: розробник відтворив складне залізо Apple Lisa на платі FPGA з максимальною точністю."
category: pc-hardware
date: 2026-05-05
image: "https://images.unsplash.com/photo-1626274885381-039a21ba763e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTQxNzV8MHwxfHNlYXJjaHwxfHwyMDI1JTIwUmV0cm8tVGVjaCUyMEJyZWFrdGhyb3VnaCUzQSUyMEVudGh1c2lhc3QlMjBDbG9uZXMlMjB0aGUlMjBMZWdlbmRhcnklMjAxOTgzJTIwQXBwbGUlMjBMaXNhJTIwVXNpbmclMjBNb2Rlcm4lMjBGUEdBJTIwSGFyZHdhcmUlMjBwYy1oYXJkd2FyZXxlbnwwfDB8fHwxNzc3OTc3MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&w=1200&q=80"
tags: ["Apple Lisa", "FPGA", "Retro Computing", "PC Hardware", "MiSTer"]
readTime: 5
isNew: true
amazonTag: "techautogame-20"
---

## The Digital Resurrection of a Forgotten Icon

In the fast-paced world of 2025, where we measure performance in teraflops and neural processing units, there is a growing movement looking backward. The Apple Lisa, released in 1983, was a legendary failure that paved the way for the Macintosh. It was the first commercial computer to offer a graphical user interface (GUI) and a mouse, but its staggering $9,995 price tag (nearly $30,000 today) doomed it to obscurity. For decades, the Lisa has been a holy grail for collectors, often found buried in landfills or locked in climate-controlled vaults.

However, the world of PC hardware has just witnessed a stunning feat of "digital archaeology." A dedicated enthusiast has successfully recreated the Apple Lisa’s entire hardware architecture using a Field Programmable Gate Array (FPGA). This isn't just software emulation like you’d find on a modern PC; it is a faithful, gate-level reconstruction of the original machine’s logic, allowing it to run original Lisa OS software with 1:1 hardware accuracy.

## Why FPGA is the Future of Retro Hardware

To understand why this project is so significant, we have to look at the difference between emulation and FPGA implementation. When you run an emulator on a modern Windows or Mac machine, you are using a software layer to "trick" the code into thinking it's on original hardware. This often results in input lag, audio stuttering, and timing inaccuracies.

FPGA technology, specifically the Terasic DE10-Nano board used in the MiSTer project, works differently. Instead of running code, the FPGA reconfigures its internal logic gates to physically become the hardware it is mimicking. By recreating the Motorola 68000 CPU, the custom MMU (Memory Management Unit), and the unique video circuitry of the Lisa, this enthusiast has essentially built a brand-new Apple Lisa that fits in the palm of a hand.

## Replicating the "Twiggy" Drive and 5MHz Logic

The Apple Lisa was notoriously complex. It featured the ill-fated "Twiggy" 5.25-inch floppy drives, which were prone to failure, and a unique video subsystem that used rectangular pixels—a nightmare for modern displays to replicate. The enthusiast behind this clone spent months mapping the Lisa’s proprietary hardware components into Verilog, a hardware description language.

The result is a machine that boots into Lisa Office System 7/7, handles the original desktop metaphor with the "Wastebasket" and "Preferences" icons, and even supports the specialized LisaDraw and LisaWrite applications. For the first time in over 40 years, researchers and hobbyists can interact with the Lisa’s workflow without risking the fragile components of a $20,000 vintage unit.

## Building Your Own Retro-Modern Workstation in 2025

If this project has inspired you to dive into the world of hardware cloning and high-end retro builds, you don't need to be a semiconductor engineer to get started. The "MiSTer" ecosystem has made FPGA gaming and computing accessible to the general public. Here are the core components you need to build a modernized version of a classic machine today:

### 1. Terasic DE10-Nano Kit
**Approximate Price: $220**
This is the heart of any FPGA project. It features the Cyclone V SoC which contains the programmable logic gates needed to replicate everything from an Apple Lisa to a Commodore 64 or a Sony PlayStation 1. It is the gold standard for hardware preservation in 2025.

### 2. MiSTer I/O Board v6.1 (with Noctua Cooling)
**Approximate Price: $65**
To get the most out of your FPGA, you need an I/O board. This adds an SDRAM slot (essential for many cores), a fan for cooling, and legacy video outputs. We recommend pairing it with a **Noctua NF-A4x10 PWM fan ($15)** to ensure the system remains silent and cool during long sessions of digital archeology.

### 3. Keychron Q1 HE Magnetic Switch Keyboard
**Approximate Price: $190**
To truly capture the feel of an 80s workstation while maintaining 2025 performance, the Keychron Q1 HE is an excellent choice. Its Hall Effect magnetic switches allow you to customize the actuation point, mimicking the heavy, tactile feel of the original Lisa keyboard while offering the precision of a modern mechanical deck.

### 4. Samsung EVO Select 512GB MicroSD
**Approximate Price: $35**
While the original Lisa struggled with 5MB hard drives, you’ll need a reliable high-speed SD card to store your core files, ROMs, and disk images. The Samsung EVO Select provides the stability needed for the frequent read/write cycles of an FPGA OS.

## The Challenges of Modernizing the Lisa

One of the biggest hurdles in this project was the Lisa’s display. The original monitor had a resolution of 720x364 with a very specific refresh rate. Translating this to modern 4K or 1440p monitors requires sophisticated scaling algorithms built into the FPGA code. The developer implemented a custom "pixel-doubling" technique that preserves the look of the original phosphor glow while ensuring the image is crisp on a modern OLED panel.

Furthermore, the Lisa used a unique parity-checked memory system. In 1983, RAM was unreliable, so Apple included extra hardware to check for errors. Replicating this in an FPGA requires simulating the "errors" and "checks" to ensure the software doesn't crash, a level of detail that software emulators often skip.

## Why We Still Care About the Lisa in 2025

You might ask why anyone would spend hundreds of hours recreating a computer that was a market failure. The answer lies in the DNA of modern computing. Every time you drag a file into a folder or click an icon on your smartphone, you are using interface concepts that were first refined on the Apple Lisa. By preserving the hardware in a modern, indestructible format like FPGA, we ensure that the history of the GUI isn't lost to the "bit rot" of decaying circuit boards and leaking capacitors.

## Our Verdict: The Bottom Line

This FPGA recreation of the Apple Lisa is more than just a hobbyist project; it is a masterclass in PC hardware engineering. It proves that even the most complex, proprietary systems of the past can be rescued from the brink of extinction using modern programmable logic.

**Pros:**
* Cycle-accurate hardware reproduction.
* Eliminates the need for fragile, expensive vintage hardware.
* Provides a lag-free experience that software emulation cannot match.

**Cons:**
* High barrier to entry (requires knowledge of FPGA flashing).
* The Terasic DE10-Nano has seen significant price increases since its launch.

**Final Thought:** If you are a hardware enthusiast who values the history of the PC, investing in an FPGA setup like the MiSTer is the best move you can make in 2025. Whether you're cloning a Lisa or just playing pixel-perfect arcade games, this technology is the ultimate bridge between the silicon of yesterday and the speeds of tomorrow.

---UK---

## Цифрове воскресіння забутої ікони

У стрімкому світі 2025 року, де ми вимірюємо продуктивність у терафлопсах і нейронних процесорах, спостерігається зростаючий рух, спрямований у минуле. Apple Lisa, випущений у 1983 році, був легендарним провалом, який проклав шлях для Macintosh. Це був перший комерційний комп’ютер із графічним інтерфейсом користувача (GUI) та мишею, але його приголомшлива ціна у 9 995 доларів (майже 30 000 доларів сьогодні) прирекла його на забуття. Протягом десятиліть Lisa була «святим Граалем» для колекціонерів, часто опиняючись на звалищах або у сховищах із клімат-контролем.

Однак світ ПК-заліза щойно став свідком вражаючого подвигу «цифрової археології». Відданий ентузіаст успішно відтворив усю апаратну архітектуру Apple Lisa за допомогою програмованої логічної інтегральної схеми (FPGA). Це не просто програмна емуляція, яку можна знайти на сучасному ПК; це точна реконструкція логіки оригіна��ьної машини на рівні вентилів, що дозволяє запускати оригінальне програмне забезпечення Lisa OS з точністю 1:1 на рівні заліза.

## Чому FPGA — це майбутнє ретро-заліза

Щоб зрозуміти важливість цього проєкту, потрібно поглянути на різницю між емуляцією та реалізацією на FPGA. Коли ви запускаєте емулятор на сучасному Windows або Mac, ви використовуєте програмний рівень, щоб «обманути» код, змусивши його думати, що він працює на оригінальному залізі. Це часто призводить до затримок введення, переривань звуку та неточностей у часі.

Технологія FPGA, зокрема плата Terasic DE10-Nano, що використовується в проєкті MiSTer, працює інакше. Замість виконання коду, FPGA переконфігурує свої внутрішні логічні вентилі, щоб фізично стати тим залізом, яке вона імітує. Відтворивши п��оцесор Motorola 68000, кастомний MMU (блок керування пам’яттю) та унікальну відеосхему Lisa, цей ентузіаст фактично побудував абсолютно новий Apple Lisa, який поміщається на долоні.

## Реплікація дисковода «Twiggy» та 5-мегагерцової логіки

Apple Lisa була надзвичайно складною. Вона мала злощасні 5,25-дюймові дисководи «Twiggy», які часто виходили з ладу, та унікальну відеопідсистему з прямокутними пікселями — кошмар для відтворення на сучасних дисплеях. Ентузіаст, що стоїть за цим клоном, витратив місяці на перенесення пропрієтарних апаратних компонентів Lisa у Verilog — мову опису апаратури.

Результатом стала машина, яка завантажується в Lisa Office System 7/7, підтримує оригінальну метафору робочого столу з іконками «Кошик» та «Налаштування», і навіть працює зі спеціалізованими додатками LisaDraw та LisaWrite. Вперше за понад 40 років дослідники та любителі можуть взаємодіяти з робочим процесом Lisa, не ризикуючи крихкими компонентами вінтажного пристрою вартістю 20 000 доларів.

## Створення власної ретро-сучасної робочої станції у 2025 році

Якщо цей проєкт надихнув вас поринути у світ клонування заліза та висококласних ретро-збірок, вам не обов’язково бути інженером напівпровідників. Екосистема «MiSTer» зробила FPGA-геймінг та обчислення доступними для широкої публіки. Ось основні компоненти, необхідні для створення модернізованої версії класичної машини сьогодні:

### 1. Комплект Terasic DE10-Nano
**Орієнтовна ціна: $220**
Це серце будь-якого FPGA-проєкту. Він оснащений Cyclone V SoC, що містить програмовані логічні вентилі, необхідні для реплікації всього: від Apple Lisa до Commodore 64 або Sony PlayStation 1. Це золотий стандарт збереження заліза у 2025 році.

### 2. Плата введення-виведення MiSTer I/O Board v6.1 (з охолодженням Noctua)
**Орієнтовна ціна: $65**
Щоб отримати максимум від вашої FPGA, вам потрібна плата введення-виведення. Вона додає слот SDRAM (необхідний для багатьох ядер), вентилятор для охолодження та застарілі відеовиходи. Ми рекомендуємо використовувати її разом із **вентилятором Noctua NF-A4x10 PWM ($15)**, щоб система залишалася тихою та холодною під час тривалих сеансів цифрової археології.

### 3. Клавіатура Keychron Q1 HE з магнітними перемикачами
**Орієнтовна ціна: $190**
Щоб по-справжньому передати відчуття робочої станції 80-х, зберігаючи продуктивність 2025 року, Keychron Q1 HE — чудовий вибір. Її магнітні перемикачі на ефекті Холла дозволяють налаштовувати точку спрацьовування, імітуючи важке тактильне відчуття оригінальної клавіатури Lisa, пропонуючи при цьому точність сучасної механіки.

### 4. Карта пам'яті Samsung EVO Select 512GB MicroSD
**Орієнтовна ціна: $35**
Хоча оригінальна Lisa мала проблеми з 5-мегабайтними жорсткими дисками, вам знадобиться надійна високошвидкісна SD-карта для зберігання файлів ядер, ROM-файлів та образів дисків. Samsung EVO Select забезпечує стабільність, необхідну для частих циклів читання/запису ОС FPGA.

## Виклики модернізації Lisa

Однією з найбільших перешкод у цьому проєкті був дисплей Lisa. Оригінальний монітор мав роздільну здатність 720x364 з дуже специфічною частотою оновлення. Перенесення цього на сучасні 4K або 1440p монітори вимагає складних алго��итмів масштабування, вбудованих у код FPGA. Розробник реалізував власну техніку «подвоєння пікселів», яка зберігає вигляд оригінального люмінофорного світіння, забезпечуючи при цьому чіткість зображення на сучасній OLED-панелі.

Крім того, Lisa використовувала унікальну систему пам’яті з перевіркою парності. У 1983 році оперативна пам’ять була ненадійною, тому Apple додала додаткове залізо для перевірки помилок. Реплікація цього в FPGA вимагає симуляції «помилок» і «перевірок», щоб програмне забезпечення не вилітало — рівень деталізації, який програмні емулятори часто ігнорують.

## Чому ми все ще цінуємо Lisa у 2025 році

Ви можете запитати, навіщо комусь витрачати сотні годин на відтворення комп’ютера, який став ринковим провалом. Відповідь криється в ДНК сучасних обчислень. Щоразу, коли ви перетягуєте файл у папку або натискаєте на іконку на смартфоні, ви використовуєте концепції інтерфейсу, які вперше були вдосконалені в Apple Lisa. Зберігаючи залізо в сучасному, незнищенному форматі, такому як FPGA, ми гарантуємо, що історія графічного інтерфейсу не буде втрачена через деградацію мікросхем і протікання конденсаторів.

## Наш вердикт: Підсумок

Це відтворення Apple Lisa на FPGA — більше, ніж просто хобі-проєкт; це майстер-клас з інженерії ПК-заліза. Це доводить, що навіть найскладніші пропрієтарні системи минулого можна врятувати від зникнення за допомогою сучасної програмованої логіки.

**Плюси:**
* Точне відтворення апаратури на рівні циклів.
* Усуває потребу в крихкому та дорогому вінтажному залізі.
* Забезпечує роботу без затримок, з якою не зрівняється програмна емуляція.

**Мінуси:**
* Високий поріг входження (потребує знань про прошивку FPGA).
* Ціна на Terasic DE10-Nano значно зросла з моменту випуску.

**Заключна думка:** Якщо ви ентузіаст заліза, який цінує історію ПК, інвестиція в установку FPGA, таку як MiSTer, — це найкращий крок, який ви можете зробити у 2025 році. Незалежно від того, чи клонуєте ви Lisa, чи просто граєте в ідеально відтворені аркадні ігри, ця технологія є найкращим містком між кремнієм минулого та швидкостями майбутнього.
