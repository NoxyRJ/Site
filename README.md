# Noxy7 Website

A modern personal portfolio and social hub designed to centralize online presence, gaming platforms, social media profiles, and personalized content in a single, elegant interface.

## Overview

This project was developed to provide a clean, responsive, and visually immersive experience, featuring real-time integrations, multimedia content, and a modern dark-themed design. It was born out of wanting something more personal than template-based link-in-bio tools — built entirely from scratch, with full control over design and functionality.

## Features

- Personalized profile presentation with an animated hero section
- Social media and gaming platform links (Discord, Steam, Roblox, TikTok, Spotify, YouTube, Instagram, Xbox, X, Twitch), each with brand-colored icons pulled live from icon CDNs
- Live Discord profile and activity display via the Lanyard API
- Automatic Spotify playlist integration — cover art and title update on their own whenever the playlist changes, no manual edits required
- Featured "site music" card with live Spotify oEmbed data
- Custom PC hardware/setup showcase panel
- "About this site" panel with project motivation, feature overview, API credits, browser compatibility notes, and a privacy disclosure
- Self-updating version number and "last updated" date, automatically incremented and persisted whenever the site is redeployed
- Visitor counter, shown both on the main page and inside the About panel
- Fully responsive layout with mobile-optimized effects
- Animated visual effects (particle background, cursor trail, audio-reactive glow)
- Optimized user interface with lazy-loaded images and scroll-locked modals

## Technologies

- HTML5
- CSS3
- JavaScript

### APIs used

- [Lanyard API](https://lanyard.rest) — real-time Discord status and activity
- [Spotify oEmbed API](https://developer.spotify.com/documentation/embeds) — playlist and site music data
- [JSONBin.io](https://jsonbin.io) — visitor counter and version tracking storage

## Purpose

The goal of this project is to create a centralized digital identity platform where visitors can easily access personal information, social networks, favorite content, and online communities.

## Project Structure

```text
/
├── index.html
└── media/
    ├── images
    ├── audio
    └── assets
```
