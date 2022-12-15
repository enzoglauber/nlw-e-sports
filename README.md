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


/home/enzo/.nvm/versions/node/v14.20.1


cd web
  npm create vite@latest
  yarn start

  // tailwind
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
  npm install --save phosphor-react // icons react
  npm install @radix-ui/react-dialog @radix-ui/react-checkbox @radix-ui/react-toggle-group
  npm install --save axios


cd mobile
  npm i -g expo-cli
  npm install @react-navigation/native
  npm install @react-navigation/native-stack //estratégia de navegação
  npm i phosphor-react-native --save

  expo init esports
  expo start

  npx expo install react-native-screens --npm   
  expo install expo-font @expo-google-fonts/inter
  expo install react-native-safe-area-context
  expo install expo-linear-gradient
  expo install react-native-svg --npm 


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




set PATH /home/enzo/.nvm/versions/node/v14.20.1/bin $PATH