const connectionUrl = "ws://localhost:5000/ws"

export const encodeString = async (input: string, onReceive: (value: string) => void, onClose: () => void): Promise<void> => {
  const socket = new WebSocket(connectionUrl);
  socket.onopen = function (event) {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
        alert("socket not connected");
    }
    var data = input;
    socket.send(data);
  };
  socket.onclose = function (event) {
    onClose()
    socket.close(1000, "Closing from client");
  };
  socket.onerror = function (event) {
    console.log(event)
  };;
  socket.onmessage = function (event) {
    onReceive(event.data);
  };
};
