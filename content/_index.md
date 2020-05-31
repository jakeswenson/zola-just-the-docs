+++
title = 'Home'
weight = 1
description = "Just the Docs is a responsive Jekyll theme with built-in search that is easily customizable and hosted on GitHub Pages."
insert_anchor_links = "left"
sort_by = "weight"
+++

# Focus on writing good documentation

Just the Docs gives your documentation a jumpstart with a responsive Zola theme that is easily customizable.

[Get started now](#getting-started) 
<!--{: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } -->

[View it on GitHub](https://github.com/jakeswenson/zola-just-the-docs) <!-- {: .btn .fs-5 .mb-4 .mb-md-0 } -->

---

## Getting started

### Dependencies

Just the Docs is built for [Zola](https://www.getzola.org/), a blazingly fast static site generator. 
View the [getting started guide](https://www.getzola.org/documentation/getting-started/overview/) for more information. 
Just the Docs requires no special plugins and can run on GitHub Pages' standard Jekyll compiler. 
<!-- TODO: Parity - I wish I could say this...
The [Jekyll SEO Tag plugin](https://github.com/jekyll/jekyll-seo-tag) is included by default (no need to run any special installation) 
to inject SEO and open graph metadata on docs pages. 
For information on how to configure SEO and open graph metadata visit the [Jekyll SEO Tag usage guide](https://jekyll.github.io/jekyll-seo-tag/usage/).
-->

### Quick start: Use as a GitHub Pages remote theme

1. Add Just the Docs to your Jekyll site's `_config.yml` as a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/)
```yaml
remote_theme: pmarsceill/just-the-docs
```
<small>You must have GitHub Pages enabled on your repo, one or more Markdown files, and a `_config.yml` file. [See an example repository](https://github.com/pmarsceill/jtd-remote)</small>

### Local installation: Use the gem-based theme

1. Install the Ruby Gem
    ```bash
    $ gem install just-the-docs
    ```
    ```yaml
    # .. or add it to your your Jekyll site’s Gemfile
    gem "just-the-docs"
    ```
2. Add Just the Docs to your Jekyll site’s `_config.yml`
    ```yaml
    theme: "just-the-docs"
    ```
3. _Optional:_ Initialize search data (creates `search-data.json`)
    ```bash
    $ bundle exec just-the-docs rake search:init
    ```
3. Run you local Jekyll server
    ```bash
    $ jekyll serve
    ```
    ```bash
    # .. or if you're using a Gemfile (bundler)
    $ bundle exec jekyll serve
    ```
4. Point your web browser to [http://localhost:4000](http://localhost:4000)

If you're hosting your site on GitHub Pages, [set up GitHub Pages and Jekyll locally](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) so that you can more easily work in your development environment.

### Configure Just the Docs

- [See configuration options](configuration.md)

---

## About the project

Zola Just the Docs is &copy; 2020 by [Jake Swenson](https://github.com/jakeswenson).

### License

Zola Just the Docs is distributed by an [MIT license](https://github.com/jakeswenson/zola-just-the-docs/blob/master/LICENSE).
This theme is based off of the [`Just the Docs`](https://github.com/pmarsceill/just-the-docs) theme by [pmarsceill](https://www.thismodernweb.com/).

### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. Read more about becoming a contributor in [our GitHub repo](https://github.com/pmarsceill/just-the-docs#contributing).

#### Thank you to the contributors of Just the Docs!

<ul class="list-style-none">
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
</ul>

### Code of Conduct

Just the Docs is committed to fostering a welcoming community.

[View our Code of Conduct](https://github.com/pmarsceill/just-the-docs/tree/master/CODE_OF_CONDUCT.md) on our GitHub repository.
