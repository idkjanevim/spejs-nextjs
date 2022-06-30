import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contactpage() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || subject == "" || msg == "") {
      console.log("You need to fill all of the input");
      return;
    }

    emailjs
      .sendForm("gmail", "", form.current, "")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="flex justify-center ">
      <div className="mt-20">
        <h1 className="text-center mb-20 font-semibold text-4xl">
          Contact Me!
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-2 w-[800px]"
        >
          <div className="flex flex-col mx-14 h-min">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="text-black rounded-md"
            />
          </div>

          <div className="flex flex-col mx-14 h-min">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              className="text-black rounded-md"
            />
          </div>

          <div className="flex flex-col mx-14 col-span-2 h-min">
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              name="subject"
              className="text-black rounded-md"
            />
          </div>

          <div className="flex flex-col mx-14 col-span-2 h-min">
            <label>Message</label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              name="msg"
              className="resize-none text-black"
            />
            <input
              type="submit"
              value="Send"
              className="mt-14 bg-white text-black hover:bg-slate-700 hover:text-white ease-linear duration-200 h-10 w-[30%] cursor-pointer rounded-3xl text-center self-center font-semibold"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactpage;
