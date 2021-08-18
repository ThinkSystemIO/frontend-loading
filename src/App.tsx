import React, { useEffect, useState } from 'react';
import "./App.css";
import ThemeFab from './Components/Fab';
import Layout from './Components/Layout';
import Loading from './Components/Loading';
import { DARK, LIGHT, Theme } from './Styles/Types';

export const heartbeat = (func: (...args: any[]) => void, durationMilliseconds: number) => {
  return setInterval(func, durationMilliseconds)
}

export const checkIfServicesDeployed = async (): Promise<void> => {
  const paths = window.location.pathname.split("/")
  const cluster = paths[paths.length - 1]
  const s1 = await fetch(`./${cluster}/flow/api`)
  const s2 = await fetch(`./${cluster}/dashboard`)
  s1.status === 200 && s2.status === 200 && window.location.replace(`./${cluster}/dashboard`)
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(DARK)
  const toggleTheme = () => setTheme(theme === LIGHT ? DARK : LIGHT)

  useEffect(() => {
    const interval = heartbeat(checkIfServicesDeployed, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div key={theme}>
      <Layout theme={theme} >
        <Loading theme={theme} />
      </Layout>
      <ThemeFab theme={theme} onClick={toggleTheme} />
    </div>
  );
}

export default App;
