import { BASE_WEBSOCKET_CONNECTION } from ".";
import { showToast } from "src/components/Toast";

export const encodeString = async (input: string, onReceive: (value: string) => void, onClose: () => void): Promise<void> => {
  const socket = new WebSocket(BASE_WEBSOCKET_CONNECTION + 'encode');
  socket.onopen = function () {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      showToast('Failed to connect to the server.', 'danger')
    }
    socket.send(input);
  };
  socket.onclose = function (this: WebSocket, event: CloseEvent) {
    onClose()
    if(event.wasClean){
      showToast('Encoding was successful.', 'success')
    }
    socket.close(1000, "Closing from client");
  };
  socket.onerror = function () {
    showToast('An error has occurred. Please try again.', 'danger')
  };
  socket.onmessage = function (event) {
    onReceive(event.data);
  };
};
