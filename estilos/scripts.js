// MENU RESPONSIVO
let show = true;
                
const menuSection = document.querySelector(".menuSection")
const menuToggle = menuSection.querySelector(".menuToggle")

// quando clicar, rodar a função de add uma lista de classe com o item on no menuSection (usei toggle pq ele add e tira, se estiver ou não)
menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial" // para evitar a rolagem da pag (se show for true, overflow hidden, se não for, a pag rola)

    menuSection.classList.toggle("on", show)
    show = !show; // atualizando valor de show de true p false
})

