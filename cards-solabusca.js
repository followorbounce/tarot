// The Sola Busca tarot (Italy, 1491) — the oldest complete surviving
// 78-card deck, and the first with fully illustrated (not just pip)
// suit cards. Public domain (published before 1931). Images: Wikimedia
// Commons, "Category:Sola-Busca tarot deck", files numbered 00-77.
//
// The 22 trumps carry unique Renaissance names (Mato, Panfilio, ...)
// rather than the familiar "The Magician" / "The Tower" titles, but
// occupy the same 22 structural positions as the Tarot de Marseille
// trump sequence (Sola Busca uses the Marseille ordering, where
// Justice is the 8th trump and Strength the 11th — unlike the later
// Rider-Waite-Smith deck, which swapped those two). Meanings below
// follow that positional correspondence. The 56 suit cards have their
// own unique court-card names inscribed on the cards themselves
// (visible in the art), but are labeled here by suit and rank for
// consistency with the other decks on this site.
const SOLABUSCA_CARDS = [
  { num: "0",    name: "Mato (The Fool)",                 img: "images/solabusca/00.jpg", up: "new beginnings, spontaneity, faith, innocence, a leap of faith", rev: "recklessness, hesitancy, missed opportunity, poor judgment" },
  { num: "I",    name: "Panfilio (The Magician)",         img: "images/solabusca/01.jpg", up: "manifestation, resourcefulness, power, inspired action", rev: "manipulation, poor planning, untapped talents" },
  { num: "II",   name: "Postumio (The High Priestess)",   img: "images/solabusca/02.jpg", up: "intuition, mystery, the subconscious, inner voice", rev: "secrets withheld, disconnection from intuition, repressed feelings" },
  { num: "III",  name: "Lenpio (The Empress)",            img: "images/solabusca/03.jpg", up: "abundance, nurturing, fertility, nature", rev: "creative block, dependence, smothering" },
  { num: "IV",   name: "Mario (The Emperor)",             img: "images/solabusca/04.jpg", up: "authority, structure, control, fatherhood", rev: "domination, rigidity, lack of discipline" },
  { num: "V",    name: "Catulo (The Hierophant)",         img: "images/solabusca/05.jpg", up: "tradition, convention, institutions, belief systems", rev: "rebellion, unconventionality, challenging the status quo" },
  { num: "VI",   name: "Sesto (The Lovers)",              img: "images/solabusca/06.jpg", up: "love, harmony, relationships, choices", rev: "disharmony, imbalance, misaligned values" },
  { num: "VII",  name: "Deo Tauro (The Chariot)",         img: "images/solabusca/07.jpg", up: "willpower, victory, determination, direction", rev: "lack of control, opposition, scattered energy" },
  { num: "VIII", name: "Nerone (Justice)",                img: "images/solabusca/08.jpg", up: "fairness, truth, cause and effect, law", rev: "unfairness, dishonesty, lack of accountability" },
  { num: "IX",   name: "Falco (The Hermit)",              img: "images/solabusca/09.jpg", up: "introspection, solitude, inner guidance", rev: "isolation, loneliness, withdrawal" },
  { num: "X",    name: "Venturio (Wheel of Fortune)",     img: "images/solabusca/10.jpg", up: "cycles, fate, a turning point, luck", rev: "bad luck, resistance to change, breaking cycles" },
  { num: "XI",   name: "Tulio (Strength)",                img: "images/solabusca/11.jpg", up: "courage, patience, compassion, inner strength", rev: "self-doubt, weakness, insecurity" },
  { num: "XII",  name: "Carbone (The Hanged Man)",        img: "images/solabusca/12.jpg", up: "surrender, new perspective, letting go", rev: "stalling, resistance, needless sacrifice" },
  { num: "XIII", name: "Catone (Death)",                  img: "images/solabusca/13.jpg", up: "endings, transformation, transition", rev: "resistance to change, stagnation, fear of endings" },
  { num: "XIV",  name: "Bocho (Temperance)",              img: "images/solabusca/14.jpg", up: "balance, moderation, patience, purpose", rev: "imbalance, excess, lack of harmony" },
  { num: "XV",   name: "Metelo (The Devil)",              img: "images/solabusca/15.jpg", up: "bondage, addiction, materialism, the shadow self", rev: "breaking free, release, reclaiming power" },
  { num: "XVI",  name: "Olivo (The Tower)",                img: "images/solabusca/16.jpg", up: "sudden ruin, upheaval, revelation", rev: "avoiding disaster, delayed upheaval, fear of change" },
  { num: "XVII", name: "Ipeo (The Star)",                 img: "images/solabusca/17.jpg", up: "hope, faith, renewal, inspiration", rev: "despair, disconnection, lack of faith" },
  { num: "XVIII", name: "Lentulo (The Moon)",              img: "images/solabusca/18.jpg", up: "illusion, fear, anxiety, the subconscious", rev: "release of fear, repressed emotion surfacing, confusion clearing" },
  { num: "XIX",  name: "Sabino (The Sun)",                img: "images/solabusca/19.jpg", up: "joy, success, vitality, positivity", rev: "temporary sadness, inner child wounds, lack of clarity" },
  { num: "XX",   name: "Nenbroto (Judgement)",            img: "images/solabusca/20.jpg", up: "reflection, reckoning, awakening, rebirth", rev: "self-doubt, refusal of self-examination, ignoring the call" },
  { num: "XXI",  name: "Nabuchodenasor (The World)",      img: "images/solabusca/21.jpg", up: "completion, integration, accomplishment", rev: "incompletion, lack of closure, shortcuts" },

  ...solaMinorSuit("Cups", 22, [
    ["Ace", "new feelings, intuition, love", "emotional loss, blocked creativity, emptiness"],
    ["Two", "unity, partnership, attraction", "imbalance, broken communication, tension"],
    ["Three", "friendship, celebration, community", "overindulgence, gossip, isolation"],
    ["Four", "apathy, contemplation, disconnection", "sudden awareness, choosing happiness, boredom"],
    ["Five", "loss, grief, regret", "acceptance, moving on, finding peace"],
    ["Six", "nostalgia, memories, reunion", "stuck in the past, unrealistic expectations"],
    ["Seven", "choices, illusion, wishful thinking", "clarity, alignment, overcoming temptation"],
    ["Eight", "walking away, disillusionment, seeking truth", "avoidance, fear of moving on, stagnation"],
    ["Nine", "contentment, satisfaction, gratitude", "overindulgence, emptiness despite success"],
    ["Ten", "harmony, fulfillment, family", "broken family, disconnection, unrealistic expectations"],
    ["Page", "creativity, intuition, curiosity", "emotional immaturity, escapism, blocked creativity"],
    ["Knight", "romance, charm, imagination", "moodiness, unrealistic expectations, disappointment"],
    ["Queen", "compassion, intuition, emotional security", "insecurity, dependence, martyrdom"],
    ["King", "emotional balance, diplomacy, compassion", "moodiness, manipulation, emotional volatility"],
  ]),

  ...solaMinorSuit("Pentacles", 36, [
    ["Ace", "new opportunity, prosperity, manifestation", "missed opportunity, lack of planning, scarcity"],
    ["Two", "balance, adaptability, juggling priorities", "overwhelm, disorganization, imbalance"],
    ["Three", "teamwork, collaboration, skill", "lack of teamwork, disorganization, competing goals"],
    ["Four", "security, control, saving", "greed, materialism, letting go"],
    ["Five", "hardship, isolation, financial loss", "recovery, support, spiritual poverty"],
    ["Six", "generosity, giving and receiving, charity", "strings attached, debt, one-sided generosity"],
    ["Seven", "patience, investment, the long-term view", "impatience, lack of reward, poor investment"],
    ["Eight", "diligence, mastery, craftsmanship", "perfectionism, lack of focus, mediocrity"],
    ["Nine", "abundance, self-sufficiency, luxury", "overwork, superficiality, reckless spending"],
    ["Ten", "legacy, wealth, family, tradition", "financial loss, instability, broken traditions"],
    ["Page", "ambition, curiosity, a new venture", "lack of progress, procrastination, unrealistic goals"],
    ["Knight", "diligence, routine, reliability", "boredom, stagnation, perfectionism"],
    ["Queen", "nurturing, practicality, resourcefulness", "self-neglect, smothering, imbalance"],
    ["King", "abundance, security, discipline", "materialism, stubbornness, poor financial decisions"],
  ]),

  ...solaMinorSuit("Wands", 50, [
    ["Ace", "inspiration, new opportunity, growth", "delays, lack of motivation, missed opportunity"],
    ["Two", "planning, decisions, discovery", "fear of the unknown, playing it safe, lack of planning"],
    ["Three", "expansion, foresight, progress", "delays, obstacles, lack of foresight"],
    ["Four", "celebration, harmony, homecoming", "instability, conflict at home, lack of support"],
    ["Five", "conflict, competition, tension", "avoiding conflict, inner tension, resolving differences"],
    ["Six", "victory, recognition, success", "self-doubt, fall from grace, egotism"],
    ["Seven", "perseverance, defensiveness, standing your ground", "overwhelmed, giving up, exhaustion"],
    ["Eight", "swift action, movement, alignment", "delays, frustration, resisting change"],
    ["Nine", "resilience, persistence, boundaries", "exhaustion, defensiveness, paranoia"],
    ["Ten", "burden, responsibility, hard work", "overwhelm, delegation, burnout"],
    ["Page", "exploration, excitement, free spirit", "lack of direction, procrastination, haste"],
    ["Knight", "energy, passion, adventure", "impulsiveness, recklessness, haste"],
    ["Queen", "confidence, courage, determination", "self-doubt, jealousy, insecurity"],
    ["King", "leadership, vision, entrepreneurship", "impulsiveness, high expectations, ruthlessness"],
  ]),

  ...solaMinorSuit("Swords", 64, [
    ["Ace", "clarity, breakthrough, a new idea", "confusion, chaos, miscommunication"],
    ["Two", "a difficult decision, stalemate, avoidance", "indecision, confusion, information overload"],
    ["Three", "heartbreak, grief, pain", "healing, forgiveness, moving on"],
    ["Four", "rest, recovery, contemplation", "restlessness, burnout, stagnation"],
    ["Five", "conflict, defeat, winning at all costs", "reconciliation, resentment, moving past conflict"],
    ["Six", "transition, moving on, leaving hardship behind", "resistance to change, unresolved issues"],
    ["Seven", "deception, strategy, sneakiness", "coming clean, self-deceit, getting caught"],
    ["Eight", "restriction, self-imposed limits, victim mentality", "self-empowerment, releasing limiting beliefs"],
    ["Nine", "anxiety, worry, nightmares", "hope, releasing fear, reaching out for help"],
    ["Ten", "painful endings, betrayal, rock bottom", "recovery, resisting an inevitable end"],
    ["Page", "curiosity, restlessness, mental energy", "gossip, haste, lack of tact"],
    ["Knight", "action, impulsiveness, ambition", "recklessness, unpredictability, burnout"],
    ["Queen", "independence, clear boundaries, direct communication", "coldness, bitterness, harsh judgment"],
    ["King", "authority, truth, intellectual power", "manipulation, abuse of power, tyranny"],
  ]),
];

function solaMinorSuit(suit, startNum, entries) {
  return entries.map(([rank, up, rev], i) => ({
    name: `${rank} of ${suit}`,
    img: `images/solabusca/${String(startNum + i).padStart(2, "0")}.jpg`,
    up,
    rev,
  }));
}
