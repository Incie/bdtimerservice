function tierTest(input) {
    let tier = input;
    let tierId = Number(tier.replace("tier", ''));

    if (!tier.startsWith("tier") || isNaN(tierId) || (typeof(tierId) !== "number" || tierId < 1 || tierId > 8) && tierId !== '?') {
        return false;
    }

    return true;
}


const testData = [
    "tier0",
    "tier1",
    "tier2",
    "tier3",
    "tier4",
    "tier5",
    "tier6",
    "tier7",
    "tier8",
    "tier9",
    "tier?",
    "tier55",
    "tier-1",
    "tier77",
    "tier9999",
    "0",
    "meow0",
    "tiermeow"
];

testData.forEach(t => {
    console.log(t + " result = " + tierTest(t));
});