// Interactive Payoff Matrix Logic
const matrixData = {
  'CC': {
    cellId: 'cell-cc',
    p1Payoff: -1,
    p2Payoff: -1,
    desc: "Both players cooperate and maintain silence. Each serves 1 year in prison. This is the Pareto-efficient collective outcome, though unstable due to individual temptation to betray."
  },
  'CD': {
    cellId: 'cell-cd',
    p1Payoff: -5,
    p2Payoff: 0,
    desc: "Player A remains silent (cooperates) while Player B betrays (defects). Player A suffers the maximum penalty of 5 years ('sucker's payoff'), while Player B goes completely free (0 years)."
  },
  'DC': {
    cellId: 'cell-dc',
    p1Payoff: 0,
    p2Payoff: -5,
    desc: "Player A betrays (defects) while Player B remains silent (cooperates). Player A goes free (0 years), while Player B suffers the full 5-year sentence."
  },
  'DD': {
    cellId: 'cell-dd',
    p1Payoff: -3,
    p2Payoff: -3,
    desc: "Both players defect (betray). Each serves 3 years. This state is the unique strictly dominant Nash Equilibrium: neither player can unilaterally reduce their sentence by switching to cooperation."
  }
};

let currentP1 = 'D';
let currentP2 = 'D';

function updateMatrix() {
  const key = currentP1 + currentP2;
  const outcome = matrixData[key];

  // Remove highlight on all cells
  document.querySelectorAll('.matrix-cell').forEach(cell => {
    cell.classList.remove('highlight');
  });

  // Highlight active cell
  const targetCell = document.getElementById(outcome.cellId);
  if (targetCell) {
    targetCell.classList.add('highlight');
  }

  // Update text
  const explainer = document.getElementById('matrix-explanation-text');
  if (explainer) {
    explainer.innerHTML = `<strong>Outcome (${currentP1 === 'C' ? 'Cooperate' : 'Defect'}, ${currentP2 === 'C' ? 'Cooperate' : 'Defect'}):</strong> ${outcome.desc} <br><span style="color: var(--accent-green); font-size: 0.8rem; margin-top: 4px; display: inline-block;">Payoffs: Player A = ${outcome.p1Payoff} yrs | Player B = ${outcome.p2Payoff} yrs</span>`;
  }
}

// Attach matrix button listeners
document.addEventListener('DOMContentLoaded', () => {
  // Reading Progress Bar
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    const bar = document.getElementById('reading-progress');
    if (bar) bar.style.width = `${progress}%`;
  });

  // Mobile navigation toggle
  const toggleBtn = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close on click link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // P1 controls
  document.querySelectorAll('.p1-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.p1-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentP1 = e.target.getAttribute('data-action');
      updateMatrix();
    });
  });

  // P2 controls
  document.querySelectorAll('.p2-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.p2-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentP2 = e.target.getAttribute('data-action');
      updateMatrix();
    });
  });

  // Initialize matrix
  updateMatrix();
});

// Copy Email Utility
function copyEmail() {
  const email = 'dx@outlook.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Copied dx@outlook.com to clipboard!');
  }).catch(err => {
    console.error('Failed to copy email:', err);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
