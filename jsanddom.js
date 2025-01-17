     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
        var minimum = null,
            i;

        if(Array.isArray(values) && values.length > 0) {
            minimum = values[0];
            for(i=0; i<values.length; i++) {
                if(values[i] < minimum) {
                    minimum = values[i];
                }
            }
        }

        return minimum;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        var unique = [],
            i;

        for(i=0; i<values.length; i++) {
            if(unique.indexOf(values[i]) < 0) {
                unique.push(values[i]);
            }
        }
        return unique;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        for(var i=1; i<=100; i++) {
            if(i%3===0 && i%5===0) {
                console.log('FizzBuzz');
            } else if(i%3===0) {
                console.log('Fizz');
            } else if(i%5===0) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
        var index;
        for(var i=0; i<fruitsToRemove.length; i++) {
            index = fruits.indexOf(fruitsToRemove[i]);
            if(index >= 0) {
                fruits = fruits.slice(0, index).concat(fruits.slice(index+1));
            }
        }
        return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        if(Array.isArray(toPush)) {
            for(var i=0; i<toPush.length; i++) {
                array.push(toPush[i]);
            }
        } else {
            array.push(toPush);
        }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        if(sourceStr.length === 0) {
            return [];
        }
        return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var s = 0;
        for(var i=0; i<arguments.length; i++) {
            s += arguments[i];
        }
        return s;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        var re = /^\s*$/;
        return re.test(sourceStr);
     }

     // write an example of a javascript closure
    function MyClosure(secret) {
        var privateProperty = 'private';

        function privateFunction() {
            return secret;
        }

        return {
            getPrivate: function () {
                return privateProperty;
            },

            answerToLife: function () {
                return privateFunction();
            }
        };
    }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
    var people = [{
        FirstName: 'Dominic',
        LastName: 'Reitman',
        City: 'Fishers',
        State: 'IN',
        Zip: '46037',
        PhoneNumbers: {
            Home: '317-555-5533',
            Mobile: '317-555-5533',
            Work: '317-555-2879'
        }
    },{
        FirstName: 'Sylvia',
        LastName: 'Reitman',
        City: 'Fishers',
        State: 'IN',
        Zip: '46037',
        PhoneNumbers: {
            Home: '317-555-1383',
            Mobile: '317-555-1383',
            Work: '317-555-4666'
        }
    },{
        FirstName: 'Andrew',
        LastName: 'Reitman',
        City: 'Fishers',
        State: 'IN',
        Zip: '46037',
        PhoneNumbers: {
            Home: '317-555-5533',
            Mobile: '',
            Work: ''
        }
    },{
        FirstName: 'Mike',
        LastName: 'Jones',
        City: 'Indianapolis',
        State: 'IN',
        Zip: '46256',
        PhoneNumbers: {
            Home: '317-555-1234',
            Mobile: '317-555-6734',
            Work: ''
        }
    }];


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
    function DataTable() {
        var columns = [],
            rows = [];

        return {
            addColumns: function() {
                var newCol = [],
                    i;
                for(i=0; i<arguments.length; i++) {
                    if(typeof arguments[i] === 'string') {
                        columns.push(arguments[i]);
                    }
                }
                return columns;
            },

            addRow: function() {
                var i;

                for(i=0; i<columns.length; i++) {
                    if(i<arguments.length && (typeof arguments[i] === 'string')) {
                        rows.push(arguments[i]);
                    } else {
                        rows.push('');
                    }
                }
            },

            getData: function() {
                var table = [],
                    index = 0,
                    row, c;

                while(index < rows.length) {
                    row = {};
                    for(c=0; c<columns.length; c++) {
                        row[columns[c]] = rows[index++];
                    }
                    table.push(row);
                }
                return table;
            }
        };
    }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
    $(document).ready(function() {
        $('#qunit-testrunner-toolbar').append('<select id="MyOptions"><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>');
        $('#qunit-testrunner-toolbar').append('<button id="MyLogButton">Log Option</button>');
        $('#MyLogButton').on('click', function() {
            console.log($('#MyOptions :selected').val());
        });
    });

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
    function getFooterCheckAllAnchor() {
        var checkAllAnchors = [];
        checkAllAnchors.push($('#check, #uncheck'));
        checkAllAnchors.push($('#footer a'));
        checkAllAnchors.push($('a.footer-anchor'));
        checkAllAnchors.push($('.footer-anchor'));
        checkAllAnchors.push($('#footer ul li:gt(4) a'));

        return checkAllAnchors;
    }

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
    $(document).ready(function() {
        var items = ['The Walking Dead', 'Game of Thrones', 'Breaking Bad', 'Better Call Saul', 'Bones'],
            i, ulist;

        ulist = $('<ul id="list1"/>');
        for(i=0; i<items.length; i++) {
            ulist.append('<li>' + items[i] + '</li>');
        }
        //$('#qunit-header').append(ulist); // Check that is was created correctly
    });

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
    $(document).ready(function() {
        var items = ['The Walking Dead', 'Game of Thrones', 'Breaking Bad', 'Better Call Saul', 'Bones'],
            i, footer, list;

        // Create our list of checkboxes
        footer = $('#footer');
        list = footer.append('<ul style="list-style:none;"/>').find('ul');

        for(i=0; i<items.length; i++) {
            list.append('<li><input type="checkbox">' + items[i] + '</input></li>');
        }

        // Create our links
        list.append('<li><a id="check" class="footer-anchor">Check All</a></li>');
        list.append('<li><a id="uncheck" class="footer-anchor">Uncheck All</a></li>');

        // Create our event handlers
        footer.find('#check').on('click', function() {
            footer.find('input').prop('checked', true);
        });
        footer.find('#uncheck').on('click', function() {
            footer.find('input').prop('checked', false);
        });
    });
