function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇
  const widgetSection = document.querySelector('section')

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const widgetDivs = widgetSection.querySelectorAll('div')
  widgetDivs.forEach(widgets => widgets.classList.add('widget'))

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const quoteObj = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteContainer = widgetSection.querySelector('.quoteoftheday')
  const quoteDiv = document.createElement('div')
  quoteDiv.textContent = quoteObj.quote
  quoteContainer.appendChild(quoteDiv)
  const authorDiv = document.createElement('div')
  authorDiv.textContent = `${quoteObj.author} in ${quoteObj.date ? quoteObj.date : 'an unknown date'}`
  quoteContainer.appendChild(authorDiv)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

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
