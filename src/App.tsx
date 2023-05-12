import { FormEvent, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { encodeString } from './services/encode';
import styles from './App.module.scss'

function App() {
  const [encodedString, setEncodedString] = useState<string>('');

  const onReceiveText = (value: string) => {
    setEncodedString(prev => prev += value);
  }

  const onConvert = (event: FormEvent) => {
    event.preventDefault();
    const inputElement = (event.target as HTMLFormElement)[0] as HTMLInputElement;
    encodeString(inputElement.value, onReceiveText);
  }

  return (
    <div className={styles.App}>
      <main>
        <h1>Base64 Encoder</h1>
        <InputGroup className="mb-3">
          <Form.Control
            as="textarea"
            aria-label="Encoded Text"
            readOnly
            value={encodedString}
          />
        </InputGroup>
        <Form onSubmit={onConvert}>
          <InputGroup>
            <Form.Control
              placeholder="Please enter any text"
              aria-label="Text"
              aria-describedby="basic-addon1"
            />
            <Button type="submit">
              Convert
            </Button>
          </InputGroup>
        </Form>
      </main>
    </div>
  )
}

export default App
