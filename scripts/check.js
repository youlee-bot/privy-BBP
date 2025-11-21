const QUICKNODE_URL = '';

async function main() {
    try {
        const res = await fetch(QUICKNODE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_blockNumber',
                params: [],
            }),
        });

        const data = await res.json();
        console.log('RPC response:', data);

        if (data.result) {
            const blockHex = data.result;
            const blockNumber = parseInt(blockHex, 16);
            console.log('Latest block (hex):', blockHex);
            console.log('Latest block (dec):', blockNumber);
        }
    } catch (err) {
        console.error('Request error:', err);
    }
}

main();
