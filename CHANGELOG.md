# Changelog

## v0.9.2 — 2026-11-11
- Official Wish Code logo in the hero: circular asset feathered into the cosmic background, subtle glow pulse (respects prefers-reduced-motion; the text ring does not rotate)
- Favicon (32×32), apple-touch icon (180×180, taiji and trigram centre) and Open Graph image (1200×630)
- Visible last-updated timestamp on the page (Europe/Zurich, to the minute)


## v0.9.1 — 2026-10-25
- Read-aloud fixed for iPhone/iOS Safari: all sentence chunks are queued synchronously inside the tap (setTimeout-chained speak() was dropped by iOS after the first sentence); no cancel() right before speak (iOS WebKit bug); speech engine unlocked with a silent utterance on the first tap; voices reloaded at speak time, fallback to any voice of the language, else system default.
- Read-aloud button is now a Play/Stop toggle (🔊 / ⏹), localized in 9 languages.
- Clear message when no sound starts within 4 s (silent switch, in-app browser) or the browser has no speech support (replaces alert), 9 languages.
- Wish opening greeting removed (per Jessica); mic button starts recognition directly in the tap (no greeting wait, no async getUserMedia preflight on iOS which lost the gesture).
- Voice input dimmed and replaced by a "please type / open in browser" hint when SpeechRecognition is missing or in in-app browsers (WeChat, Instagram, Facebook, Line, Grok, Android WebView).
- Background music keeps ducking while speaking.

## 2026-10-25
- Custom domain wishcode.ch (CNAME file, GitHub Pages)

## v0.9 — 2026-10-24
- Background music (Jessica's recording): assets/wish_bgm_20261024.mp3 (+ .m4a fallback), 30 s, fade-in 0.3 s / fade-out 1.5 s, 128 kbps.
- Plays once from the start on every new page load; autoplay attempted, otherwise starts on first tap/click/key. No loop.
- Floating ♪ mute/unmute toggle (bottom-right), localized aria label in 9 languages, preference remembered.
- Music ducks to low volume while TTS speaks (Wish greeting, readings) and restores afterwards.

## v0.8 — 2026-10-24
- New voice fairy **Wish Angel**: greets once per session on the first tap/click (or mic tap) with the signature line "I am Wish Angel. Make a wish come true!" in English, followed by a localized line in the selected language (9 languages); cute voice (female, pitch 1.6, rate 1.08, short playful pauses)
- Wish Angel is now the default narrator (top of the voice picker, e.g. 心愿天使 Wish); the other 13 voices remain
- Sparkling fairy indicator flutters beside the breathing voice star while Wish speaks

## v0.7 — 2026-10-24
- Rebrand: Miracle Code / 奇迹代码 → **Wish Code / 心愿密码** (title, header with localized subtitle, meta & Open Graph tags, disclaimer, read-aloud brand line) in all 9 languages; slogan stays "Make a wish come true"
- New share button (Web Share API, clipboard fallback) with localized share text
- Voice group renamed to 神明与传奇之声 / Divine & legendary voices (9 languages)
- Repo renamed to j19-plusone/wish-code-20261024

## v0.6 — 2026-10-24
- Three new read-aloud personas in 9 languages: Fuxi (伏羲, primordial creator of the bagua; very low, slow, long pauses), Li Chunfeng (李淳风, Tang astronomer-diviner; scholarly, measured), Empress Wu Zetian (武则天; imperial, commanding yet elegant)

## v0.5 — 2026-10-24
- Voice input rebuilt: secure-context check, explicit microphone permission flow, live listening state with interim transcript, 15 s auto-stop, clear error/unsupported messages in 9 languages
- Read-aloud: female/male voice picker choosing the most natural installed voice per language; 8 deity personas (Zeus, Venus, Prometheus, Shakyamuni, Guanyin, Taishang Laojun, Queen Mother of the West, Green Tara) with pitch/rate/pauses and opening lines; sentence chunking
- Pluggable TTS layer (browser provider + remote provider stub for ElevenLabs/OpenAI backend)
- Stage 2 price CHF 9.90 / EUR 9.90 per reading, currency selector (auto by locale), demo only
- Shooting stars: variable speeds, far-to-near perspective (grow larger/brighter, accelerate)

## v0.4 — 2026-10-24
- Home page: single free wish input + breathing-star voice button; no limits, no premium hints
- Stage 2 (paid) category buttons appear only after the reading
- Single Start/Stop toggle; real-time sky (IAU 88 constellations, geolocation, fallback Zurich), meteor trails
- 9 languages with native interpretations; voice follows language
