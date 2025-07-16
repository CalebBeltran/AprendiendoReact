import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'LaMamaIncreible',
    name: 'Jose Antonio Vega S.',
    isFollowing: true
  },
  {
    userName: 'Sida10',
    name: 'Luis Gpe. Palafox',
    isFollowing: true
  },
  {
    userName: 'PoetadelaCalentura',
    name: 'Alejandro Ramos',
    isFollowing: true
  },
  {
    userName: 'TheGoodFather',
    name: 'Christian Eduardo Amparan',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}