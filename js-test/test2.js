const langauges={
    Hindi:false,
    English:true,
    Russian:false,
    French:false,
    German:false
}

let language = "German";

// console.log(Object.keys(langauges))
// langauges['Russian']=!langauges['Russian']
// langauges[language]=!langauges[language]

console.log(langauges);

let mLanguages = {...langauges}
mLanguages[language]=!mLanguages[language]

console.log(mLanguages);

console.log(Object.entries(langauges));

