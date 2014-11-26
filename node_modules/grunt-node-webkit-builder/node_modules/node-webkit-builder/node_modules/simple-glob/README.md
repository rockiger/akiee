# simple-glob

> Simplified globbing, same as [Grunt][]

[![Build Status][]](http://travis-ci.org/jedmao/simple-glob)
[![Dependency Status][]](https://gemnasium.com/jedmao/simple-glob)
[![NPM version][]](http://badge.fury.io/js/simple-glob)
[![Views][]](https://sourcegraph.com/github.com/jedmao/simple-glob)

[![NPM][]](https://nodei.co/npm/simple-glob/)

The inspiration for this project was to simplify globbing patterns to work the same way many are familiar with (i.e., the globbing patterns in [Grunt][]). Instead of reinventing the wheel, I figured I'd just extract the code directly from [Grunt][]'s code base to get the exact same functionality that we know and love. Now, we can all enjoy the same globbing, even outside of [Grunt][]!

<i>Full disclaimer: The code contained in this project is 99% the original work of the Grunt.js team. I only renamed a couple things and moved things around a bit. I take no credit whatsoever and the original license is in tact, according to license conditions.</i>

<i>Note: The following documentation was taken mostly from [Grunt's Configuring Tasks][] page.</i>


## Globbing patterns

It is often impractical to specify all source filepaths individually, so simple-glob supports filename expansion (also know as globbing) via the built-in [node-glob][] and [minimatch][] libraries.

While this isn't a comprehensive tutorial on globbing patterns, know that in a filepath:

- `*` matches any number of characters, but not `/`
- `?` matches a single character, but not `/`
- `**` matches any number of characters, including `/`, as long as it's the only thing in a path part
- `{}` allows for a comma-separated list of "or" expressions
- `!` at the beginning of a pattern will negate the match

All most people need to know is that `foo/*.js` will match all files ending with `.js` in the `foo/` subdirectory, but `foo/**/*.js` will match all files ending with `.js` in the `foo/` subdirectory and all of its subdirectories.

Also, in order to simplify otherwise complicated globbing patterns, simple-glob allows arrays of file paths or globbing patterns to be specified. Patterns are processed in-order, with `!`-prefixed matches excluding matched files from the result set. The result set is uniqued.

For example:
```js
var glob = require('simple-glob');

// You can specify single files:
glob('foo/this.js');
// Or arrays of files:
glob(['foo/this.js', 'foo/that.js', 'foo/the-other.js']);
// Or you can generalize with a glob pattern:
glob('foo/th*.js');

// This single node-glob pattern:
glob('foo/{a,b}*.js');
// Could also be written like this:
glob(['foo/a*.js', 'foo/b*.js']);

// All .js files, in foo/, in alpha order:
glob(['foo/*.js']);
// Here, bar.js is first, followed by the remaining files, in alpha order:
glob(['foo/bar.js', 'foo/*.js']);

// All files except for bar.js, in alpha order:
glob(['foo/*.js', '!foo/bar.js']);
// All files in alpha order, but with bar.js at the end.
glob(['foo/*.js', '!foo/bar.js', 'foo/bar.js']);
```

For more on glob pattern syntax, see the [node-glob][] and [minimatch][] documentation.



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/jedmao/simple-glob/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


[Grunt]: http://gruntjs.com/
[Build Status]: https://secure.travis-ci.org/jedmao/simple-glob.png?branch=master
[Dependency Status]: https://gemnasium.com/jedmao/simple-glob.png
[NPM version]: https://badge.fury.io/js/simple-glob.png
[Views]: https://sourcegraph.com/api/repos/github.com/jedmao/simple-glob/counters/views-24h.png
[NPM]: https://nodei.co/npm/simple-glob.png?downloads=true
[Grunt's Configuring Tasks]: http://gruntjs.com/configuring-tasks
[node-glob]: https://github.com/isaacs/node-glob
[minimatch]: https://github.com/isaacs/minimatch
