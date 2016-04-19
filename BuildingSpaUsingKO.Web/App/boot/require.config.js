var require = {
    baseUrl: "/",
    paths: {
        "bootstrap": "Scripts/bootstrap/bootstrap",
        "crossroads": "Scripts/crossroads/crossroads",
        "jquery": "Scripts/jquery/jquery-1.9.0",
        "knockout": "Scripts/knockout/knockout-3.2.0beta.debug",
        "knockout-projections": "Scripts/knockout/knockout-projections.min",
        "signals": "Scripts/crossroads/signals",
        "hasher": "Scripts/crossroads/hasher",
        "text": "Scripts/require/text",
        "datatables": "//datatables.net/download/build/nightly/jquery.dataTables.js?_=99823af74ba032ba950452c707888b11",
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
}