 import chatMessage from './modules/chatMessage.js';
 
 const socket = io();

 function logConnect({sID, message}) {
     console.log(sID, message);
     vm.socketID = sID;
 }

 function appendMessage(message) {
     vm.messages.push(message)
 }

 // create Vue instance
 const vm = new Vue({
    data: {
        socketID: "",
        nickname: "",
        message: "",
        messages: []
    },

    methods: {
        dispatchMessage() {
            // emit message event from the client side
            socket.emit('chat message', { content: this.message, name: this.nickname || "Anonymous"});

            // reset the message field
            this.message = "";
        }
    },
    components: {
        newmessage: chatMessage
    }
 }).$mount(`#app`);

 socket.on('connected', logConnect);
 socket.on('chat message', appendMessage);
 socket.on('disconnect', appendMessage);

