// 1. Greeting fallback

function greet(name) { 
 return name || "Guest"; 
} 

test('returns Guest when name is empty', () => { 
 // Arrange 
 const name = ""; 
 // Act 
 const result = greet(name); cd
 // Assert 
 expect(result).toBe("Guest"); 
}); 

// 2. Boolean toggle 
//JavaScript 
function toggle(value) { 
 return !value; 
}

test('toggles boolean value', () => {  
 // Arrange 
 const input = true; 
 // Act 
 const result = toggle(input); 
 // Assert 
 expect(result).toBe(false); 
}); 

// 3. Add item to array 
//JavaScript 
function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 

test('adds item to array', () => {  
 // Arrange 
 const arr = [1, 2]; 
 // Act 
 const result = addItem(arr, 3); 
 // Assert 
 expect(result).toEqual([1, 2, 3]); 
}); 

// 4. Remove item from array 
//JavaScript 
function removeItem(arr, item) {  return arr.filter(i => i !== item); } 

test('removes item from array', () => {  
 // Arrange 
 const arr = ["apple", "banana"];
 // Act 
 const result = removeItem(arr, "apple"); 
 // Assert 
 expect(result).toEqual(["banana"]); 
}); 

// 5. Check password length 
 //JavaScript 
function isValidPassword(password) { 
 return password.length >= 6; 
} 

test('returns true for valid password length', () => {  
    
 // Arrange 
 const password = "password123"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
}); 






// 5 Tests for isValidPassword 
//JavaScript 
function isValidPassword(password) { 
 return password.length >= 6; 
}
test('isValidPassword: positive case', () => { 
 // Arrange 
 const password = "mypassword123"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
});

test('isValidPassword: negative case', () => { 
 // Arrange 
 const password = "abc"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(false); 
});

test('isValidPassword: boundary case', () => { 
 // Arrange 
 const password = "123456"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
});

test('isValidPassword: edge case (empty string)', () => { 
 // Arrange 
 const password = ""; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(false); 
});

test('isValidPassword: edge case (special characters)', () => { 
 // Arrange 
 const password = "!@#$%^"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
});

// 5 Tests for containsWord
//JavaScript 
function containsWord(sentence, word)
 {  return sentence.includes(word); } 


test('containsWord: positive case', () => { 
 // Arrange 
 const sentence = "JavaScript is awesome"; 
 const word = "awesome";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(true); 
});

test('containsWord: negative case', () => { 
 // Arrange 
 const sentence = "JavaScript is awesome"; 
 const word = "Python";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(false); 
});

test('containsWord: boundary case (full sentence)', () => { 
 // Arrange 
 const sentence = "Hello"; 
 const word = "Hello";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(true); 
});

test('containsWord: edge case (case sensitivity)', () => { 
 // Arrange 
 const sentence = "I love coding"; 
 const word = "LOVE";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(false); 
});

test('containsWord: edge case (empty word)', () => { 
 // Arrange 
 const sentence = "Hello"; 
 const word = "";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(true); 
});

// 5 Tests for addItem 
//JavaScript 
function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 


test('addItem: positive case', () => { 
 // Arrange 
 const arr = ["red", "blue"]; 
 const item = "green";
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result).toEqual(["red", "blue", "green"]); 
});

test('addItem: add to empty array', () => { 
 // Arrange 
 const arr = []; 
 const item = 1;
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result).toEqual([1]); 
});

test('addItem: boundary case (duplicate item)', () => { 
 // Arrange 
 const arr = [10, 20]; 
 const item = 10;
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result).toEqual([10, 20, 10]); 
});

test('addItem: edge case (adding boolesn)', () => { 
 // Arrange 
 const arr = [1, 2]; 
 const item = true;
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result).toEqual([1, 2, true]); 
});

test('addItem: edge case (checking length)', () => { 
 // Arrange 
 const arr = [5, 6, 7]; 
 const item = 8;
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result.length).toBe(4); 
});



