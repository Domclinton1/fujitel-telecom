document.addEventListener("DOMContentLoaded", () => {
  // 1. Rolagem Suave para Links de Navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // 2. Manipulação do Formulário de Contato (Simulação de Envio)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio padrão do formulário

      const submitButton = contactForm.querySelector(".final-submit");
      const originalText = submitButton.textContent;

      // Simulação de carregamento/processamento
      submitButton.textContent = "Enviando...";
      submitButton.disabled = true;

      // Simulação de envio bem-sucedido após 2 segundos
      setTimeout(() => {
        // Aqui, você integraria a lógica real de envio (e.g., fetch API para um backend/CRM)

        // Feedback visual para conversão
        submitButton.style.backgroundColor = "var(--fujitel-success)";
        submitButton.textContent = "✅ Consultoria Solicitada!";

        // Opcional: Limpar o formulário
        contactForm.reset();

        // Resetar o botão após um tempo para permitir novos envios ou recarregar a página
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.style.backgroundColor = "var(--fujitel-blue)";
          submitButton.disabled = false;
        }, 5000);

        // Em um ambiente real, você redirecionaria para uma "Página de Obrigado" para rastreamento de conversão!
      }, 2000);
    });
  }

  // 3. Efeito de fixar a navegação (melhoria de UX)
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  // Adicione a regra CSS: header.scrolled { padding: 5px 0; } para um efeito de "encolhimento"
});

// ... (Seu código JavaScript original aqui: Rolagem suave, Formulário, etc.)

// 4. Efeito de Partículas (Network Grid)
window.onload = function () {
  // Verifica se a biblioteca particlesJS foi carregada antes de tentar usar
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 60, // Quantidade de pontos na tela
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#007bff", // Pontos na cor azul da Fujitel
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.6,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 180, // Distância máxima para as linhas aparecerem
          color: "#6c757d", // Linhas na cor cinza da Fujitel
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5, // Velocidade de movimento (sutil)
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab", // Efeito de agarrar as partículas ao passar o mouse
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            line_linked: {
              opacity: 1, // Linhas ficam mais fortes ao passar o mouse
            },
          },
        },
      },
      retina_detect: true,
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  // ... (Seu código original aqui: Rolagem suave, Formulário, Efeito de Partículas Hero)

  // 5. Efeito de Código Matrix (Função Reutilizável)
  function initializeMatrixEffect(canvasId, lightMode = true) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
    });

    // Configurações do Matrix
    const str = "0101010101010101";
    const matrixChars = str.split("");
    const fontSize = 17;
    let columns = Math.floor(width / fontSize);
    let drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 2;
    }

    // Define as cores baseadas no modo (claro/escuro)
    const primaryColor = lightMode ? "#0056b3" : "#0056b3"; // Azul Escuro no claro, Azul Claro no escuro
    const secondaryColor = lightMode ? "#141111" : "#141111"; // Cinza Escuro no claro, Cinza Claro no escuro
    const trailColor = lightMode ? "#141414" : "#141414"; // Cor do rastro (sombra leve do fundo)

    function drawMatrix() {
      // Desenha o rastro (fundo levemente transparente)
      ctx.fillStyle = trailColor;
      ctx.fillRect(0, 0, width, height);

      ctx.font = fontSize + "px arial";

      for (let i = 0; i < drops.length; i++) {
        // Alterna as cores
        if (i % 2 === 0) {
          ctx.fillStyle = primaryColor;
        } else {
          ctx.fillStyle = secondaryColor;
        }

        const text =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(drawMatrix, 50);
  }

  // Inicializa o Matrix na seção Soluções (Fundo Claro = lightMode: true)
  initializeMatrixEffect("matrix-canvas", true);

  // Inicializa o Matrix na seção Diferenciais (Fundo Escuro = lightMode: false)
  initializeMatrixEffect("matrix-canvas-diferenciais", false);
});

document.addEventListener("DOMContentLoaded", () => {
  // ... (Seu código original aqui: Rolagem suave, Formulário, Efeito de Partículas Hero, Matrix)

  // 6. Funcionalidade de Acordeão FAQ
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Verifica se o item clicado já está ativo
      const isActive = question.classList.contains("active");

      // Fecha todos os itens (opcional, para abrir apenas um por vez)
      faqQuestions.forEach((q) => {
        q.classList.remove("active");
        q.nextElementSibling.style.maxHeight = null;
        q.nextElementSibling.style.padding = "0 20px"; // Reseta o padding
      });

      // Se não estava ativo, abre o item clicado
      if (!isActive) {
        question.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + 30 + "px"; // +30 para compensar o padding
        answer.style.padding = "0 20px 15px 20px"; // Adiciona padding inferior ao abrir
      }
    });
  });
});
