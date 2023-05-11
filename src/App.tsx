import { Button, Form, InputGroup } from 'react-bootstrap'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <main>
        <h1>Base64 Encoder</h1>
        <InputGroup className="mb-3">
          <Form.Control as="textarea" aria-label="With textarea" readOnly />
        </InputGroup>
        <InputGroup>
          <Form.Control
            placeholder="Please enter any text"
            aria-label="Text"
            aria-describedby="basic-addon1"
          />
          <Button>
            Convert
          </Button>
        </InputGroup>
      </main>
    </div>
  )
}

export default App
