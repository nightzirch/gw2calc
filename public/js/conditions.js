$(document).ready(function() {
    update();

    $('input, select').on("change", function() {
        update();
    });
});

function update() {
    var level = parseInt($('#level').val());
    var damage = parseInt($('#damage').val());
    var stacks = parseInt($('#stacks').val());
    var time = parseInt($('#duration').val());

    if (level < 1 || isNaN(level)) {
        level = 80;
    }

    if (damage < 0 || isNaN(damage)) {
        damage = 0;
    }

    if (stacks < 1 || isNaN(stacks)) {
        stacks = 1;
    }

    if (time < 1 || isNaN(time)) {
        time = 1;
    }

    var bleeding = getBleedingTick(level, damage);
    var burning = getBurningTick(level, damage);
    var confusion = getConfusionTick(level, damage);
    var poison = getPoisonTick(level, damage);
    var torment = getTormentTick(level, damage);
    var tormentmove = getTormentMoveTick(level, damage);

    $('tr.bleeding .tick').text(Math.round(bleeding));
    $('tr.bleeding .dps').text(Math.round(bleeding * stacks));
    $('tr.bleeding .time').text(Math.round(bleeding * stacks * time));

    $('tr.burning .tick').text(Math.round(burning));
    $('tr.burning .dps').text(Math.round(burning));
    $('tr.burning .time').text(Math.round(burning * time));

    $('tr.confusion .tick').text(Math.round(confusion));
    $('tr.confusion .dps').text(Math.round(confusion * stacks));
    $('tr.confusion .time').text(Math.round(confusion * stacks * time));

    $('tr.poison .tick').text(Math.round(poison));
    $('tr.poison .dps').text(Math.round(poison));
    $('tr.poison .time').text(Math.round(poison * time));
    
    $('tr.torment .tick').text(Math.round(torment));
    $('tr.torment .dps').text(Math.round(torment * stacks));
    $('tr.torment .time').text(Math.round(torment * stacks * time));

    $('tr.tormentmove .tick').text(Math.round(tormentmove));
    $('tr.tormentmove .dps').text(Math.round(tormentmove * stacks));
    $('tr.tormentmove .time').text(Math.round(tormentmove * stacks * time));

    var total_dps = 0;

    $('tr:not(.total) .dps').each(function() {
        total_dps += parseInt($(this).text());
    });

    $('tr.total .dps').text(total_dps);
}

function getBleedingTick(level, damage) {
    var tick = (2.5 + (0.5 * level) + (0.05 * damage));
    return tick;
}

function getBurningTick(level, damage) {
    var tick =  ((4.1 * level) + (0.25 * damage));
    return tick;
}

function getConfusionTick(level, damage) {
    var tick = (25 + (0.5 * level) + (0.075 * damage));
    return tick;
}

function getPoisonTick(level, damage) {
    var tick = (level + (0.1 * damage));
    return tick;
}

function getTormentTick(level, damage) {
    var tick = (1.875 + (0.375 * level) + (0.0375 * damage));
    return tick;
}

function getTormentMoveTick(level, damage) {
    var tick = ((1.875 + (0.375 * level) + (0.0375 * damage))*2);
    return tick;
}