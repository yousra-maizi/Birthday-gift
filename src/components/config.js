const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0325", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yippiee!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: your anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is yousra so cute?", // Example trending search query
    "Why does Adil is patootie?", // Another example query
    `Is yousra's real form a cat? `, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" :3', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2023-01-05", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together approximately for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: " Adil's Birthday Present <3 ", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    
    {
      title: "Only", // Title of the song
      artist: "LeeHi", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "From the start",
      artist: "Laufey",
      left: "40%",
      top: "15%",
    },
    {
      title: "Light",
      artist: "Wave to earth",
      left: "15%",
      top: "40%",
    },
    {
      title: "Heart To Heart",
      artist: "Mac DeMarco ",
      left: "30%",
      top: "75%",
    },
    {
      title: "Lovers rock",
      artist: "Tv Girl",
      left: "5%",
      top: "65%",
    },
    {
      title: "Seasons",
      artist: "Wave to earth",
      left: "25%",
      top: "90%",
    },
    {
      title: "4ever",
      artist: "Clairo",
      left: "35%",
      top: "50%",
    },
    {
      title: "Still with you",
      artist: "Jung Kook",
      left: "10%",
      top: "25%",
    },
 
  ],

    // 📝 Message Recap Page
    messageTitle: "20 things i like about you", // Title for the messages recap page
    messageGallery: [
      { title: "September 3, 2024", description: "-❤️ Kind\n-❤️ Patient\n-❤️ Smart\n-❤️ Caring\n-❤️ Positive" }, // Message entry titles are desactivated
      { title: "October 5, 2024", description: "-❤️ Cat Lover\n-❤️ Clingy side\n-❤️ Good listener\n-❤️ Funny\n-❤️ Emotionally intelligent" },
      { title: "December 25, 2024", description: "-❤️ Silly\n-❤️ Serious\n-❤️ Sometimes shy\n-❤️ Brave\n-❤️ Cool" },
      { title: "December 25, 2024", description: "-❤️ Handsome\n-❤️ Good looking\n-❤️ Loyal\n-❤️ Act of service\n -❤️ Kids Lover" }
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Random Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "July 14, 2024", description: "Hehehe we were playing valorant i was a pro noob (i'm still a noob):p ",style: "object-contain" }, // Picture entry
      { title: "October 25, 2024", description: "Watching 'Summer stike' 💕", style: "object-contain"   },
      { title: "January 19, 2025", description: "Winter sonata note (ps: ktebtha mea 01:23 hehehehe 9bel eliha hit every word fiha sincere ofc)", style: "object-contain", height: "100%",width: "100%"  }
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: " 🎉 Happy Birthday Adil🎉 Wishing you an amazing day filled with laughter, great memories, and the company of the people who appreciate you the most. You’re not just a great friend but also someone who inspires those around you with your kindness, loyalty, and positivity. May this year bring you success, happiness, and everything you’ve been working toward. I’m grateful for our friendship, and I look forward to many more awesome moments together.", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, Adil! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
/*songs : 
laufey : from the start
wave to earth: seasons
wave to earth: light
Leehi: only
TV Girl: lovers rock
lord Huron the night we met
Mac DeMarco Heart To Heart
Mac Miller  Congratulations
Jung Kook Still with you 
*/

