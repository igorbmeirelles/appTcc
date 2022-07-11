const { firebaseApp } = require("./../plugins/firebase");

export async function logarEescrever(resposta) {
  firebaseApp
    .auth()
    .signInAnonymously()
    .then(() => {
      escreverResposta(resposta);
    })
    .catch(() => {});
}
export async function escreverResposta(resposta) {
  firebaseApp
    .firestore()
    .collection("acessos")
    .add(resposta)
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
}
