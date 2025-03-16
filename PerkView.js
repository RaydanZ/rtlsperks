const images = [
   
   
    { src: 'Perks/REINCARNATION.jpg', title: 'REINCARNATION', tier: 3, classes: ['ATK'] },
    { src: 'Perks/INSPIRED.jpg', title: 'INSPIRED', tier: 2, classes: ['ATK'], ['ATK_SPEED'] },
    { src: 'Perks/INDOMITABLE_WILL.jpg', title: 'INDOMITABLE WILL', tier: 2, classes: ['ATK'] },
    { src: 'Perks/DEEP_BREATH.jpg', title: 'DEEP BREATH', tier: 3, classes: ['ATK', 'SKILL'] },
    { src: 'Perks/HEAVIEST_SWORD.jpg', title: 'HEAVIEST SWORD', tier: 3, classes: ['HEAVY_ATTACK'] },
    { src: 'Perks/TENACIOUS_MIND.jpg', title: 'TENACIOUS MIND', tier: 1, classes: ['SURVIVE'] },
    { src: 'Perks/SELF_DEFENSE.jpg', title: 'SELF DEFENSE', tier: 3, classes: ['POSTURE', 'SURVIVE'] },
    { src: 'Perks/OLD_SCAR.jpg', title: 'OLD SCAR', tier: 3, classes: ['POSTURE'] },
    { src: 'Perks/SHOCK_DISPERSION.jpg', title: 'SHOCK DISPERSION', tier: 1, classes: ['SURVIVE'] },
    { src: 'Perks/GROWTH_SCROLL_FLASH.jpg', title: 'GROWTH SCROLL FLASH', tier: 2, classes: ['LEVEL', 'COUNTER_FLASH'] },
    { src: 'Perks/FLASH_SCROLL_COLLAPSE.jpg', title: 'FLASH SCROLL COLLAPSE', tier: 2, classes: ['COUNTER_FLASH', 'POSTURE'] },
    { src: 'Perks/AMBUSH_SCROLL_COLLAPSE.jpg', title: 'AMBUSH SCROLL COLLAPSE', tier: 2, classes: ['POSTURE', 'CRIT_RATE'] },
    { src: 'Perks/SLICE.jpg', title: 'SLICE', tier: 2, classes: ['POSTURE_DMG', 'COUNTER_FLASH'] },
    { src: 'Perks/PERFECT_TIMING.jpg', title: 'PERFECT TIMING', tier: 3, classes: ['COUNTER_FLASH', 'HEAVY_ATTACK'] },
    { src: 'Perks/RAPID_FLOW.jpg', title: 'RAPID FLOW', tier: 2, classes: ['ATK'] },
    { src: 'Perks/FLASH_SCROLL_RUPTURE.jpg', title: 'FLASH SCROLL RUPTURE', tier: 2, classes: ['COUNTER_FLASH', 'HP'] },
    { src: 'Perks/FLASH_SCROLL_RELEASE.jpg', title: 'FLASH SCROLL RELEASE', tier: 1, classes: ['COUNTER_FLASH'] },
    { src: 'Perks/FLASH_SCROLL_SHOCK.jpg', title: 'FLASH SCROLL SHOCK', tier: 2, classes: ['COUNTER_FLASH', 'POSTURE_DMG'] },
    { src: 'Perks/LETHAL_BLOW.jpg', title: 'LETHAL BLOW', tier: 3, classes: ['HEAVY_ATTACK'] },
    { src: 'Perks/RIPOSTE.jpg', title: 'RIPOSTE', tier: 3, classes: ['HP', 'HEAVY_ATTACK'] },
    { src: 'Perks/HAWK_EYE.jpg', title: 'HAWK EYE', tier: 1, classes: ['UNIQUENESS'] },
    { src: 'Perks/ULTIMATE_SCROLL_COLAPSE.jpg', title: 'ULTIMATE SCROLL COLAPSE', tier: 2, classes: ['SKILL', 'POSTURE'] },
    { src: 'Perks/WIND_WALK.jpg', title: 'WIND WALK', tier: 2, classes: ['UNIQUENESS'] },
    { src: 'Perks/BACK_FLOW.jpg', title: 'BACK FLOW', tier: 2, classes: ['POSTURE_DMG'] },
    { src: 'Perks/POSTURE_RESONANCE.jpg', title: 'POSTURE RESONANCE', tier: 2, classes: ['POSTURE_DMG', 'POSTURE'] },
    { src: 'Perks/FATAL_STRIKE.jpg', title: 'FATAL STRIKE', tier: 2, classes: ['POSTURE_DMG', 'CRIT_DMG'] },
    { src: 'Perks/SQUASH.jpg', title: 'SQUASH', tier: 3, classes: ['POSTURE_DMG'] },
    { src: 'Perks/STRUGGLE.jpg', title: 'STRUGGLE', tier: 2, classes: ['LIONHEART', 'HP'] },
    { src: 'Perks/KEEN_SENSE.jpg', title: 'KEEN SENSE', tier: 3, classes: ['COUNTER_FLASH', 'CRIT_RATE'] },
    { src: 'Perks/GROWTH_SCROLL_AMBUSH.jpg', title: 'GROWTH SCROLL AMBUSH', tier: 2, classes: ['LEVEL', 'CRIT_DMG'] },
    { src: 'Perks/DOUBLE_ARMOR.jpg', title: 'DOUBLE ARMOR', tier: 3, classes: ['POSTURE', 'SURVIVE'] },
    { src: 'Perks/ULTIMATE_SCROLL_FLASH.jpg', title: 'ULTIMATE SCROLL FLASH', tier: 2, classes: ['SKILL', 'COUNTER_FLASH'] },
    { src: 'Perks/DISARM.jpg', title: 'DISARM', tier: 3, classes: ['POSTURE_DMG'] },
    { src: 'Perks/STRENGTH_ENHANCEMENT_I.jpg', title: 'STRENGTH ENHANCEMENT I', tier: 1, classes: ['ATK'] },
    { src: 'Perks/STRENGTH_ENHANCEMENT_II.jpg', title: 'STRENGTH ENHANCEMENT II', tier: 2, classes: ['ATK'] },
    { src: 'Perks/SHOWDOWN.jpg', title: 'SHOWDOWN', tier: 2, classes: ['UNIQUENESS'] },
    { src: 'Perks/REFINED_PRECISION.jpg', title: 'REFINED PRECISION', tier: 2, classes: ['CRIT_DMG', 'COUNTER_FLASH'] },
    { src: 'Perks/FATAL_BLOW_I.jpg', title: 'FATAL BLOW I', tier: 1, classes: ['CRIT_DMG'] },
    { src: 'Perks/FATAL_BLOW_II.jpg', title: 'FATAL BLOW II', tier: 2, classes: ['CRIT_DMG'] },
    { src: 'Perks/STARVED_SWORD.jpg', title: 'STARVED SWORD', tier: 2, classes: ['CRIT_DMG', 'SKILL'] },
    { src: 'Perks/MERCILESS.jpg', title: 'MERCILESS', tier: 3, classes: ['SKILL', 'CRIT_RATE'] },
    { src: 'Perks/KI_STREAM.jpg', title: 'KI STREAM', tier: 3, classes: ['SKILL'] },
    { src: 'Perks/KI_FLOW.jpg', title: 'KI FLOW', tier: 1, classes: ['SKILL'] },
    { src: 'Perks/ULTIMATE_SCROLL_RELEASE.jpg', title: 'ULTIMATE SCROLL RELEASE', tier: 2, classes: ['SKILL'] },
    { src: 'Perks/ULTIMATE_SCROLL_RUPTURE.jpg', title: 'ULTIMATE SCROLL RUPTURE', tier: 2, classes: ['SKILL', 'HP'] },
    { src: 'Perks/ULTIMATE_SCROLL_SHOCK.jpg', title: 'ULTIMATE SCROLL SHOCK', tier: 2, classes: ['SKILL', 'POSTURE_DMG'] },
    { src: 'Perks/LESSONS_LEARNED.jpg', title: 'LESSONS LEARNED', tier: 3, classes: ['CRIT_DMG'] },
    { src: 'Perks/STAGGER.jpg', title: 'STAGGER', tier: 1, classes: ['POSTURE_DMG'] },
    { src: 'Perks/PULVERIZE.jpg', title: 'PULVERIZE', tier: 2, classes: ['POSTURE_DMG'] },
    { src: 'Perks/RAMPAGE.jpg', title: 'RAMPAGE', tier: 2, classes: ['LIONHEART', 'POSTURE_DMG'] },
    { src: 'Perks/INSIGHT.jpg', title: 'INSIGHT', tier: 3, classes: ['POSTURE_DMG'] },
    { src: 'Perks/COUNTERATTACK.jpg', title: 'COUNTERATTACK', tier: 2, classes: ['UNIQUENESS'] },
    { src: 'Perks/MOUNTAIN_CLEAVING_STRIKE.jpg', title: 'MOUNTAIN CLEAVING STRIKE', tier: 3, classes: ['COUNTER_FLASH'] },
    { src: 'Perks/DODGE_COMBO.jpg', title: 'DODGE COMBO', tier: 3, classes: ['DODGE'] },
    { src: 'Perks/EXTREME_WILLPOWER.jpg', title: 'EXTREME WILLPOWER', tier: 3, classes: ['SURVIVE', 'HP'] },
    { src: 'Perks/MADNESS.jpg', title: 'MADNESS', tier: 1, classes: ['LIONHEART'] },
    { src: 'Perks/OVERCOME.jpg', title: 'OVERCOME', tier: 3, classes: ['COUNTER_FLASH'] },
    { src: 'Perks/SINGLE_LEG_TRAINING.jpg', title: 'SINGLE LEG TRAINING', tier: 2, classes: ['ATK', 'POSTURE'] },
    { src: 'Perks/SWIFT_FOOTWORK.jpg', title: 'SWIFT FOOTWORK', tier: 3, classes: ['COUNTER_FLASH', 'DODGE'] },
    { src: 'Perks/WIND_BLADE.jpg', title: 'WIND BLADE', tier: 2, classes: ['ATK_SPEED', 'COUNTER_FLASH'] },
    { src: 'Perks/VICTORY_PROCLAMATION.jpg', title: 'VICTORY PROCLAMATION', tier: 2, classes: ['ATK', 'COUNTER_FLASH'] },
    { src: 'Perks/HEAVY_BLOW.jpg', title: 'HEAVY BLOW', tier: 2, classes: ['UNIQUENESS'] },
    { src: 'Perks/LAST_BLADE.jpg', title: 'LAST BLADE', tier: 2, classes: ['LIONHEART', 'COUNTER_FLASH'] },
    { src: 'Perks/AGILITY_ENHANCEMENT_I.jpg', title: 'AGILITY ENHANCEMENT I', tier: 1, classes: ['POSTURE'] },
    { src: 'Perks/AGILITY_ENHANCEMENT_II.jpg', title: 'AGILITY ENHANCEMENT II', tier: 2, classes: ['POSTURE'] },
    { src: 'Perks/ONSLAUGHT_SCROLL_ABSORB.jpg', title: 'ONSLAUGHT SCROLL ABSORB', tier: 2, classes: ['HEAVY_ATTACK', 'SURVIVE'] },
    { src: 'Perks/FLASH_SCROLL_ABSORB.jpg', title: 'FLASH SCROLL ABSORB', tier: 2, classes: ['COUNTER_FLASH', 'SURVIVE'] },
    { src: 'Perks/THIRST.jpg', title: 'THIRST', tier: 3, classes: ['SURVIVE', 'LIONHEART'] },
    { src: 'Perks/WILL_TO_SURVIVE.jpg', title: 'WILL TO SURVIVE', tier: 1, classes: ['SURVIVE'] },
    { src: 'Perks/DODGE_RESTORE.jpg', title: 'DODGE RESTORE', tier: 2, classes: ['SURVIVE', 'DODGE'] },
    { src: 'Perks/EVADE_I.jpg', title: 'EVADE I', tier: 1, classes: ['DODGE'] },
    { src: 'Perks/EVADE_II.jpg', title: 'EVADE II', tier: 2, classes: ['DODGE'] },
    { src: 'Perks/DO_OR_DIE.jpg', title: 'DO OR DIE', tier: 2, classes: ['LIONHEART', 'DODGE'] },
    { src: 'Perks/GROWTH_SCROLL_FORESIGHT.jpg', title: 'GROWTH SCROLL FORESIGHT', tier: 2, classes: ['LEVEL', 'DODGE'] },
    { src: 'Perks/AMBUSH_SCROLL_RUPTURE.jpg', title: 'AMBUSH SCROLL RUPTURE', tier: 2, classes: ['HP', 'CRIT_RATE'] },
    { src: 'Perks/ONSLAUGHT_SCROLL_RUPTURE.jpg', title: 'ONSLAUGHT SCROLL RUPTURE', tier: 2, classes: ['HEAVY_ATTACK', 'HP'] },
    { src: 'Perks/AMBUSH_SCROLL_ULTIMATE.jpg', title: 'AMBUSH SCROLL ULTIMATE', tier: 2, classes: ['CRIT_RATE', 'SKILL'] },
    { src: 'Perks/FINAL_BREATH.jpg', title: 'FINAL BREATH', tier: 2, classes: ['LIONHEART', 'ATK_SPEED'] },
    { src: 'Perks/WRIST_STRENGTHENING_I.jpg', title: 'WRIST STRENGTHENING I', tier: 1, classes: ['ATK_SPEED'] },
    { src: 'Perks/WRIST_STRENGTHENING_II.jpg', title: 'WRIST STRENGTHENING II', tier: 2, classes: ['ATK_SPEED'] },
    { src: 'Perks/SLASH.jpg', title: 'SLASH', tier: 3, classes: ['ATK_SPEED'] },
    { src: 'Perks/DECISIVE_BLOW.jpg', title: 'DECISIVE BLOW', tier: 3, classes: ['CRIT_RATE', 'CRIT_DMG', 'POSTURE_DMG'] },
    { src: 'Perks/AMBUSH_SCROLL_ABSORB.jpg', title: 'AMBUSH SCROLL ABSORB', tier: 2, classes: ['SURVIVE', 'CRIT_RATE'] },
    { src: 'Perks/ASCENSION.jpg', title: 'ASCENSION', tier: 2, classes: ['SKILL'] },
    { src: 'Perks/PINPOINT_STRIKE_I.jpg', title: 'PINPOINT STRIKE I', tier: 1, classes: ['CRIT_RATE'] },
    { src: 'Perks/PINPOINT_STRIKE_II.jpg', title: 'PINPOINT STRIKE II', tier: 2, classes: ['CRIT_RATE'] },
    { src: 'Perks/GROWTH_SCROLL_WRATH.jpg', title: 'GROWTH SCROLL WRATH', tier: 2, classes: ['LEVEL', 'CRIT_RATE'] },
    { src: 'Perks/BURSTING.jpg', title: 'BURSTING', tier: 3, classes: ['LEVEL'] },
    { src: 'Perks/ONSLAUGHT_SCROLL_COLLAPSE.jpg', title: 'ONSLAUGHT SCROLL COLLAPSE', tier: 2, classes: ['HEAVY_ATTACK', 'POSTURE'] },
    { src: 'Perks/ONSLAUGHT_SCROLL_FLASH.jpg', title: 'ONSLAUGHT SCROLL FLASH', tier: 2, classes: ['HEAVY_ATTACK', 'COUNTER_FLASH'] },
    { src: 'Perks/BERSERK.jpg', title: 'BERSERK', tier: 2, classes: ['LIONHEART', 'HEAVY_ATTACK'] },
    { src: 'Perks/ONSLAUGHT_SCROLL_RELEASE.jpg', title: 'ONSLAUGHT SCROLL RELEASE', tier: 1, classes: ['HEAVY_ATTACK'] },
    { src: 'Perks/GROWTH_SCROLL_ONSLAUGHT.jpg', title: 'GROWTH SCROLL ONSLAUGHT', tier: 2, classes: ['LEVEL', 'HEAVY_ATTACK'] },
    { src: 'Perks/ONSLAUGHT_SCROLL_ASSASSINATION.jpg', title: 'ONSLAUGHT SCROLL ASSASSINATION', tier: 2, classes: ['HEAVY_ATTACK', 'DODGE'] },
    { src: 'Perks/FATAL_ATTACK.jpg', title: 'FATAL ATTACK', tier: 3, classes: ['HEAVY_ATTACK', 'CRIT_RATE'] },
    { src: 'Perks/GROWTH_SCROLL_RUSHWIND.jpg', title: 'GROWTH SCROLL RUSHWIND', tier: 2, classes: ['LEVEL', 'ATK_SPEED'] },
    { src: 'Perks/ABSOLUTE_CONCENTRATION.jpg', title: 'ABSOLUTE CONCENTRATION', tier: 3, classes: ['LEVEL'] },
    { src: 'Perks/FLUID_MOTION.jpg', title: 'FLUID MOTION', tier: 1, classes: ['SURVIVE'] },
    { src: 'Perks/LIMITLESS_RESISTANCE.jpg', title: 'LIMITLESS RESISTANCE', tier: 2, classes: ['POSTURE', 'SURVIVE'] },
    { src: 'Perks/SOLIDARITY.jpg', title: 'SOLIDARITY', tier: 2, classes: ['POSTURE', 'HP'] },
    { src: 'Perks/OATH_OF_GUARDIAN.jpg', title: 'OATH OF GUARDIAN', tier: 3, classes: ['SURVIVE', 'LIONHEART'] },
    { src: 'Perks/UNDYING_WILL.jpg', title: 'UNDYING WILL', tier: 3, classes: ['SURVIVE'] },
    { src: 'Perks/VITALITY_ENHANCEMENT_I.jpg', title: 'VITALITY ENHANCEMENT I', tier: 1, classes: ['HP'] },
    { src: 'Perks/VITALITY_ENHANCEMENT_II.jpg', title: 'VITALITY ENHANCEMENT II', tier: 2, classes: ['HP'] },
    { src: 'Perks/LIQUEFY.jpg', title: 'LIQUEFY', tier: 3, classes: ['HP', 'DODGE'] },
    { src: 'Perks/KI_ENERGY_ACQUISITION.jpg', title: 'KI ENERGY ACQUISITION', tier: 2, classes: ['HP', 'LIONHEART'] },
    { src: 'Perks/UNLEASHED_POTENTIAL.jpg', title: 'UNLEASHED POTENTIAL', tier: 2, classes: ['LEVEL'] },
    { src: 'Perks/CHALLENGER.jpg', title: 'CHALLENGER', tier: 3, classes: ['LIONHEART'] },
    { src: 'Perks/SCROLL_OF_RESURRECTION.jpg', title: 'SCROLL OF RESURRECTION', tier: 2, classes: ['SURVIVE'] },
    
   
    // Add more images as needed
];

function displayImages(imagesToDisplay) {
    const grid = document.getElementById('imageGrid');
    grid.innerHTML = ''; // Clear existing images
    // Sort the images by title in alphabetical order
    imagesToDisplay.sort((a, b) => a.title.localeCompare(b.title));
    imagesToDisplay.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.title;
        imgElement.title = image.title;
        grid.appendChild(imgElement);

    });

}

function filterImages() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const selectedTier = document.getElementById('tierSelect').value;
    const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
    const selectedClasses = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    const filteredImages = images.filter(image => {
        const matchesSearch = image.title.toLowerCase().includes(searchValue);
        const matchesTier = selectedTier === "" || image.tier.toString() === selectedTier;
        const matchesClass = selectedClasses.length === 0 || selectedClasses.some(cls => image.classes.includes(cls));
        return matchesSearch && matchesTier && matchesClass;
    });

    displayImages(filteredImages);
}

// Initial display of all images
displayImages(images);
