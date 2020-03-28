(function (jtd, undefined) {
  // Event handling
  jtd.addEvent = function (el, type, handler) {
    if (el.attachEvent) el.attachEvent('on' + type, handler); else el.addEventListener(type, handler);
  };
  jtd.removeEvent = function (el, type, handler) {
    if (el.detachEvent) el.detachEvent('on' + type, handler); else el.removeEventListener(type, handler);
  };
  jtd.onReady = function (ready) {
    // in case the document is already rendered
    if (document.readyState != 'loading') ready();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') ready();
      });
  };

  function initNav() {
    // Show/hide mobile menu
    const mainNav = document.querySelector('.js-main-nav');
    const pageHeader = document.querySelector('.js-page-header');
    const navTrigger = document.querySelector('.js-main-nav-trigger');

    jtd.addEvent(navTrigger, 'click', function (e) {
      e.preventDefault();
      const text = navTrigger.innerText;
      let textToggle = navTrigger.getAttribute('data-text-toggle');

      mainNav.classList.toggle('nav-open');
      pageHeader.classList.toggle('nav-open');
      navTrigger.classList.toggle('nav-open');
      navTrigger.innerText = textToggle;
      navTrigger.setAttribute('data-text-toggle', text);
      textToggle = text;
    })
  }

  function searchResults(index, data) {
    // Site search
    const searchInput = document.querySelector('.js-search-input');
    const searchResults = document.querySelector('.js-search-results');

    function hideResults() {
      searchResults.innerHTML = '';
      searchResults.classList.remove('active');
    }

    jtd.addEvent(searchInput, 'keydown', function (e) {
      switch (e.keyCode) {
        case 38: // arrow up
          e.preventDefault();
          const active_up = document.querySelector('.search-result.active');
          if (active_up) {
            active_up.classList.remove('active');
            if (active_up.parentElement.previousSibling) {
              var previous = active_up.parentElement.previousSibling.querySelector('.search-result');
              previous.classList.add('active');
            }
          }
          return;
        case 40: // arrow down
          e.preventDefault();
          const active = document.querySelector('.search-result.active');
          if (active) {
            if (active.parentElement.nextSibling) {
              const next = active.parentElement.nextSibling.querySelector('.search-result');
              active.classList.remove('active');
              next.classList.add('active');
            }
          } else {
            const next = document.querySelector('.search-result');
            if (next) {
              next.classList.add('active');
            }
          }
          return;
        case 13: // enter
          e.preventDefault();
          const selected = document.querySelector('.search-result.active');
          if (selected) {
            selected.click();
          } else {
            const first = document.querySelector('.search-result');
            if (first) {
              first.click();
            }
          }
          return;
      }
    });

    jtd.addEvent(searchInput, 'keyup', function (e) {
      switch (e.keyCode) {
        case 27: // When esc key is pressed, hide the results and clear the field
          hideResults();
          searchInput.value = '';
          return;
        case 38: // arrow up
        case 40: // arrow down
        case 13: // enter
          e.preventDefault();
          return;
      }

      hideResults();

      const input = this.value;
      if (input === '') {
        return;
      }

      const options = {
        bool: "AND",
        fields: {
          title: {boost: 200},
          body: {boost: 2},
        }
      };

      const results = index.search(input, options);
      // function (query) {
      //   const tokens = lunr.tokenizer(input);
      //   query.term(tokens, {
      //     boost: 10
      //   });
      //   query.term(tokens, {
      //     wildcard: lunr.Query.wildcard.TRAILING
      //   });
      // });

      if (results.length > 0) {
        console.log('Result:', results)
        searchResults.classList.add('active');
        const resultsList = document.createElement('ul');
        resultsList.classList.add('search-results-list');
        searchResults.appendChild(resultsList);

        for (const i in results) {
          const result = results[i];
          const doc = result.doc;

          const resultsListItem = document.createElement('li');
          resultsListItem.classList.add('search-results-list-item');
          resultsList.appendChild(resultsListItem);

          const resultLink = document.createElement('a');
          resultLink.classList.add('search-result');
          resultLink.setAttribute('href', doc.id);
          resultsListItem.appendChild(resultLink);

          const resultTitle = document.createElement('div');
          resultTitle.classList.add('search-result-title');
          resultTitle.innerText = doc.title;
          resultLink.appendChild(resultTitle);

          const resultRelUrl = document.createElement('span');
          resultRelUrl.classList.add('search-result-rel-url');
          resultRelUrl.innerText = doc.id;
          resultTitle.appendChild(resultRelUrl);

          const metadata = [];//result.matchData.metadata;
          let contentFound = false;
          for (const j in metadata) {
            if (metadata[j].title) {
              const position = metadata[j].title.position[0];
              const start = position[0];
              const end = position[0] + position[1];
              resultTitle.innerHTML = doc.title.substring(0, start) + '<span class="search-result-highlight">' + doc.title.substring(start, end) + '</span>' + doc.title.substring(end, doc.title.length) + '<span class="search-result-rel-url">' + doc.relUrl + '</span>';

            } else if (metadata[j].content && !contentFound) {
              contentFound = true;

              const position = metadata[j].content.position[0];
              const start = position[0];
              const end = position[0] + position[1];
              let previewStart = start;
              let previewEnd = end;
              let ellipsesBefore = true;
              let ellipsesAfter = true;
              for (let k = 0; k < 3; k++) {
                const nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
                const nextDot = doc.content.lastIndexOf('.', previewStart - 2);
                if ((nextDot > 0) && (nextDot > nextSpace)) {
                  previewStart = nextDot + 1;
                  ellipsesBefore = false;
                  break;
                }
                if (nextSpace < 0) {
                  previewStart = 0;
                  ellipsesBefore = false;
                  break;
                }
                previewStart = nextSpace + 1;
              }
              for (let k = 0; k < 10; k++) {
                const nextSpace = doc.content.indexOf(' ', previewEnd + 1);
                const nextDot = doc.content.indexOf('.', previewEnd + 1);
                if ((nextDot > 0) && (nextDot < nextSpace)) {
                  previewEnd = nextDot;
                  ellipsesAfter = false;
                  break;
                }
                if (nextSpace < 0) {
                  previewEnd = doc.content.length;
                  ellipsesAfter = false;
                  break;
                }
                previewEnd = nextSpace;
              }
              let preview = doc.content.substring(previewStart, start);
              if (ellipsesBefore) {
                preview = '… ' + preview;
              }
              preview += '<span class="search-result-highlight">' + doc.content.substring(start, end) + '</span>';
              preview += doc.content.substring(end, previewEnd);
              if (ellipsesAfter) {
                preview += ' …';
              }

              const resultPreview = document.createElement('div');
              resultPreview.classList.add('search-result-preview');
              resultPreview.innerHTML = preview;
              resultLink.appendChild(resultPreview);
            }
          }
        }
      } else {
        console.log('No results...')
      }
    });

    jtd.addEvent(searchInput, 'blur', function () {
      setTimeout(function () {
        hideResults()
      }, 300);
    });
  }

  function initSearch() {
    const data = window.searchIndex;
    const index = elasticlunr.Index.load(window.searchIndex);
    searchResults(index, data);
    // const index1 = lunr(function () {
    //   this.setRef('id');
    //   this.addField('title', {boost: 200});
    //   this.addField('content', {boost: 2});
    //   this.addField('url');
    //   this.metadataWhitelist = ['position'];
    //
    //   for (const i in data) {
    //     this.add({
    //       id: i,
    //       title: data[i].title,
    //       content: data[i].content,
    //       url: data[i].url
    //     });
    //   }
    // });

  }

  function pageFocus() {
    const mainContent = document.querySelector('.js-main-content');
    mainContent.focus();
  }

  jtd.onReady(function () {
    // Document ready
    initNav();
    pageFocus();
    if (typeof lunr !== 'undefined') {
      initSearch();
    }
  });

})(window.jtd = window.jtd || {});
