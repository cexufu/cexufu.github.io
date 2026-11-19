---
layout: post
title: Why mechanistic governance
date: 2026-11-19 09:00:00+0000
description: Governance questions that can only be answered from inside the model.
tags: governance interpretability
categories: foundations
related_posts: false
---

Most AI governance work happens at the level of rules: what a platform allows, what a regulator requires, what a review standard says. I spent several years writing and applying rules like these, most recently for AIGC and AI-agent products. Many of the hardest questions in that work were not really about rules, though. They were about mechanisms.

Where did this generated claim come from? Did confidential input end up in the output? When a safety instruction is added, does the model's behaviour actually change, or only its wording? These are governance questions, but the evidence that answers them lives inside the model and inside the code that runs it.

That is what this blog is about:

> **Using source-level and code-level evidence to answer real AI governance problems.**

By source-level I mean tracing outputs back to the inputs and internal computations that produced them. By code-level I mean evidence that comes from running the system, such as ablations, interventions and reproducible experiments, rather than from a model's own description of what it did.

## What I plan to write

- **Foundations.** How information moves through a transformer, written from the perspective of tracing rather than architecture.
- **Methods.** A map of the main approaches to interpretability and attribution, and the governance question each one can and cannot answer.
- **Evaluation.** What faithfulness, completeness, plausibility and sufficiency mean, how they are measured, and where the measurements break.
- **Paper notes.** Careful walkthroughs of the mathematics behind key methods.
- **Policy review.** Industry practice and public incident cases, including how AIGC rules and platform standards work in practice, explained for readers who have not seen them from the inside.

One rule I'll try to keep throughout: separate what a paper claims, what the evidence supports, and what is still a hypothesis.
