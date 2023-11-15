function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇
  const widgetSection = document.querySelector('section')
  const random = data => data[Math.floor(Math.random() * data.length)]

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const widgetDivs = widgetSection.querySelectorAll('div')
  widgetDivs.forEach(widgets => widgets.classList.add('widget'))

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const quoteData = random(quotes);
  const quoteContainer = widgetSection.querySelector('.quoteoftheday')
  const quoteDiv = document.createElement('div')
  quoteDiv.textContent = quoteData.quote
  quoteContainer.appendChild(quoteDiv)
  const authorDiv = document.createElement('div')
  authorDiv.textContent = `${quoteData.author} in ${quoteData.date ? quoteData.date : 'an unknown date'}`
  quoteContainer.appendChild(authorDiv)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const randomCorporateSpeak = () => `We need to ${random(verbs)} our ${random(nouns)} ${random(adverbs)} in order to ${random(verbs)} our ${random(nouns)} ${random(adverbs)}.`
  const corpSpeak = document.createElement('p')
  corpSpeak.textContent = randomCorporateSpeak()
  widgetSection.querySelector('.corporatespeak').appendChild(corpSpeak)

  // 👉 TASK 4 - Build a "Countdown" widget
  const countdownEl = document.createElement('p')
  widgetSection.querySelector('.countdown').appendChild(countdownEl)

  let count = 5
  const countdown = count => {
    countdownEl.textContent = count ? `T-minus ${count}...` : 'Liftoff! 🚀'
    count--
    if (count >= 0) {
      setTimeout(() => {
        countdown(count)
      }, 1000)
    }
  }
  countdown(count)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
