const Abi = {
    "structs": [
      {
        "name": "NewAccount",
        "base": "",
        "fields": {
          "name": "string",
          "pubkey": "string"
        }
      },
      {
        "name": "Transfer",
        "base": "",
        "fields": {
          "from": "string",
          "to": "string",
          "value": "uint256",
          "memo": "string"
        }
      },
      {
        "name": "SetDelegate",
        "base": "",
        "fields": {
          "name": "string",
          "pubkey": "string",
          "location": "string",
          "description": "string"
        }
      },
      {
        "name": "GrantCredit",
        "base": "",
        "fields": {
          "name": "string",
          "spender": "string",
          "limit": "uint256"
        }
      },
      {
        "name": "CancelCredit",
        "base": "",
        "fields": {
          "name": "string",
          "spender": "string"
        }
      },
      {
        "name": "TransferFrom",
        "base": "",
        "fields": {
          "from": "string",
          "to": "string",
          "value": "uint256"
        }
      },
      {
        "name": "DeployCode",
        "base": "",
        "fields": {
          "contract": "string",
          "vm_type": "uint8",
          "vm_version": "uint8",
          "contract_code": "bytes"
        }
      },
      {
        "name": "DeployABI",
        "base": "",
        "fields": {
          "contract": "string",
          "contract_abi": "bytes",
          "filetype": "string"
        }
      },
      {
        "name": "RegDelegate",
        "base": "",
        "fields": {
          "name": "string",
          "pubkey": "string",
          "location": "string",
          "description": "string"
        }
      },
      {
        "name": "UnregDelegate",
        "base": "",
        "fields": {
          "name": "string"
        }
      },
      {
        "name": "VoteDelegate",
        "base": "",
        "fields": {
          "voteop": "uint8",
          "voter": "string",
          "delegate": "string"
        }
      },
      {
        "name": "Stake",
        "base": "",
        "fields": {
          "amount": "uint256"
        }
      },
      {
        "name": "Unstake",
        "base": "",
        "fields": {
          "amount": "uint256"
        }
      },
      {
        "name": "Claim",
        "base": "",
        "fields": {
          "amount": "uint256"
        }
      },
      {
        "name": "BlkProdTrans",
        "base": "",
        "fields": {
          "actblknum": "uint64"
        }
      }
    ],
    "transactionAbi":{
      "version": "uint32",
      "cursor_num": "uint64",
      "cursor_label": "uint32",
      "lifetime": "uint64",
      "sender": "string",
      "contract": "string",
      "method": "string",
      "param": "array",
      "sig_alg": "uint32"
    },
    "transactionAbi2": {
      "version": "uint32",
      "cursor_num": "uint64",
      "cursor_label": "uint32",
      "lifetime": "uint64",
      "sender": "string",
      "contract": "string",
      "method": "string",
      "param": "array",
      "sig_alg": "uint32",
      "signature": "array"
    }
  }
  
  module.exports = Abi