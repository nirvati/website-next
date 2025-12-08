---
title: Neuigkeiten zu Nirvati
description: Nirvati 0.2.0 und vieles mehr
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
    title: Neuigkeiten zu Nirvati
    description: Nirvati 0.2.0 und vieles mehr
---

In diesem Blogpost möchte ich ein paar Neuigkeiten zum Nirvati-Projekt teilen. Heute gibt es gleich vier große Ankündigungen:

- Die Veröffentlichung von **Nirvati 0.2.0** und OS-Images
- Die Gründung einer **Firma für Nirvati** in Deutschland
- Die Vorstellung von **n5i**, dem neuen „Core“ von Nirvati
- Die Ankündigung von **My Nirvati**, einem kommenden Service zur Verbesserung deiner Nirvati-Erfahrung

## Nirvati 0.2.0

Das ab sofort verfügbare Release Nirvati 0.2.0 besteht größtenteils aus Bugfixes und Stabilitätsverbesserungen, enthält aber auch alle neuen Features seit Version 0.1.0.

Nirvati 0.2.0 gibt es in drei „Varianten“:

- **Standard:** Die Standardversion von Nirvati, basierend auf Longhorn und K3s.
- **Micro:** Optimiert für geringen RAM-Verbrauch, basierend auf local-path-provisioner und einem Fork von Kubesolo. **Unterstützt kein Speichermanagement für Apps.**
- **Enterprise:** Für größere Deployments optimiert, etwas näher an Upstream Kubernetes und besser für Multi-Server-Umgebungen geeignet. Basierend auf Longhorn und RKE2.

**Nirvati 0.2.0 kann jetzt auf unserer Website heruntergeladen werden!**

## OS-Images

Nirvati 0.2.0 bringt auch einsatzfertige OS-Images mit, die auf Armbian basieren. Momentan unterstützen wir offiziell folgende Plattformen:

- Raspberry Pi 4 und 5
- Generischer UEFI-Boot auf x86_64-Rechnern
- Generischer UEFI-Boot auf aarch64-Rechnern

Unterstützung für weitere Geräte ist in Arbeit.

## Nirvati UG (haftungsbeschränkt) – Die Firma hinter Nirvati

Ich bin vor Kurzem 18 geworden und konnte nun eine Firma zur Weiterentwicklung von Nirvati gründen. Die neue Firma heißt „Nirvati UG (haftungsbeschränkt)“ und ist in Deutschland eingetragen.

Diese Firma ist verantwortlich für die Entwicklung von Nirvati sowie für den Betrieb von Diensten wie nirvati.me, My Nirvati (siehe unten), die Nirvati-Container-Registry und mehr.

Mein Ziel mit der Firma ist es, die Entwicklung von Nirvati nachhaltig zu gestalten und optionale Services anzubieten, die die Nirvati-Erfahrung verbessern (ohne Funktionen hinter eine Paywall zu packen). Ich habe bereits neue Infrastruktur für die Nirvati-Container-Registry eingerichtet – sie ist jetzt deutlich schneller und stürzt seltener ab. Außerdem hat die alte Registry ältere Releases gelöscht, um Speicherplatz zu sparen. Durch den Umzug auf ein CDN für Release-Images müssen wir das nun nicht mehr so oft tun.

Das bedeutet nicht, dass Nirvati kostenpflichtig wird – ich habe Maßnahmen ergriffen, um sicherzustellen, dass der Code immer Open Source bleibt und unabhängig von einzelnen Anbietern, wie im nächsten Abschnitt erklärt.

Wenn du Nirvati unterstützen möchtest, kannst du jetzt Sponsor auf unserer Website werden oder My Nirvati abonnieren, sobald es startet. Sponsoring ist aktuell nur für Nutzer in der EU möglich, aber wir wollen das bald erweitern.

## n5i

n5i ist ein neues Projekt, das ich separat gestartet habe, um die Kernbestandteile von Nirvati auszulagern. So soll sichergestellt werden, dass eine anbieterneutrale Version des Nirvati-Codes erhalten bleibt. Die meisten neuen Änderungen landen zuerst hier, bevor sie in Nirvati übernommen werden.

Es enthält die meisten Funktionen von Nirvati, aber ohne Integration mit Nirvati.me und ohne bestimmte Storage-Features. Außerdem gibt es keinen einfachen Installer oder fertige Binaries – n5i ist ein reines Source-Code-Projekt für Entwickler.

n5i kann leicht von anderen Anbietern geforkt werden, um Software ähnlich wie Nirvati zu entwickeln, aber angepasst an deren Hardware oder Onlinedienste.

Die Website des Projekts findest du unter https://n5i.dev.

Hinweis: n5i ist derzeit ebenfalls ein Projekt, das mir gehört. Die GitLab-Organisation und die Website gehören nicht der Nirvati UG. Wenn mehr Leute zu n5i beitragen, könnte es in Zukunft auch ein offeneres Modell geben. Ziel ist es, so unabhängig wie möglich von Unternehmen zu bleiben.

## My Nirvati

My Nirvati ist ein geplanter Service, der deine Nirvati-Erfahrung verbessern soll. Geplant sind unter anderem:

- **Zugriff von überall:** Kaufe direkt eine Domain oder bring deine eigene mit, die mit deinem Node verbunden wird.
- **Uptime-Monitoring:** Werde benachrichtigt, wenn dein Nirvati-Server Probleme hat.
- **Backups:** Einfach Backups deiner Nirvati-Daten erstellen.
- **Security-Monitoring:** Sichere Logs deines Servers bei uns speichern, um Manipulationen erkennen zu können.
- **Öffentliche IP:** Für E-Mail-Versand oder andere Dienste kann eine dedizierte IP-Adresse nötig oder hilfreich sein. My Nirvati ermöglicht dir, eine dedizierte öffentliche IP für ausgehenden Traffic zu bekommen.

Zusätzlich planen wir, Nirvati auch als Managed Service anzubieten, bei dem wir Nirvati für dich betreiben. So kannst du jede App aus unserem App Store nutzen, ohne dich um Erreichbarkeit oder Hardware kümmern zu müssen.

My Nirvati befindet sich aktuell noch in einem sehr frühen Entwicklungsstadium. Es wird auch einen kostenlosen Plan geben, der in begrenztem Umfang Uptime- und Security-Monitoring bietet.

## Fragen & Antworten

::accordion

::accordion-item{label="Wird Nirvati Open Source bleiben?" icon="i-lucide-circle-help"}
Ich möchte Nirvati dauerhaft unter der GNU AGPL 3.0 frei anzubieten. Das ist eine vollständig freie und quelloffene Lizenz, die es gleichzeitig schwerer macht, geschlossene Forks unserer Software zu erstellen. Die selbstgehostete Nirvati-Software wird immer kostenlos und Open Source bleiben.

Dieses Versprechen spiegelt sich auch im n5i-Projekt wider, das den Kern von Nirvati bereitstellt – ohne Integration mit externen Diensten.
::

::accordion-item{label="Warum kein Non-Profit, wenn es Open Source ist?" icon="i-lucide-circle-help"}
Ich habe darüber nachgedacht, Nirvati als Non-Profit zu starten. Aber ich möchte mit My Nirvati bestimmte Services anbieten, die die Nutzererfahrung deutlich verbessern – diese lassen sich jedoch nur als gewinnorientiertes Unternehmen betreiben.

Außerdem hoffe ich, dass dadurch langfristig mehr Mittel für die Open-Source-Entwicklung verfügbar werden.
::

::accordion-item{label="Wird Nirvati kostenpflichtig?" icon="i-lucide-circle-help"}
Nein. Nirvati selbst sowie unser nirvati.me-Subdomain-Service werden immer kostenlos bleiben.

Kostenpflichtig werden nur optionale Zusatzdienste wie My Nirvati, die uns in der Bereitstellung Kosten verursachen. Diese sind freiwillig und nicht notwendig, um Nirvati zu nutzen.
::

::accordion-item{label="Kann ich n5i direkt installieren, um keine Integration mit euren Diensten zu haben?" icon="i-lucide-circle-help"}
Momentan gibt es keine fertigen Binaries oder Installer für n5i. Der Quellcode ist jedoch öffentlich, und jeder kann daraus eine eigene Distribution mit solchen Binaries bauen.

Ich denke darüber nach, reine n5i-Builds anzubieten, aber diese hätten nicht einmal den Komfort mancher kostenlosen Nirvati-Services, wie z. B. die .nirvati.me-Subdomains. Da Nirvati selbst kostenlos ist, hat das aktuell keine hohe Priorität.
::

::accordion-item{label="Wann wird My Nirvati verfügbar sein?" icon="i-lucide-circle-help"}
Das ist noch nicht entschieden und hängt von der Geschwindigkeit der Entwicklung ab.
::

::accordion-item{label="Kann ich Nirvati unter einer permissiveren Lizenz nutzen?" icon="i-lucide-circle-help"}
Nein. Nirvati ist ausschließlich unter der AGPL 3.0 (oder neuer) verfügbar. Wir bieten keine permissiveren Lizenzen an und haben kein CLA, sodass ein Relicensing hoffentlich bald unmöglich wird, sobald mehr Mitwirkende dabei sind. Das gilt für den gesamten Code, einschließlich des geplanten Plugin-SDKs.
::

::accordion-item{label="Ich möchte Hardware mit Nirvati verkaufen. Welche Möglichkeiten gibt es?" icon="i-lucide-circle-help"}
Wir können maßgeschneiderte Nirvati-Builds anbieten – auch mit deinem Branding und eigenen Download-Servern. Auf Wunsch können wir auch Services wie nirvati.me oder My Nirvati unter deinem Branding betreiben. Je nach Bedarf können wir Nirvati und bestimmte Apps sogar für deine Hardware-CPU optimieren.

[Kontaktiere mich](#kontakt), um mehr zu erfahren. Bald wird es auch ein Anfrageformular auf unserer Website geben.

**Grundsätzlich kannst du auch einfach die unveränderte Nirvati-Version auf beliebiger Hardware vorinstallieren – ohne unsere Zustimmung.** Wir werden dich daran nicht hindern. Bitte beachte, dass wir in Deutschland (und bald in weiteren Ländern) die Marke „Nirvati“ und unser Logo als Markenzeichen besitzen. Wenn du modifizierte Versionen in ein Land lieferst, in dem wir die Marke halten, solltest du uns kontaktieren, um die beste Branding-Option zu besprechen.
::

::accordion-item{label="Ich nutze aktuell Citadel für einen Bitcoin Node. Was bedeutet das für mich?" icon="i-lucide-circle-help"}
Das Citadel-Projekt ist seit einiger Zeit pausiert. Bestehende Nutzer können auf Nirvati umsteigen, aber der Prozess ist kompliziert und ich habe noch keine Anleitung veröffentlicht. Wenn du wechseln möchtest, [schreib mir](#kontakt), und ich helfe dir dabei.
::

::

## Kontakt

Du kannst mich bei weiteren Fragen jederzeit kontaktieren:

- [Signal](https://signal.me/#eu/QfFsx4YpVob-1qbCc2RDIvBWbSNLd7ncrz9s3KDomG30x1B4KFBP0au3Opy2jlDs)
- [Matrix](https://matrix.to/#/@aaron:nirvati.org)
- Auf Discord @aarondewes
- Per E-Mail an aaron@nirvati.org
