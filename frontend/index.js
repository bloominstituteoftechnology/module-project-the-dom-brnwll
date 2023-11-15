function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇
  const sectionWidgets = document.querySelector('section')
  const random = data => data[Math.floor(Math.random() * data.length)]

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const divsWidgets = sectionWidgets.querySelectorAll('div')
  divsWidgets.forEach(widgets => widgets.classList.add('widget'))

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  const quoteData = random(quotes);
  const divQuoteOfTheDay = sectionWidgets.querySelector('.quoteoftheday')
  const divQuoteText = document.createElement('div')
  divQuoteText.textContent = quoteData.quote
  divQuoteOfTheDay.appendChild(divQuoteText)
  const divAuthorInfo = document.createElement('div')
  divAuthorInfo.textContent = `${quoteData.author} in ${quoteData.date ? quoteData.date : 'an unknown date'}`
  divQuoteOfTheDay.appendChild(divAuthorInfo)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const getStringCorporateSpeak = () => `We need to ${random(verbs)} our ${random(nouns)} ${random(adverbs)} in order to ${random(verbs)} our ${random(nouns)} ${random(adverbs)}.`
  const elementCorporateSpeak = document.createElement('p')
  elementCorporateSpeak.textContent = getStringCorporateSpeak()
  sectionWidgets.querySelector('.corporatespeak').appendChild(elementCorporateSpeak)

  // 👉 TASK 4 - Build a "Countdown" widget
  const elementCountdown = document.createElement('p')
  sectionWidgets.querySelector('.countdown').appendChild(elementCountdown)
  const countdown = count => {
    elementCountdown.textContent = count ? `T-minus ${count}...` : 'Liftoff! 🚀'
    count--
    if (count >= 0) {
      setTimeout(() => countdown(count), 1000)
    }
  }
  countdown(5)

  // 👉 TASK 5 - Build a "Friends" widget
  const elementFriends = document.createElement('p')
  const person = random(people)
  const getFriendBy = id => people.find(person => person.id === id)
  const getFriendsFor = person => person.friends.map(id => getStringNameFor(getFriendBy(id)))
  const getStringNameFor = person => `${person.fname} ${person.lname}`
  const getStringDOBfor = person => person.dateOfBirth.slice(0, 4)
  const getStringNoFriends = () => 'has no friends.'
  const getStringOneOrMore = friends => {
    const last = friends.pop();
    const commaSeparatedNames = `${friends.join(', ')}`
    return `is friends with ${!friends.length ? last : commaSeparatedNames + ' and ' + last}.`
  }
  const getStringFriendsFor = person => {
    const friends = getFriendsFor(person)
    return !friends.length ? getStringNoFriends() : getStringOneOrMore(friends)
  }
  elementFriends.textContent = `${getStringNameFor(person)} was born in ${getStringDOBfor(person)} and ${getStringFriendsFor(person)}`
  sectionWidgets.querySelector('.friends').appendChild(elementFriends)

  // 👉 TASK 6 - Make it so user can tab through the widgets
  divsWidgets.forEach((div, index) => div.setAttribute('tabIndex', index + 1))

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
