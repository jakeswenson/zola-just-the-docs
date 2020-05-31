# Zola `Just the Docs` theme
This is a port of the wonderful [`Just the Docs`][jtd] Jekyll theme to [Zola].

[See it in action][demo].

[demo]: https://zola-jtd-demo.jakeswenson.now.sh/

[jtd]: https://pmarsceill.github.io/just-the-docs/
[Zola]: https://www.getzola.org/documentation/getting-started/overview/

# Installation

[install-zola]: https://www.getzola.org/documentation/getting-started/installation/
[init]: https://www.getzola.org/documentation/getting-started/overview/#initialize-site

Start with [installing zola][install-zola] and [create a new site][init] if you haven't.

Next pull in the lastest version of this theme using `git subtree`:

```bash
git remote add zola-jtd git@github.com:jakeswenson/zola-just-the-docs.git
git subtree add --prefix themes/just-the-docs zola-jtd master
```

[using-a-theme]: https://www.getzola.org/documentation/themes/installing-and-using-themes/#using-a-theme

and finally set your [theme variable][using-a-theme] in your `config.toml` to `just-the-docs`

```toml
theme = 'just-the-docs'
```

# Update

```bash
git fetch zola-jtd
git subtree merge --prefix themes/just-the-docs zola-jtd/master
```
