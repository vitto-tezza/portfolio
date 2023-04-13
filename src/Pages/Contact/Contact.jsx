import React from "react";
import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [response, setResponse] = useState("");
  const [datos, setDatos] = useState({
    inp_name: "",
    inp_email: "",
    inp_mensaje: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    fetch("https://formsubmit.co/ajax/vittorio.tezza93@gmail.com", {
      method: "post",
      body: new FormData(event.target),
    })
      .then((res) =>
        res.ok ? setResponse("Mensaje enviado") : Promise.reject(res)
      )
      .finally(() => {
        setDatos({
          inp_name: "",
          inp_business: "",
          inp_mesage: "",
        });
      });
  };

  return (
    <div className="Contact" id="Contacto">
      <div className="Contact-Container">
        <div className="Contact-Container__Title">Message</div>
        <form
          method="post"
          action=""
          id="form"
          onSubmit={enviarDatos}
          className="Contact-Container__Form"
        >
          <input
            className="Contact-Container__Form--Input"
            type="text"
            name="inp_name"
            onChange={handleInputChange}
            value={datos.inp_name}
            required
            placeholder="Name and Surname"
          ></input>
          <input
            className="Contact-Container__Form--Input"
            type="text"
            name="inp_business"
            onChange={handleInputChange}
            value={datos.inp_business}
            required
            placeholder="Affair"
          ></input>
          <textarea
            className="Contact-Container__Form--TextArea"
            value={datos.inp_mesage}
            name="inp_mesage"
            onChange={handleInputChange}
            required
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            id="submit"
            className="Contact-Container__Form--Submit"
          >
            ENVIAR
          </button>
          <div className="Contact-response">
            <div className="Contact-response-text" id="contact-response">
              {response}
            </div>
          </div>
        </form>
        <div className="Contact-Container_numYmail">
          <div className="Contact-Container_numYmail--num">
            +54-9-11-3638-6997
          </div>
          <div className="Contact-Container_numYmail--mail">
            vittorio.tezza93@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
