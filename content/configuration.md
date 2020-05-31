+++
title = 'Configuration'
weight = 2
+++

# Configuration

Just the Docs has some specific configuration parameters that can be defined in your Jekyll site's _config.yml file.

{:toc}

---


View this site's [_config.yml](https://github.com/pmarsceill/just-the-docs/tree/master/_config.yml) file as an example.

## Site logo

```yaml
# Set a path/url to a logo that will be displayed instead of the title
logo: "/assets/images/just-the-docs.png"
```

## Search

```toml
# Enable or disable the site search
build_search_index = true
```

## Aux links

```toml
# Aux links for the upper right navigation
[extra]
links = [
  { title = 'GitHub', url = 'https://github.com/jakeswenson/zola-just-the-docs/' },
  { title = 'Demo', url = 'https://zola-jtd-demo.jakeswenson.now.sh/' }
]
```

## Heading anchor links

```toml
# Heading anchor links appear on hover over h1-h6 tags in page content
# allowing users to deep link to a particular heading on a page.
insert_anchor_links = true
```

## Footer content

```toml
[extra]
# Footer content appears at the bottom of every page's main content
footer = "Copyright &copy; 2020 Jake Swenson. Distributed by an <a href=\"https://github.com/jakeswenson/zola-just-the-docs/tree/master/LICENSE.txt\">MIT license.</a>"
```

<!-- TODO: 

## Color scheme

```yaml
# Color scheme currently only supports "dark" or nil (default)
color_scheme: "dark"
```
<button class="btn js-toggle-dark-mode">Preview dark color scheme</button>

<script type="text/javascript" src="{{ "/assets/js/dark-mode-preview.js" | absolute_url }}"></script>

-->

See [Customization](customization.md) for more information.

<!--

## Google Analytics

```yaml
# Google Analytics Tracking (optional)
# e.g, UA-1234567-89
ga_tracking: UA-5555555-55
```

-->
