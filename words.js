const { fromEvent, of } = rxjs;

const textDiv = document.querySelector('.text');

const onLoad = fromEvent(document, 'load');
const words = of(rawWords);

words
  .subscribe(renderIn(textDiv));
