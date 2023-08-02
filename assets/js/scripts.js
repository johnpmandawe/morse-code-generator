$(document).ready(function () {
  const morseCode = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----',
  };
  // copy functionality from w3 schools
  function copyToClipboard(element) {
    let _value = element.text();
    if (!_value) {
      return;
    }
    // Select the element
    element.select();

    // Copy the text inside the element
    navigator.clipboard.writeText(_value);
  }
  const morseCodeKeys = Object.keys(morseCode);
  // handle form submit
  $('form#form-generator').on('submit', function (e) {
    e.preventDefault();
    let _this = $(this);
    let _input = _this.find('input');
    let _val = _input.val();
    let _result = '';
    let _resultWrapper = _this.find('.result-wrapper');
    if (!_val) {
      alert('Empty field!');
    } else {
      for (const char of _val) {
        let _char = char.toLowerCase();
        if (morseCodeKeys.includes(_char)) {
          _result += morseCode[_char];
        } else {
          _result += _char;
        }
      }
    }
    _resultWrapper.empty();
    _resultWrapper.append(`<p class="mt-3 text-danger">RESULT:</p>`);
    _resultWrapper.append(`<h5 id="result-content">${_result}</h5>`);
    _resultWrapper.append(
      `<button type="button" class="btn btn-primary copy-btn">Copy</button>`
    );
  });
  $('body').on('click', '.copy-btn', function () {
    let $this = $(this);
    let textToCopy = $('h5#result-content');
    copyToClipboard(textToCopy);
    $this.text('Copied');
  });
});
