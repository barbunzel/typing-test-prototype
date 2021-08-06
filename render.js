const renderIn = element => data => {
  element.innerText = data;
};

const appendTextTo = element => text => {
  element.innerText += text;
};

const resetContent = element => () => {
  element.innerText = '';
};

const resetValue = element => () => {
  element.value = '';
};

const focus = element => () => {
  element.focus();
};
