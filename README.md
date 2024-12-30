# JavaScript Error Handling: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error and how to effectively handle it.

## The Problem

The `bug.js` file contains a function that attempts to access the `length` property of a variable that might be `null` or `undefined`. This will result in a `TypeError` being thrown.

## The Solution

The `bugSolution.js` file demonstrates a safe way to handle potential `null` or `undefined` values by explicitly checking for them before accessing the `length` property.