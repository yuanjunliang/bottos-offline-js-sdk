# GATESDK

// SDK 用法

- Install

```
sudo npm install bottos-offline-js-sdk
```

- Useage

```
cosnt Gate = require('bottos-offline-js-sdk')
const config = {
    chainID:chainID,
    version:1,
    privateKey:privateKey,
    sender:"bottos",
    method:"transfer",
    params:{
        "from":"bottos",
        "to":"testaccount",
        "value":9999,
        "memo":"transfer"
    },
    blockInfo:{
        "cursor_num": 31,
        "cursor_label": 2749714050,
        "lifetime": 1537259224,
    }
}

const GateTool = Gate(config)
const trxData = GateTool.transactionData
const trxHash = GateTool.getTrxHash(trxData)

console.log({trxHash:trxHash.toString('hex')})
```

- Test

```
npm test
```