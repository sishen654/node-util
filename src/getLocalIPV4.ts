import os from "os"

export default function getLocalIPV4() {
  const interfaces = os.networkInterfaces()
  let IPAdress = '';
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    if (iface) {
      for (let i = 0; i < iface.length; i++) {
        let alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          IPAdress = alias.address;
        }
      }
    }
  }
  return IPAdress
};
