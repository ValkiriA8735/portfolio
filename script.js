const $logo = document.querySelector('#logo')
const $menu = document.querySelector('#nav-content')
const $menuLinks = document.querySelectorAll('[data-name="menu-link"]')
const $burger = document.querySelector('#nav-toggle')

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const scrollToSection = (hash) => {
  const $header = document.querySelector('#header')
  const $section = document.querySelector(hash)
  const clientTopPosition = window.pageYOffset
  const sectionTopPosition = $section.getBoundingClientRect().top
  const headerHeight = $header.clientHeight
  const targetTopPosition = clientTopPosition + sectionTopPosition - headerHeight

  window.scrollTo({
    top: targetTopPosition,
    behavior: 'smooth'
  })
}

const handleLogoClick = () => {
  $menu.classList.add('hidden')
  scrollToTop()
}

const handleMenuLinkClick = (event) => {
  event.preventDefault()
  $menu.classList.add('hidden')
  scrollToSection(event.currentTarget.hash)
}

const handleBurgerClick = () => {
  $menu.classList.toggle('hidden')
}

$logo.addEventListener('click', handleLogoClick)

$menuLinks.forEach(($menuLink) => {
  $menuLink.addEventListener('click', handleMenuLinkClick)
})

$burger.addEventListener('click', handleBurgerClick)