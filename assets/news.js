const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(story => observer.observe(story));

const filters = Array.from(document.querySelectorAll('[data-filter]'));
const stories = document.querySelectorAll('[data-kind]');

function showCategory(filter) {
  filters.forEach(button => {
    const active = button === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  stories.forEach(story => {
    story.hidden = filter.dataset.filter !== 'all'
      && !story.dataset.kind.split(' ').includes(filter.dataset.filter);
  });
}

filters.forEach(button => button.addEventListener('click', () => showCategory(button)));

function showLinkedCategory() {
  const category = location.hash === '#media' ? 'media' : 'all';
  const filter = filters.find(button => button.dataset.filter === category);
  if (filter) showCategory(filter);
}

window.addEventListener('hashchange', showLinkedCategory);
showLinkedCategory();
