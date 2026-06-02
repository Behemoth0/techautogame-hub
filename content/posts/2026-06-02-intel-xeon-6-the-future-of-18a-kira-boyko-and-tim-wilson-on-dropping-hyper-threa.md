---
title: "Intel Xeon 6 & The Future of 18A: Kira Boyko and Tim Wilson on Dropping Hyper-Threading and Clearwater Forest (2025 Deep Dive)"
titleUk: "Intel Xeon 6 & The Future of 18A: Kira Boyko and Tim Wilson on Dropping Hyper-Threading and Clearwater Forest (2025 Deep Dive)"
excerpt: "Inside Intel's massive architectural shift: Kira Boyko and Tim Wilson discuss Xeon 6, 18A wafer allocation, and why hyper-threading is finally dead."
excerptUk: "Inside Intel's massive architectural shift: Kira Boyko and Tim Wilson discuss Xeon 6, 18A wafer allocation, and why hyper-threading is finally dead."
category: pc-hardware
date: 2026-06-02
image: "https://images.unsplash.com/photo-1673470609632-394851a7c77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTQxNzV8MHwxfHNlYXJjaHwxfHxJbnRlbCUyMFhlb24lMjA2JTIwJTI2JTIwVGhlJTIwRnV0dXJlJTIwb2YlMjAxOEElM0ElMjBLaXJhJTIwQm95a28lMjBhbmQlMjBUaW0lMjBXaWxzb24lMjBvbiUyMERyb3BwaW5nJTIwSHlwZXItVGhyZWFkaW5nJTIwYW5kJTIwQ2xlYXJ3YXRlciUyMEZvcmVzdCUyMCUyODIwMjUlMjBEZWVwJTIwRGl2ZSUyOSUyMHBjLWhhcmR3YXJlfGVufDB8MHx8fDE3ODA0MDQwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&w=1200&q=80"
tags: ["pc-hardware", "Intel Xeon 6", "Intel 18A", "Clearwater Forest", "CPUs"]
readTime: 6
isNew: true
amazonTag: "techautogame-20"
---

## Introduction: The Enterprise Pivot at Computex

At Computex, the atmosphere in the enterprise halls was electric, but the real action happened behind closed doors. We sat down at a roundtable interview with two of Intel's brightest minds: Kira Boyko, Vice President of Xeon Product Management, and Tim Wilson, Intel Fellow and Lead Architect for Next-Gen Xeon Platforms. 

The conversation didn't pull any punches. With Intel facing intense pressure from AMD's EPYC lineup and the rapid rise of custom ARM silicon in the cloud, the duo laid out a transparent, aggressive roadmap for Xeon 6, the upcoming Clearwater Forest architecture, and the highly anticipated Intel 18A process node. Crucially, they addressed two of the biggest talking points in the industry: how Intel is managing its highly sought-after 18A wafer allocation and the architectural decision to drop hyper-threading.

Here is our comprehensive breakdown of the roundtable interview, the technical implications of their strategy, and what this means for the enterprise hardware landscape in 2025 and beyond.

---

## Dropping Hyper-Threading: Why Intel is Moving On

For over two decades, Intel's Hyper-Threading (HT) technology has been a staple of both consumer and enterprise computing. By allowing a single physical core to execute two threads simultaneously, HT provided a cheap, efficient way to boost multi-threaded performance. 

So, why is Intel dropping hyper-threading on its latest E-core (Efficient-core) Xeon 6 processors (formerly Sierra Forest), and planning a similar architectural shift for client platforms? 

Tim Wilson explained that the decision comes down to raw efficiency and physical silicon area. "In the early 2000s, adding the execution pipelines and registers for Hyper-Threading was incredibly area-efficient compared to building a second physical core," Wilson noted. "But today, our E-cores are so small and power-efficient that the silicon real estate required to implement hyper-threading is better spent on simply adding more physical cores."

Furthermore, Wilson pointed out that modern cloud workloads—especially containerized microservices and virtual machine hosting—prefer physical core isolation. In a multi-tenant cloud environment, sharing execution resources via hyper-threading introduces security risks (like side-channel attacks) and leads to "noisy neighbor" performance variance. By offering up to 288 physical E-cores in a single Xeon 6 socket without hyper-threading, Intel provides predictable, highly secure, and linear performance scaling.

---

## The Intel 18A Wafer Allocation Dilemma

Intel's turnaround strategy hinges on its IDM 2.0 model, which splits the company into Intel Products and Intel Foundry. The crown jewel of this strategy is the Intel 18A (1.8nm-class) process node, which introduces RibbonFET gate-all-around transistors and PowerVia backside power delivery.

During the roundtable, Kira Boyko was asked a tough question: How will Intel allocate precious 18A wafers between its internal products (like the upcoming Clearwater Forest Xeons) and external foundry customers (like Microsoft and the US Department of Defense)?

"It's a balancing act, but we are executing with strict separation," Boyko clarified. "Intel Foundry operates as an independent business unit. External customers get the same access to the PDKs (Process Design Kits) and wafer capacity as our internal teams. That said, Clearwater Forest is our lead product on 18A. We are using our own massive volume to ramp the node, prove the yields, and mature the packaging technologies so that external customers can design for 18A with absolute confidence."

Boyko's statement reveals a clever strategy: Intel is using its enterprise Xeon division to absorb the initial high costs and yield-learning curves of the 18A node, clearing the path for high-margin external foundry contracts later on.

---

## Clearwater Forest: The 18A Showpiece

Following Xeon 6, the next major milestone is Clearwater Forest, scheduled to debut in late 2025. This will be the first major server processor built on the Intel 18A node. 

According to Wilson, Clearwater Forest is not just a node shrink; it is a packaging marvel. It will utilize 3D stacking via Foveros Direct technology, placing high-density E-core compute dies directly on top of a base system die containing I/O and cache. This vertical integration drastically reduces latency and power consumption while allowing Intel to pack an unprecedented number of cores into a single package.

Clearwater Forest is aimed squarely at scale-out cloud workloads, high-density virtualization, and massive database applications. By combining 18A's power efficiency with the lack of hyper-threading, Intel hopes to reclaim the performance-per-watt crown from AMD and ARM-based competitors.

---

## Top Enterprise Hardware Picks for 2025

While we wait for Clearwater Forest to hit the market, IT decision-makers and workstation enthusiasts need high-performance hardware today. Based on the current architecture discussed at the roundtable, here are our top enterprise and high-end desktop (HEDT) product recommendations.

### 1. Intel Xeon w9-3495X Workstation Processor
* **Estimated Price:** ~$5,900
* **Why buy it:** If you cannot wait for Xeon 6's widespread platform availability and need ultimate workstation performance today, the w9-3495X is a monster. Featuring 56 P-cores, 112 threads, and support for up to 4TB of DDR5 ECC memory, this is the gold standard for local AI training, 3D rendering, and compiling massive codebases.

### 2. AMD EPYC 9654 "Genoa" Server Processor
* **Estimated Price:** ~$11,500
* **Why buy it:** The direct competitor to Intel's high-core-count Xeons. With 96 Zen 4 cores and 192 threads, the EPYC 9654 remains a powerhouse for virtualization density and high-performance computing (HPC) environments. It forces Intel to innovate rapidly with their upcoming Xeon 6 line.

### 3. Intel Xeon Silver 4514Y (Emerald Rapids)
* **Estimated Price:** ~$1,050
* **Why buy it:** For mid-sized businesses looking for reliable, modern server hardware without five-figure price tags, this 16-core, 32-thread CPU offers excellent energy efficiency, built-in AI accelerators (AMX), and robust security features for edge computing and local database hosting.

### 4. ASUS Pro WS W790E-SAGE SE Motherboard
* **Estimated Price:** ~$1,050
* **Why buy it:** The ultimate foundation for any modern Intel Xeon workstation. It supports PCIe Gen 5, features robust VRMs for extreme stability under sustained workloads, and offers IPMI remote management capabilities—essential for enterprise deployments.

---

## Our Verdict: The Bottom Line

Intel’s roundtable at Computex painted a picture of a company that has stopped playing defense. By dropping hyper-threading, Intel is acknowledging that the metrics of computing have changed; efficiency, security, and physical core count now reign supreme over logical thread tricks.

Furthermore, the commitment to the 18A node via Clearwater Forest shows that CEO Pat Gelsinger's "five nodes in four years" plan is entering its final, most critical phase. If Intel can deliver Clearwater Forest on time in late 2025 with the yields they are promising, they will not only revitalize their Xeon server business but also establish Intel Foundry as a genuine threat to TSMC's monopoly.

For enterprise buyers, the message is clear: Xeon 6 represents a highly specialized, efficient fork in the road. Choose E-cores (Sierra Forest) for massive scale-out cloud workloads, and look forward to P-cores (Granite Rapids) for raw computing horsepower. The future of Intel silicon is modular, highly efficient, and incredibly dense.

---UK---

## Introduction: The Enterprise Pivot at Computex

At Computex, the atmosphere in the enterprise halls was electric, but the real action happened behind closed doors. We sat down at a roundtable interview with two of Intel's brightest minds: Kira Boyko, Vice President of Xeon Product Management, and Tim Wilson, Intel Fellow and Lead Architect for Next-Gen Xeon Platforms. 

The conversation didn't pull any punches. With Intel facing intense pressure from AMD's EPYC lineup and the rapid rise of custom ARM silicon in the cloud, the duo laid out a transparent, aggressive roadmap for Xeon 6, the upcoming Clearwater Forest architecture, and the highly anticipated Intel 18A process node. Crucially, they addressed two of the biggest talking points in the industry: how Intel is managing its highly sought-after 18A wafer allocation and the architectural decision to drop hyper-threading.

Here is our comprehensive breakdown of the roundtable interview, the technical implications of their strategy, and what this means for the enterprise hardware landscape in 2025 and beyond.

---

## Dropping Hyper-Threading: Why Intel is Moving On

For over two decades, Intel's Hyper-Threading (HT) technology has been a staple of both consumer and enterprise computing. By allowing a single physical core to execute two threads simultaneously, HT provided a cheap, efficient way to boost multi-threaded performance. 

So, why is Intel dropping hyper-threading on its latest E-core (Efficient-core) Xeon 6 processors (formerly Sierra Forest), and planning a similar architectural shift for client platforms? 

Tim Wilson explained that the decision comes down to raw efficiency and physical silicon area. "In the early 2000s, adding the execution pipelines and registers for Hyper-Threading was incredibly area-efficient compared to building a second physical core," Wilson noted. "But today, our E-cores are so small and power-efficient that the silicon real estate required to implement hyper-threading is better spent on simply adding more physical cores."

Furthermore, Wilson pointed out that modern cloud workloads—especially containerized microservices and virtual machine hosting—prefer physical core isolation. In a multi-tenant cloud environment, sharing execution resources via hyper-threading introduces security risks (like side-channel attacks) and leads to "noisy neighbor" performance variance. By offering up to 288 physical E-cores in a single Xeon 6 socket without hyper-threading, Intel provides predictable, highly secure, and linear performance scaling.

---

## The Intel 18A Wafer Allocation Dilemma

Intel's turnaround strategy hinges on its IDM 2.0 model, which splits the company into Intel Products and Intel Foundry. The crown jewel of this strategy is the Intel 18A (1.8nm-class) process node, which introduces RibbonFET gate-all-around transistors and PowerVia backside power delivery.

During the roundtable, Kira Boyko was asked a tough question: How will Intel allocate precious 18A wafers between its internal products (like the upcoming Clearwater Forest Xeons) and external foundry customers (like Microsoft and the US Department of Defense)?

"It's a balancing act, but we are executing with strict separation," Boyko clarified. "Intel Foundry operates as an independent business unit. External customers get the same access to the PDKs (Process Design Kits) and wafer capacity as our internal teams. That said, Clearwater Forest is our lead product on 18A. We are using our own massive volume to ramp the node, prove the yields, and mature the packaging technologies so that external customers can design for 18A with absolute confidence."

Boyko's statement reveals a clever strategy: Intel is using its enterprise Xeon division to absorb the initial high costs and yield-learning curves of the 18A node, clearing the path for high-margin external foundry contracts later on.

---

## Clearwater Forest: The 18A Showpiece

Following Xeon 6, the next major milestone is Clearwater Forest, scheduled to debut in late 2025. This will be the first major server processor built on the Intel 18A node. 

According to Wilson, Clearwater Forest is not just a node shrink; it is a packaging marvel. It will utilize 3D stacking via Foveros Direct technology, placing high-density E-core compute dies directly on top of a base system die containing I/O and cache. This vertical integration drastically reduces latency and power consumption while allowing Intel to pack an unprecedented number of cores into a single package.

Clearwater Forest is aimed squarely at scale-out cloud workloads, high-density virtualization, and massive database applications. By combining 18A's power efficiency with the lack of hyper-threading, Intel hopes to reclaim the performance-per-watt crown from AMD and ARM-based competitors.

---

## Top Enterprise Hardware Picks for 2025

While we wait for Clearwater Forest to hit the market, IT decision-makers and workstation enthusiasts need high-performance hardware today. Based on the current architecture discussed at the roundtable, here are our top enterprise and high-end desktop (HEDT) product recommendations.

### 1. Intel Xeon w9-3495X Workstation Processor
* **Estimated Price:** ~$5,900
* **Why buy it:** If you cannot wait for Xeon 6's widespread platform availability and need ultimate workstation performance today, the w9-3495X is a monster. Featuring 56 P-cores, 112 threads, and support for up to 4TB of DDR5 ECC memory, this is the gold standard for local AI training, 3D rendering, and compiling massive codebases.

### 2. AMD EPYC 9654 "Genoa" Server Processor
* **Estimated Price:** ~$11,500
* **Why buy it:** The direct competitor to Intel's high-core-count Xeons. With 96 Zen 4 cores and 192 threads, the EPYC 9654 remains a powerhouse for virtualization density and high-performance computing (HPC) environments. It forces Intel to innovate rapidly with their upcoming Xeon 6 line.

### 3. Intel Xeon Silver 4514Y (Emerald Rapids)
* **Estimated Price:** ~$1,050
* **Why buy it:** For mid-sized businesses looking for reliable, modern server hardware without five-figure price tags, this 16-core, 32-thread CPU offers excellent energy efficiency, built-in AI accelerators (AMX), and robust security features for edge computing and local database hosting.

### 4. ASUS Pro WS W790E-SAGE SE Motherboard
* **Estimated Price:** ~$1,050
* **Why buy it:** The ultimate foundation for any modern Intel Xeon workstation. It supports PCIe Gen 5, features robust VRMs for extreme stability under sustained workloads, and offers IPMI remote management capabilities—essential for enterprise deployments.

---

## Our Verdict: The Bottom Line

Intel’s roundtable at Computex painted a picture of a company that has stopped playing defense. By dropping hyper-threading, Intel is acknowledging that the metrics of computing have changed; efficiency, security, and physical core count now reign supreme over logical thread tricks.

Furthermore, the commitment to the 18A node via Clearwater Forest shows that CEO Pat Gelsinger's "five nodes in four years" plan is entering its final, most critical phase. If Intel can deliver Clearwater Forest on time in late 2025 with the yields they are promising, they will not only revitalize their Xeon server business but also establish Intel Foundry as a genuine threat to TSMC's monopoly.

For enterprise buyers, the message is clear: Xeon 6 represents a highly specialized, efficient fork in the road. Choose E-cores (Sierra Forest) for massive scale-out cloud workloads, and look forward to P-cores (Granite Rapids) for raw computing horsepower. The future of Intel silicon is modular, highly efficient, and incredibly dense.
