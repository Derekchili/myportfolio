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
    <section className="flex flex-col items-center">
  <h1 className="text-3xl border-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">Contact</h1>
  <form className="flex flex-col items-center px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl" onSubmit={handleSubmit}>
    <textarea
      className="my-2 px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-200 text-xl font-medium hover:text-2xl"
      name="yourself"
      placeholder="Tell me about you!"
      value={text}
      onChange={handleChangeText}
    />
    <input
      className="my-2 px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-200 text-xl font-medium hover:text-2xl"
      name="name"
      placeholder="Name"
      type="text"
      value={name}
      onChange={handleChangeName}
    />
    <input
      className="my-2 px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-200 text-xl font-medium hover:text-2xl"
      name="email"
      placeholder="Email"
      type="email"
      value={email}
      onChange={handleChangeEmail}
    />
    <button className="my-2" onClick={handleSubmit}>
      Submit
    </button>
  </form>
</section>
  )
}