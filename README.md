# Novelite Archive

<img src="https://i.imgur.com/bixtmXc.png"  align="right"  alt="tiny yorick">

The [Novelite Archive](https://novelit.es) is small website that was created with the intention of making it easier to access some archived stories written for [Shiori Novella](https://youtube.com/@ShioriNovella) (and eventually more things).

## How story archiving works

It's fairly simple! Every day at 00:00 UTC, a job is triggered that checks for all the tweets under the hashtag [#ShiorinStories](https://twitter.com/hashtag/ShiorinStories) from the previous run, then pulls in any new stories into a database. When the front-end makes requests for data, it is retrieved from the database - rather than making an API call to Twitter (except the image links, those are not hosted by me, unfortunately).

## Possible future changes
- [x] Make a directory for all stories, so they're more easily accessed
- [ ] Automatic cleanup of dead links, which usually mean a deleted tweet
- [ ] Improve the styling (maybe a less boring background, different font, adding the author's avatar, etc.)
- [ ] Hosting the images (maybe)

## Some personal stuff

This was fun! If anyone is reading this and wants to chat about this (or anything, for that matter), I'm all ears.

## Acknowledgements

- [React](https://react.dev/) and [Tailwind](https://tailwindcss.com/) for the front-end, which I'm not particularly great at.
- [Node](https://nodejs.org/en) and [Express](https://expressjs.com/) for the back-end!