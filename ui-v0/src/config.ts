const { CHAIN_ID, CHAIN_RPC, REALM_PATH } = process.env;

if (!CHAIN_ID) {
  throw new Error('CHAIN_ID property not found in .env');
}

if (!CHAIN_RPC) {
  throw new Error('CHAIN_RPC property not found in .env');
}

if (!REALM_PATH) {
  throw new Error('REALM_PATH property not found in .env');
}

export default {
  CHAIN_ID: CHAIN_ID,
  CHAIN_RPC: CHAIN_RPC,
  REALM_PATH: REALM_PATH
};
