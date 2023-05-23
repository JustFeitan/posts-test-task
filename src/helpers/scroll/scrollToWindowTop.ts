export const scrollToWindowTop = () => {
    window.scroll({
        top: -document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    })
}
