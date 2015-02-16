(function(ILC){
    "use strict";

    ILC.languages.pa = {
        code: "pa",
        name: "Punjabi",
        vowels: "(An)|(a(a|e|i|u)?)|(ee?)|(i)|(o(a|o)?)|(u)",
        consonants: "(Bh?)|(Ch)|(Dh?)|(Gh?)|(Kh)|(L)|(N)|(R)|(Sh)|(Th?)|(bh?)|(ch)|(dh?)|(f)|(gh?)|(h)|(jh?)|(kh?)|(l)|(m)|(n(G|y)?)|(ph?)|(q)|(r)|(sh?)|(th?)|(v)|(y)|(z)",
        letter_codes: {
            "~a" : "&#2565;",
            "~aa" : "&#2566;",
            "~i" : "&#2567;",
            "~ee" : "&#2568;",
            "~u" : "&#2569;",
            "~oo" : "&#2570;",
            "~e" : "&#2575;", "~ae" : "&#2575;",
            "~ai" : "&#2576;",
            "~oa" : "&#2579;", "~o" : "&#2579;",
            "~au" : "&#2580;",
            "~An" : "&#2562;",

            "a" : "",
            "*" : "&#2637;",
            "aa" : "&#2622;",
            "i" : "&#2623;",
            "ee" : "&#2624;",
            "u" : "&#2625;",
            "oo" : "&#2626;",
            "e" : "&#2631;", "ae" : "&#2631;",
            "ai" : "&#2632;",
            "oa" : "&#2635;", "o" : "&#2635;",
            "au" : "&#2636;",
            "An" : "&#2562;",

            "k" : "&#2581;",
            "kh" : "&#2582;",
            "g" : "&#2583;",
            "gh" : "&#2584;",
            "nG" : "&#2585;",
            "ch" : "&#2586;",
            "Ch" : "&#2587;",
            "j" : "&#2588;",
            "jh" : "&#2589;",
            "ny" : "&#2590;",
            "t" : "&#2591;",
            "T" : "&#2592;",
            "d" : "&#2593;",
            "D" : "&#2594;",
            "N" : "&#2595;",
            "th" : "&#2596;",
            "Th" : "&#2597;",
            "dh" : "&#2598;",
            "Dh" : "&#2599;",
            "n" : "&#2600;",
            "p" : "&#2602;",
            "ph" : "&#2603;",
            "b" : "&#2604;",
            "bh" : "&#2605;", "B" : "&#2605;", "Bh" : "&#2605;",
            "m" : "&#2606;",
            "y" : "&#2607;",
            "r" : "&#2608;",
            "l" : "&#2610;",
            "L" : "&#2611;",
            "v" : "&#2613;",
            "sh" : "&#2614;", "Sh" : "&#2614;",
            "s" : "&#2616;",
            "h" : "&#2617;",
            "q" : "&#2649;", "Kh" : "&#2649;",
            "Gh" : "&#2650;", "G" : "&#2650;",
            "z" : "&#2651;",
            "R" : "&#2652;",
            "f" : "&#2654;"
        },
        characterCodeTable: {
            vowels: [[{"a":"ਅ"},{"aa":"ਆ"},{"i":"ਇ"},{"ee":"ਈ"},{"u":"ਉ"},{"oo":"ਊ"}],[{"e,ae":"ਏ"},{"ai":"ਐ"},{"oa,o":"ਓ"},{"au":"ਔ"},{"An":"ਂ"}]],
            consonants: [[{"k":"ਕ"},{"kh":"ਖ"},{"g":"ਗ"},{"gh":"ਘ"},{"nG":"ਙ"}],[{"ch":"ਚ"},{"Ch":"ਛ"},{"j":"ਜ"},{"jh":"ਝ"},{"ny":"ਞ"}],[{"t":"ਟ"},{"T":"ਠ"},{"d":"ਡ"},{"D":"ਢ"},{"N":"ਣ"}],[{"th":"ਤ"},{"Th":"ਥ"},{"dh":"ਦ"},{"Dh":"ਧ"},{"n":"ਨ"}],[{"p":"ਪ"},{"ph":"ਫ"},{"b":"ਬ"},{"bh,B,Bh":"ਭ"},{"m":"ਮ"}],[{"y":"ਯ"},{"r":"ਰ"},{"l":"ਲ"},{"L":"ਲ਼"}],[{"v":"ਵ"},{"sh,Sh":"ਸ਼"},{"s":"ਸ"}],[{"h":"ਹ"}],[{"q,Kh":"ਖ਼"},{"Gh,G":"ਗ਼"},{"z":"ਜ਼"},{"R":"ੜ"},{"f":"ਫ਼"}]]
        },

        default_input: "guramukhee"
    };


}(window.ILC));