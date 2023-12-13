const keys = [
	{id: 'Backquote', nonShift: '`', shift: '~'},
	{id: 'Digit1', nonShift: '1', shift: '!'},
	{id: 'Digit2', nonShift: '2', shift: '@'},
	{id: 'Digit3', nonShift: '3', shift: '#'},
	{id: 'Digit4', nonShift: '4', shift: '$'},
	{id: 'Digit5', nonShift: '5', shift: '%'},
	{id: 'Digit6', nonShift: '6', shift: '^'},
	{id: 'Digit7', nonShift: '7', shift: '&'},
	{id: 'Digit8', nonShift: '8', shift: '*'},
	{id: 'Digit9', nonShift: '9', shift: '('},
	{id: 'Digit0', nonShift: '0', shift: ')'},
	{id: 'Minus', nonShift: '-', shift: '_'},
	{id: 'Equal', nonShift: '=', shift: '+'},
	{id: 'Backspace', nonShift: 'Backspace', shift: 'Backspace'},
];

const keys2 = [
	{id: 'Tab', nonShift: 'Tab', shift: 'Tab'},
	{id: 'KeyQ', nonShift: 'q', shift: 'Q'},
	{id: 'KeyW', nonShift: 'w', shift: 'W'},
	{id: 'KeyE', nonShift: 'e', shift: 'E'},
	{id: 'KeyR', nonShift: 'r', shift: 'R'},
	{id: 'KeyT', nonShift: 't', shift: 'T'},
	{id: 'KeyY', nonShift: 'y', shift: 'Y'},
	{id: 'KeyU', nonShift: 'u', shift: 'U'},
	{id: 'KeyI', nonShift: 'i', shift: 'I'},
	{id: 'KeyO', nonShift: 'o', shift: 'O'},
	{id: 'KeyP', nonShift: 'p', shift: 'P'},
	{id: 'BracketLeft', nonShift: '[', shift: '{'},
	{id: 'BracketRight', nonShift: ']', shift: '}'},
	{id: 'Backslash', nonShift: '\\', shift: '|'},
];

const keys3 = [
	{id: 'CapsLock', nonShift: 'CapsLock', shift: 'CapsLock'},
	{id: 'KeyA', nonShift: 'a', shift: 'A'},
	{id: 'KeyS', nonShift: 's', shift: 'S'},
	{id: 'KeyD', nonShift: 'd', shift: 'D'},
	{id: 'KeyF', nonShift: 'f', shift: 'F'},
	{id: 'KeyG', nonShift: 'g', shift: 'G'},
	{id: 'KeyH', nonShift: 'h', shift: 'H'},
	{id: 'KeyJ', nonShift: 'j', shift: 'J'},
	{id: 'KeyK', nonShift: 'k', shift: 'K'},
	{id: 'KeyL', nonShift: 'l', shift: 'L'},
	{id: 'Semicolon', nonShift: ';', shift: ':'},
	{id: 'Quote', nonShift: "'", shift: '"'},
	{id: 'Enter', nonShift: 'Enter', shift: 'Enter'},
];

const keys4 = [
	{id: 'ShiftLeft', nonShift: 'Shift', shift: 'Shift'},
	{id: 'KeyZ', nonShift: 'z', shift: 'Z'},
	{id: 'KeyX', nonShift: 'x', shift: 'X'},
	{id: 'KeyC', nonShift: 'c', shift: 'C'},
	{id: 'KeyV', nonShift: 'v', shift: 'V'},
	{id: 'KeyB', nonShift: 'b', shift: 'B'},
	{id: 'KeyN', nonShift: 'n', shift: 'N'},
	{id: 'KeyM', nonShift: 'm', shift: 'M'},
	{id: 'Comma', nonShift: ',', shift: '<'},
	{id: 'Period', nonShift: '.', shift: '>'},
	{id: 'Slash', nonShift: '/', shift: '?'},
	{id: 'ShiftRight', nonShift: 'Shift', shift: 'Shift'},
];

const keys5 = [
	{id: 'ControlLeft', nonShift: 'Ctrl', shift: 'Ctrl'},
	{id: 'MetaLeft', nonShift: 'Meta', shift: 'Meta'},
	{id: 'AltLeft', nonShift: 'Alt', shift: 'Alt'},
	{id: 'Space', nonShift: 'Space', shift: 'Space'},
	{id: 'AltRight', nonShift: 'Alt', shift: 'Alt'},
	{id: 'MetaRight', nonShift: 'Meta', shift: 'Meta'},
	{id: 'ControlRight', nonShift: 'Ctrl', shift: 'Ctrl'},
];

const keysRU = [
	{id: 'Backquote', nonShift: 'ё', shift: 'Ё'},
	{id: 'Digit1', nonShift: '1', shift: '!'},
	{id: 'Digit2', nonShift: '2', shift: '"'},
	{id: 'Digit3', nonShift: '3', shift: '№'},
	{id: 'Digit4', nonShift: '4', shift: ';'},
	{id: 'Digit5', nonShift: '5', shift: '%'},
	{id: 'Digit6', nonShift: '6', shift: ':'},
	{id: 'Digit7', nonShift: '7', shift: '?'},
	{id: 'Digit8', nonShift: '8', shift: '*'},
	{id: 'Digit9', nonShift: '9', shift: '('},
	{id: 'Digit0', nonShift: '0', shift: ')'},
	{id: 'Minus', nonShift: '-', shift: '_'},
	{id: 'Equal', nonShift: '=', shift: '+'},
	{id: 'Backspace', nonShift: 'Backspace', shift: 'Backspace'},
];

const keysRU2 = [
	{id: 'Tab', nonShift: 'Tab', shift: 'Tab'},
	{id: 'KeyQ', nonShift: 'й', shift: 'Й'},
	{id: 'KeyW', nonShift: 'ц', shift: 'Ц'},
	{id: 'KeyE', nonShift: 'у', shift: 'У'},
	{id: 'KeyR', nonShift: 'к', shift: 'К'},
	{id: 'KeyT', nonShift: 'е', shift: 'Е'},
	{id: 'KeyY', nonShift: 'н', shift: 'Н'},
	{id: 'KeyU', nonShift: 'г', shift: 'Г'},
	{id: 'KeyI', nonShift: 'ш', shift: 'Ш'},
	{id: 'KeyO', nonShift: 'щ', shift: 'Щ'},
	{id: 'KeyP', nonShift: 'з', shift: 'З'},
	{id: 'BracketLeft', nonShift: 'х', shift: 'Х'},
	{id: 'BracketRight', nonShift: 'ъ', shift: 'Ъ'},
	{id: 'Backslash', nonShift: '\\', shift: '/'},
];

const keysRU3 = [
	{id: 'CapsLock', nonShift: 'CapsLock', shift: 'CapsLock'},
	{id: 'KeyA', nonShift: 'ф', shift: 'Ф'},
	{id: 'KeyS', nonShift: 'ы', shift: 'Ы'},
	{id: 'KeyD', nonShift: 'в', shift: 'В'},
	{id: 'KeyF', nonShift: 'а', shift: 'А'},
	{id: 'KeyG', nonShift: 'п', shift: 'П'},
	{id: 'KeyH', nonShift: 'р', shift: 'Р'},
	{id: 'KeyJ', nonShift: 'о', shift: 'О'},
	{id: 'KeyK', nonShift: 'л', shift: 'Л'},
	{id: 'KeyL', nonShift: 'д', shift: 'Д'},
	{id: 'Semicolon', nonShift: 'ж', shift: 'Ж'},
	{id: 'Quote', nonShift: 'э', shift: 'Э'},
	{id: 'Enter', nonShift: 'Enter', shift: 'Enter'},
];

const keysRU4 = [
	{id: 'ShiftLeft', nonShift: 'Shift', shift: 'Shift'},
	{id: 'KeyZ', nonShift: 'я', shift: 'Я'},
	{id: 'KeyX', nonShift: 'ч', shift: 'Ч'},
	{id: 'KeyC', nonShift: 'с', shift: 'С'},
	{id: 'KeyV', nonShift: 'м', shift: 'М'},
	{id: 'KeyB', nonShift: 'и', shift: 'И'},
	{id: 'KeyN', nonShift: 'т', shift: 'Т'},
	{id: 'KeyM', nonShift: 'ь', shift: 'Ь'},
	{id: 'Comma', nonShift: 'б', shift: 'Б'},
	{id: 'Period', nonShift: 'ю', shift: 'Ю'},
	{id: 'Slash', nonShift: '.', shift: ','},
	{id: 'ShiftRight', nonShift: 'Shift', shift: 'Shift'},
];

const keysRU5 = [
	{id: 'ControlLeft', nonShift: 'Ctrl', shift: 'Ctrl'},
	{id: 'MetaLeft', nonShift: 'Win', shift: 'Win'},
	{id: 'AltLeft', nonShift: 'Alt', shift: 'Alt'},
	{id: 'Space', nonShift: 'Space', shift: 'Space'},
	{id: 'AltRight', nonShift: 'Alt', shift: 'Alt'},
	{id: 'MetaRight', nonShift: 'Win', shift: 'Win'},
	{id: 'ControlRight', nonShift: 'Ctrl', shift: 'Ctrl'},
];

const buttonsKeyboard = [keys, keys2, keys3, keys4, keys5];
const buttonsKeyboardRU = [keysRU, keysRU2, keysRU3, keysRU4, keysRU5];

export {buttonsKeyboard, buttonsKeyboardRU};
