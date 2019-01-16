# GATESDK

## Install

```
sudo npm install bottos-offline-js-sdk
```

## Useage

1. requestBlockHeader

`curl http://0.0.0.0:8689/v1/block/height`

```
{
    "errcode": 0,
    "msg": "success",
    "result": {
        "head_block_num": 6942,
        "head_block_hash": "b697a1b1f99398ad79865b4a63670eb52b65ff72e0d8ed5bee83020bd417f867",
        "head_block_time": 1547647206,
        "head_block_delegate": "superdelegate15",
        "cursor_label": 3558340711,
        "last_consensus_block_num": 6942,
        "chain_id": "6e7aaa83d406c878acb0c3cfa07ebf21c65050d2557942f556a7c8ee076a234e",
        "head_block_version": 65792
    }
}
```

2. struct block info

```
config = {
    chainID:chain_id,
    version:head_block_version,
    blockInfo:{
        "cursor_num": head_block_num,
        "cursor_label": cursor_label,
        "lifetime": head_block_time + 300,
    }
}
```

3. privateKey

```
privateKey:""  // sender privateKey, string type
```

4. eg: transfer params

**Note:**`method different means param different`

```
param:{
    "from":"bottos",  // equal to sender
    "to":"testaccount",  
    "value":9999,   // number type
    "memo":"transfer"  // remark
}
```

## Example

- config struct

```
cosnt Gate = require('bottos-offline-js-sdk')
const config = {
    chainID:chainID,
    version:1,
    privateKey:privateKey,
    sender:"bottos",  
    method:"transfer",   // methods can check "/lib/Abi.js"
    params:{
        "from":"bottos",  // equal to sender
        "to":"testaccount",  
        "value":9999,
        "memo":"transfer"  // remark
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

## Test

```
git clone https://github.com/yuanjunliang/bottos-offline-js-sdk.git
cd bottos-offline-js-sdk
npm install 
npm test
```