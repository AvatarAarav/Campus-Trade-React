const schemas = {
    "OTP": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string",
                "format": "email",
                "description": "Unique email address associated with the OTP"
            },
            "otpNumber": {
                "type": "integer",
                "description": "One-time password number"
            }
        },
        "required": ["email", "otpNumber"]
    },
    "User": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "Name of the user"
            },
            "email": {
                "type": "string",
                "format": "email",
                "description": "Unique email address of the user"
            },
            "password": {
                "type": "string",
                "description": "Hashed password for the user"
            },
            "college_name": {
                "type": "string",
                "description": "Name of the college the user attends"
            },
            "ads": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "List of ad identifiers created by the user"
            },
            "report": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "List of reports made by the user"
            },
            "year": {
                "type": "integer",
                "description": "Year of study of the user"
            },
            "branch": {
                "type": "string",
                "description": "Academic branch or department of the user"
            }
        },
        "required": ["email"]
    },
    "Product": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "Name of the product"
            },
            "type": {
                "type": "string",
                "description": "Type or category of the product"
            },
            "description": {
                "type": "string",
                "description": "Description of the product"
            },
            "id": {
                "type": "string",
                "description": "Unique identifier for the product"
            },
            "sellerMail": {
                "type": "string",
                "format": "email",
                "description": "Email of the product's seller"
            },
            "age": {
                "type": "string",
                "description": "Age or condition of the product"
            },
            "price": {
                "type": "number",
                "description": "Price of the product"
            },
            "subname": {
                "type": "string",
                "description": "Subname or alternate name of the product"
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "Tags associated with the product"
            },
            "features": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "Features of the product"
            },
            "views": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "Views of the product listing"
            },
            "likes": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "Likes on the product listing"
            },
            "sold": {
                "type": "boolean",
                "description": "Status whether the product has been sold or not"
            },
            "buyer": {
                "type": "string",
                "description": "Email of the buyer if the product is sold"
            },
            "chats": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/Chat"
                },
                "description": "Chats related to the product"
            },
            "report": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "Reports made against the product"
            },
            "img_id": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "Image identifiers associated with the product"
            }
        }
    },
    "Chat": {
        "type": "object",
        "properties": {
            "author": {
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string",
                        "description": "Username of the chat participant"
                    },
                    "id": {
                        "type": "integer",
                        "description": "User identifier of the chat participant"
                    }
                }
            },
            "text": {
                "type": "string",
                "description": "Text content of the chat message"
            },
            "type": {
                "type": "string",
                "description": "Type of chat message"
            },
            "timestamp": {
                "type": "integer",
                "description": "UNIX timestamp of when the message was sent"
            }
        }
    },
    "Admins": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "Name of the administrator"
            },
            "email": {
                "type": "string",
                "format": "email",
                "description": "Email address of the administrator"
            },
            "college": {
                "type": "string",
                "description": "College with which the admin is associated"
            },
            "password": {
                "type": "string",
                "description": "Hashed password for the administrator"
            },
            "soldOut": {
                "type": "integer",
                "description": "Number of items sold out by the administrator"
            },
            "activity": {
                "type": "object",
                "properties": {
                    "labels": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "description": "Labels for activity data, typically dates"
                    },
                    "values": {
                        "type": "array",
                        "items": {
                            "type": "integer"
                        },
                        "description": "Values corresponding to activity labels, representing some metric like sales or logins"
                    }
                }
            },
            "reportedAds": {
                "type": "integer",
                "description": "Number of ads reported through this admin's portal"
            }
        }
    }
}


export default schemas