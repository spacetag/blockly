Blockly.Blocks['pseudo_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("pseudo_code"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pseudo_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("pseudo_expression"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};