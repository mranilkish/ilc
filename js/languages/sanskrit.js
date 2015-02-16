(function(ILC){
    "use strict";

    ILC.languages.sa = {
        code: "sa",
        name: "Sanskrit",
        vowels: "(A((o)|(O))?)|(a((A)|(a)|(u)|(i))?)|(En)|(e(e)?)|(I)|(H)|(TR)|(M)|(o(o)?)|(tR)|(i)|(U)|(u)|([:])|([|]([|])?)",
        consonants: "(Ch)|(D(dD|h)?)|(G)|(L(lL)?)|(N(nN)?)|(R(rR)?)|(Sh)|(Th?)|(Y)|(bh?)|(ch)|(dh?)|(f)|(g(h|G)?)|(h)|(jh?)|(kh?)|(l)|(m)|(nY?)|(ph?)|(qh?)|(r)|(sh?)|(th?)|(v)|(y)|(z)|(Bh?)",
        letter_codes: {
            "~a": "&#2309;",
            "~aa": "&#2310;",    "~A": "&#2310;",
            "~i": "&#2311;",
            "~ee": "&#2312;",    "~I": "&#2312;",
            "~u": "&#2313;",
            "~oo": "&#2314;",    "~U": "&#2314;",
            "~tR": "&#2315;",
            "~En": "&#2317;",
            "~e": "&#2319;",
        //    "~ae": "&#2319;",    "~E": "&#2319;",
            "~ai": "&#2320;",
            "~Ao": "&#2321;",
            "~o": "&#2323;",
        //    "~oa": "&#2323;",    "~O": "&#2323;",
            "~au": "&#2324;",
            "~TR": "&#2400;",
            "~AO": "&#2305;",  //chandrabindu
            "~AOM": "&#2384;",
            "~M": "&#2306;",    //anusvara
            "~H": "&#2307;",    //visarga
            "~:": "&#2307;",    //visarga
            "~aA": "&#2365;",   //avagraha
            "~|" : "&#2404;",
            "~||" : "&#2405;",

            "AO": "&#2305;",  //chandrabindu
            "H": "&#2307;",    //visarga
            ":": "&#2307;",    //visarga
            "Ao": "&#2377;",   //chandra o
            "M": "&#2306;",    //anusvara
            "aA": "&#2365;",   //avagraha
            "|" : "&#2404;",  //danda
            "||" : "&#2405;", //double-danda

            "a": "",
            "aa": "&#2366;",    "A": "&#2366;",
            "i": "&#2367;",
            "e": "&#2375;",
            "ee": "&#2368;",    "I": "&#2368;",
            "u": "&#2369;",
            "oo": "&#2370;",    "U": "&#2370;",
        //    "ae": "&#2375;",    "E": "&#2375;",
            "ai": "&#2376;",
        //    "oa": "&#2379;",    "O": "&#2379;",
            "o":  "&#2379;",
            "au": "&#2380;",
            "*": "&#2381;",
            "tR": "&#2371;",
            "TR": "&#2372;",
            "En": "&#2373;",

            "k": "&#2325;",
            "kh": "&#2326;",
            "g": "&#2327;",
            "gh": "&#2328;",
            "G": "&#2329;",
            "ch": "&#2330;",
            "Ch": "&#2331;",
            "j": "&#2332;",
            "jh": "&#2333;",
            "nY": "&#2334;",
            "t": "&#2335;",
            "T": "&#2336;",
            "d": "&#2337;",
            "D": "&#2338;",
            "N": "&#2339;",
            "th": "&#2340;",
            "Th": "&#2341;",
            "dh": "&#2342;",
            "Dh": "&#2343;",
            "n": "&#2344;",
            "NnN": "&#2345;",
            "p": "&#2346;",
            "ph": "&#2347;",
            "b": "&#2348;",
            "bh": "&#2349;",    "B": "&#2349;",    "Bh": "&#2349;",
            "m": "&#2350;",
            "y": "&#2351;",
            "r": "&#2352;",
            "R": "&#2353;",
            "l": "&#2354;",
            "L": "&#2355;",
            "LlL": "&#2356;",
            "v": "&#2357;",
            "sh": "&#2358;",
            "Sh": "&#2359;",
            "s": "&#2360;",
            "h": "&#2361;",
            "q": "&#2392;",
            "qh": "&#2393;",
            "gG": "&#2394;",
            "z": "&#2395;",
            "DdD": "&#2396;",
            "RrR": "&#2397;",
            "f": "&#2398;",
            "Y": "&#2399;"
        },
        characterCodeTable: {
            vowels: [[{"a":"अ"},{"A,aa":"आ"},{"i":"इ"},{"I,ee":"ई"},{"u":"उ"},{"U,oo":"ऊ"}],[{"tR":"ऋ"},{"En":"ऍ"},{"e":"ए"},{"ai":"ऐ"},{"Ao":"ऑ"}],[{"o":"ओ"},{"au":"औ"},{"TR":"ॠ"},{"AOM":"ॐ"}],[{"AO":"अँ"},{"M":"अं"},{"H,:":"अः"},{"aA":"अऽ"}],[{"|":"।"},{"||":"॥"}]],
            consonants:[[{"k":"क"},{"kh":"ख"},{"g":"ग"},{"gh":"घ"},{"G":"ङ"}],[{"ch":"च"},{"Ch":"छ"},{"j":"ज"},{"jh":"झ"},{"nY":"ञ"}],[{"t":"ट"},{"T":"ठ"},{"d":"ड"},{"D":"ढ"},{"N":"ण"}],[{"th":"त"},{"Th":"थ"},{"dh":"द"},{"Dh":"ध"},{"n":"न"}],[{"p":"प"},{"ph":"फ"},{"b":"ब"},{"bh,B,Bh":"भ"},{"m":"म"}],[{"y":"य"},{"r":"र"},{"l":"ल"},{"v":"व"}],[{"sh":"श"},{"Sh":"ष"},{"s":"स"}],[{"h":"ह"},{"kSh":"क्ष"}],[{"q":"क़"},{"qh":"ख़"},{"gG":"ग़"},{"z":"ज़"},{"DdD":"ड़"}],[{"RrR":"ढ़"},{"f":"फ़"},{"Y":"य़"},{"NnN":"ऩ"},{"R":"ऱ"}],[{"LlL":"ऴ"},{"L":"ळ"}]]
        },

        default_input: "sMskrutha"
    };


}(window.ILC));
