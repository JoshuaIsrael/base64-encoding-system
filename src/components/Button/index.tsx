import { Button as BootstrapButton, ButtonProps as BoostrapButtonProps, Spinner, } from 'react-bootstrap'
import styles from './styles.module.scss'

interface ButtonProps extends BoostrapButtonProps {
  loading?: boolean,
}

export default function Button ({ loading = false, ...props}: ButtonProps) {
  return (
    <BootstrapButton type="submit" disabled={loading} {...props}>
      { loading ? <Spinner className={styles.Spinner} size='sm'/> : null}
      { props.children }
    </BootstrapButton>
  )
}