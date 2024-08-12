var xhr = new XMLHttpRequest();

xhr.upload.addEventListener('progress', function(e) {
  if (e.lengthComputable) {
    var percentComplete = (e.loaded / e.total) * 100;
    console.log('Upload progress: ' + percentComplete + '%');
  }
});

xhr.open('POST', 'upload.php', true);

// Set up any other necessary event listeners and send the request
