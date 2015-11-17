//upload() uploads the blob or file sent to it as a POST request to the server along with the ID information
function upload(blobOrFile)
{
  var xhr = new XMLHttpRequest();

  //Get session_id, gender_id,age_id,accent_id
  var session_id = document.cookie.replace(/(?:(?:^|.*;\s*)session_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  var gender_id = document.cookie.replace(/(?:(?:^|.*;\s*)gender_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");;
  var age_id = document.cookie.replace(/(?:(?:^|.*;\s*)age_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");;
  var accent_id = document.cookie.replace(/(?:(?:^|.*;\s*)accent_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");;
  var sentence_id = document.getElementById('sentence').textContent;
  
  xhr.open('POST', "/record_page"+"?session_id="+session_id+"&gender_id="+gender_id+"&age_id="+age_id+"&accent_id="+accent_id+"&sentence_id="+sentence_id, true);
  xhr.onload = function(e) { console.log('Fetch succeded.') };

  // Listen to the upload progress.
  var progressBar = document.querySelector('progress');
  xhr.upload.onprogress = function(e)
  {
    if (e.lengthComputable)
    {
      progressBar.value = (e.loaded / e.total) * 100;
      progressBar.textContent = progressBar.value; // Fallback for unsupported browsers.
    }
  };
  
  //Send the blob
  xhr.send(blobOrFile);
}