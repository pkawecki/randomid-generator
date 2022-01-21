  const randomID = (idLength) => {
    let id = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charrsAmount = characters.length;
    for (let i = 0; i < idLength; i++) {
      id += characters.charAt(Math.floor(Math.random() * charrsAmount));
    }
    return id;
  };


module.exports = randomID;
