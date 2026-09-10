let respostas = [];

let respostasPerguntas = {};

let indiceAtual = 0;

const URL_PLANILHA =
    "https://script.google.com/macros/s/AKfycbzIB2B0QBHPiVmK3ByK55UmWOyGw0oTRiIIY2LBQCyAA_xUOTXerbIUjXKaV_k3Zksl/exec";


/* =========================================================
   FUNDOS
   ========================================================= */

const fundos = {};

function criarFundo(palavras) {
    return `
        <div class="fundo-emocoes">
            ${palavras.map(function(item) {
                return `
                    <span class="${item.classe}" style="${item.posicao}">
                        ${item.texto}
                    </span>
                `;
            }).join("")}
        </div>
    `;
}


/* =========================================================
   20 FUNDOS
   ========================================================= */

fundos.pergunta1 = criarFundo([
    { texto: "ANSIEDADE", classe: "grande inclinada-direita", posicao: "top: 5%; left: 7%;" },
    { texto: "CALMA", classe: "pequena", posicao: "top: 13%; right: 8%;" },
    { texto: "CONFIANÇA", classe: "media inclinada-esquerda", posicao: "top: 27%; left: 12%;" },
    { texto: "MEDO", classe: "pequena vertical", posicao: "top: 38%; right: 9%;" },
    { texto: "ESPERANÇA", classe: "media inclinada-direita", posicao: "top: 51%; left: 6%;" },
    { texto: "ALÍVIO", classe: "pequena", posicao: "top: 65%; right: 15%;" },
    { texto: "CURIOSIDADE", classe: "media inclinada-esquerda", posicao: "bottom: 9%; left: 17%;" }
]);

fundos.pergunta2 = criarFundo([
    { texto: "ORGULHO", classe: "media inclinada-esquerda", posicao: "top: 4%; left: 8%;" },
    { texto: "TRANQUILIDADE", classe: "pequena", posicao: "top: 15%; right: 7%;" },
    { texto: "ALEGRIA", classe: "media", posicao: "top: 29%; left: 5%;" },
    { texto: "INSEGURANÇA", classe: "grande inclinada-direita", posicao: "top: 40%; right: 4%;" },
    { texto: "RESPEITO", classe: "pequena", posicao: "top: 53%; left: 13%;" },
    { texto: "CONFIANÇA", classe: "media vertical", posicao: "top: 67%; right: 10%;" },
    { texto: "ALÍVIO", classe: "pequena inclinada-direita", posicao: "bottom: 6%; left: 24%;" }
]);

fundos.pergunta3 = criarFundo([
    { texto: "ESPERANÇA", classe: "media inclinada-direita", posicao: "top: 5%; left: 6%;" },
    { texto: "DÚVIDA", classe: "pequena", posicao: "top: 12%; right: 10%;" },
    { texto: "MOTIVAÇÃO", classe: "media vertical", posicao: "top: 26%; left: 8%;" },
    { texto: "MEDO", classe: "grande inclinada-esquerda", posicao: "top: 39%; right: 3%;" },
    { texto: "CONFIANÇA", classe: "pequena", posicao: "top: 51%; left: 17%;" },
    { texto: "CURIOSIDADE", classe: "media inclinada-direita", posicao: "top: 63%; right: 8%;" },
    { texto: "ANIMAÇÃO", classe: "pequena", posicao: "bottom: 7%; left: 22%;" }
]);

fundos.pergunta4 = criarFundo([
    { texto: "ACOLHIMENTO", classe: "media inclinada-direita", posicao: "top: 4%; left: 7%;" },
    { texto: "DESCONFORTO", classe: "pequena", posicao: "top: 14%; right: 8%;" },
    { texto: "RESPEITO", classe: "grande inclinada-esquerda", posicao: "top: 28%; left: 4%;" },
    { texto: "SEGURANÇA", classe: "media", posicao: "top: 42%; right: 11%;" },
    { texto: "DÚVIDA", classe: "pequena vertical", posicao: "top: 55%; left: 12%;" },
    { texto: "CONFIANÇA", classe: "media inclinada-esquerda", posicao: "top: 67%; right: 5%;" },
    { texto: "CALMA", classe: "pequena", posicao: "bottom: 6%; left: 27%;" }
]);

fundos.pergunta5 = criarFundo([
    { texto: "PRESSÃO", classe: "grande inclinada-direita", posicao: "top: 4%; left: 5%;" },
    { texto: "CORAGEM", classe: "pequena", posicao: "top: 13%; right: 9%;" },
    { texto: "PREOCUPAÇÃO", classe: "media vertical", posicao: "top: 28%; left: 8%;" },
    { texto: "ESPERANÇA", classe: "media inclinada-esquerda", posicao: "top: 40%; right: 6%;" },
    { texto: "CONFIANÇA", classe: "pequena", posicao: "top: 53%; left: 14%;" },
    { texto: "MEDO", classe: "media inclinada-direita", posicao: "top: 65%; right: 10%;" },
    { texto: "ALÍVIO", classe: "pequena", posicao: "bottom: 7%; left: 23%;" }
]);

fundos.pergunta6 = criarFundo([
    { texto: "APOIO", classe: "media inclinada-esquerda", posicao: "top: 5%; left: 8%;" },
    { texto: "INSEGURANÇA", classe: "grande", posicao: "top: 12%; right: 3%;" },
    { texto: "CONFORTO", classe: "pequena", posicao: "top: 29%; left: 10%;" },
    { texto: "SOLIDÃO", classe: "media vertical", posicao: "top: 41%; right: 8%;" },
    { texto: "RESPEITO", classe: "media inclinada-direita", posicao: "top: 54%; left: 15%;" },
    { texto: "CONFIANÇA", classe: "pequena", posicao: "top: 67%; right: 15%;" },
    { texto: "PERTENCIMENTO", classe: "pequena inclinada-esquerda", posicao: "bottom: 6%; left: 17%;" }
]);

fundos.pergunta7 = criarFundo([
    { texto: "SOBRECARGA", classe: "grande inclinada-esquerda", posicao: "top: 4%; left: 6%;" },
    { texto: "MOTIVAÇÃO", classe: "media", posicao: "top: 13%; right: 8%;" },
    { texto: "CANSAÇO", classe: "pequena vertical", posicao: "top: 27%; left: 8%;" },
    { texto: "ANSIEDADE", classe: "media inclinada-direita", posicao: "top: 40%; right: 5%;" },
    { texto: "PRESSÃO", classe: "pequena", posicao: "top: 53%; left: 16%;" },
    { texto: "TRANQUILIDADE", classe: "media inclinada-esquerda", posicao: "top: 65%; right: 8%;" },
    { texto: "ALÍVIO", classe: "pequena", posicao: "bottom: 6%; left: 25%;" }
]);

fundos.pergunta8 = criarFundo([
    { texto: "COBRANÇA", classe: "media inclinada-direita", posicao: "top: 4%; left: 8%;" },
    { texto: "CANSAÇO", classe: "pequena", posicao: "top: 15%; right: 7%;" },
    { texto: "INJUSTIÇA", classe: "grande vertical", posicao: "top: 29%; left: 4%;" },
    { texto: "FRUSTRAÇÃO", classe: "media inclinada-esquerda", posicao: "top: 43%; right: 8%;" },
    { texto: "RAIVA", classe: "pequena", posicao: "top: 56%; left: 14%;" },
    { texto: "COMPREENSÃO", classe: "media", posicao: "top: 68%; right: 5%;" },
    { texto: "ALÍVIO", classe: "pequena inclinada-direita", posicao: "bottom: 6%; left: 23%;" }
]);

fundos.pergunta9 = criarFundo([
    { texto: "NERVOSISMO", classe: "media inclinada-esquerda", posicao: "top: 4%; left: 6%;" },
    { texto: "CURIOSIDADE", classe: "pequena", posicao: "top: 12%; right: 10%;" },
    { texto: "PRESSÃO", classe: "grande inclinada-direita", posicao: "top: 28%; left: 5%;" },
    { texto: "CONFIANÇA", classe: "media vertical", posicao: "top: 42%; right: 8%;" },
    { texto: "DÚVIDA", classe: "pequena", posicao: "top: 55%; left: 16%;" },
    { texto: "ESPERANÇA", classe: "media inclinada-esquerda", posicao: "top: 66%; right: 6%;" },
    { texto: "ANIMAÇÃO", classe: "pequena", posicao: "bottom: 7%; left: 25%;" }
]);

fundos.pergunta10 = criarFundo([
    { texto: "SURPRESA", classe: "grande inclinada-direita", posicao: "top: 5%; left: 7%;" },
    { texto: "DÚVIDA", classe: "pequena", posicao: "top: 13%; right: 9%;" },
    { texto: "NERVOSISMO", classe: "media", posicao: "top: 27%; left: 5%;" },
    { texto: "CURIOSIDADE", classe: "media vertical", posicao: "top: 40%; right: 6%;" },
    { texto: "PREOCUPAÇÃO", classe: "pequena", posicao: "top: 54%; left: 14%;" },
    { texto: "CALMA", classe: "media inclinada-esquerda", posicao: "top: 66%; right: 10%;" },
    { texto: "CONFUSÃO", classe: "pequena inclinada-direita", posicao: "bottom: 6%; left: 22%;" }
]);

fundos.pergunta11 = criarFundo([
    { texto: "FRUSTRAÇÃO", classe: "media inclinada-esquerda", posicao: "top: 4%; left: 6%;" },
    { texto: "INVISIBILIDADE", classe: "pequena", posicao: "top: 14%; right: 6%;" },
    { texto: "TRISTEZA", classe: "grande", posicao: "top: 28%; left: 4%;" },
    { texto: "RAIVA", classe: "media vertical", posicao: "top: 42%; right: 9%;" },
    { texto: "SOLIDÃO", classe: "pequena", posicao: "top: 55%; left: 14%;" },
    { texto: "CORAGEM", classe: "media inclinada-direita", posicao: "top: 67%; right: 6%;" },
    { texto: "ESPERANÇA", classe: "pequena", posicao: "bottom: 6%; left: 25%;" }
]);

fundos.pergunta12 = criarFundo([
    { texto: "PREOCUPAÇÃO", classe: "media inclinada-direita", posicao: "top: 5%; left: 8%;" },
    { texto: "INSÔNIA", classe: "grande vertical", posicao: "top: 13%; right: 3%;" },
    { texto: "ANSIEDADE", classe: "media", posicao: "top: 29%; left: 5%;" },
    { texto: "CANSAÇO", classe: "pequena inclinada-esquerda", posicao: "top: 42%; right: 9%;" },
    { texto: "MEDO", classe: "media inclinada-direita", posicao: "top: 55%; left: 14%;" },
    { texto: "ALÍVIO", classe: "pequena", posicao: "top: 68%; right: 12%;" },
    { texto: "TRANQUILIDADE", classe: "media", posicao: "bottom: 6%; left: 20%;" }
]);

fundos.pergunta13 = criarFundo([
    { texto: "ESCUTA", classe: "media inclinada-esquerda", posicao: "top: 4%; left: 8%;" },
    { texto: "COMPREENSÃO", classe: "grande", posicao: "top: 12%; right: 3%;" },
    { texto: "RESPEITO", classe: "pequena", posicao: "top: 28%; left: 6%;" },
    { texto: "EMPATIA", classe: "media vertical", posicao: "top: 42%; right: 8%;" },
    { texto: "ACOLHIMENTO", classe: "media inclinada-direita", posicao: "top: 55%; left: 11%;" },
    { texto: "CONFIANÇA", classe: "pequena", posicao: "top: 68%; right: 15%;" },
    { texto: "ESPERANÇA", classe: "media", posicao: "bottom: 6%; left: 24%;" }
]);

fundos.pergunta14 = criarFundo([
    { texto: "VERGONHA", classe: "media inclinada-direita", posicao: "top: 4%; left: 7%;" },
    { texto: "NERVOSISMO", classe: "pequena", posicao: "top: 14%; right: 9%;" },
    { texto: "INSEGURANÇA", classe: "grande inclinada-esquerda", posicao: "top: 28%; left: 3%;" },
    { texto: "CORAGEM", classe: "media", posicao: "top: 42%; right: 7%;" },
    { texto: "ANSIEDADE", classe: "pequena vertical", posicao: "top: 55%; left: 15%;" },
    { texto: "ORGULHO", classe: "media inclinada-direita", posicao: "top: 67%; right: 8%;" },
    { texto: "CONFIANÇA", classe: "pequena", posicao: "bottom: 6%; left: 25%;" }
]);

fundos.pergunta15 = criarFundo([
    { texto: "RESPEITO", classe: "grande inclinada-esquerda", posicao: "top: 5%; left: 6%;" },
    { texto: "PERTENCIMENTO", classe: "media", posicao: "top: 13%; right: 4%;" },
    { texto: "SEGURANÇA", classe: "pequena vertical", posicao: "top: 28%; left: 9%;" },
    { texto: "DÚVIDA", classe: "media inclinada-direita", posicao: "top: 41%; right: 8%;" },
    { texto: "CONFIANÇA", classe: "pequena", posicao: "top: 54%; left: 14%;" },
    { texto: "ACOLHIMENTO", classe: "media inclinada-esquerda", posicao: "top: 67%; right: 6%;" },
    { texto: "TRANQUILIDADE", classe: "pequena", posicao: "bottom: 6%; left: 23%;" }
]);

fundos.pergunta16 = criarFundo([
    { texto: "FRUSTRAÇÃO", classe: "media inclinada-direita", posicao: "top: 4%; left: 5%;" },
    { texto: "CULPA", classe: "pequena", posicao: "top: 14%; right: 9%;" },
    { texto: "VERGONHA", classe: "media vertical", posicao: "top: 28%; left: 8%;" },
    { texto: "RAIVA", classe: "grande inclinada-esquerda", posicao: "top: 41%; right: 3%;" },
    { texto: "TRISTEZA", classe: "pequena", posicao: "top: 54%; left: 15%;" },
    { texto: "PERDÃO", classe: "media", posicao: "top: 67%; right: 10%;" },
    { texto: "APRENDIZADO", classe: "pequena inclinada-direita", posicao: "bottom: 6%; left: 21%;" }
]);

fundos.pergunta17 = criarFundo([
    { texto: "EXPECTATIVA", classe: "grande inclinada-direita", posicao: "top: 4%; left: 6%;" },
    { texto: "MEDO", classe: "pequena", posicao: "top: 13%; right: 10%;" },
    { texto: "DÚVIDA", classe: "media vertical", posicao: "top: 28%; left: 7%;" },
    { texto: "ESPERANÇA", classe: "media inclinada-esquerda", posicao: "top: 41%; right: 6%;" },
    { texto: "PRESSÃO", classe: "pequena", posicao: "top: 55%; left: 14%;" },
    { texto: "CONFIANÇA", classe: "media inclinada-direita", posicao: "top: 67%; right: 8%;" },
    { texto: "CORAGEM", classe: "pequena", posicao: "bottom: 6%; left: 25%;" }
]);

fundos.pergunta18 = criarFundo([
    { texto: "SOLIDÃO", classe: "grande inclinada-esquerda", posicao: "top: 5%; left: 5%;" },
    { texto: "TIMIDEZ", classe: "pequena", posicao: "top: 14%; right: 9%;" },
    { texto: "INSEGURANÇA", classe: "media", posicao: "top: 29%; left: 8%;" },
    { texto: "CORAGEM", classe: "media vertical", posicao: "top: 42%; right: 7%;" },
    { texto: "CURIOSIDADE", classe: "pequena", posicao: "top: 55%; left: 15%;" },
    { texto: "PERTENCIMENTO", classe: "media inclinada-direita", posicao: "top: 67%; right: 5%;" },
    { texto: "ESPERANÇA", classe: "pequena", posicao: "bottom: 6%; left: 23%;" }
]);

fundos.pergunta19 = criarFundo([
    { texto: "AUTENTICIDADE", classe: "media inclinada-direita", posicao: "top: 4%; left: 6%;" },
    { texto: "LIBERDADE", classe: "grande", posicao: "top: 13%; right: 4%;" },
    { texto: "MEDO", classe: "pequena vertical", posicao: "top: 29%; left: 9%;" },
    { texto: "ACEITAÇÃO", classe: "media inclinada-esquerda", posicao: "top: 42%; right: 8%;" },
    { texto: "INSEGURANÇA", classe: "pequena", posicao: "top: 55%; left: 14%;" },
    { texto: "CONFIANÇA", classe: "media", posicao: "top: 67%; right: 10%;" },
    { texto: "RESPEITO", classe: "pequena inclinada-direita", posicao: "bottom: 6%; left: 24%;" }
]);

fundos.pergunta20 = criarFundo([
    { texto: "ACOLHIMENTO", classe: "grande inclinada-esquerda", posicao: "top: 4%; left: 5%;" },
    { texto: "CALMA", classe: "pequena", posicao: "top: 13%; right: 9%;" },
    { texto: "CONFIANÇA", classe: "media", posicao: "top: 28%; left: 8%;" },
    { texto: "ESPERANÇA", classe: "media vertical", posicao: "top: 42%; right: 6%;" },
    { texto: "ALÍVIO", classe: "pequena", posicao: "top: 55%; left: 15%;" },
    { texto: "CONFUSÃO", classe: "media inclinada-direita", posicao: "top: 67%; right: 8%;" },
    { texto: "CURIOSIDADE", classe: "pequena inclinada-esquerda", posicao: "bottom: 6%; left: 22%;" }
]);


/* =========================================================
   PERGUNTAS
   ========================================================= */

const perguntas = [

    {
        id: 3,
        tipo: "emocao",
        texto: "Qual é a emoção que você sente sobre o seu futuro acadêmico ou profissional após o ensino médio?",
        emocao: [
            "Ansioso(a)",
            "Preocupado(a)",
            "Inseguro(a)",
            "Esperançoso(a)",
            "Confiante",
            "Animado(a)"
        ]
    },

    {
        id: 10,
        tipo: "escrita",
        texto: "Quando você recebe uma atividade surpresa, qual é o primeiro pensamento que passa pela sua cabeça?"
    },

    {
        id: 2,
        tipo: "opcoes",
        texto: "Você se sente confortável com os seus professores?"
    },

    {
        id: 6,
        tipo: "emocao",
        texto: "Como você avalia a sua sensação de segurança emocional dentro dos grupos de trabalho escolares?",
        emocao: [
            "Ansioso(a)",
            "Inseguro(a)",
            "Tranquilo(a)",
            "Confortável",
            "Apoiado(a)",
            "Desconfortável"
        ]
    },

    {
        id: 14,
        tipo: "escrita",
        texto: "O que passa pela sua cabeça quando você precisa apresentar algo para várias pessoas e está preocupado(a) com a forma como vão avaliar você?"
    },

    {
        id: 5,
        tipo: "opcoes",
        texto: "Você se sente preparado(a) emocionalmente para enfrentar o ENEM ou outras provas importantes?"
    },

    {
        id: 7,
        tipo: "emocao",
        texto: "Como você se sente tendo uma pressão por boas notas, provas e expectativas acadêmicas?",
        emocao: [
            "Ansioso(a)",
            "Pressionado(a)",
            "Preocupado(a)",
            "Sobrecarregado(a)",
            "Motivado(a)",
            "Tranquilo(a)"
        ]
    },

    {
        id: 13,
        tipo: "escrita",
        texto: "Se você pudesse explicar para um professor uma coisa que os alunos sentem, mas quase nunca falam, o que diria?"
    },

    {
        id: 1,
        tipo: "emocao",
        texto: "Como você se sente em relação ao ENEM?",
        emocao: [
            "Ansioso(a)",
            "Com medo",
            "Preocupado(a)",
            "Confiante",
            "Animado(a)",
            "Tranquilo(a)"
        ]
    },

    {
        id: 15,
        tipo: "opcoes",
        texto: "Seus colegas e professores respeitam a forma como você gostaria de ser tratado(a)?"
    },

    {
        id: 12,
        tipo: "escrita",
        texto: "Qual situação escolar mais faz você perder o sono?"
    },

    {
        id: 4,
        tipo: "opcoes",
        texto: "Como você se sente no ambiente escolar? Você se sente bem com as pessoas que estudam com você?"
    },

    {
        id: 9,
        tipo: "emocao",
        texto: "O que você pensa ou sente quando pensa sobre o TCC?",
        emocao: [
            "Ansioso(a)",
            "Preocupado(a)",
            "Inseguro(a)",
            "Pressionado(a)",
            "Confiante",
            "Animado(a)"
        ]
    },

    {
        id: 18,
        tipo: "escrita",
        texto: "O que você faria se chegasse a um lugar e percebesse que as outras pessoas já estão em seus grupos e você ficou sozinho(a)?"
    },

    {
        id: 11,
        tipo: "escrita",
        texto: "O que você faria se tentasse participar de uma conversa, mas percebesse que as pessoas não estão interessadas em ouvir você?"
    },

    {
        id: 19,
        tipo: "opcoes",
        texto: "Você sente que pode ser você mesmo(a) no ambiente escolar sem medo de ser julgado(a)?"
    },

    {
        id: 8,
        tipo: "escrita",
        texto: "Qual cobrança escolar você acha que os adultos não percebem que existe?"
    },

    {
        id: 17,
        tipo: "escrita",
        texto: "Você sente medo de não conseguir alcançar as expectativas que você ou outras pessoas têm sobre seu futuro?"
    },

    {
        id: 16,
        tipo: "escrita",
        texto: "O que você pensa quando percebe que está se cobrando demais por causa de um erro que cometeu?"
    },

    {
        id: 20,
        tipo: "emocao",
        texto: "Depois de participar do projeto, como você se sente em relação a compartilhar o que está sentindo?",
        emocao: [
            "À vontade",
            "Acolhido(a)",
            "Tranquilo(a)",
            "Seguro(a)",
            "Confuso(a)",
            "Ansioso(a)"
        ]
    }
];


/* =========================================================
   OPÇÕES ESPECÍFICAS
   ========================================================= */

const opcoesEspecificas = [
    "Sim",
    "Não",
    "Não tenho certeza",
    "Com certeza",
    "Estou confuso(a)",
    "Não quero pensar nisso"
];


/* =========================================================
   TRANSIÇÃO
   ========================================================= */

function trocarTela(proximaTela) {

    document.body.classList.add("fade-out");

    setTimeout(function() {

        proximaTela();

        document.body.classList.remove("fade-out");
        document.body.classList.add("fade-in");

        setTimeout(function() {
            document.body.classList.remove("fade-in");
        }, 400);

    }, 400);
}


/* =========================================================
   COMEÇAR O JOGO
   ========================================================= */

function comecarJogo() {

    respostas = [];

    respostasPerguntas = {};

    for (let i = 1; i <= 20; i++) {
        respostasPerguntas["pergunta" + i] = "";
        respostasPerguntas["detalhe" + i] = "";
    }

    indiceAtual = 0;

    trocarTela(mostrarProximaPergunta);
}


/* =========================================================
   MOSTRAR PRÓXIMA PERGUNTA
   ========================================================= */

function mostrarProximaPergunta() {

    if (indiceAtual >= perguntas.length) {
        enviarParaPlanilha();
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[indiceAtual];

    let conteudo = "";

    /* -----------------------------------------
       PERGUNTA DE EMOÇÕES
       ----------------------------------------- */

    if (pergunta.tipo === "emocao") {

        conteudo = `
            <p>Escolha uma ou mais emoções que representem como você se sente:</p>

            <div class="emocoes">

                ${pergunta.emocao.map(function(emocao) {
                    return `
                        <button
                            type="button"
                            onclick="selecionarEmocao(this)"
                        >
                            ${emocao}
                        </button>
                    `;
                }).join("")}

            </div>

            <p>Quer detalhar como se sente? Escreva aqui:</p>

            <textarea
                id="detalhe"
                placeholder="Escreva aqui..."
            ></textarea>
        `;
    }


    /* -----------------------------------------
       PERGUNTA COM SIM / NÃO
       ----------------------------------------- */

    else if (pergunta.tipo === "opcoes") {

        conteudo = `
            <div class="emocoes">

                ${opcoesEspecificas.map(function(opcao) {
                    return `
                        <button
                            type="button"
                            onclick="selecionarOpcao(this)"
                        >
                            ${opcao}
                        </button>
                    `;
                }).join("")}

            </div>
        `;
    }


    /* -----------------------------------------
       PERGUNTA DE ESCREVER
       ----------------------------------------- */

    else if (pergunta.tipo === "escrita") {

        conteudo = `
            <p>Escreva o que você pensa ou sente:</p>

            <textarea
                id="respostaEscrita"
                placeholder="Escreva aqui..."
            ></textarea>
        `;
    }


    document.body.innerHTML = `
        ${fundos["pergunta" + pergunta.id] || ""}

        <div class="tela">

            <h1>${pergunta.texto}</h1>

            ${conteudo}

            <br><br>

            <button
                type="button"
                onclick="salvarPergunta()"
            >
                ${indiceAtual === perguntas.length - 1 ? "Finalizar" : "Continuar"}
            </button>

        </div>
    `;
}


/* =========================================================
   SELECIONAR EMOÇÃO
   ========================================================= */

function selecionarEmocao(botao) {
    botao.classList.toggle("selecionada");
}


/* =========================================================
   SELECIONAR OPÇÃO ESPECÍFICA
   ========================================================= */

function selecionarOpcao(botao) {

    const botoes = document.querySelectorAll(".emocoes button");

    botoes.forEach(function(item) {
        item.classList.remove("selecionada");
    });

    botao.classList.add("selecionada");
}


/* =========================================================
   SALVAR PERGUNTA ATUAL
   ========================================================= */

function salvarPergunta() {

    const pergunta = perguntas[indiceAtual];

    let resposta = "";
    let detalhe = "";


    /* -----------------------------------------
       EMOÇÕES
       ----------------------------------------- */

    if (pergunta.tipo === "emocao") {

        const botoesSelecionados =
            document.querySelectorAll(".emocoes button.selecionada");

        let emocoesSelecionadas = [];

        botoesSelecionados.forEach(function(botao) {
            emocoesSelecionadas.push(botao.innerText.trim());
        });

        /* É obrigatório escolher pelo menos uma emoção */

        if (emocoesSelecionadas.length === 0) {
            return;
        }

        resposta = emocoesSelecionadas.join(", ");

        const campoDetalhe =
            document.getElementById("detalhe");

        if (campoDetalhe) {
            detalhe = campoDetalhe.value;
        }

        /* Guarda as emoções para o resultado final */

        respostas.push(...emocoesSelecionadas);
    }


    /* -----------------------------------------
       OPÇÕES ESPECÍFICAS
       ----------------------------------------- */

    else if (pergunta.tipo === "opcoes") {

        const botaoSelecionado =
            document.querySelector(".emocoes button.selecionada");

        if (!botaoSelecionado) {
            return;
        }

        resposta = botaoSelecionado.innerText.trim();
    }


    /* -----------------------------------------
       ESCRITA
       ----------------------------------------- */

    else if (pergunta.tipo === "escrita") {

        const campo =
            document.getElementById("respostaEscrita");

        if (!campo) {
            return;
        }

        resposta = campo.value.trim();

        /* A pergunta de escrita precisa ter resposta */

        if (resposta === "") {
            return;
        }
    }


    /* -----------------------------------------
       SALVAR NA PLANILHA
       ----------------------------------------- */

    respostasPerguntas["pergunta" + pergunta.id] = resposta;
    respostasPerguntas["detalhe" + pergunta.id] = detalhe;


    /* -----------------------------------------
       AVANÇAR
       ----------------------------------------- */

    indiceAtual++;

    if (indiceAtual >= perguntas.length) {

        enviarParaPlanilha();

        trocarTela(mostrarResultado);

    } else {

        trocarTela(mostrarProximaPergunta);
    }
}


/* =========================================================
   ENVIAR PARA A PLANILHA
   ========================================================= */

function enviarParaPlanilha() {

    fetch(URL_PLANILHA, {
        method: "POST",
        body: JSON.stringify(respostasPerguntas)
    })
    .catch(function() {});
}


/* =========================================================
   MOSTRAR RESULTADO
   ========================================================= */

function mostrarResultado() {

    let contagem = {};

    respostas.forEach(function(emocao) {

        if (contagem[emocao]) {
            contagem[emocao]++;
        } else {
            contagem[emocao] = 1;
        }

    });


    let resultado = Object.entries(contagem).sort(function(a, b) {
        return b[1] - a[1];
    });


    let topTres = resultado.slice(0, 3);

    let estatisticasHTML = "";


    if (topTres.length === 0) {

        estatisticasHTML = `
            <p>Obrigado por participar do projeto.</p>
        `;

    } else {

        let maiorQuantidade = topTres[0][1];

        topTres.forEach(function(item) {

            let emocao = item[0];
            let quantidade = item[1];

            let porcentagem =
                (quantidade / maiorQuantidade) * 100;

            estatisticasHTML += `
                <div class="estatistica-item">

                    <div class="estatistica-titulo">
                        <span>${emocao}</span>
                        <span>${quantidade} vez(es)</span>
                    </div>

                    <div class="barra-fundo">

                        <div
                            class="barra"
                            style="width: ${porcentagem}%"
                        ></div>

                    </div>

                </div>
            `;
        });
    }


    document.body.innerHTML = `
        <div class="tela">

            <h1>Suas respostas</h1>

            <p>
                Estas foram as três emoções que apareceram
                com mais frequência nas suas respostas:
            </p>

            <div class="estatistica">
                ${estatisticasHTML}
            </div>

        </div>
    `;
}
