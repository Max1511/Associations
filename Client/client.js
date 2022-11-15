const socket = io('http://localhost:5500');

socket.emit("data", {data1: 1, data2: 2});