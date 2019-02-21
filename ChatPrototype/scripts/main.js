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
  }
});
//onclick="fileClient.createFile('https://luispastrana.inrupt.net/public/content.json','hola q tal')"
$('#create').click(async function createOwnFile(){
  SolidFileClient.createFile($('#public').val()+'/chat01.txt','hola q tal');
});

$('#enviar').click(async function enviar(){
        
          var texto=$("#content").val();
          SolidFileClient.updateFile($('#public').val()+'/chat01.txt',texto);
          
});


$('#readFile').click(async function readChatFile(){
  //$('#content').val(SolidFileClient.readFile($('#public').val()+'/chat01.txt'));
  //console.log(SolidFileClient.readFile($('#public').val()+'/chat01.txt'));
  SolidFileClient.readFile($('#public').val()+'/chat01.txt').then(function(value) {
    $('#content').val(value);
  })
});
$('#view').click(async function loadProfile() {
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
});
