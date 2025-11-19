import { summary, title } from "framer-motion/client";

export const projectExamples = [
  {
    id: 1,

    creator: {
      id: 1,
      name: "Maria Oliveira",
      role: "student",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      profileUrl: "/profile/maria",
      isFollowing: false,
    },

    teacher: {
      name: "Prof. João Silva",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      profileUrl: "/profile/prof-joao",
    },

    title: "Robô Seguidor de Linha",

    date: "04-11-2025",

    area: "Tecnologia",

    images: [
      "https://inatel.br/robotica/images/fotos/robotbulls/seguidor.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHJhoMJcOVjYX5euFFs1f09tlnNyJIGOt7GSpA-mlj3jeLh6rkyxFbNtrQJsSDOZ2xzg&usqp=CAU",
    ],

    description: {
      text: "Desenvolvemos um robô autônomo capaz de seguir trajetórias previamente definidas através da detecção de linhas no solo, utilizando sensores infravermelhos (IR) e um microcontrolador Arduino. O projeto demonstra, de forma prática, princípios de eletrônica, programação e automação.",
      topics: ["Robótica", "Arduino", "Sensores", "Automação", "Eletrônica"],
    },

    post: {
      summary:
        "Apresentamos nosso robô seguidor de linha desenvolvido com Arduino e sensores IR! 🦾 O projeto combina eletrônica e programação para criar um sistema capaz de detectar e seguir percursos com precisão. Uma ótima introdução ao mundo da robótica autônoma.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGZWPJhjOMrxU6PWSvPkNESNOlDhhnZUhRA&s",
    },

    diary: {
      summary:
        "Nosso projeto consiste em desenvolver um robô seguidor de linha que utiliza sensores infravermelhos para identificar o caminho e motores controlados por Arduino para ajustar sua trajetória automaticamente. Durante o processo, aprendemos sobre controle lógico, sensores analógicos e montagem de circuitos.",

      entries: [
        {
          title: "Início do Projeto",
          content:
            "Definimos a proposta de construir um robô seguidor de linha com Arduino, com o objetivo de aplicar conceitos de robótica e controle automatizado. Pesquisamos componentes necessários e planejamos a estrutura do robô.",
          date: "10/08/2025",
        },
        {
          title: "Montagem do Circuito",
          content:
            "Realizamos a montagem dos sensores IR e dos motores DC, conectando tudo à placa Arduino Uno. Testamos individualmente cada componente para garantir o funcionamento adequado antes da integração completa.",
          date: "15/08/2025",
        },
        {
          title: "Programação e Testes",
          content:
            "Escrevemos o código responsável por interpretar os sinais dos sensores e controlar os motores conforme a posição da linha. Durante os testes, ajustamos o tempo de resposta e calibramos os sensores para melhorar a precisão.",
          date: "22/08/2025",
        },
        {
          title: "Ajustes Finais e Demonstração",
          content:
            "Após diversos testes, otimizamos a estrutura do robô e o código para reduzir falhas em curvas mais acentuadas. O robô foi apresentado em uma feira escolar, demonstrando sua capacidade de seguir o percurso completo sem intervenção humana.",
          date: "30/08/2025",
        },
      ],

      fullUrl: "/project/1",
    },

    fullProject: {
      title: "Robô Seguidor de Linha com Arduíno e Sensores IR",
      content: `
Nosso projeto tem como objetivo desenvolver um robô autônomo capaz de seguir linhas pretas traçadas sobre uma superfície clara. Para isso, utilizamos sensores infravermelhos (IR) que detectam o contraste entre as cores e enviam sinais para um microcontrolador Arduino Uno.

O código desenvolvido interpreta as leituras dos sensores e ajusta a velocidade dos motores de acordo com a posição da linha, permitindo que o robô corrija sua rota em tempo real. A estrutura do robô foi montada com uma base acrílica, dois motores DC, uma ponte H L298N e um módulo de sensores com três emissores e receptores IR.

Durante o desenvolvimento, enfrentamos desafios como interferência luminosa e calibração dos sensores. Através de testes práticos, conseguimos melhorar a precisão do sistema e reduzir o tempo de resposta. O resultado foi um robô estável e funcional, capaz de seguir trajetórias complexas.

O projeto proporcionou uma excelente oportunidade de aprendizado sobre eletrônica, lógica de controle, sensores analógicos e programação embarcada — sendo uma base sólida para projetos futuros em robótica e automação.
    `,
    },

    likedBy: [
      {
        name: "Carlos Mendes",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        following: false,
      },
      {
        name: "Prof. João Silva",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        following: true,
      },
      {
        name: "Prof. Isabelle Santos",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
        following: false,
      },
      {
        name: "Lucas Pereira",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        following: false,
      },
    ],

    comments: [
      {
        name: "Prof. João Silva",
        text: "Excelente trabalho, Maria! Gostei muito da lógica aplicada no código.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Carlos Mendes",
        text: "Parabéns, ficou muito bom! Vocês pensaram em implementar curvas mais fechadas?",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      },
    ],
  },

  {
    id: 2,

    creator: {
      id: 2,
      name: "Lucas Pereira",
      role: "student",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      profileUrl: "/profile/lucas",
      isFollowing: false,
    },

    teacher: {
      name: "Prof. Isabelle Santos",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      profileUrl: "/profile/isabelle",
    },

    title: "Pintura Digital de Emoções",

    date: "28-10-2025",

    area: "Artes Visuais",

    images: [
      "https://images.joseartgallery.com/196304/conversions/interior-painting-whirlwind-of-emotions-thumb1920.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRV3xp9Dej1lHd3_bx2abm1ylTvqH2TFAYYQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunidUIN26XtdolF9_V3Nsin08iJM2IqVkIIY-bM_rT0go3htLgpFoS2lMmmGNlNHTJVw&usqp=CAU",
    ],

    description: {
      text: "Exploramos a expressão artística digital como forma de representar emoções humanas através de cores, formas e movimento. O projeto busca unir arte e tecnologia, utilizando ferramentas digitais para traduzir sentimentos em composições visuais únicas.",
      topics: [
        "Criatividade",
        "Arte",
        "Design",
        "Arte Digital",
        "Design Emocional",
        "Expressão Artística",
      ],
    },

    post: {
      summary:
        "‘Pintura Digital de Emoções’ é um projeto que transforma sentimentos em arte visual. 🎨 Através de cores e traços digitais, buscamos representar emoções humanas como alegria, tristeza, medo e esperança, conectando arte e sensibilidade de forma inovadora.",
      image:
        "https://images.joseartgallery.com/196304/conversions/interior-painting-whirlwind-of-emotions-thumb1920.jpg",
    },

    diary: {
      summary:
        "O projeto 'Pintura Digital de Emoções' explora como diferentes emoções humanas podem ser traduzidas em representações visuais. Utilizamos ferramentas digitais para criar pinturas que expressam sentimentos específicos, analisando a influência das cores e formas na percepção emocional.",

      entries: [
        {
          title: "Concepção da Ideia",
          content:
            "Iniciamos o projeto com discussões sobre como representar emoções por meio da arte digital. Fizemos um brainstorm sobre quais emoções seriam trabalhadas e como poderiam ser expressas visualmente utilizando cor, luz e textura.",
          date: "05/09/2025",
        },
        {
          title: "Pesquisa sobre Cores e Psicologia Emocional",
          content:
            "Realizamos um estudo sobre a psicologia das cores e como diferentes tonalidades podem evocar sensações distintas. Esse levantamento teórico foi essencial para definir a paleta emocional de cada pintura.",
          date: "09/09/2025",
        },
        {
          title: "Criação das Pinturas Digitais",
          content:
            "Com base nas emoções selecionadas, começamos a produzir as obras digitais em softwares de ilustração e pintura. Cada quadro foi pensado para refletir uma emoção — por exemplo, alegria em tons quentes e vibrantes; tristeza em cores frias e suaves.",
          date: "15/09/2025",
        },
        {
          title: "Exposição Virtual",
          content:
            "Montamos uma galeria digital com todas as obras, acompanhadas de descrições das emoções que inspiraram cada uma. O público pôde navegar pela exposição e deixar comentários sobre suas próprias interpretações das cores e formas.",
          date: "22/09/2025",
        },
        {
          title: "Reflexão e Conclusão",
          content:
            "Encerramos o projeto com uma reflexão coletiva sobre o processo criativo e o impacto emocional das pinturas. Concluímos que a arte digital pode ser uma poderosa ferramenta de autoconhecimento e comunicação não verbal.",
          date: "30/09/2025",
        },
      ],

      fullUrl: "/project/2",
    },

    fullProject: {
      title: "Pintura Digital de Emoções",
      content: `
O projeto “Pintura Digital de Emoções” teve como propósito investigar como sentimentos humanos podem ser representados visualmente por meio da arte digital. A proposta surgiu do desejo de unir criatividade e tecnologia, transformando emoções abstratas em imagens concretas.

Durante o processo, estudamos a psicologia das cores e o impacto que cada tonalidade exerce sobre a percepção emocional. Essa pesquisa guiou a criação de uma série de pinturas digitais, cada uma inspirada em uma emoção específica — como alegria, tristeza, raiva, serenidade e amor.

Utilizamos softwares de ilustração e pintura digital para dar forma a essas ideias, experimentando diferentes pincéis, texturas e contrastes. A ausência de linhas rígidas e o uso livre das cores permitiram que o aspecto emocional predominasse sobre o técnico, tornando cada obra uma tradução sensorial do sentimento representado.

O projeto culminou em uma exposição virtual, onde visitantes puderam interagir com as obras e compartilhar suas próprias interpretações. Essa troca demonstrou que, mesmo no ambiente digital, a arte mantém seu poder de conectar pessoas e despertar empatia.

Mais do que uma experiência estética, a Pintura Digital de Emoções foi uma jornada de autoconhecimento e expressão sensível através da tecnologia. O resultado reflete como a arte, mesmo mediada por telas, continua sendo uma ponte entre o interior humano e o mundo exterior.
    `,
    },

    likedBy: [
      {
        name: "Carlos Mendes",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        following: false,
      },
      {
        name: "Prof. João Silva",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        following: true,
      },
      {
        name: "Prof. Isabelle Santos",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
        following: false,
      },
    ],

    comments: [
      {
        name: "Prof. Isabelle Santos",
        text: "Adorei a proposta! A harmonia das cores reflete bem as emoções escolhidas.",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      },
      {
        name: "Joana Costa",
        text: "Inspirador! As pinceladas digitais ficaram incríveis.",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      },
      {
        name: "Ricardo Lima",
        text: "Vocês poderiam expor isso na feira cultural da escola!",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
      },
      {
        name: "Lucas Pereira",
        text: "Obrigado a todos pelo apoio! 😊",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    ],
  },
];
