const referals = [
  {
    category: "finance",
    img: "https://play-lh.googleusercontent.com/GQ_CWKv7DFM1i2qGJhD2n_2-Jizet83RXBFaw82LyEDTPJlXePRJODJUh1Q8hka-b0Y",
    link: "https://tomorrow.one/?r=YeDyJynS",
    subtitle: "Nachhaltiges Konto",
    sustainable: true,
    text: "Verwende meinen Code für deine Kontoeröffnung und du bekommst 1 Freimonat! Außerdem werden für uns beide jeweils 3m² Land in Südafrika renaturiert 🌱",
    title: "Tomorrow",
  },
  {
    category: "finance",
    img: "https://play-lh.googleusercontent.com/lvioTO4ssiXrAYGmkA9Tt390Wxm2_1yqMFFn8Nc_dTP3E43K9Ol2poyHYG69ahzNDNc=w240-h480-rw",
    link: "https://banking.umweltbank.de/kontoeroeffnung-umweltflexkonto.html?werberId=MTAwNjkzMw==",
    subtitle: "Nachhaltig Anlegen",
    sustainable: true,
    text: "Ob Festgeld, Tagesgeld oder Fonds - bei der UmweltBank macht Ihr Geld grün. Nachhaltige Produkte sind für uns kein Trend, sondern sind seit jeher unser Geschäftsmodell.",
    title: "Umweltbank",
  },
  {
    category: "energy",
    img: "https://play-lh.googleusercontent.com/NBrwyY63S8sZKMBdng1JlYDcuwtBGey0HH_2TAZUDkB_2YEdT6K9xdxokq2ig8-RjQ",
    link: "https://links.naturstrom.de/kvgu",
    subtitle: "Ökostrom",
    sustainable: true,
    text: "Du und ich - lass uns gemeinsam Klima und Umwelt schützen! Mit echter Öko-Energie können wir jede Menge CO2 sparen und die Energiewende ordentlich voranbringen.",
    title: "Naturstrom",
  },
  {
    category: "finance",
    img: "https://www.crowddepot.com/wp-content/uploads/2022/04/wiwin_Logo.png",
    link: "https://wiwin.de",
    subtitle: "Investieren",
    sustainable: true,
    text: "WIWIN, die Plattform für nachhaltige Investitionen mit Schwerpunkt auf Crowdinvesting. Hier hat jede Investition einen geprüften nachhaltigen Impact. WELCOME#50*",
    title: "WIWIN",
  },
  {
    category: "finance",
    img: "https://play-lh.googleusercontent.com/4O_Bmd1yiyTSWQPgBtV0xDY7n7Jht7ds3m1ZtT4_6MEYi7dgpjZ8JeqmMvl6rgu1Blc",
    link: "https://de.scalable.capital/einladung/br7kc2",
    subtitle: "Neo-Broker",
    sustainable: false,
    text: "Starten Sie jetzt und definieren Sie Ihre finanzielle Zukunft neu: 2,5 % Zinsen p.a.*, Trading-Flatrate & Sparpläne ab 1 €.",
    title: "Scalable Capital",
  },
  {
    category: "product",
    img: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/6/AmazonStores/A1PA6795UKMFR9/5f9dd41acffb53b37be84b98a3998469.w4011.h3715.png",
    link: "https://prz.io/KrOaq9rsY",
    subtitle: "Zahnpflege",
    sustainable: true,
    text: "Effektive Mundpflege & modernes Design von happybrush. 20% auf deinen ersten Einkauf. Nachhaltige elektrische Schallzahnbürsten und Vegane Zahnpasta.",
    title: "happybrush",
  },
  {
    category: "game",
    img: "https://play-lh.googleusercontent.com/bE4FJRKJO_FhT6IcHyo3bKMfLvREP9vkBME3BaMktz8kZJrkYnq4933Ml6avuNwW_No",
    link: "https://pokemongolive.com/refer?code=VJ4Y927TK&source=INVITE_PAGE",
    subtitle: "Kostenloses Spiel für Smartphones",
    sustainable: false,
    text: "Wenn du meinen Empfehlungscode VJ4Y927TK verwendest, um Pokémon GO beizutreten oder zurückzukommen, erhältst du einen Willkommensbonus, besondere Belohnungen und mehr.",
    title: "Pokemon GO",
  },
  {
    category: "provider",
    img: "https://play-lh.googleusercontent.com/sKmpsdhvuo6N4zQKzIsUbuwzMDsqKq2P7FW32rDk7NjFXoAEUVTFybnvuPoGTpDTBx0",
    link: "https://www.netzclub.net/einladung-folgen?ic=7W4-VZL-NEG",
    subtitle: "Kostenlose Prepaid-SIM",
    sustainable: false,
    text: "netzclub schenkt dir pro Monat 200mb Datenvolumen und zusätzlich bekommst du mit dem Einladungscode 7W4-VZL-NEG einmalig 10GB Datenvolumen zusätzlich.",
    title: "netzclub",
  },
  {
    category: "learning",
    img: "https://play-lh.googleusercontent.com/Egp-GTOp0CMBeS6eRVEQO6bLYdfklzGxCYSkr7aZynbzr2AJSZpF9s05_6ppj8vwq7I",
    link: "https://app.busuu.com/u7oevWFftUXA5yeCA",
    subtitle: "Sprachenlernen",
    sustainable: false,
    text: "Das ist auch was für dich! Nimm meine persönliche Einladung für ein 30-tägiges Probeabo an, damit wir zusammen lernen können.",
    title: "Busuu",
  },
  {
    category: "travel",
    img: "https://play-lh.googleusercontent.com/7iDtTkpbsUCeeJHJDs2neN1E2owtxYAdyEk6oGUfAVAXpgJI01e6hFlhtx0TVXbXBA=w240-h480",
    link: "https://s.klook.com/c/vw7Vd75jXW",
    subtitle: "Klook Travel",
    sustainable: false,
    text: "Entdecken und buchen Sie erstaunliche Reise- und Freizeiterlebnisse vor Ort mit Klook. Finden Sie kuratierte Aktivitäten und unterhaltsame Aktivitäten mit exklusiven Rabatten.",
    title: "Klook",
  },
  {
    category: "provider",
    img: "https://play-lh.googleusercontent.com/EAU9Ed_wJ7p86twBBEUvKChvVwj_cOM-MahgGKt0m-yHf_F5oHwvu6lVzX69JpXjKMA",
    link: "https://ref.airalo.com/JSgw",
    subtitle: "eSIM Travel & Internet",
    sustainable: false,
    text: "Erhalten Sie 3 US$ Rabatt auf Ihr erstes eSIM-Datenpaket von Airalo. Verwenden Sie den Code THANHB5076, wenn Sie sich anmelden oder wenden Sie ihn an der Kasse an.",
    title: "Airalo",
  },
  {
    category: "travel",
    img: "https://play-lh.googleusercontent.com/5Zkj-vrKHBauMF4srwktsFPPYQqTHA2Tlc8fZLPDyvgAEk2hhGfkNsKSnJZLNvIRHQ",
    link: "https://de.omio.com/refer-a-friend?ic=thanhn7k6f1r",
    subtitle: "Bahn, Bus, Flüge, Fähre",
    sustainable: false,
    text: "Mit Omio kannst du Tickets für deine nächste Reise buchen. Melde dich mit meinem Empfehlungs-Link an und wir erhalten beide einen Rabatt von 10 € auf unsere nächste Buchung!",
    title: "Omio",
  },
];

export default referals;