import fs from 'fs'
import satori from 'satori'

async function App() {
  const font = fs.readFileSync('./src/assets/Roboto-Medium.ttf')
  const svg = await satori(
    <div style={{ color: 'black' }}>hello, world</div>,
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
