const genId = function genId() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 8; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const cleanMessage = function cleanMessage(message) {
  message = message.replace(/\.(?!\d)/g, ' ');
  message = message.replace(/,(?=\S)/g, ', ');
  message = message.replace(/\s,\s/g, ' ');
  // these used to be bursted but are not anymore.
  message = message.replace(/([a-zA-Z]),\s/g, '$1 ');
  message = message.replace(/"(.*)"/g, '$1');
  message = message.replace(/\(/g, '');
  message = message.replace(/\)/g, '');
  message = message.replace(/\s"\s?/g, ' ');
  message = message.replace(/\s'\s?/g, ' ');
  message = message.replace(/\s?!\s?/g, ' ');
  message = message.replace(/\?\s?/g, ' ');
  message = message.replace(/[a-z](:)/gi, function(match, p1) {
    return match.replace(/:/,"");
  });
  return message;
};

export default { cleanMessage, genId };
