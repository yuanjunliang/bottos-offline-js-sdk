const {msgpack,sha256,buf2hex,keystore,sign} = require("bottos-js-crypto")
const Abi = require("./Abi")
const str2buf = keystore.str2buf

module.exports = (config)=>{
    const Gate = {
        config:config,
        transactionData:{
            "version": config.version || 1,
            ...config.blockInfo,
            "sender": config.sender,
            "contract": "bottos",
            "method": config.method,
            "param": config.param,
            "sig_alg": 1,
        }
    }

    Gate.getAbi = (method = "transfer")=>{
        let structs = Abi.structs
        for(let i = 0;i<structs.length; i++){
            let item = structs[i]
            if(item.name.toLocaleLowerCase() == method){
                return item.fields
            }
        }
    }

    Gate.getTrxHash = (trxData)=>{
        let transactionData = JSON.parse(JSON.stringify(trxData))
        // get signature
        let signature = Gate.getSignature(transactionData,Abi.transactionAbi)
        transactionData.signature = signature
        // pack param
        let paramPack = Gate.packParam(trxData)
        transactionData.param = paramPack
        // pack trxdata2
        let packData = msgpack.BTPack(transactionData,Abi.transactionAbi2)
        sha1 = sha256(Buffer.from(packData))
        return sha256(sha1)
    }

    Gate.packParam = (trxData)=>{
        // get abi
        let abi = Gate.getAbi(trxData.method)
        // packparam
        let paramPack = msgpack.BTPack(trxData.param,abi)
        return paramPack
    }

    Gate.getTrxPackData = (trxData,trxAbi)=>{
        let transactionData = JSON.parse(JSON.stringify(trxData))
        // get abi
        let abi = Gate.getAbi(transactionData.method)
        // packparam
        let paramPack = msgpack.BTPack(transactionData.param,abi)
        transactionData.param = paramPack
        // pack transaction data
        let trxPack = msgpack.BTPack(transactionData,trxAbi)
        return trxPack
    }

    Gate.getSignature = (trxData,trxAbi)=>{
        let trxPackData = Gate.getTrxPackData(trxData,trxAbi)
        // hash data
        let preHashStr = buf2hex(trxPackData) + Gate.config.chainID
        let hashData = sha256(preHashStr)
        // privateKey
        let privateKey = str2buf(Gate.config.privateKey,'hex')
        // signature
        let signature = sign(hashData,privateKey)
        return signature
    }

    return Gate
}

















