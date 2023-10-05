var lastTime;
var lastDow;
var drawTimeout;
var zoneIndex;

Graphics.prototype.setFontOxaniumTime = function() {
  // Actual height 56 (58 - 3)
  return this.setFontCustom(
    atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAAAAAAB/4AAAAAAAAAH/gAAAAAAAAAf+AAAAAAAAAB/4AAAAAAAAAH/gAAAAAAAAAf+AAAAAAAAAB/4AAAAAAAAAH/gAAAAAAAAAf+AAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAD4AAAAAAAAAB/wAAAAAAAAA//AAAAAAAAAf/8AAAAAAAAH//4AAAAAAAD///gAAAAAAB///+AAAAAAAf///wAAAAAAP///4AAAAAAH///8AAAAAAD///+AAAAAAA////gAAAAAAf///wAAAAAAP///4AAAAAAH///+AAAAAAB////AAAAAAA////gAAAAAAf///wAAAAAAH///8AAAAAAAf//+AAAAAAAB///AAAAAAAAH//gAAAAAAAAP/4AAAAAAAAA/8AAAAAAAAAB+AAAAAAAAAAHgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////+AAAAAD//////AAAAA///////AAAAH//////+AAAAf//////4AAAD///////wAAAP///////AAAB///////+AAAH///////4AAAf///////gAAB/wAAAAP+AAAH+AAAAAf4AAAf4AAAAB/gAAB/gAAAAH+AAAH+AAAAAf4AAAf4AAAAB/gAAB/gAAAAH+AAAH+AAAAAf4AAAf4AAAAB/gAAB/gAAAAH+AAAH+AAAAAf4AAAf4AAAAB/gAAB/gAAAAH+AAAH/AAAAA/4AAAf///////gAAB///////+AAAH///////4AAAf///////gAAA///////8AAAD///////wAAAH//////+AAAAP//////wAAAAf/////+AAAAAf/////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAH+AAAA+AAAAAf4AAAH4AAAAB/gAAA/gAAAAH+AAAD+AAAAAf4AAAf4AAAAB/gAAB/gAAAAH+AAAH+AAAAAf4AAAf4AAAAB/gAAB/gAAAAH+AAAH///////4AAAf///////gAAB///////+AAAH///////4AAAf///////gAAB///////+AAAH///////4AAAf///////gAAB///////+AAAH///////4AAAAAAAAAB/gAAAAAAAAAH+AAAAAAAAAAf4AAAAAAAAAB/gAAAAAAAAAH+AAAAAAAAAAf4AAAAAAAAAB/gAAAAAAAAAH+AAAAAAAAAAf4AAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//4AAAAAAAD///gAAAfgAA///+AAAB+AAH///4AAAP4AA////gAAB/gAD///+AAAH+AAf///4AAAf4AB////gAAB/gAH///+AAAH+AA////4AAAf4AD/wB/gAAB/gAP+AH+AAAH+AA/4Af4AAAf4AD/gB/gAAB/gAf8AH+AAAH+AB/wAf4AAAf4AH/AB/gAAB/gAf8AH+AAAH+AB/wAf4AAAf4AP+AB/gAAB/gA/4AH+AAAH+AD/gAf4AAAf4AP+AB/gAAB/wB/4AH+AAAH////AAf4AAAf///8AB/gAAB////wAH+AAAH////AAf4AAAP///4AB/gAAA////gAH+AAAB///8AAf4AAAD///gAB/gAAAH//8AAH+AAAAH//AAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAB+AAAAAfgAAAH4AAAAB/AAAA/gAAAAH+AAAH+AAAAAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH/AH/gA/4AAAf///////gAAB///////+AAAH///////4AAAf///////gAAA///////8AAAD///////wAAAH//////+AAAAP//5///wAAAAf//D//+AAAAAf/wD//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAH/gAAAAAAAAB/+AAAAAAAAAf/4AAAAAAAAH//gAAAAAAAB//+AAAAAAAAf//4AAAAAAAP///gAAAAAAD///+AAAAAAA////4AAAAAAP////gAAAAAD///3+AAAAAA///8f4AAAAAf///B/gAAAAH///wH+AAAAB///8Af4AAAAH//+AB/gAAAAf//gAH+AAAAB//4AAf4AAAAH/+AAB/gAAAAf/gAAH+AAAAB/4AAAf4AAAAH8AAAB/gAAAAfAAAAH+AAAAAwAB////+AAAAAAH////4AAAAAAf////gAAAAAB////+AAAAAAH////4AAAAAAf////gAAAAAB////+AAAAAAH////4AAAAAAf////gAAAAAB////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAH///+AAfgAAAf///4AB+AAAB////gAH8AAAH///+AAf4AAAf///4AB/gAAB////gAH+AAAH///+AAf4AAAf///4AB/gAAB////gAH+AAAH///+AAf4AAAf4Af4AB/gAAB/gB/gAH+AAAH+AH+AAf4AAAf4Af4AB/gAAB/gB/gAH+AAAH+AH+AAf4AAAf4Af4AB/gAAB/gB/gAH+AAAH+AH+AAf4AAAf4Af4AB/gAAB/gB/gAH+AAAH+AH+AAf4AAAf4Af4AB/gAAB/gB/wAP+AAAH+AH////4AAAf4Af////gAAB/gB////+AAAH+AD////4AAAf4AP////AAAB/gAf///8AAAH+AB////gAAAf4AD///8AAAAAAAD///gAAAAAAAD//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////+AAAAAA//////AAAAAP//////AAAAD//////+AAAAP//////4AAAB///////wAAAP///////AAAA///////+AAAH///////4AAAf///////gAAB/4B/gAP+AAAH/AH+AAf4AAAf4Af4AB/gAAB/gB/gAH+AAAH+AH+AAf4AAAf4Af4AB/gAAB/gB/gAH+AAAH+AH+AAf4AAAf4Af4AB/gAAB/gB/gAH+AAAH+AH+AAf4AAAf4Af4AB/gAAB/gB/gAH+AAAH+AH/AA/4AAAf4Af////gAAB/gB////+AAAH+AH////4AAAf4AP////gAAA/gA////8AAAB+AB////wAAAH4AH///+AAAAAAAP///wAAAAAAAP//+AAAAAAAAP//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAH+AAAAAAAAAAf4AAAAAAAAAB/gAAAAAAAAAH+AAAAAAAAAAf4AAAAAAAAAB/gAAAAAEAAAH+AAAAAB4AAAf4AAAAAfgAAB/gAAAAH+AAAH+AAAAB/4AAAf4AAAAf/gAAB/gAAAH/+AAAH+AAAB//4AAAf4AAAP//gAAB/gAAD//+AAAH+AAA///4AAAf4AAP//+AAAB/gAD///gAAAH+AA///4AAAAf4AP//+AAAAB/gD///gAAAAH+Af//4AAAAAf4H//+AAAAAB/////gAAAAAH////8AAAAAAf////AAAAAAB////wAAAAAAH///8AAAAAAAf///AAAAAAAB///wAAAAAAAH//8AAAAAAAAf//AAAAAAAAB//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/4Af/gAAAAA//4H//wAAAAP//w///wAAAB///n///gAAAH//////+AAAA///////8AAAD///////wAAAf///////gAAB///////+AAAH///////4AAAf8Af+AD/gAAB/gA/4AH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/gA/wAH+AAAH+AD/AAf4AAAf4AP8AB/gAAB/wB/4AP+AAAH///////4AAAf///////gAAB///////+AAAH///////4AAAP///////AAAA///////8AAAB///////gAAAD//+f//8AAAAH//w///gAAAAH/8A//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/8AAAAAAAAD///AAAAAAAA///+AAfAAAAH///8AB+AAAAf///4AH8AAAD////wAfwAAAP////AB/gAAB////8AH+AAAH////4Af4AAAf////gB/gAAB/wAP+AH+AAAH+AA/4Af4AAAf4AB/gB/gAAB/gAH+AH+AAAH+AAf4Af4AAAf4AB/gB/gAAB/gAH+AH+AAAH+AAf4Af4AAAf4AB/gB/gAAB/gAH+AH+AAAH+AAf4Af4AAAf4AB/gB/gAAB/gAH+AP+AAAH/AAf4A/4AAAf///////gAAB///////+AAAH///////wAAAf///////AAAA///////4AAAD///////gAAAH//////8AAAAP//////gAAAAf/////4AAAAAf////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAB/4AAAAB/4AAH/gAAAAH/gAAf+AAAAAf+AAB/4AAAAB/4AAH/gAAAAH/gAAf+AAAAAf+AAB/4AAAAB/4AAH/gAAAAH/gAAf+AAAAAf+AAB/4AAAAB/4AAH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
    46,
    atob("Ex0oKCgoKCgoKCgoEw=="),
    70|65536
  );
};

Graphics.prototype.setFontOxaniumText = function() {
  // Actual height 35 (34 - 0)
  return this.setFontCustom(
    atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8fAD//4+AH//x8AP//j4Af//HwAAAAAAAAAAAAAAAAAAAAAAAAf8AAAA/4AAAB/wAAAD/gAAAAAAAAAAAAAAAf8AAAA/4AAAB/wAAAD/gAAAH/AAAAAAAAAAAAAAAAAODgAAAcHAAAA4OAAABwcAAH///8AP///4Af///wA////gB////AABwcAAADg4AAAHBwAAf///wA////gB////AD///+AH///8AAHBwAAAODgAAAcHAAAA4OAAABwcAAAAAAAAAAAAAAAAAAAAD/gHAAP/gPAA//AeAB//A8AD/+B4AHg8DwD/B4H+H+DwP8P8Hwf4f4Hg/wDwPB4AHgfDwAPA//gAeB//AA8B/8AAwB/wAAAA+AAAAAAAAAAAAAA//gAAD//gAAH//AAAP/+AAAcAcAAA4A4AABwBwAAD//gMAH//B8AP/+f4AH/z/wAAAf+AAAD/wAAAf+AAAD/gAAAf8AAAD/gAAAf8/8AB/j/+AD8P/+AHgf/8AEA4A4AABwBwAADgDgAAHAHAAAP/+AAAf/8AAAf/wAAAf/AAAAAAAAAAAAAAPB/4AB/n/4AH///4Af///wA////gB4PAHADgOAOAHAcAcAOA4A4AcBwBwA4DgDgBwHAHADgP/+AHAf/8AOA//4AAB//wAAD//gAAHAAAAAOAAAAAcAAAAA4AAAAAAAAAAAAAAD/gAAAH/AAAAP+AAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAB//AAAf//wAH///8Af///8D////+P/AAf+fwAAH8+AAAD4wAAABhgAAADDgAAAOPwAAB+f8AAf8f/wf/wf////AP///4AH///AAB//wAAAHwAAAAAAAAAAAAAADgAAAAHAAAAAOGAAAAeeAAAA98AAAA/4AAA//AAAB/8AAAD/8AAAH/8AAAAf8AAAB74AAADxwAAAHBAAAAOAAAAAMAAAAAAAAAAAAAAAAAA4AAAABwAAAADgAAAAHAAAAAOAAAAAcAAAAA4AAAD//4AAH//wAAP//gAAf//AAAAcAAAAA4AAAABwAAAADgAAAAHAAAAAOAAAAAcAAAAAAAAAAAAAAAAAAH4AAAB/wAAAD/gAAAH+AAAAPwAAAAcAAAAAAAAAAAAAAAAAAAAAOAAAAAcAAAAA4AAAABwAAAADgAAAAHAAAAAOAAAAAcAAAAA4AAAABwAAAADgAAAAAAAAAAAAAAAAAAAAAAAfAAAAA+AAAAB8AAAAD4AAAAHwAAAAAAAAAAAAAAAABAAAAAfAAAAH+AAAB/8AAAP/wAAD/+AAA//gAAP/4AAB/+AAAf/wAAB/8AAAD/AAAAHwAAAAGAAAAAAAAAAAB//8AAP//+AA///+AD///+AH///8APAAB4AeAADwA8AAHgB4AAPADwAAeAHgAA8APAAB4AeAADwA////gB////AB///8AD///4AB///AAAAAAAAAAAAAAAAAAAAAAAOABAAA8AHAAB4AeAADwA8AAHgB4AAPAD///+AH///8AP///4Af///wA////gAAAAPAAAAAeAAAAA8AAAAB4AAAADwAAAAAAAAAAAAAAAAAAAAAf8AGAH/4AeAf/wA8A//gB4D//ADwHweAHgPA8APAeB4AeA8DwA8D4HgB4HgPADwPAeAHgeA8AP/8B4Af/wDwAf/gHgA/+APAAfwAOAAAAAAAAAAAAAAAAAAAYAAHAB4AAPADwOAeAHgeA8APA8B4AeB4DwA8DwHgB4HgPADwPAeAHgeA8APA8B4AeD4DwA////gB////AB///8AD/3/4AB+D/AAAAAAAAAAAAAAAADgAAAAfgAAAD/AAAAf+AAAH/8AAA//4AAH/zwAA/+HgAH/wPAAP+AeAAfwA8AA8AB4ABgADwAAAf/+AAA//8AAB//4AAD//wAAH//gAAAAAAAAAAAAH/8AYAP/8B4Af/4DwA//wHgB//gPADwPAeAHgeA8APA8B4AeB4DwA8DwHgB4HgPADwPAeAHgeA8APA//4AeB//wA8B//ABwD/+AAAB/wAAAAAAAAAAAAAA//8AAP//+AA///+AB///+AH///8APg8B4AeB4DwA8DwHgB4HgPADwPAeAHgeA8APA8B4AeB4DwA8D//gB4H//ABwH/8AAAP/4AAAH/AAAAAAAAAAAAABwAAAADwAAAAHgAAAAPAAAAAeAABwA8AAPgB4AB/ADwAP+AHgB/8APAP/gAeB/8AA8P/gAB4/8AAD//gAAH/8AAAP/gAAAf8AAAA/gAAAAAAAAAAAAAAAAfA/AAD/n/gAP///gA////gB////ADwfAeAHgeA8APA8B4AeB4DwA8DwHgB4HgPADwPAeAHg+A8AP///4Af///wAf///AA/9/+AAfg/wAAAAAAAAAAAAAB/AAAAP/gCAA//gPAD//geAH//A8APAeB4AeA8DwA8B4HgB4DwPADwHgeAHgPA8APAeB4AeA8HwA////gB////AB///8AD///wAB//+AAAAAAAAAAAAAAAAAAAAD4A+AAHwB8AAPgD4AAfAHwAA+APgAAAAAAAAAAAAAAAAAAAAAAfgAfAH/AA+AP+AB8Af4AD4A/AAHwBwAAAAAAAAAAAAAAAAAAAABwAAAAHwAAAAPgAAAA/gAAAB/AAAAHvAAAAPeAAAA++AAAB48AAAHx8AAAPB4AAA+D4AAB4DwAAHwHwAAPAHgAAeAPAAA4AOAAAQAQAAAAAAAAAAAAAABwcAAADg4AAAHBwAAAODgAAAcHAAAA4OAAABwcAAADg4AAAHBwAAAODgAAAcHAAAA4OAAABwcAAADg4AAAHBwAAAODgAAAcHAAAA4OAAAAAAAAAAAAAAAAAAAABwAcAADwB4AAHgDwAAPgPgAAPAeAAAfB8AAAeDwAAA8HgAAA8eAAAB48AAAB7wAAAD3gAAAD+AAAAH8AAAAHwAAAAPgAAAAOAAAAAAAAAAAAAAA4AAAADwAAAAHgAAAAPAAAAAeA/HwA8B+PgB4D8fADwH4+AHgPx8APAeAAAeB8AAA//wAAB//gAAB//AAAB/8AAAA/AAAAAAAAAAAAAAAAAAAAAAP//+AD////gH////Af////A////+BwAAAcDgAAA4HAAABwOA/4DgcH/8HA4f/8OBw//4cDh//w4HDwHhwOHAHDgcOAOHA4cAcOBw4A4cDhwBw4H///hwP///Dgf//+HA///8MB///4AAAAAAAAAAAAAAAAAYAAAAPwAAAD/gAAA//AAAP/+AAD//wAA//4AAP//wAA//ngAB/4PAAD+AeAAHwA8AAP8B4AAf/jwAA///gAAf//AAAD//gAAA//8AAAP/4AAAD/wAAAA/gAAAAPAAAAAAAAAAAAAP///4Af///wA////gB////AD///+AHgeA8APA8B4AeB4DwA8DwHgB4HgPADwPAeAHgeA8APA8B4Af/4DwA////gB////AB///+AB/n/4AAcH/AAAAAAAAAAAAAAAAAAAAAAAAAA///gAH///wAf///wA////gB////ADwAAeAHgAA8APAAB4AeAADwA8AAHgB4AAPADwAAeAHgAA8APAAB4AeAADwA8AAHgB4AAPABwAAcAAAAAAAAAAAAAAAAAAA////gB////AD///+AH///8AP///4AeAADwA8AAHgB4AAPADwAAeAHgAA8APAAB4AeAADwA8AAHgB4AAPAD4AA+AD///4AH///wAH///AAH//8AAD//gAAAAAAAAAAAAAAAAAAAAAAAAA////gB////AD///+AH///8AP///4AeB4DwA8DwHgB4HgPADwPAeAHgeA8APA8B4AeB4DwA8DwHgB4HgPADwPAeAHgeA8APA4B4AcAABwAAAAAAAAAAAAAAAAAAH///8AP///4Af///wA////gB////ADwHgAAHgPAAAPAeAAAeA8AAA8B4AAB4DwAADwHgAAHgPAAAPAeAAAeA8AAA8B4AAB4BwAADgAAAAAAAAAAAAAAAAD//+AAf///AB////AD///+AH///8APAAB4AeAADwA8AAHgB4AAPADwOAeAHgeA8APA8B4AeB4DwA8DwHgB4HgPADwP/+AHgf/8APA//4AOB//wAAD//gAAAAAAAAAAAAAAAAAAAAAAAAf///wA////gB////AD///+AH///8AAA8AAAAB4AAAADwAAAAHgAAAAPAAAAAeAAAAA8AAAAB4AAAADwAAAAHgAAD///+AH///8AP///4Af///wA////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////gB////AD///+AH///8AP///4AAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAAB/gAAAD/gAAAH/gAAAP/AAAAAeAHgAA8APAAB4AeAADwA8AAHgB4AAPADwAAeAHgAA8AP///4Af///wA////gB///+AD///wAAAAAAAAAAAAAAAAAAAAAAAAB////AD///+AH///8AP///4Af///wAAD+AAAAP4AAAA/AAAAD/AAAAf/AAAB//gAAH9/gAAfx/wAB/A/4AH4Af4APgAf4AeAAPwA4AAPgBgAAHAAAAAGAAAAAAAAAAAAAAAAAAA////gB////AD///+AH///8AP///4AAAADwAAAAHgAAAAPAAAAAeAAAAA8AAAAB4AAAADwAAAAHgAAAAPAAAAAeAAAAA8AAAAA4AAAAAAAAAAAAB////AD///+AH///8AP///4Af///wA/4AAAA/+AAAAf/AAAAP/gAAAH/wAAAD/4AAAA/8AAAAf4AAAAfwAAAD/gAAAf/AAAD/4AAAf/AAAH/wAAA/+AAAH/wAAAP///4Af///wA////gB////AD///+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+AH///8AP///4Af///wA////gB/gAAAB/wAAAA/4AAAAf4AAAAf8AAAAP+AAAAP+AAAAH/AAAAD/AAAAD/gAAAB/wA////gB////AD///+AH///8AP///4AAAAAAAAAAAAAAAAAAAAAAAAA///gAH///wAf///wA////gB////ADwAAeAHgAA8APAAB4AeAADwA8AAHgB4AAPADwAAeAHgAA8APAAB4AeAADwA8AAHgB////AD///+AD///4AD///gAA//4AAAAAAAAAAAAAAAAAAAAAAAAAP///4Af///wA////gB////AD///+AHgDwAAPAHgAAeAPAAA8AeAAB4A8AADwB4AAHgDwAAPAHgAAeAfAAA//8AAB//4AAB//wAAD//AAAB/4AAAAAAAAAAAAAAAAAAAAAf//wAD///4AP///4Af///wA////gB4AAPADwAAeAHgAA8APAAB4AeAADwA8AAHgB4AAPgDwAAfwHgAA/8PAAB/4eAAD/w////vh////HB///8AB///wAAf/8AAAAAAAAAAAAAAAAAAAAAAAAAH///8AP///4Af///wA////gB////ADwDwAAHgHgAAPAPAAAeAeAAA8A8AAB4B4AADwD8AAHgH/AAPAf/gAf///wA//7/gA//x/AB//A+AA/4AcAAAAAAAAAAAAAD4ADAAf+APAB/8AeAH/8A8AP/4B4AeD4DwA8DwHgB4HgPADwPAeAHgeA8APA+B4AeA8DwA8B4HgB4D//ADwH/+AHgH/8AHAP/wAAAH+AAAAAAABwAAAADwAAAAHgAAAAPAAAAAeAAAAA8AAAAB4AAAADwAAAAH///8AP///4Af///wA////gB////ADwAAAAHgAAAAPAAAAAeAAAAA8AAAAB4AAAADwAAAAHAAAAAAAAAAAAAAAAA///8AB///+AD///8AH///8AP///4AAAADwAAAAHgAAAAPAAAAAeAAAAA8AAAAB4AAAADwAAAAHgAAAAPAAAAAeAH///8AP///4Af///wA////AB///4AAAAAAAAAAAAAMAAAAAfgAAAA/4AAAB/+AAAD//wAAB//8AAAf//AAAD//wAAA//gAAAP/AAAAB+AAAAD8AAAA/4AAAf/wAAH//gAB//4AA//+AAH//gAAP/4AAAf8AAAA/AAAABwAAAACAAAAAH4AAAAP/gAAAf/8AAA///wAAf//+AAD//+AAAP/8AAAA/4AAAAPwAAAD/gAAB//AAA//+AAf//wAD//4AAH/8AAAP/AAAAf/4AAA///AAAH//4AAA//4AAAP/wAAAB/gAAAA/AAAA/+AAA//8AA///4Af//+AA///AAB//AAAD/gAAAHgAAAAAAAAAAAAAAQAwAADgBwAAPAD4AB+AH8AH8AP8A/4AP+D/AAH+f4AAH//gAAD/8AAAB/wAAAH/gAAAf/wAAD//wAAf8f4AB/gf4AH+AP8APwAP4AfAAHwA4AAHgBAAADAAAAAAAGAAAAAPAAAAAfgAAAA/wAAAB/wAAAB/4AAAA/8AAAAf+AAAAP//wAAH//gAAH//AAA//+AAH//8AAf+AAAD/wAAAf+AAAB/wAAAD+AAAAHwAAAAOAAAAAAAAAAAAAAAABwAAPADwAA+AHgAH8APAAf4AeAB/wA8AP/gB4A//ADwH+eAHgf48APD/B4AeP8DwA9/gHgB/+APAD/4AeAH/AA8AP8AB4AfgADwA+AAHgBwAAPAAAAAAAAAAAAAAAAAAB/////z/////n/////P////+f////84AAAA5wAAABzgAAADnAAAAHOAAAAOEAAAAAfAAAAA/wAAAB/8AAAB/+AAAA//gAAAP/4AAAD/+AAAA//AAAAf/wAAAH/wAAAB/gAAAAfAAAAAMBwAAABzgAAADnAAAAHOAAAAOcAAAAc/////5/////z/////n/////P////+AAAAAAAAAAAAAAAAAAADgAAAAPAAAAB/AAAAP+AAAB/wAAAP+AAAA/wAAAB+AAAAD4AAAAH4AAAAP8AAAAP+AAAAH/AAAAD/AAAAD/AAAAB8AAAAA4AAAAAAAAAAAAAAAAAAADgAAAAHAAAAAOAAAAAcAAAAA4AAAABwAAAADgAAAAHAAAAAOAAAAAcAAAAA4AAAABwAAAADgAAAAHAAAAAOAAAAAcAAAAA4AAAABwAAAADgAAAAAAAAAAAAAAAAAAAAAADAAAAAPAAAAAfAAAAA/AAAAA/AAAAA+AAAAAcAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAB/wAAMH/wAA4P/gABwf/AADg4eAAHBwcAAODg4AAcHBwAA4ODgABwcHAAD//+AAH//8AAP//4AAP//wAAP//gAAAAAAAAAAAAAAAAAAAAAAAA////wB////gD////AH///+AP///8AAOAA4AAcABwAA4ADgABwAHAADgAOAAHAAcAAPAB4AAf//wAA///gAA//+AAB//8AAAf/AAAAAAAAAAAAAAAAAAAAAf/8AAB//8AAH//8AAP//4AAf//wAA4ADgABwAHAADgAOAAHAAcAAOAA4AAcABwAA4ADgABwAHAADgAOAADAAYAAAAAAAAAAAAAAAAAAAAf/8AAB//8AAH//8AAP//4AAf//wAA4ADgABwAHAADgAOAAHAAcAAOAA4AAcABwAA4ADgD////AH///+AP///8Af///4A////wAAAAAAAAAAAAAAAAAAAB//wAAH//wAAf//wAA///gAB///AADg4OAAHBwcAAODg4AAcHBwAA4ODgABwcHAADw4OAAH/wcAAP/g4AAP/BwAAP+DAAAB4AAAAAAAAAAAAAAAAAAAAH///wA////gD////AH///+AP///8AcOAAAA4cAAABw4AAADhwAAAHDgAAAOHAAAAMAAAAAAAAAAAAAAAAAAf/8AAB//8GAH//8OAP//4cAf//w4A4ADhwBwAHDgDgAOHAHAAcOAOAA4cAcABw4A4ADjwB////gD////AH///8AP///wAAAAAAAAAAAAAAAAAAAAAAAP///8Af///4A////wB////gD////AADgAAAAHAAAAAOAAAAAcAAAAA4AAAABwAAAADwAAAAH//8AAP//4AAP//wAAf//gAAH//AAAAAAAAAAAAAAAAAAAAAAAAB4///gDx///AHj//+APH//8AeP//4AAAAAAAAAAAAAAAAADgAAAAPPH///+eP///88f///x4////Dx///4AAAAAAAAAAAAAAAAAAAAAAAB////gD////AH///+AP///8Af///4AAAfwAAAB/AAAAH/AAAAf/AAAB//gAAH5/gAAfh/wAA+A/gAB4A/AADgAeAAGAAcAAAAAIAAAAAAAAAAAAD///4AH///8AP///8Af///4A////wAAAAHgAAAAHAAAAAAAAAAAAAAAAAAAAf//wAA///gAB///AAD//+AAH//8AAOAAAAAcAAAAA4AAAABwAAAADgAAAAHAAAAAP//4AAf//wAA///gAB///AAD//+AAHAAAAAOAAAAAcAAAAA4AAAABwAAAADgAAAAHgAAAAP//4AAf//wAAf//gAAf//AAAP/+AAAAAAAAAAAAAAAAAAAA///gAB///AAD//+AAH//8AAP//4AAcAAAAA4AAAABwAAAADgAAAAHAAAAAOAAAAAeAAAAA///gAB///AAB//+AAD//8AAA//4AAAAAAAAAAAAAAAAAAAAAAAAAB//wAAH//wAAf//wAA///gAB///AADgAOAAHAAcAAOAA4AAcABwAA4ADgABwAHAADwAeAAH//8AAP//4AAP//gAAf//AAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAA////wB////gD////AH///+AP///8AcABwAA4ADgABwAHAADgAOAAHAAcAAOAA4AAeADwAA///gAB///AAB//8AAD//4AAA/+AAAAAAAAAAAAAAAAAAAAA//4AAD//4AAP//4AAf//wAA///gABwAHAADgAOAAHAAcAAOAA4AAcABwAA4ADgABwAHAAD////AH///+AP///8Af///4A////wAAAAAAAAAAAAAAAAAAH//4AAP//wAA///gAB///AAD//+AAHAAAAAOAAAAAcAAAAA4AAAABwAAAABgAAAAAAAAAAA4AwAAH8BwAAf8DgAB/4HAAD/4OAAHjwcAAOHg4AAcPBwAA4ODgABweHAADg/+AAHB/8AAOD/4AAcD/gAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAf//+AA////AB////AD///+AH///8AAOAA4AAcABwAA4ADgABwAHAADgAOAAHAAcAAAAAgAAAAAAAAAAAAAB//4AAD//8AAH//8AAP//4AAf//wAAAADgAAAAHAAAAAOAAAAAcAAAAA4AAAABwAAAADgAB///AAD//+AAH//8AAP//4AAf//wAAAAAAAAAAAAADAAAAAHwAAAAP8AAAAf/AAAA//wAAAP/+AAAD/+AAAA/8AAAAP4AAAAHwAAAB/gAAAf/AAAH/+AAD//gAAP/4AAAf+AAAA/gAAAB4AAAAAAAAAAGAAAAAP4AAAAf/AAAA//8AAB///AAAf/+AAAB/8AAAAH4AAAA/wAAAf/gAAP//AAD//4AAH/8AAAP+AAAAf4AAAA//AAAB//4AAAf/+AAAD/8AAAAf4AAAAPwAAAH/gAAH//AAD//+AAH//gAAP/wAAAfwAAAA4AAAAAAABAADAAGAAHAA8AAPgD4AAfgfwAA/x/gAAf/8AAAf/wAAAP+AAAAf4AAAB/8AAAP/8AAA/3+AAD+D+AAH4D8AAPAD4AAcABwAAgABgAAAAAAADAAAAAHwAAAAP8AAAAf/AAAA//wAAAP/+AAAD/+HAAA/9+AAAP/8AAAH/4AAB//gAAf/4AAH/+AAD//gAAP/4AAAf+AAAA/gAAAB4AAAAAAAAAAAAAAAAOAA4AAcAHwAA4AfgABwB/AADgP+AAHA/8AAOD+4AAcf5wAA5/DgAB/8HAAD/wOAAH+AcAAP4A4AAfgBwAA8ADgABwAHAAAAAAAAAAAAAAAHAAAAAfAAAAB/AAA////4H////8f/+//8//4//5//g//zwAAAHnAAAAHOAAAAOcAAAAcAAAAAAAAAAAAAAAAAAAAAAAH/////P////+f////8/////4AAAAAAAAAAAAAAAAAcAAAAc4AAAA5wAAABzgAAADngAAAPP/8H/+f/8f/8f/9//wf////AP///4AAD+AAAAD4AAAADgAAAAAAAAAAAAAAAAIAAAAA4AAAAD4AAAAPgAAAA+AAAAB4AAAADwAAAAHwAAAAPwAAAAPwAAAAPgAAAAPAAAAAeAAAAB8AAAAH4AAAAfgAAAAeAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='),
    32,
    atob("CAkOGBQeFwgLCxIUCQ0JDhQUFBQUFBQUFBQJCRQUFBIcFhcVGBUUGBkKFRcTHxkZFhkWFBUYFiEWFRUMDgwTFBITFBIUFA4UFQkJEwofFRUUFA0SDhUTHBMTEg4KDhQS"),
    35|65536
  );
};

const dows =
[
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

var zones =
/* require("Storage").readJSON("timezones.json", 1) || */ [
    { "name": "SFO", "offset": -480, "current_offset": 0, "next_change": 0, "is_dst": false, "dst_month": 3, "dst_date":  8, "dst_dow": 0, "dst_hour": 2, "std_month": 11, "std_date":  1, "std_dow": 0, "std_hour": 2 },
    { "name": "LON", "offset":    0, "current_offset": 0, "next_change": 0, "is_dst": false, "dst_month": 3, "dst_date": -7, "dst_dow": 0, "dst_hour": 1, "std_month": 10, "std_date": -7, "std_dow": 0, "std_hour": 2 },
];

function DaysInMonth(year, month)
{
    // Given the limited use case of this, I'm not sure we need the February logic.  As far as I can tell,
    // there isn't a jurisdiction anywhere on Earth that changes to or from daylight savings in February.
    // It's generally March or April.  But this is left in for the sake of completeness.
    if (month == 2)
    {
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
    }
    else
    {
        return month == 4 || month == 6 || month == 9 || month == 11 ? 30 : 31;
    }
}

// Standard Zeller's congruence
function DateToDow(year, month, day)
{
    if (month < 3)
    {
        month += 12;
        year--;
    }
    return (day + Math.floor(((month + 1) * 13) / 5) + 6 + year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)) % 7;
}

// Returns the day of month of the first "dow" day starting from the date in the given month and year.
// Negative date values mean count from end of month, so -7 is the last Xday, -14 is the seconds to last, etc.
function YearToStartEndDay(year, month, date, dow)
{
    const firstPossibleDay = date < 0 ? DaysInMonth(year, month) + 1 + date : date;
    const dowOfFirstPossible = DateToDow(year, month, firstPossibleDay);
    const daysToAdvance = (7 + dow - dowOfFirstPossible) % 7;
    return firstPossibleDay + daysToAdvance;
}

// Determine if a year, month, day, hour quartet are in DST for the zone idx
function TimeIsDst(year, month, day, hours, idx)
{
    var zone = zones[idx];
    // if both months are the same, this zone doesn't observe DST
    if (zone.dst_month == zone.std_month)
    {
        return false;
    }
    // We need to know if we're in the nothern hemisphere or not.  That can be determined by the
    // relative order of the two months
    var nothernHemisphere = zone.dst_month < zone.std_month;
    if (nothernHemisphere && month > zone.dst_month && month < zone.std_month)
    {
        return true;
    }
    if (!nothernHemisphere && (month < zone.std_month || month > zone.dst_month))
    {
        return true;
    }
    if (month == zone.dst_month)
    {
        // In the month when DST starts.  Get the date in the month when DST actually starts
        const dstDay = YearToStartEndDay(year, zone.dst_month, zone.dst_date, zone.dst_dow);
        // and if we'er after that day, or on that day but after the hour, then it's DST
        if (day > dstDay || day == dstDay && hours >= zone.dst_hour)
        {
            return true;
        }
    }
    if (month == zone.std_month)
    {
        // Likewise for the month when DST ends
        const stdDay = YearToStartEndDay(year, zone.std_month, zone.std_date, zone.std_dow);
        if (day < stdDay || day == stdDay && hours < zone.std_hour - 1)
        {
            return true;
        }
    }
    return false;
}

// The current offset and next change logic is pretty expensive.  However it's run very infrequently:
// once at startup, and then after that only two times a year.

// Evaluate offsets for the specified zone(s)
function ComputeCurrentOffsets(first, last)
{
    const now = new Date();
    const utcMilliSeconds = now.getTime();
    for (idx = first; idx < last; idx++)
    {
        var zoneOffset = zones[idx].offset * 60000;             // zone offset is in minutes: convert to milliseconds
        var zoneMilliSeconds = utcMilliSeconds + zoneOffset;
        var date = new Date();
        date.setTime(zoneMilliSeconds);
        if (TimeIsDst(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), idx))
        {
            zones[idx].current_offset = zoneOffset + 3600000;
            zones[idx].is_dst = true;
        }
        else
        {
            zones[idx].current_offset = zoneOffset;
            zones[idx].is_dst = false;
        }
    }
}

function ComputeNextChanges(first, last)
{
    const now = new Date();
    for (idx = first; idx < last; idx++)
    {
    }
}

//function Render(date)
//{
//    print("" + date.getYear() + "/" + ("" + (date.GetMonth() + 1)).padStart(2, '0') + "/" + ("" + date.getDate()).padStart(2, '0') + " " +
//        ("" + date.getHours()).padStart(2, '0') + ":" + ("" + date.getMinutes()).padStart(2, '0') + ":" + ("" + date.getSeconds()).padStart(2, '0'));
//}

function GetDate(idx)
{
    var date = new Date();
    date.setTime(date.getTime() + zones[idx].current_offset);
    return date;
}

function draw()
{
    var date = GetDate(0);

    var y = 66;

    g.setColor(0, 0, 0).fillRect(0, y - 28, 176, y + 19);
    g.setColor(0, 1, 1).setFontAlign(0, 0).setFont("OxaniumTime");

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var timeStr = ("" + hours).padStart(2, '0') + ":" + ("" + minutes).padStart(2, '0');
    g.drawString(timeStr, 88, y);
/*
    // I hope this never gets used.  As long as the font has
    // monospaced numbers, we don't need this.  That's one
    // of the nice properties of the Oxanium family, the
    // numbers are monospaced.
    var digit = "" + Math.floor(hours / 10);
    g.drawString(digit, 19, y);     // x - 69
    digit = "" + hours % 10;
    g.drawString(digit, 58, y);     // x - 30
    g.drawString(":", 88, y);       // x
    digit = "" + Math.floor(minutes / 10);
    g.drawString(digit, 118, y);    // x + 30
    digit = "" + minutes % 10;
    g.drawString(digit, 157, y);    // x + 69
*/

    g.setFont("OxaniumText");
    var dow = date.getDay();
    if (dow != lastDow)
    {
        lastDow = dow;
        y = 116;
        g.setColor(0, 0, 0).fillRect(0, y - 15, 176, y + 12);
        g.setColor(0, 1, 0).drawString(dows[dow], 37, y);

        var month = date.getMonth() + 1;
        var dateStr = "" + month + "/" + ("" + date.getDate()).padStart(2, '0');
        // Move this a little left or right depending on whether the
        // month is one or two digits.  This has the net result of always
        // rendering the slash in the same place.
        var x = month >= 10 ? 129 : 139;
        g.drawString(dateStr, x, y);
    }

    // Now render the time in the currently selected other zone
    date = GetDate(zoneIndex)

    y = 154;
    g.setColor(0, 0, 0).fillRect(0, y - 14, 176, y + 10);

    g.setColor(1, 1, 0).drawString(zones[zoneIndex].name, 39, y);
    var zoneTimeStr = ("" + date.getHours()).padStart(2, '0') + ":" + ("" + date.getMinutes()).padStart(2, '0');
    g.drawString(zoneTimeStr, 131, y);

    // For all zones, check if they observe DST, and if so check if their next chage time has passed.
    // If so, compute the new offset, and the time of the next change after this one.
    const now = new Date();
    const currentMilliSeconds = now.getTime();
    for (idx = 0; idx < zones.length; idx++)
    {
        if (false && zones[idx].dst_month != zones[idx].std_month && currentMilliSeconds >= zones[idx].next_change)
        {
            ComputeCurrentOffsets(idx, idx + 1);
            ComputeNextChanges(idx, idx + 1);
        }
    }

    // Figure how many milliseconds we need to delay to
    // get to the top of the next minute.  Add 5 so this
    // actually causes draw() to get called at 5 ms after
    // the top of the minute.
    var delayNeeded = 60005 - (date.getSeconds() * 1000 + date.getMilliseconds());
    drawTimeout = setTimeout(draw, delayNeeded);
}

function onTouch(button, xy)
{
    if (++zoneIndex >= zones.length)
    {
        zoneIndex = 1;
    }
    clearTimeout(drawTimeout);
    draw();
}

// Clear the screen once, at startup
g.clear().setColor(0, 0, 0).fillRect(0, 0, 176, 176);
zoneIndex = 1;

Bangle.loadWidgets();
Bangle.drawWidgets();

// Handle touch events
Bangle.on("touch", onTouch);

// Make sure the middle button works properly
setUI({mode:"clock"});

ComputeCurrentOffsets(0, zones.length);
ComputeNextChanges(0, zones.length);

// Draw immediately.  Subsequent draw() calls are scheduled from within draw() and onTouch()
draw();

