import { useState, useEffect, Fragment } from 'react';
const localizationUrl = "https://ipgeolocation.abstractapi.com/v1/?api_key=2f403230bf16479da4ce4c7a95e0d893";

function App() {

const [locali, setLocali] = useState({});
const [flag, setFlag] = useState({});
const [connection, setConnection] = useState({});
useEffect (() => {
  getLocaliFetch();
}, []);

const getLocaliFetch = async () => {
  const response = await fetch(localizationUrl);
  const jsonData = await response.json();

  setLocali(jsonData);
  setFlag(jsonData.flag);
  setConnection(jsonData.connection)
}

    return (
      <Fragment>
        <div className="flex space-x-2 rounded-xl border border-grey-500 border-opacity-25 absolute top-0 right-0 h-8 w-16 flex-1 justify-center md:py-2 bg-indigo-400 p-4"> 
          <img className="object-contain h-5 w-full ..." src={flag.png} alt="bandera"></img>
          {flag.emoji}
          </div>
        <h1 className="text-2xl flex space-x-2 justify-center md:py-2 "> ¿Cómo y desde dónde te conectas? </h1>
        <div className="grid gap-x-4 grid justify-items-center ">
          <div className=" flex flex-col md:flex-row flex-nowrap flex space-x-2 md:space-x-4 justify-center md:py-2 ...">
            <div className="p-6 flex-initial grid justify-items-center mt-8 md:my-6 rounded-xl border border-grey-500 border-opacity-25 hover:border-indigo-500 ...">
              <h1 className="text-2xl"> Localización </h1>
              <h1 className="text-2xl"> Ciudad: </h1>
              <h2>{locali.city}</h2>
              <h1 className="text-2xl"> Región: </h1>
              <h2>{locali.region}</h2>
              <h1 className="text-2xl"> País: </h1>
              <h2>{locali.country}</h2>
            </div>
            <div className="p-6 flex-initial grid justify-items-center mt-8 md:my-6 rounded-xl border border-grey-500 border-opacity-25 hover:border-indigo-500 ...">
              <h1 className="text-2xl"> Conexión </h1>
              <h1 className="text-2xl"> Proveedor: </h1>
              <h2>{connection.isp_name}</h2>
              <h1 className="text-2xl"> Organización:</h1>
              <h2>{connection.organization_name}</h2>
              <h1 className="text-2xl"> Tipo de conexión </h1>
              <h2>{connection.connection_type}</h2>
            </div>  
          </div>
        </div>
      </Fragment>
  );
}
export default App;

