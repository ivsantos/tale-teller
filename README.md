# 📙 Tale Teller

Web app that generates a tale based on an input. It has input suggestions as well as already pre-generated tales. With a tale generated, you can listen to it as text-to-speech or read it, and a cover image is generated based on the tale.
The main goal of this project is to help children to sleep with a tale made by themselves. It is also a way to help children to learn how to write a tale, and to have fun with it.

Another main goal is to achieve accessibility requirements for this kind of project in order to be used by all users.

It is fully responsive and designed mobile-first.

This project aims to participate in [@midudev](https://www.github.com/midudev) hackathon: [midudev-cohere-2023](https://github.com/topics/midudev-cohere-2023), in collaboration with [co:here AI](https://cohere.ai/).


![Project preview](https://user-images.githubusercontent.com/18705658/216736891-12445624-f26b-49a5-8f3c-cc7baaaf351d.png)
![Tale preview](https://user-images.githubusercontent.com/18705658/216737863-be262d74-7b9e-4040-9824-aab735ed81f0.png)

<p align="center">
<a href="https://tale-teller.vercel.app/" target="blank">View project</a>
·
<a href="https://github.com/ivsantos/tale-teller/issues/new/choose">Report Bug</a>
·
<a href="https://github.com/ivsantos/tale-teller/issues/new/choose">Request Feature</a>
</p>


## 🛠️ Installation Steps
1. Clone the repository

```bash
git clone https://github.com/ivsantos/tale-teller.git
```

2. CD into the working directory

```bash
cd tale-teller
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm run dev
```

Enjoy! 🎉


## 💻 Built with
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [co:here AI](https://cohere.ai/) as the core logic of generating a tale based on an input
- [Openjourney](https://huggingface.co/prompthero/openjourney) (The Open-source version of Midjourney AI) for generating a cover for a tale based on the input
- [Hotpot AI](https://hotpot.ai/) for the covers of the already pre-generated tales
- [Speech Synthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) for A11Y purposes (conversion of tale as text-to-speech)


## 🙇 Special Thanks
- [@midudev](https://www.github.com/midudev) for the hackathon and the inspiration to the community to keep moving 👋
- Assets
  - [Logo](https://logo.com/)
  - <a href="https://www.freepik.com/free-vector/watercolour-background-with-leaves_15206958.htm#query=paper%20texture&position=1&from_view=search&track=sph">Image by VecMes</a> on Freepik
  - <a href="https://www.freepik.com/free-vector/moon-clouds-stars-purple-background-design_10016771.htm#query=moon&position=49&from_view=search&track=sph#position=49&query=moon">Image by starline</a> on Freepik
  - <a href="https://www.flaticon.com/free-icons/download" title="download icons">Download icons created by Freepik - Flaticon</a>
  - <a href="https://www.freepik.com/free-vector/medieval-castle-tavern-room-with-stone-walls_32665649.htm#query=tavern%20orcs&position=1&from_view=search&track=ais">Image by upklyak</a> on Freepik
  - <a href="https://www.freepik.com/free-photo/yellow-stars-dark-blue-background_5584965.htm#query=5584965&position=0&from_view=search&track=ais">Image by upklyak</a> on Freepik
  - <a href="https://www.freepik.com/free-vector/cute-cat-playing-with-butterfly-home-terrace_29086828.htm#query=cute%20cat%20butterfly&position=4&from_view=author">Image by upklyak</a> on Freepik
  - <a href="https://www.flaticon.com/free-icons/visit" title="visit icons">Visit icons created by Freepik - Flaticon</a>
  - <a href="http://clipart-library.com/clipart/1789833.htm" title="Wand">Wand Icon</a>
  - <a href="https://www.freepik.com/free-vector/pink-magic-castle-princess-fairy-palace-mountains-with-rocky-road-lead-gates-with-flying-turrets-air-balloons-sky-fantasy-fortress-medieval-architecture-cartoon-illustration_10308135.htm#query=fairy%20tale&position=0&from_view=search&track=sph">Image by upklyak</a> on Freepik
  - <a href="https://www.flaticon.com/free-icons/text-to-speech" title="text-to-speech icons">Text-to-speech icons created by Freepik - Flaticon</a>