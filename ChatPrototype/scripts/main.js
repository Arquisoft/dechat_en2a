const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');

// Log the user in and out on click
const popupUri = 'popup.html';
$('#login  button').click(() => solid.auth.popupLogin({ popupUri }));
$('#logout button').click(() => solid.auth.logout());

// Update components to match the user's login status
solid.auth.trackSession(session => {
  const loggedIn = !!session;
  $('#login').toggle(!loggedIn);
  $('#logout').toggle(loggedIn);
  if (loggedIn) {
    $('#user').text(session.webId);
    // Use the user's WebID as default profile
    if (!$('#profile').val())
      $('#profile').val(session.webId);
    if (!$('#public').val())
      $('#public').val(String(session.webId).replace(/profile.*$/, "") + "public");

    loadProfile();
  }
});

/**
 * Event function to create a new file
 */
async function createOwnFile() {
  //creates a new empty chat file
  emptyChat($('#public').val() + '/chat01.json');
  emptyChat($('#public').val() + '/chat01.txt'); //just in case
  //clears the screen messages
  $(".chat_container").empty();
}
$('#create').click(createOwnFile);

/**
 * Creates a new chat object and stores it in JSON format
 * 
 * @param {*} fileName 
 */
function emptyChat(fileName) {
  var emptyChat = new Object();
  emptyChat.chatNo = 1;
  emptyChat.messages = new Array();
  SolidFileClient.updateFile(fileName, JSON.stringify(emptyChat));
}

/**
 * Event function to send the message.
 */
async function send() {
  var texto = $("#content").val(); //get the text from the input box
  if (texto != "") { //if there there are messages to send
    SolidFileClient.readFile($('#public').val() + '/chat01.json').then(function (value) {
      var chat = JSON.parse(value); //Parse the content
      chat.messages.push(getMessageObject(texto)); //Append the new message
      SolidFileClient.updateFile($('#public').val() + '/chat01.json', JSON.stringify(chat)); //Store it
      SolidFileClient.updateFile($('#public').val() + '/chat01.txt', JSON.stringify(chat)); //testing purposes
    });
    //append the message to the chat pannel
    $(".chat_container").append(generateMessage(texto));
    //set the input box to blank
    $("#content").val("");
  }
}
$('#enviar').click(send);

/**
 * Creates a new message object from a specified content
 * 
 * @param {*} contents the content of the message
 */
function getMessageObject(contents) {
  var messageObj = new Object();
  messageObj.message = contents;
  messageObj.timestamp = new Date().toLocaleString();
  return messageObj;
}

/**
 * Auxiliary method to generate the messages in html
 * @param {*} text the message to be created
 */
function generateMessage(text) {
  return "<div class=\"container\"><p>" + text + "</p></div>"
}

/**
 * Event function to retrieve the messages from the file
 */
async function readChatFile() {
  SolidFileClient.readFile($('#public').val() + '/chat01.json').then(function (value) {
    $("#content").val(""); //empty the text area
    $(".chat_container").empty(); //dont show same messages twice
    var chat = JSON.parse(value); //parse JSON contents to object
    chat.messages.forEach(function (msg) {
      $(".chat_container").append(generateMessage(msg.message));
    });
  });
}
$('#readFile').click(readChatFile);

/**
 * Event function view profile details
 */
async function loadProfile() {
  // Set up a local data store and associated data fetcher
  const store = $rdf.graph();
  const fetcher = new $rdf.Fetcher(store);

  // Load the person's data into the store
  const person = $('#profile').val();
  await fetcher.load(person);

  // Display their details
  const fullName = store.any($rdf.sym(person), FOAF('name'));
  $('#fullName').text(fullName && fullName.value);

  // Display their friends
  const friends = store.each($rdf.sym(person), FOAF('knows'));
  $('#friends').empty();
  friends.forEach(async (friend) => {
    await fetcher.load(friend);
    const fullName = store.any(friend, FOAF('name'));
    $('#friends').append(
      $('<li>').append(
        $('<a>').text(fullName && fullName.value || friend.value)
          .click(() => $('#profile').val(friend.value))
          .click(loadProfile)));
  });
}
$('#view').click(loadProfile);