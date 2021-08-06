const { tap, pluck, filter, buffer, map } = rxjs.operators;

const inputDiv = document.querySelector('#input');
const result = document.querySelector('.result > pre');

const onKeyUp = fromEvent(inputDiv, 'keyup');
const globalOnKeyUp = fromEvent(document, 'keyup');

const isSpace = char => char === ' ';

const isCharacterOrSpace = char => char.match(/^[a-zA-Z\s]{1}$/g);

const isEscape = char => char === 'Escape';

const joinChars = chars => chars.join('');

const keyPressed = onKeyUp
  .pipe(
    pluck('key'),
  );

const characterTyped = keyPressed
  .pipe(
    filter(isCharacterOrSpace),
  );

const spaceTyped = keyPressed
  .pipe(
    filter(isSpace),
  );

const escapeTyped = globalOnKeyUp
  .pipe(
    pluck('key'),
    filter(isEscape),
  );

const wordTyped = characterTyped
  .pipe(
    buffer(spaceTyped),
    map(joinChars),
  );


escapeTyped.subscribe(all(resetContent(result), resetValue(inputDiv), focus(inputDiv)));

wordTyped.subscribe(appendTextTo(result));
