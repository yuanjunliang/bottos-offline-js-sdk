const Gate = require('../lib/index')
const HttpTool = require('../tool/HttpTool')
const Abi = require('../lib/Abi')
const {buf2hex} = require("bottos-js-crypto")
// const chainID = "6e7aaa83d406c878acb0c3cfa07ebf21c65050d2557942f556a7c8ee076a234e"

const privateKey = "d52a43d3ea77e0092c99e343e2e071906e708d6ed712659d97d9e0cab819f6ce"
const pubKey = "04b67247e935d2197d0200a7a7aec1db3d80d9a153ad2d772185911e25819f669f8f17b600bb539777cb3f562aa3b2a36942f6c05da18c009c6e552b9166986f86"

const getBlockHeader = ()=>{
    let url = "/block/height"
    return HttpTool.get(url)
        .then(response=>{
            // console.log({response})
            if(response.errcode == 0){
                return {error:null,response:response.result}
            }
        })
        .catch(error=>{
            // console.log({error})
            return {error,response:null}
        })
}

const transfer = async()=>{
    let blockHeader = await getBlockHeader()
    if(blockHeader.error){
        console.log('blockHeader request failed')
        return
    }else{
        let result = blockHeader.response
        let blockInfo = {
            cursor_num:result.head_block_num,
            cursor_label:result.cursor_label,
            lifetime:result.head_block_time + 300
        }
        let chainID = result.chain_id
        let config = {
            privateKey:privateKey,
            blockInfo:blockInfo,
            chainID:chainID,
            version:result.head_block_version,
            sender:"bottosreferrer1",
            method:"transfer",
            param:{
                "from":"bottosreferrer1",
                "to":"bottos",
                "value":100,
                "memo":"transfer"
            }
        }

        const GateTool = Gate(config)
        const trxData = GateTool.transactionData
        // 本地计算Hash
        const trxHash = GateTool.getTrxHash(trxData)
        console.log({LocalTrxHash:trxHash.toString('hex')})
        // 给链上发送交易
        let packParam = GateTool.packParam(trxData)
        let signature = GateTool.getSignature(trxData,Abi.transactionAbi)
        trxData.param = buf2hex(packParam)
        trxData.signature = buf2hex(signature)
        HttpTool.post("/transaction/send",trxData)
            .then(response=>{
                console.log({response})
            })
            .catch(error=>{
                console.log({error})
            })
    }
}

transfer()


