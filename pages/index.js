import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { green, red, yellow } from '@material-ui/core/colors';

const ButtonSuccess = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const ButtonError = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const ButtonWarning = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Button</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Custom <a href="https://material-ui.com/components/buttons/" target="_blank">Button</a>
        </h1>

        <p className={styles.description}>
          Belajar membuat tombol sederhana meggunakan module{' '}
          <code className={styles.code}>material-ui</code>
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Success</h3>
            <ButtonSuccess>Success</ButtonSuccess>
            <p>Tombol yang biasa digunakan untuk melakukan submit.</p>
          </div>

          <div className={styles.card}>
            <h3>Error</h3>
            <ButtonError>Error</ButtonError>
            <p>Tombol yang biasa digunakan untuk menghapus data.</p>
          </div>

          <div className={styles.card}>
            <h3>Warning</h3>
            <ButtonWarning>Warning</ButtonWarning>
            <p>Tombol yang umumnya memberikan peringatan terlebih dahulu.</p>
          </div>

          <div className={styles.card}>
            <h3>Primary</h3>
            <Button variant="contained" color="primary">Primary</Button>
            <p>Tombol utama yang bisa digunakan untuk berbagai keperluan.</p>
          </div>
          
          <div className={styles.card}>
            <h3>Default</h3>
            <Button variant="contained">Default</Button>
            <p>Tombol polosan yang belum diberikan elemen lain.</p>
          </div>
          
          <div className={styles.card}>
            <h3>Disabled</h3>
            <Button variant="contained" disabled>Disabled</Button>
            <p>Tombol yang dinonaktifkan dan tidak bisa digunakan.</p>
          </div>
      
        </div>
      </main>
    </div>
  )
}
