---
title: Nirvati 0.6.0
description: Metrics, performance improvements, and more
date: 2025-10-21
authors:
    - name: Aaron Dewes
badge: Release
sitemap:
  loc: /blog/introducing-nirvati-0-6-0
  lastmod: 2025-10-21
  changefreq: monthly
  priority: 0.8
ogImage:
  component: NirvatiOgImage
  props:
    title: Nirvati 0.6.0
    description: Metrics, performance improvements, and more
---

Today, I'm announcing **Nirvati 0.6.0**. This release introduces a new metrics page, reduces RAM usage by ~200MB, and fixes a few issues we've had in Nirvati 0.4.0.

You may notice we skipped Nirvati 0.5.0, which is only because the 0.5.0 version had quite a few issues, so I decided to move the release to 0.6.0.

## New features

### Metrics

![Metrics](/blog/0-6-0/metrics.png)

Nirvati 0.6.0 introduces a new metrics page, accessible from the dashboard sidebar. This page provides insights into the resource usage of the apps on your Nirvati instance.

### Better setup experience

The setup experience has been improved in several ways:

- The setup process is now faster.
- You can now resume the setup process if it was interrupted at any point.
- You can see more details about what is happening during the setup process.

We are working on future improvements to the setup experience to make it even easier and faster to get started with Nirvati.

## Performance improvements

Nirvati 0.6.0 includes several performance improvements. Most notably, the RAM usage has been reduced by approximately 200MB. As you can see from the earlier metrics screenshot, the base RAM usage is still around 1.8GB, which we plan to improve further in future releases.

## Other changes

- Nirvati now uses a single ACME account per user instead of per domain
- The `tlsserver` profile is now used for Let's Encrypt
- Internal preparations for supporting 3rd party DNS providers

## Bug fixes

- Avoid permissions being duplicated in various places
- Ingress plugins now have a dedicated permission

## What's next

I'm currently working on Nirvati 0.6.2, which will add support for 3rd party DNS providers. I'm mostly doing this because most Nirvati infrastructure is hosted on Bunny.net, which Nirvati does not currently support. There are also more exciting features planned for Nirvati 0.7.0, but I will share more details about those at a later date.
