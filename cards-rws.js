// The Rider-Waite-Smith tarot deck (1909), art by Pamela Colman Smith.
// Public domain in the US and UK. Images: Wikimedia Commons,
// "Category:Rider-Waite tarot deck (Roses & Lilies)".
const RWS_CARDS = [
  // Major Arcana
  { name: "The Fool", num: "0", img: "images/rws/major_00.jpg", up: "new beginnings, spontaneity, faith, innocence, a leap of faith", rev: "recklessness, hesitancy, missed opportunity, poor judgment" },
  { name: "The Magician", num: "I", img: "images/rws/major_01.jpg", up: "manifestation, resourcefulness, power, inspired action", rev: "manipulation, poor planning, untapped talents" },
  { name: "The High Priestess", num: "II", img: "images/rws/major_02.jpg", up: "intuition, mystery, the subconscious, inner voice", rev: "secrets withheld, disconnection from intuition, repressed feelings" },
  { name: "The Empress", num: "III", img: "images/rws/major_03.jpg", up: "abundance, nurturing, fertility, nature", rev: "creative block, dependence, smothering" },
  { name: "The Emperor", num: "IV", img: "images/rws/major_04.jpg", up: "authority, structure, control, fatherhood", rev: "domination, rigidity, lack of discipline" },
  { name: "The Hierophant", num: "V", img: "images/rws/major_05.jpg", up: "tradition, convention, institutions, belief systems", rev: "rebellion, unconventionality, challenging the status quo" },
  { name: "The Lovers", num: "VI", img: "images/rws/major_06.jpg", up: "love, harmony, relationships, choices", rev: "disharmony, imbalance, misaligned values" },
  { name: "The Chariot", num: "VII", img: "images/rws/major_07.jpg", up: "willpower, victory, determination, direction", rev: "lack of control, opposition, scattered energy" },
  { name: "Strength", num: "VIII", img: "images/rws/major_08.jpg", up: "courage, patience, compassion, inner strength", rev: "self-doubt, weakness, insecurity" },
  { name: "The Hermit", num: "IX", img: "images/rws/major_09.jpg", up: "introspection, solitude, inner guidance", rev: "isolation, loneliness, withdrawal" },
  { name: "Wheel of Fortune", num: "X", img: "images/rws/major_10.jpg", up: "cycles, fate, a turning point, luck", rev: "bad luck, resistance to change, breaking cycles" },
  { name: "Justice", num: "XI", img: "images/rws/major_11.jpg", up: "fairness, truth, cause and effect, law", rev: "unfairness, dishonesty, lack of accountability" },
  { name: "The Hanged Man", num: "XII", img: "images/rws/major_12.jpg", up: "surrender, new perspective, letting go", rev: "stalling, resistance, needless sacrifice" },
  { name: "Death", num: "XIII", img: "images/rws/major_13.jpg", up: "endings, transformation, transition", rev: "resistance to change, stagnation, fear of endings" },
  { name: "Temperance", num: "XIV", img: "images/rws/major_14.jpg", up: "balance, moderation, patience, purpose", rev: "imbalance, excess, lack of harmony" },
  { name: "The Devil", num: "XV", img: "images/rws/major_15.jpg", up: "bondage, addiction, materialism, the shadow self", rev: "breaking free, release, reclaiming power" },
  { name: "The Tower", num: "XVI", img: "images/rws/major_16.jpg", up: "sudden change, upheaval, revelation", rev: "avoiding disaster, delayed upheaval, fear of change" },
  { name: "The Star", num: "XVII", img: "images/rws/major_17.jpg", up: "hope, faith, renewal, inspiration", rev: "despair, disconnection, lack of faith" },
  { name: "The Moon", num: "XVIII", img: "images/rws/major_18.jpg", up: "illusion, fear, anxiety, the subconscious", rev: "release of fear, repressed emotion surfacing, confusion clearing" },
  { name: "The Sun", num: "XIX", img: "images/rws/major_19.jpg", up: "joy, success, vitality, positivity", rev: "temporary sadness, inner child wounds, lack of clarity" },
  { name: "Judgement", num: "XX", img: "images/rws/major_20.jpg", up: "reflection, reckoning, awakening, rebirth", rev: "self-doubt, refusal of self-examination, ignoring the call" },
  { name: "The World", num: "XXI", img: "images/rws/major_21.jpg", up: "completion, integration, accomplishment", rev: "incompletion, lack of closure, shortcuts" },

  // Minor Arcana — Wands
  ...rwsMinorSuit("Wands", "wands", [
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

  // Minor Arcana — Cups
  ...rwsMinorSuit("Cups", "cups", [
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

  // Minor Arcana — Swords
  ...rwsMinorSuit("Swords", "swords", [
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

  // Minor Arcana — Pentacles
  ...rwsMinorSuit("Pentacles", "pentacles", [
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
];

function rwsMinorSuit(suit, folder, entries) {
  return entries.map(([rank, up, rev], i) => ({
    name: `${rank} of ${suit}`,
    img: `images/rws/${folder}_${String(i + 1).padStart(2, "0")}.jpg`,
    up,
    rev,
  }));
}
