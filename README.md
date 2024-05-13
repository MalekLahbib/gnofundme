# GnoFundMe - A fundraising / crowdfunding platform.

GnoFundMe is a fundraising/crowdfunding platform built with React, TypeScript and Tailwind CSS.

It allows you to connect your Adena Wallet to identify and make actions/transactions.

Built using the [Gno.land](https://github.com/gnolang/gno) tech stack, GnoFundMe utilizes the Gno programming language for its backend, and a classic React UI using `vite`.

You can see/contribute to the project idea here on [miro](https://miro.com/welcomeonboard/b080b2NwMXRkbGtxMnVtVjhnWGV4UEUzZlJwZ25UREZFZjc5SWdBa2VFTUZMb3hGbnBMMlQ1M2FaeFdtbXRPNHwzNDU4NzY0NTg4NzczNjIxNDk4fDI=?share_link_id=868999895166).

## Run GnoFundMe locally

GnoFundMe consists of a React frontend, and a Gno backend (smart contract). The frontend and backend code can be found at `ui/` and `api/` respectively.

## Prerequisites
- NodeJS
- npm
- Go 1.21+

#### 1. Clone the GnoFundMe repo

```bash
git clone git@github.com:MalekLahbib/gnofundme.git 
```

#### 2. Set up environment variables

Create a `.env` file in the root of the repo following the template found in 
`.env.example`.

To do this, your `.env` file should contain the following:

```bash
VITE_CHAIN_ID=<gno-chain-id>
VITE_CHAIN_RPC=ws://<gno-chain-rpc>/websocket
VITE_REALM_PATH=<onchain-path-to-gnofundme-realm>
```
for example:

```bash
VITE_CHAIN_ID="dev"
VITE_CHAIN_RPC="ws://127.0.0.1:36657/websocket" 
VITE_REALM_PATH="gno.land/r/malek/gnofundme"
```

### 4. Set up a local development node with `gnodev`

`gnodev` is a tool that allows you to run a local Gno.land node effortlessly.
To get started, install `gnodev`. To do this, clone the Gno monorepo:

```bash
git clone git@github.com:gnolang/gno.git 
```

From the root of the Gno repo, install the all the necessary binaries and 
tools following the next steps:

1. Install the `gno` & `gnodev` binaries with the following command in the root of the cloned monorepo:
```bash
make install
```

2. Run the `gnodev` binary in the gnofundme repo, giving it paths
to the package and realm:
```bash
gnodev ./api/p/gnofundme ./api/r/gnofundme
```

Running this command will spin up a local node that the GnoFundMe UI 
will be able to connect to.

Make sure that the chain RPC endpoint that `gnodev` is running on matches the one
in the `.env` file.

#### 3. Start the frontend with `vite`

Start by running `npm i` in the `ui/` folder. After `npm` has installed all of 
the dependencies, run `npm run dev dev`.

### Conclusion

Congratulations! You are now officially running a local frontend connected to 
GnoFundMe!