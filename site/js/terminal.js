/**
 * Terminal - Interactive Claude Code terminal emulator.
 * Supports slash commands with animated responses.
 */

class Terminal {
  constructor() {
    this.history = [];
    this.historyIndex = -1;
    this.isAnimating = false;
    this.collapsed = false;
    this.resizing = false;
    this.panel = null;
    this.output = null;
    this.input = null;
  }

  init() {
    this.panel = document.getElementById('terminal-panel');
    this.output = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    if (!this.panel || !this.output || !this.input) return;

    this._setupInput();
    this._setupHeader();
    this._setupResize();
    this._showWelcome();
  }

  _setupInput() {
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = this.input.value.trim();
        if (cmd && !this.isAnimating) {
          this._execute(cmd);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this._navigateHistory(-1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this._navigateHistory(1);
      }
    });
    // Prevent global keyboard nav when terminal is focused
    this.input.addEventListener('keydown', (e) => {
      e.stopPropagation();
    });
  }

  _setupHeader() {
    const header = this.panel.querySelector('.terminal-header');
    const chevron = this.panel.querySelector('.terminal-header__chevron');

    const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

    // On mobile, header/chevron taps close the terminal instead of collapsing
    const handleToggle = () => {
      if (isMobile()) {
        this._closeMobile();
      } else {
        this._toggleCollapse();
      }
    };

    if (header) {
      header.addEventListener('click', (e) => {
        if (e.target.closest('.terminal-header__btn')) return;
        handleToggle();
      });
    }
    if (chevron) {
      chevron.addEventListener('click', (e) => {
        e.stopPropagation();
        handleToggle();
      });
    }
  }

  _closeMobile() {
    this.panel.classList.remove('mobile-open');
    this.panel.style.display = 'none';
  }

  _setupResize() {
    const handle = this.panel.querySelector('.terminal-resize');
    if (!handle) return;

    const mainLayout = this.panel.closest('.main-layout');
    if (!mainLayout) return;

    let startX, startWidth;

    const onMouseMove = (e) => {
      if (!this.resizing) return;
      const delta = startX - e.clientX;
      const maxWidth = mainLayout.offsetWidth - 300; // leave room for sidebar + content
      const newWidth = Math.max(200, Math.min(startWidth + delta, maxWidth));
      this.panel.style.width = newWidth + 'px';
    };

    const onMouseUp = () => {
      this.resizing = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    handle.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.resizing = true;
      startX = e.clientX;
      startWidth = this.panel.offsetWidth;
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }

  _toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.panel.classList.toggle('collapsed', this.collapsed);
    if (!this.collapsed) {
      this.input.focus();
    }
  }

  _showWelcome() {
    this._appendHtml(`
      <div class="term-welcome-banner">
        <div class="term-brand">
          <div class="term-brand__rule"></div>
          <pre class="term-brand__ascii"><span class="term-brand__char-bright">█▀▀ ▀▄▀ █▀█ █   █▀█ █▀█ █▀▀</span>
<span class="term-brand__char-bright">█▀▀  █  █▀▀ █   █ █ █▀▄ █▀▀</span>
<span class="term-brand__char-bright">▀▀▀ ▀ ▀ ▀   ▀▀▀ ▀▀▀ ▀ ▀ ▀▀▀</span></pre>
          <pre class="term-brand__ascii term-brand__ascii--sub"><span class="term-brand__char-accent">█▀▀ █   █▀█ █ █ █▀▄ █▀▀</span>
<span class="term-brand__char-accent">█   █   █▀█ █ █ █ █ █▀▀</span>
<span class="term-brand__char-accent">▀▀▀ ▀▀▀ ▀ ▀ ▀▀▀ ▀▀▀ ▀▀▀</span>
<span class="term-brand__char-dim">█▀▀ █▀█ █▀▄ █▀▀</span>
<span class="term-brand__char-dim">█   █ █ █ █ █▀▀</span>
<span class="term-brand__char-dim">▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀</span></pre>
          <div class="term-brand__rule"></div>
        </div>

        <div class="term-banner-tagline">
          Build legal automation. Every file is a feature.<br>
          Every folder is a workflow.
        </div>

        <div class="term-banner-divider"></div>

        <div class="term-banner-section">
          <div class="term-banner-section__title">Quick Start</div>
          <div class="term-banner-cmd-row">
            <span class="term-text--accent">/help</span>
            <span class="term-text--dim">- list all commands</span>
          </div>
          <div class="term-banner-cmd-row">
            <span class="term-text--accent">/init</span>
            <span class="term-text--dim">- generate a legal CLAUDE.md</span>
          </div>
          <div class="term-banner-cmd-row">
            <span class="term-text--accent">/doctor</span>
            <span class="term-text--dim">- check MCP connections</span>
          </div>
          <div class="term-banner-cmd-row">
            <span class="term-text--accent">/diff</span>
            <span class="term-text--dim">- see a contract clause edit</span>
          </div>
        </div>

        <div class="term-banner-divider"></div>

        <div class="term-banner-section">
          <div class="term-banner-section__title">How to Explore</div>
          <div class="term-banner-step">
            <span class="term-banner-step__num">1</span>
            <span>Browse the file tree on the left</span>
          </div>
          <div class="term-banner-step">
            <span class="term-banner-step__num">2</span>
            <span>Click any file to learn what it does</span>
          </div>
          <div class="term-banner-step">
            <span class="term-banner-step__num">3</span>
            <span>Try commands here to see them in action</span>
          </div>
        </div>

        <div class="term-banner-divider"></div>

        <div class="term-banner-info">
          <div class="term-banner-row">
            <span class="term-banner-key">version</span>
            <span class="term-banner-val">1.0.42</span>
          </div>
          <div class="term-banner-row">
            <span class="term-banner-key">model</span>
            <span class="term-banner-val term-text--accent">claude-opus-4-6</span>
          </div>
          <div class="term-banner-row">
            <span class="term-banner-key">project</span>
            <span class="term-banner-val">legal-ops-project</span>
          </div>
        </div>
      </div>
    `);
  }

  _execute(rawCmd) {
    // Store in history
    this.history.push(rawCmd);
    this.historyIndex = this.history.length;

    // Echo the command
    this._appendHtml(`
      <div class="term-cmd">
        <span class="term-prompt-echo">claude &gt;</span> ${this._esc(rawCmd)}
      </div>
    `);

    this.input.value = '';

    // Parse command
    const cmd = rawCmd.startsWith('/') ? rawCmd.split(/\s+/)[0].toLowerCase() : rawCmd.toLowerCase();

    // Route to handler
    const handlers = {
      '/help': () => this._cmdHelp(),
      '/init': () => this._cmdInit(),
      '/doctor': () => this._cmdDoctor(),
      '/cost': () => this._cmdCost(),
      '/compact': () => this._cmdCompact(),
      '/model': () => this._cmdModel(),
      '/diff': () => this._cmdDiff(),
      '/clear': () => this._clearOutput(),
      '/status': () => this._cmdStatus(),
      '/config': () => this._cmdConfig(),
      '/memory': () => this._cmdMemory(),
    };

    if (handlers[cmd]) {
      handlers[cmd]();
    } else {
      this._appendHtml(`
        <div class="term-block">
          <div class="term-text--error">Unknown command: ${this._esc(rawCmd)}</div>
          <div class="term-text--dim">Type <span class="term-text--accent">/help</span> to see available commands.</div>
        </div>
      `);
    }

    this._scrollToBottom();
  }

  _navigateHistory(direction) {
    if (this.history.length === 0) return;
    this.historyIndex = Math.max(0, Math.min(this.historyIndex + direction, this.history.length));
    this.input.value = this.historyIndex < this.history.length ? this.history[this.historyIndex] : '';
  }

  // ── Command Handlers ──────────────────────────────────────

  _cmdHelp() {
    const cmds = [
      ['/help', 'Show this command reference'],
      ['/init', 'Initialize a CLAUDE.md project file'],
      ['/doctor', 'Check installation health'],
      ['/cost', 'Show session token usage & cost'],
      ['/compact', 'Compress conversation context'],
      ['/model', 'View available models'],
      ['/diff', 'Show uncommitted changes'],
      ['/status', 'Version, model, and account info'],
      ['/config', 'Open settings explorer'],
      ['/memory', 'View auto-memory entries'],
      ['/clear', 'Clear terminal output'],
    ];

    let rows = '';
    for (const [cmd, desc] of cmds) {
      rows += `<div class="term-row"><span class="term-col term-col--cmd">${cmd}</span><span class="term-col term-col--desc">${desc}</span></div>`;
    }

    this._appendHtml(`
      <div class="term-block">
        <div class="term-heading">Available Commands</div>
        <div class="term-table">${rows}</div>
        <hr class="term-hr">
        <div class="term-text--dim">Tip: Use arrow keys to navigate command history.</div>
      </div>
    `);
  }

  _cmdInit() {
    this._animateSequence([
      { html: '<div class="term-text--dim">Scanning project structure...</div>', delay: 400 },
      { html: '<div class="term-text">Found: /matters/, /templates/, .claude/, .mcp.json</div>', delay: 600 },
      { html: '<div class="term-text--dim">Detecting legal project conventions...</div>', delay: 500 },
      { html: '<hr class="term-hr">', delay: 200 },
      { html: `<div class="term-heading">Created CLAUDE.md</div>`, delay: 300 },
      { html: `<div class="term-text--dim">  # Project: legal-ops-project</div>`, delay: 100 },
      { html: `<div class="term-text--dim">  </div>`, delay: 50 },
      { html: `<div class="term-text--dim">  ## Jurisdiction</div>`, delay: 100 },
      { html: `<div class="term-text--dim">  - Default: New York</div>`, delay: 80 },
      { html: `<div class="term-text--dim">  - Citation: Bluebook 21st Edition</div>`, delay: 80 },
      { html: `<div class="term-text--dim">  </div>`, delay: 50 },
      { html: `<div class="term-text--dim">  ## Confidentiality</div>`, delay: 100 },
      { html: `<div class="term-text--dim">  - Never include client names in outputs</div>`, delay: 80 },
      { html: `<div class="term-text--dim">  - Use placeholders: [Client], [Opposing Party]</div>`, delay: 80 },
      { html: `<div class="term-text--dim">  - Mark drafts: ATTORNEY WORK PRODUCT</div>`, delay: 80 },
      { html: '<hr class="term-hr">', delay: 200 },
      { html: '<div class="term-text--success">CLAUDE.md created. Claude will apply firm standards to every task.</div>', delay: 0 },
    ]);
  }

  _cmdDoctor() {
    const checks = [
      ['Authentication', 'authenticated as attorney@firm.com', true, 500],
      ['Model access', 'claude-opus-4-6 available', true, 400],
      ['Git repository', 'clean working tree', true, 350],
      ['Node.js', 'v22.1.0', true, 300],
      ['MCP servers', '3 connected (filesystem, postgres, web-search)', true, 450],
      ['Permissions', 'settings.json loaded (scoped to /matters/)', true, 300],
      ['CLAUDE.md', 'found — jurisdiction: NY, citation: Bluebook', true, 350],
    ];

    this._animateSequence([
      { html: '<div class="term-heading">Running diagnostics...</div>', delay: 400 },
      ...checks.map(([label, detail, pass, delay]) => ({
        html: `<div class="term-check">
          <span class="term-check__icon term-check__icon--${pass ? 'pass' : 'fail'}">${pass ? '\u2713' : '\u2717'}</span>
          <span class="term-check__label">${label}</span>
          <span class="term-check__detail">${detail}</span>
        </div>`,
        delay,
      })),
      { html: '<hr class="term-hr">', delay: 200 },
      { html: '<div class="term-text--success">All checks passed. Claude Code is ready.</div>', delay: 0 },
    ]);
  }

  _cmdCost() {
    this._appendHtml(`
      <div class="term-block">
        <div class="term-heading">Session Usage</div>
        <div class="term-stat"><span class="term-stat__key">Input tokens</span><span class="term-stat__val">42,817</span></div>
        <div class="term-stat"><span class="term-stat__key">Output tokens</span><span class="term-stat__val">18,243</span></div>
        <div class="term-stat"><span class="term-stat__key">Cache read</span><span class="term-stat__val">156,092</span></div>
        <div class="term-stat"><span class="term-stat__key">Cache write</span><span class="term-stat__val">28,451</span></div>
        <hr class="term-hr">
        <div class="term-stat"><span class="term-stat__key">Total cost</span><span class="term-stat__val term-stat__val--accent">$0.847</span></div>
        <div class="term-stat"><span class="term-stat__key">Messages</span><span class="term-stat__val">23</span></div>
        <div class="term-stat"><span class="term-stat__key">Duration</span><span class="term-stat__val">14m 32s</span></div>
      </div>
    `);
  }

  _cmdCompact() {
    const block = document.createElement('div');
    block.className = 'term-block';
    block.innerHTML = `
      <div class="term-text--dim">Compressing conversation context...</div>
      <div class="term-progress">
        <div class="term-progress__bar"><div class="term-progress__fill" id="compact-fill"></div></div>
        <span class="term-progress__label" id="compact-pct">0%</span>
      </div>
    `;
    this.output.appendChild(block);
    this._scrollToBottom();

    const fill = document.getElementById('compact-fill');
    const pct = document.getElementById('compact-pct');
    let progress = 0;
    this.isAnimating = true;

    const step = () => {
      progress += 2 + Math.random() * 6;
      if (progress >= 100) {
        progress = 100;
        fill.style.width = '100%';
        pct.textContent = '100%';

        setTimeout(() => {
          block.innerHTML += `
            <hr class="term-hr">
            <div class="term-stat"><span class="term-stat__key">Before</span><span class="term-stat__val">187,204 tokens</span></div>
            <div class="term-stat"><span class="term-stat__key">After</span><span class="term-stat__val term-stat__val--accent">24,817 tokens</span></div>
            <div class="term-stat"><span class="term-stat__key">Reduction</span><span class="term-stat__val term-stat__val--accent">86.7%</span></div>
            <div class="term-text--success" style="margin-top:6px">Context compacted. Conversation summary preserved.</div>
          `;
          this.isAnimating = false;
          this._scrollToBottom();
        }, 300);
        return;
      }

      fill.style.width = progress + '%';
      pct.textContent = Math.floor(progress) + '%';
      setTimeout(step, 40 + Math.random() * 60);
    };

    setTimeout(step, 300);
  }

  _cmdModel() {
    const models = [
      ['claude-opus-4-6', 'Most capable, deep reasoning', true],
      ['claude-sonnet-4-6', 'Fast, balanced performance', false],
      ['claude-haiku-4-5', 'Fastest, lightweight tasks', false],
    ];

    let rows = '';
    for (const [name, desc, active] of models) {
      rows += `<div class="term-model">
        <span class="term-model__indicator term-model__indicator--${active ? 'active' : 'inactive'}"></span>
        <span class="term-model__name ${active ? 'term-model__name--active' : ''}">${name}</span>
        <span class="term-model__desc">${desc}</span>
      </div>`;
    }

    this._appendHtml(`
      <div class="term-block">
        <div class="term-heading">Available Models</div>
        ${rows}
        <hr class="term-hr">
        <div class="term-text--dim">Active model shown with <span class="term-text--accent">\u25CF</span>. Use <span class="term-text--accent">/model &lt;name&gt;</span> to switch.</div>
      </div>
    `);
  }

  _cmdDiff() {
    this._animateSequence([
      { html: '<div class="term-text--dim">Checking uncommitted changes...</div>', delay: 400 },
      { html: '<div class="term-diff-hdr">--- a/templates/msa/indemnification.md</div>', delay: 200 },
      { html: '<div class="term-diff-hdr">+++ b/templates/msa/indemnification.md</div>', delay: 100 },
      { html: '<div class="term-diff-ctx">@@ -8,5 +8,8 @@ ## 7.1 Mutual Indemnification</div>', delay: 150 },
      { html: '<div class="term-diff-ctx">  Each Party shall indemnify the other against claims arising from</div>', delay: 80 },
      { html: '<div class="term-diff-del">  its negligent acts or omissions.</div>', delay: 80 },
      { html: '<div class="term-diff-add">  its negligent acts or omissions, provided that the Indemnifying</div>', delay: 80 },
      { html: '<div class="term-diff-add">  Party\'s aggregate liability under this Section shall not exceed</div>', delay: 80 },
      { html: '<div class="term-diff-add">  the total fees paid in the twelve (12) months preceding the claim,</div>', delay: 80 },
      { html: '<div class="term-diff-add">  except for claims arising from gross negligence or willful misconduct.</div>', delay: 80 },
      { html: '<div class="term-diff-ctx">  </div>', delay: 80 },
      { html: '<hr class="term-hr">', delay: 200 },
      { html: '<div class="term-stat"><span class="term-stat__key">Files changed</span><span class="term-stat__val">1</span></div>', delay: 100 },
      { html: '<div class="term-stat"><span class="term-stat__key">Insertions</span><span class="term-stat__val term-text--success">+4</span></div>', delay: 80 },
      { html: '<div class="term-stat"><span class="term-stat__key">Deletions</span><span class="term-stat__val term-text--error">-1</span></div>', delay: 0 },
    ]);
  }

  _cmdStatus() {
    this._appendHtml(`
      <div class="term-block">
        <div class="term-heading">Claude Code Status</div>
        <div class="term-stat"><span class="term-stat__key">Version</span><span class="term-stat__val">1.0.42</span></div>
        <div class="term-stat"><span class="term-stat__key">Model</span><span class="term-stat__val term-stat__val--accent">claude-opus-4-6</span></div>
        <div class="term-stat"><span class="term-stat__key">Account</span><span class="term-stat__val">attorney@firm.com</span></div>
        <div class="term-stat"><span class="term-stat__key">Plan</span><span class="term-stat__val">Max (5x usage)</span></div>
        <div class="term-stat"><span class="term-stat__key">Project</span><span class="term-stat__val">legal-ops-project</span></div>
        <div class="term-stat"><span class="term-stat__key">Working dir</span><span class="term-stat__val">~/firm/legal-ops-project</span></div>
        <hr class="term-hr">
        <div class="term-stat"><span class="term-stat__key">MCP servers</span><span class="term-stat__val">3 connected (filesystem, postgres, web-search)</span></div>
        <div class="term-stat"><span class="term-stat__key">CLAUDE.md</span><span class="term-stat__val term-text--success">loaded — NY jurisdiction, Bluebook</span></div>
        <div class="term-stat"><span class="term-stat__key">Permissions</span><span class="term-stat__val">scoped to /matters/ + /templates/</span></div>
      </div>
    `);
  }

  _cmdConfig() {
    this._appendHtml(`
      <div class="term-block">
        <div class="term-text--dim">Opening settings...</div>
      </div>
    `);
    // Navigate to settings.json in the file explorer
    setTimeout(() => {
      if (window.app && window.app.explorer) {
        window.app.explorer.selectPath('.claude/settings.json');
      }
    }, 300);
  }

  _cmdMemory() {
    this._animateSequence([
      { html: '<div class="term-heading">Auto-Memory Entries</div>', delay: 300 },
      { html: '<div class="term-text--dim">from ~/.claude/projects/.../memory/MEMORY.md</div>', delay: 200 },
      { html: '<hr class="term-hr">', delay: 150 },
      { html: '<div class="term-text">\u2022 Default jurisdiction: New York — always verify governing law clause</div>', delay: 150 },
      { html: '<div class="term-text">\u2022 Citation format: Bluebook 21st Edition — verify all citations exist</div>', delay: 120 },
      { html: '<div class="term-text">\u2022 Indemnification cap: 12 months\' fees, carve-outs for gross negligence</div>', delay: 120 },
      { html: '<div class="term-text">\u2022 Use [Client] and [Opposing Party] placeholders in all outputs</div>', delay: 120 },
      { html: '<div class="term-text">\u2022 Flag unsettled areas of law and escalate to partner</div>', delay: 120 },
      { html: '<hr class="term-hr">', delay: 150 },
      { html: '<div class="term-text--dim">5 entries. Edit with <span class="term-text--accent">/memory --edit</span></div>', delay: 0 },
    ]);
  }

  // ── Utilities ─────────────────────────────────────────────

  _clearOutput() {
    this.output.innerHTML = '';
    this._showWelcome();
  }

  _appendHtml(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) {
      this.output.appendChild(div.firstChild);
    }
    this._scrollToBottom();
  }

  _scrollToBottom() {
    requestAnimationFrame(() => {
      this.output.scrollTop = this.output.scrollHeight;
    });
  }

  /** Animate a sequence of HTML blocks with delays */
  _animateSequence(steps) {
    this.isAnimating = true;
    let totalDelay = 0;

    const block = document.createElement('div');
    block.className = 'term-block';
    this.output.appendChild(block);

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      totalDelay += step.delay;

      setTimeout(() => {
        const div = document.createElement('div');
        div.innerHTML = step.html;
        while (div.firstChild) {
          block.appendChild(div.firstChild);
        }
        this._scrollToBottom();

        if (i === steps.length - 1) {
          this.isAnimating = false;
        }
      }, totalDelay);
    }
  }

  _esc(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
}
