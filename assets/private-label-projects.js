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
      <h2>Продукти, створені <em>для партнерів</em></h2>
      <div class="pl-portfolio">
        <article class="pl-case">
          <div class="pl-case-photos">
            <img src="assets/projects/sonkio-bakuchiol.jpg" alt="Крем Sonkio Bakuchiol Renewal Cream" loading="lazy" decoding="async">
            <img src="assets/projects/sonkio-pearl-hydra.jpg" alt="Сироватка Sonkio Pearl Hydra UV Serum SPF 15" loading="lazy" decoding="async">
          </div>
          <h3>Sonkio</h3>
          <p>Догляд за обличчям. Крем Bakuchiol Renewal Cream і сироватка Pearl Hydra UV Serum SPF 15.</p>
        </article>
        <article class="pl-case">
          <div class="pl-case-photos">
            <img src="assets/projects/yoni-love-line.jpg" alt="Засоби лінійки YONI LOVE" loading="lazy" decoding="async">
            <img src="assets/projects/yoni-love-gel.jpg" alt="Гель YONI LOVE Pro-Balance Ocean Skin" loading="lazy" decoding="async">
          </div>
          <h3>YONI LOVE</h3>
          <p>Лінійка для догляду за тілом та інтимної гігієни. Серед продуктів — універсальний гель Pro-Balance Ocean Skin.</p>
        </article>
        <article class="pl-case">
          <div class="pl-case-photos">
            <img src="assets/projects/lamel-pina-colada.jpg" alt="Бальзам LAMEL Juicy Lips Piña Colada" loading="lazy" decoding="async">
            <img src="assets/projects/lamel-strawberry-matcha.jpg" alt="Бальзам LAMEL Juicy Lips Strawberry Matcha" loading="lazy" decoding="async">
          </div>
          <h3>LAMEL</h3>
          <p>Бальзами-блиски для губ Juicy Lips у варіантах Piña Colada та Strawberry Matcha.</p>
        </article>
      </div>
      <h3 class="pl-retail-heading">Власні марки торговельних мереж</h3>
      <p>Виготовляємо продукцію під власними торговими марками для торговельних мереж, зокрема EVA, PROSTOR, METRO, «Копійочка» та «Ашан».</p>
    </div>
  `;
})();
