export type M3 = {
  "version": "0.1.0",
  "name": "m3",
  "instructions": [
    {
      "name": "sell",
      "accounts": [
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerReferral",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "SellArgs"
          }
        }
      ]
    },
    {
      "name": "buyNow",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "notary",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "platformTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerReferral",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "BuyNowArgs"
          }
        }
      ]
    },
    {
      "name": "cancelSell",
      "accounts": [
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "notary",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CancelSellArgs"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "sellerTradeState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seller",
            "type": "publicKey"
          },
          {
            "name": "sellerReferral",
            "type": "publicKey"
          },
          {
            "name": "buyerPrice",
            "type": "u64"
          },
          {
            "name": "assetId",
            "type": "publicKey"
          },
          {
            "name": "paymentMint",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "merkleTree",
            "type": "publicKey"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "BuyNowArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyerPrice",
            "type": "u64"
          },
          {
            "name": "makerFeeBp",
            "type": "i16"
          },
          {
            "name": "takerFeeBp",
            "type": "u16"
          },
          {
            "name": "buyerCreatorRoyaltyBp",
            "type": "u16"
          },
          {
            "name": "creatorShares",
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "creatorVerified",
            "type": {
              "vec": "bool"
            }
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": "u16"
          },
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "metadataHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "creatorHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "CancelSellArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "dataHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "creatorHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "SellArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "dataHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "creatorHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "buyerPrice",
            "type": "u64"
          },
          {
            "name": "paymentMint",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "IncorrectOwner",
      "msg": "IncorrectOwner"
    },
    {
      "code": 6001,
      "name": "AssetIDMismatch",
      "msg": "Asset ID does not match expected ID"
    },
    {
      "code": 6002,
      "name": "NoValidSignerPresent",
      "msg": "No valid signer present"
    },
    {
      "code": 6003,
      "name": "InvalidNotary",
      "msg": "Invalid notary"
    },
    {
      "code": 6004,
      "name": "EmptyTradeState",
      "msg": "Empty trade state"
    },
    {
      "code": 6005,
      "name": "InvalidPrice",
      "msg": "Invalid price"
    },
    {
      "code": 6006,
      "name": "InvalidDiscriminator",
      "msg": "Invalid discriminator"
    },
    {
      "code": 6007,
      "name": "InvalidPlatformFeeBp",
      "msg": "Invalid platform fee bp"
    },
    {
      "code": 6008,
      "name": "NumericalOverflow",
      "msg": "NumericalOverflow"
    },
    {
      "code": 6009,
      "name": "MismatchedCreatorDataLengths",
      "msg": "MismatchedCreatorDataLengths"
    },
    {
      "code": 6010,
      "name": "CreatorShareTotalMustBe100",
      "msg": "CreatorShareTotalMustBe100"
    },
    {
      "code": 6011,
      "name": "InvalidMakerTakerFee",
      "msg": "InvalidMakerTakerFee"
    },
    {
      "code": 6012,
      "name": "InvalidCreators",
      "msg": "InvalidCreators"
    },
    {
      "code": 6013,
      "name": "SellerMismatch",
      "msg": "SellerMismatch"
    }
  ]
};

export const IDL: M3 = {
  "version": "0.1.0",
  "name": "m3",
  "instructions": [
    {
      "name": "sell",
      "accounts": [
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerReferral",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "SellArgs"
          }
        }
      ]
    },
    {
      "name": "buyNow",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "notary",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "platformTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerReferral",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "BuyNowArgs"
          }
        }
      ]
    },
    {
      "name": "cancelSell",
      "accounts": [
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "notary",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CancelSellArgs"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "sellerTradeState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seller",
            "type": "publicKey"
          },
          {
            "name": "sellerReferral",
            "type": "publicKey"
          },
          {
            "name": "buyerPrice",
            "type": "u64"
          },
          {
            "name": "assetId",
            "type": "publicKey"
          },
          {
            "name": "paymentMint",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "merkleTree",
            "type": "publicKey"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "BuyNowArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyerPrice",
            "type": "u64"
          },
          {
            "name": "makerFeeBp",
            "type": "i16"
          },
          {
            "name": "takerFeeBp",
            "type": "u16"
          },
          {
            "name": "buyerCreatorRoyaltyBp",
            "type": "u16"
          },
          {
            "name": "creatorShares",
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "creatorVerified",
            "type": {
              "vec": "bool"
            }
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": "u16"
          },
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "metadataHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "creatorHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "CancelSellArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "dataHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "creatorHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "SellArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "dataHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "creatorHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "buyerPrice",
            "type": "u64"
          },
          {
            "name": "paymentMint",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "IncorrectOwner",
      "msg": "IncorrectOwner"
    },
    {
      "code": 6001,
      "name": "AssetIDMismatch",
      "msg": "Asset ID does not match expected ID"
    },
    {
      "code": 6002,
      "name": "NoValidSignerPresent",
      "msg": "No valid signer present"
    },
    {
      "code": 6003,
      "name": "InvalidNotary",
      "msg": "Invalid notary"
    },
    {
      "code": 6004,
      "name": "EmptyTradeState",
      "msg": "Empty trade state"
    },
    {
      "code": 6005,
      "name": "InvalidPrice",
      "msg": "Invalid price"
    },
    {
      "code": 6006,
      "name": "InvalidDiscriminator",
      "msg": "Invalid discriminator"
    },
    {
      "code": 6007,
      "name": "InvalidPlatformFeeBp",
      "msg": "Invalid platform fee bp"
    },
    {
      "code": 6008,
      "name": "NumericalOverflow",
      "msg": "NumericalOverflow"
    },
    {
      "code": 6009,
      "name": "MismatchedCreatorDataLengths",
      "msg": "MismatchedCreatorDataLengths"
    },
    {
      "code": 6010,
      "name": "CreatorShareTotalMustBe100",
      "msg": "CreatorShareTotalMustBe100"
    },
    {
      "code": 6011,
      "name": "InvalidMakerTakerFee",
      "msg": "InvalidMakerTakerFee"
    },
    {
      "code": 6012,
      "name": "InvalidCreators",
      "msg": "InvalidCreators"
    },
    {
      "code": 6013,
      "name": "SellerMismatch",
      "msg": "SellerMismatch"
    }
  ]
};
