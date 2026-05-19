// ---- Supabase ----
const SUPABASE_URL = "https://odpqbmjuuazjilygogqj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kcHFibWp1dWF6amlseWdvZ3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNDA3ODAsImV4cCI6MjA5MjcxNjc4MH0.C3i5Hx8U18LnhFrFCstiDB9t1QNZI13icrkwxvwQI7s";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---- Data ----
// [title, creator, tone, coverUrl]
const films = [
  ["Past Lives", "Celine Song · 2023", "#1c1612", "assets/covers/film-past-lives.png"],
  ["Aftersun", "Charlotte Wells · 2022", "#15181c", "assets/covers/film-aftersun.jpg"],
  ["In the Mood for Love", "Wong Kar-wai · 2000", "#1f1418", "assets/covers/film-in-the-mood-for-love.jpg"],
  ["Portrait of a Lady on Fire", "Céline Sciamma · 2019", "#181a1c", "assets/covers/film-portrait-of-a-lady-on-fire.jpg"],
  ["Lost in Translation", "Sofia Coppola · 2003", "#1a1916", "assets/covers/film-lost-in-translation.jpg"],
  ["Spirited Away", "Hayao Miyazaki · 2001", "#161c1a", "assets/covers/film-spirited-away.png"],
  ["Moonlight", "Barry Jenkins · 2016", "#15171c", "assets/covers/film-moonlight.png"],
  ["Perfect Days", "Wim Wenders · 2023", "#191614", "assets/covers/film-perfect-days.jpg"],
  ["The Worst Person in the World", "Joachim Trier · 2021", "#1c1717", "assets/covers/film-the-worst-person-in-the-world.jpg"],
  ["Call Me By Your Name", "Luca Guadagnino · 2017", "#1c1a14", "assets/covers/film-call-me-by-your-name.png"],
  ["Parasite", "Bong Joon-ho · 2019", "#15181c", "assets/covers/film-parasite.png"],
  ["Everything Everywhere All at Once", "Daniels · 2022", "#1f1418", "assets/covers/film-everything-everywhere-all-at-once.jpg"],
  ["Roma", "Alfonso Cuarón · 2018", "#181a1c", "assets/covers/film-roma.png"],
  ["Her", "Spike Jonze · 2013", "#1c1612", "assets/covers/film-her.jpg"],
  ["The Grand Budapest Hotel", "Wes Anderson · 2014", "#1c1a14", "assets/covers/film-the-grand-budapest-hotel.png"],
  ["La La Land", "Damien Chazelle · 2016", "#191614", "assets/covers/film-la-la-land.png"],
  ["Eternal Sunshine of the Spotless Mind", "Michel Gondry · 2004", "#15171c", "assets/covers/film-eternal-sunshine-of-the-spotless-mind.png"],
  ["The Tree of Life", "Terrence Malick · 2011", "#161c1a", "assets/covers/film-the-tree-of-life.jpg"],
  ["Drive", "Nicolas Winding Refn · 2011", "#1c1717", "assets/covers/film-drive.jpg"],
  ["Whiplash", "Damien Chazelle · 2014", "#1a1916", "assets/covers/film-whiplash.jpg"],
  ["Mulholland Drive", "David Lynch · 2001", "#1c1612", "assets/covers/film-mulholland-drive.png"],
  ["Phantom Thread", "Paul Thomas Anderson · 2017", "#181a1c", "assets/covers/film-phantom-thread.png"],
  ["Lady Bird", "Greta Gerwig · 2017", "#1c1a14", "assets/covers/film-lady-bird.jpeg"],
  ["Oppenheimer", "Christopher Nolan · 2023", "#1c1612", "assets/covers/film-oppenheimer.jpg"],
  ["Dune", "Denis Villeneuve · 2021", "#15181c", "assets/covers/film-dune.jpg"],
  ["Inception", "Christopher Nolan · 2010", "#1f1418", "assets/covers/film-inception.jpg"],
  ["Interstellar", "Christopher Nolan · 2014", "#181a1c", "assets/covers/film-interstellar.jpg"],
  ["Pulp Fiction", "Quentin Tarantino · 1994", "#1a1916", "assets/covers/film-pulp-fiction.jpg"],
  ["The Dark Knight", "Christopher Nolan · 2008", "#15171c", "assets/covers/film-the-dark-knight.jpg"],
  ["There Will Be Blood", "Paul Thomas Anderson · 2007", "#191614", "assets/covers/film-there-will-be-blood.jpg"],
  ["Anatomy of a Fall", "Justine Triet · 2023", "#1c1a14", "assets/covers/film-anatomy-of-a-fall.jpg"],
  ["Poor Things", "Yorgos Lanthimos · 2023", "#181a1c", "assets/covers/film-poor-things.jpg"],
  ["Anora", "Sean Baker · 2024", "#1c1818", "assets/covers/film-anora.jpg"],
  ["2001: A Space Odyssey", "Stanley Kubrick · 1968", "#15171c", "assets/covers/film-2001-a-space-odyssey.png"],
  ["Stalker", "Andrei Tarkovsky · 1979", "#181614", "assets/covers/film-stalker.jpg"],
  ["Synecdoche, New York", "Charlie Kaufman · 2008", "#1a1916", "assets/covers/film-synecdoche-new-york.jpg"],
  ["Burning", "Lee Chang-dong · 2018", "#191614", "assets/covers/film-burning.png"],
];
const albums = [
  ["Blonde", "Frank Ocean · 2016", "#1b1814", "assets/covers/album-blonde.jpeg"],
  ["Carrie & Lowell", "Sufjan Stevens · 2015", "#181c1a", "assets/covers/album-carrie-lowell.jpg"],
  ["Punisher", "Phoebe Bridgers · 2020", "#1a161c", "assets/covers/album-punisher.png"],
  ["A Seat at the Table", "Solange · 2016", "#1c1814", "assets/covers/album-a-seat-at-the-table.png"],
  ["Currents", "Tame Impala · 2015", "#15181c", "assets/covers/album-currents.png"],
  ["Lemonade", "Beyoncé · 2016", "#1b1814", "assets/covers/album-lemonade.png"],
  ["channel ORANGE", "Frank Ocean · 2012", "#1c1814", "assets/covers/album-channel-orange.jpg"],
  ["To Pimp a Butterfly", "Kendrick Lamar · 2015", "#15181c", "assets/covers/album-to-pimp-a-butterfly.png"],
  ["Bon Iver, Bon Iver", "Bon Iver · 2011", "#161a1c", "assets/covers/album-bon-iver-bon-iver.jpg"],
  ["The Suburbs", "Arcade Fire · 2010", "#181c1a", "assets/covers/album-the-suburbs.jpg"],
  ["DAMN.", "Kendrick Lamar · 2017", "#1c1612", "assets/covers/album-damn.png"],
  ["In Rainbows", "Radiohead · 2007", "#181614", "assets/covers/album-in-rainbows.png"],
  ["Norman Fucking Rockwell!", "Lana Del Rey · 2019", "#161a1c", "assets/covers/album-norman-fucking-rockwell.png"],
  ["Random Access Memories", "Daft Punk · 2013", "#1c1814", "assets/covers/album-random-access-memories.png"],
  ["My Beautiful Dark Twisted Fantasy", "Kanye West · 2010", "#1c1612", "assets/covers/album-my-beautiful-dark-twisted-fantasy.jpg"],
  ["Graduation", "Kanye West · 2007", "#1f1418", "assets/covers/album-graduation.jpg"],
  ["The Life of Pablo", "Kanye West · 2016", "#1a1916", "assets/covers/album-the-life-of-pablo.jpg"],
  ["Igor", "Tyler, the Creator · 2019", "#1c1a14", "assets/covers/album-igor.jpg"],
  ["AM", "Arctic Monkeys · 2013", "#161616", "assets/covers/album-am.png"],
  ["The Miseducation of Lauryn Hill", "Lauryn Hill · 1998", "#1c1818", "assets/covers/album-the-miseducation-of-lauryn-hill.png"],
  ["SOS", "SZA · 2022", "#161a1c", "assets/covers/album-sos-sza.jpg"],
  ["Renaissance", "Beyoncé · 2022", "#1b1814", "assets/covers/album-renaissance.jpg"],
  ["Chromakopia", "Tyler, the Creator · 2024", "#1c1a14", "assets/covers/album-chromakopia.jpg"],
  ["OK Computer", "Radiohead · 1997", "#1a1916", "assets/covers/album-ok-computer.png"],
  ["Kid A", "Radiohead · 2000", "#15181c", "assets/covers/album-kid-a.png"],
  ["Madvillainy", "Madvillain · 2004", "#161616", "assets/covers/album-madvillainy.png"],
  ["808s & Heartbreak", "Kanye West · 2008", "#15181c", "assets/covers/album-808s-and-heartbreak.png"],
  ["Atrocity Exhibition", "Danny Brown · 2016", "#1c1612", "assets/covers/album-atrocity-exhibition.jpg"],
];
const books = [
  ["Normal People", "Sally Rooney", "#181a1c", "assets/covers/book-normal-people.png"],
  ["A Little Life", "Hanya Yanagihara", "#1c1614", "assets/covers/book-a-little-life.jpg"],
  ["My Year of Rest and Relaxation", "Ottessa Moshfegh", "#1a1a18", "assets/covers/book-my-year-of-rest-and-relaxation.jpg"],
  ["Just Kids", "Patti Smith", "#161616", "assets/covers/book-just-kids.jpg"],
  ["Crying in H Mart", "Michelle Zauner", "#1c1818", "assets/covers/book-crying-in-h-mart.png"],
  ["Open City", "Teju Cole", "#15181a", "assets/covers/book-open-city.jpg"],
  ["The Idiot", "Elif Batuman", "#1a1614", "assets/covers/book-the-idiot.jpg"],
  ["Beloved", "Toni Morrison", "#1c1612", "assets/covers/book-beloved.jpg"],
  ["The Secret History", "Donna Tartt", "#1c1717", "assets/covers/book-the-secret-history.jpg"],
  ["The Road", "Cormac McCarthy", "#161616", "assets/covers/book-the-road.jpg"],
  ["Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", "#181a1c", "assets/covers/book-tomorrow-and-tomorrow.jpg"],
  ["Project Hail Mary", "Andy Weir", "#181c1a", "assets/covers/book-project-hail-mary.jpg"],
  ["Meditations", "Marcus Aurelius", "#1a1614", "assets/covers/book-meditations.jpg"],
  ["The Metamorphosis", "Franz Kafka", "#1c1612", "assets/covers/book-the-metamorphosis.jpg"],
  ["Crime and Punishment", "Fyodor Dostoevsky", "#1a1916", "assets/covers/book-crime-and-punishment.jpg"],
  ["The Brothers Karamazov", "Fyodor Dostoevsky", "#181614", "assets/covers/book-the-brothers-karamazov.jpg"],
  ["East of Eden", "John Steinbeck", "#1c1814", "assets/covers/book-east-of-eden.jpg"],
  ["Blood Meridian", "Cormac McCarthy", "#15181c", "assets/covers/book-blood-meridian.jpg"],
  ["The Stranger", "Albert Camus", "#161616", "assets/covers/book-the-stranger.jpg"],
  ["Man's Search for Meaning", "Viktor Frankl", "#1c1818", "assets/covers/book-mans-search-for-meaning.jpg"],
  ["1984", "George Orwell", "#1c1612", "assets/covers/book-1984.jpg"],
  ["Sapiens", "Yuval Noah Harari", "#181a1c", "assets/covers/book-sapiens.jpg"],
  ["Dune", "Frank Herbert", "#1f1418", "assets/covers/book-dune.jpg"],
];
const podcasts = [
  ["The Daily", "The New York Times", "#1a1614", "assets/covers/podcast-the-daily.jpg"],
  ["Song Exploder", "Hrishikesh Hirway", "#15161a", "assets/covers/podcast-song-exploder.png"],
  ["Serial", "Sarah Koenig", "#1c1612", "assets/covers/podcast-serial.png"],
  ["Lex Fridman Podcast", "Lex Fridman", "#161616", "assets/covers/podcast-lex-fridman.jpg"],
  ["Huberman Lab", "Andrew Huberman", "#181614", "assets/covers/podcast-huberman-lab.jpg"],
  ["Acquired", "Ben Gilbert & David Rosenthal", "#15181c", "assets/covers/podcast-acquired.jpg"],
];

const allMedia = [...films, ...albums, ...books, ...podcasts];

// ---- Tile component ----
function tileHTML(opts) {
  const title = opts.title || "";
  const creator = opts.creator || "";
  const kind = opts.kind || "";
  const tone = opts.tone || "#161616";
  const cover = opts.cover || "";
  const square = !!opts.square;
  const hasCover = !!cover;
  const k = kind ? '<div class="tile-kind">' + kind + '</div>' : '<div class="tile-kind"></div>';
  const img = hasCover
    ? '<img class="tile-image" src="' + cover + '" alt="" loading="lazy" referrerpolicy="no-referrer" />'
    : '';
  const cls = 'tile' + (hasCover ? ' has-cover' : '') + (square ? ' square' : '');
  return (
    '<div class="' + cls + '" style="--tile-tone:' + tone + '">' +
      img +
      k +
      '<div class="tile-meta">' +
        '<div class="tile-title">' + title + '</div>' +
        '<div class="tile-cred">' + creator + '</div>' +
      '</div>' +
      '<div class="tile-overlay">' +
        '<div class="h">' + title + '</div>' +
        '<div class="c">' + creator + '</div>' +
      '</div>' +
    '</div>'
  );
}

function shuffle(arr) {
  return arr.map(v => [Math.random(), v]).sort((a,b) => a[0]-b[0]).map(([,v]) => v);
}

// ---- Hero wall ----
function buildHeroWall() {
  const wall = document.getElementById("hero-wall");
  if (!wall) return;
  const COLS = 8;
  const PER_COL = 8;
  // Tag each entry with its real kind so we can style albums/podcasts as squares
  const tagged = [
    ...films.map(e => ({ title: e[0], creator: e[1], tone: e[2], cover: e[3], kind: "FILM" })),
    ...albums.map(e => ({ title: e[0], creator: e[1], tone: e[2], cover: e[3], kind: "ALBUM" })),
    ...books.map(e => ({ title: e[0], creator: e[1], tone: e[2], cover: e[3], kind: "BOOK" })),
    ...podcasts.map(e => ({ title: e[0], creator: e[1], tone: e[2], cover: e[3], kind: "PODCAST" })),
  ];
  const deck = shuffle(tagged);
  const slots = COLS * PER_COL;
  // If deck is smaller than slots, recycle (shouldn't happen now but defensive)
  while (deck.length < slots) deck.push(...shuffle(tagged));
  for (let c = 0; c < COLS; c++) {
    const col = document.createElement("div");
    col.className = "wall-col";
    const items = deck.slice(c * PER_COL, (c + 1) * PER_COL);
    const html = [...items, ...items].map((e) => {
      // Albums are square (1:1 art); books/films stay vertical (2:3 poster).
      // Podcasts also have square cover art so they get the square treatment too.
      const square = e.kind === "ALBUM" || e.kind === "PODCAST";
      return tileHTML({ title: e.title, creator: e.creator, kind: e.kind, tone: e.tone, cover: e.cover, square: square });
    }).join("");
    col.innerHTML = html;
    wall.appendChild(col);
  }
}

// ---- Marquee ----
const CAT_DATA = {
  films:    { kind: "FILM",    list: () => films },
  books:    { kind: "BOOK",    list: () => books },
  albums:   { kind: "ALBUM",   list: () => albums },
  podcasts: { kind: "PODCAST", list: () => podcasts },
};
let _currentCat = "films";

function buildMarquee() { renderMarquee("films"); }

function renderMarquee(cat) {
  _currentCat = cat;
  const conf = CAT_DATA[cat];
  if (!conf) return;
  const tagged = conf.list().map(entry => ({
    title: entry[0], creator: entry[1], kind: conf.kind, tone: entry[2], cover: entry[3]
  }));
  let pool = tagged.slice();
  while (pool.length < 14) pool = pool.concat(tagged);

  const r1 = shuffle(pool.slice());
  const r1El = document.getElementById("marquee-row-1");
  if (r1El) r1El.innerHTML = [...r1, ...r1].map(tileHTML).join("");
}

function bindCatPills() {
  const pills = document.querySelectorAll("#cat-pills .cat-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const cat = pill.dataset.cat;
      if (!cat || cat === _currentCat) return;
      pills.forEach(p => p.classList.toggle("active", p === pill));
      const tracks = document.querySelectorAll(".marquee-track");
      tracks.forEach(t => { t.style.transition = "opacity 280ms ease"; t.style.opacity = "0"; });
      setTimeout(() => {
        renderMarquee(cat);
        tracks.forEach(t => { t.style.opacity = "1"; });
      }, 280);
    });
  });
}

// ---- Top 3 ----
function buildTop3() {
  const row = document.getElementById("top3-row");
  if (!row) return;
  const picks = [
    { title: "City of God", creator: "F. Meirelles", tone: "#1c1612", cover: "assets/covers/film-city-of-god.jpg" },
    { title: "Uncut Gems", creator: "Safdie Bros", tone: "#1f1418", cover: "assets/covers/film-uncut-gems.jpg" },
    { title: "The Social Network", creator: "D. Fincher", tone: "#15181c", cover: "assets/covers/film-the-social-network.png" },
  ];
  row.innerHTML = picks.map(tileHTML).join("");
}

// ---- Nav scroll ----
function bindNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ---- Reveal ----
function bindReveals() {
  const els = document.querySelectorAll(".reveal, .reveal-stagger, .word-reveal");
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  els.forEach(el => io.observe(el));
}

// ---- Word reveal ----
function splitWords() {
  document.querySelectorAll("[data-words]").forEach(el => {
    const html = el.innerHTML;
    const tokens = [];
    const re = /(<em[^>]*>.*?<\/em>|\S+)/g;
    let m;
    while ((m = re.exec(html)) !== null) tokens.push(m[1]);
    el.innerHTML = tokens.map(t =>
      '<span class="word"><span>' + t + '</span></span>'
    ).join(" ");
  });
}

// ---- Forms ----
function bindForms() {
  document.querySelectorAll("form[data-waitlist]").forEach(form => {
    const pill = form.classList.contains("waitlist-form")
      ? form
      : form.querySelector(".waitlist-form");
    if (!pill) return;

    if (!pill.querySelector(".waitlist-success")) {
      const msg = document.createElement("div");
      msg.className = "waitlist-success";
      msg.textContent = "Thank you!";
      pill.appendChild(msg);
    }

    const source = form.classList.contains("waitlist-form") ? "hero" : "final";

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (pill.classList.contains("is-success") || pill.dataset.busy === "1") return;
      const email = (new FormData(form).get("email") || "").toString().trim();
      if (!email) return;

      pill.dataset.busy = "1";
      const { error } = await sb.from("waitlist").insert({ email, source });
      pill.dataset.busy = "";

      // 23505 = unique_violation → already on the list, treat as success
      if (error && error.code !== "23505") {
        console.error("[favorite] waitlist error", error);
        return;
      }
      pill.classList.add("is-success");
    });
  });
}

// ---- Boot ----
document.addEventListener("DOMContentLoaded", () => {
  buildHeroWall();
  buildMarquee();
  bindCatPills();
  buildTop3();
  splitWords();
  bindNav();
  bindReveals();
  bindForms();
});
