(() => {
  if (document.body.dataset.page !== "about") return;

  const applyMariaCard = () => {
    const card = [...document.querySelectorAll(".people-core .person-card")]
      .find((item) => item.querySelector("h3")?.textContent.trim() === "Марія Удовенко");
    if (!card || card.dataset.photoReady) return Boolean(card);

    card.dataset.photoReady = "true";
    card.classList.add("person-card-photo");
    card.insertAdjacentHTML(
      "afterbegin",
      '<img src="../assets/team-maria-udovenko.jpg" alt="Марія Удовенко, Головна технологиня R&amp;D" loading="lazy">'
    );
    const role = card.querySelector("strong");
    if (role) role.textContent = "Головна технологиня R&D · Chief Technologist";

    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>
        .people-core .person-card-photo{padding:0;overflow:hidden}
        .person-card-photo>img{display:block;width:100%;height:220px;object-fit:cover;object-position:center 63%}
        .person-card-photo>span,.person-card-photo>h3,.person-card-photo>strong,.person-card-photo>p{margin-left:24px;margin-right:24px}
        .person-card-photo>span{margin-top:18px}
        .person-card-photo>h3{margin-top:25px}
        .person-card-photo>p{margin-bottom:24px}
        @media(max-width:620px){.person-card-photo>img{height:300px;object-position:center 61%}}
      </style>`
    );
    return true;
  };

  const applyFoundersPhoto = () => {
    const lead = document.querySelector(".about-team .founder-lead");
    if (!lead || lead.dataset.photoReady) return Boolean(lead);

    lead.dataset.photoReady = "true";
    lead.insertAdjacentHTML(
      "afterbegin",
      '<figure class="founder-photo"><img src="../assets/team-founders.jpg" alt="Анна Страхова та Тетяна Біць — співзасновниці та CEO UNIKS" loading="lazy"></figure>'
    );
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>
        .about-team .founder-lead{display:grid;grid-template-columns:minmax(240px,.78fr) 1fr;column-gap:32px;align-items:center}
        .founder-photo{grid-row:span 3;margin:0;align-self:stretch;min-height:260px;overflow:hidden}
        .founder-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 45%}
        @media(max-width:620px){.about-team .founder-lead{display:block}.founder-photo{height:330px;min-height:0;margin:0 0 22px}.founder-photo img{object-position:center 42%}}
      </style>`
    );
    return true;
  };

  if (!applyMariaCard()) {
    const observer = new MutationObserver(() => {
      if (applyMariaCard()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  applyFoundersPhoto();
})();
