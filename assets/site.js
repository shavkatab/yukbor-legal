// KargoFly landing: header state, sender/traveler switch, scroll reveals. Plain JS, no build step.
(function () {
  'use strict';

  // Header: transparent over the cobalt hero, solid once the hero has scrolled away.
  var top = document.querySelector('.top');
  var hero = document.querySelector('.hero');
  if (top && hero) {
    var ticking = false;
    var update = function () {
      ticking = false;
      top.classList.toggle('is-solid', window.scrollY > hero.offsetHeight - 72);
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  // "For senders / for travelers" switch: an ARIA tablist with arrow keys.
  var sw = document.querySelector('.switch');
  if (sw) {
    var tabs = Array.prototype.slice.call(sw.querySelectorAll('[role="tab"]'));
    var select = function (index, focus) {
      tabs.forEach(function (tab, i) {
        var on = i === index;
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      sw.setAttribute('data-active', String(index));
      if (focus) tabs[index].focus();
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(i, false); });
      tab.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          select((i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length, true);
        }
      });
    });
    select(0, false);
  }

  // Scroll reveals. Without IntersectionObserver everything is simply shown.
  var items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    for (var k = 0; k < items.length; k++) items[k].classList.add('in');
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  for (var j = 0; j < items.length; j++) io.observe(items[j]);
})();
