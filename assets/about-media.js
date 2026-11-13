(() => {
  const nextSection = document.querySelector('main .next');
  if (!nextSection) return;

  nextSection.insertAdjacentHTML('beforebegin', `
    <section class="next about-media">
      <div>
        <h2>UNIKS у медіа</h2>
        <p>Репортажі та інтерв’ю про нашу команду, виробництво й розробку косметики.</p>
      </div>
      <a class="cta" href="news/#media">Переглянути матеріали <b aria-hidden="true">↗</b></a>
    </section>
  `);
})();
