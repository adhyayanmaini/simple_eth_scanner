//lets start till its installing;

const fs = require(`fs`);
const {ethers} = require(`ethers`);

//define public node rpc;
const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com');

//config
const TOTAL_WALLETS = 50; //number of wallets to generate
const walletsFile = `wallets_generatred.txt`;
const richFile = `rich_wallets.txt`;

//clear old data if it existed before!;

fs.writeFileSync(walletsFile, ``);
fs.writeFileSync(richFile, ``);

console.log(`Ethereum Wallet Scanner Started | Adhyayan Maini`);

//function to gen and check wallets;

async function generateAndCheck(index){
    const wallet = ethers.Wallet.createRandom();
    const mnemonic = wallet.mnemonic.phrase;
    const address = wallet.address;

    fs.appendFileSync(walletsFile, `Wallet ${index + 1}: ${address} | Mnemonic: ${mnemonic}\n`);

    try {
        const balanceWei = await provider.getBalance(address);
        const balanceEth = parseFloat(ethers.formatEther(balanceWei));

        if (balanceEth > 0) {
            console.log(`VALID [${index}]: ${address} | Balance: ${balanceEth} ETH`);
            fs.appendFileSync(richFile, `Mnemonic: ${mnemonic} | Address: ${address} | Balance: ${balanceEth} ETH\n`);
        } else {
            console.log(`EMPTY [${index}]: ${address} | mnemonic: ${mnemonic} | Balance: ${balanceEth} ETH`);
        }
    } catch (err) {
        console.log(`ERROR [${index}]: ${address} | ${err.message}`);
    }
}


async function start(){
    console.log(`Checking ${TOTAL_WALLETS} wallets...`);
    for (let i = 1; i <= TOTAL_WALLETS; i++) {
        await generateAndCheck(i);
    }
    console.log(`\n Scan Completed`);
    console.log(`Check the TXT Files Generated`);
}

start();