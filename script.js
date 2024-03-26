function applyMissingReplyLabel() {
  var threads = GmailApp.search('label:sent before:2013/01/01 after:2012/01/01');
  var missingReplyLabel = GmailApp.getUserLabelByName('missingreply');

  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();

    // Check if the thread has only one message
    if (messages.length === 1) {
      // Apply the "missingreply" label to the thread
      missingReplyLabel.addToThread(thread);
    }
  }
}
