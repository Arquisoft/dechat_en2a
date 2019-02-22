const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');

// Log the user in and out on click
const popupUri = 'popup.html';
$('#login  button').click(() => solid.auth.popupLogin({ popupUri }));
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
      $('#public').val(String(session.webId).replace(/profile.*$/,"")+"public");

    loadProfile();
  }
});

/**
 * Event function to create a new file
 */
async function createOwnFile(){
  //creates a new empty chat file
  SolidFileClient.updateFile($('#public').val()+'/chat01.txt','');
  //clears the screen messages
  $(".chat_container").empty();
}
$('#create').click(createOwnFile);

/**
 * Event function to send the message.
 */
async function send(){
  var texto=$("#content").val(); //get the text from the input box
  if(texto != ""){ //if there there are messages to send
    SolidFileClient.readFile($('#public').val()+'/chat01.txt').then(function(value) {
      //read the file, and update it with the nex messages
      SolidFileClient.updateFile($('#public').val()+'/chat01.txt',value + texto+"\n");
    });
    //append the message to the chat pannel
    $(".chat_container" ).append( generateMessage(texto));
    //set the input box to blank
    $("#content").val("");
  }          
}
$('#enviar').click(send);

/**
 * Auxiliary method to generate the messages in html
 * @param {*} text the message to be created
 */
function generateMessage(text){
  return "<div class=\"container\"><p>"+text+"</p></div>"
}

/**
 * Event function to retrieve the messages from the file
 */
async function readChatFile(){
  SolidFileClient.readFile($('#public').val()+'/chat01.txt').then(function(value) {
    $("#content").val(""); //empty the text area
    value.split("\n").forEach(function(line){
      //for each of the lines in the find, create a chat message.
      if(line != ""){
        $(".chat_container" ).append( generateMessage(line) );
      }
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