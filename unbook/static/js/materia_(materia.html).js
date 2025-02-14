
var fzr_avaliacao = document.getElementById('box1');
var fundoblur = document.getElementById('fundo_blur');
var modal = document.getElementById('modal_avaliacao');
var scroll_x = document.getElementById('scroll_modal');

fzr_avaliacao.addEventListener('click', () => {
    fundoblur.style.display = "block";
    fundoblur.classList.add('abrir');
    modal.style.display = "block";
    scroll_x.scrollLeft = 0;
});

fundoblur.addEventListener('click', (e) => {
    if (e.target === fundoblur) {
        fundoblur.style.display = "none";
        modal.style.display = "none";
    }
});

modal.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique no modal se propague para o fundo_blur
});

// Selecionar todos os elementos h2 com a classe 'usuarios'
var usuarios = document.querySelectorAll('.usuarios');

usuarios.forEach(usuario => {
    usuario.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        // Encontrar a div .perfil_mostrar associada
        var perfil_mostrar = usuario.previousElementSibling;
        if (perfil_mostrar && perfil_mostrar.classList.contains('perfil_mostrar')) {
            perfil_mostrar.style.display = 'flex';

            perfil_mostrar.addEventListener('mouseenter', () => {
                perfil_mostrar.style.display = 'flex';
            });

            perfil_mostrar.addEventListener('mouseleave', () => {
                perfil_mostrar.style.display = 'none';
            });

            perfil_mostrar.addEventListener('click', (e) => {
                e.preventDefault();
                var perfil_div = usuario.nextElementSibling; // Supondo que perfil_div está logo após h2
                if (perfil_div && perfil_div.classList.contains('perfil')) {
                    perfil_div.style.display = 'flex';
                    perfil_mostrar.style.display = 'none';

                    // Encontrar o botão "voltar" dentro do perfil_div
                    var voltar_btn = perfil_div.querySelector('.voltar');
                    if (voltar_btn) {
                        voltar_btn.addEventListener('click', () => {
                            perfil_div.style.display = 'none';
                        });
                    }
                }
            });
        }
    });

    usuario.addEventListener('mouseleave', (e) => {
        e.stopPropagation();
        e.preventDefault();
        // Encontrar a div .perfil_mostrar associada
        var perfil_mostrar = usuario.previousElementSibling;
        if (perfil_mostrar && perfil_mostrar.classList.contains('perfil_mostrar')) {
            // Usar setTimeout para garantir que o evento mouseenter na div tenha tempo de ser registrado
            setTimeout(() => {
                if (!perfil_mostrar.matches(':hover') && !usuario.matches(':hover')) {
                    perfil_mostrar.style.display = 'none';
                }
            }, 100);
        }
    });
});

// Função auxiliar para obter o CSRF token
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// FUNÇÃO PARA RODAR SCROLL

if(window.matchMedia("(max-width:764px)").matches) {
    var proximo1 = document.getElementById('prox_button_1').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: 410, behavior: "smooth" })
    });
    
    var voltar1 = document.getElementById('back_button_1').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: -410, behavior: "smooth" })
    });
    
    var proximo2 = document.getElementById('prox_button_2').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: 409.75, behavior: "smooth" })
    });
    
    var voltar2 = document.getElementById('back_button_2').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: -409.75, behavior: "smooth" })
    });
    
    var proximo3 = document.getElementById('prox_button_3').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: 408.75, behavior: "smooth" })
    });
    
    var voltar3 = document.getElementById('back_button_3').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: -408.75, behavior: "smooth" })
    });
    
    var proximo4 = document.getElementById('prox_button_4').addEventListener('click', (e) => {
        e.preventDefault()
        fundoblur.style.display = "none";
        modal.style.display = "none";
    });
}
else {
    var proximo1 = document.getElementById('prox_button_1').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: 540, behavior: "smooth" })
    });
    
    var voltar1 = document.getElementById('back_button_1').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: -540, behavior: "smooth" })
    });
    
    var proximo2 = document.getElementById('prox_button_2').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: 540, behavior: "smooth" })
    });
    
    var voltar2 = document.getElementById('back_button_2').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: -540, behavior: "smooth" })
    });
    
    var proximo3 = document.getElementById('prox_button_3').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: 540, behavior: "smooth" })
    });
    
    var voltar3 = document.getElementById('back_button_3').addEventListener('click', (e) => {
        e.preventDefault()
        scroll_x.scrollBy({ left: -540, behavior: "smooth" })
    });
    
    var proximo4 = document.getElementById('prox_button_4').addEventListener('click', (e) => {
        e.preventDefault()
        fundoblur.style.display = "none";
        modal.style.display = "none";
    });

}

//FUNÇÃO PARA TER O ID IGUAL AO NOME DO USUÁRIO
window.onload = function () {
    var h2Elements = document.querySelectorAll('.usuarios'); // Seleciona o elemento h2 dentro de scroll na página
    // console.log(h2Elements)

    if (h2Elements.length >= 0) {
        for (let i = 0; i < h2Elements.length; i++) {
            var h2Element = h2Elements[i];

            var h2Text = h2Element.textContent.trim(); // Obtém o texto dentro do h2 e remove espaços em branco desnecessários
            h2Element.id = h2Text;
        }
    } else {
        console.error('nenhum elemento h2 foi encontrado')
    }

    // criar calendário
    
    for (var i=0;i<globalThis.lista_turno_django.length;i++){
        dia = document.getElementById(globalThis.lista_turno_django[i])
        dia.style.backgroundColor = "#81E28B"
    }

    // pintar estrela

    pintar_estrela_tela(nota_didatica/2, "didatica")
    pintar_estrela_tela(nota_apoio/2, "apoio")
    pintar_estrela_tela(nota_dificuldade/2, "dificuldade")

    // colocando quant de likes

    for (i=0;i<quant_likes.length;i++){
        element = document.getElementById(`like${i}`)
        element.innerText = `${quant_likes[i]}`
         // numero de likes (oi)
        
        elements = document.getElementById(`coracao${i}`);
        //console.log(elements) // coraçao botao
        
        if (curtidas[i] === "True"){
            elements.style.color = "red";
            elements.classList.add('heart');
        } else{
            elements.style.color = "grey";
            elements.classList.remove('heart');  //AAAAAAAAAAAAAA RRRRRRRRRRRUUUUUUUUUUMMMMMMMMMMMAAAAAAAAAAARRRR
        }
    }
}

function pintar_estrela_tela(nota, categoria){
    cont_nota =0.5
    while(cont_nota<=5){
        id = `estrela_${cont_nota}_${categoria}`
        estrela = document.getElementById(id)
        estrela.style.color = '#777D89'
        cont_nota +=0.5
    }

    cont_nota =0.5
    while (cont_nota<=nota){
        id = `estrela_${cont_nota}_${categoria}`
        estrela = document.getElementById(id)
        estrela.style.color = '#ffd000'
        cont_nota +=0.5
    }
}

function like(element, pk) {
    id = element.id
    id = id.replace("coracao", "")
    contador_like = document.getElementById(`like${id}`)
    num = Number(contador_like.innerText)
    
    if (element.style.color === "red") {
        element.style.color = "grey";
        element.classList.remove('animation');
        
        if (num === 0) {
            contador_like.innerText = `${num}`
        } 
        else if (num !== 0){
            contador_like.innerText = `${num-1}`
        }
        
    } else {
        element.style.color = "red";
        element.classList.add('animation');
        contador_like.innerText = `${num+1}`
    }
    
    $.ajax({
        type: "POST",
        url: "../../../like/",
        data: {
            csrfmiddlewaretoken: csrf_token,
            comentario: pk,
            materia: codigo,
            professor: nome,
        }, 
        success: function (response)  {
            console.log("")
        }
    })
}

function modal_report(element, pk) {
    id = element.id



if (element.style.color === "red") {
        element.style.color = "grey";
        element.classList.remove('animation');
        
    } else {
        element.style.color = "red";
        element.classList.add('animation');

        var modal_denuncia = document.getElementById('modal_denuncia')
        fundoblur.style.display = "block";
        fundoblur.classList.add('abrir');
        modal_denuncia.style.display = "block";
            
        
        
        fundoblur.addEventListener('click', (e) => {
            if (e.target === fundoblur) {
                fundoblur.style.display = "none";
                modal_denuncia.style.display = "none";
                element.style.color = "grey";
        element.classList.remove('animation');
            }
        });
        
        modal_denuncia.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique no modal se propague para o fundo_blur
        });

        modal_denuncia.querySelector("#submit_denuncia").addEventListener('click', function() {
        envia_denuncia(modal_denuncia, pk)
        modal_denuncia.style.display = 'none'
        fundoblur.style.display = 'none'
    })
    }


}

function envia_denuncia(modal, pk) {
    lista = modal.querySelector("#div_radios").querySelectorAll("h2")
    outra_lista = ''
    lista.forEach(function(item) {
        console.log(item.style.backgroundColor)
        if (item.style.backgroundColor === 'rgb(233, 89, 89)'){
            console.log(true)
            outra_lista += '1 '
        } else{
            outra_lista += '0 '
        }
    })

    obs = modal.querySelector("#why").textContent

    $.ajax({
        type: "POST",
        url: "../../../denuncia/",
        data: {
            csrfmiddlewaretoken: csrf_token,
            comentario: pk,
            materia: codigo,
            professor: nome,
            pq: outra_lista,
            obs: obs,
        }, 
        success: function (response)  {
            console.log(response)
        }
    })
    
}

var lista = [];

function pintar(element) {
    // Verifica a cor atual do elemento
    if (element.style.backgroundColor === 'rgb(233, 89, 89)') {
        element.style.backgroundColor = ''; // Retorna ao valor padrão
        // Remove o conteúdo do elemento da lista
        var index = lista.indexOf(element.textContent);
        if (index !== -1) {
            lista.splice(index, 1);
        }
    } else {
        element.style.backgroundColor = 'rgb(233, 89, 89)'; // Cor vermelha
        // Adiciona o conteúdo do elemento à lista
        lista.push(element.textContent);
    }

    // Imprime a lista atualizada no console
    console.log('[' + lista.join(', ') + ']'); //enviar para algum lugar do backs
}


//FUNÇÃO PARA POSTAR O COMENTARIO ESCRITO
function postar_comentario() {

    var conteudo = document.getElementById("comentar_input").value.trim();
    console.log(conteudo)

    if (conteudo !== "") {

        var comentarioBox = document.createElement('div');
        comentarioBox.id = "@anônimo (coloquei no js direto)"

        var usuario = document.createElement('h2');
        usuario.className = "usuarios";
        var user = document.getElementById('User_js')
        usuario.innerText = '@' + user.textContent;


        var comentario = document.createElement('h3');
        comentario.className = "comentarios";
        comentario.innerText = conteudo;

        var espaco_curtidas = document.createElement('div');
        espaco_curtidas.style.marginLeft = "4em"
        const curtidas_style = document.getElementById('comentario_buttons');
        if (curtidas_style) {
            const computedStyle = getComputedStyle(curtidas_style);

            espaco_curtidas.style.display = computedStyle.display;
            espaco_curtidas.style.flexDirection = computedStyle.flexDirection;
            espaco_curtidas.style.fontSize = computedStyle.fontSize;
            espaco_curtidas.style.color = computedStyle.color;
            espaco_curtidas.style.fontWeight = computedStyle.fontWeight;
            espaco_curtidas.style.marginLeft = computedStyle.marginLeft;
            // Adicione outros estilos que você quer copiar aqui
        }

        var Gostei = document.createElement('h3');
        Gostei.innerText = "";
        
        const gosteiEstilo = document.querySelector('.text ');
    if (gosteiEstilo) {
        const computedStyle = getComputedStyle(gosteiEstilo);
        Gostei.style.fontSize = computedStyle.fontSize;
        Gostei.style.color = computedStyle.color;
        Gostei.style.fontWeight = computedStyle.fontWeight;
        Gostei.style.marginLeft = computedStyle.marginLeft;
        Gostei.style.cursor = computedStyle.cursor;
        // Adicione outros estilos que você quer copiar aqui
    }

        var button_like = document.createElement('button')
        const like_style = document.querySelector('.like');
        button_like.type = "button" 
    if (like_style) {
        const computedStyle = getComputedStyle(like_style);
        button_like.style.fontFamily = computedStyle.fontFamily;
        button_like.style.color = computedStyle.color;
        button_like.style.fontSize = computedStyle.fontSize;
        button_like.style.marginLeft = computedStyle.marginLeft;
        button_like.style.cursor = computedStyle.cursor;
        button_like.style.border = computedStyle.border;
        button_like.style.background = computedStyle.background;
        button_like.style.outline = computedStyle.outline;


    }
        var like = document.createElement('i');
        like.style.marginLeft = "15px";
        like.style.color = "grey";
        like.className = "fa-solid fa-heart"
        like.style.fontFamily = "fontAwesome"
        like.style.cursor  = "pointer"
        like.onclick = function() {
        
                if (this.style.color === "red") {
                    this.style.color = "grey";
                    this.classList.remove('heart');
                } else {
                    this.style.color = "red";
                    this.classList.add('heart');
                }
            
        }
    
        button_like.appendChild(like)

        espaco_curtidas.appendChild(Gostei);
        espaco_curtidas.appendChild(like);

        comentarioBox.appendChild(usuario);
        comentarioBox.appendChild(comentario);
        comentarioBox.appendChild(espaco_curtidas);

        var scroll = document.getElementById('scroll');
        scroll.appendChild(comentarioBox);

        comentarioBox.scrollIntoView({ behavior: "smooth" });
        document.getElementById('comentar_input').value = ' ';

        comentario_back(conteudo)
    }

}

//aumentar conforme o texto aumente
const textarea = document.getElementById('comentar_input');
    const contador = document.getElementById('contador');

    textarea.addEventListener('input', () => {
      autoResize();
      updateCounter();
    });

    function autoResize() {
      textarea.style.height = 'auto'; // Resetar a altura
      textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar altura para o conteúdo
    }

    function updateCounter() {
      const charCount = textarea.value.length;
      contador.textContent = `${charCount} / 450`;

      if (charCount >= 450){
        textarea.style.backgroundColor = "#ea3939"
        alert('você excedeu o limite de caracteres')
      } else {
        textarea.style.backgroundColor = "#e8e7e8"
      }
    }

    // Garantir que o cursor comece no início ao clicar no textarea
textarea.addEventListener('focus', (event) => {
    if (textarea.value === '') {
      textarea.setSelectionRange(0, 0);
    }
  });
  
  // Garantir que o textarea esteja vazio ao carregar a página
  document.addEventListener('DOMContentLoaded', () => {
    textarea.value = ''; // Limpar o valor do textarea
    autoResize();
    updateCounter();
  });

    document.querySelector('#comentar_input').addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            postar_comentario();
            autoResize.call(textarea);
        }
    }); // quando apertar ENTER no teclado ele envia o comentário

function comentario_back(conteudo){

    $.ajax({
        type: "POST",
        url: "../../../comentario/",
        data: {
            csrfmiddlewaretoken: csrf_token,
            comentario: conteudo,
            professor: nome,
            materia: codigo,
        }, 
        success: function (response)  {
            console.log("salvei, comentário")
            window.location.reload(true)
        }
    })
}

// script.js
document.querySelectorAll('tbody th').forEach(item => {
    item.addEventListener('mouseover', function (e) {
        const modal = document.getElementById('modal_calendario');

        // Verifica se o mouse está sobre o elemento <th> do <tbody>
        if (e.target === item) {
            // Obtém o estilo computado do elemento
            const computedStyle = window.getComputedStyle(item);
            const backgroundColor = computedStyle.backgroundColor;

            // Verifica se o background color corresponde ao desejado
            if (backgroundColor === 'rgb(129, 226, 139)') {
                // Obtém a posição do elemento
                const itemRect = item.getBoundingClientRect();
                const itemID = item.id;

                var h2 = document.getElementById('horario');
                h2.textContent = itemID;

                // Calcula a posição do modal com base nas coordenadas do elemento
                const modalTop = itemRect.bottom + window.scrollY -1280;
                const modalLeft = itemRect.left + window.scrollX;

                // Define a posição do modal
                modal.style.top = `${modalTop}px`;
                modal.style.left = `${modalLeft}px`;

                // Exibe o modal
                modal.style.display = 'block';
            }
        }
    });

    item.addEventListener('mouseout', function () {
        const modal = document.getElementById('modal_calendario');
        modal.style.display = 'none';
    });
});

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {

        // Primeiro, remover a classe 'not_selected' de todos os botões
        document.querySelectorAll('.button').forEach(btn => {
            btn.classList.remove('not_selected');
        });

        // Adicionar a classe 'not_selected' a todos os botões que não foram clicados
        document.querySelectorAll('.button').forEach(btn => {
            if (btn !== this) {
                btn.classList.add('not_selected');
            }
        });
    });
});

//  FUNÇÃO PARA EDITAR COMENTÁRIO!!!

function editar(element) {
    var modal_editar = document.getElementById('modal_editar')
    var comentario_text = document.querySelector('.comentarios')
    const comentarioId = element.dataset.comentarioId;
    texto_antigo = document.getElementById(`texto${comentarioId}`).textContent.trim()
    document.getElementById("texto_edita").value = texto_antigo.substr(0, texto_antigo.indexOf('        '));
    
    modal_editar.style.display = 'flex'
    fundoblur.style.display = 'block'
    


    fundoblur.addEventListener('click', (e)=> {
        e.preventDefault()
        e.stopPropagation()
        modal_editar.style.display = 'none'
        fundoblur.style.display = 'none'
    }) //fechar modal

    



    document.getElementById('submit_editar').addEventListener('click', ()=> {
        novo_texto = document.getElementById("texto_edita").value
        console.log(novo_texto)
        $.ajax({
            type: "POST",
            url: `../../../editar-comentario/${comentarioId}/`,
            data: {
                csrfmiddlewaretoken: csrf_token,
                texto_novo: novo_texto,
                
            },
            success: function (response) {
                console.log(response)
                location.reload();
            }
        })
    });
    
}




function certeza(element) {
    fundoblur.style.display = "block";
    fundoblur.classList.add('abrir');
    var modal = document.getElementById('modal_apagar_comentario')
    modal.style.display = "block";

    fundoblur.addEventListener('click', (e) => {
        if (e.target === fundoblur) {
            fundoblur.style.display = "none";
            modal.style.display = "none";
        }
    });

    document.getElementById('nao_c').addEventListener('click',(e)=>{
        e.preventDefault()
        fundoblur.style.display = "none";
        modal.style.display = "none";
    })

    document.getElementById('sim_c').addEventListener('click',(e)=>{
        e.preventDefault()
        fundoblur.style.display = "none";
        modal.style.display = "none";
        apagarComentario(element)
    })

}

function apagarComentario(element) {
    const comentarioId = element.dataset.comentarioId;
    const identificacao = element.dataset.identificacao; // Certifique-se de que isso está correto

    // Adicione logs para depuração
    console.log(`Tentando deletar comentarioId: ${comentarioId}, identificacao: ${identificacao}`);

    fetch(`/deletar/${comentarioId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Comentário deletado com sucesso!');
            location.reload();
            // Opcional: Remover o comentário da lista de comentários no DOM
            document.getElementById(`comentario-${comentarioId}`).remove();
        } else {
            alert('Erro ao deletar o comentário.');
        }
    });
}



