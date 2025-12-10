---
title: A new website & Nirvati 0.9.0 status
description: A short update on what's next
date: 2025-12-10
authors:
    - name: Aaron Dewes
badge: Dev Status
sitemap:
  loc: /blog/introducing-nirvati-0-9-0
  lastmod: 2025-12-10
  changefreq: monthly
  priority: 0.8
ogImage:
  component: NirvatiOgImage
  props:
    title: A new website & Nirvati 0.9.0 status
    description: A short update on what's next
---

As you may have noticed if you're reading this blog post, we've made significant design changes to the Nirvati website. The new design aims to better communicate what Nirvati is for, and we hope you like the new look as much as we do!

Most of the design work was done by [1tickle](https://1tickle.xyz), and we are very grateful for their work on this project.

If you have any feedback, please let us know!

I also want to share the current development status of Nirvati 0.9.0 and what to expect in the coming months, as well as some insights into the future of Nirvati beyond 0.9.0.

## Current status

Nirvati 0.9.0 will introduce a few major new features. Most of the technical work behind these features is already done, but there are still a few things left to polish and test before the release, which is planned for early 2026.

### A new server overview


![Server overview](/blog/0-9-0-dev-update/servers.png)

Nirvati 0.9.0 will introduce the first version of multi-server support. This means that you will be able to distribute your apps across multiple servers, improving performance and reliability.

The new server overview will also allow you to shut down and restart individual servers, as well as see full resource usage per server.

This is mostly ready, but still needs UI improvements and further testing.

### A new base operating system

Nirvati 0.9.0 will introduce a new base operating system. This will be a custom Linux distribution built specifically for Nirvati, which should improve performance and security. It will also improve support for system updates and hopefully make it easier to add support for new hardware in the future. The new OS will also make the download size of Nirvati smaller, which is always a good thing.

This is not yet ready, so it's the main thing left to do before the release of Nirvati 0.9.0. 

### Nirvati Connect

Previously, Nirvati included Tailscale as a built-in VPN solution. While Tailscale is great and we will continue to support it, we have decided to build our own VPN solution called Nirvati Connect. Nirvati Connect will be tightly integrated with Nirvati and provide a better user experience. Most notably, it will make it easier to use your nirvati.me subdomain from your local network without any additional configuration, while still allowing remote access via the VPN, which required some manual setup with Tailscale.

Nirvati Connect is a fork of [NetBird](https://netbird.io), an open source VPN solution. We have made several improvements to the codebase to make it work better with Nirvati, and are working on further improvements.

The client is already in a usable state for Linux and Android. The Linux client has been published as a Debian and RPM package repository. Other formats are planned for the future. The Android app is available on [Google Play](https://play.google.com/store/apps/details?id=eu.nirvati.connect), with F-Droid coming soon.

**Please note:** This client is not particularly useful until Nirvati 0.9.0 is released.

Support for other platforms is mostly ready, but still needs testing.

## What's left to do

Apart from polishing and testing the new features, there are a few other things left to do before the release:

- **Get approved by Apple**: Because Nirvati Connect requires a VPN client so you can use it, we need to get the app approved by Apple for publishing to iOS and macOS devices. This process can take some time, so we are starting it as soon as possible.
- **Obtain a code signing certificate**: To distribute Nirvati Connect on Windows, we need to obtain a code signing certificate. This will help prevent security warnings when users install the app.
