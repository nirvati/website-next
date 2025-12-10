---
title: Nirvati 0.4.0
description: Clone apps, permission notifications, and more
date: 2025-09-04
authors:
    - name: Aaron Dewes
badge: Release
sitemap:
  loc: /blog/introducing-nirvati-0-4-0
  lastmod: 2025-09-04
  changefreq: monthly
  priority: 0.8
ogImage:
  component: NirvatiOgImage
  props:
    title: Nirvati 0.4.0
    description: Clone apps, permission notifications, and more
---

Today, I'm announcing **Nirvati 0.4.0**. This release introduces a few new features, and fixes a few issues we've had in Nirvati 0.3.0.

## New features

### Cloning apps

![Cloning apps](/blog/0-4-0/en/clone.png)

Certain apps, like WordPress, can now be cloned. This allows you to create multiple instances of the same app with different configurations. This is useful if you want to run multiple websites, for example.

### Permission notifications on updates

![Permission notifications on updates](/blog/0-4-0/en/update-perms.png)

Sometimes, an updated version of an app may require new permissions. You will now be notified of this when updating an app, and you can review the new permissions before proceeding with the update.

## Bug fixes 

In addition, various bugs have been fixed. I won't explain them in detail, but here's the full list:

- Fixed an issue where some apps could not be updated
- Fixed an issue sometimes causing the dashboard not to load properly if the status for an app failed to load
- Improve various error messages
- Citadel: When getting blocks through the API, also include the last block, this was accidentially skipped
- Citadel: Don't fail if blocks don't have BIP34 information



## What's next

I'm currently working on Nirvati 0.5.0, which will improve the set up experience.

- **Improved onboarding:** We're working on redesigning the setup process to help new users get started with Nirvati more easily.
- **Improved app store:** We want to offer a new experience for the app store, including recommended apps, and an easy way to install common apps together.

In general, I'm now aiming for smaller, more frequent releases to get new features and bug fixes to you faster. 

In addition, I'm also still working on the upcoming "My Nirvati" service.