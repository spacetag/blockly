Blockly.JavaScript['pseudo_statement'] = function(block) {
  // From: generators/javascript/procedures.js
  // Call a procedure with no return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var code = funcName + '();\n';
  return code;
};

Blockly.JavaScript['pseudo_expression'] = function(block) {
  // From: generators/javascript/procedures.js
  // Call a procedure with a return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var code = funcName + '()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};