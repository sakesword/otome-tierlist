// character images
var singleChar = "<div class='character'></div>";
var singleCheckWrap = "<div class='characterCheckWrap'></div>";
var selectAllWrap = "<div class='selectAllWrap'></div>";

var gameFe = [
    [
      "li",
      0,
      ""
    ],
    [
      "scarlet",
      4,
      "7'scarlet"
    ],
    [
      "aliali",
      5,
      "ALICE=ALICE"
    ],
    [
      "amnesia",
      4,
      "Amnesia"
    ],
    [
      "luminarise",
      7,
      "Angelique Luminarise"
    ],
    [
      "arcanafamiglia",
      7,
      "Arcana Famiglia"
    ],
    [
      "asaki",
      4,
      "Asaki, Yumemishi"
    ],
    [
      "ayago",
      5,
      "Ayakashi Gohan"
    ],
    [
      "badmed",
      5,
      "BAD MEDICINE"
    ],
    [
      "busta",
      4,
      "BUSTAFELLOWS"
    ],
    [
      "baw",
      4,
      "Bad Apple Wars"
    ],
    [
      "bara",
      4,
      "Bara ni Kakusareshi Verite"
    ],
    [
      "beast",
      5,
      "Beast Master and Prince"
    ],
    [
      "beyond",
      5,
      "Beyond the Future"
    ],
    [
      "binary",
      4,
      "Binary Star"
    ],
    [
      "birushana",
      8,
      "Birushana"
    ],
    [
      "bws",
      10,
      "Black Wolves Saga"
    ],
    [
      "blackishhouse",
      9,
      "Blackish House"
    ],
    [
      "bloodycall",
      5,
      "Bloody Call"
    ],
    [
      "brocon",
      13,
      "Brothers Conflict"
    ],
    [
      "bunmei",
      8,
      "Bunmei Kaika Aoiza Ibunroku "
    ],
    [
      "cafe",
      4,
      "Cafe Enchante"
    ],
    [
      "cendrillon",
      6,
      "Cendrillon Palika"
    ],
    [
      "charade",
      8,
      "Charade Maniacs"
    ],
    [
      "chou",
      4,
      "Chou no Doku"
    ],
    [
      "cz",
      7,
      "Clock Zero"
    ],
    [
      "clubsui",
      5,
      "Club Suicide"
    ],
    [
      "codereal",
      5,
      "Code: Realize"
    ],
    [
      "cxm",
      4,
      "Collar x Malice"
    ],
    [
      "crimson",
      4,
      "Crimson Empire"
    ],
    [
      "cupipara",
      5,
      "Cupid Parasite"
    ],
    [
      "dairoku",
      4,
      "Dairoku"
    ],
    [
      "dwd",
      5,
      "Dance With Devils"
    ],
    [
      "dandelion",
      4,
      "Dandelion"
    ],
    [
      "maria",
      5,
      "Danzai no Maria"
    ],
    [
      "desert",
      5,
      "Desert Kingdom"
    ],
    [
      "dl",
      12,
      "Diabolik Lovers"
    ],
    [
      "dr",
      5,
      "Dorico no Toshokan"
    ],
    [
      "dynamic",
      15,
      "Dynamic Chord"
    ],
    [
      "memoria",
      4,
      "Enkan no Memoria"
    ],
    [
      "ephemeral",
      3,
      "Ephemeral"
    ],
    [
      "tempest",
      3,
      "even if TEMPEST"
    ],
    [
      "fashion",
      1,
      "Fashioning Little Miss Lonesome"
    ],
    [
      "fo",
      5,
      "Fortissimo"
    ],
    [
      "fushigi",
      5,
      "Fushigi Yuugi Genbu Kaiden Gaiden"
    ],
    [
      "hmp",
      1,
      "Fxxx Me Royally!! Horny Magical Princess"
    ],
    [
      "gakuen",
      5,
      "Gakuen Club"
    ],
    [
      "kk",
      6,
      "Gakuen K -Wonderful School Days-"
    ],
    [
      "garnet",
      4,
      "Garnet Cradle"
    ],
    [
      "grr",
      6,
      "Gekka Ryouran Romance"
    ],
    [
      "genji",
      6,
      "Genji Koi Emaki"
    ],
    [
      "genrou",
      5,
      "Genrou"
    ],
    [
      "getsu",
      6,
      "Getsuei no Kusari -Kyouran Moratorium-"
    ],
    [
      "ghp",
      4,
      "Glass Heart Princess"
    ],
    [
      "gunka",
      5,
      "Gunka o Haita Neko"
    ],
    [
      "haku",
      11,
      "Hakuouki"
    ],
    [
      "hanaoni",
      6,
      "Hanaoni"
    ],
    [
      "hanasaku",
      4,
      "Hanasaku Manimani"
    ],
    [
      "hanayaka",
      5,
      "Hanayaka Nari, Waga Ichizoku"
    ],
    [
      "harusix",
      7,
      "Harukanaru Toki no Naka De 6"
    ],
    [
      "harukaseven",
      7,
      "Harukanaru Toki no Naka De 7"
    ],
    [
      "hato",
      7,
      "Hatoful Boyfriend"
    ],
    [
      "hatsukare",
      5,
      "Hatsukare™Ren'ai Debut Sengen!"
    ],
    [
      "h",
      5,
      "Hiiro no Kakera"
    ],
    [
      "himeni",
      5,
      "Himehibi -New Princess Days- Zoku! Nigakki"
    ],
    [
      "himehibi",
      5,
      "Himehibi -Princess Days-"
    ],
    [
      "himea",
      4,
      "Himehibi Another Princess Days -White or Black-"
    ],
    [
      "step",
      11,
      "Houkago Colorful * Step"
    ],
    [
      "idollu",
      4,
      "I DOLL U"
    ],
    [
      "ikesen",
      7,
      "Ikemen Sengoku"
    ],
    [
      "gohan",
      6,
      "Isshoni Gohan"
    ],
    [
      "jj",
      5,
      "JACKJEANNE"
    ],
    [
      "jakou",
      5,
      "Jakou no Lyla"
    ],
    [
      "jewel",
      10,
      "Jewelic Nightmare"
    ],
    [
      "bees",
      5,
      "Jooubachi no Oubou "
    ],
    [
      "juuza",
      7,
      "Juuza Engi"
    ],
    [
      "klap",
      7,
      "KLAP"
    ],
    [
      "kaeru",
      6,
      "Kaeru Batake DE Tsukamaete™œc"
    ],
    [
      "kamiaso",
      11,
      "Kamigami Asobi"
    ],
    [
      "minaru",
      4,
      "Kaminaru Kimi to"
    ],
    [
      "takoi",
      5,
      "Katakoi Contrast -way of parting-"
    ],
    [
      "kgk",
      5,
      "Ken ga Kimi"
    ],
    [
      "kenka",
      5,
      "Kenka Banchou Otome"
    ],
    [
      "kimiyuki",
      5,
      "Kimi wa Yukima ni Koinegau"
    ],
    [
      "kin",
      22,
      "Kin'iro no Corda"
    ],
    [
      "koezaru",
      8,
      "Koezaru wa Akai Hana"
    ],
    [
      "kurenai",
      4,
      "Kurenai no Homura Sanada Ninpou Chou"
    ],
    [
      "kurokin",
      3,
      "Kuro to Kin no Akanai Kagi."
    ],
    [
      "kyoukai",
      6,
      "Kyoukai no Shirayuki"
    ],
    [
      "mysteria",
      4,
      "London Detective Mysteria"
    ],
    [
      "drops",
      6,
      "Love Drops"
    ],
    [
      "lp",
      4,
      "Lover Pretend"
    ],
    [
      "margin",
      5,
      "MARGINAL#4 IDOL OF SUPERNOVA"
    ],
    [
      "uwasa",
      2,
      "Machi de Uwasa no Hakushaku-sama"
    ],
    [
      "magic",
      5,
      "Magic Kyun! Renaissance"
    ],
    [
      "mashou",
      2,
      "Mashou Megane"
    ],
    [
      "haikara",
      4,
      "Meiji Katsugeki Haikara Ryuuseigumi"
    ],
    [
      "meiji",
      7,
      "Meiji Tokyo Renka"
    ],
    [
      "minus",
      7,
      "Minus Eight"
    ],
    [
      "moshikami",
      4,
      "Moshikami"
    ],
    [
      "hamefura",
      5,
      "My Next Life as a Villainess"
    ],
    [
      "vow",
      3,
      "My Vow to My Liege"
    ],
    [
      "norn",
      8,
      "NORN9"
    ],
    [
      "nameless",
      5,
      "Nameless"
    ],
    [
      "neko",
      3,
      "Nekopara"
    ],
    [
      "ns",
      4,
      "Nightshade"
    ],
    [
      "nilad",
      5,
      "Nil Admirari"
    ],
    [
      "oz",
      6,
      "OZMAFIA!!"
    ],
    [
      "office",
      4,
      "Office Lovers"
    ],
    [
      "os",
      5,
      "Olympia Soiree"
    ],
    [
      "oto",
      8,
      "Otometeki Koi KakumeišLove Revo!!"
    ],
    [
      "palais",
      7,
      "Palais de Reine"
    ],
    [
      "paradigm",
      7,
      "Paradigm Paradox"
    ],
    [
      "pcube",
      6,
      "Period Cube"
    ],
    [
      "persona",
      4,
      "PersonA ~Opera Za no Kaijin~"
    ],
    [
      "photo",
      11,
      "Photograph Journey"
    ],
    [
      "piofi",
      5,
      "Piofiore"
    ],
    [
      "pos",
      5,
      "Prince of Stride"
    ],
    [
      "arthur",
      5,
      "Princess Arthur"
    ],
    [
      "prin",
      8,
      "Princess Nightmare"
    ],
    [
      "potah",
      3,
      "Psychedelica of the Ashen Hawk"
    ],
    [
      "potbb",
      4,
      "Psychedelica of the Black Butterfly"
    ],
    [
      "emotion",
      6,
      "PsychicEmotion6"
    ],
    [
      "pub",
      4,
      "Pub Encounter"
    ],
    [
      "vice",
      4,
      "RE:VICE[D]"
    ],
    [
      "rd",
      4,
      "Radiant Tale"
    ],
    [
      "rode",
      8,
      "Real Rode"
    ],
    [
      "rebday",
      4,
      "Rebirthday Song"
    ],
    [
      "rdf",
      4,
      "Reine des Fleurs"
    ],
    [
      "riddle",
      5,
      "Riddle Garden"
    ],
    [
      "rvsj",
      7,
      "Romeo X Juliet"
    ],
    [
      "syk",
      5,
      "S.Y.K: Shinsetsu Saiyuuki"
    ],
    [
      "yugi",
      3,
      "Sanzen Sekai Yuugi"
    ],
    [
      "zechs",
      5,
      "Scared Rider Xechs"
    ],
    [
      "senjou",
      6,
      "Senjou no Waltz"
    ],
    [
      "shinigami",
      3,
      "Shinigami to Shoujo"
    ],
    [
      "ninkoi",
      9,
      "Shinobi, Koi Utsutsu"
    ],
    [
      "hii",
      6,
      "Shirahana no Ori ~Hiiro no Kakera 4~"
    ],
    [
      "shiratsuyu",
      6,
      "Shiratsuyu no Kai"
    ],
    [
      "roroali",
      5,
      "Shiro to Kuni no Alice"
    ],
    [
      "virche",
      5,
      "Shuuen no Virche"
    ],
    [
      "sidekicks",
      5,
      "Sidekicks"
    ],
    [
      "snow",
      4,
      "Snow Bound Land"
    ],
    [
      "spade",
      12,
      "Spade no Kuni no Alice"
    ],
    [
      "starry",
      13,
      "Starry Sky"
    ],
    [
      "sp",
      5,
      "Steam Prison"
    ],
    [
      "storm",
      11,
      "Storm Lover"
    ],
    [
      "suran",
      5,
      "Suuran Digit"
    ],
    [
      "sweetclown",
      4,
      "Sweet Clown"
    ],
    [
      "sweet",
      5,
      "Sweet Fuse"
    ],
    [
      "taiali",
      7,
      "TAISHO x ALICE"
    ],
    [
      "ce",
      4,
      "Teikoku Kaleido -Banka no Kakumei-"
    ],
    [
      "tengoku",
      4,
      "Tengoku Struggle"
    ],
    [
      "second",
      2,
      "The Second Reproduction"
    ],
    [
      "tiny",
      5,
      "Tiny x Machinegun"
    ],
    [
      "tlicolity",
      5,
      "Tlicolity Eyes"
    ],
    [
      "tokiapo",
      4,
      "Tokeijikake no Apocalypse"
    ],
    [
      "kizuna",
      6,
      "Toki no Kizuna"
    ],
    [
      "tokione",
      9,
      "Tokimeki Memorial Girl's Side 1st Love"
    ],
    [
      "tokitwo",
      10,
      "Tokimeki Memorial Girl's Side: 2nd Kiss"
    ],
    [
      "gs",
      7,
      "Tokimeki Memorial Girl's Side: 3rd Story"
    ],
    [
      "gs4",
      10,
      "Tokimeki Memorial Girl's Side: 4th Heart"
    ],
    [
      "tora",
      2,
      "Toraware no Palm"
    ],
    [
      "trigkiss",
      3,
      "Trigger Kiss"
    ],
    [
      "tsumi",
      5,
      "Tsumikui ~Sen no Noroi, Sen no Inori~"
    ],
    [
      "unbday",
      2,
      "Unbirthday Song"
    ],
    [
      "moon",
      4,
      "Under the Moon"
    ],
    [
      "hu",
      8,
      "Urakata Hakuouki"
    ],
    [
      "utapri",
      13,
      "Uta no Prince Sama"
    ],
    [
      "vb",
      3,
      "Variable Barricade"
    ],
    [
      "vitaminr",
      5,
      "Vitamin R"
    ],
    [
      "wal",
      3,
      "Walpurgis no Uta ~Walpurgisgedichte~"
    ],
    [
      "wand",
      6,
      "Wand of Fortune"
    ],
    [
      "real",
      2,
      "Watashi no Real wa Juujitsu Shisugiteiru"
    ],
    [
      "will",
      4,
      "Will o' Wisp"
    ],
    [
      "yo",
      7,
      "Yo-Jin-Bo"
    ],
    [
      "yoshiwara",
      17,
      "Yoshiwara Higanbana"
    ],
    [
      "yuno",
      5,
      "Yunohana Spring"
    ],
    [
      "tierblade",
      5,
      "Yuukyuu no Tierblade"
    ],
    [
      "zettai",
      4,
      "Zettai Kaikyuu Gauken"
    ]
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
