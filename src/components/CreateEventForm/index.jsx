import "./eventForm.style.css";
import { FormTitle } from "../FormTitle";
import { InputField } from "../InputField";
import { Label } from "../Label";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { List } from "../List";

export function CreateEventForm() {
  return (
    <form className="event-form">
      <FormTitle>Preencha para criar o evento:</FormTitle>
      <div className="fields">
        <FormField>
          <Label htmlFor="eventName">Nome do evento:</Label>
          <InputField
            type="text"
            id="eventName"
            placeholder="Summer dev hits"
          />
        </FormField>
        <FormField>
          <Label htmlFor="eventDate">Data do evento:</Label>
          <InputField type="date" id="eventDate" placeholder="XX/XX/XXXX" />
        </FormField>
        <FormField>
          <Label htmlFor="eventTheme">Tema do evento:</Label>
          <List/>
        </FormField>
      </div>
      <div className="actions">
        <Button>Criar evento</Button>
      </div>
    </form>
  );
}
