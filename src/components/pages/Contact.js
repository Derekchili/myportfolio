import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeText(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {

    event.preventDefault();

    if (!email || !email.match(/^(.*)@(.*)\.(.*)/)) {
      alert('email not valid');
    } else {
        alert('thank you for your submission')
    }
    setEmail('');
    setName('');
  }

  return (
    <section>
      <h1>
        Contact
      </h1>
      <form
        
        onSubmit={handleSubmit}
      >
        <textarea value={text} onChange={handleChangeText}/>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleChangeName}
        
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          
        />

        <button
          
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </section>
  );
}