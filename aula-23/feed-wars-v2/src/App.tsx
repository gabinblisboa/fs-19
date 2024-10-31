import { Title } from './components/Title';
import { Description } from './components/Description';
import { Button } from "./components/ui/button"

<Button variant="outline">Button</Button>

export function App() {
  
  return (
    <>
    <Title value='Primeiro' />
    <Description value="It's my first page!" />
    <Button variant={'secondary'}>Secondary</Button>
    <Button variant={'destructive'}>Destructive</Button>
    </>
  )
}

//feed-star-wars.vercel.app
//lucide.dev/icons/
