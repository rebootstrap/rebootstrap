# Rebootstrap Changelog

## 0.1.0

- `reset` module uses new `normalize.less` and `print.less`
- `layouts` module removed–responsive layouts are built into Bootstrap 3
- `util` module removed and new `utilities.less` is globally included by
  `Dependency_rebootstrap-less`, the same as mixins.less
- `fixMixins` function and supporting code in `Dependency_rebootstrap-less` was
  removed as all expressions in `mixins.less` are actual functions in Bootstrap
  3
