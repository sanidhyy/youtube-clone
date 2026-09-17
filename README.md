# Modern YouTube Clone using React and TypeScript

![Modern YouTube Clone using React and TypeScript](https://user-images.githubusercontent.com/71302066/191976468-659f2a7c-b542-4a37-b97e-1bcf91b9898c.png "Modern YouTube Clone using React and TypeScript")

[![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://img.shields.io/github/license/sanidhyy/youtube-clone)](https://github.com/sanidhyy/youtube-clone/blob/main/LICENSE.md "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sanidhyy/youtube-clone/commits/main "Maintenance")
[![GitHub branches](https://badgen.net/github/branches/sanidhyy/youtube-clone)](https://github.com/sanidhyy/youtube-clone/branches "GitHub branches")
[![Github commits](https://badgen.net/github/commits/sanidhyy/youtube-clone/main)](https://github.com/sanidhyy/youtube-clone/commits "Github commits")
[![Netlify Status](https://api.netlify.com/api/v1/badges/1c446a3d-86da-4db4-addd-84eb858ba60f/deploy-status)](https://yt-youtube.netlify.app/ "Netlify Status")
[![GitHub issues](https://img.shields.io/github/issues/sanidhyy/youtube-clone)](https://github.com/sanidhyy/youtube-clone/issues "GitHub issues")
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sanidhyy/youtube-clone)](https://github.com/sanidhyy/youtube-clone/pulls "GitHub pull requests")

## ⚠️ Before you start

1. Make sure **Git** and **Node.js 22.22+** are installed.
2. Create a `.env` file in the project root.
3. Contents of **.env**

```
RAPID_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

This key is used only by the Netlify Function at `/api/youtube`. Do **not** prefix it with `VITE_` or `REACT_APP_`, or it will be exposed in the browser bundle.

4. Go to [Rapid API](https://rapidapi.com/) and create an account.

5. Enable this API to fetch YouTube videos and channels: [API: Youtube v3 by ytdlfree](https://rapidapi.com/ytdlfree/api/youtube-v31/).

![Copy API Key](https://user-images.githubusercontent.com/71302066/191980749-45ff87e2-aee8-48c6-aab1-220023127e25.png)

6. Paste the key into `.env` as `RAPID_API_KEY`.

**NOTE:** Do not share these keys publicly.

### Netlify production env

If this site was previously using `REACT_APP_RAPID_API_KEY`, rename that variable to `RAPID_API_KEY` in the Netlify dashboard. Set the build command to `pnpm build` and the publish directory to `dist`.

## :pushpin: How to use this App?

1. Clone this **repository** to your local computer.
2. Open **terminal** in root directory.
3. Type and Run `npm install` or `pnpm install`.
4. Once packages are installed, you can start this app using `npm run dev` or `pnpm dev`.
5. Open [http://localhost:5173](http://localhost:5173). The Vite plugin emulates Netlify Functions locally, so the RapidAPI proxy works without `netlify dev`.

### :raising_hand: Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/sanidhyy/youtube-clone/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** — `@sanidhyy`

## :camera: Screenshots:

![Modern UI/UX](https://user-images.githubusercontent.com/71302066/191976468-659f2a7c-b542-4a37-b97e-1bcf91b9898c.png "Modern UI/UX")

![Channel Details Page](https://user-images.githubusercontent.com/71302066/191976710-3df10ad2-53b1-484e-a819-6ef4d26cbf80.png "Channel Details Page")

![Watch Videos directly](https://user-images.githubusercontent.com/71302066/191977042-e95ee0a0-53dd-4f73-a5d4-f7c00c9051ce.png "Watch Videos directly")

## :gear: Built with

[<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" width="150" height="40" />](https://www.typescriptlang.org/ "TypeScript")

[<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" width="150" height="40" />](https://vite.dev/ "Vite")

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="150" />](https://react.dev/ "React")

[<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" width="150" height="40" />](https://mui.com/ "Material UI")

[<img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="Built with Love">](https://github.com/sanidhyy/ "Built with Love")

## :wrench: Stats

![Stats for this App](https://user-images.githubusercontent.com/71302066/191975449-ca4b2c3c-4bdc-4bd1-b473-2fa91b259cc0.svg "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## Buy Me a Coffee 🍺

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :books: Available Scripts

In the project directory, you can run:

### `npm run dev` / `pnpm dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.
You may also see lint errors in the console.

### `npm run lint` / `pnpm lint`

Runs ESLint across the project.

### `npm run build` / `pnpm build`

Typechecks the app and builds it for production into the `dist` folder.

### `npm run preview` / `pnpm preview`

Serves the production build locally for a final check.

## :page_with_curl: Learn More

- [Vite](https://vite.dev/guide/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Netlify Functions](https://docs.netlify.com/build/functions/get-started/)
