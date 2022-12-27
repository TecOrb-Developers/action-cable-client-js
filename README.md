## Action Cable Client - Javascript
This client is implemented for developers to test action cable broadcasts via server using any browser. This is implemented by using Javascript Action Cable SDK.

### Primary use
This project is used to test below:
- Action cable connections
- Channels subscriptions
- Received notifications
- Broadcast on the channel from an authorized client

### How to use it?

Here are simple steps to use this client on your browser:

1. Clone/Download this repository to your system

2. Open *client.html* in your browser (Tested in Chrome, Safari, Firefox)

3. Remove pre-filled values from required inputs (Set for example)

4. Add your input values (You will receive these values from your server team)

5. Click on connect. 

#### Required inputs

The below parameters will be given by your server team to input here.

- Your application's Action Cable base URL
- Query parameter key name for an access token (for authentication of logged-in user)
- Query parameter value for the access token (Received at login - for logged-in user authentication)
- Channel Name which you want to subscribe for testing

#### Check Response data:

The response will be displayed in the below text area. You can clear this up to see a new response at the top.

Also, you can check the broadcasting of a message by a given form at the bottom and your broadcasted message will be received in your response area. 

### Note:
This client is implemented just for internal testing purposes for our team. We will not recommend using this in any of your live project's codebase because we have implemented very limited security parameters which were required for our testing environment.

In case, if you want to enhance this for professional use please let us know, we will provide our full support for you.


