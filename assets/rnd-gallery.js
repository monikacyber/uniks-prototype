(() => {
  const labNote = document.querySelector('.lab-note');
  if (!labNote) return;

  labNote.insertAdjacentHTML('afterend', `
    <section class="lab-recipes" id="lab-recipes" aria-labelledby="lab-recipes-title">
      <h2 class="lab-recipes-stat" id="lab-recipes-title"><strong>1500+</strong> власних рецептур</h2>
      <div>
        <h3>Від лабораторного зразка до виробництва</h3>
        <p>Розробляємо формулу під завдання вашого бренду. Разом визначаємо, яким має бути продукт: як він наноситься, яку має текстуру й аромат, як відчувається під час використання. Готуємо лабораторний зразок, доопрацьовуємо його за вашими відгуками та після погодження готуємо формулу до виробництва.</p>
      </div>
    </section>
    <section class="lab-gallery" id="lab-photos" aria-labelledby="lab-photos-title">
      <h2 id="lab-photos-title">Як працює наша лабораторія</h2>
      <div class="lab-gallery-grid">
        <figure>
          <img src="assets/rnd-lab-overview.jpg" width="1100" height="825" alt="Технологиня за робочим столом у лабораторії UNIKS" loading="lazy" decoding="async">
          <figcaption>
            <h3>Лабораторія UNIKS</h3>
            <p>Тут технологи підбирають компоненти й готують перші зразки продукту.</p>
          </figcaption>
        </figure>
        <figure>
          <img src="assets/rnd-sample-preparation.jpg" width="825" height="1100" alt="Технологиня додає компонент у лабораторну склянку на вагах" loading="lazy" decoding="async">
          <figcaption>
            <h3>Підготовка зразка</h3>
            <p>Зважуємо компоненти й готуємо зразок, щоб оцінити текстуру та властивості майбутнього продукту.</p>
          </figcaption>
        </figure>
        <figure>
          <img src="assets/rnd-components-and-samples.jpg" width="750" height="1000" alt="Флакони та зразки на столі технолога" loading="lazy" decoding="async">
          <figcaption>
            <h3>Компоненти й зразки</h3>
            <p>Порівнюємо варіанти формули, щоб підібрати потрібну текстуру, колір і аромат.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  `);
})();
