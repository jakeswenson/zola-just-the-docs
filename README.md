# Zola `Just the Docs` theme
This is a port of the wonderful [`Just the Docs`][jtd] Jekyll theme to [Zola].

[See it in action][demo].

[demo]: https://zola-jtd-demo.jakeswenson.now.sh/

[jtd]: https://pmarsceill.github.io/just-the-docs/
[Zola]: https://www.getzola.org/documentation/getting-started/overview/

# Installation

```bash
git remote add zola-jtd git@github.com:jakeswenson/zola-just-the-docs.git
git subtree add --prefix themes/zola-just-the-docs zola-jtd master
```

# Update

```bash
git fetch zola-jtd
git subtree merge --prefix themes/zola-just-the-docs zola-jtd/master
```
