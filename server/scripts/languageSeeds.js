const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goBananas", { useNewUrlParser: true });
  // "mongodb://heroku_t906tgsp:pr9oig0jc05d6lcd9br4b6i3pf@ds113169.mlab.com:13169/heroku_t906tgsp"
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);


const languageSeeds = [
    {
      language: "Afrikaans",
      language_code: "af"
    },
    {
      language: "Arabic",
      language_code: "ar"
    },
    {
      language: "Bangla",
      language_code: "bn"
    },
    {
      language: "Bosnian (Latin)",
      language_code: "bs"
    },
    {
      language: "Bulgarian",
      language_code: "bg"
    },
    {
      language: "Cantonese (Traditional)",
      language_code: "yue"
    },
    {
      language: "Catalan",
      language_code: "ca"
    },
    {
      language: "Chinese Simplified",
      language_code: "zh-Hans"
    },
    {
      language: "Chinese Traditional",
      language_code: "zh-Hant"
    },
    {
      language: "Croatian",
      language_code: "hr"
    },
    {
      language: "Czech",
      language_code: "cs"
    },
    {
      language: "Danish",
      language_code: "da"
    },
    {
      language: "Dutch",
      language_code: "nl"
    },
    {
      language: "English",
      language_code: "en"
    },
    {
      language: "Estonian",
      language_code: "et"
    },
    {
      language: "Fijian",
      language_code: "fj"
    },
    {
      language: "Filipino",
      language_code: "fil"
    },
    {
      language: "Finnish",
      language_code: "fi"
    },
    {
      language: "French",
      language_code: "fr"
    },
    {
      language: "German",
      language_code: "de"
    },
    {
      language: "Greek",
      language_code: "el"
    },
    {
      language: "Haitian Creole",
      language_code: "ht"
    },
    {
      language: "Hebrew",
      language_code: "he"
    },
    {
      language: "Hindi",
      language_code: "hi"
    },
    {
      language: "Hmong Daw",
      language_code: "mww"
    },
    {
      language: "Hungarian",
      language_code: "hu"
    },
    {
      language: "Icelandic",
      language_code: "is"
    },
    {
      language: "Indonesian",
      language_code: "id"
    },
    {
      language: "Italian",
      language_code: "it"
    },
    {
      language: "Japanese",
      language_code: "ja"
    },
    {
      language: "Kiswahili",
      language_code: "sw"
    },
    {
      language: "Klingon",
      language_code: "tlh"
    },
    {
      language: "Klingon (plqaD)",
      language_code: "tlh-Qaak"
    },
    {
      language: "Korean",
      language_code: "ko"
    },
    {
      language: "latvian",
      language_code: "lv"
    },
    {
      language: "lithuanian",
      language_code: "lt"
    },
    {
      language: "Malagasy",
      language_code: "mg"
    },
    {
      language: "Malay",
      language_code: "ms"
    },
    {
      language: "Maltese",
      language_code: "mt"
    },
    {
      language: "Norwegian",
      language_code: "nb"
    },
    {
      language: "Persian",
      language_code: "fa"
    },
    {
      language: "Polish",
      language_code: "pl"
    },
    {
      language: "Portuguese",
      language_code: "pt"
    },
    {
      language: "Queretaro Otomi",
      language_code: "otq"
    },
    {
      language: "Romanian",
      language_code: "ro"
    },
    {
      language: "Russian",
      language_code: "ru"
    },
    {
      language: "Samoan",
      language_code: "sm"
    },
    {
      language: "Serbian (Cyrillic)",
      language_code: "sr-Cyrl"
    },
    {
      language: "Serbian (Latin)",
      language_code: "sr-Latn"
    },
    {
      language: "Slovak",
      language_code: "sk"
    },
    {
      language: "Slovenian",
      language_code: "sl"
    },
    {
      language: "Spanish",
      language_code: "es"
    },
    {
      language: "Swedish",
      language_code: "sv"
    },
    {
      language: "Tahitian",
      language_code: "ty"
    },
    {
      language: "Tamil",
      language_code: "ta"
    },
    {
      language: "Telugu",
      language_code: "te"
    },
    {
      language: "Thai",
      language_code: "th"
    },
    {
      language: "Tongan",
      language_code: "to"
    },
    {
      language: "Turkish",
      language_code: "tr"
    },
    {
      language: "Ukrainian",
      language_code: "uk"
    },
    {
      language: "Urdu",
      language_code: "ur"
    },
    {
      language: "Vietnamese",
      language_code: "vi"
    },
    {
      language: "Welsh",
      language_code: "cy"
    },
    {
      language: "Yucatec Maya",
      language_code: "yua"
    }
   ]

   db.Languages
  .deleteMany({})
  .then(() => db.Languages.collection.insertMany(languageSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
 