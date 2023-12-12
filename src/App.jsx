import { useState, useEffect } from 'react';
import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Select, SelectItem, Button } from "@nextui-org/react";
import { procesadores, graficas, juegos, windows, RAM,
  Almacenamiento } from './data';

const App = () => {
  const [selectSO, setSelectSO] = useState('');
  const [selectProcesador, setSelectProcesador] = useState('');
  const [validPro, setValidPro] = useState(false);
  const [selectGrafica, setSelectGrafica] = useState('');
  const [selectGame, setSelectGame] = useState('');
  const [selectRAM, setSelectRAM] = useState('');
  const [selectALM, setSelectALM] = useState('');

  const regexIntel = /^(i3 12345 k|i7 6789 s|i9 456 t)$/i;

  const handleSelectSO = (e) => { 
    const inputValue = e.target.value;
    setSelectSO(inputValue); 
  };

  const handleSelectProcesador = (e) => {
    const inputValue = e.target.value;
    setSelectProcesador(inputValue);
    setValidPro(regexIntel.test(inputValue));
  };

  useEffect(() => {
    // Puedes realizar acciones adicionales o llamadas a API aquí
  }, [selectProcesador]); // Dependencia para el efecto

  const handleSelectGrafica = (e) => {
    setSelectGrafica(e.target.value);
  };

  const handleSelectGame = (e) => {
    setSelectGame(e.target.value);
  };

  const handleSelectRAM = (e) => {
    setSelectRAM(e.target.value);
  };

  const handleSelectALM = (e) => {
    setSelectALM(e.target.value);
  };

  const [ textResult, setTextResult] = useState(null);

  const comprobar = () => {
    const gameSelected = juegos.filter(game => game.name === selectGame)[0];
    if(gameSelected.windows.includes(selectSO)){
      if(validPro){
        if(gameSelected.intel.includes(selectProcesador)){
          if(gameSelected.RAM.includes(selectRAM)){
            if(gameSelected.Almacenamiento.includes(selectALM)){
              if(gameSelected.graficas.includes(selectGrafica)){
                setTextResult("✅ Su PC es apto para jugar ✅");
              }else{
                setTextResult("❌ Su gpu no no es apta para jugar ❌");
              }
            }else{
              setTextResult("❌ Su PC no tiene suficiente espacio ❌");
            }
          }else{
            setTextResult("❌ Su RAM no es apta para jugar ❌");
          }
        }else{
          setTextResult("❌ Su procesador no es apto para jugar ❌");
        }
      }else{
        if(gameSelected.AMD.includes(selectProcesador)){
          if(gameSelected.RAM.includes(selectRAM)){
            if(gameSelected.Almacenamiento.includes(selectALM)){
              if(gameSelected.graficas.includes(selectGrafica)){
                setTextResult("✅ Su PC es apto para jugar ✅");
              }else{
                setTextResult("❌ Su gpu no no es apta para jugar ❌");
              }
            }else{
              setTextResult("❌ Su PC no tiene suficiente espacio ❌");
            }
          }else{
            setTextResult("❌ Su RAM no es apta para jugar ❌");
          }
        }else{
          setTextResult("❌ Su procesador no es apto para jugar ❌");
        }
      }
    }else{
      setTextResult("❌ Su sistema operativo no es apto para jugar ❌");
    }
  }

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-around p-5">
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 gap-y-7">
            <Select
              color='danger'
              selectedKeys={[selectSO]}
              onChange={handleSelectSO}
              label="SO:"
              className="max-w-xs"
            >
              {windows.map((proc) => (
                <SelectItem key={proc} value={proc}>
                {proc}
                </SelectItem>
              ))}
            </Select>
            <Select
              color='secondary'
              selectedKeys={[selectProcesador]}
              onChange={handleSelectProcesador}
              label="Procesador:"
              className="max-w-xs"
            >
              {procesadores.map((proc) => (
                <SelectItem key={proc} value={proc}>
                {proc}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 gap-y-7">
            <Select
              color='primary'
              label="Gráfica:"
              selectedKeys={[selectGrafica]}
              onChange={handleSelectGrafica}
              className="max-w-xs"
            >
              {graficas.map((graf) => (
                <SelectItem key={graf} value={graf}>
                {graf}
                </SelectItem>
              ))}
            </Select>
            <Select
              color='success'
              label="Juego:"
              selectedKeys={[selectGame]}
              onChange={handleSelectGame}
              className="max-w-xs"
            >
              {juegos.map((jg) => (
                <SelectItem key={jg.name} value={jg.name}>
                {jg.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 gap-y-7">
            <Select
              color='warning'
              label="RAM:"
              selectedKeys={[selectRAM]}
              onChange={handleSelectRAM}
              className="max-w-xs"
            >
              {RAM.map((jg) => (
                <SelectItem key={jg} value={jg}>
                {jg}
                </SelectItem>
              ))}
            </Select>
            <Select
              color='default'
              label="Almacenamiento:"
              selectedKeys={[selectALM]}
              onChange={handleSelectALM}
              className="max-w-xs"
            >
              {Almacenamiento.map((jg) => (
                <SelectItem key={jg} value={jg}>
                {jg}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>  
        <div className="flex flex-grow flex-col justify-around p-5">
          <Button 
            color="success"
            onClick={comprobar}
          >
            Comprobar
          </Button> 
          {!textResult ? (<></>) : (
            <h1 className='text-center'>{textResult}</h1>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
