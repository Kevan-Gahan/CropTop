const navRegular = document.querySelector('.nav-regular');
const scrollWatcher = document.createElement('div');
const header = document.querySelector('header');

scrollWatcher.setAttribute('data-scroll-watcher', '');
scrollWatcher.classList.add("scroll-watcher");
header.before(scrollWatcher);


const navObserver = new IntersectionObserver((entries) => {
    navRegular.classList.toggle('nav-scrolled',!entries[0].isIntersecting)
},{rootMargin: "0px 0px 0px 0px"});

navObserver.observe(scrollWatcher);
