ActionCable.startDebugging()
window.App = {}
function current_time(){
	return new Date();
}
function start_connection() {
	$('#response_area').val("Please wait, connecting....")
	base_url = $('#base_cable_url').val().trim()
	query_key = $('#query_key').val().trim()
	query_value = $('#query_value').val().trim()
	cable_endpoint = base_url+"?"+query_key+"="+query_value
	channel_name  = $('#channel_name').val().trim()
	console.log(cable_endpoint)
	$('#endpoint').html("Requesting on: "+cable_endpoint)
	window.App.cable = ActionCable.createConsumer(cable_endpoint)
	window.App.chatChannel = window.App.cable.subscriptions.create({channel: channel_name}, {
	  // ActionCable callbacks
	  connected: function() {
	    console.log(this.identifier)
	    console.log("connected")
	    $('#response_area').val("connected at "+current_time())
	  },
	  disconnected: function() {
	  	console.log(this.identifier)
	    console.log("disconnected")
	    $('#response_area').val("disconnected at "+current_time())
	  },
	  rejected: function() {
	  	console.log(this.identifier)
	    console.log("rejected")
	    $('#response_area').val("rejected at "+current_time())
	  },
	  received: function(data) {
	  	console.log(this.identifier)
	  	console.log(data)
	  	prev_value = $('#response_area').val()
	  	$('#response_area').val(prev_value+ " ;;;;; New Received: " +JSON.stringify(data)+" >>>>> time: "+current_time())
	  },
	  sendMessage: function(messageBody) {
	    this.perform('receive', { body: messageBody });
	  }
	});
}

$('#send_msg').on("click", function(){
	msg = $('#typed_msg').val()
	console.log("sending message: "+msg)
	window.App.chatChannel.sendMessage(msg);
})

// Default values
$('#base_cable_url').val("http://localhost:3000/cable")
$('#query_key').val("access_token")
$('#query_value').val("eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJNeSBBcHAiLCJpYXQiOjE2NjQ1Mjg0MzMsImp0aSI6ImY4MmNiYWMzLWZjMTEtNDMzMi04MDhmLTQ2N2M5MzAyODE1NiIsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoidGVzdEBvbmxpbmUuY29tIn19.v0hW5HbGqrFU6gUfsJnR0gFtKVcANNnhWxdDLLFLWpGb7ntm9fGYUEE7ODmO1fe0ealsZLKK6Xg01NiFcTBMew")
$('#channel_name').val("NotifyChannel")

$('#connection_request').on("click", function(){
	
	// $('#connection_status').text(cabl_url)
	start_connection()

})