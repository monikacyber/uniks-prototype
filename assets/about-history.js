Warning: truncated output (original token count: 1096)
Total output lines: 33

(() => {
  if (document.body.dataset.page !== 'about') return;

  const history = document.createElement('section');
  history.className = 'about-history reveal show';
  history.innerHTML = `
    <div class="section-title">Історія UNIKS</div>
    <div>
      <h2>Шлях, який формує<br><em>нашу стійкість.</em></h2>
      <p class="history-lead">Від дистриб’юторської компанії до сучасного виробника косметики та побутової хімії: UNIKS будувався на здатності починати знову, розвивати власні потужності й тримати фокус на людях та якості.</p>
      <div class="history-line">
        <article><span>2001</span><div><h3>Початок</h3><p>UNIKS заснований як дистриб’юторська компанія в Луганській області. Компанію створила Анна Страхова разом із батьками — з прагненням розвивати сильний український бізнес у категорії краси та догляду.</p></div></article>
        <article><span>2014–2016</span><div><h3>Друге народження</h3><p>Через воєнні події власники переїхали на підконтрольну Україні територію. У 2016 році UNIKS відновив діяльність з нуля, переорієнтувався на виробництво косметики та побутової хімії й розпочав новий етап у Макарові, Київська область.</p></div></article>
        <article><span>2019</span><div><h3>Зростання та визнання</h3><p>Компанія розширила виробничі потужності в чотири рази, отримала національну нагороду…96 tokens truncated…2015 і GMP 22716:2007, повернувся до стабільної роботи та розпочав вихід на міжнародні ринки.</p></div></article>
        <article><span>2024–2025</span><div><h3>Новий масштаб</h3><p>UNIKS отримав національну бізнес-премію «Найпопулярніший Private Label» і відзнаку «Вибір країни 2024», розширив команду до 60 людей та продовжив розвивати виробничі й комерційні можливості.</p></div></article>
      </div>
    </div>`;

  document.querySelector('.hero')?.after(history);
  document.head.insertAdjacentHTML('beforeend', `<style>
    body[data-page="about"] .hero{background-color:#21172d;background-image:linear-gradient(90deg,rgba(28,16,42,.98) 0%,rgba(28,16,42,.84) 42%,rgba(28,16,42,.16) 100%),url('assets/uniks-team-portrait.jpg');background-size:auto,auto 100%;background-position:center,right center;background-repeat:no-repeat}
    body[data-page="about"] .hero .orb{opacity:.16}
    .about-history{display:grid;grid-template-columns:.8fr 1.6fr;gap:55px;background:#fbf8fc;color:#261b30;border-top:1px solid #e2d7e5}
    .about-history h2{margin:0 0 16px}.about-history h2 em{color:#7a4d91}
    .history-lead{max-width:690px;margin:0 0 34px;font-size:16px;line-height:1.7;color:#5d5165}
    .history-line{border-top:1px solid #ddd1e0}
    .history-line article{display:grid;grid-template-columns:120px 1fr;gap:22px;padding:25px 0;border-bottom:1px solid #ddd1e0}
    .history-line span{font:16px/1 'DM Mono';color:#8d5da6}.history-line h3{margin:0 0 7px;font-size:19px;letter-spacing:-.04em}
    .history-line p{margin:0;max-width:660px;font-size:15px;line-height:1.65;color:#5d5165}
    @media(max-width:800px){.about-history{grid-template-columns:1fr;gap:25px}.history-line article{grid-template-columns:88px 1fr;gap:14px}.history-line p{font-size:14px}}
  </style>`);
})();
