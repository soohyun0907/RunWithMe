# Diacriticless
Removes all diacritics from a text.

## Installation
~~~
npm install diacriticless
~~~

## Documentation
~~~ javascript
diacriticless(text)
~~~

  * text `String`
  * returns `String`

## Usage
~~~ javascript
var diacriticLess = require('diacriticless');

console.log(diacriticLess('Ɲö dÍãçȑĩŧiC'));
~~~

This will print the following
~~~
No dIacritiC
~~~

## License
~~~
MIT
~~~