import { dag4 } from '@stardust-collective/dag4';

export const createDagPK = () => {
  const pk = dag4.keyStore.generatePrivateKey();
  return pk;
};

export const getDagAddress = () => {
  const address = dag4.account.address;
  return address;
};

export const getDagPublicKey = () => {
  const publicKey = dag4.account.publicKey;
  return publicKey;
};

export const loginWithDagPK = () => {
  const pk = createDagPK();
  const loginData = dag4.account.loginPrivateKey(pk);
  return { pk, loginData };
};
