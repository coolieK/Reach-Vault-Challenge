// Automatically generated with Reach 0.1.9 (2fb7c59c)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (2fb7c59c)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v73 = stdlib.protect(ctc0, interact.inherit, 'for Alice\'s interact field inherit');
  
  const txn1 = await (ctc.sendrecv({
    args: [v73],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v73, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v77], secs: v79, time: v78, didSend: v29, from: v76 } = txn1;
      
      sim_r.txns.push({
        amt: v77,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v77], secs: v79, time: v78, didSend: v29, from: v76 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.showTime(stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, 20)), {
    at: './index.rsh:37:22:application',
    fs: ['at ./index.rsh:36:7:application call to [unknown function] (defined at: ./index.rsh:36:18:function exp)'],
    msg: 'showTime',
    who: 'Alice'
    });
  
  const v95 = stdlib.protect(ctc1, await interact.getChoice(), {
    at: './index.rsh:41:52:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'getChoice',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v76, v77, v85, v95],
    evt_cnt: 1,
    funcNum: 2,
    lct: v87,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v97], secs: v99, time: v98, didSend: v54, from: v96 } = txn3;
      
      ;
      const v100 = stdlib.addressEq(v76, v96);
      ;
      if (v97) {
        sim_r.txns.push({
          amt: v77,
          kind: 'from',
          to: v76,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.txns.push({
          amt: v77,
          kind: 'from',
          to: v85,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v97], secs: v99, time: v98, didSend: v54, from: v96 } = txn3;
  ;
  const v100 = stdlib.addressEq(v76, v96);
  stdlib.assert(v100, {
    at: './index.rsh:43:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  if (v97) {
    ;
    return;
    }
  else {
    ;
    return;
    }
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v77], secs: v79, time: v78, didSend: v29, from: v76 } = txn1;
  ;
  const v84 = stdlib.protect(ctc1, await interact.acceptTerms(v77), {
    at: './index.rsh:31:50:application',
    fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:13:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v76, v77, v84],
    evt_cnt: 1,
    funcNum: 1,
    lct: v78,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.showTime(stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, 20)), {
    at: './index.rsh:37:22:application',
    fs: ['at ./index.rsh:36:7:application call to [unknown function] (defined at: ./index.rsh:36:18:function exp)'],
    msg: 'showTime',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v97], secs: v99, time: v98, didSend: v54, from: v96 } = txn3;
  ;
  const v100 = stdlib.addressEq(v76, v96);
  stdlib.assert(v100, {
    at: './index.rsh:43:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  if (v97) {
    ;
    return;
    }
  else {
    ;
    return;
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAECIAUmAgEAACI1ADEYQQHLKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSSMMQAD2SSQMQACcJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf80AyVbNf40BRc1/YAEahE6CDT9FlEHCFCwNP8xABJENP1BACyxIrIBNP6yCCOyEDT/sgezsSKyASKyCCOyEDIJsgkyCrIHszEZIQQSREIBAbEisgE0/rIII7IQNANXKCCyB7OxIrIBIrIII7IQMgmyCTIKsgezMRkhBBJEQgDSSCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/NAMlWzX+NAUXNf2ABA+/xjQ0/RZRBwhQsDT/NP4WUDEAUChLAVcASGdIJDUBMgY1AjEZIhJEQgB+SCI0ARJENARJIhJMNAISEUQ0BRc1/4AEgsRh/jT/FlCwNABJIwg1AIGgjQZLATgIEkQjSwE4EBJEMgpLATgHEkRINABJIwg1ADT/SwE4CBJEI0sBOBASRDIKSwE4BxJESDEANP8WUChLAVcAKGdIIzUBMgY1AjEZIhJEQgAAKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s=`,
  appClear: `Bg==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v86",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v97",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v86",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v97",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610aaf380380610aaf833981016040819052610022916101a0565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a160208101515161007b90341460076100de565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100d69260029290910190610107565b505050610279565b816101035760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101139061023e565b90600052602060002090601f016020900481019282610135576000855561017b565b82601f1061014e57805160ff191683800117855561017b565b8280016001018555821561017b579182015b8281111561017b578251825591602001919060010190610160565b5061018792915061018b565b5090565b5b80821115610187576000815560010161018c565b60008183036040808212156101b457600080fd5b80518082016001600160401b0380821183831017156101e357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101fc57600080fd5b83519450602085019150848210818311171561022857634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061025257607f821691505b6020821081141561027357634e487b7160e01b600052602260045260246000fd5b50919050565b610827806102886000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780633e59bac414610078578063832307571461008b5780639a3e3912146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105ee565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046105ee565b6102ae565b3480156100bf57600080fd5b506100c861043e565b60405161006f929190610611565b6100e6600260005414600d6104db565b610100813515806100f957506001548235145b600e6104db565b6000808055600280546101129061066e565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061066e565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906106bf565b90507fd87af78abaccc59d995cd712c21929e42321bf30f94e6164c3f52c0c14084d52826040516101d4919061075d565b60405180910390a16101e83415600b6104db565b8051610200906001600160a01b03163314600c6104db565b6102106040830160208401610771565b1561026d57805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610252573d6000803e3d6000fd5b506000808055600181905561026990600290610500565b5050565b80604001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610252573d6000803e3d6000fd5b6102be60016000541460096104db565b6102d8813515806102d157506001548235145b600a6104db565b6000808055600280546102ea9061066e565b80601f01602080910402602001604051908101604052809291908181526020018280546103169061066e565b80156103635780601f1061033857610100808354040283529160200191610363565b820191906000526020600020905b81548152906001019060200180831161034657829003601f168201915b505050505080602001905181019061037b919061078c565b90507fc2181c40b1b03253329d7cd30c0cb2b8c24f7c72d3e1bae33dca44e26dcbc021826040516103ac919061075d565b60405180910390a16103c0341560086104db565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845233835260029586905543600155885180860191909152925183890152905116818501528551808203909401845260800190945281519293610438939192019061053d565b50505050565b6000606060005460028080546104539061066e565b80601f016020809104026020016040519081016040528092919081815260200182805461047f9061066e565b80156104cc5780601f106104a1576101008083540402835291602001916104cc565b820191906000526020600020905b8154815290600101906020018083116104af57829003601f168201915b50505050509050915091509091565b816102695760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461050c9061066e565b6000825580601f1061051c575050565b601f01602090049060005260206000209081019061053a91906105c1565b50565b8280546105499061066e565b90600052602060002090601f01602090048101928261056b57600085556105b1565b82601f1061058457805160ff19168380011785556105b1565b828001600101855582156105b1579182015b828111156105b1578251825591602001919060010190610596565b506105bd9291506105c1565b5090565b5b808211156105bd57600081556001016105c2565b6000604082840312156105e857600080fd5b50919050565b60006040828403121561060057600080fd5b61060a83836105d6565b9392505050565b82815260006020604081840152835180604085015260005b8181101561064557858101830151858201606001528201610629565b81811115610657576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061068257607f821691505b602082108114156105e857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146106ba57600080fd5b919050565b6000606082840312156106d157600080fd5b6040516060810181811067ffffffffffffffff8211171561070257634e487b7160e01b600052604160045260246000fd5b60405261070e836106a3565b815260208301516020820152610726604084016106a3565b60408201529392505050565b803580151581146106ba57600080fd5b8035825261075260208201610732565b151560208301525050565b6040810161076b8284610742565b92915050565b60006020828403121561078357600080fd5b61060a82610732565b60006040828403121561079e57600080fd5b6040516040810181811067ffffffffffffffff821117156107cf57634e487b7160e01b600052604160045260246000fd5b6040526107db836106a3565b815260208301516020820152809150509291505056fea26469706673582212208631f3c98023433dd4a01ec69db3eb2f1a496f7610822baf973eabc4b7aeb36364736f6c634300080c0033`,
  BytecodeLen: 2735,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:51:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:51:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
