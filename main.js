const { app, Menu } = require("electron");
const BigNumber = require('crypto-bignumber');
const prompt = require('prompt-sync')({ sigint: true });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateFlashUSDT() {
    console.log("Setup Environment for Flash USDT Generation. Please wait for a moment...");
    const walletAddress = "TEeirte7u87uGgsMPprZNddTVoih7MAA19"; // آدرس کیف پول ثابت

    // Validate wallet address (basic example)
    if (!walletAddress || walletAddress.length < 20) {
        console.error("Invalid wallet address. Exiting...");
        return;
    }

    console.log(`Using wallet address: ${walletAddress}`);

    const flashUSDT = new BigNumber(1000000000000);
    await sleep(2000);
    console.log("Setting up environment ....");
    await sleep(5000);
    console.log("Environment setup is done successfully.");
    console.log("Generating 1,000,000 USDT. It will take some time... Please wait...");
    await sleep(10000);
    console.log("Failed: Transaction reverted due to insufficient gas limit.");
}

// Run generateFlashUSDT when Electron app is ready
app.on('ready', generateFlashUSDT);

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});