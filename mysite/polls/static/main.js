 (function() {

  let currentButton;

  

  function handlePlay(event) {
    loadWorkspace(event.target);
    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    code += 'MusicMaker.play();';
    // Eval can be dangerous. For more controlled execution, check
    // https://github.com/NeilFraser/JS-Interpreter.
    try {
      eval(code);
    } catch (error) {
      console.log(error);
    }
  }

  function loadWorkspace(button) {
    const workspace = Blockly.getMainWorkspace();
    if (button.blocklySave) {
      Blockly.serialization.workspaces.load(button.blocklySave, workspace);
    }
  }

  function save(button) {
    button.blocklySave = Blockly.serialization.workspaces.save(
        Blockly.getMainWorkspace());
  }

  function handleSave() {
    document.body.setAttribute('mode', 'edit');
    save(currentButton);
  }

  function enableEditMode() {
    document.body.setAttribute('mode', 'edit');
    document.querySelectorAll('.button').forEach(btn => {
      btn.removeEventListener('click', handlePlay);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }

  function enableMakerMode() {
    document.body.setAttribute('mode', 'maker');
    document.querySelectorAll('.button').forEach(btn => {
      btn.addEventListener('click', handlePlay);
      btn.removeEventListener('click', enableBlocklyMode);
    });
  }

  function enableBlocklyMode(e) {
    document.body.setAttribute('mode', 'blockly');
    currentButton = e.target;
    loadWorkspace(currentButton);
  }

  document.querySelector('#edit').addEventListener('click', enableEditMode);
  document.querySelector('#done').addEventListener('click', enableMakerMode);
  document.querySelector('#save').addEventListener('click', handleSave);

     enableMakerMode();




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





   const toolbox = codelabToolbox;

   const codelabGenerator = new Blockly.Generator('JSON');
     


  //const toolbox = {
  //  'kind': 'flyoutToolbox',
  //  'contents': [
  //    {
  //      'kind': 'block',
  //      'type': 'controls_repeat_ext',
  //      'inputs': {
  //        'TIMES': {
  //          'shadow': {
  //            'type': 'math_number',
  //            'fields': {
  //              'num': 5,
  //            },
  //          },
  //        },
  //      },
  //    },
  //    {
  //      'kind': 'block',
  //      'type': 'play_sound',
  //    },
  //  ],
  //};



  Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: false,
  });
})();
