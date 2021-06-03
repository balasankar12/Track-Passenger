const abi =  [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_id",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_fno",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_fromc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_toc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_pnrno",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            }
        ],
        "name": "addPassenger",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "datamatching",
        "outputs": [
            {
                "internalType": "address",
                "name": "id",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "fno",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "toc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fromc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "pnrno",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "travel",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "id",
                "type": "address"
            }
        ],
        "name": "getPassenger",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "id",
                "type": "address"
            }
        ],
        "name": "getmailid",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
  
  