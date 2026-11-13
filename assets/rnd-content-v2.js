(() => {
  if (document.body.dataset.page !== 'rnd') return;
  const main = document.querySelector('main');
  if (!main) return;

  main.innerHTML = `
    <section class="hero rnd-hero" aria-labelledby="rnd-title">
      <div class="rnd-hero-visual" aria-hidden="true"><img src="assets/rnd-lab-hero-v1.jpg" width="1944" height="810" alt="" fetchpriority="high" decoding="async"></div>
      <div class="rnd-hero-copy">
        <div class="eyebrow">Лабораторія R&amp;D UNIKS</div>
        <h1 id="rnd-title">Формула, що має<br><em>сенс</em> для ринку.</h1>
        <p class="lead">Розробляємо рецептури косметики, засобів особистого догляду та побутової хімії для власних брендів і партнерів Private Label. Допомагаємо перетворити ідею на продукт — від перших лабораторних зразків до підготовки формули до виробництва.</p>
        <a class="cta" href="contact/">Обговорити розробку <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="rnd-recipes rnd-split" id="lab-recipes" aria-labelledby="recipes-title">
      <h2 class="rnd-stat" id="recipes-title"><strong>1500+</strong><span>власних рецептур</span></h2>
      <p class="rnd-large-copy">За кожною рецептурою — досвід підбору компонентів, пошуку текстури та роботи зі зразками. Спираємося на ці напрацювання, створюючи рішення під завдання вашого бренду.</p>
    </section>

    <section class="rnd-brief" id="details" aria-labelledby="brief-title">
      <div class="section-title">Завдання вашого бренду</div>
      <h2 id="brief-title">З чим можна звернутися<br><em>до лабораторії</em></h2>
      <div class="rnd-request-grid">
        <article><span class="rnd-number">01</span><h3>Створити новий продукт</h3></article>
        <article><span class="rnd-number">02</span><h3>Удосконалити наявну формулу</h3></article>
        <article><span class="rnd-number">03</span><h3>Розширити асортимент бренду</h3></article>
      </div>
      <p class="rnd-body-copy">Разом визначимо бажані властивості, текстуру, аромат і формат майбутнього засобу.</p>
    </section>

    <section class="rnd-process rnd-split" aria-labelledby="process-title">
      <div><div class="section-title">Як ми працюємо</div><h2 id="process-title">Від завдання<br> до погодженого<br> <em>зразка</em></h2></div>
      <ol class="rnd-process-list">
        <li><span class="rnd-number" aria-hidden="true">01</span><div><h3>Знайомимося з ідеєю</h3><p>Обговорюємо аудиторію, призначення продукту, ціновий сегмент і ваші побажання. Референси допоможуть точніше зрозуміти очікування.</p></div></li>
        <li><span class="rnd-number" aria-hidden="true">02</span><div><h3>Розробляємо зразки</h3><p>Підбираємо компоненти та їх поєднання, працюємо над текстурою, ароматом і відчуттями під час використання.</p></div></li>
        <li><span class="rnd-number" aria-hidden="true">03</span><div><h3>Оцінюємо й доопрацьовуємо</h3><p>Ви знайомитеся зі зразками та ділитеся враженнями. Ми уточнюємо формулу з урахуванням ваших відгуків і результатів перевірок.</p></div></li>
        <li><span class="rnd-number" aria-hidden="true">04</span><div><h3>Готуємо до виробництва</h3><p>Фіксуємо погоджену рецептуру й технологічні параметри для переходу від лабораторного зразка до виробничої партії.</p></div></li>
      </ol>
    </section>

    <section class="rnd-media" id="lab-photos" aria-labelledby="media-title">
      <div class="section-title">Люди та процес</div>
      <h2 id="media-title">У лабораторії <em>UNIKS</em></h2>
      <div class="rnd-media-layout">
        <div class="rnd-photo-grid">
          <figure class="rnd-photo-main"><img src="assets/rnd-lab-overview.jpg" width="1100" height="825" alt="Технологиня за робочим столом у лабораторії UNIKS" loading="lazy" decoding="async"><figcaption><h3>Лабораторія UNIKS</h3><p>Тут технологи підбирають компоненти й готують перші зразки продукту.</p></figcaption></figure>
          <figure><img src="assets/rnd-sample-preparation.jpg" width="825" height="1100" alt="Технологиня зважує компонент для лабораторного зразка" loading="lazy" decoding="async"><figcaption><h3>Підготовка зразка</h3><p>Зважуємо компоненти й готуємо зразок, щоб оцінити текстуру та властивості майбутнього продукту.</p></figcaption></figure>
          <figure><img src="assets/rnd-components-and-samples.jpg" width="750" height="1000" alt="Компоненти та зразки на робочому столі технолога" loading="lazy" decoding="async"><figcaption><h3>Компоненти й зразки</h3><p>Порівнюємо варіанти формули, щоб підібрати потрібну текстуру, колір і аромат.</p></figcaption></figure>
        </div>
        <figure class="rnd-video-card">
          <video controls playsinline preload="none" poster="assets/rnd-lab-video-poster-v1.jpg" aria-label="Технологиня UNIKS демонструє лабораторний зразок. Коротке відео без звуку." aria-describedby="rnd-video-caption" width="540" height="960"><source src="assets/rnd-lab-process-v1.mp4" type="video/mp4"><a href="assets/rnd-lab-process-v1.mp4">Відкрити відео лабораторії</a></video>
          <figcaption id="rnd-video-caption"><span class="section-title">Знайомство з лабораторією</span><h3>Зразок у руках технологині</h3><p>Короткий відеофрагмент демонстрації лабораторного зразка. Без звуку.</p></figcaption>
        </figure>
      </div>
    </section>

    <section class="rnd-checks" aria-labelledby="checks-title">
      <div class="rnd-split rnd-section-head"><div class="section-title">Перевірки продукту</div><h2 id="checks-title">Перевіряємо те,<br>що <em>важливо для продукту</em></h2></div>
      <p class="rnd-body-copy">У власній лабораторії контролюємо pH, в’язкість, стабільність формули та сумісність із пакованням.</p>
      <ul class="rnd-check-grid"><li><span>01</span><strong>pH</strong></li><li><span>02</span><strong>В’язкість</strong></li><li><span>03</span><strong>Стабільність формули</strong></li><li><span>04</span><strong>Сумісність із пакованням</strong></li></ul>
      <div class="rnd-partner-note"><strong>Мікробіологічні дослідження</strong><p>Проводимо із залученням партнерських лабораторій.</p></div>
    </section>

    <section class="rnd-expertise rnd-split" aria-labelledby="expertise-title">
      <div><div class="section-title">Професійний розвиток</div><h2 id="expertise-title">Розвиваємо<br><em>експертизу</em></h2></div>
      <div><p class="rnd-body-copy">Наша команда вивчає нові інгредієнти й технологічні рішення на професійних навчаннях міжнародних виробників сировини. Один із прикладів — участь головної технологині UNIKS у навчанні та практичному майстер-класі BASF у Польщі.</p><a class="rnd-text-link" href="news/golovnyj-tehnolog-uniks-v-gostyah-u-polskogo-filialu-kompaniyi-basf/">Детальніше про навчання <span aria-hidden="true">↗</span></a></div>
    </section>

    <section class="rnd-contact" aria-labelledby="contact-title">
      <div class="section-title">Наступний крок</div><h2 id="contact-title">Є ідея продукту?<br><em>Почнімо з розмови.</em></h2>
      <p>Розкажіть, що хочете створити або змінити. Разом визначимо завдання для лабораторії та наступні кроки.</p>
      <a class="cta" href="contact/">Обговорити свій продукт <span aria-hidden="true">↗</span></a>
      <a class="rnd-secondary-link" href="private-label/">Контрактне виробництво <span aria-hidden="true">→</span></a>
    </section>`;

  document.querySelector('header nav a[href="rnd/"]')?.setAttribute('aria-current', 'page');
})();
