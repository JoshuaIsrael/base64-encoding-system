import { FormEvent, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { encodeString } from './services/encode';
import { Button } from './components';
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
      <main className="d-flex flex-column w-50 h-75 p-4 shadow-sm p-3 mb-5 bg-white rounded">
        <h1 className="h3">Base64 Encoder</h1>
        <InputGroup className="h-100 mb-3">
          <Form.Control
            readOnly
            className="p-3"
            as="textarea"
            value={encodedString}
            style={{ resize: 'none' }}
            disabled={true}
            aria-label="Encoded Text"
          />
        </InputGroup>
        <Form className="d-flex" onSubmit={onConvert}>
          <InputGroup>
            <Form.Control
              placeholder="Please enter any text"
              aria-label="Text"
              disabled={loading}
              required
            />
            <Button loading={loading}>
              { loading ? 'Loading...' : 'Convert' }
            </Button>
          </InputGroup>
        </Form>
      </main>
    </div>
  )
}

export default App
