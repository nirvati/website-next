---
title: Nirvati 0.3.0
description: Restart apps, view logs, and more
date: 2025-08-23
authors:
    - name: Aaron Dewes
badge: Release
sitemap:
  loc: /blog/introducing-nirvati-0-3-0
  lastmod: 2025-08-23
  changefreq: monthly
  priority: 0.8
ogImage:
  component: NirvatiOgImage
  props:
    title: Nirvati 0.3.0
    description: Restart apps, view logs, and more
---

Today, I'm announcing **Nirvati 0.3.0**. This release fixes various bugs in Nirvati 0.2.0, but also introduces a few new features.

## New features

### App status

You can now directly see if apps are running or experiencing issues from the dashboard. Each app gets a green indication dot to indicate it's running, or an orange dot if there are problems. We are planning to offer more details on the app status in a future update and make this more accessible to people with color blindness or using screen readers.

![Dashboard](/blog/0-3-0/en/dashboard.png)

### Restarting apps

Nirvati 0.3.0 adds the ability to restart apps directly from the dashboard. You can now quickly restart any app if it gets stuck. Through the restart menu, you can also restart the storage layer if an app is experiencing issues.

![Restarting apps](/blog/0-3-0/en/context-menu.png)

### View apps logs

Nirvati 0.3.0 introduces a new logs viewer that allows you to see the logs for each app directly from the dashboard. This makes it easier to diagnose issues and understand what's happening inside your apps.

![View apps logs](/blog/0-3-0/en/logs.png)

### Markdown descriptions in apps

App developers can now write descriptions for their apps in markdown, making it easier to write good-looking documentation.

## Bug fixes 

In addition, various bugs have been fixed. I won't explain them in detail, but here's the full list:

- Fixed an issue where DNS over TCP was wrongly blocked, leading to network problems in many apps
- Fixed a security issue where any user could suspend system apps
- Fixed an issue where repository metadata was not updated during app downloads, leading to empty repository names or descriptions being displayed
- Fixed an issue causing app downloads from git repos to rely on the distribution version instead of the n5i version
- Fixed an issue where custom resource plugins could not be found because the code tried to check for an invalid name
- Fixed an issue where permissions that rely on virtual apps could not be resolved
- Fixed an issue that caused data preloading for an app to check for the wrong directory
- Improved error messages when an app.yml fails to load

## What's next

I'm currently working on Nirvati 0.4.0, which will bring a few exciting new features:

- **App bundles:** This feature will allow developers to create bundles that package multiple apps together, making it easier to manage and deploy related apps.
- **Multiple instances of apps:** This will allow you to install multiple instances of certain apps, each with its own configuration and data.

In addition, I'm also working on the "My Nirvati" service and a new set-up experience to make it easier for users to get started with Nirvati.
