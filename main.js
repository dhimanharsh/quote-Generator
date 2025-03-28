const lifeQuotes = [
  "The purpose of our lives is to be happy.",
  "Life is what happens when you're busy making other plans.",
  "You only live once, but if you do it right, once is enough.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "Life is either a daring adventure or nothing at all.",
  "The biggest adventure you can take is to live the life of your dreams.",
  "Life isn't about finding yourself. Life is about creating yourself.",
  "You have within you right now, everything you need to deal with whatever the world can throw at you.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "Life is short, and it is up to you to make it sweet.",
  "The unexamined life is not worth living.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Difficulties mastered are opportunities won.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "You miss 100% of the shots you don’t take.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "The best way to predict your future is to create it.",
  "Everything has beauty, but not everyone sees it.",
  "You must be the change you wish to see in the world.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Life changes when you change your habits.",
  "Success usually comes to those who are too busy to be looking for it.",
  "To live will be an awfully big adventure.",
  "You cannot find peace by avoiding life.",
  "Every moment is a fresh beginning.",
  "Turn your wounds into wisdom.",
  "What we think, we become.",
  "Life can only be understood backwards; but it must be lived forwards.",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "Life isn't about waiting for the storm to pass; it's about learning how to dance in the rain.",
  "Your life does not get better by chance, it gets better by change.",
  "The only way to do great work is to love what you do.",
];

document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
  e.preventDefault();
  let quote = lifeQuotes[Math.floor(Math.random() * lifeQuotes.length)];
  document.getElementsByTagName('h2')[0].innerText = quote
});
