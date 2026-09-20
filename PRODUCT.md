# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: existing Next.js App Router project with TypeScript and Tailwind CSS

## Users

Primary users are small teams, independent operators, and non-technical business roles who have repetitive, scattered, or under-served workflows and need a practical way to improve them.

## Product Purpose

This personal service site helps visitors recognize a costly or repetitive business problem, understand a lightweight AI-assisted solution, and start a conversation for a scoped proof of concept.

## Positioning

Translate vague, long-tail workflow problems into usable AI tools, automations, and front-end experiences without requiring a large software project.

## Operating Context

Visitors arrive from search, social short videos, referrals, or direct links. They scan problem-focused solution pages, review examples, and contact the developer to describe their current process.

## Capabilities and Constraints

The site will present problem-focused solution pages, case-study placeholders that must not invent client claims, interactive or visual demos where available, and a clear contact path. The project is an existing Next.js App Router application. Business facts such as named clients, pricing, performance benchmarks, and testimonials remain undecided and must not be fabricated.

## Evidence on Hand

The repository currently contains a localized Next.js service site with four problem-focused solution examples and a synthetic case-study page. No verified client case studies, testimonials, or commercial benchmarks are on hand yet.

## Product Principles

- Start with the visitor's workflow and pain, not the implementation stack.
- Make small, testable improvements easier to buy than a large transformation.
- Show the mechanism with concrete examples and honest limits.
- Keep the first conversation simple for non-technical visitors.

## Accessibility & Inclusion

The site should be usable on mobile, support keyboard navigation and visible focus states, use readable contrast, and avoid requiring technical vocabulary to understand or contact the service.

## Current Implementation

- The root route detects a preferred locale and redirects to `/zh`, `/en`, `/de`, `/ja`, or `/es`.
- `middleware.ts` checks the `site-locale` cookie first, then the browser `Accept-Language` header, and falls back to English.
- The App Router serves localized home, solution index, solution detail, and cases pages.
- Solution content is modeled in `app/lib/solutions.ts`; interface and localized copy live in `app/lib/i18n.ts`.
- `sitemap.ts`, `robots.ts`, localized metadata, canonical URLs, and a dynamic Open Graph image provide the initial SEO/GEO foundation.
- The contact action currently opens `mailto:hello@guoxuzhi.email`; there is no form submission or CRM integration yet.

## User Flow

1. A visitor arrives from search, social content, a referral, or a direct link.
2. The site shows content in the visitor's selected or detected language.
3. The visitor scans a problem-focused solution page and compares the described workflow with their own situation.
4. The visitor opens an email conversation to describe the current process and discuss a small proof of concept.

## Technical Decisions

- Static, code-managed content keeps the first version fast, reviewable, and easy to deploy.
- Stable ASCII slugs make localized pages shareable and avoid coupling URLs to translated copy.
- The page structure leads with the business problem and expected change; implementation details are secondary.
- The visual system uses a restrained Apple-inspired layout so the site reads as a professional service rather than a developer portfolio.

## Deployment

The project targets Vercel and Node.js 24.x. `package.json`, `package-lock.json`, and `.nvmrc` declare the runtime expectation. No required runtime environment variables exist in the current version.

## Known Limitations

- The cases page contains synthetic demonstration material and must not imply client results.
- There is no CMS, analytics pipeline, lead form, scheduling flow, authentication, database, payment, or backend API.
- Adding a solution or language requires editing repository data and deploying a new build.
