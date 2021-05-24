{
  "extends": "@tsconfig/node10/tsconfig.json",

  "compilerOptions": {
    "outDir": "./lib",
    "allowJs": true,
    "checkJs": true,
    "declaration": true,
    "declarationMap": true,
    "noImplicitAny": false,
    "resolveJsonModule": true,
    "sourceMap": true,
    "jsx": "react"
  },
  "include": ["./src/**/*"],
  "exclude": ["./src/**/*.test.js", "node_modules", "**/node_modules"]
}
