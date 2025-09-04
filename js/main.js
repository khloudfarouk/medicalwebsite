
    
    const row = document.querySelector('.exp-row');
    const left = document.querySelector('.exp-left');
    const right = document.querySelector('.exp-right');

    row.addEventListener('mouseenter', () => {
      left.classList.add('collapsed');
      right.classList.remove('collapsed');
    });

    row.addEventListener('mouseleave', () => {
      left.classList.remove('collapsed');
      right.classList.add('collapsed');
    });
 