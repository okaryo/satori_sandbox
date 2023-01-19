import fs from 'fs'
import satori from 'satori'

async function App() {
  const font = fs.readFileSync('./src/assets/Roboto-Medium.ttf')
  const svg = await satori(
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        color: 'black',
        backgroundColor: 'green'
      }}
    >
      hello, world
    </div>,
    {
      width: 600,
      height: 400,
      fonts: [
        {
          name: 'Roboto',
          data: font,
          weight: 400,
          style: 'normal',
        },
      ],
    },
  )

  console.log(svg)
}

export default App
