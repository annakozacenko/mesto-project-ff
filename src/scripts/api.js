//окен: 2e6d7127-2c96-4424-9ab2-ffa0410b4c23
//Идентификатор группы: wff-cohort-27


return fetch('https://nomoreparties.co/v1/wff-cohort-27/cards', {
    headers: {
      authorization: '2e6d7127-2c96-4424-9ab2-ffa0410b4c23'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });