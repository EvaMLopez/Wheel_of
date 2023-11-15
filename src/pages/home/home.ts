const button = (document.querySelector('.nav-toggle') as HTMLButtonElement)
const nav = (document.querySelector('.nav') as HTMLElement)

button.addEventListener('click',(): void => {
    nav.classList.toggle('activo')
})