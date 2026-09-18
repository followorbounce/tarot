// The Egyptian Tarot (Falconnier / Wegener, 1896) — 22 cards.
// Card art: public domain, sourced from Wikimedia Commons,
// "Category:Egyptian Tarot (Falconnier)".
// Names and esoteric correspondences follow the traditional
// Falconnier/Christian numbering (the Fool falls last, as card XXII).
const CARDS = [
  { num: "I",     name: "The Magus",              img: "images/01.png", up: "willpower, mastery, new beginnings, divine will made manifest", rev: "manipulation, poor timing, untapped potential" },
  { num: "II",    name: "The Gate of the Sanctuary", img: "images/02.png", up: "hidden knowledge, intuition, guardianship of mysteries", rev: "secrets withheld, superficial understanding, blocked intuition" },
  { num: "III",   name: "Isis-Urania",             img: "images/03.png", up: "fertility, cosmic motherhood, abundance, creation", rev: "barrenness, neglect, creative stagnation" },
  { num: "IV",    name: "The Cubic Stone",         img: "images/04.png", up: "foundation, authority, stability, the ordering of chaos", rev: "rigidity, tyranny, instability" },
  { num: "V",     name: "Master of the Arcanes",   img: "images/05.png", up: "sacred teaching, initiation, tradition, spiritual authority", rev: "dogma, false teaching, rejection of guidance" },
  { num: "VI",    name: "The Two Ways",            img: "images/06.png", up: "choice, duality, temptation, the crossroads of fate", rev: "the wrong choice, indecision, disharmony" },
  { num: "VII",   name: "The Chariot of Osiris",   img: "images/07.png", up: "triumph, control over opposing forces, resurrection", rev: "loss of direction, conflict, defeat" },
  { num: "VIII",  name: "The Balance and the Sword", img: "images/08.png", up: "divine judgment, equilibrium, truth", rev: "injustice, imbalance, avoidance of consequence" },
  { num: "IX",    name: "The Veiled Lamp",         img: "images/09.png", up: "inner light, solitary wisdom, guidance through darkness", rev: "isolation, withheld wisdom, losing one's way" },
  { num: "X",     name: "The Sphinx",              img: "images/10.png", up: "destiny, cosmic cycles, the riddle of fate resolved", rev: "misfortune, resistance to fate, an unanswered riddle" },
  { num: "XI",    name: "The Tamed Lion",          img: "images/11.png", up: "mastery over instinct, courage, gentle power", rev: "weakness, loss of self-control, hidden savagery" },
  { num: "XII",   name: "The Sacrifice",           img: "images/12.png", up: "surrender, initiation through suspension, a new vantage point", rev: "needless sacrifice, martyrdom, resistance to surrender" },
  { num: "XIII",  name: "The Reaping Skeleton",    img: "images/13.png", up: "transformation, the end of a cycle, inevitable change", rev: "fear of change, stagnation, a lingering ending" },
  { num: "XIV",   name: "The Two Urns",            img: "images/14.png", up: "alchemy, the blending of opposites, moderation", rev: "excess, discord, a failed synthesis" },
  { num: "XV",    name: "Typhon",                  img: "images/15.png", up: "chaos, bondage to material desire, the destructive shadow", rev: "breaking chains, confronting the shadow, reclaiming power" },
  { num: "XVI",   name: "The Thunder-struck Tower", img: "images/16.png", up: "sudden ruin, divine intervention, the collapse of false structures", rev: "averted catastrophe, delayed reckoning, fear of upheaval" },
  { num: "XVII",  name: "The Star of the Magi",    img: "images/17.png", up: "hope, guidance from above, renewal after ruin", rev: "lost hope, disconnection from guidance, despair" },
  { num: "XVIII", name: "The Twilight",            img: "images/18.png", up: "illusion, the unconscious, hidden dangers on the path", rev: "clarity emerging, fears confronted, illusions dispelled" },
  { num: "XIX",   name: "The Dazzling Light",      img: "images/19.png", up: "vitality, illumination, triumphant joy", rev: "clouded joy, delayed success, diminished vitality" },
  { num: "XX",    name: "The Rising of the Dead",  img: "images/20.png", up: "awakening, resurrection, a final reckoning", rev: "self-judgment, refusal to awaken, an unfinished reckoning" },
  { num: "XXI",   name: "The Crown of the Magi",   img: "images/21.png", up: "completion, cosmic attainment, the great work fulfilled", rev: "incompletion, delay, an unfinished cycle" },
  { num: "XXII",  name: "The Crocodile",           img: "images/22.png", up: "the unknowable, primal chaos, the soul before incarnation", rev: "folly, unseen danger, a reckless descent into chaos" },
];
