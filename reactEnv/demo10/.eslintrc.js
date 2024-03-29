module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    globals: {
        "document": true,
        "navigator": true,
        "window": true,
        "node": true
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module",
        ecmaVersion: 7
    },
    parser: 'babel-eslint',
    plugins: ["react"],
    // add your custom rules here
    rules: {
        // “off” or 0 - 关闭(禁用)规则 
        // “warn” or 1 - 将规则视为一个警告（并不会导致检查不通过） 
        // “error” or 2 - 将规则视为一个错误 (退出码为1，检查不通过)
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "prefer-promise-reject-errors": "off",
        "no-undef": "off",
        /* === */
        /*  "eqeqeq": 0, */
        /* 缩进 */
        "indent": 0,
        /* 
        before:
            ()=>
                sss
         now:
            ()=>sss
        */
        "implicit-arrow-linebreak": ["error", "beside"],
        /* fn ()====>fn() */
        "func-call-spacing": [0, "never"],
        /* 
        anonymous is for anonymous function expressions (e.g. function () {}).
        named is for named function expressions (e.g. function foo () {}).
        asyncArrow is for async arrow function expressions (e.g. async () => {}). 
        */
        "space-before-function-paren": [0, {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        /* 文件最后换行：0不检查，否则必须换行（多一个空行）
         */
        'eol-last': 0,
        /* 分号 */
        /*  "semi": 1 */
        'no-console': 0

    },
    settings: {
        "import/ignore": [
            "node_modules",
            "dist"
        ]
    }
}