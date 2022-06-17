/* 'ADDEVENTLISTENER' - Adicione um evento ('event') ('scroll', 'click', 'load', 'mouseover', ... ) a função tal ('listener') */

const navigation = document.getElementById('navigation')

window.addEventListener('scroll', onScroll)

onScroll()

/* Esta função vai ser global e vai chamar as outras */

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

/* 

scrollY - mostra quanto o scroll da página rolou;

innerHeight - mostra o quanto da página correu no viewport

Buscando a metade da altura da página (em uma linha imaginária), tenho:

             ScrollY               +             innerHeight / 2
(que momento/ Seção o scroll esta)    (verique a metade da viewport)   

*/

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2
  /* dentrop desta função, este valor/ varável não vai mudar */

  // Verificar se a Seção passou da linha
  // quais dados vou precisar?
  /* ENTENDER A LÓGICA DO PROCESSO E DO QUE QUER SE ALTERAR E/ OU OBTER*/

  // linha alvo

  // topo da seção
  const sectionTop = section.offsetTop

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // Verificar se a altura da seção/ fim da viewport/ base esta abaixo da linha alvo
  // quais dados vou precisar?

  // altura da seção
  const sectionHeight = section.offsetHeight

  // topo da seção

  //a seção termina onde? Aqui é a base da seção (na página) e não só a altura dela na viewport
  const sectionEndsAt = sectionTop + sectionHeight

  // linha alvo

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção

  // o topo da seção deve ter passado da linha alvo e o fundo dela não deve ter passado
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  // pegar a seção e procurar o atributo 'id' nela
  const sectionId = section.getAttribute('id')
  // dentro do documento, na class 'menu', busque todo elemento que contenha
  // 'a href' e sua seção
  // ${} - significa o uso de qualquer código JS ao se usar Template Strings (crase)
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

  // informações dos dados e da lógica
  console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetLine
  )

  console.log(
    'O final/ base/ fundo da seção esta abaixo/ passou da linha alvo?',
    sectionEndPassedTargetLine
  )
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// usando 'argumento/ parâmetro' na função
// mas o que é um objeto em JS?
// OBJETO - var coisa {nome: 'chiforinfula', cor: 'preta', tipo: 'qualuer'}
// Para chamar este objeto: 'coisa.tipo'

/* 
function ScrollReveal() {
  var options = {
    reveal function() {}
    }
  return options
}
isso equivale a:

ScrollReveal().reveal()
 */

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services header,
  #services .card,
  #about header,
  #about .contents`)

/* Acrescentando parâmetros a uma função:

  function sayMyName(name) {
    console.log(name)
  }

  sayMyName("vinicius");
  sayMyName("Cláudio");
  sayMyName("Dudu");
 
  //  a função faz console.log do nome escrito (parâmetro) ao chamá-la

  */
