# NomenJS
 that library which gives you random names; everytime.

### Installation and Usage

- Download and include nomen.min.js
- In script,
```js
var funkyName = generateNick();
```
- Use ```funkyName``` anywhere you want.

### Options
```js
generateNick(count, type, adjectives, names)
```
  * count - number of adjectives(prefixes) per name
  * type - whether you want a slug/name/title
  * adjectives - use a list of user supplied adjectives
  * names - use a list of user supplied names
