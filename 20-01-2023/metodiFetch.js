export const funzionePost = (objBody, param, method, idProduct="") => {
    fetch(`https://api.escuelajs.co/api/v1/` + param + idProduct, {
      method: method, 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objBody),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.statusCode >= 400 && data.statusCode < 500) {
          alert(
            `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
          );
        } else {
          alert(`${param} CARICATO CORRETTAMENTE!`);
          console.log(data);
        }
      })
      .catch(e => console.log("ERRORE: ", e));
  };


  

export  const elimina = (callType, idProduct) => {
    fetch(`https://api.escuelajs.co/api/v1/` + callType + `/` + idProduct, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data !== true) {
          alert(
            `${callType} NON CANCELLATO PER LE SEGUENTI RAGIONI: ` + data.name
          );
        } else {
          alert(`${callType} CANCELLATO CORRETTAMENTE!`);
        }
      })
      .catch(e => console.log("ERRORE: ", e));
  };