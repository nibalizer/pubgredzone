$(document).ready(function() {
  updateIframe();
  setInterval(updateIframe, 15000);

  /**
   * Updates webpage on a 15s interval if a new best stream is determined.
   */
  function updateIframe() {
    $.getJSON("/current", function(data) {
      let currentStream = $("#twitch_iframe").prop("src");
      let currentAlive = parseFloat($("#alive_count").text());
      console.log(currentStream);
      if (currentStream != data["stream_url"]) {
        if (currentAlive > 15) {
          $("#twitch_iframe").prop("src", data["stream_url"]);
          $("#streamer_name").text(data["stream_name"] + " - " + data["alive"]);
        }
      }
    });
  }
});
