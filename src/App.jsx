import "./App.css";

function CreateEventForm() {
  return (
    <form className="event-form">
      <h2>Preencha para criar o evento:</h2>
      <fieldset>
        <label htmlFor="">Nome do evento:</label>
        <input type="text" id="nome" placeholder="Summer dev hits"/>
      </fieldset>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo-tecboard.png"></img>
      </header>
      <section>
        <img src="/banner.png"></img>
      </section>
      <CreateEventForm />
    </main>
  );
}

export default App;
