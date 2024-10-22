"use client";  // Agregar esta línea

import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function Mural() {
  const [textFild, setTextFild] = useState("");
  const [mensajes, setMensaje] = useState<string[]>([]);
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);  // Usar useRef para el socket

  useEffect(() => {
    // Conectar al servidor WebSocket en localhost
    socketRef.current = io('http://localhost:3005');
    
    socketRef.current.on("connect", () => {
      console.log("Conectado al servidor WebSocket");
    });

    // Escuchar mensajes del servidor
    socketRef.current.on('messageFromServer', (data) => {
      console.log('Message from server:', data);
    });

    socketRef.current.on("newMessage", (data) => {
      setMensaje((prevMensajes) => [...prevMensajes, data]);
    });

    // Limpiar el socket cuando el componente se desmonte
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlerOnChange = (evt: any) => {
    evt.preventDefault();
    const { value } = evt.target;
    setTextFild(value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlerOnSubmit = (evt: any) => {
    evt.preventDefault();
    const value = textFild;

    if (value.trim() === "") return;  // Evitar agregar mensajes vacíos

    // Limpiar el input después de enviar el mensaje
    setTextFild("");

    // Asegúrate de que el socket esté definido antes de emitir
    if (socketRef.current) {
      socketRef.current.emit("mensajeMural", value);
    }
  };

  return (
    <section className="flex flex-col w-11/12 items-center mt-12">
      <h3 className="text-center absolute">Mural de personas que pasaron por aquí</h3>
      <div className="lg:w-2/4 w-full h-96 bg-gray-900 mt-5 relative">
        
        <ul className="overflow-y-auto h-full">
          {mensajes.map((mensaje, index) => (
            <li key={index} className="text-white p-2">{mensaje}</li>
          ))}
        </ul>

        {/* Formulario para enviar mensajes */}
        <form className="absolute bottom-0 w-full flex" onSubmit={handlerOnSubmit}>
          <input 
            className="text-black text-base w-10/12 p-1" 
            value={textFild} 
            type="text" 
            name="textInput" 
            id="muralInput" 
            onChange={handlerOnChange}
            placeholder="Escribe un mensaje..."
          />
          <button className="w-2/12 p-1 hover:bg-gray-800 transition-all bg-red-700" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
