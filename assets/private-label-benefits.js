(() => {
  if (document.body.dataset.page !== 'private-label') return;

  const benefits = document.createElement('section');
  benefits.className = 'pl-benefits reveal show';
  benefits.innerHTML = `
    <div class="section-title">Переваги співпраці з UNIKS</div>
    <div>
      <h2>Повний цикл.<br><em>Одна відповідальна команда.</em></h2>
      <p class="pl-benefits-lead">Від рецептури до готового товару на вашому складі: беремо на себе маршрут запуску, щоб ви могли зосередитися на своєму бренді та ринку.</p>
      <div class="pl-benefits-grid">
        <article><span>01</span><h3>Власна R&amp;D-лабораторія</h3><p>Розробляємо нові продукти та адаптуємо їх під локального споживача.</p></article>
        <article><span>02</span><h3>Гнучкий запуск</h3><p>Працюємо з рецептурами, дизайном і партіями від мінімальних до великих; фасування — від 25 кг.</p></article>
        <article><span>03</span><h3>Сертифікація та документи</h3><p>Супроводжуємо підготовку товару для українського та європейського ринку.</p></article>
        <article><span>04</span><h3>Досвід із національними мережами</h3><p>Якість розроблених рецептур і коректність документації підтверджені роботою з ритейлом.</p></article>
        <article><span>05</span><h3>Захист вашого бренду</h3><p>Конфіденційність, індивідуальні рішення та нерозголошення інформації щодо розроблених рецептур.</p></article>
        <article><span>06</span><h3>Від ідеї до поставки</h3><p>Рецептура, тестування, пакування, дизайн, випуск товару та доставка на склад замовника.</p></article>
      </div>
    </div>`;

  document.querySelector('.intro')?.after(benefits);
  document.head.insertAdjacentHTML('beforeend', `<style>
    body[data-page="private-label"] .hero{background-color:#21172d;background-image:linear-gradient(90deg,rgba(28,16,42,.96) 0%,rgba(28,16,42,.78) 42%,rgba(28,16,42,.13) 76%),url('assets/private-label-packaging-line.jpg');background-size:cover;background-position:center}
    body[data-page="private-label"] .hero .orb{opacity:.12}
    .pl-benefits{display:grid;grid-template-columns:.8fr 1.6fr;gap:55px;background:#f0e4ef}
    .pl-benefits h2{margin:0 0 16px}.pl-benefits h2 em{color:#673e80}
    .pl-benefits-lead{max-width:680px;margin:0 0 34px;font-size:16px;line-height:1.7}
    .pl-benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(33,23,45,.18)}
    .pl-benefits-grid article{min-height:200px;padding:21px;background:#fbf8fc}.pl-benefits-grid span{font:11px 'DM Mono';color:#8b3ea1}
    .pl-benefits-grid h3{margin:32px 0 9px;font-size:18px;letter-spacing:-.04em}.pl-benefits-grid p{margin:0;font-size:13px;line-height:1.6;color:#5b5164}
    @media(max-width:800px){.pl-benefits{grid-template-columns:1fr;gap:25px}.pl-benefits-grid{grid-template-columns:1fr}.pl-benefits-grid article{min-height:0}.pl-benefits-grid h3{margin-top:22px}}
  </style>`);
})();
