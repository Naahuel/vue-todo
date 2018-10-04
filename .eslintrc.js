module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:vue/essential'
    ],
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "rules": {
        "jsx" : 0,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};