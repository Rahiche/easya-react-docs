---
sidebar_position: 1
---


# Getting Started

# @easya/layer-ui-react
A React component library designed to streamline the development of web3 applications. Currently focused on XRPL integration, with support for additional blockchains coming soon.

#  Features
- Seamless blockchain integration
- Wallet management
- Automatic state handling
- Extensible component system

# Installation

```bash
npm install @easya/layer-ui-react
```

# Quick Start

```typescript
import { BlockchainProvider, ConnectButton } from '@easya/layer-ui-react';

function App() {
  return (
    <BlockchainProvider config={{
      network: 'testnet',
      blockchain: 'xrpl',
      wallet: 'crossmark'
    }}>
      <ConnectButton />
    </BlockchainProvider>
  );
}
```
