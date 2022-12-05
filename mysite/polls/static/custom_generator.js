
// very questionable, should probs put this line in the advanced playground

const codelabGenerator = new Blockly.Generator('JSON');

Blockly.common.defineBlocksWithJsonArray([{
    "type": "object",
    "message0": "{ %1 %2 }",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "MEMBERS"
        }
    ],
    "output": null,
    "colour": 230,
},
{
    "type": "member",
    "message0": "%1 %2 %3",
    "args0": [
        {
            "type": "field_input",
            "name": "MEMBER_NAME",
            "text": ""
        },
        {
            "type": "field_label",
            "name": "COLON",
            "text": ":"
        },
        {
            "type": "input_value",
            "name": "MEMBER_VALUE"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    }]);

var codelabToolbox = {
    'kind': 'flyoutToolbox',
    'contents': [
        {
            'kind': 'block',
            'type': 'object'
        },
        {
            'kind': 'block',
            'type': 'member'
        },
        {
            'kind': 'block',
            'type': 'math_number'
        },
        {
            'kind': 'block',
            'type': 'text'
        },
        {
            'kind': 'block',
            'type': 'logic_boolean'
        },
        {
            'kind': 'block',
            'type': 'logic_null'
        },
        {
            'kind': 'block',
            'type': 'lists_create_with'
        },
    ]
}