(() => {
  const projects = document.querySelector('.pl-projects');
  if (!projects) return;

  const intro = document.querySelector('.intro h2');
  if (intro) {
    intro.textContent = 'Розробляємо продукт для вашої аудиторії, цінового сегмента та ринку.';
  }

  const concept = document.querySelector('.intro .card:first-child p');
  if (concept) {
    concept.textContent = 'Разом визначаємо, для кого створюємо продукт, яку потребу він закриває і чим відрізнятиметься від пропозицій у своїй категорії.';
  }

  projects.id = 'projects';
  projects.innerHTML = `
    <div class="section-title">Реалізовані проєкти</div>
    <div>
      <h2>Власні марки <em>торговельних мереж</em></h2>
      <p>UNIKS виготовляв продукцію під власними торговими марками мереж EVA, PROSTOR, METRO, «Копійочка» та «Ашан». У таких проєктах ми підбираємо формулу, компоненти й технологію виробництва під завдання партнера.</p>
      <p style="margin-top: 20px">
        <a href="https://www.bomondvip.com/post/tetiana-byts-success-is-a-sequence-of-actions-that-you-do-everyday" style="text-decoration: underline; text-underline-offset: 3px">Тетяна Биць про запуск косметичних брендів у BOMOND VIP FASHION</a>
      </p>
    </div>
  `;
})();
