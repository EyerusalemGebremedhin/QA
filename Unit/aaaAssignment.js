// JAVASCRPIT FUNCTIONS
function greet(name) { return name || "Guest"; }
function toggle(value) { return !value; }
function addItem(arr, item) { arr.push(item); return arr; }
function removeItem(arr, item) { return arr.filter(i => i !== item); }
function isValidPassword(password) { return password.length >= 6; }
function containsWord(sentence, word) { return sentence.includes(word); }

// STAGE 1 & 2 TESTS
test('returns Guest when name is empty', () => { 
    const name = ""; 
    const result = greet(name); 
    expect(result).toBe("Guest"); 
}); 

test('toggles boolean value', () => {  
    const input = true; 
    const result = toggle(input); 
    expect(result).toBe(false); 
}); 

test('adds item to array', () => {  
    const arr = [1, 2]; 
    const result = addItem(arr, 3); 
    expect(result).toEqual([1, 2, 3]); 
}); 

test('removes item from array', () => {  
    const arr = ["apple", "banana"];
    const result = removeItem(arr, "apple"); 
    expect(result).toEqual(["banana"]); 
}); 

test('returns true for valid password length', () => {  
    const password = "password123"; 
    const result = isValidPassword(password); 
    expect(result).toBe(true); 
}); 

// STAGE 3 TESTS (5 per function)

// isValidPassword
test('isValidPassword: positive case', () => { 
    const password = "mypassword123"; 
    const result = isValidPassword(password); 
    expect(result).toBe(true); 
});
test('isValidPassword: negative case', () => { 
    const password = "abc"; 
    const result = isValidPassword(password); 
    expect(result).toBe(false); 
});
test('isValidPassword: boundary case', () => { 
    const password = "123456"; 
    const result = isValidPassword(password); 
    expect(result).toBe(true); 
});
test('isValidPassword: edge case (empty string)', () => { 
    const password = ""; 
    const result = isValidPassword(password); 
    expect(result).toBe(false); 
});
test('isValidPassword: edge case (special characters)', () => { 
    const password = "!@#$%^"; 
    const result = isValidPassword(password); 
    expect(result).toBe(true); 
});

// containsWord
test('containsWord: positive case', () => { 
    const sentence = "JavaScript is awesome"; 
    const word = "awesome";
    const result = containsWord(sentence, word); 
    expect(result).toBe(true); 
});
test('containsWord: negative case', () => { 
    const sentence = "JavaScript is awesome"; 
    const word = "Python";
    const result = containsWord(sentence, word); 
    expect(result).toBe(false); 
});
test('containsWord: boundary case (full sentence)', () => { 
    const sentence = "Hello"; 
    const word = "Hello";
    const result = containsWord(sentence, word); 
    expect(result).toBe(true); 
});
test('containsWord: edge case (case sensitivity)', () => { 
    const sentence = "I love coding"; 
    const word = "LOVE";
    const result = containsWord(sentence, word); 
    expect(result).toBe(false); 
});
test('containsWord: edge case (empty word)', () => { 
    const sentence = "Hello"; 
    const word = "";
    const result = containsWord(sentence, word); 
    expect(result).toBe(true); 
});

// addItem
test('addItem: positive case', () => { 
    const arr = ["red", "blue"]; 
    const item = "green";
    const result = addItem(arr, item); 
    expect(result).toEqual(["red", "blue", "green"]); 
});
test('addItem: add to empty array', () => { 
    const arr = []; 
    const item = 1;
    const result = addItem(arr, item); 
    expect(result).toEqual([1]); 
});
test('addItem: boundary case (duplicate item)', () => { 
    const arr = [10, 20]; 
    const item = 10;
    const result = addItem(arr, item); 
    expect(result).toEqual([10, 20, 10]); 
});
test('addItem: edge case (adding boolean)', () => { 
    const arr = [1, 2]; 
    const item = true;
    const result = addItem(arr, item); 
    expect(result).toEqual([1, 2, true]); 
});
test('addItem: edge case (checking length)', () => { 
    const arr = [5, 6, 7]; 
    const item = 8;
    const result = addItem(arr, item); 
    expect(result.length).toBe(4); 
});
