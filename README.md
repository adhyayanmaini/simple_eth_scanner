# 🛡 Simple Ethereum Wallet Scanner

## 📌 Overview
A lightweight Node.js tool that:
- Generates random Ethereum wallets (mnemonics + addresses)
- Checks their ETH balances using a public RPC
- Saves results in text files for analysis

> ⚠ **Disclaimer:** This tool is for **educational purposes only**. Do not use it for illegal activities or to harm others. The author assumes no responsibility for misuse.

---

## ✅ Features
- Auto-generates wallets using **BIP39 mnemonics**
- Fetches ETH balance via **public RPC**
- Saves:
  - All wallets → `wallets_generated.txt`
  - Wallets with balance → `rich_wallets.txt`
- No API key required
- Works offline after setup
- Can be compiled into `.exe` for Windows

---

## 📂 Project Structure
simplewalletscanner/
├── script.js
├── wallets_generated.txt
├── rich_wallets.txt
└── README.md

---

## ⚡ Setup

### Requirements
- [Node.js 18+](https://nodejs.org/)
- npm (comes with Node)

### Install Dependencies
```bash
npm init -y
npm install ethers
▶ Usage
Run the script:


node script.js
Example Output:

Ethereum Wallet Scanner Started | @richmfspectrix
Checking 50 wallets...

EMPTY [1]: 0xAbCdEf123...
VALID [17]: 0x987xyz... | Balance: 1.234 ETH

Scan complete!
All wallets saved in wallets_generated.txt
Wallets with balance saved in rich_wallets.txt
⚙ Configuration
Edit the number of wallets to generate:

const TOTAL_WALLETS = 50; // Change to any number
🔗 Public Ethereum RPC
Default RPC:
https://eth.llamarpc.com
🖥 Convert to EXE
Install pkg:

npm install -g pkg
Build EXE:

pkg script.js --targets node18-win-x64 --compress Brotli --output WalletScanner.exe
✅ Files Generated
wallets_generated.txt → All generated wallets

rich_wallets.txt → Wallets with non-zero balance

📜 License
MIT License - Educational Use Only.
