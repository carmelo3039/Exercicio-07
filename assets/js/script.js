// ─────────────────────────────────────────────
  //  Exercício 08 — Última letra via .length
  // ─────────────────────────────────────────────

  // const randomWord = "JavaScript";
  // console.log(randomWord[0]); // ← comentado conforme enunciado

  /* ── Lógica principal ── */
  const getLastLetter = (word) => word[word.length - 1];

  const formatIndex = (word) =>
    `word[ ${word.length} - 1 ] = word[${word.length - 1}]`;

  /* ── Renderiza resultado na tela ── */
  const renderResult = (word) => {
    const lastLetter = getLastLetter(word);

    document.getElementById("resultChar").textContent = lastLetter;
    document.getElementById("resultMeta").textContent =
      `"${word}" → índice ${word.length - 1} de ${word.length}`;

    renderConsole(word, lastLetter);
  };

  /* ── Simula saída de console ── */
  const renderConsole = (word, letter) => {
    const box = document.getElementById("consoleBox");
    const timestamp = new Date().toLocaleTimeString("pt-BR");

    box.innerHTML = `
      <div class="log-line">
        <span class="arrow">▶</span>
        <span class="log-text">const randomWord = <span style="color:#f6a623">"${word}"</span>;</span>
      </div>
      <div class="log-line log-comment">
        <span class="arrow"> </span>
        <span>// console.log(randomWord[0]); ← comentado</span>
      </div>
      <div class="log-line">
        <span class="arrow">▶</span>
        <span class="log-text">console.log( randomWord[ randomWord.length - 1 ] );</span>
      </div>
      <div class="log-line">
        <span class="arrow">←</span>
        <span class="log-out">"${letter}"</span>
        <span class="log-comment" style="margin-left:8px">// ${formatIndex(word)} — ${timestamp}</span>
      </div>
    `;
  };

  /* ── Evento: botão ── */
  const handleRun = () => {
    const input = document.getElementById("wordInput");
    const word = input.value.trim();

    if (!word) {
      input.focus();
      return;
    }

    renderResult(word);
  };

  /* ── Evento: Enter no input ── */
  const handleKeydown = (e) => {
    if (e.key === "Enter") handleRun();
  };

  /* ── Inicialização ── */
  const init = () => {
    document.getElementById("runBtn").addEventListener("click", handleRun);
    document.getElementById("wordInput").addEventListener("keydown", handleKeydown);

    // Executa com a palavra padrão do exercício
    document.getElementById("wordInput").value = "JavaScript";
    renderResult("JavaScript");
  };

  init();