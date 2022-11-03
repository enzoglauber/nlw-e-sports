cd server
  npx tsc --init // to create a config file of typescript
  npm i ts-node-dev prisma @types/cors -D
  npm i @prisma/client cors

  npm i cors
  npm i @types/cors -D

  npx prisma init -h // docs 
  npx prisma init --datasource-provider SQLite
  npx prisma migrate dev
  npx prisma studio



cd web
  npm create vite@latest
  yarn start

  // tailwind
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
  npm install --save phosphor-react // icons react


cd mobile
  npm i -g expo-cli
  expo init esports
  expo start

  expo install expo-font @expo-google-fonts/inter
  expo install react-native-safe-area-context
  expo install expo-linear-gradient


### R Components Snippets

List of available Snippets. Or **⇥** means the `TAB` key.

|                    Snippet | Content                                                                       |
| -------------------------: | ----------------------------------------------------------------------------- |
|                    `rnbc →` | Create a new **React Native Basic Component**                                |
|                    `rnso →` | Create a new **React Native Stylesheet Component**                           |
|                    `rnsc →` | Create a new **React Native Component with Styled Component**                |
|                    `rnscs →` | Create a new **Styled Component File**                                      |
|                    `rnsctc →` | Get the path to **color theme props**                                      |
|                    `rnsctf →` | Get the path to **fonts theme props**                                      |
|                    `nbc →` | Create **Native Base** Component                                              |




