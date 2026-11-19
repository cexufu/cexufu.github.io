---
layout: post
title: What this blog is for
date: 2026-11-19 09:00:00+0000
description: Why I'm writing about LLM internals and AI governance in the same place.
tags: interpretability governance
categories: foundations
related_posts: false
---

This blog sits between two things I've worked on: the safety and governance of AI products in industry, and the internals of large language models in research.

They can look like two different audiences. One asks how a model computes its output; the other asks what rules a platform or a regulator should set. I think they share one question:

> **What can we actually verify about a model's behaviour, and what does that mean for the people who have to govern it?**

Interpretability is one of the few ways to answer the first half with evidence rather than with a model's own description of itself. Governance is where those answers end up being used, whether as review standards, audits or monitoring systems.

## What I plan to write

- **Foundations.** How information moves through a transformer, written from the perspective of tracing rather than architecture.
- **Methods and schools.** A map of the main approaches to interpretability and attribution, and the question each one actually answers.
- **Evaluation.** What faithfulness, completeness, plausibility and sufficiency mean, how they are measured, and where the measurements break.
- **Paper notes.** Careful walkthroughs of the mathematics behind key methods.
- **Policy review.** Industry practice and public incident cases, including how AIGC rules and platform standards work in practice, explained for readers who have not seen them from the inside.

One rule I'll try to keep throughout: separate what a paper claims, what the evidence supports, and what is still a hypothesis.
