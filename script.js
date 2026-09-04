/* ==========================================================================
   POR SI MUERO MAÑANA - JAVASCRIPT AUDIO ENGINE & INTERACTIVITY
   Dedicated to Kale by Jonathan • 7lite Music Production
   ========================================================================== */

// --- Tracks Data Array linked directly to assets/album tracks ---
const tracksData = [
    {
        id: 1,
        title: "Por Si Muero Mañana",
        src: "assets/album tracks/1. Por Si Muero Mañana.wav",
        durationStr: "03:15",
        durationSec: 195,
        genre: "Bedroom Pop",
        note: "Estilo: Bedroom Pop con sintetizadores analógicos cálidos, bajo rock marcado y armonías vocales profundas.",
        lyrics: `El reloj no frena en la penumbra de este cuarto,
afuera el mundo es caos y de la rutina estoy harto.
Me quemo las pestañas buscando encender una llama,
pero en tu cara de orgullo es donde el hombre gana.

Si todo se apaga y la tierra se deshace,
tu pecho es el refugio donde mi alma renace.
Abrazarte esta noche es mi mayor fortuna...
viviendo este segundo, por si muero mañana.

Desde aquel septiembre, de pequeños, sin un peso,
me salvás la vida con cada beso.
No ocupo lujos plásticos que mientan a la gente,
si solo tu mirada me limpia la mente.

Si todo se apaga y la tierra se deshace,
tu pecho es el refugio donde mi alma renace.
Abrazarte esta noche es mi mayor fortuna...
viviendo este segundo, por si muero mañana.

Por si muero mañana...
Quédate un ratito más.
Juntos hasta el final.

Si todo se apaga y la tierra se deshace,
tu pecho es el refugio donde mi alma renace.
Abrazarte esta noche es mi mayor fortuna...
viviendo este segundo, por si muero mañana.`
    },
    {
        id: 2,
        title: "Gimme That Love",
        src: "assets/album tracks/2. Gimme That Love.wav",
        durationStr: "02:45",
        durationSec: 165,
        genre: "Afrobeat",
        note: "Estilo: Percusión afro sincopada, bajo amapiano envolvente, guitarras muteadas y ritmo hipnótico.",
        lyrics: `Esa piel morena, caramelo fino.
Colocha bonita, marcando el camino.
Te subis a la moto y no miras la hora.
Decime a donde vamos, hoy sos mi patrona.
Mírame a los ojos, café bien cargado.
Tantos años juntos y sigo pegado.
Cero mentiras, aquí no hay libreto.
Pa' ti va mi amor, pa' ti mi respeto.

Tú dudas de tu brillo y estás loca, loca.
No sabes el veneno que tiene tu boca.
Olvida el espejo, ven pégate al pecho.
Que lo de nosotros ya está todo hecho.
(Oya whine it, girl!)

Gimme that, gimme that love, Kale.
Que tu cuerpo me quita el estrés, yeh.
Gimme that, gimme that love, Kale.
Te lo juro, nací pa' tu piel, yeh.
Solo tú, solo tú, nada más.
En la ruta no miro hacia atrás.
Gimme that, gimme that love, Kale.
Tú y yo solos comiéndonos el mapa, yeh.

Camina despacio, cintura pesada.
Hablas con el cuerpo en la madrugada.
No quiero dinero, no quiero la fama.
Solo tu vibra quemando mi cama.
Pa' viajar el mundo no ocupo boleto.
Si voy con vos, todo está completo.

Gimme that, gimme that love, Kale.
Que tu cuerpo me quita el estrés, yeh.
Gimme that, gimme that love, Kale.
Te lo juro, nací pa' tu piel, yeh.
Solo tú, solo tú, nada más.
En la ruta no miro hacia atrás.
Gimme that, gimme that love, Kale.
Tú y yo solos comiéndonos el mapa, yeh.`
    },
    {
        id: 3,
        title: "Brutal",
        src: "assets/album tracks/3. Brutal.wav",
        durationStr: "03:02",
        durationSec: 182,
        genre: "Reggaeton",
        note: "Estilo: Dembow nítido y potente, atmósferas synthwave, sub-bass cavernoso y gancho contagioso.",
        lyrics: `Te voy a buscar y nos vamos directo a lo oscuro,
te quito la ropa, te pego completo a mi muro.
Quiero devorarte la piel de arriba hacia abajo,
hacerte olvidar del estrés y de tu trabajo.
Te voy a besar donde nadie te ha besado antes,
una noche entera de juegos y de ser amantes.
Me gusta tu cara cuando me pides calor,
haciéndolo rico con los efectos del alcohol.

Tú me tientas, tú me encantas, mami, qué brutal,
ese cuerpo tuyo entero me lo voy a llevar.
Te quiero comer, te quiero tener,
toda la noche te lo voy a hacer.
Tú me tientas, tú me encantas, mami, qué brutal,
este deseo que tengo no va a terminar.
Te quiero comer, te quiero tener,
hasta que amanezca te lo voy a hacer.

Te pongo al revés con el bajo rompiendo la sala,
me miras a los ojos y sé que te pones mala.
Te lo hago bien duro y luego te lo hago despacio,
hasta que tus gritos se escuchen por todo el espacio.
Araña mi espalda, mami, pide siempre más,
te voy a dejar tan cansada que no vas a poder más.
Ese cuerpo es mío y tú sabes que me pertenece,
lo que te voy a hacer hoy te va a durar por meses.

Sin ropa... solos tú y yo en la habitación.
Sintiendo cómo sube la presión...
Te voy a hacer mía otra vez.

Tú me tientas, tú me encantas, mami, qué brutal,
ese cuerpo tuyo entero me lo voy a llevar.
Te quiero comer, te quiero tener,
toda la noche te lo voy a hacer.
Tú me tientas, tú me encantas, mami, qué brutal,
este deseo que tengo no va a terminar.
Te quiero comer, te quiero tener,
hasta que amanezca te lo voy a hacer.`
    },
    {
        id: 4,
        title: "Eterno",
        src: "assets/album tracks/4. Eterno.wav",
        durationStr: "03:30",
        durationSec: 210,
        genre: "Bachata",
        note: "Estilo: Bachata sensual moderna con requinto apasionado, bongós afinados, güira metálica y voz seductora.",
        lyrics: `Me envenena el café que escondes en la mirada,
esa piel morena que no pide nada.
Tus colochos cayendo en mi pecho,
desarmando la cordura, quemando este lecho.
Dime si es pecado amarte en exceso,
o morir de sed esperando tu beso.
Acelera el viaje, apaguemos el mapa,
que este sentimiento del pecho se escapa.

¿Quién te va a querer como yo te quiero?
Si por tu risa sincera me muero...
Dile al espejo que miente si duda de ti,
¡porque naciste perfecta para mí!

Que me falte el aire, que se apague el sol,
pero no me quites nunca este control.
Tú me tienes loco, preso en tu cintura,
Kale, mi reina, curando mi locura.
Que el mundo se entere, no pienso callar:
lo nuestro es eterno.

No hay noche en la ruta que no piense en vos,
el destino entero se rinde ante los dos.
Me miras de frente y tiembla mi voz,
bendito el segundo que nos juntó Dios.
Tanta lealtad me parece un delirio,
amarte mi vicio, perderte mi martirio.

Que me falte el aire, que se apague el sol,
pero no me quites nunca este control.
Tú me tienes loco, preso en tu cintura,
Kale, mi reina, curando mi locura.
Que el mundo se entere, no pienso callar:
lo nuestro es eterno.

Quédate cerquita, morena...
Solos tú y yo...`
    },
    {
        id: 5,
        title: "Ojos Cafés",
        src: "assets/album tracks/5. Ojos Cafés.wav",
        durationStr: "03:10",
        durationSec: 190,
        genre: "R&B Sensual / Trapsoul",
        note: "Estilo: Bajo reese profundo, atmósferas nocturnas, hi-hats rítmicos y delivery barítono melódico.",
        lyrics: `La noche está fría pero tú estás que quema'
Ese tono moreno que rompe el esquema
Esos colochos sueltos encima de la cama
Olvídate de la hora y de quién te llama.
Tú sabes lo nuestro no es nuevo, venimo' de cero,
acelera la moto, te llevo, te sigo el juego,
agárrate duro y no mires al suelo,
la química intacta, tocando hasta el cielo.
Mami, no hay otra que me ponga así.

Tus ojos cafés me tienen la mente,
la mente, la mente, tan desenfocada.
Tus ojos cafés me tienen la mente,
la mente, la mente, no pienso en más nada.
Tus ojos cafés me tienen la mente,
la mente, la mente, baby, totalmente...
Tú eres mi nena, aquí nadie empata.

Cero caretas, con vos todo es real
Esa vibra tuya que no tiene igual
Me gusta cómo me miras y no dices nada
Hablando con el cuerpo en la madrugada.
No mires espejo, no doubts, no pares,
el brillo lo cargas sin que lo prepares,
el mundo en las manos, las rutas, los mares,
decime y nos fuimos, quemando lugares.
Vos sos la que me rescata de todo lo malo.

Tus ojos cafés me tienen la mente,
la mente, la mente, tan desenfocada.
Tus ojos cafés me tienen la mente,
la mente, la mente, no pienso en más nada.
Tus ojos cafés me tienen la mente,
la mente, la mente, baby, totalmente...
Tú eres mi nena, aquí nadie empata.`
    },
    {
        id: 6,
        title: "Juntos Hasta El Final",
        src: "assets/album tracks/6. Juntos Hasta el Final.wav",
        durationStr: "03:40",
        durationSec: 220,
        genre: "EDM / Tropical House / Deep House",
        note: "Estilo: Sonido orgánico de marimba, arpegios envueltos en ecos, bajo sub suave y groove envolvente.",
        lyrics: `Tus ojos cafés perdiéndose en la oscuridad,
esos colochos sueltos que me devuelven la paz.
Tu piel morena brillando bajo este cielo gris,
no sé qué hice en la vida para tenerte a ti.

Dile a tu cabeza que apague el dolor,
que naciste perfecta para este amor.
Cierra los ojos y dejate caer...

La moto flotando despacio en la madrugada,
sobrando el mundo entero con una sola mirada.
aquí todo será eterno y real,
un camino que nunca va a encontrar un final.

Dile a tu cabeza que apague el dolor,
que naciste perfecta para este amor.
Cierra los ojos y déjate caer...`
    },
    {
        id: 7,
        title: "Envejecer",
        src: "assets/album tracks/7. Envejecer.wav",
        durationStr: "04:10",
        durationSec: 250,
        genre: "JyK",
        note: "Estilo: Drone atmosférico flotante sin batería ni percusión, capas de pads etéreos y voz íntima al oído.",
        lyrics: `Se apagan las luces y me quedo viendo tu respiración,
el sonido más lindo que le ha pasado a mi corazón.
Esos colochos tuyos enredados en mi pecho,
haciéndome sentir que todo en la vida está bien hecho.
Vos te miras al espejo y no ves lo que yo veo,
pero sos la obra de arte más pura en la que creo.
Años en esta ruta y te elegiría otra vez,
sin dudarlo un segundo, de la cabeza a los pies.

Solo con vos quiero envejecer...
Solo con vos quiero envejecer...
Solo con vos quiero envejecer...
Solo con vos quiero envejecer...

Acelerando en la moto de noche, sintiendo el viento,
jurando que el tiempo se frena en este momento.
No le pido nada al cielo, no quiero más nada,
si tengo tu piel morena aquí en mi almohada.
Cero mentiras, aquí todo es eterno y real,
un amor que no cabe en nada terrenal.
Vamos a recorrer el mundo entero de la mano,
que a tu lado hasta el dolor se siente lejano.

Solo con vos quiero envejecer...
Solo con vos quiero envejecer...
Solo con vos quiero envejecer...
Solo con vos quiero envejecer...`
    }
];

// --- Dynamic Visual Theme Palettes per Track ---
const themePalettes = [
    { primary: '#ef4444', secondary: '#f43f5e', glow: 'rgba(239, 68, 68, 0.45)', bgGlow: 'radial-gradient(circle at 50% 25%, rgba(239, 68, 68, 0.35) 0%, rgba(244, 63, 94, 0.12) 45%, transparent 75%)', shadow: '#ef4444' }, // 1. Bedroom Pop
    { primary: '#f59e0b', secondary: '#d97706', glow: 'rgba(245, 158, 11, 0.5)', bgGlow: 'radial-gradient(circle at 50% 25%, rgba(245, 158, 11, 0.38) 0%, rgba(217, 119, 6, 0.14) 45%, transparent 75%)', shadow: '#f59e0b' },  // 2. Afrobeat
    { primary: '#e11d48', secondary: '#be123c', glow: 'rgba(225, 29, 72, 0.55)', bgGlow: 'radial-gradient(circle at 50% 25%, rgba(225, 29, 72, 0.4) 0%, rgba(190, 18, 60, 0.15) 45%, transparent 75%)', shadow: '#e11d48' }, // 3. Reggaeton
    { primary: '#f43f5e', secondary: '#e11d48', glow: 'rgba(244, 63, 94, 0.5)', bgGlow: 'radial-gradient(circle at 50% 25%, rgba(244, 63, 94, 0.35) 0%, rgba(225, 29, 72, 0.12) 45%, transparent 75%)', shadow: '#f43f5e' },  // 4. Bachata
    { primary: '#a855f7', secondary: '#9333ea', glow: 'rgba(168, 85, 247, 0.5)', bgGlow: 'radial-gradient(circle at 50% 25%, rgba(168, 85, 247, 0.38) 0%, rgba(147, 51, 234, 0.14) 45%, transparent 75%)', shadow: '#a855f7' }, // 5. Trapsoul
    { primary: '#14b8a6', secondary: '#0d9488', glow: 'rgba(20, 184, 166, 0.5)', bgGlow: 'radial-gradient(circle at 50% 25%, rgba(20, 184, 166, 0.35) 0%, rgba(13, 148, 136, 0.14) 45%, transparent 75%)', shadow: '#14b8a6' }, // 6. Deep House
    { primary: '#f4f4f5', secondary: '#e4e4e7', glow: 'rgba(244, 244, 245, 0.45)', bgGlow: 'radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.32) 0%, rgba(228, 228, 231, 0.12) 45%, transparent 75%)', shadow: '#ffffff' } // 7. JyK
];

function applyThemePalette(index) {
    if (index < 0 || index >= themePalettes.length) return;
    const theme = themePalettes[index];
    document.documentElement.style.setProperty('--accent-red', theme.primary);
    document.documentElement.style.setProperty('--accent-glow', theme.glow);
    document.documentElement.style.setProperty('--accent-glow-subtle', theme.glow);
    document.documentElement.style.setProperty('--border-accent', theme.primary + '55');
// --- Release Date & Security Controls ---
// Estreno adelantado al 5 de septiembre de 2026 a las 10:00 PM hora Honduras (UTC-6)
const TARGET_RELEASE_DATE = new Date("2026-09-05T22:00:00-06:00").getTime();

function isAudioUnlocked() {
    const now = new Date().getTime();
    const isDevBypassed = localStorage.getItem('dev_bypassed_lock') === 'true';
    return now >= TARGET_RELEASE_DATE || isDevBypassed;
}

function updateCountdownTimer() {
    const now = new Date().getTime();
    const distance = TARGET_RELEASE_DATE - now;

    const banner = document.getElementById('releaseCountdownBanner');
    if (isAudioUnlocked()) {
        if (banner) banner.classList.add('hidden');
        return;
    }

    if (banner) banner.classList.remove('hidden');

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const elDays = document.getElementById('cdDays');
    const elHours = document.getElementById('cdHours');
    const elMins = document.getElementById('cdMinutes');
    const elSecs = document.getElementById('cdSeconds');

    if (elDays) elDays.textContent = String(days).padStart(2, '0');
    if (elHours) elHours.textContent = String(hours).padStart(2, '0');
    if (elMins) elMins.textContent = String(minutes).padStart(2, '0');
    if (elSecs) elSecs.textContent = String(seconds).padStart(2, '0');
}

function initCountdown() {
    updateCountdownTimer();
    setInterval(updateCountdownTimer, 1000);
}

// Secret Invisible Developer Unlock Trigger (Desktop/Computer Only)
function triggerSecretDevUnlock() {
    // Only allow on computers / non-coarse pointer devices (no touch screens / mobile)
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
        return;
    }

    const inputPass = prompt("Clave de desarrollador:");
    if (inputPass === "2310") {
        localStorage.setItem('dev_bypassed_lock', 'true');
        localStorage.setItem('kale_authenticated_album', 'true');
        const modal = document.getElementById('lockScreenModal');
        if (modal) {
            modal.classList.add('opacity-0');
            if (modal.children[0]) modal.children[0].classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
        renderTracklist();
        updateUI();
        showToast("🔓 Modo Desarrollador: Audio Habilitado");
    }
}

// --- Security & Gate for Kale ---
function verifyKaleAuthDate() {
    const input = document.getElementById('datePickerInput');
    const errorEl = document.getElementById('lockScreenError');
    if (!input) return;

    const val = input.value.trim();
    // Target Date: 7 de septiembre de 2019 (2019-09-07)
    const isValid = val === "2019-09-07" || val === "07/09/2019" || val === "7/9/2019" || val === "07-09-2019" || val === "7-9-2019";

    if (isValid) {
        localStorage.setItem('kale_authenticated_album', 'true');
        unlockAlbumPage();
    } else {
        if (errorEl) {
            errorEl.classList.remove('hidden');
        }
        if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
    }
}

function unlockAlbumPage() {
    const modal = document.getElementById('lockScreenModal');
    if (!modal) return;

    modal.classList.add('opacity-0');
    if (modal.children[0]) modal.children[0].classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        showToast("¡Bienvenida Kale! ❤️");
    }, 400);
}

function checkAuthOnLoad() {
    const isAuth = localStorage.getItem('kale_authenticated_album') === 'true';
    const modal = document.getElementById('lockScreenModal');
    if (isAuth && modal) {
        modal.classList.add('hidden');
    }
    const input = document.getElementById('datePickerInput');
    if (input) {
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') verifyKaleAuthDate();
        });
    }
}

// --- Direct Automatic Track Download ---
function downloadTrack(index, event) {
    if (event) event.stopPropagation();
    if (!isAudioUnlocked()) {
        if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
        showToast("🔒 Las canciones estarán disponibles a partir del 5 de septiembre de 2026 (10:00 PM) ❤️");
        return;
    }

    if (navigator.vibrate) {
        navigator.vibrate(25);
    }

    if (currentTrackIndex === index && isPlaying) {
        pauseTrack();
        return;
    }

    currentTrackIndex = index;
    const track = tracksData[currentTrackIndex];
    isPlaying = true;
    stopSynthMelody();

    applyThemePalette(currentTrackIndex);

    htmlAudio.src = track.src;
    htmlAudio.currentTime = 0;

    const playPromise = htmlAudio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            showToast(`Reproduciendo: ${track.title}`);
        }).catch(err => {
            console.warn("Native WAV Playback warning, trying synth fallback:", err);
            playSynthMelody(currentTrackIndex);
            showToast(`Reproduciendo: ${track.title}`);
        });
    }

    updateUI();
}

function pauseTrack() {
    isPlaying = false;
    htmlAudio.pause();
    stopSynthMelody();
    updateUI();
    showToast("Pausado");
}

function togglePlayPause() {
    const unlocked = isAudioUnlocked();

    // Build DOM rows once if not present
    if (container.children.length !== tracksData.length) {
        container.innerHTML = '';
        tracksData.forEach((track, index) => {
            const row = document.createElement('div');
            row.id = `trackRow-${index}`;
            row.className = `track-row group glass-card rounded-2xl p-4 transition-all duration-500 ease-in-out`;
            container.appendChild(row);
        });
    }

    // Update existing DOM elements in-place for buttery smooth CSS transitions
    tracksData.forEach((track, index) => {
        const row = document.getElementById(`trackRow-${index}`);
        if (!row) return;

        const isCurrent = index === currentTrackIndex;
        
        if (!unlocked) {
            row.className = `track-row group glass-card rounded-2xl p-4 transition-all duration-500 ease-in-out opacity-60 grayscale-[30%] hover:opacity-85 hover:grayscale-0 border-white/5 cursor-not-allowed`;
        } else if (isCurrent) {
            row.className = `track-row group glass-card rounded-2xl p-4 transition-all duration-500 ease-in-out active-track opacity-100 grayscale-0`;
        } else {
            row.className = `track-row group glass-card rounded-2xl p-4 transition-all duration-500 ease-in-out opacity-100 grayscale-0`;
        }

        const playBtnHtml = !unlocked ? `
            <button class="w-11 h-11 rounded-full bg-zinc-800/80 border border-white/10 text-zinc-500 flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-inner" title="Disponible el 5 de septiembre de 2026 (10:00 PM)">
                <svg class="w-5 h-5 fill-current text-zinc-400" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
            </button>
        ` : `
            <button class="w-11 h-11 rounded-full ${isCurrent ? 'bg-red-500 text-white shadow-lg shadow-red-500/40' : 'bg-white/5 group-hover:bg-red-500 text-zinc-400 group-hover:text-white'} flex items-center justify-center flex-shrink-0 transition-all duration-500">
                ${isCurrent && isPlaying ? `
                    <div class="eq-container">
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                    </div>
                ` : `
                    <span class="font-mont font-bold text-xs group-hover:hidden ${isCurrent ? 'text-red-400' : 'text-zinc-400'}">0${track.id}</span>
                    <svg class="w-5 h-5 fill-current hidden group-hover:block ml-0.5 text-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                `}
            </button>
        `;

        row.innerHTML = `
            <div class="flex items-center justify-between gap-3 sm:gap-4">
                <!-- Play/Pause Icon + Number + Title -->
                <div class="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 ${unlocked ? 'cursor-pointer' : 'cursor-not-allowed'}" onclick="playTrack(${index})">
                    ${playBtnHtml}
                    
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-0.5">
                            <h3 class="font-mont font-bold text-sm sm:text-base ${isCurrent ? 'text-red-400' : 'text-white group-hover:text-red-400'} truncate transition-colors duration-500">
                                ${track.title}
                            </h3>
                            ${!unlocked ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-500/10 border border-red-500/20 text-[10px] font-mont font-semibold text-red-400 flex-shrink-0">🔒 5 Sep 10 PM</span>` : ''}
                        </div>
                        <p class="text-xs text-zinc-400 font-light truncate">Track 0${track.id} • Por Si Muero Mañana</p>
                    </div>
                </div>

                <!-- Track Duration, Automatic Download & Lyrics Buttons -->
                <div class="flex items-center gap-2 sm:gap-3">
                    <span class="text-xs font-mono text-zinc-400 hidden sm:inline">${track.durationStr}</span>
                    
                    <!-- Automatic Download Button -->
                    <button onclick="downloadTrack(${index}, event)" title="${unlocked ? 'Descargar canción' : 'Disponible el 5 de septiembre de 2026 (10:00 PM)'}" class="px-3 py-1.5 rounded-xl ${unlocked ? 'bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-zinc-300 hover:text-red-400' : 'bg-white/5 opacity-50 cursor-not-allowed border border-white/5 text-zinc-500'} text-xs font-mont font-semibold transition-all duration-300 flex items-center gap-1.5">
                        <svg class="w-4 h-4 ${unlocked ? 'text-red-400' : 'text-zinc-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        <span class="hidden sm:inline">Descargar</span>
                    </button>

                    <!-- Lyrics Button -->
                    <button onclick="openLyrics(${index})" class="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-xs font-mont font-semibold text-zinc-300 hover:text-red-400 transition-all duration-300 flex items-center gap-1.5">
                        <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1.007 1.007 0 01.707.293l5.414 5.414a1.007 1.007 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        <span>Letra</span>
                    </button>
                </div>
            </div>

            <!-- Active Row Dynamic Progress Bar -->
            ${isCurrent && unlocked ? `
                <div class="mt-3 w-full bg-zinc-800/80 rounded-full h-1 overflow-hidden">
                    <div id="activeRowProgressBar" class="bg-red-500 h-full transition-all duration-300" style="width: 0%"></div>
                </div>
            ` : ''}
        `;
    });
}

function updateUI() {
    renderTracklist();

    const unlocked = isAudioUnlocked();
    const vinylWrapper = document.getElementById('heroVinylWrapper');
    const vinylDisc = document.getElementById('vinylDisc');
    const stickyPlayer = document.getElementById('stickyPlayer');
    const mainBtn = document.getElementById('mainPlayBtn');
    const mainText = document.getElementById('mainPlayText');
    const mainIcon = document.getElementById('mainPlayIcon');

    const lockSvg = '<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>';
    const pauseSvg = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    const playSvg = '<path d="M8 5v14l11-7z"/>';

    if (!unlocked) {
        if (mainBtn) mainBtn.className = "btn-primary opacity-60 grayscale cursor-not-allowed shadow-none border border-white/10";
        if (mainText) mainText.textContent = "Disponible el 5 de Septiembre, 2026 (10:00 PM) 🔒";
        if (mainIcon) mainIcon.innerHTML = lockSvg;
        if (vinylWrapper) vinylWrapper.classList.remove('is-playing');
        if (vinylDisc) vinylDisc.classList.add('paused-animation');
        return;
    } else {
        if (mainBtn) mainBtn.className = "btn-primary opacity-100 grayscale-0 cursor-pointer";
    }

    if (isPlaying) {
        if (vinylWrapper) vinylWrapper.classList.add('is-playing');
        if (vinylDisc) vinylDisc.classList.remove('paused-animation');
        if (stickyPlayer) stickyPlayer.classList.remove('translate-y-full');

        ['mainPlayIcon', 'heroPlayIcon', 'stickyPlayIcon', 'drawerPlayIcon'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = pauseSvg;
        });
        if (mainText) mainText.textContent = "Pausar Reproducción";

    } else {
        if (vinylWrapper && currentTrackIndex === -1) vinylWrapper.classList.remove('is-playing');
        if (vinylDisc) vinylDisc.classList.add('paused-animation');

        ['mainPlayIcon', 'heroPlayIcon', 'stickyPlayIcon', 'drawerPlayIcon'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = playSvg;
        });

        if (mainText) mainText.textContent = currentTrackIndex === -1 ? "Reproducir Álbum Completo" : "Reanudar Álbum";
    }

    if (currentTrackIndex !== -1) {
        const track = tracksData[currentTrackIndex];

        const stickyTitle = document.getElementById('stickyTrackTitle');
        const stickySub = document.getElementById('stickyTrackSubtitle');
        const stickyNum = document.getElementById('stickyThumbnailNum');

        if (stickyTitle) stickyTitle.textContent = track.title;
        if (stickySub) stickySub.textContent = `Track 0${track.id} • Por Si Muero Mañana`;
        if (stickyNum) stickyNum.textContent = `0${track.id}`;

        const drawerTitle = document.getElementById('drawerTrackTitle');
        const drawerNum = document.getElementById('drawerTrackNum');

        if (drawerTitle) drawerTitle.textContent = track.title;
        if (drawerNum) drawerNum.textContent = `0${track.id}`;
    }
}

// --- Interactive Mobile Drawer & Lyrics Modal ---
function openMobileDrawer() {
    const drawer = document.getElementById('mobilePlayerDrawer');
    if (drawer) {
        drawer.classList.add('open');
        if (navigator.vibrate) navigator.vibrate(15);
    }
}

function closeMobileDrawer() {
    const drawer = document.getElementById('mobilePlayerDrawer');
    if (drawer) {
        drawer.classList.remove('open');
    }
}

function openLyrics(index) {
    const track = tracksData[index];
    const lockedOverlay = document.getElementById('lyricsLockedOverlay');
    const lyricsBody = document.getElementById('lyricsBody');
    const noteBox = document.getElementById('lyricsNoteBox');

    if (!unlocked) {
        if (lockedOverlay) lockedOverlay.classList.remove('hidden');
        if (lyricsBody) {
            lyricsBody.className = "font-pop text-base leading-relaxed whitespace-pre-line text-zinc-400 blur-md select-none pointer-events-none opacity-40 transition-all duration-500";
        }
        if (noteBox) {
            noteBox.className = "p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs font-pop text-red-200 italic leading-relaxed blur-sm select-none pointer-events-none opacity-40 transition-all duration-500";
        }
    } else {
        if (lockedOverlay) lockedOverlay.classList.add('hidden');
        if (lyricsBody) {
            lyricsBody.className = "font-pop text-base leading-relaxed whitespace-pre-line text-zinc-200 selectable-text blur-none select-text pointer-events-auto opacity-100 transition-all duration-500";
        }
        if (noteBox) {
            noteBox.className = "p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs font-pop text-red-200 italic leading-relaxed blur-none select-text pointer-events-auto opacity-100 transition-all duration-500";
        }
    }

    const modal = document.getElementById('lyricsModal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        if (modal.children[0]) modal.children[0].classList.remove('scale-95');
    }, 10);

    if (navigator.vibrate) navigator.vibrate(20);
}

function openCurrentLyrics() {
    openLyrics(currentTrackIndex !== -1 ? currentTrackIndex : 0);
}

function closeLyrics() {
    const modal = document.getElementById('lyricsModal');
    modal.classList.add('opacity-0');
    if (modal.children[0]) modal.children[0].classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function toggleDedication() {
    const content = document.getElementById('dedicationContent');
    const text = document.getElementById('dedicationToggleText');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        text.textContent = '[ Ocultar Carta ]';
    } else {
        content.classList.add('hidden');
        text.textContent = '[ Leer Carta ]';
    }
}

// --- Toast System ---
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastText = document.getElementById('toastText');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2400);
}

// --- Canvas Ambient Particles Effects ---
function initCanvasEffects() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 45 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.4 + 0.1,
        vy: -(Math.random() * 0.4 + 0.1),
        vx: (Math.random() - 0.5) * 0.3
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const currentTheme = themePalettes[currentTrackIndex >= 0 ? currentTrackIndex : 0];

        if (isPlaying) {
            const time = Date.now() * 0.003;
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            for (let x = 0; x < canvas.width; x += 10) {
                const y = canvas.height - Math.sin(x * 0.01 + time) * 15 - 10;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.fillStyle = currentTheme.glow;
            ctx.fill();
        }

        particles.forEach(p => {
            p.y += isPlaying ? p.vy * 1.5 : p.vy;
            p.x += p.vx;

            if (p.y < 0) p.y = canvas.height;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = currentTheme.primary;
            ctx.shadowBlur = 12;
            ctx.shadowColor = currentTheme.shadow;
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }
    draw();
}

// Initialization on Window Load
window.addEventListener('DOMContentLoaded', () => {
    checkAuthOnLoad();
    initCountdown();
    renderTracklist();
    initCanvasEffects();
});
