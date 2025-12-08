---
title: News about Nirvati
description: Nirvati 0.2.0 and much more
date: 2025-08-15
authors:
    - name: Aaron Dewes
badge: Release
sitemap:
  loc: /blog/introducing-nirvati-0-2-0
  lastmod: 2025-08-17
  changefreq: monthly
  priority: 0.8
ogImage:
  component: NirvatiOgImage
  props:
    title: News about Nirvati
    description: Nirvati 0.2.0 and much more
---

In this blog post, I want to share some news about the Nirvati project. There are four major announcements today:

- The release of **Nirvati 0.2.0** and OS images
- Founding of **a company for Nirvati** in Germany
- Introducing **n5i**, the new "core" of Nirvati
- Announcing **My Nirvati**, an upcoming service to enhance your Nirvati experience

## Nirvati 0.2.0

The Nirvati 0.2.0 release, which is available now, is mostly a collection of bug fixes and stability improvements, and also contains all features added since the 0.1.0 release.

Nirvati 0.2.0 comes in 3 "flavours":

- **Standard:** The standard version of Nirvati, powered by Longhorn and K3s.
- **Micro:** Optimized for low RAM usage, powered by local-path-provisioner and a fork of Kubesolo. **Does not support storage management for apps.**
- **Enterprise:** Optimized for larger deployments, this is slightly closer to upstream Kubernetes and better for multi-server deployments. Powered by Longhorn and RKE2.

**Nirvati 0.2.0 can now be downloaded from our website!**
## OS Images

Nirvati 0.2.0 also provides ready-to-use OS images based on Armbian. We currently support the following platforms officially:

- Raspberry Pi 4 and 5
- Generic UEFI boot on x86_64 machines
- Generic UEFI boot on aarch64 machines

We're working on providing support for more devices soon.

## Nirvati UG (haftungsbeschränkt) - The company responsible for Nirvati

I've recently turned 18 and have been able to start a company for further developing Nirvati. The new company is called "Nirvati UG (haftungsbeschränkt)" and is registered in Germany.

This company will be responsible for development of Nirvati, as well as operating services like nirvati.me, My Nirvati (see below), the Nirvati container registry and more.

My goal with this company is to make Nirvati development sustainable and offer optional services to make the Nirvati experience better (without locking any features behind a paywall). I've already set up new infrastructure for the Nirvati container registry that is now much faster and will crash far less often. Also, the old registry deleted old releases to save storage. By moving to a CDN for hosting release images, we no longer will have to do that as often.

This does not mean Nirvati will become paid, and I've taken measures to ensure the code always stays open source and vendor neutral, as explained in the next section.

If you want to support Nirvati, you can now become a Nirvati sponsor on our website, or subscribe to My Nirvati when it launches. Please note that becoming a Nirvati sponsor is currently only available to users in the European Union, but we plan on expanding that soon.
## n5i

n5i is a new project I've started separately to extract the core parts of Nirvati. This is to ensure a vendor-neutral version of Nirvati's code stays available. Most new changes first go here before landing in Nirvati.

It contains most features of Nirvati, but lacks integration with Nirvati.me, and certain storage features. In addition, it does not contain an easy-to-use installer or ready-to-use binaries. Instead, n5i is a source code only project intended for developers.

n5i can also easily be forked by other vendors to provide software similar to Nirvati, but customized for their hardware or online services.

The project's website is currently at https://n5i.dev.

Please note: n5i is also a project currently owned by me. Its GitLab organization and website are not owned by Nirvati UG. If more people contribute to n5i, it will potentially also have a more open model. The goal for this project is to stay as independent as possible from any company.

## My Nirvati

My Nirvati is an upcoming service that will enhance your Nirvati experience. We plan to offer the following services in the future:

- **Access your node from anywhere:** My Nirvati will allow you to directly purchase a domain or bring your own domain that will be connected with your node.
- **Uptime monitoring:** Get notified in case your Nirvati server experiences any issues.
- **Backups:** Create back-ups of the data on your Nirvati server easily.
- **Security monitoring:** Store secure logs of your server with us so any tampering with your server can be detected.
- **Public IP:** For sending emails or running other services, having a dedicated IP address instead of just HTTPS traffic can be a requirement or at least benefical. You'll be able to get a public IP dedicated to your node that is responsible for outbound traffic.

Alternatively to self-hosting, we also plan to provide a managed Nirvati service where we run Nirvati for you. This gives you the flexibility of running any app in our app store without any issues making it accessible or managing the hardware.

The My Nirvati service is currently very early in development. There's also a free plan planned that provides uptime and security monitoring features in a limited capacity. 


## Questions & answers

::accordion

::accordion-item{label="Will Nirvati remain open source?" icon="i-lucide-circle-help"}
I am committed to always keeping Nirvati freely available under the GNU AGPL 3.0. This is a completely free and open source license, while also making it harder to build closed-source forks of our software. The self-hosted Nirvati software will always stay completely free to use and open source.

This commitment is also reflected in the n5i project, which provides the core of Nirvati and most features without integrating with any 3rd party services.
::

::accordion-item{label="Why not a non-profit if you're building open source software?" icon="i-lucide-circle-help"}
I considered starting Nirvati as a non-profit company, but I want to offer certain services through My Nirvati that will make the user experience a lot better. However, these additional services can only be operated on a for-profit basis.

In addition, I hope this for-profit will long-term ensure more funding for the open source development.
::


::accordion-item{label="Will Nirvati require a purchase to use?" icon="i-lucide-circle-help"}
No. Nirvati itself, as well as our nirvati.me subdomain service are planned to always remain free to use.

We will only charge for additional services like My Nirvati, which cost us money to operate. These services will be optional and not required to use Nirvati.
::

::accordion-item{label="Can I also install n5i directly to avoid any integration with your services?" icon="i-lucide-circle-help"}
Currently, there are no ready-to-use binaries and installers for n5i available. However, the source code is public and anyone can use it to build a distribution providing such binaries.

I am considering releasing pure n5i builds, but they even lack the convenience of some free services Nirvati provides, such as the free .nirvati.me subdomains. Nirvati does not require any purchase, so offering pure n5i is not a high priority.
::

::accordion-item{label="When will My Nirvati be available?" icon="i-lucide-circle-help"}
This has not been decided yet and depends on the speed of future development of our service.
::

::accordion-item{label="Can I license Nirvati under a more permissive license?" icon="i-lucide-circle-help"}
No. Nirvati is only available under the AGPL 3.0 (or later). We do not offer more permissive licenses and don't have a CLA, so relicensing will hopefully soon become impossible once we get more contributors. This applies to the entirety of our code, also to the upcoming plugin SDK.
::

::accordion-item{label="I want to sell hardware with Nirvati. What options are available?" icon="i-lucide-circle-help"}
We can offer custom builds of Nirvati, even with your own branding and dedicated download servers if you want that. We can also manage services similar to nirvati.me and My Nirvati with your branding if you desire. Depending on your needs, we can even compile Nirvati and certain apps in an optimized way for the CPU you use to provide the best possible performance.

[Contact me](#contact) to learn more. We'll also soon provide a request form on our website.

**In general, you can also just preinstall unmodified versions of Nirvati on any hardware you want without our approval.** We will not stop you from doing that. Please note that we own the trademark for the name "Nirvati" and our logo in Germany (and we plan to expand this soon). If you ship modified versions of our software to Germany (or any country where we own the trademark), it's best to contact us to discuss the best options for branding. 
::

::accordion-item{label="I'm currently using Citadel to run a Bitcoin Node. What will this mean for me?" icon="i-lucide-circle-help"}
The Citadel project has been on hold for a while now. Existing users can upgrade to Nirvati, but this is a complicated process and I have not published a tutorial for it yet. If you want to upgrade to Nirvati, I recommend you [message me](#contact) so I can help you with the process. 
::

::

## Contact

You can contact me with any further questions:

- [Signal](https://signal.me/#eu/QfFsx4YpVob-1qbCc2RDIvBWbSNLd7ncrz9s3KDomG30x1B4KFBP0au3Opy2jlDs)
- [Matrix](https://matrix.to/#/@aaron:nirvati.org)
- On Discord @aarondewes 
- Via email at aaron@nirvati.org
