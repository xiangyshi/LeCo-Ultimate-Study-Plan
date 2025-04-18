---
layout: default
title: 8-Week Study Plan
---

## Month 1: Intensive Coding Practice & Project Kick‑Off

### Week 1 – Focus on Algorithms & Big‑O Fundamentals

| Day       | Time            | Activity                                                                                             | Resource/Notes                                                                                                    | Done |
|-----------|-----------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|:----:|
| Monday    | 9:30–11:00 AM   | • Solve 1–2 medium LeetCode problems (Arrays & Basic DP)<br>• Review Big‑O notation & complexity      | [LeetCode Array Practice](https://leetcode.com/explore/learn/card/array-and-string/)<br>CLRS Ch 2 "Getting Started" | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Project Planning:**<br>- Create repo & draft "Project Plan" section in README<br>- Define Milestone 1 | Draw.io for sketches (`/docs/`); commit README in `/README.md`                                                     | <input type="checkbox">  |
| Tuesday   | 9:30–11:00 AM   | • Solve 2 LeetCode problems (Recursion & Sorting)                                                   | [LeetCode Recursion Tag](https://leetcode.com/tag/recursion/)                                                      | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Document solutions & key insights in Markdown journal<br>• Sketch high‑level architecture          | Update `/notes/solutions.md` and `/docs/architecture.md`                                                           | <input type="checkbox">  |
| Wednesday | 9:30–11:00 AM   | • Solve 2 graph‑related LeetCode problems                                                           | [LeetCode Graph Tag](https://leetcode.com/tag/graph/)                                                             | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Watch Coursera "Algorithms, Part I" Lectures 1–2<br>• Write unit tests for helper functions        | [Algorithms, Part I (Coursera)](https://www.coursera.org/learn/algorithms-part1)<br>PyTest or Jest                   | <input type="checkbox">  |
| Thursday  | 9:30–11:00 AM   | • Tackle 2 DP problems (focus on memoization)                                                       | [NeetCode DP Playlist](https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2GDbgBnYKMHbmN)                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Read CTCDI Ch 1 (Arrays & Strings)<br>• Refactor Week 1 code for readability                       | *Cracking the Coding Interview*, Ch 1                                                                             | <input type="checkbox">  |
|           |                 | **Meetings (bi‑weekly):**<br>10–10:30 AM; 1–2 PM; 5:30–6 PM<br>No library—afternoon study at home.     | Also 8–8:30 AM weekly Scrum                                                                                       | <input type="checkbox">  |
| Friday    | 9:30–11:00 AM   | • Solve 2 mixed LeetCode problems (review Week 1 topics)                                            | [Top Interview Questions](https://leetcode.com/explore/interview/card/top-interview-questions/)                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Project Milestone 1:**<br>- Commit initial scaffolding<br>- Close issue "Milestone 1: Setup repo"   |                                                                                                                   | <input type="checkbox">  |

*Weekend:* Rest or optional 30‑min tutorial.

---

### Week 2 – Algorithm Drills & Detailed Project Planning

| Day       | Time            | Activity                                                                                             | Resource/Notes                                                                                                    | Done |
|-----------|-----------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|:----:|
| Monday    | 9:30–11:00 AM   | • Solve 2 LeetCode problems (Strings & Recursion)                                                   | [LeetCode String Tag](https://leetcode.com/tag/string/)                                                           | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Architecture Design:**<br>- Define modules for `{{PERSONAL_PROJECT_NAME}}`<br>- Sketch diagrams    | Save `/docs/architecture.md`                                                                                     | <input type="checkbox">  |
| Tuesday   | 9:30–11:00 AM   | • Solve 2 "hard" problems (DP/backtracking)                                                          |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Watch "Algorithms, Part II" Lectures<br>• Draft detailed project plan (Objectives, Milestones 1–3) | [Algorithms, Part II (Coursera)](https://www.coursera.org/learn/algorithms-part2)                                  | <input type="checkbox">  |
| Wednesday | 9:30–11:00 AM   | • Solve 2 graph/tree problems                                                                        |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Sketch ER diagram & write initial DB schema                                                        | Commit `/models/`                                                                                                 | <input type="checkbox">  |
| Thursday  | 9:30–11:00 AM   | • Solve 1–2 decomposition challenges                                                                 |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Read CTCDI Ch 2 (Recursion deep dive)<br>• Set up CI (GitHub Actions)                              | *Cracking the Coding Interview*, Ch 2<br>`.github/workflows/ci.yml`                                                | <input type="checkbox">  |
|           |                 | **Meetings (bi‑weekly):**<br>10–10:30 AM; 1–2 PM; 5:30–6 PM                                            | No library                                                                                                        | <input type="checkbox">  |
| Friday    | 9:30–11:00 AM   | • Mixed LeetCode practice (Array, String, Graph)                                                     |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Milestone 2:**<br>- Commit caching layer plan<br>- Close issue "Milestone 2: Caching"              |                                                                                                                   | <input type="checkbox">  |

*Weekend:* Rest or optional review.

---

## Month 2: System Design & DevOps Fundamentals

### Week 3 – Core Patterns & Basic System Design

| Day       | Time            | Activity                                                                                             | Resource/Notes                                                                                                    | Done |
|-----------|-----------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|:----:|
| Monday    | 9:30–11:00 AM   | • Read HFD Patterns: Factory & Singleton                                                             | *Head First Design Patterns* Ch 1–2                                                                               | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Implement Factory & Singleton examples<br>• Commit under `/patterns/`                               |                                                                                                                   | <input type="checkbox">  |
| Tuesday   | 9:30–11:00 AM   | • Read HFD Patterns: Observer & Decorator                                                            | Ch 3–4                                                                                                            | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Apply Observer pattern in project<br>• Commit under `/patterns/observer/`                           |                                                                                                                   | <input type="checkbox">  |
| Wednesday | 9:30–11:00 AM   | • Deep dive: CAP theorem & ACID vs BASE                                                              | [Kleppmann's blog](https://martin.kleppmann.com/)                                                                 | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Sketch replication strategies & save `/docs/replication.png`                                        |                                                                                                                   | <input type="checkbox">  |
| Thursday  | 9:30–11:00 AM   | • Read *Designing Data‑Intensive Apps* Ch 1                                                          |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Add Redis cache to one endpoint<br>• Write integration tests                                        |                                                                                                                   | <input type="checkbox">  |
|           |                 | **Meetings (bi‑weekly):**<br>10–10:30 AM; 1–2 PM; 5:30–6 PM                                            | No library                                                                                                        | <input type="checkbox">  |
| Friday    | 9:30–11:00 AM   | • Quiz: system design patterns & trade‑offs                                                          |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Milestone 3:**<br>- Commit caching feature<br>- Close issue "Milestone 3: Caching"                 |                                                                                                                   | <input type="checkbox">  |

---

### Week 4 – DevOps: Containers, CI/CD, Monitoring

| Day       | Time            | Activity                                                                                             | Resource/Notes                                                                                                    | Done |
|-----------|-----------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|:----:|
| Monday    | 9:30–11:00 AM   | • Docker basics: build/run/tag images                                                               | [Docker "Get Started"](https://docs.docker.com/get-started/)                                                       | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Containerize API layer<br>• Write `Dockerfile`                                                     |                                                                                                                   | <input type="checkbox">  |
| Tuesday   | 9:30–11:00 AM   | • Kubernetes intro: pods & deployments                                                              | [Kubernetes in Action Ch 1](https://www.manning.com/books/kubernetes-in-action)                                    | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Deploy to Minikube<br>• Add health checks                                                         |                                                                                                                   | <input type="checkbox">  |
| Wednesday | 9:30–11:00 AM   | • Prometheus + Grafana basics                                                                        |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Export metrics & build dashboard                                                                   |                                                                                                                   | <input type="checkbox">  |
| Thursday  | 9:30–11:00 AM   | • Read *The Phoenix Project* Ch 1–3                                                                  |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Automate rolling updates in k8s                                                                     |                                                                                                                   | <input type="checkbox">  |
|           |                 | **Meetings (bi‑weekly):**<br>10–10:30 AM; 1–2 PM; 5:30–6 PM                                            | No library                                                                                                        | <input type="checkbox">  |
| Friday    | 9:30–11:00 AM   | • Quiz: CI/CD flow & Kubernetes concepts                                                             |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Milestone 4:**<br>- Commit CI/CD pipeline<br>- Close issue "Milestone 4: DevOps"                   |                                                                                                                   | <input type="checkbox">  |

---

## Month 3: Advanced Topics & Interview Readiness

### Week 5 – Microservices & APIs

| Day       | Time            | Activity                                                                                             | Resource/Notes                                                                                                    | Done |
|-----------|-----------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|:----:|
| Monday    | 9:30–11:00 AM   | • Read *Building Microservices* Ch 1–2                                                               |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Implement User service (CRUD API)                                                                  |                                                                                                                   | <input type="checkbox">  |
| Tuesday   | 9:30–11:00 AM   | • Implement Order service<br>• Write contract tests                                                   | Pact or simple integration tests                                                                                  | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Add API gateway (NGINX/Kong)                                                                        |                                                                                                                   | <input type="checkbox">  |
| Wednesday | 9:30–11:00 AM   | • Read resilience patterns (circuit breakers)                                                         |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Implement simple circuit breaker                                                                    |                                                                                                                   | <input type="checkbox">  |
| Thursday  | 9:30–11:00 AM   | • Chaos testing: simulate failure                                                                     |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Meetings (bi‑weekly):**<br>10–10:30 AM; 1–2 PM; 5:30–6 PM                                            | No library                                                                                                        | <input type="checkbox">  |
| Friday    | 9:30–11:00 AM   | • Mock interview: API design                                                                          |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Milestone 5:**<br>- Commit microservices integration<br>- Close issue "Milestone 5: Services"      |                                                                                                                   | <input type="checkbox">  |

---

### Week 6 – Security & Design Patterns Deep Dive

| Day       | Time            | Activity                                                                                             | Resource/Notes                                                                                                    | Done |
|-----------|-----------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|:----:|
| Monday    | 9:30–11:00 AM   | • Read OWASP Top 10 overview                                                                           |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Harden APIs (Injection, XSS)<br>• Add input validation                                              |                                                                                                                   | <input type="checkbox">  |
| Tuesday   | 9:30–11:00 AM   | • Implement OAuth2 / JWT auth                                                                         |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Milestone 6:**<br>- Commit security layer<br>- Close issue "Milestone 6: Security"                |                                                                                                                   | <input type="checkbox">  |
| Wednesday | 9:30–11:00 AM   | • Read *Security Patterns* Ch on secure communications                                                |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Apply Strategy pattern in project                                                                   |                                                                                                                   | <input type="checkbox">  |
| Thursday  | 9:30–11:00 AM   | • Threat modeling for project                                                                          |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Meetings (bi‑weekly):**<br>10–10:30 AM; 1–2 PM; 5:30–6 PM                                            | No library                                                                                                        | <input type="checkbox">  |
| Friday    | 9:30–11:00 AM   | • Security quiz + pen test basics                                                                     |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Refine security documentation                                                                       |                                                                                                                   | <input type="checkbox">  |

---

## Month 4: Capstone Finalization & Interview Polish

### Week 7 – Performance & Scalability

| Day       | Time            | Activity                                                                                             | Resource/Notes                                                                                                    | Done |
|-----------|-----------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|:----:|
| Monday    | 9:30–11:00 AM   | • Read *Web Performance in Action* Ch 1–2                                                            |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Benchmark API endpoints (Locust/JMeter)<br>• Optimize DB queries                                   |                                                                                                                   | <input type="checkbox">  |
| Tuesday   | 9:30–11:00 AM   | • Implement caching strategies (Redis)<br>• Measure improvements                                      |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Milestone 7:**<br>- Commit performance improvements<br>- Close issue "Milestone 7: Performance"    |                                                                                                                   | <input type="checkbox">  |
| Wednesday | 9:30–11:00 AM   | • Sketch sharding strategy & document                                                                |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Implement simple partitioning                                                                       |                                                                                                                   | <input type="checkbox">  |
| Thursday  | 9:30–11:00 AM   | • Profile code for hotspots                                                                           |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Meetings (bi‑weekly):**<br>10–10:30 AM; 1–2 PM; 5:30–6 PM                                            | No library                                                                                                        | <input type="checkbox">  |
| Friday    | 9:30–11:00 AM   | • Mock system design interview                                                                        |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Reflect & document lessons learned                                                                  |                                                                                                                   | <input type="checkbox">  |

---

### Week 8 – Final Mock Interviews & Portfolio Polish

| Day       | Time            | Activity                                                                                             | Resource/Notes                                                                                                    | Done |
|-----------|-----------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|:----:|
| Monday    | 9:30–11:00 AM   | • Timed LeetCode "Top 100" problems (med/hard)                                                        |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Mock combined interview (coding+design+behavioral)                                                  | [Pramp](https://pramp.com)                                                                                        | <input type="checkbox">  |
| Tuesday   | 9:30–11:00 AM   | • Behavioral prep (STAR method)                                                                       |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Resume & LinkedIn final edits                                                                       |                                                                                                                   | <input type="checkbox">  |
| Wednesday | 9:30–11:00 AM   | • Portfolio site polish & demo video                                                                  |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Final mock interview of the week                                                                     |                                                                                                                   | <input type="checkbox">  |
| Thursday  | 9:30–11:00 AM   | • Research & apply to 5 target roles                                                                   |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | **Meetings (bi‑weekly):**<br>10–10:30 AM; 1–2 PM; 5:30–6 PM                                            | No library                                                                                                        | <input type="checkbox">  |
| Friday    | 9:30–11:00 AM   | • Reflect on 8‑week journey & plan next steps                                                         |                                                                                                                   | <input type="checkbox">  |
|           | 1:00–4:30 PM    | • Celebrate progress & rest                                                                            |                                                                                                                   | <input type="checkbox">  |
