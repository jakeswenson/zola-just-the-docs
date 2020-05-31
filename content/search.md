+++
title = 'Search'
weight = 7
+++

# Search

{:toc}

---

Just the Docs uses [lunr.js](http://lunrjs.com) to add a client-side search interface powered by a JSON index that Jekyll generates. All search results are shown in an auto-complete style interface (there is no search results page). By default, all generated HTML pages are indexed using the following data points:

- Page title
- Page content
- Page URL

## Set up search

### Enable search in configuration

In your site's `config.toml`, enable search:

```toml
# Enable or disable the site search
build_search_index = true
```

## Hiding pages from search

Sometimes you might have a page that you don't want to be indexed for the search nor to show up in search results, e.g, a 404 page. 
To exclude a page from search, add the `in_search_index = false` parameter to the page's TOML front matter (in between the `+++`'s at the start of your content):

```toml
# When set to "true", the page will be in the search index. This is only used if
# `build_search_index` is set to "true" in the Zola configuration and the parent section
# hasn't set `in_search_index` to "false" in its front matter.
in_search_index = true
```

#### Example

```toml
title = "Page not found"
nav_exclude = true
```
