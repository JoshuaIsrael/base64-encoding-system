import { FormEvent, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { encodeString } from './services/encode';
import styles from './App.module.scss'

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [encodedString, setEncodedString] = useState<string>('');

  const onClose = () => {
    setLoading(false)
  }

  const onReceiveText = (value: string) => {
    setEncodedString(prev => prev += value);
  }

  const onConvert = (event: FormEvent) => {
    event.preventDefault();
    setEncodedString('');
    setLoading(true)
    const inputElement = (event.target as HTMLFormElement)[0] as HTMLInputElement;
    encodeString(inputElement.value, onReceiveText, onClose);
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
            disabled={true}
          />
        </InputGroup>
        <Form onSubmit={onConvert}>
          <InputGroup>
            <Form.Control
              placeholder="Please enter any text"
              aria-label="Text"
              aria-describedby="basic-addon1"
              disabled={loading}
            />
            <Button type="submit" disabled={loading}>
              Convert
            </Button>
          </InputGroup>
        </Form>
      </main>
    </div>
  )
}

export default App
