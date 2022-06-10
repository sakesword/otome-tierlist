// character images
var singleChar = "<div class='character'></div>";
var singleCheckWrap = "<div class='characterCheckWrap'></div>";
var selectAllWrap = "<div class='selectAllWrap'></div>";

var gameFe = [	["li", 0, ""],
["aliali", 5,"ALICE=ALICE"],
["amnesia", 4,"Amnesia"],
["arcanafamiglia", 7,"Arcana Famiglia"],
["arthur", 5,"arthur"],
["asaki", 4,"asaki"],
["ayago", 5,"Ayakashi Gohan"],
["badmed", 5,"BAD MEDICINE"],
["bara", 4,"bara"],
["baw", 4,"Bad Apple Wars"],
["beast", 5,"beast"],
["bees", 5,"bees"],
["beyond", 5,"beyond"],
["binary", 4,"Binary Star"],
["birushana", 8,"Birushana"],
["blackishhouse", 9,"Blackish House"],
["bloodycall", 5,"Bloody Call"],
["brocon", 13,"Brothers Complex"],
["bunmei", 8,"bunmei"],
["busta", 4,"BUSTAFELLOWS"],
["bws", 10,"Black Wolves Saga"],
["cafe", 4,"Cafe Enchante"],
["ce", 4,"ce"],
["cendrillon", 6,"Cendrillon Palika"],
["charade", 8,"Charade Maniacs"],
["chou", 4,"Chou no Doku"],
["clubsui", 5,"Club Suicide"],
["codereal", 5,"Code: Realize"],
["crimson", 4,"crimson"],
["cupipara", 5,"Cupid Parasite"],
["cxm", 4,"Collar x Malice"],
["cz", 7,"Clock Zero"],
["dairoku", 4,"Dairoku"],
["dandelion", 4,"Dandelion"],
["desert", 5,"desert"],
["dl", 12,"Diabolik Lovers"],
["dr", 5,"dr"],
["drops", 6,"drops"],
["dwd", 5,"Dance With Devils"],
["dynamic", 15,"Dynamic Chord"],
["emotion", 6,"emotion"],
["ephemeral", 3,"Ephemeral"],
["f misc not sure", 5,"f misc not sure"],
["fashion", 1,"Fashioning Little Miss Lonesome"],
["fo", 5,"fo"],
["funka", 5,"funka"],
["gakuen", 5,"gakuen"],
["garnet", 4,"garnet"],
["genji", 6,"genji"],
["genrou", 5,"genrou"],
["getsu", 6,"getsu"],
["ghp", 4,"ghp"],
["gohan", 6,"Isshoni Gohan"],
["grr", 6,"Gekka Ryouran Romance"],
["gs", 10,"gs"],
["gs4", 7,"gs4"],
["h", 5,"h"],
["haikara", 4,"haikara"],
["haku", 11,"Hakuouki"],
["hamefura", 5,"Hamefura"],
["hanaoni", 6,"hanaoni"],
["hanasaku", 4,"hanasaku"],
["hanayaka", 5,"hanayaka"],
["harukaseven", 7,"harukaseven"],
["harusix", 7,"harusix"],
["hato", 7,"hato"],
["hatsukare", 5,"hatsukare"],
["hii", 6,"hii"],
["himea", 4,"himea"],
["himehibi", 5,"himehibi"],
["himeni", 5,"himeni"],
["hmp", 1,"hmp"],
["hu", 8,"hu"],
["idollu", 4,"idollu"],
["ikesen", 7,"Ikemen Sengoku"],
["jakou", 5,"jakou"],
["jewel", 10,"jewel"],
["jj", 5,"JACKJEANNE"],
["juuza", 7,"juuza"],
["kaeru", 6,"kaeru"],
["kamiaso", 11,"Kamigami Asobi"],
["kenka", 5,"kenka"],
["kgk", 5,"Ken ga Kimi"],
["kimiyuki", 5,"kimiyuki"],
["kin", 22,"kin"],
["kizuna", 6,"Toki no Kizuna"],
["kk", 6,"kk"],
["klap", 7,"KLAP"],
["koezaru", 8,"koezaru"],
["kurenai", 4,"Kurenai"],
["kurokin", 3,"Kurokin"],
["kyoukai", 6,"kyoukai"],
["lp", 4,"Lover Pretend"],
["luminarise", 7,"luminarise"],
["magic", 5,"magic"],
["margin", 5,"margin"],
["maria", 5,"maria"],
["mashou", 2,"Mashou Megane"],
["meiji", 7,"meiji"],
["memoria", 4,"memoria"],
["minaru", 4,"minaru"],
["minus", 7,"minus"],
["moon", 4,"moon"],
["moshikami", 4,"Moshikami"],
["mysteria", 4,"London Detective Mysteria"],
["nameless", 5,"Nameless"],
["neko", 3,"Nekopara"],
["nilad", 5,"Nil Admirari"],
["ninkoi", 9,"ninkoi"],
["norn", 8,"NORN9"],
["ns", 4,"Nightshade"],
["office", 4,"office"],
["os", 5,"Olympia Soiree"],
["oto", 8,"oto"],
["oz", 6,"OZMAFIA!!"],
["palais", 7,"palais"],
["paradigm", 7,"Paradigm Paradox"],
["pcube", 6,"Period Cube"],
["persona", 4,"persona"],
["photo", 11,"photo"],
["piofi", 5,"Piofiore"],
["pos", 5,"Prince of Stride"],
["potah", 3,"Psychedelica of the Ashen Hawk"],
["potbb", 4,"Psychedelica of the Black Butterfly"],
["prin", 8,"prin"],
["pub", 4,"Pub Encounter"],
["rd", 4,"rd"],
["rdf", 4,"Rein des Fleurs"],
["real", 2,"real"],
["rebday", 4,"Rebirthday Song"],
["riddle", 14,"riddle"],
["roroali", 5,"roroali"],
["rvsj", 7,"rvsj"],
["scarlet", 4,"7'scarlet"],
["second", 2,"second"],
["senjou", 6,"senjou"],
["shiratsuyu", 6,"Shiratsuyu no Kai"],
["sidekicks", 5,"Sidekicks"],
["snow", 4,"snow"],
["sp", 5,"Steam Prison"],
["spade", 12,"spade"],
["starry", 13,"Starry Sky"],
["step", 11,"step"],
["storm", 11,"storm"],
["suran", 5,"suran"],
["sweet", 5,"Sweet Fuse"],
["sweetclown", 4,"Sweet Clown"],
["syk", 5,"syk"],
["taiali", 7,"TAISHO x ALICE"],
["takoi", 5,"takoi"],
["tempest", 3,"even if TEMPEST"],
["tengoku", 4,"Tengoku Struggle"],
["tierblade", 5,"Tierblade"],
["tiny", 5,"Tiny x Machinegun"],
["tlicolity", 5,"tlicolity"],
["tokiapo", 4,"tokiapo"],
["tokione", 9,"tokione"],
["tokitwo", 10,"tokitwo"],
["tora", 2,"tora"],
["trigkiss", 3,"Trigger Kiss"],
["tsumi", 5,"tsumi"],
["unbday", 2,"Unbirthday Song"],
["unknown", 3,"unknown"],
["utapri", 13,"Uta no Prince Sama"],
["uwasa", 2,"uwasa"],
["vb", 3,"Variable Barricade"],
["vice", 4,"vice"],
["virche", 5,"Shueen no Virche"],
["vitaminr", 5,"Vitamin R"],
["vow", 3,"vow"],
["wal", 3,"wal"],
["wand", 6,"Wand of Fortune"],
["will", 4,"will"],
["yo", 7,"yo"],
["yoshiwara", 17,"Yoshiwara Higanbana"],
["yugi", 3,"yugi"],
["yuno", 5,"Yunohana Spring"],
["zechs", 5,"zechs"],
["zettai", 4,"zettai"],
];

var currentGame;
var currentGameChars = gameFe;
var characters;
var characterId;

$(document).on("click", "#characters", function() { // open game changer modal
    openPopup("#charChange");
});

$(document).on("click", "#help", function() { // open help modal
    openPopup("#helpMenu");
});

$(document).on("click", "#filter", function() { // open filter modal
    openPopup("#filterMenu");
});

$(document).on("change", ".selectAll", function() { // add/remove all characters
    if($(this).is(":checked")) {
        $(".characterCheck").each( function() {
            if (!$(this).is(":checked" )) {
                $(this).prop('checked', true).change();
            }
        });
    } else {
        $(".characterCheck").each( function() {
            $(this).prop('checked', false).change();
        });
    }
});

function openPopup(popup) {
    $(popup).css("display","block");
    $("#overlay").css("opacity", 1);
    $("#overlay").css("visibility", "visible");
    $(popup).css("top", alignPopup($(popup)));
}

function closePopups() {
    $("#modal").css("display", "none");
    $("#charChange").css("display", "none");
    $("#helpMenu").css("display", "none");
    $("#screenshotShow canvas").remove();
}

function alignPopup(popup) {
    return Math.floor(($(window).height() - popup.height())/2)+"px";
}

// https://stackoverflow.com/a/3971432 thanks Zack Katz :D
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function filter(inputTags, tagList) {
    $(".character").each( function() {
        // ignore characters already in the tiers
        if ($(this).parent().attr("id") != "char") {
            return;
        }
        tags = $(this).attr("id").split("-");
        // default for no filters
        if (inputTags.length == 0) {
            $(this).show();
        }
        // with any text, hide untagged characters
        else if (!tagList[tags[0]] || !tagList[tags[0]][tags[1]]) {
            $(this).hide();
        }
        // with any text, show tagged, matching characters
        else if (inputTags.some(text=>tagList[tags[0]][tags[1]].includes(text))) {
            $(this).show();
        }
        // with any text, hide tagged, unmatching characters
        else {
            $(this).hide();
        }
    });
}

function loadFilterList(allTags) {
    var filterCheckWrap = "<div class='filterCheckWrap'></div>";
    allTags.forEach(function(tag, i) {
        $("#filterChecklist div:last-child").after(filterCheckWrap);
        $("#filterChecklist div:last-child").html(tag + ": <input type='checkbox' class='filterCheck' id='"+tag+"' >");
    });
}

function updateFilters(tagList) {
    currTags = []
    $(".filterCheck").each( function() {
        if ($(this).is(":checked")) {
            currTags.push($(this).attr("id"));
        }
    });
    filter(currTags, tagList);
}

// For hamburger menu, taken from https://codepen.io/mranenko/pen/wevamj
(function() {

	var hamburger = {
		nav: document.querySelector('#nav'),
		navToggle: document.querySelector('.nav-toggle'),

		initialize() {
			this.navToggle.addEventListener('click',
        () => { this.toggle(); });
		},

		toggle() {
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		},
	};

	hamburger.initialize();

}());
