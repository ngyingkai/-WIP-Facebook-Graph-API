function postRequest() {
  const Http = new XMLHttpRequest();
  let message = 'Sixth Post!';
  message2 = message.replace(' ', '%');
  let access_token = ''
  const url = `https://graph.facebook.com/103769554383047/feed?message=${message}&access_token=${access_token}`;
  Http.open("POST", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}

// postRequest()

let message = 'Fourth Post';
message2 = message.replace(' ', '%');

console.log(message2)

postRequest()
